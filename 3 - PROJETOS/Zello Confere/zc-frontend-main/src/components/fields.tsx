import { useEffect, useState, type ReactNode } from 'react'
import { Controller, useFormContext, type FieldPath } from 'react-hook-form'
import { AlertCircle, FileCheck2, UploadCloud, UserRound, X } from 'lucide-react'
import { isStoredFile, type FormValues, type StoredFileMeta } from '../form/schema'
import type { Option } from '../form/options'
import { formatBytes } from '../lib/format'

export type FieldName = FieldPath<FormValues>

const idOf = (name: string) => `f-${name.replace(/\./g, '-')}`

export function useFieldError(name: string): string | undefined {
  const {
    formState: { errors },
  } = useFormContext<FormValues>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = name.split('.').reduce<any>((acc, key) => (acc ? acc[key] : undefined), errors)
  return typeof err?.message === 'string' ? err.message : undefined
}

interface WrapProps {
  label: string
  htmlFor?: string
  required?: boolean
  hint?: string
  error?: string
  className?: string
  children: ReactNode
}

export function FieldWrap({ label, htmlFor, required, hint, error, className = '', children }: WrapProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-200">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {error ? (
        <p className="flex items-center gap-1 text-xs text-red-400" role="alert">
          <AlertCircle size={13} /> {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-ink-300">{hint}</p>
      ) : null}
    </div>
  )
}

interface TextFieldProps {
  name: FieldName
  label: string
  required?: boolean
  hint?: string
  placeholder?: string
  type?: 'text' | 'email' | 'date' | 'url' | 'tel'
  mask?: (v: string) => string
  className?: string
  autoComplete?: string
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'url' | 'decimal'
  maxLength?: number
  disabled?: boolean
  onBlurValue?: (value: string) => void
}

export function TextField({
  name,
  label,
  required,
  hint,
  placeholder,
  type = 'text',
  mask,
  className,
  autoComplete,
  inputMode,
  maxLength,
  disabled,
  onBlurValue,
}: TextFieldProps) {
  const { control } = useFormContext<FormValues>()
  const error = useFieldError(name)
  const id = idOf(name)
  return (
    <FieldWrap label={label} htmlFor={id} required={required} hint={hint} error={error} className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={id}
            ref={field.ref}
            name={field.name}
            type={type}
            value={typeof field.value === 'string' ? field.value : ''}
            onChange={(e) => field.onChange(mask ? mask(e.target.value) : e.target.value)}
            onBlur={() => {
              field.onBlur()
              onBlurValue?.(typeof field.value === 'string' ? field.value : '')
            }}
            placeholder={placeholder}
            autoComplete={autoComplete}
            inputMode={inputMode}
            maxLength={maxLength}
            disabled={disabled}
            aria-invalid={!!error}
            className={`input ${error ? 'input-error' : ''}`}
          />
        )}
      />
    </FieldWrap>
  )
}

interface SelectFieldProps {
  name: FieldName
  label: string
  options: Option[]
  required?: boolean
  hint?: string
  placeholder?: string
  className?: string
  allowEmpty?: boolean
}

export function SelectField({
  name,
  label,
  options,
  required,
  hint,
  placeholder = 'Selecione…',
  className,
  allowEmpty,
}: SelectFieldProps) {
  const { control } = useFormContext<FormValues>()
  const error = useFieldError(name)
  const id = idOf(name)
  return (
    <FieldWrap label={label} htmlFor={id} required={required} hint={hint} error={error} className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            id={id}
            ref={field.ref}
            name={field.name}
            value={typeof field.value === 'string' ? field.value : ''}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            aria-invalid={!!error}
            className={`input appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239aa1b3%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px_16px] bg-[right_0.75rem_center] bg-no-repeat pr-9 ${
              error ? 'input-error' : ''
            } ${field.value ? '' : 'text-ink-400'}`}
          >
            <option value="" disabled={!allowEmpty}>
              {placeholder}
            </option>
            {options.map((o) => (
              <option key={o.value} value={o.value} className="text-white">
                {o.label}
              </option>
            ))}
          </select>
        )}
      />
    </FieldWrap>
  )
}

