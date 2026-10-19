import { useState, type KeyboardEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, Save } from 'lucide-react'
import { AppHeader } from '../components/AppHeader'
import { Stepper } from '../components/layout'
import { VALIDACAO_ATIVA } from '../form/config'
import { defaultValues, formSchema, type FormValues } from '../form/schema'
import { STEPS } from '../form/steps'
import { hydrateArquivos, useCadastro } from '../store/cadastroStore'
import { EmpresaStep } from '../steps/EmpresaStep'
import { EnderecoStep } from '../steps/EnderecoStep'
import { RepresentanteStep } from '../steps/RepresentanteStep'
import { BancarioStep } from '../steps/BancarioStep'
import { DocumentosStep } from '../steps/DocumentosStep'
import { RevisaoStep } from '../steps/RevisaoStep'

const LAST = STEPS.length - 1

export function CadastroPage() {
  const { perfil, salvarCadastro } = useCadastro()
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const editando = !!perfil
  const etapaInicial = Math.min(Math.max(Number(params.get('etapa') ?? 0) || 0, 0), LAST)

  const methods = useForm<FormValues>({
    // Com a validação desligada, nenhum campo é obrigatório
    resolver: VALIDACAO_ATIVA ? zodResolver(formSchema) : undefined,
    // Ao atualizar, reabre com os dados salvos (e os arquivos desta sessão, se houver)
    defaultValues: perfil ? { ...hydrateArquivos(perfil.dados), aceite: false } : defaultValues,
    mode: 'onTouched',
  })
  // O aceite da declaração é sempre obrigatório para salvar, mesmo com a validação desligada
  const aceite = useWatch({ control: methods.control, name: 'aceite' })
  const [step, setStep] = useState(etapaInicial)
  // Quem já tem cadastro (ou sem validação) pode navegar livremente entre as etapas
  const [maxVisited, setMaxVisited] = useState(editando || !VALIDACAO_ATIVA ? LAST : etapaInicial)

  const goTo = (i: number) => {
    setStep(i)
    setMaxVisited((m) => Math.max(m, i))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const next = async () => {
    if (!VALIDACAO_ATIVA) return goTo(step + 1)
    const ok = await methods.trigger(STEPS[step].id, { shouldFocus: true })
    if (ok) goTo(step + 1)
  }

  const onSubmit = (data: FormValues) => {
    if (!data.aceite) return
    salvarCadastro(data)
    navigate('/inicio', { state: { salvo: true } })
  }

  // Evita que Enter em um input avance/envie o formulário fora da última etapa
  const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && step < LAST && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
      e.preventDefault()
    }
  }

  return (
    <div className="min-h-screen">
      <AppHeader />

      <main className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {editando ? 'Atualizar cadastro' : 'Novo cadastro'}
            </h1>
            <p className="mt-1 text-sm text-ink-300">
              {editando
                ? 'Altere o que for necessário e salve. Depois envie a versão atualizada por e-mail.'
                : 'Preencha os dados do CNPJ e anexe os documentos obrigatórios.'}
            </p>
          </div>
          <Link to="/inicio" className="btn btn-ghost px-3 py-2 text-xs">
            <ArrowLeft size={14} /> Voltar ao painel
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
          <aside>
            <Stepper current={step} maxVisited={maxVisited} onSelect={goTo} />
          </aside>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} onKeyDown={onKeyDown} noValidate>
              <div className="rounded-2xl border border-ink-700 bg-ink-900 shadow-sm">
                <div className="p-5 sm:p-8">
                  {step === 0 && <EmpresaStep />}
                  {step === 1 && <EnderecoStep />}
                  {step === 2 && <RepresentanteStep />}
                  {step === 3 && <BancarioStep />}
                  {step === 4 && <DocumentosStep />}
                  {step === 5 && <RevisaoStep onEdit={goTo} />}
                </div>

                <footer className="flex items-center justify-between gap-3 border-t border-ink-700 px-5 py-4 sm:px-8">
                  <button
                    type="button"
                    onClick={() => goTo(step - 1)}
                    disabled={step === 0}
                    className="btn btn-secondary"
                  >
                    <ArrowLeft size={16} /> Voltar
                  </button>

                  {step < LAST ? (
                    <button type="button" onClick={next} className="btn btn-primary">
                      Continuar <ArrowRight size={16} />
                    </button>
                  ) : (
                    <div className="flex flex-col items-end gap-1.5">
                      <button
                        type="submit"
                        disabled={!aceite || methods.formState.isSubmitting}
                        title={aceite ? undefined : 'Marque a declaração para salvar'}
                        className="btn btn-accent"
                      >
                        <Save size={16} /> {editando ? 'Salvar alterações' : 'Salvar cadastro'}
                      </button>
                      {!aceite && (
                        <span className="text-xs text-ink-400">Marque a declaração acima para salvar</span>
                      )}
                    </div>
                  )}
                </footer>
              </div>

              <p className="mt-4 text-center text-xs text-ink-400">
                Campos marcados com <span className="text-red-500">*</span> são obrigatórios.
              </p>
            </form>
          </FormProvider>
        </div>
      </main>
    </div>
  )
}
