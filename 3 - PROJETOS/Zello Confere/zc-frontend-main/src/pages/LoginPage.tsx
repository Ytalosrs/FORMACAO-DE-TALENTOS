import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react'
import { Logo } from '../components/Logo'

// Sem autenticação por enquanto: os campos são opcionais e "Entrar" leva direto ao painel.
// Quando o backend existir, basta voltar a exigir e-mail/senha aqui e chamar a API.
const loginSchema = z.object({
  email: z.string().trim(),
  senha: z.string(),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', senha: '' },
  })

  const onSubmit = (values: LoginValues) => {
    if (values.email) console.info('Login', values.email)
    navigate('/inicio')
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950 text-white">
      {/* Fundo com brilho sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,91,60,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(30,90,150,0.12),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent"
      />

      <header className="relative px-6 py-6 sm:px-14 sm:py-8">
        <Logo tone="dark" subtitle="Zello" />
      </header>

      <main className="relative flex flex-1 items-center justify-center px-6 pb-16 sm:px-14">
          {/* Card de login */}
          <section className="w-full max-w-md">
            <div className="rounded-2xl border border-ink-700 bg-ink-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur sm:p-10">
              <h2 className="text-3xl font-bold tracking-tight">Entrar</h2>
              <p className="mt-1.5 text-sm text-ink-300">Acesse o painel com suas credenciais</p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-5">
                <div>
                  <label htmlFor="login-email" className="mb-2 block text-sm font-semibold text-white">
                    E-mail
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="usuario@zello.tec.br"
                    aria-invalid={!!errors.email}
                    className={`input-dark ${errors.email ? 'input-dark-error' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400" role="alert">
                      <AlertCircle size={13} /> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="login-senha" className="mb-2 block text-sm font-semibold text-white">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      id="login-senha"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      aria-invalid={!!errors.senha}
                      className={`input-dark pr-11 ${errors.senha ? 'input-dark-error' : ''}`}
                      {...register('senha')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      className="absolute inset-y-0 right-0 grid w-11 place-items-center text-ink-400 transition hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.senha && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400" role="alert">
                      <AlertCircle size={13} /> {errors.senha.message}
                    </p>
                  )}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-accent w-full py-3">
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
                  Entrar
                </button>

                <div className="pt-1 text-center">
                  <Link to="/recuperar-senha" className="text-xs text-ink-300 transition hover:text-white">
                    Esqueci minha senha
                  </Link>
                </div>

                <Link to="/criar-conta" className="btn btn-outline-accent w-full py-3">
                  Criar conta
                </Link>
              </form>
            </div>
          </section>
      </main>

      <footer className="relative px-6 pb-8 text-[11px] leading-none text-ink-300 sm:px-14">
        <p>Suporte</p>
        <p className="mt-3">Dev: taoa.araujo@zello.tec.br</p>
        <p className="mt-5 text-ink-400">© {new Date().getFullYear()} By Martinelli</p>
      </footer>
    </div>
  )
}