interface TextAreaFieldProps {
  name: FieldName
  label: string
  required?: boolean
  hint?: string
  placeholder?: string
  rows?: number
  className?: string
}

export function TextAreaField({ name, label, required, hint, placeholder, rows = 4, className }: TextAreaFieldProps) {
  const { control } = useFormContext<FormValues>()
  const error = useFieldError(name)
  const id = idOf(name)
  return (
    <FieldWrap label={label} htmlFor={id} required={required} hint={hint} error={error} className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            id={id}
            ref={field.ref}
            name={field.name}
            rows={rows}
            value={typeof field.value === 'string' ? field.value : ''}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            placeholder={placeholder}
            aria-invalid={!!error}
            className={`input resize-y ${error ? 'input-error' : ''}`}
          />
        )}
      />
    </FieldWrap>
  )
}

interface FileFieldProps {
  name: FieldName
  label: string
  description?: string
  required?: boolean
}

export function FileField({ name, label, description, required }: FileFieldProps) {
  const { control } = useFormContext<FormValues>()
  const error = useFieldError(name)
  const id = idOf(name)
  const [dragging, setDragging] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const file =
          field.value instanceof File || isStoredFile(field.value) ? (field.value as File | StoredFileMeta) : null
        const stored = isStoredFile(field.value)
        const border = error
          ? 'border-red-500/50 bg-red-500/10'
          : file
            ? 'border-accent-500/50 bg-accent-500/5'
            : dragging
              ? 'border-accent-400 bg-ink-800'
              : 'border-ink-700 bg-ink-900'
        return (
          <div
            className={`rounded-xl border p-4 transition ${border}`}
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              const dropped = e.dataTransfer.files?.[0]
              if (dropped) field.onChange(dropped)
            }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-100">
                  {label}
                  {required && <span className="ml-0.5 text-red-500">*</span>}
                </p>
                {description && <p className="mt-0.5 text-xs text-ink-300">{description}</p>}
              </div>

              {file ? (
                <div className="flex min-w-0 items-center gap-2 rounded-lg border border-ink-700 bg-ink-900 px-3 py-2 sm:w-72 sm:shrink-0">
                  <FileCheck2 className="shrink-0 text-accent-400" size={18} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-slate-100">{file.name}</p>
                    <p className="whitespace-nowrap text-xs text-ink-300">
                      {formatBytes(file.size)}
                      {stored && <span className="ml-1.5 text-accent-400">· salvo no perfil</span>}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => field.onChange(null)}
                    className="rounded-md p-1 text-ink-400 hover:bg-ink-700 hover:text-slate-200"
                    aria-label={`Remover ${label}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor={id}
                  className="btn btn-secondary shrink-0 cursor-pointer"
                >
                  <UploadCloud size={16} /> Selecionar arquivo
                  <input
                    id={id}
                    ref={field.ref}
                    name={field.name}
                    type="file"
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                    onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
                    onBlur={field.onBlur}
                  />
                </label>
              )}
            </div>
            {error ? (
              <p className="mt-2 flex items-center gap-1 text-xs text-red-400" role="alert">
                <AlertCircle size={13} /> {error}
              </p>
            ) : !file ? (
              <p className="mt-2 text-xs text-ink-400">Arraste o arquivo aqui ou selecione · PDF, JPG ou PNG · até 10 MB</p>
            ) : null}
          </div>
        )
      }}
    />
  )
}

interface CheckboxFieldProps {
  name: FieldName
  label: ReactNode
  className?: string
}

export function CheckboxField({ name, label, className = '' }: CheckboxFieldProps) {
  const { control } = useFormContext<FormValues>()
  const error = useFieldError(name)
  const id = idOf(name)
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label
            htmlFor={id}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
              error ? 'border-red-500/50 bg-red-500/10' : field.value ? 'border-accent-500/50 bg-accent-500/5' : 'border-ink-700 bg-ink-900 hover:bg-ink-800'
            }`}
          >
            <input
              id={id}
              ref={field.ref}
              name={field.name}
              type="checkbox"
              checked={field.value === true}
              onChange={(e) => field.onChange(e.target.checked)}
              onBlur={field.onBlur}
              className="mt-0.5 size-4 shrink-0 rounded border-ink-600 accent-accent-500"
            />
            <span className="text-sm leading-relaxed text-slate-200">{label}</span>
          </label>
        )}
      />
      {error && (
        <p className="mt-2 flex items-center gap-1 text-xs text-red-400" role="alert">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  )
}

