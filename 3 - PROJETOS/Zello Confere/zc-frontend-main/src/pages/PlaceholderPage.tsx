import { Link } from 'react-router-dom'
import { ArrowLeft, Construction } from 'lucide-react'
import { Logo } from '../components/Logo'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-white">
      <header className="px-6 py-6 sm:px-14 sm:py-8">
        <Logo tone="dark" subtitle="Zello" />
      </header>
      <main className="flex flex-1 items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md rounded-2xl border border-ink-700 bg-ink-900/80 p-10 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent-500/15 text-accent-400">
            <Construction size={28} />
          </span>
          <h1 className="mt-5 text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-ink-300">Esta tela ainda será definida.</p>
          <Link to="/" className="btn btn-outline-accent mt-8 w-full">
            <ArrowLeft size={16} /> Voltar para o login
          </Link>
        </div>
      </main>
    </div>
  )
}
