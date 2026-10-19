import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DOCUMENTOS, type DocumentoKey } from '../form/options'
import { isStoredFile, type Anexo, type FormValues, type StoredFileMeta } from '../form/schema'

export const EMAIL_DESTINO_PADRAO = 'taoa.araujo@zello.tec.br'

export interface Envio {
  para: string
  em: string // ISO
  versao: number
  mensagem?: string
}

export interface Perfil {
  dados: FormValues
  atualizadoEm: string // ISO
  versao: number
}

interface PersistedState {
  perfil: Perfil | null
  envios: Envio[]
  emailDestino: string
}

interface CadastroContextValue extends PersistedState {
  /** Há alterações salvas que ainda não foram enviadas por e-mail */
  alteracoesNaoEnviadas: boolean
  ultimoEnvio: Envio | null
  salvarCadastro: (dados: FormValues) => void
  registrarEnvio: (para: string, mensagem?: string) => void
  setEmailDestino: (email: string) => void
  limparPerfil: () => void
}

const STORAGE_KEY = 'zello-confere:perfil'

/** Arquivos anexados nesta sessão (não cabem no localStorage; virão do backend depois) */
const arquivosSessao = new Map<DocumentoKey | 'representante.foto', File>()

function toStorableAnexo(key: DocumentoKey | 'representante.foto', v: Anexo): Anexo {
  if (v instanceof File) {
    arquivosSessao.set(key, v)
    const meta: StoredFileMeta = { name: v.name, size: v.size, type: v.type, stored: true }
    return meta
  }
  if (isStoredFile(v)) return v
  arquivosSessao.delete(key)
  return null
}

function toStorable(dados: FormValues): FormValues {
  const documentos = {} as Record<DocumentoKey, Anexo>
  for (const { key } of DOCUMENTOS) documentos[key] = toStorableAnexo(key, dados.documentos[key])
  const representante = { ...dados.representante, foto: toStorableAnexo('representante.foto', dados.representante.foto) }
  return { ...dados, representante, documentos }
}

/** Recoloca os objetos File da sessão quando disponíveis (para reenviar sem anexar de novo) */
export function hydrateArquivos(dados: FormValues): FormValues {
  const documentos = { ...dados.documentos }
  for (const { key } of DOCUMENTOS) {
    const file = arquivosSessao.get(key)
    if (file) documentos[key] = file
  }
  const foto = arquivosSessao.get('representante.foto')
  const representante = foto ? { ...dados.representante, foto } : dados.representante
  return { ...dados, representante, documentos }
}

function loadState(): PersistedState {
  const fallback: PersistedState = { perfil: null, envios: [], emailDestino: EMAIL_DESTINO_PADRAO }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return fallback
    const parsed = JSON.parse(raw) as Partial<PersistedState>
    return {
      perfil: parsed.perfil ?? null,
      envios: parsed.envios ?? [],
      emailDestino: parsed.emailDestino || EMAIL_DESTINO_PADRAO,
    }
  } catch {
    return fallback
  }
}

const CadastroContext = createContext<CadastroContextValue | null>(null)

export function CadastroProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* armazenamento indisponível: segue só em memória */
    }
  }, [state])

  const salvarCadastro = useCallback((dados: FormValues) => {
    setState((s) => ({
      ...s,
      perfil: {
        dados: toStorable(dados),
        atualizadoEm: new Date().toISOString(),
        versao: (s.perfil?.versao ?? 0) + 1,
      },
    }))
  }, [])

  const registrarEnvio = useCallback((para: string, mensagem?: string) => {
    setState((s) => ({
      ...s,
      emailDestino: para,
      envios: [{ para, em: new Date().toISOString(), versao: s.perfil?.versao ?? 0, mensagem }, ...s.envios],
    }))
  }, [])

  const setEmailDestino = useCallback((emailDestino: string) => setState((s) => ({ ...s, emailDestino })), [])

  const limparPerfil = useCallback(() => {
    arquivosSessao.clear()
    setState({ perfil: null, envios: [], emailDestino: EMAIL_DESTINO_PADRAO })
  }, [])

  const value = useMemo<CadastroContextValue>(() => {
    const ultimoEnvio = state.envios[0] ?? null
    const alteracoesNaoEnviadas = !!state.perfil && (!ultimoEnvio || ultimoEnvio.versao < state.perfil.versao)
    return { ...state, ultimoEnvio, alteracoesNaoEnviadas, salvarCadastro, registrarEnvio, setEmailDestino, limparPerfil }
  }, [state, salvarCadastro, registrarEnvio, setEmailDestino, limparPerfil])

  return <CadastroContext.Provider value={value}>{children}</CadastroContext.Provider>
}

export function useCadastro() {
  const ctx = useContext(CadastroContext)
  if (!ctx) throw new Error('useCadastro deve ser usado dentro de CadastroProvider')
  return ctx
}
