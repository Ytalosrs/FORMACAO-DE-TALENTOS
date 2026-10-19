import { useFormContext, useWatch } from 'react-hook-form'
import { CheckboxField } from '../components/fields'
import { StepHeader } from '../components/layout'
import { ResumoCadastro } from '../components/ResumoCadastro'
import type { FormValues } from '../form/schema'

interface RevisaoStepProps {
  onEdit: (stepIndex: number) => void
}

export function RevisaoStep({ onEdit }: RevisaoStepProps) {
  const { control } = useFormContext<FormValues>()
  // Todos os campos têm valor inicial definido, então o snapshot é sempre completo
  const data = useWatch({ control }) as FormValues

  return (
    <>
      <StepHeader
        title="Revisão e envio"
        description="Confira todas as informações antes de salvar o cadastro no seu perfil."
      />

      <div className="flex flex-col gap-4">
        <ResumoCadastro data={data} onEdit={onEdit} />

        <CheckboxField
          name="aceite"
          label={
            <>
              Declaro que as informações prestadas são verdadeiras e que os documentos anexados são autênticos.
              Estou ciente de que a Zello poderá solicitar documentos complementares e que a aprovação do cadastro
              está sujeita à análise interna.
            </>
          }
        />
      </div>
    </>
  )
}
