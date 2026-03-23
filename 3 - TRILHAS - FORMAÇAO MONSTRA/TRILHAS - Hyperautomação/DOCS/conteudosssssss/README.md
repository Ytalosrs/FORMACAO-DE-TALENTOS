# 🎓 Plataforma de Simulados – MuleSoft Hiperautomação

Esta é uma aplicação web de alto desempenho projetada para preparar estudantes para a certificação **MuleSoft Certified Hyperautomation Specialist**. A plataforma oferece um ambiente de estudo estruturado, com foco em repetição espaçada e reforço de conceitos não dominados.

---

## 🚀 Funcionalidades Principais

- **8 Módulos Teóricos**: Conteúdo completo cobrindo RPA, Composer, Salesforce Flow, Anypoint Platform e mais.
- **Banco de 360 Questões**: 45 questões por módulo, divididas em simulados de 15 questões.
- **Lógica de Não-Repetição**: Questões acertadas são automaticamente removidas das próximas provas para focar no que você ainda não sabe.
- **Refazer Inteligente**: Ao clicar em "Refazer" após uma prova, o sistema seleciona 15 questões **diferentes** das que você acabou de responder.
- **Prova de Reforço**: Um modo especial que traz apenas questões onde você teve erros ou baixa taxa de acerto.
- **Justificativas Detalhadas**: Feedback imediato com a explicação técnica de cada resposta.
- **Persistência em Nuvem (Supabase)**: Seu progresso é salvo automaticamente no navegador e sincronizado com a nuvem (opcional).
- **Dashboard de Performance**: Gráficos de acerto por tópico, por módulo e ranking de questões mais desafiadoras.

---

## 📁 Estrutura do Projeto

O projeto está organizado de forma modular para facilitar a manutenção:

```text
/
├── index.html          # Ponto de entrada da aplicação (UI Principal)
├── styles.css          # Estilização moderna e responsiva
├── vercel.json         # Configurações de deploy para Vercel
├── /src                # Lógica da aplicação (JavaScript)
│   ├── app.js          # Lógica principal, roteamento e exames
│   ├── questions-data.js # Banco de dados central de questões
│   ├── supabase.js     # Integração com tabelas do Supabase
│   └── supabase-config.js # Configurações de conexão (URL/Key)
├── /sql                # Scripts de Banco de Dados
│   ├── supabase_schema.sql # Estrutura de tabelas e triggers
│   └── supabase_policies.sql # Regras de segurança (RLS)
├── /scripts            # Automação
│   └── deploy-vercel.ps1 # Script para deploy rápido via PowerShell
├── /docs               # Documentação Adicional
│   └── DEPLOY_VERCEL.md # Guia passo-a-passo para colocar no ar
└── /Modulo X           # Conteúdo teórico e simulados brutos (Markdown)
```

---

## 🛠️ Configuração e Instalação

### **Uso Local**
A aplicação não requer build ou instalação de dependências.
1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

### **Persistência com Supabase (Opcional)**
Para salvar seu progresso na nuvem e ver o dashboard da equipe:
1. Crie um projeto no [Supabase](https://supabase.com/).
2. Execute os scripts da pasta `/sql` no SQL Editor do Supabase.
3. Copie sua **URL** e **Anon Key** para o arquivo `src/supabase-config.js`.

### **Deploy no Vercel**
Siga o guia em [`docs/DEPLOY_VERCEL.md`](docs/DEPLOY_VERCEL.md) para hospedar sua plataforma gratuitamente.

---

## 📝 Check-up de Requisitos (Status do Projeto)

| Requisito | Status | Descrição |
| :--- | :---: | :--- |
| **Não repetir acertos** | ✅ | Questões com `correct > 0` saem do pool de sorteio padrão. |
| **Refazer Diferente** | ✅ | Botão "Refazer" exclui os IDs da tentativa anterior. |
| **Nova Prova (Reset)** | ✅ | Opção de forçar repetição total ao completar o módulo. |
| **Organização** | ✅ | Arquivos separados em `src/`, `sql/`, `scripts/` e `docs/`. |
| **Legendas/Docs** | ✅ | Código fonte documentado com JSDoc em Português. |
| **Persistência Cloud** | ✅ | Sincronização automática via JSON State no Supabase. |
| **Justificativas** | ✅ | Parser automático de simulados MD e banco de dados. |

---

## 📖 Como contribuir ou editar questões
As questões são gerenciadas no arquivo [`src/questions-data.js`](src/questions-data.js). Para adicionar novas questões, siga o formato de objeto JSON documentado no arquivo.

As justificativas teóricas podem ser editadas diretamente nos arquivos `Simulado_Consolidado_MX.md` dentro das pastas de cada módulo.

---
*Desenvolvido para acelerar sua aprovação na certificação MuleSoft.*
