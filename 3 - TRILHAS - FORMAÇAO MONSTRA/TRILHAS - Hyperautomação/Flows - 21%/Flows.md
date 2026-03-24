# Salesforce Flow e Flow Orchestration — Resumo Aprimorado para a Certificação MuleSoft Hyperautomation Developer

> **Relevância no edital:**[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​
> 
> - **Use Salesforce Flow to build hyperautomation workflows: 13%**
>     
> - **Use Salesforce Flow Orchestrator to build parallel, multi-user, multi-step workstreams: 8%**
>     
> - **Total: 21% da prova** — segunda maior fatia depois de Best Practices (20%)
>     

---

## 1. Visão Geral — Onde Flow e Flow Orchestration se encaixam na Hyperautomation

A certificação avalia o candidato na capacidade de escolher a ferramenta certa para cada cenário. A regra mental é:[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

|Cenário|Ferramenta|
|---|---|
|Lógica baseada em dados (criar/atualizar registro, validação, envio de e-mail)|**Flow normal**|
|Processo de negócio multi-etapa, multi-time, com tarefas humanas encadeadas|**Flow Orchestration**|
|Integração com sistema externo sem código|**Composer**|
|Automação de interface de usuário / tarefa repetitiva em desktop|**RPA**|

---

## 2. Salesforce Flow — Detalhado para a Prova

## 2.1. Tipos de Flow e quando usar cada um

|Tipo|Trigger|Tela?|Uso típico em Hyperautomation|
|---|---|---|---|
|**Screen Flow**|Chamado por usuário, botão, Orchestration|Sim|Wizards guiados, work items interativos|
|**Record-Triggered Flow**|Criação/atualização/exclusão de registro|Não|Atualizar campos, criar registros filhos, chamar APIs|
|**Schedule-Triggered Flow**|Data/hora + frequência|Não|Processar lotes de registros periodicamente|
|**Platform Event-Triggered Flow**|Publicação de Platform Event|Não|Integração assíncrona com sistemas externos|
|**Autolaunched Flow**|Apex, outro Flow, Orchestration, botão|Não|Subflows, lógica de background, Evaluation Flows|
|**External System Change-Triggered Flow**|Mudança em sistema externo (NetSuite, Jira)|Não|Trigger flows a partir de eventos externos via MuleSoft for Flow|

> **Ponto de prova:** Record-Triggered Flows fazem updates de campo (before-save) **10x mais rápido** que record-change processes.[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_trigger_record.htm&language=en_US&type=5)]​

## 2.2. Componentes essenciais

- **Elements:** Get/Create/Update/Delete Records, Screen, Decision, Loop, Assignment, Action, Subflow
    
- **Connectors:** definem o caminho de execução entre elementos
    
- **Resources:** variáveis, constantes, fórmulas, coleções, text templates
    

## 2.3. Record-Triggered Flow — Before-Save vs After-Save

**Before-Save (Fast Field Update):**

- Atualiza somente campos do **registro que disparou** o flow
    
- Elementos suportados: Assignment, Decision, Get Records, Loop
    
- **Não** permite chamadas externas, DML em outros objetos, ou Screen Flow
    
- Requer permissão **View All Data** para ativar[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_trigger_record.htm&language=en_US&type=5)]​
    

**After-Save:**

- Pode atualizar registros relacionados, criar registros, chamar Actions e APIs externas
    
- Suporta **Scheduled Paths** — executa parte do flow em horário definido após o trigger[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_trigger.htm&language=en_US&type=5)]​
    

> **Ponto de prova:** O operador `isChanged` **não é suportado em paths assíncronos**. Condições "run only when updated to meet criteria" só disparam quando mudam de `false → true`.[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_trigger_record.htm&language=en_US&type=5)]​

## 2.4. Conectando Flow com APIs Externas (cobrado diretamente no edital)[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

Existem três mecanismos principais:

1. **External Services + Named Credentials**
    
    - Expõe uma API REST/OpenAPI como Action reutilizável no Flow Builder
        
    - Named Credentials gerenciam autenticação (Basic, OAuth 2.0, JWT) de forma segura
        
    - Permite chamar endpoints externos diretamente como elementos Action no flow
        
