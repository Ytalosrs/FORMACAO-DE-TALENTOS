import { z } from 'zod'
import { ageFromISO, isValidCNPJ, isValidCPF, onlyDigits } from '../lib/format'
import { DOCUMENTOS, type DocumentoKey } from './options'

const req = (msg = 'Campo obrigatório') => z.string().trim().min(1, msg)
const opt = () => z.string().trim()
const select = () => req('Selecione uma opção')
const email = () => req().pipe(z.email('E-mail inválido'))
const phone = () => req().refine((v) => onlyDigits(v).length >= 10, 'Telefone inválido')
const notFuture = (v: string) => new Date(v).getTime() <= Date.now()

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png']

/** Metadados de um arquivo já salvo no perfil (o binário fica no backend / sessão) */
export interface StoredFileMeta {
  name: string
  size: number
  type: string
  stored: true
}

export type Anexo = File | StoredFileMeta | null

export const isStoredFile = (v: unknown): v is StoredFileMeta =>
  typeof v === 'object' && v !== null && (v as StoredFileMeta).stored === true

const MAX_PHOTO_SIZE = 5 * 1024 * 1024
const PHOTO_TYPES = ['image/jpeg', 'image/png']

const fotoSchema = z
  .custom<Anexo>((v) => v === null || v === undefined || v instanceof File || isStoredFile(v))
  .refine((f): boolean => !!f, 'Envie uma foto de rosto (3x4)')
  .refine((f) => !f || f.size <= MAX_PHOTO_SIZE, 'A foto deve ter no máximo 5 MB')
  .refine((f) => !f || PHOTO_TYPES.includes(f.type), 'Formato aceito: JPG ou PNG')

const fileSchema = z
  .custom<Anexo>((v) => v === null || v === undefined || v instanceof File || isStoredFile(v))
  .refine((f): boolean => !!f, 'Anexe o arquivo')
  .refine((f) => !f || f.size <= MAX_FILE_SIZE, 'O arquivo deve ter no máximo 10 MB')
  .refine((f) => !f || ACCEPTED_TYPES.includes(f.type), 'Formato aceito: PDF, JPG ou PNG')

export const empresaSchema = z.object({
  cnpj: req().refine(isValidCNPJ, 'CNPJ inválido'),
  razaoSocial: req(),
  nomeFantasia: opt(),
  dataAbertura: req().refine(notFuture, 'A data não pode ser futura'),
  inscricaoEstadual: opt(),
  inscricaoMunicipal: opt(),
  naturezaJuridica: select(),
  cnaePrincipal: req().refine((v) => onlyDigits(v).length === 7, 'CNAE inválido'),
  regimeTributario: select(),
  porte: select(),
  email: email(),
  telefone: phone(),
  site: opt(),
})

export const enderecoSchema = z.object({
  cep: req().refine((v) => onlyDigits(v).length === 8, 'CEP inválido'),
  logradouro: req(),
  numero: req(),
  complemento: opt(),
  bairro: req(),
  cidade: req(),
  uf: select(),
})

export const representanteSchema = z.object({
  foto: fotoSchema,
  nome: req(),
  cpf: req().refine(isValidCPF, 'CPF inválido'),
  rg: req(),
  dataNascimento: req().refine(
    (v) => ageFromISO(v) >= 18,
    'O representante deve ser maior de 18 anos',
  ),
  cargo: select(),
  email: email(),
  telefone: phone(),
})

export const bancarioSchema = z
  .object({
    banco: select(),
    agencia: req(),
    conta: req(),
    tipoConta: select(),
    tipoPix: opt(),
    chavePix: opt(),
  })
  .refine((b) => !b.tipoPix || b.chavePix.length > 0, {
    message: 'Informe a chave PIX',
    path: ['chavePix'],
  })

export const documentosSchema = z.object(
  Object.fromEntries(DOCUMENTOS.map((d) => [d.key, fileSchema])) as Record<
    DocumentoKey,
    typeof fileSchema
  >,
)

export const formSchema = z.object({
  empresa: empresaSchema,
  endereco: enderecoSchema,
  representante: representanteSchema,
  bancario: bancarioSchema,
  documentos: documentosSchema,
  aceite: z.boolean().refine((v) => v, 'É necessário aceitar a declaração para enviar'),
})

export type FormValues = z.infer<typeof formSchema>

export const defaultValues: FormValues = {
  empresa: {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    dataAbertura: '',
    inscricaoEstadual: '',
    inscricaoMunicipal: '',
    naturezaJuridica: '',
    cnaePrincipal: '',
    regimeTributario: '',
    porte: '',
    email: '',
    telefone: '',
    site: '',
  },
  endereco: {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  },
  representante: {
    foto: null,
    nome: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    cargo: '',
    email: '',
    telefone: '',
  },
  bancario: {
    banco: '',
    agencia: '',
    conta: '',
    tipoConta: '',
    tipoPix: '',
    chavePix: '',
  },
  documentos: Object.fromEntries(DOCUMENTOS.map((d) => [d.key, null])) as Record<DocumentoKey, Anexo>,
  aceite: false,
}
