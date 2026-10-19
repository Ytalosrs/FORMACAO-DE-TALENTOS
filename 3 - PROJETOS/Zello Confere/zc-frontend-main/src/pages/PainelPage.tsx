import { useEffect, useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  FilePlus2,
  Loader2,
  Mail,
  Pencil,
  Send,
  Trash2,
  X,
} from 'lucide-react'
import { AppHeader } from '../components/AppHeader'
import { ResumoCadastro } from '../components/ResumoCadastro'
import { DOCUMENTOS } from '../form/options'
import { useCadastro, type Envio } from '../store/cadastroStore'

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })

export function PainelPage() {
  const { perfil, envios, ultimoEnvio, alteracoesNaoEnviadas, limparPerfil } = useCadastro()
  const navigate = useNavigate()
  const location = useLocation()
  const [modalAberto, setModalAberto] = useState(false)
  const [confirmarExclusao, setConfirmarExclusao] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  // Ao voltar do formulário recém-salvo, destaca a ação de envio
  const recemSalvo = Boolean((location.state as { salvo?: boolean } | null)?.salvo)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <div className="min-h-screen">
      <AppHeader />

      <main className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Meu cadastro</h1>
            <p className="mt-1 text-sm text-ink-300">
              Dados e documentos da sua pessoa jurídica para contratação na Zello.
            </p>
          </div>
          {perfil && (
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setConfirmarExclusao(true)} className="btn btn-danger">
                <Trash2 size={15} /> Excluir tudo
              </button>
              <Link to="/cadastro" className="btn btn-secondary">
                <Pencil size={15} /> Atualizar dados
              </Link>
              <button type="button" onClick={() => setModalAberto(true)} className="btn btn-accent">
                <Mail size={15} /> Enviar por e-mail
              </button>
            </div>
          )}
        </div>

        {!perfil ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-6">
            <StatusCard
              ultimoEnvio={ultimoEnvio}
              alteracoesNaoEnviadas={alteracoesNaoEnviadas}
              atualizadoEm={perfil.atualizadoEm}
              destaque={recemSalvo}
              onEnviar={() => setModalAberto(true)}
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
              <ResumoCadastro data={perfil.dados} onEdit={(i) => navigate(`/cadastro?etapa=${i}`)} />
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <HistoricoEnvios envios={envios} />
              </aside>
            </div>
          </div>
        )}
      </main>

      {modalAberto && (
        <EnvioModal
          onClose={() => setModalAberto(false)}
          onEnviado={(para) => {
            setModalAberto(false)
            setToast(`Cadastro enviado para ${para}`)
          }}
        />
      )}

      {confirmarExclusao && (
        <ConfirmarExclusaoModal
          onClose={() => setConfirmarExclusao(false)}
          onConfirmar={() => {
            limparPerfil()
            setConfirmarExclusao(false)
            setToast('Cadastro excluído. Você pode começar um novo quando quiser.')
          }}
        />
      )}

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-ink-700 ring-1 ring-ink-600 px-4 py-3 text-sm text-white shadow-xl"
        >
          <CheckCircle2 size={16} className="text-accent-400" /> {toast}
        </div>
      )}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="rounded-2xl border border-ink-700 bg-ink-900 p-8 text-center shadow-sm sm:p-12">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent-500/15 text-accent-400">
          <FilePlus2 size={30} />
        </span>
        <h2 className="mt-5 text-xl font-bold tracking-tight text-white">Você ainda não tem um cadastro salvo</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-300">
          Preencha os dados do seu CNPJ, anexe os documentos obrigatórios e envie para a equipe da Zello. Tudo fica
          salvo no seu perfil para atualizar e reenviar quando precisar.
        </p>
        <Link to="/cadastro" className="btn btn-accent mt-8">
          Iniciar cadastro
        </Link>
      </div>

      <aside className="rounded-2xl border border-ink-700 bg-ink-900 p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <ClipboardList size={16} className="text-accent-400" /> O que você vai precisar
        </h3>
        <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
          {DOCUMENTOS.map((d) => (
            <li key={d.key} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />
              {d.label}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink-400">Arquivos em PDF, JPG ou PNG, até 10 MB cada.</p>
      </aside>
    </div>
  )
}

interface StatusCardProps {
  ultimoEnvio: Envio | null
  alteracoesNaoEnviadas: boolean
  atualizadoEm: string
  destaque: boolean
  onEnviar: () => void
}

function StatusCard({ ultimoEnvio, alteracoesNaoEnviadas, atualizadoEm, destaque, onEnviar }: StatusCardProps) {
  const tone = !ultimoEnvio
    ? { border: 'border-accent-500/40 bg-accent-500/10', icon: <Send size={20} className="text-accent-400" />, title: 'Cadastro salvo, ainda não enviado' }
    : alteracoesNaoEnviadas
      ? { border: 'border-amber-500/40 bg-amber-500/10', icon: <AlertTriangle size={20} className="text-amber-600" />, title: 'Há alterações que ainda não foram enviadas' }
      : { border: 'border-emerald-500/40 bg-emerald-500/10', icon: <CheckCircle2 size={20} className="text-emerald-400" />, title: 'Cadastro enviado e atualizado' }

  return (
    <div className={`flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between ${tone.border} ${destaque ? 'ring-2 ring-accent-500/30' : ''}`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0">{tone.icon}</span>
        <div>
          <p className="text-sm font-semibold text-white">{tone.title}</p>
          <p className="mt-0.5 text-xs text-slate-300">
            {ultimoEnvio
              ? `Último envio para ${ultimoEnvio.para} em ${formatDateTime(ultimoEnvio.em)}.`
              : 'Envie para a equipe responsável para iniciar a análise.'}{' '}
            Atualizado em {formatDateTime(atualizadoEm)}.
          </p>
        </div>
      </div>
      {(alteracoesNaoEnviadas || !ultimoEnvio) && (
        <button type="button" onClick={onEnviar} className="btn btn-accent shrink-0">
          <Mail size={15} /> {ultimoEnvio ? 'Enviar novamente' : 'Enviar por e-mail'}
        </button>
      )}
    </div>
  )
}

function HistoricoEnvios({ envios }: { envios: Envio[] }) {
  return (
    <section className="rounded-xl border border-ink-700 bg-ink-900">
      <header className="border-b border-ink-700 px-4 py-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <Clock size={15} className="text-ink-400" /> Histórico de envios
        </h3>
      </header>
      {envios.length === 0 ? (
        <p className="px-4 py-5 text-sm italic text-ink-400">Nenhum envio realizado.</p>
      ) : (
        <ul className="divide-y divide-ink-700">
          {envios.map((e) => (
            <li key={e.em} className="px-4 py-3">
              <p className="text-sm text-slate-100">{e.para}</p>
              <p className="text-xs text-ink-300">
                {formatDateTime(e.em)} · versão {e.versao}
              </p>
              {e.mensagem && <p className="mt-1 line-clamp-2 text-xs text-ink-300">“{e.mensagem}”</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

interface EnvioModalProps {
  onClose: () => void
  onEnviado: (para: string) => void
}

function EnvioModal({ onClose, onEnviado }: EnvioModalProps) {
  const { perfil, emailDestino, registrarEnvio } = useCadastro()
  const [para, setPara] = useState(emailDestino)
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const anexos = perfil ? DOCUMENTOS.filter((d) => perfil.dados.documentos[d.key]).length : 0

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const email = para.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErro('Informe um e-mail válido')
      return
    }
    setErro(null)
    setEnviando(true)
    // TODO: chamar o backend para disparar o e-mail com os dados e anexos
    await new Promise((r) => setTimeout(r, 900))
    registrarEnvio(email, mensagem.trim() || undefined)
    setEnviando(false)
    onEnviado(email)
  }

  return (
    <div className="fixed inset-0 z-20 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="envio-titulo"
        className="w-full max-w-lg rounded-2xl bg-ink-900 p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="envio-titulo" className="text-lg font-bold tracking-tight text-white">
              Enviar cadastro por e-mail
            </h2>
            <p className="mt-1 text-sm text-ink-300">
              Os dados do cadastro e os {anexos} documentos anexados serão enviados ao destinatário.
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar" className="rounded-md p-1 text-ink-400 hover:bg-ink-700 hover:text-slate-200">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submit} noValidate className="mt-6 space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="envio-para" className="text-sm font-medium text-slate-200">
              Destinatário<span className="ml-0.5 text-red-500">*</span>
            </label>
            <input
              id="envio-para"
              type="email"
              value={para}
              onChange={(e) => setPara(e.target.value)}
              placeholder="nome@zello.tec.br"
              className={`input ${erro ? 'input-error' : ''}`}
              autoFocus
            />
            {erro ? <p className="text-xs text-red-400">{erro}</p> : <p className="text-xs text-ink-300">O último destinatário fica salvo para os próximos envios.</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="envio-msg" className="text-sm font-medium text-slate-200">
              Mensagem <span className="font-normal text-ink-400">(opcional)</span>
            </label>
            <textarea
              id="envio-msg"
              rows={3}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Ex.: Segue cadastro atualizado com a nova certidão federal."
              className="input resize-y"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancelar
            </button>
            <button type="submit" disabled={enviando} className="btn btn-accent">
              {enviando ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

interface ConfirmarExclusaoModalProps {
  onClose: () => void
  onConfirmar: () => void
}

function ConfirmarExclusaoModal({ onClose, onConfirmar }: ConfirmarExclusaoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-20 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center">
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="excluir-titulo"
        className="w-full max-w-md rounded-2xl border border-ink-700 bg-ink-900 p-6 shadow-2xl sm:p-8"
      >
        <span className="grid size-12 place-items-center rounded-full bg-red-500/15 text-red-400">
          <Trash2 size={22} />
        </span>
        <h2 id="excluir-titulo" className="mt-4 text-lg font-bold tracking-tight text-white">
          Excluir todo o cadastro?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-300">
          Todos os dados, documentos anexados e o histórico de envios serão apagados. O painel volta ao estado
          inicial, como se nada tivesse sido enviado. Esta ação não pode ser desfeita.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="btn btn-secondary" autoFocus>
            Cancelar
          </button>
          <button type="button" onClick={onConfirmar} className="btn btn-danger">
            <Trash2 size={16} /> Excluir tudo
          </button>
        </div>
      </div>
    </div>
  )
}