2. **MuleSoft API Catalog for Salesforce**
    
    - Conecta o Salesforce org ao Anypoint Platform
        
    - Desenvolvedores sincronizam APIs, criam conexões por versão e ativam ações
        
    - Builders selecionam a conexão diretamente no Flow Builder (ex.: sandbox vs. produção)[[trailhead.salesforce](https://trailhead.salesforce.com/content/learn/modules/mulesoft-hyperautomation-developer-certification-maintenance-winter-26/maintain-your-mulesoft-hyperautomation-developer-certification-for-winter-26)]​
        
    - Suporta autenticação Basic, JWT, OAuth 2.0 e Client ID Enforcement
        
3. **MuleSoft for Flow: Integration**
    
    - Conectores third-party (Gmail, MS Teams, Zoom, NetSuite, Jira, etc.) como triggers ou actions no Flow
        
    - Tipo **External System Change-Triggered Flow** para iniciar automações quando dados mudam em sistemas externos[[trailhead.salesforce](https://trailhead.salesforce.com/content/learn/modules/mulesoft-hyperautomation-developer-certification-maintenance-winter-26/maintain-your-mulesoft-hyperautomation-developer-certification-for-winter-26)]​
        
    - **Triggers condicionais** para reduzir chamadas desnecessárias à API
        
    - Atualizações minor/patch dos conectores são automáticas; versões major exigem upgrade manual
        

## 2.5. Flow Testing — Cobrado no edital[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

**Disponível apenas para:** Record-Triggered Flows e Data Cloud-Triggered Flows[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_testing.htm&language=en_US&type=5)]​

**O que um Flow Test faz:**

- Cria uma cópia do registro de teste — **não salva no banco de dados**
    
- Avalia cada assertion para verificar se o flow rodou como esperado
    
- Pode testar paths imediatos e **Scheduled Paths** (suporte adicionado no Spring '24)[[help.salesforce](https://help.salesforce.com/s/articleView?id=release-notes.rn_automate_flow_debug_tests.htm&language=en_US&release=240&type=5)]​
    
- Não suporta flows que rodam quando um registro é **deletado**
    
- Não suporta paths assíncronos[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_testing.htm&language=en_US&type=5)]​
    

**Como criar:**

1. Abrir o flow no Flow Builder → clicar em **Debug**
    
2. Configurar label, API name e descrição do teste
    
3. Definir **Initial Triggering Record** (e Updated Trigger Record se for update)
    
4. Configurar **Assertions** — condições e mensagens de falha customizadas
    
5. Salvar e clicar em **Run**
    

**Negative Assertions (Error Handling):**

- Selecionar elementos Create/Update/Delete Records ou Action
    
- Operador **Has Error** — verifica que o flow trata erros corretamente[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_testing.htm&language=en_US&type=5)]​
    

> **Ponto de prova:** Flow tests não contam para os requisitos de cobertura de testes (test coverage). Recomendado criar um teste para **cada path** possível do flow.

## 2.6. Flow Builder Debugger

- Requer permissão **View All Data** para debugar; **Manage Flow** para abrir/editar[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_test_debug.htm&language=en_US&type=5)]​
    
- **Rollback Mode**: debug sem executar DML (sem efeitos colaterais no banco)
    
- **Sem rollback**: DML é executado — fechar o flow não desfaz ações já executadas
    
- **Debug as another user**: disponível apenas em sandbox; requer ativação em Process Automation Settings[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_test_debug.htm&language=en_US&type=5)]​
    
- Para Wait elements: selecionar o Wait Path e continuar o debug run manualmente
    

## 2.7. Einstein Bots + Flow (cobrado no edital)[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

- Einstein Bots automatizam atendimento ao cliente (customer service) dentro do Salesforce
    
- Integração com Flow: bots podem **chamar Autolaunched Flows** para executar lógica de negócio
    
- Use flows para consultar dados, criar registros, disparar actions — sem código dentro do bot
    
- Cenário típico de hyperautomation: bot coleta informações do cliente → aciona Flow → Flow chama API externa via External Services ou MuleSoft
    

