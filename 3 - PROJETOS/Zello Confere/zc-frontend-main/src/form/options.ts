export interface Option {
  value: string
  label: string
}

export const UFS: Option[] = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
  'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
].map((uf) => ({ value: uf, label: uf }))

export const REGIMES: Option[] = [
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'presumido', label: 'Lucro Presumido' },
  { value: 'real', label: 'Lucro Real' },
]

export const PORTES: Option[] = [
  { value: 'MEI', label: 'MEI – Microempreendedor Individual' },
  { value: 'ME', label: 'ME – Microempresa' },
  { value: 'EPP', label: 'EPP – Empresa de Pequeno Porte' },
  { value: 'DEMAIS', label: 'Demais – médio ou grande porte' },
]

export const NATUREZAS: Option[] = [
  { value: '213-5', label: '213-5 – Empresário (Individual)' },
  { value: '206-2', label: '206-2 – Sociedade Empresária Limitada' },
  { value: '224-0', label: '224-0 – Sociedade Simples Limitada' },
  { value: '223-2', label: '223-2 – Sociedade Simples Pura' },
  { value: '230-5', label: '230-5 – Empresa Individual de Resp. Limitada (EIRELI)' },
  { value: '205-4', label: '205-4 – Sociedade Anônima Fechada' },
  { value: '204-6', label: '204-6 – Sociedade Anônima Aberta' },
  { value: 'outra', label: 'Outra' },
]

export const CARGOS: Option[] = [
  { value: 'socio-administrador', label: 'Sócio-administrador' },
  { value: 'administrador', label: 'Administrador' },
  { value: 'titular', label: 'Titular / Empresário individual' },
  { value: 'diretor', label: 'Diretor' },
  { value: 'procurador', label: 'Procurador' },
  { value: 'outro', label: 'Outro' },
]

export const BANCOS: Option[] = [
  { value: '001', label: '001 – Banco do Brasil' },
  { value: '033', label: '033 – Santander' },
  { value: '077', label: '077 – Banco Inter' },
  { value: '104', label: '104 – Caixa Econômica Federal' },
  { value: '208', label: '208 – BTG Pactual' },
  { value: '237', label: '237 – Bradesco' },
  { value: '260', label: '260 – Nubank' },
  { value: '290', label: '290 – PagSeguro' },
  { value: '336', label: '336 – C6 Bank' },
  { value: '341', label: '341 – Itaú Unibanco' },
  { value: '380', label: '380 – PicPay' },
  { value: '403', label: '403 – Cora' },
  { value: '422', label: '422 – Safra' },
  { value: '461', label: '461 – Asaas' },
  { value: '748', label: '748 – Sicredi' },
  { value: '756', label: '756 – Sicoob' },
  { value: 'outro', label: 'Outro' },
]

export const TIPOS_CONTA: Option[] = [
  { value: 'corrente', label: 'Conta corrente' },
  { value: 'poupanca', label: 'Conta poupança' },
  { value: 'pagamento', label: 'Conta de pagamento' },
]

export const TIPOS_PIX: Option[] = [
  { value: 'cnpj', label: 'CNPJ' },
  { value: 'email', label: 'E-mail' },
  { value: 'telefone', label: 'Telefone' },
  { value: 'aleatoria', label: 'Chave aleatória' },
]

export const DOCUMENTOS = [
  {
    key: 'cartaoCnpj',
    label: 'Cartão CNPJ',
    description: 'Comprovante de inscrição e situação cadastral emitido pela Receita Federal (máx. 90 dias).',
  },
  {
    key: 'contratoSocial',
    label: 'Contrato social ou requerimento de empresário',
    description: 'Última alteração consolidada, registrada na Junta Comercial.',
  },
  {
    key: 'comprovanteEndereco',
    label: 'Comprovante de endereço da empresa',
    description: 'Conta de consumo ou documento oficial em nome da PJ (máx. 90 dias).',
  },
  {
    key: 'certidaoFederal',
    label: 'Certidão negativa de débitos federais (CND)',
    description: 'Emitida pela Receita Federal / PGFN.',
  },
  {
    key: 'certidaoFgts',
    label: 'Certificado de regularidade do FGTS (CRF)',
    description: 'Emitido pela Caixa Econômica Federal.',
  },
  {
    key: 'certidaoTrabalhista',
    label: 'Certidão negativa de débitos trabalhistas (CNDT)',
    description: 'Emitida pelo Tribunal Superior do Trabalho.',
  },
  {
    key: 'documentoRepresentante',
    label: 'Documento de identidade do representante legal',
    description: 'RG e CPF ou CNH (frente e verso).',
  },
  {
    key: 'comprovanteBancario',
    label: 'Comprovante bancário',
    description: 'Cabeçalho de extrato ou cartão da conta em nome da PJ.',
  },
  {
    key: 'comprovantePlanoSaude',
    label: 'Comprovante de plano de saúde',
    description: 'Carteirinha ou declaração da operadora em nome do representante, dentro da validade.',
  },
] as const

export type DocumentoKey = (typeof DOCUMENTOS)[number]['key']

export const labelOf = (opts: Option[], value: string) =>
  opts.find((o) => o.value === value)?.label ?? value
