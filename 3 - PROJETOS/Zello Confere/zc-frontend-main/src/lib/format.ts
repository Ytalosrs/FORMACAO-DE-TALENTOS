export const onlyDigits = (v: string | null | undefined) => (v ?? '').replace(/\D/g, '')

/** 00.000.000/0000-00 */
export function maskCNPJ(v: string) {
  return onlyDigits(v)
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}

/** 000.000.000-00 */
export function maskCPF(v: string) {
  return onlyDigits(v)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

/** 00000-000 */
export function maskCEP(v: string) {
  return onlyDigits(v).slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2')
}

/** (00) 0000-0000 ou (00) 00000-0000 */
export function maskPhone(v: string) {
  const d = onlyDigits(v).slice(0, 11)
  if (d.length <= 10) {
    return d.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2')
  }
  return d.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2')
}

/** 0000-0/00 */
export function maskCNAE(v: string) {
  return onlyDigits(v)
    .slice(0, 7)
    .replace(/^(\d{4})(\d)/, '$1-$2')
    .replace(/^(\d{4})-(\d)(\d)/, '$1-$2/$3')
}

/** Apenas dígitos, limitado a `max` caracteres */
export const maskDigits = (max: number) => (v: string) => onlyDigits(v).slice(0, max)

/** Dígitos + X (para conta bancária com dígito verificador) */
export function maskConta(v: string) {
  return (v ?? '')
    .toUpperCase()
    .replace(/[^0-9X-]/g, '')
    .slice(0, 15)
}

/** R$ 0,00 a partir da digitação */
export function maskCurrency(v: string) {
  const d = onlyDigits(v)
  if (!d) return ''
  const n = Number(d) / 100
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const currencyToNumber = (v: string) => Number(onlyDigits(v)) / 100

export function formatDate(iso: string) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function isValidCPF(value: string): boolean {
  const cpf = onlyDigits(value)
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false
  const calc = (len: number) => {
    let sum = 0
    for (let i = 0; i < len; i++) sum += Number(cpf[i]) * (len + 1 - i)
    const r = (sum * 10) % 11
    return r === 10 ? 0 : r
  }
  return calc(9) === Number(cpf[9]) && calc(10) === Number(cpf[10])
}

export function isValidCNPJ(value: string): boolean {
  const cnpj = onlyDigits(value)
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false
  const calc = (len: number) => {
    const weights =
      len === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    for (let i = 0; i < len; i++) sum += Number(cnpj[i]) * weights[i]
    const r = sum % 11
    return r < 2 ? 0 : 11 - r
  }
  return calc(12) === Number(cnpj[12]) && calc(13) === Number(cnpj[13])
}

export function ageFromISO(iso: string): number {
  const birth = new Date(iso)
  if (Number.isNaN(birth.getTime())) return 0
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}
