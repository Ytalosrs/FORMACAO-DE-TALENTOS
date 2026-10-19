import type { ReactNode } from 'react'
import { Check, Info } from 'lucide-react'
import { STEPS } from '../form/steps'

interface StepperProps {
  current: number
  maxVisited: number
  onSelect: (index: number) => void
}

export function Stepper({ current, maxVisited, onSelect }: StepperProps) {
  const pct = Math.round(((current + 1) / STEPS.length) * 100)
  return (
    <>
      {/* Mobile */}
      <div className="rounded-xl border border-ink-700 bg-ink-900 p-4 shadow-sm lg:hidden">
        <div className="flex items-center justify-between text-xs font-medium text-ink-300">
          <span>
            Etapa {current + 1} de {STEPS.length}
          </span>
          <span>{pct}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-700">
          <div className="h-full rounded-full bg-accent-500 transition-all" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-3 text-sm font-semibold text-white">{STEPS[current].title}</p>
        <p className="text-xs text-ink-300">{STEPS[current].description}</p>
      </div>

      {/* Desktop */}
      <nav aria-label="Etapas do cadastro" className="sticky top-24 hidden lg:block">
        <ol>
          {STEPS.map((step, i) => {
            const state = i < current ? 'done' : i === current ? 'current' : 'pending'
            const clickable = i <= maxVisited && i !== current
            const Icon = step.icon
            return (
              <li key={step.id} className="relative pb-7 last:pb-0">
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute left-[17px] top-10 h-[calc(100%-2rem)] w-0.5 rounded ${
                      i < current ? 'bg-accent-500' : 'bg-ink-700'
                    }`}
                  />
                )}
                <button
                  type="button"
                  disabled={!clickable}
                  onClick={() => onSelect(i)}
                  aria-current={state === 'current' ? 'step' : undefined}
                  className="group flex w-full items-start gap-3 text-left disabled:cursor-default"
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border-2 transition ${
                      state === 'done'
                        ? 'border-accent-500 bg-accent-500 text-white'
                        : state === 'current'
                          ? 'border-accent-500 bg-accent-500 text-white shadow-md shadow-accent-500/25'
                          : 'border-ink-700 bg-ink-900 text-ink-400'
                    } ${clickable ? 'group-hover:border-accent-400' : ''}`}
                  >
                    {state === 'done' ? <Check size={16} strokeWidth={3} /> : <Icon size={16} />}
                  </span>
                  <span className="pt-1.5">
                    <span
                      className={`block text-sm font-semibold ${
                        state === 'pending' ? 'text-ink-300' : 'text-white'
                      } ${clickable ? 'group-hover:text-accent-400' : ''}`}
                    >
                      {step.title}
                    </span>
                    <span className="block text-xs text-ink-300">{step.description}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export function StepHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="mb-6 border-b border-ink-700 pb-5">
      <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
      <p className="mt-1 text-sm text-ink-300">{description}</p>
    </header>
  )
}

export function Fieldset({ legend, children }: { legend?: string; children: ReactNode }) {
  return (
    <fieldset className="mb-7 last:mb-0">
      {legend && (
        <legend className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent-400">{legend}</legend>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">{children}</div>
    </fieldset>
  )
}

export function Callout({ children, tone = 'info' }: { children: ReactNode; tone?: 'info' | 'warning' }) {
  const cls =
    tone === 'warning'
      ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
      : 'border-brand-500/40 bg-brand-500/10 text-brand-200'
  return (
    <div className={`mb-6 flex gap-3 rounded-xl border px-4 py-3 text-sm ${cls}`}>
      <Info size={18} className="mt-0.5 shrink-0" />
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}
