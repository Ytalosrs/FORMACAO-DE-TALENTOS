# Zello Confere · Frontend

Formulário de cadastro de prestadores **Pessoa Jurídica (CNPJ)** para contratação na Zello.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- react-hook-form + zod (validação no cliente)
- lucide-react (ícones)

## Rodando

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (gera `dist/`).

## Estrutura

```
src/
  App.tsx                 # wizard (navegação entre etapas, envio, tela de sucesso)
  index.css               # tema (cores brand/accent) e classes utilitárias (.input, .btn)
  lib/format.ts           # máscaras (CNPJ, CPF, CEP, telefone, CNAE, moeda) e validadores
  form/
    schema.ts             # schema zod de todo o formulário + valores iniciais
    options.ts            # listas (UFs, bancos, regimes, naturezas, documentos...)
    steps.ts              # definição das 7 etapas
  components/
    fields.tsx            # TextField, SelectField, TextAreaField, FileField, CheckboxField
    layout.tsx            # Logo, Stepper, StepHeader, Fieldset, Callout
  steps/                  # uma tela por etapa
```

## Etapas do formulário

1. **Dados da empresa** – CNPJ (validado), razão social, abertura, IE/IM, natureza jurídica, CNAE, regime tributário, porte, contato.
2. **Endereço** – CEP com preenchimento automático (ViaCEP), logradouro, número, bairro, cidade, UF.
3. **Representante legal** – nome, CPF (validado), RG, nascimento (18+), cargo, contato.
4. **Dados bancários** – banco, agência, conta, tipo; PIX opcional.
5. **Contratação** – função, área, gestor, modalidade, início, prazo (com data de término condicional), valor mensal.
6. **Documentos** – 8 anexos obrigatórios (PDF/JPG/PNG até 10 MB).
7. **Revisão e envio** – resumo editável + declaração de veracidade.

## Integração com o backend

Ainda não há chamada ao backend. O ponto de integração é a função `onSubmit` em `src/App.tsx`,
que hoje apenas registra os dados no console e exibe a tela de sucesso.
