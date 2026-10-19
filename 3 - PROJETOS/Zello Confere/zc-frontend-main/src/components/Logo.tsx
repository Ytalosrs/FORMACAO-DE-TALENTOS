interface LogoProps {
  /** Mantido por compatibilidade: o app inteiro usa o tema escuro */
  tone?: 'light' | 'dark'
  subtitle?: string
  size?: 'sm' | 'md'
}

/** Marca Zello: imagem oficial em public/logo.png */
export function ZelloMark({ className = 'size-10' }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      aria-hidden="true"
      className={`shrink-0 rounded-xl object-cover shadow-lg shadow-accent-500/30 ${className}`}
    />
  )
}

export function Logo({ subtitle, size = 'md' }: LogoProps) {
  const title = 'text-white'
  const sub = 'text-ink-300'
  return (
    <div className="flex items-center gap-3">
      <ZelloMark className={size === 'sm' ? 'size-8' : 'size-11'} />
      <div className="flex flex-col justify-center">
        <p className={`font-sans font-bold leading-tight tracking-tight ${title} ${size === 'sm' ? 'text-base' : 'text-xl'}`}>
          Zello Confere
        </p>
        {subtitle && <p className={`leading-tight ${sub} ${size === 'sm' ? 'text-[11px]' : 'text-[13px]'}`}>{subtitle}</p>}
      </div>
    </div>
  )
}
