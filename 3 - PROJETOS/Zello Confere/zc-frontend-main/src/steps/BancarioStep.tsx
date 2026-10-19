import { useWatch } from 'react-hook-form'
import { SelectField, TextField } from '../components/fields'
import { Callout, Fieldset, StepHeader } from '../components/layout'
import { BANCOS, TIPOS_CONTA, TIPOS_PIX } from '../form/options'
import type { FormValues } from '../form/schema'
import { maskConta, maskDigits } from '../lib/format'

export function BancarioStep() {
  const tipoPix = useWatch<FormValues, 'bancario.tipoPix'>({ name: 'bancario.tipoPix' })

  return (
    <>
      <StepHeader
        title="Dados bancários"
        description="Conta que receberá os pagamentos das notas fiscais emitidas."
      />

      <Callout tone="warning">
        A conta bancária deve ser de titularidade da <strong>pessoa jurídica</strong> (mesmo CNPJ informado).
        Contas de pessoa física não são aceitas.
      </Callout>

      <Fieldset legend="Conta">
        <SelectField name="bancario.banco" label="Banco" required options={BANCOS} className="md:col-span-6" />
        <TextField
          name="bancario.agencia"
          label="Agência"
          required
          mask={maskDigits(6)}
          placeholder="0000"
          inputMode="numeric"
          hint="Sem dígito verificador"
          className="md:col-span-2"
        />
        <TextField
          name="bancario.conta"
          label="Conta com dígito"
          required
          mask={maskConta}
          placeholder="00000-0"
          className="md:col-span-2"
        />
        <SelectField
          name="bancario.tipoConta"
          label="Tipo de conta"
          required
          options={TIPOS_CONTA}
          className="md:col-span-2"
        />
      </Fieldset>

      <Fieldset legend="PIX (opcional)">
        <SelectField
          name="bancario.tipoPix"
          label="Tipo de chave"
          options={TIPOS_PIX}
          placeholder="Não informar"
          allowEmpty
          className="md:col-span-2"
        />
        <TextField
          name="bancario.chavePix"
          label="Chave PIX"
          required={!!tipoPix}
          disabled={!tipoPix}
          placeholder={tipoPix ? 'Informe a chave' : 'Selecione o tipo de chave'}
          className="md:col-span-4"
        />
      </Fieldset>
    </>
  )
}
