import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { Logo } from './Logo'
import { USUARIO_ATUAL, iniciais } from '../store/usuario'

interface AppHeaderProps {
  /** Conteúdo extra à direita (antes do perfil) */
  right?: ReactNode
}

export function AppHeader({ right }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-ink-700 bg-ink-950/80 backdrop-blur">
      <div className="flex h-[66px] items-center justify-between gap-4 px-6 sm:px-10">
        <Link to="/inicio" className="shrink-0">
          <Logo subtitle="Zello" />
        </Link>

        <div className="flex items-center gap-2">
          {right}

          <NavLink
            to="/perfil"
            title="Ver perfil"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-3.5 transition ${
                isActive
                  ? 'border-accent-500/60 bg-ink-800'
                  : 'border-ink-700 bg-ink-900 hover:border-ink-600 hover:bg-ink-800'
              }`
            }
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-500 text-xs font-bold text-white">
              {iniciais(USUARIO_ATUAL.nome)}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block max-w-[260px] truncate text-sm font-semibold text-white">{USUARIO_ATUAL.nome}</span>
            </span>
            <ChevronDown size={16} className="hidden text-ink-300 sm:block" />
          </NavLink>

        </div>
      </div>
    </header>
  )
}
