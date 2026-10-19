import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, CheckCircle2, Clock, FileText, LogOut, Mail, Pencil, Send, UserRound } from 'lucide-react'
import { AppHeader } from '../components/AppHeader'
import { DOCUMENTOS } from '../form/options'
import { useCadastro } from '../store/cadastroStore'
import { USUARIO_ATUAL, iniciais } from '../store/usuario'

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })

function Item({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-xs text-ink-300">{label}</dt>
      <dd className={`text-sm ${value ? 'text-white' : 'italic text-ink-400'}`}>{value || 'Não informado'}</dd>
    </div>
  )
}

export function PerfilPage() {
  const { perfil, envios, ultimoEnvio, alteracoesNaoEnviadas } = useCadastro()
  const empresa = perfil?.dados.empresa
  const representante = perfil?.dados.representante
  const anexados = perfil ? DOCUMENTOS.filter((d) => perfil.dados.documentos[d.key]).length : 0

  const status = !perfil
    ? { icon: <Clock size={16} className="text-ink-400" />, texto: 'Nenhum cadastro salvo', cor: 'text-ink-300' }
    : !ultimoEnvio
      ? { icon: <Send size={16} className="text-accent-400" />, texto: 'Cadastro salvo, ainda não enviado', cor: 'text-accent-300' }
      : alteracoesNaoEnviadas
        ? { icon: <Clock size={16} className="text-amber-400" />, texto: 'Alterações pendentes de envio', cor: 'text-amber-200' }
        : { icon: <CheckCircle2 size={16} className="text-emerald-400" />, texto: 'Cadastro enviado e atualizado', cor: 'text-emerald-300' }

  return (
    <div className="min-h-screen">
      <AppHeader />

      <main className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Meu perfil</h1>
            <p className="mt-1 text-sm text-ink-300">Seus dados de acesso e a situação do cadastro da sua empresa.</p>
          </div>
          <Link to="/inicio" className="btn btn-ghost px-3 py-2 text-xs">
            <ArrowLeft size={14} /> Voltar ao painel
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          {/* Cartão do usuário */}
          <section className="rounded-2xl border border-ink-700 bg-ink-900 p-6">
            <div className="flex items-center gap-4">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-accent-500 text-xl font-bold text-white shadow-lg shadow-accent-500/30">
                {iniciais(USUARIO_ATUAL.nome)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-white">{USUARIO_ATUAL.nome}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-4 border-t border-ink-700 pt-5">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-ink-400" />
                <Item label="E-mail de acesso" value={USUARIO_ATUAL.email} />
              </div>
              <div className="flex items-start gap-3">
                <UserRound size={16} className="mt-0.5 shrink-0 text-ink-400" />
                <Item label="Telefone" value={USUARIO_ATUAL.telefone} />
              </div>
            </dl>

            <div className={`mt-6 flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm ${status.cor}`}>
              {status.icon} {status.texto}
            </div>

            <Link to="/" className="btn btn-secondary mt-4 w-full">
              <LogOut size={15} /> Sair da conta
            </Link>
          </section>

          {/* Empresa vinculada */}
          <div className="flex flex-col gap-6">
            <section className="rounded-2xl border border-ink-700 bg-ink-900">
              <header className="flex items-center justify-between border-b border-ink-700 px-5 py-4">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Building2 size={16} className="text-accent-400" /> Empresa vinculada
                </h2>
                {perfil && (
                  <Link to="/cadastro" className="btn btn-ghost -mr-2 px-2.5 py-1.5 text-xs">
                    <Pencil size={13} /> Atualizar
                  </Link>
                )}
              </header>

              {!perfil ? (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-ink-300">Você ainda não cadastrou sua empresa.</p>
                  <Link to="/cadastro" className="btn btn-accent mt-4">
                    Iniciar cadastro
                  </Link>
                </div>
              ) : (
                <dl className="grid grid-cols-1 gap-x-6 gap-y-4 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3">
                  <Item label="Razão social" value={empresa?.razaoSocial} />
                  <Item label="CNPJ" value={empresa?.cnpj} />
                  <Item label="Nome fantasia" value={empresa?.nomeFantasia} />
                  <Item label="Representante legal" value={representante?.nome} />
                  <Item label="E-mail da empresa" value={empresa?.email} />
                  <Item label="Telefone" value={empresa?.telefone} />
                </dl>
              )}
            </section>

            {perfil && (
              <section className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-ink-700 bg-ink-900 p-5">
                  <p className="flex items-center gap-2 text-xs text-ink-300">
                    <FileText size={14} /> Documentos anexados
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {anexados}
                    <span className="text-sm font-normal text-ink-400"> / {DOCUMENTOS.length}</span>
                  </p>
                </div>
                <div className="rounded-2xl border border-ink-700 bg-ink-900 p-5">
                  <p className="flex items-center gap-2 text-xs text-ink-300">
                    <Send size={14} /> Envios realizados
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">{envios.length}</p>
                </div>
                <div className="rounded-2xl border border-ink-700 bg-ink-900 p-5">
                  <p className="flex items-center gap-2 text-xs text-ink-300">
                    <Clock size={14} /> Última atualização
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{formatDateTime(perfil.atualizadoEm)}</p>
                  {ultimoEnvio && (
                    <p className="mt-1 text-xs text-ink-400">Último envio: {formatDateTime(ultimoEnvio.em)}</p>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
