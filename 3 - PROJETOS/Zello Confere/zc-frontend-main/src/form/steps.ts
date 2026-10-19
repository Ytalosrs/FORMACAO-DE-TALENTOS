import {
  Building2,
  ClipboardCheck,
  FileText,
  Landmark,
  MapPin,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import type { FormValues } from './schema'

export interface StepDef {
  /** Nome do grupo no formulário — usado para validar apenas a etapa atual */
  id: keyof FormValues
  title: string
  description: string
  icon: LucideIcon
}

export const STEPS: StepDef[] = [
  { id: 'empresa', title: 'Dados da empresa', description: 'Informações cadastrais do CNPJ', icon: Building2 },
  { id: 'endereco', title: 'Endereço', description: 'Sede da pessoa jurídica', icon: MapPin },
  { id: 'representante', title: 'Representante legal', description: 'Sócio ou responsável', icon: UserRound },
  { id: 'bancario', title: 'Dados bancários', description: 'Conta para pagamentos', icon: Landmark },
  { id: 'documentos', title: 'Documentos', description: 'Anexos obrigatórios', icon: FileText },
  { id: 'aceite', title: 'Revisão e envio', description: 'Confira e confirme os dados', icon: ClipboardCheck },
]