## 2.8. Boas práticas de Flow em Hyperautomation

- **Evitar DML dentro de Loop**: coletar registros em coleções e executar DML em lote (governor limits)
    
- **Fault Connectors**: sempre adicionar caminhos de erro para que o flow termine graciosamente
    
- **Subflows**: dividir flows grandes em subflows reutilizáveis
    
- **Não hardcodear IDs**: usar Custom Metadata ou Custom Settings
    
- **Flow Trigger Explorer**: visualizar e reordenar todos os record-triggered flows de um objeto[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_trigger_explorer.htm&language=en_US&type=5)]​
    

---

## 3. Flow Orchestration — Detalhado para a Prova

## 3.1. Estrutura de uma Orchestration

text

`Orchestration ├── Stage 1 (ex: Análise) │   ├── Background Step → Autolaunched Flow (automático) │   └── Interactive Step → Screen Flow (tarefa humana) ├── Stage 2 (ex: Aprovação) │   ├── Interactive Step (paralelo) → User A │   └── Interactive Step (paralelo) → Queue B └── Stage 3 (ex: Implementação)     └── Background Step → Autolaunched Flow`

**Regras de execução:**

- **Stages rodam sequencialmente** — só um stage ativo por vez[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_concepts_stages.htm&language=en_US&type=5)]​
    
- **Steps dentro do mesmo stage** podem rodar em **paralelo ou sequencial** (você define dependências)
    
- Um stage é concluído quando: todas as steps obrigatórias completam OU um Evaluation Flow retorna `true`
    

## 3.2. Interactive Steps — Cobrado diretamente[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

- Referenciam um **Screen Flow ativo**
    
- Geram um **work item** para o assignee[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_concepts_steps_interactive.htm&language=en_US&type=5)]​
    
- O assignee completa o screen flow no **Work Guide** na página do registro relacionado
    

**Tipos de assignee:**[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_build_assign_interactive_step.htm&language=en_US&type=5)]​

|Tipo|Descrição|
|---|---|
|**User**|Usuário interno específico ou credentialed Experience Cloud visitor|
|**Group**|Public group|
|**Queue**|Queue (suporta Omni-Channel routing)|
|**User Resource**|Variável dinâmica com username do usuário|
|**Group Resource**|Variável dinâmica com API name do grupo|
|**Queue Resource**|Variável dinâmica com API name da queue|

> **Ponto de prova:** Nunca use `$User` como User Resource — a variável global `$User` resolve para o **system user** quando a Orchestration roda em system context, e uma Interactive Step não pode ser atribuída ao system user.[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_build_assign_interactive_step.htm&language=en_US&type=5)]​

**Omni-Channel:** Para usar routing do Omni-Channel com Flow Orchestration, associe pelo menos uma queue ao objeto **Orchestration Work Item**.[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_build_assign_interactive_step.htm&language=en_US&type=5)]​

## 3.3. Background Steps

- Chamam um **Autolaunched Flow** ativo
    
- Rodam de forma síncrona ou assíncrona
    
- Podem receber **dados de entrada** e devolver **dados de saída** para etapas seguintes
    
- Usados para lógica automática: atualizar registros, chamar APIs, processar dados
    

## 3.4. Evaluation Flows — Ponto crítico da prova[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

**O que é:** Autolaunched Flow com process type **Evaluation Flow**, usado como "porteiro" para decidir quando um stage ou step começa ou termina.salesforce+1

**Variável obrigatória:**

- Nome: `isOrchestrationConditionMet`
    
- Tipo: **Boolean**
    
- Inicializada: **false** (obrigatório — se inicializada como true, a condição seria sempre atendida imediatamente)
    
- Quando definida como `true` → a condição está atendida → stage/step pode iniciar ou completar[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_considerations_evaluation_flows.htm&language=en_US&type=5)]​
    

**Quando usar Evaluation Flow vs. Requirements simples:**

- Requirements simples: até **10 condições** por step/stage[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_build.htm&language=en_US&type=5)]​
    
