/** Usuário logado — dado de exemplo até o backend de autenticação existir */
export interface Usuario {
  nome: string
  email: string
  telefone?: string
}

export const USUARIO_ATUAL: Usuario = {
  nome: 'Taoã Augusto Martinelli de Araújo',
  email: 'taoa.araujo@zello.tec.br',
}

/** Iniciais para o avatar: primeira e última palavra do nome */
export function iniciais(nome: string) {
  const partes = nome.trim().split(/\s+/)
  const primeira = partes[0]?.[0] ?? ''
  const ultima = partes.length > 1 ? (partes[partes.length - 1]?.[0] ?? '') : ''
  return (primeira + ultima).toUpperCase()
}
