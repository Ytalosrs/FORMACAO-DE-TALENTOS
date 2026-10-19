import { useEffect, useState, type ReactNode } from 'react'
import { FileCheck2, FileX2, Pencil, UserRound } from 'lucide-react'
import {
  BANCOS,
  CARGOS,
  DOCUMENTOS,
  NATUREZAS,
  PORTES,
  REGIMES,
  TIPOS_CONTA,
  TIPOS_PIX,
  labelOf,
} from '../form/options'
import type { Anexo, FormValues } from '../form/schema'
import { STEPS } from '../form/steps'
import { formatBytes, formatDate } from '../lib/format'

interface ResumoCadastroProps {
  data: FormValues
  /** Quando informado, exibe o botão "Editar" em cada seção */
  onEdit?: (stepIndex: number) => void
}

const stepIndex = (id: keyof FormValues) => STEPS.findIndex((s) => s.id === id)

function Section({
  title,
  stepIndex,
  onEdit,
  children,
}: {
  title: string
  stepIndex: number
  onEdit?: (i: number) => void
  children: ReactNode
}) {
  return (
    <section className="rounded-xl border border-ink-700 bg-ink-900">
      <header className="flex items-center justify-between border-b border-ink-700 px-4 py-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {onEdit && (
          <button type="button" onClick={() => onEdit(stepIndex)} className="btn btn-ghost -mr-2 px-2.5 py-1.5 text-xs">
            <Pencil size={13} /> Editar
          </button>
        )}
      </header>
      {children}
    </section>
  )
}

function Grid({ children }: { children: ReactNode }) {
  return <dl className="grid grid-cols-1 gap-x-6 gap-y-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">{children}</dl>
}

function Row({ label, value, wide }: { label: string; value?: string; wide?: boolean }) {
  return (
    <div className={wide ? 'sm:col-span-2 lg:col-span-3' : ''}>
      <dt className="text-xs text-ink-300">{label}</dt>
      <dd className={`text-sm ${value ? 'text-white' : 'italic text-ink-400'}`}>{value || 'Não informado'}</dd>
    </div>
  )
}

function FotoThumb({ foto }: { foto: Anexo | undefined }) {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
    if (!(foto instanceof File)) {
      setUrl(null)
      return
    }
    const u = URL.createObjectURL(foto)
    setUrl(u)
    return () => URL.revokeObjectURL(u)
  }, [foto])
  return (
    <div className="grid h-16 w-12 shrink-0 place-items-center overflow-hidden rounded-md border border-ink-700 bg-ink-800">
      {url ? (
        <img src={url} alt="Foto do representante" className="h-full w-full object-cover" />
      ) : (
        <UserRound size={18} className="text-ink-400" />
      )}
    </div>
  )
}

export function ResumoCadastro({ data, onEdit }: ResumoCadastroProps) {
  const { empresa: e, endereco: end, representante: r, bancario: b, documentos: docs } = data

  return (
    <div className="flex flex-col gap-4">
      <Section title="Dados da empresa" stepIndex={stepIndex('empresa')} onEdit={onEdit}>
        <Grid>
          <Row label="CNPJ" value={e.cnpj} />
          <Row label="Razão social" value={e.razaoSocial} />
          <Row label="Nome fantasia" value={e.nomeFantasia} />
          <Row label="Data de abertura" value={formatDate(e.dataAbertura)} />
          <Row label="Inscrição estadual" value={e.inscricaoEstadual} />
          <Row label="Inscrição municipal" value={e.inscricaoMunicipal} />
          <Row label="Natureza jurídica" value={labelOf(NATUREZAS, e.naturezaJuridica)} />
          <Row label="CNAE principal" value={e.cnaePrincipal} />
          <Row label="Regime tributário" value={labelOf(REGIMES, e.regimeTributario)} />
          <Row label="Porte" value={labelOf(PORTES, e.porte)} />
          <Row label="E-mail" value={e.email} />
          <Row label="Telefone" value={e.telefone} />
          <Row label="Site" value={e.site} />
        </Grid>
      </Section>

      <Section title="Endereço" stepIndex={stepIndex('endereco')} onEdit={onEdit}>
        <Grid>
          <Row label="CEP" value={end.cep} />
          <Row label="Endereço" value={[end.logradouro, end.numero, end.complemento].filter(Boolean).join(', ')} />
          <Row label="Bairro" value={end.bairro} />
          <Row label="Cidade / UF" value={[end.cidade, end.uf].filter(Boolean).join(' / ')} />
        </Grid>
      </Section>

      <Section title="Representante legal" stepIndex={stepIndex('representante')} onEdit={onEdit}>
        <div className="flex items-center gap-3 border-b border-ink-700 px-4 py-3">
          <FotoThumb foto={r.foto} />
          <div>
            <p className="text-xs text-ink-300">Foto 3x4</p>
            <p className={`text-sm ${r.foto ? 'text-white' : 'italic text-ink-400'}`}>
              {r.foto ? r.foto.name : 'Não enviada'}
            </p>
          </div>
        </div>
        <Grid>
          <Row label="Nome" value={r.nome} />
          <Row label="CPF" value={r.cpf} />
          <Row label="RG" value={r.rg} />
          <Row label="Data de nascimento" value={formatDate(r.dataNascimento)} />
          <Row label="Cargo" value={labelOf(CARGOS, r.cargo)} />
          <Row label="E-mail" value={r.email} />
          <Row label="Telefone" value={r.telefone} />
        </Grid>
      </Section>

      <Section title="Dados bancários" stepIndex={stepIndex('bancario')} onEdit={onEdit}>
        <Grid>
          <Row label="Banco" value={labelOf(BANCOS, b.banco)} />
          <Row label="Agência" value={b.agencia} />
          <Row label="Conta" value={b.conta} />
          <Row label="Tipo de conta" value={labelOf(TIPOS_CONTA, b.tipoConta)} />
          <Row label="PIX" value={b.tipoPix ? `${labelOf(TIPOS_PIX, b.tipoPix)}: ${b.chavePix}` : ''} />
        </Grid>
      </Section>

      <Section title="Documentos" stepIndex={stepIndex('documentos')} onEdit={onEdit}>
        <ul className="divide-y divide-ink-700">
          {DOCUMENTOS.map((doc) => {
            const file = docs[doc.key]
            return (
              <li key={doc.key} className="flex items-center gap-3 px-4 py-2.5">
                {file ? (
                  <FileCheck2 size={18} className="shrink-0 text-accent-400" />
                ) : (
                  <FileX2 size={18} className="shrink-0 text-red-500" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-100">{doc.label}</p>
                  <p className="truncate text-xs text-ink-300">
                    {file ? `${file.name} · ${formatBytes(file.size)}` : 'Não anexado'}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </Section>
    </div>
  )
}