- Evaluation Flow: quando a lógica é mais complexa do que comparações simples (ex.: verificar múltiplas aprovações, executar cálculos, consultar registros relacionados)
    

**Restrições dos Evaluation Flows:**[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_considerations_evaluation_flows.htm&language=en_US&type=5)]​

- **Não** fazer loop em registros
    
- **Não** fazer callouts externos
    
- Todos os output variables exceto `isOrchestrationConditionMet` são **descartados**
    

**Uso como Entry Condition (step):** determina se o step pode iniciar[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_concepts_flow.htm&language=en_US&type=5)]​  
**Uso como Exit Condition (stage ou interactive step):** determina se o stage/step pode ser marcado como concluído[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_concepts_flow.htm&language=en_US&type=5)]​

## 3.5. Entry e Exit Conditions — Resumo

|Condição|Onde se aplica|Opção simples|Opção complexa|
|---|---|---|---|
|**Entry Condition**|Steps|Requirements (até 10)|Evaluation Flow|
|**Exit Condition**|Stages e Interactive Steps|Requirements (até 10)|Evaluation Flow|

> **Ponto de prova:** Requirements em condições de entry/exit podem referenciar **campos de registros**. Mudanças nesses registros podem disparar a Orchestration a reavaliar o status dos stages e steps ativos.[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_considerations_orchestrations.htm&language=en_US&type=5)]​

## 3.6. Debug, Deploy e Gerenciamento de Orchestration[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&type=1)]​

**Debug:**

- Use **sandbox** para projetar e debugar orchestrations[[help.salesforce](https://help.salesforce.com/s/articleView?id=release-notes.rn_automate_orchestrator_debug_running_orchestration.htm&language=en_US&release=236&type=5)]​
    
- Debug de orchestration em andamento: visualize o caminho tomado e os valores das variáveis em cada ponto
    
- Flow Builder Debugger aplica-se também a flows chamados dentro da orchestration
    

**Deploy:**

- Ative a orchestration após testar em sandbox
    
- Orchestration requer que todos os flows referenciados (screen flows, autolaunched flows, evaluation flows) estejam **ativos**
    

**Gerenciamento (Monitor/Console):**[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_manage.htm&language=en_US&type=5)]​

- Visualizar todas as instâncias: em andamento, concluídas, canceladas
    
- **Suspender** uma orchestration em andamento
    
- **Reatribuir work items** quando um step travar ou o assignee não estiver disponível
    
- Controlar notificações de e-mail para work items atribuídos a queues
    

## 3.7. Work Guide

- Interface onde usuários **visualizam e completam** seus work items
    
- Disponível na página do registro relacionado (Lightning Record Page)
    
- Para usuários internos: página Lightning interna
    
- Para Experience Cloud visitors: página do site Aura ou LWR[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.orchestrator_concepts_work_items.htm&language=en_US&type=5)]​
    
- Admins podem reatribuir work items diretamente pelo Work Guide
    

---

## 4. Tabela Comparativa Completa — Flow vs. Flow Orchestration

|Aspecto|Flow Normal|Flow Orchestration|
|---|---|---|
|**Foco**|Lógica baseada em dados e automação de registros|Processos de negócio ponta-a-ponta, multi-times|
|**Duração típica**|Segundos a minutos|Horas, dias ou semanas|
|**Tarefas humanas**|Screen Flow pontual (sem encadeamento)|Work items encadeados em Stages com Work Guide|
|**Estrutura**|Elementos dentro de um único flow|Stages > Steps > Evaluation Flows|
|**Execução paralela**|Não nativa (precisa de subflows)|Nativa dentro do mesmo Stage|
|**Condições de progresso**|Não aplicável|Entry/Exit conditions com Requirements ou Evaluation Flows|
|**Monitoramento**|Flow Debug Log, Flow Error Emails|Orchestration Monitor Console|
|**Reuso**|Flow pode ser subflow|Orchestration orquestra flows reutilizáveis|

---

## 5. Pontos-chave Consolidados para a Prova

## Sobre Flow Testing[[help.salesforce](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_testing.htm&language=en_US&type=5)]​

- Disponível somente para **Record-Triggered** e **Data Cloud-Triggered