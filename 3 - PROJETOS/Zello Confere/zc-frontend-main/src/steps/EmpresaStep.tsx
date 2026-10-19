import { SelectField, TextField } from '../components/fields'
import { Fieldset, StepHeader } from '../components/layout'
import { NATUREZAS, PORTES, REGIMES } from '../form/options'
import { maskCNAE, maskCNPJ, maskPhone } from '../lib/format'

export function EmpresaStep() {
  return (
    <>
      <StepHeader
        title="Dados da empresa"
        description="Preencha conforme o Cartão CNPJ emitido pela Receita Federal."
      />

      <Fieldset legend="Identificação">
        <TextField
          name="empresa.cnpj"
          label="CNPJ"
          required
          mask={maskCNPJ}
          placeholder="00.000.000/0000-00"
          inputMode="numeric"
          autoComplete="off"
          className="md:col-span-2"
        />
        <TextField name="empresa.razaoSocial" label="Razão social" required className="md:col-span-4" />
        <TextField name="empresa.nomeFantasia" label="Nome fantasia" className="md:col-span-3" />
        <TextField name="empresa.dataAbertura" label="Data de abertura" type="date" required className="md:col-span-3" />
        <TextField
          name="empresa.inscricaoEstadual"
          label="Inscrição estadual"
          hint="Informe “Isento” quando aplicável"
          className="md:col-span-3"
        />
        <TextField name="empresa.inscricaoMunicipal" label="Inscrição municipal" className="md:col-span-3" />
      </Fieldset>

      <Fieldset legend="Enquadramento">
        <SelectField
          name="empresa.naturezaJuridica"
          label="Natureza jurídica"
          required
          options={NATUREZAS}
          className="md:col-span-3"
        />
        <TextField
          name="empresa.cnaePrincipal"
          label="CNAE principal"
          required
          mask={maskCNAE}
          placeholder="0000-0/00"
          inputMode="numeric"
          className="md:col-span-3"
        />
        <SelectField
          name="empresa.regimeTributario"
          label="Regime tributário"
          required
          options={REGIMES}
          className="md:col-span-3"
        />
        <SelectField name="empresa.porte" label="Porte da empresa" required options={PORTES} className="md:col-span-3" />
      </Fieldset>

      <Fieldset legend="Contato">
        <TextField
          name="empresa.email"
          label="E-mail da empresa"
          type="email"
          required
          placeholder="financeiro@empresa.com.br"
          autoComplete="email"
          className="md:col-span-3"
        />
        <TextField
          name="empresa.telefone"
          label="Telefone"
          type="tel"
          required
          mask={maskPhone}
          placeholder="(00) 00000-0000"
          inputMode="tel"
          className="md:col-span-3"
        />
        <TextField name="empresa.site" label="Site" placeholder="https://" inputMode="url" className="md:col-span-6" />
      </Fieldset>
    </>
  )
}
