import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { SelectField, TextField } from '../components/fields'
import { Callout, Fieldset, StepHeader } from '../components/layout'
import { UFS } from '../form/options'
import type { FormValues } from '../form/schema'
import { maskCEP, onlyDigits } from '../lib/format'

interface ViaCep {
  erro?: boolean
  logradouro?: string
  bairro?: string
  localidade?: string
  uf?: string
}

export function EnderecoStep() {
  const { setValue, setFocus } = useFormContext<FormValues>()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function lookupCep(value: string) {
    const cep = onlyDigits(value)
    if (cep.length !== 8) return
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = (await res.json()) as ViaCep
      if (data.erro) {
        setMessage('CEP não encontrado. Preencha o endereço manualmente.')
        return
      }
      const fill = (name: 'endereco.logradouro' | 'endereco.bairro' | 'endereco.cidade' | 'endereco.uf', v?: string) =>
        setValue(name, v ?? '', { shouldDirty: true, shouldValidate: !!v })
      fill('endereco.logradouro', data.logradouro)
      fill('endereco.bairro', data.bairro)
      fill('endereco.cidade', data.localidade)
      fill('endereco.uf', data.uf)
      setFocus('endereco.numero')
    } catch {
      setMessage('Não foi possível consultar o CEP. Preencha o endereço manualmente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <StepHeader
        title="Endereço da empresa"
        description="Endereço da sede conforme consta no Cartão CNPJ."
      />

      {message && <Callout tone="warning">{message}</Callout>}

      <Fieldset>
        <div className="relative md:col-span-2">
          <TextField
            name="endereco.cep"
            label="CEP"
            required
            mask={maskCEP}
            placeholder="00000-000"
            inputMode="numeric"
            autoComplete="postal-code"
            hint="O endereço é preenchido automaticamente"
            onBlurValue={lookupCep}
          />
          {loading && (
            <Loader2 size={16} className="absolute right-3 top-[34px] animate-spin text-accent-500" />
          )}
        </div>
        <TextField
          name="endereco.logradouro"
          label="Logradouro"
          required
          autoComplete="address-line1"
          className="md:col-span-4"
        />
        <TextField name="endereco.numero" label="Número" required className="md:col-span-2" />
        <TextField
          name="endereco.complemento"
          label="Complemento"
          placeholder="Sala, andar, bloco…"
          className="md:col-span-4"
        />
        <TextField name="endereco.bairro" label="Bairro" required className="md:col-span-2" />
        <TextField
          name="endereco.cidade"
          label="Cidade"
          required
          autoComplete="address-level2"
          className="md:col-span-3"
        />
        <SelectField name="endereco.uf" label="UF" required options={UFS} placeholder="UF" className="md:col-span-1" />
      </Fieldset>
    </>
  )
}
