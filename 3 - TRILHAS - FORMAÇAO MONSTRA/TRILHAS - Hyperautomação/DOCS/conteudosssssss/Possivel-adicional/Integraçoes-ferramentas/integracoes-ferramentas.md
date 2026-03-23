# Integrações e Ferramentas / Hyperautomation

> Objetivo: entender quais ferramentas caem no exame Mule-Dev-202 e como elas se integram nos cenários de hyperautomation (Composer, RPA, Flow, Orchestrator, APIs, NetSuite).

---

## 1. Visão Geral – Quem Orquestra, Quem Executa

### Orquestradores principais

- **MuleSoft Composer** – orquestra integrações SaaS-to-SaaS.
- **Salesforce Flow Orchestrator** – orquestra processos multi-etapas e multi-usuários (tarefas humanas + automáticas).
- **Salesforce Flow** – automatiza lógica dentro do org Salesforce, às vezes sendo chamado por Orchestrator.

	**-Todos possuem Triggers e actions.**
	
### Executores principais

- **MuleSoft RPA bots** – executam tarefas em UIs de sistemas sem API.
- **APIs Mule (System / Process / Experience)** – expõem dados e lógica de negócio com governança.
- **NetSuite e outros SaaS** – sistemas de registro integrados via conectores ou APIs.

Regra mental:

- "Quem decide o próximo passo?" → Orquestrador (Composer, Orchestrator, Flow).
- "Quem faz o trabalho pesado?" → Executor (RPA, APIs Mule, NetSuite, outros SaaS).

---

## 2. Tabela – Ferramenta x Integrações

| Ferramenta          | Papel principal                            | Integra com…                                     | Como aparece no exame |
|---------------------|--------------------------------------------|--------------------------------------------------|------------------------|
| **Composer**        | Orquestrar integrações SaaS-to-SaaS        | Salesforce, NetSuite, Slack, RPA, APIs Mule      | Flows com trigger + actions, sync SF ↔ NetSuite, chamar RPA, chamar APIs via HTTP. |
| **MuleSoft RPA**    | Automação de UI em sistemas sem API        | Composer, (às vezes APIs Mule)                   | Processos RPA disparados por Composer, retorno usado para atualizar sistemas. |
| **Salesforce Flow** | Automação dentro do org Salesforce         | APIs Mule (External Services), Composer          | Atualizar registros, chamar APIs; parte de processos maiores. |
| **Flow Orchestrator** | Orquestrar processos multi-etapas/usuários | Flows, Composer, RPA (indireto), APIs            | Workflows longos com tarefas humanas + automáticas envolvendo várias integrações. |
| **APIs Mule (System/Process/Experience)** | Integração enterprise governada         | Composer (HTTP), Flow (External Services), RPA   | Backend oficial para dados; políticas (Rate Limit, Spike, OAuth, Threat) aplicadas. |
| **NetSuite (ERP)**  | Sistema de registro financeiro             | Composer (NetSuite connector), APIs Mule         | Customer/Order sync com Salesforce; campo NetSuite ID; Sales Order em Closed Won. |

---

## 3. Padrões de Integração que Mais Caem

### 3.1 Composer ↔ RPA (Hyperautomation clássico)

- Trigger em Composer (evento em Salesforce ou Scheduler) inicia o flow.
- Composer chama action **Invoke RPA Process** do conector MuleSoft RPA.
- RPA executa a automação na UI do sistema legado.
- Composer recebe `RPA Execution Status` e dados retornados e continua o flow (por exemplo, atualiza registro em Salesforce ou NetSuite).

Pontos típicos de questão:

- Ordem correta dos passos (trigger → conexão RPA → Invoke RPA Process → usar resposta → testar).
- Escolha de trigger adequado (Scheduler vs evento em registro).
- Uso de **Use response in this flow** para acessar a saída do RPA.

---

### 3.2 Composer ↔ NetSuite ↔ Salesforce

Cenários clássicos:

- Sync **Account (Salesforce)** ↔ **Customer (NetSuite)**.
- Criar **Sales Order** em NetSuite quando **Opportunity** vira Closed Won em Salesforce.

Padrão de fluxo (Account → Customer):

1. Trigger: On new or updated Account em Salesforce.
2. NetSuite Get Records / Upsert Record: buscar ou criar Customer usando dados do Account (e campo NetSuite ID se existir).
3. Se Customer for novo, atualizar Account em Salesforce para salvar o `internalId` no campo **NetSuite ID**.

Padrão de quote-to-cash (Opportunity → Sales Order):

1. Trigger: Opportunity mudou para Closed Won.
2. Buscar Customer vinculado no NetSuite.
3. Criar Sales Order em NetSuite com base na Opportunity.
4. Opcional: notificar equipe de billing (Slack/email).

---

### 3.3 Flow Orchestrator ↔ Composer ↔ RPA / APIs

- **Flow Orchestrator** gerencia o processo de negócio fim-a-fim, dividindo em stages e steps.
- Steps automáticos podem:
  - Chamar um **Salesforce Flow** que usa External Services para consumir APIs Mule.
  - Chamar um **flow do Composer** para integrações com SaaS (Salesforce ↔ NetSuite, Salesforce ↔ Slack, etc.).
  - Indiretamente acionar **RPA**, quando o Composer daquele step chama um processo RPA.

Exemplo de cenário de prova:

- Onboarding com várias equipes e sistemas: Orchestrator coordena; Composer integra com NetSuite/Slack; RPA atualiza sistema legado sem API; APIs Mule fornecem dados de sistemas core.

---

### 3.4 Composer / Flow ↔ APIs Mule (API-led)

- Composer usa **HTTP connector** para consumir **Experience/Process APIs** expostas no Anypoint Platform.
- Salesforce Flow usa **External Services** para consumir essas mesmas APIs.
- API Manager aplica políticas nas APIs consumidas nesses flows:
  - **Rate Limiting / Rate Limiting SLA-based** – limitar requisições por período/contrato.
  - **Spike Control** – suavizar rajadas de requisições.
  - **OAuth enforcement** – validar tokens antes de encaminhar ao backend.
  - **JSON Threat Protection** – proteger contra payloads JSON maliciosos ou muito grandes.

Esse padrão aparece em perguntas de arquitetura/governança, pedindo para escolher entre usar Composer direto num sistema ou passar por APIs governadas.

---

## 4. Regra de Ouro para Acertar Questões de Integração

Sempre que ler um cenário, responda estas 3 perguntas antes de olhar alternativas:

1. **Onde o processo começa?**
   - Em Salesforce (record created/updated)?
   - Em um agendamento (Scheduler)?
   - Em outro SaaS (Slack, NetSuite)?

2. **Quem precisa ser orquestrado?**
   - Só Salesforce + outro SaaS → Composer e/ou Flow.
   - Vários sistemas, etapas humanas, aprovações → Flow Orchestrator + (Composer/APIs/RPA).
   - Sistema sem API, só UI → RPA (orquestrado por Composer/Flow/Orchestrator).

3. **Qual combo faz mais sentido?**
   - Integração direta SF ↔ SaaS, lógica simples → **Composer**.
   - UI sem API → **Composer + RPA**.
   - Processo longo com múltiplas equipes e etapas → **Flow Orchestrator** + Composer/APIs/RPA.
   - Reuso forte e governança (muitos consumidores) → **APIs Mule (System/Process/Experience)**, que podem ser consumidas por Composer e Flow.

Se você treinar ler cada questão pensando nesses papéis (quem orquestra x quem executa), fica muito mais fácil escolher a combinação correta de ferramentas no exame.