interface PhotoFieldProps {
  name: FieldName
  label: string
  hint?: string
  required?: boolean
  className?: string
}

/** Foto de rosto no formato 3x4, com pré-visualização */
export function PhotoField({ name, label, hint, required, className = '' }: PhotoFieldProps) {
  const { control } = useFormContext<FormValues>()
  const error = useFieldError(name)
  const id = idOf(name)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const file = field.value instanceof File ? field.value : null
        const stored = isStoredFile(field.value)
        return (
          <div className={`flex flex-col gap-1.5 ${className}`}>
            <span className="text-sm font-medium text-slate-200">
              {label}
              {required && <span className="ml-0.5 text-red-500">*</span>}
            </span>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <PhotoPreview file={file} stored={stored} error={!!error} />

              <div className="flex flex-col gap-2 text-sm">
                <p className="text-xs leading-relaxed text-ink-300">
                  Rosto centralizado, fundo neutro, sem óculos escuros ou boné. Proporção 3x4 (retrato).
                </p>
                <div className="flex flex-wrap gap-2">
                  <label htmlFor={id} className="btn btn-secondary cursor-pointer px-3 py-2 text-xs">
                    <UploadCloud size={15} /> {file || stored ? 'Trocar foto' : 'Selecionar foto'}
                    <input
                      id={id}
                      ref={field.ref}
                      name={field.name}
                      type="file"
                      accept="image/jpeg,image/png"
                      className="sr-only"
                      onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
                      onBlur={field.onBlur}
                    />
                  </label>
                  {(file || stored) && (
                    <button
                      type="button"
                      onClick={() => field.onChange(null)}
                      className="btn btn-ghost px-3 py-2 text-xs"
                    >
                      <X size={15} /> Remover
                    </button>
                  )}
                </div>
                {file && (
                  <p className="text-xs text-ink-400">
                    {file.name} · {formatBytes(file.size)}
                  </p>
                )}
                {stored && <p className="text-xs text-accent-400">Foto salva no perfil</p>}
              </div>
            </div>

            {error ? (
              <p className="flex items-center gap-1 text-xs text-red-400" role="alert">
                <AlertCircle size={13} /> {error}
              </p>
            ) : hint ? (
              <p className="text-xs text-ink-300">{hint}</p>
            ) : null}
          </div>
        )
      }}
    />
  )
}

function PhotoPreview({ file, stored, error }: { file: File | null; stored: boolean; error: boolean }) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!file) {
      setUrl(null)
      return
    }
    const objectUrl = URL.createObjectURL(file)
    setUrl(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  const border = error ? 'border-red-500/60' : url || stored ? 'border-accent-500/50' : 'border-dashed border-ink-600'

  return (
    <div
      className={`grid h-40 w-30 shrink-0 place-items-center overflow-hidden rounded-xl border bg-ink-800 ${border}`}
      style={{ aspectRatio: '3 / 4' }}
    >
      {url ? (
        <img src={url} alt="Pré-visualização da foto 3x4" className="h-full w-full object-cover" />
      ) : (
        <div className="flex flex-col items-center gap-1 text-ink-400">
          <UserRound size={28} />
          <span className="text-[10px] uppercase tracking-wider">{stored ? 'Salva' : '3x4'}</span>
        </div>
      )}
    </div>
  )
}
