import { PhotoField, SelectField, TextField } from '../components/fields'
import { Callout, Fieldset, StepHeader } from '../components/layout'
import { CARGOS } from '../form/options'
import { maskCPF, maskPhone } from '../lib/format'

export function RepresentanteStep() {
  return (
    <>
      <StepHeader
        title="Representante legal"
        description="Pessoa física com poderes para assinar o contrato em nome da empresa."
      />

      <Callout>
        O representante deve constar no contrato social ou possuir procuração com poderes específicos para
        contratar em nome da pessoa jurídica.
      </Callout>

      <Fieldset legend="Foto de identificação">
        <PhotoField
          name="representante.foto"
          label="Foto de rosto (3x4)"
          required
          hint="JPG ou PNG, até 5 MB. Será usada na identificação do representante."
          className="md:col-span-6"
        />
      </Fieldset>

      <Fieldset legend="Dados pessoais">
        <TextField name="representante.nome" label="Nome completo" required autoComplete="name" className="md:col-span-6" />
        <TextField
          name="representante.cpf"
          label="CPF"
          required
          mask={maskCPF}
          placeholder="000.000.000-00"
          inputMode="numeric"
          className="md:col-span-2"
        />
        <TextField name="representante.rg" label="RG / Órgão emissor" required placeholder="00.000.000-0 SSP/UF" className="md:col-span-2" />
        <TextField
          name="representante.dataNascimento"
          label="Data de nascimento"
          type="date"
          required
          className="md:col-span-2"
        />
        <SelectField
          name="representante.cargo"
          label="Cargo / vínculo com a empresa"
          required
          options={CARGOS}
          className="md:col-span-6"
        />
      </Fieldset>

      <Fieldset legend="Contato">
        <TextField
          name="representante.email"
          label="E-mail"
          type="email"
          required
          autoComplete="email"
          className="md:col-span-3"
        />
        <TextField
          name="representante.telefone"
          label="Telefone / WhatsApp"
          type="tel"
          required
          mask={maskPhone}
          placeholder="(00) 00000-0000"
          inputMode="tel"
          className="md:col-span-3"
        />
      </Fieldset>
    </>
  )
}
