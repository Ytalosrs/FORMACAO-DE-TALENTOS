import { FileField } from '../components/fields'
import { Callout, StepHeader } from '../components/layout'
import { DOCUMENTOS } from '../form/options'

export function DocumentosStep() {
  return (
    <>
      <StepHeader
        title="Documentos obrigatórios"
        description="Anexe os documentos abaixo. Todos são necessários para a análise cadastral."
      />

      <Callout>
        Certidões e comprovantes devem estar dentro do prazo de validade. Arquivos ilegíveis ou incompletos
        podem atrasar a aprovação do cadastro.
      </Callout>

      <div className="flex flex-col gap-3">
        {DOCUMENTOS.map((doc) => (
          <FileField
            key={doc.key}
            name={`documentos.${doc.key}`}
            label={doc.label}
            description={doc.description}
            required
          />
        ))}
      </div>
    </>
  )
}
