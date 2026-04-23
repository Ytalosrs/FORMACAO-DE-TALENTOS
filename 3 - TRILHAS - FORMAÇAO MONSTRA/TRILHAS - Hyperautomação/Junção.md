
# 📘 GUIA MESTRE COMPLETO

## Salesforce Certified MuleSoft Hyperautomation Developer (Mule-Dev-202)

## Tudo que estudamos, todas as dúvidas tiradas, todos os pontos de prova

---

# 🗂️ ÍNDICE

1. O que é Hyperautomation?
    
2. MuleSoft Composer
    
3. Consumo de APIs com Anypoint Platform
    
4. MuleSoft RPA
    
5. Salesforce Flow
    
6. Flow Orchestration
    
7. Anypoint Platform — Entrega e Gestão de APIs
    
8. Anypoint Exchange — Catálogo e Reuso
    
9. Monitoramento e Políticas de API
    
10. CI/CD no contexto MuleSoft
    
11. Dúvidas Tiradas nas Sessões
    
12. Checklist Final de Prova
    

---

# 1. 🌐 O QUE É HYPERAUTOMATION?

## Conceito

Hyperautomation é a combinação estratégica de múltiplas tecnologias de automação (RPA, AI, APIs, Low-code/No-code, Integrações) para automatizar processos de negócio de ponta a ponta — end-to-end — com mínima intervenção humana. Não é usar uma ferramenta só. É **orquestrar o ecossistema completo**.

## As Ferramentas do Ecossistema

|Ferramenta|Papel na Hyperautomation|
|---|---|
|**MuleSoft Composer**|Integração no-code entre sistemas SaaS|
|**MuleSoft RPA**|Automação de UI em sistemas sem API|
|**Salesforce Flow**|Automação declarativa de processos no Salesforce|
|**Flow Orchestration**|Coordenação de processos multiequipe complexos|
|**Anypoint Platform**|APIs de alto volume, transformação, deploy|
|**Anypoint Exchange**|Repositório de assets reutilizáveis|
|**Einstein Bots**|Interação conversacional com clientes|

## Matriz de Decisão — Qual Ferramenta Usar?

|Cenário|Ferramenta Correta|
|---|---|
|Integrar dois SaaS sem código (Salesforce ↔ Slack)|**MuleSoft Composer**|
|Automatizar UI de sistema legado **sem API**|**MuleSoft RPA**|
|Orquestrar processo multiequipe com aprovações humanas|**Flow Orchestration**|
|API de alto volume, transformação complexa, produção|**Anypoint Platform**|
|Atualizar campo quando registro é criado/editado|**Record-Triggered Flow**|
|Processo agendado (ex: todo dia às 9h)|**Scheduled Flow**|
|Interação conversacional com cliente|**Einstein Bot**|
|Reusar integração já criada por outro time|**Anypoint Exchange**|
|Testar especificação de API sem backend|**Mocking Service**|
|Testar aplicação Mule em pipeline CI|**MUnit**|

> 🎯 **Pegadinha máxima:** RPA só deve ser usado quando o sistema **NÃO tem API disponível**. Se tem API → Anypoint ou Composer. Usar RPA em sistema com API = má prática e cai direto na prova.

---

# 2. 🔧 MULESOFT COMPOSER (12% do exame)

## O que é

Ferramenta **no-code** da MuleSoft para criar integrações entre sistemas SaaS. Projetada para analistas de negócio e admins — não requer programação.

## Quando Usar vs. Não Usar

|Usar Composer|Usar Anypoint Platform|
|---|---|
|Integrações simples entre SaaS|Transformações complexas (DataWeave)|
|Usuário sem habilidades de dev|Alto volume de transações|
|Conectores nativos disponíveis|Sistema sem conector no Composer|
|Automação rápida no-code|Necessidade de DevOps e CI/CD|

## Estrutura de um Flow no Composer

text

`TRIGGER (Gatilho)    ↓ STEP 1: Buscar dados do Sistema A    ↓ STEP 2: Condição / Filtro (If/Else)    ↓ STEP 3: Ação no Sistema B    ↓ STEP 4: (opcional) Acionar RPA / Salesforce Flow / API`

## Tipos de Triggers

|Tipo|Quando dispara|
|---|---|
|**On New Record**|Novo registro criado no sistema origem|
|**On Updated Record**|Registro existente atualizado|
|**Scheduler**|Horário/frequência definida|
|**On New or Updated Record**|Criação OU atualização|

## Transformação de Dados — Custom Expression Editor

3 abas disponíveis:

- **Functions** → `toUpperCase()`, `toLowerCase()`, `trim()`, `today()`, `fromBooleanToString()`, `fromStringToNumber()` etc.
    
- **Data** → Data pills dos steps anteriores
    
- **Operators** → operadores matemáticos e lógicos
    
    > As funções do Composer são construídas com **DataWeave** por baixo dos panos.
    

## Controles de Flow no Composer

|Controle|Função|
|---|---|
|**If/Else**|Bifurcar fluxo com base em condição|
|**For Each**|Iterar sobre lista de registros|
|**Try/Catch**|Tratar erros em etapa específica|
|**Stop**|Interromper execução do flow|

## Conexão do Composer com Hyperautomation

- Pode **acionar processos RPA** diretamente
    
- Pode **chamar Flows do Salesforce** (autolaunched)
    
- Pode **invocar APIs** do Anypoint Platform
    
- Ideal para "cidadãos desenvolvedores"
    

---

# 3. 🔌 ANYPOINT PLATFORM — CONSUMO E ENTREGA DE APIs (15%)

## API-Led Connectivity — As 3 Camadas

text

`┌──────────────────────────────────────────────────────┐ │  EXPERIENCE LAYER (APIs de Experiência)               │ │  → Expostas para consumidor final                     │ │  → Mobile App, Web, Portal de Parceiros               │ │  → Formatadas por canal de consumo                    │ ├──────────────────────────────────────────────────────┤ │  PROCESS LAYER (APIs de Processo)                    │ │  → Orquestram múltiplas System APIs                   │ │  → Contêm lógica de negócio e transformação           │ │  → Agregação, roteamento                              │ ├──────────────────────────────────────────────────────┤ │  SYSTEM LAYER (APIs de Sistema)                      │ │  → Comunicam diretamente com backends                 │ │  → SAP, Salesforce, banco de dados, ERP               │ │  → Isolam complexidade do sistema legado              │ └──────────────────────────────────────────────────────┘`

**Exemplos práticos das 3 camadas:**

- **System API:** `GET /salesforce/accounts/{id}` → acessa Salesforce diretamente
    
- **Process API:** `GET /orders/{id}/full-details` → chama System APIs de Pedidos + Clientes + Estoque e agrega
    
- **Experience API:** `GET /mobile/my-orders` → chama Process API e formata para o app mobile
    
    > 🎯 **Pegadinha:** "Onde fica a lógica de negócio?" → **Process Layer**. "Onde o mobile consome?" → **Experience Layer**. "Quem acessa o SAP direto?" → **System Layer**.
    

## RAML — Elementos da Especificação

text

`title: Orders API version: v1 baseUri: https://api.empresa.com/v1 mediaType: application/json types:   Order:    properties:      id: string      status: string traits:   pageable:    queryParameters:      page: integer      pageSize: integer /orders:   get:    is: [pageable]    responses:      200:        body:          application/json:            type: Order[]`

**Fragmentos RAML reutilizáveis via Exchange:**

- **Data Type** → estrutura de objetos (ex: `Customer`, `Order`)
    
- **Trait** → comportamento compartilhado (paginação, error-response)
    
- **Resource Type** → template de recurso completo
    
- **Security Scheme** → esquema de segurança reutilizável
    

## Opções de Deploy — Comparativo Completo

|Opção|Gerenciamento|Onde roda|Ideal para|
|---|---|---|---|
|**CloudHub**|MuleSoft gerencia tudo|Cloud AWS (multi-tenant)|Padrão — fácil, sem infra própria|
|**CloudHub 2.0**|MuleSoft gerencia (containers)|Cloud isolada|Mais isolamento, mais moderno|
|**Runtime Fabric**|Empresa gerencia a infra|On-prem ou cloud própria (K8s/Docker)|Empresas reguladas, dados sensíveis|
|**On-Premises**|Empresa gerencia tudo|Servidor físico da empresa|Controle total, dados não saem|
|**Anypoint Studio (local)**|Desenvolvedor|Máquina local|Dev e testes somente|

> 🎯 **Pegadinha:** Runtime Fabric usa **Docker e Kubernetes** para orquestração e permite controle centralizado pelo Anypoint Platform mesmo em infra da empresa. Não é igual ao On-Premises standalone.

---

# 4. 🤖 MULESOFT RPA (17% do exame)

## O que é

RPA (Robotic Process Automation) automatiza tarefas repetitivas em **interfaces de usuário (UI)** de sistemas que **não possuem API** acessível — clicando, preenchendo formulários, copiando dados entre telas.

## Componentes da Plataforma RPA

|Componente|Função|
|---|---|
|**RPA Manager**|Central de controle: processos, bots, deploys, monitoramento|
|**RPA Builder**|Ferramenta de dev: onde o bot é programado step a step|
|**RPA Bot**|O robô: executa as automações na máquina configurada|
|**Anypoint Platform**|Integra RPA ao ecossistema MuleSoft|

## Ciclo de Vida Completo do RPA

text

`1. EVALUATE (Avaliar)    ├── Identificar processo candidato   ├── Calcular ROI e complexidade   ├── Criar BPMN do processo   └── Definir bot tasks 2. DESIGN (Projetar)    ├── Modelar processo no RPA Manager (BPMN)   ├── Definir parâmetros de entrada/saída   └── Dividir em Activity Steps 3. BUILD (Construir)    ├── Implementar cada Activity Step no RPA Builder   ├── Configurar action steps via wizard   ├── Testar cada step localmente na máquina do dev   └── Step testado imediatamente após ser configurado 4. TEST (Testar)    ├── Publicar para fase Test (Publish to Test) no RPA Manager   ├── Criar Test Configurations (parâmetros, bots, ambiente)   ├── Executar Test Plans (podem rodar em paralelo)   ├── Ver resultados no Test Results panel   └── Se falhou → volta para BUILD com pacote de análise automático 5. DEPLOY / PRODUCTION (Produzir)    ├── Transição para fase Production   ├── Configurar parâmetros de produção   ├── Definir agendamento   └── Selecionar bots executores (pode ser múltiplos) 6. MONITOR (Monitorar)    ├── Dashboard no RPA Manager   ├── Alertas e notificações de falha   └── Logs de execução por instância`

## Gatilhos de RPA — Como Acionar um Bot

|De onde|Como|
|---|---|
|**RPA Manager**|Manual ou agendado|
|**MuleSoft Composer**|Via step de ação no flow|
|**Anypoint Platform**|Via chamada de API ao processo RPA|
|**Salesforce Flow**|Via External Service (importando a RPA API)|

## Idempotência em RPA — Ponto Crítico

|Tipo|Execution ID|Comportamento|
|---|---|---|
|**Idempotent**|Passado na chamada|Mesmo ID → não cria nova instância (evita duplicatas)|
|**Non-Idempotent**|Não passado|Cada chamada → sempre cria nova instância|

> 🎯 **Pegadinha:** Para evitar que um pagamento seja processado duas vezes → usar **invocação idempotente com Execution ID**.

## Connected App Scope para RPA — Muito Cobrado

Para conectar o **RPA Manager** ao Anypoint Platform:

> **Scope correto = "RPA Integrator"** — não "RPA Admin", não "Exchange Viewer", não "Runtime Manager"

## Integrar RPA com Salesforce Flow

1. Configurar conexão entre Anypoint Platform e a org Salesforce
    
2. Importar APIs do MuleSoft RPA como **External Service** no Salesforce
    
3. O External Service gera **invocable actions** automaticamente
    
4. Usar essas actions em qualquer Flow
    
5. O Flow pode **iniciar** o processo RPA e **verificar o status** da execução
    

---

# 5. ⚡ SALESFORCE FLOW (13% do exame)

## Tipos de Flow — Comparativo Completo

|Tipo|Trigger|Interação humana?|Quando usar|
|---|---|---|---|
|**Screen Flow**|Lançado manualmente pelo usuário|✅ Sim (obrigatório)|Guiar usuário por processo passo a passo|
|**Record-Triggered Flow**|Criação, edição ou exclusão de registro|❌ Não|Atualizar campos, enviar notificações automáticas|
|**Scheduled Flow**|Data/hora e frequência definida|❌ Não|Processar lote de registros num horário específico|
|**Autolaunched Flow**|Chamado por outro processo/código|❌ Não|Executado por Apex, REST API, outro Flow|
|**Platform Event-Triggered**|Publicação de Platform Event|❌ Não|Reação a eventos em tempo real|

> 🎯 **Pegadinha:** Screen Flow **não suporta Wait elements** (esperar). Record-Triggered e Scheduled suportam caminhos assíncronos (Scheduled Paths / Async Paths).

## Record-Triggered Flow — Detalhes Críticos

**Momentos de execução:**

- **Before Save** → executa ANTES do registro ser salvo no banco. Ideal para validar e atualizar campos do próprio registro. **Mais performático** (sem DML extra).
    
- **After Save** → executa APÓS o registro ser salvo. Ideal para criar/atualizar registros relacionados, enviar emails, chamar APIs.
    

**Caminhos disponíveis no Record-Triggered Flow:**


`Record-Triggered Flow ├── Immediate Path (síncrono — roda junto com a transação) ├── Scheduled Path (agendado — roda horas/dias depois) └── Async Path (assíncrono — roda imediatamente após commit, fora da transação)`

> 🎯 **Pegadinha:** O operador `isChanged` **não é suportado em Async Paths**. Se a questão mencionar `isChanged` em caminho assíncrono → está errado.

**Governor Limits e Bulkification:**

- Flows record-triggered processam registros em **bulk (lotes)** automaticamente
    
- **Nunca fazer DML dentro de loops** → viola governor limits (erro 101 DML statements)
    
- Padrão correto: coletar registros no loop → executar DML fora do loop (Collections)
    
- Máximo de **2.000 registros** por transação de flow em batch
    

## Tipos de Elementos dentro do Flow

|Elemento|Função|
|---|---|
|**Assignment**|Atribuir valor a variável|
|**Decision**|Bifurcar o fluxo com condições (if/else)|
|**Loop**|Iterar sobre coleção de registros|
|**Get Records**|Buscar registros do Salesforce|
|**Create Records**|Criar novos registros|
|**Update Records**|Atualizar registros existentes|
|**Delete Records**|Deletar registros|
|**Subflow**|Chamar outro Flow|
|**Action**|Chamar Apex, External Service, RPA, Send Email|
|**Wait / Pause**|Aguardar evento ou tempo (Record-Triggered/Scheduled)|
|**Screen**|Tela interativa (Screen Flows apenas)|

## Einstein Bots + Flow — Integração

**Fluxo típico de integração:**

text

`Cliente interage com Einstein Bot     ↓ Bot coleta dados (variáveis) do cliente     ↓ Bot cria Custom Object no Salesforce para guardar os dados     ↓ Bot aciona um Autolaunched Flow     ↓ Flow processa dados e chama Composer / RPA / API externa`

> 🎯 **Pegadinha de prova (questão real):** Quando o Einstein Bot precisa passar dados para um sistema externo que **não tem objeto padrão no Salesforce** → criar um **Custom Object** para armazenar os dados do bot, depois usar Flow ou Composer para enviar ao sistema externo.

## Distribuição de Screen Flows

|Método|Como funciona|
|---|---|
|**Lightning App Builder**|Adicionar flow como componente em página Lightning|
|**Flow Action (botão)**|Botão numa página de registro|
|**Utility Bar**|Flow fixo na barra inferior do app|
|**Experience Cloud**|Páginas de portal/comunidade|
|**Visualforce**|Incorporado em página VF|
|**Slack**|Via Salesforce for Slack|

---

# 6. 🎼 FLOW ORCHESTRATION (8% do exame)

## O que é

Flow Orchestration coordena múltiplos flows (steps) em um processo de negócio complexo, sequencial ou paralelo, podendo envolver **múltiplas equipes e aprovações humanas**. É a "partitura" que rege todos os outros flows.

## Estrutura Hierárquica

text

`ORCHESTRATION (Orquestração — o processo inteiro) └── STAGE 1 (Estágio — fase do processo)     ├── STEP A (Etapa — tarefa individual)    │   └── Flow associado (Screen ou Background)    └── STEP B (Etapa paralela dentro do mesmo estágio)        └── Flow associado STAGE 2     └── STEP C (só começa quando Stage 1 completa)        └── Flow associado`

**Regras importantes:**

- **Stages** são executados **sequencialmente** (um após o outro)
    
- **Steps dentro do mesmo Stage** podem ser executados **em paralelo**
    
- Um Stage só avança quando todos os seus Steps obrigatórios completam
    
- **Work Guides** → interface onde os usuários veem e completam seus Steps atribuídos
    

## Tipos de Steps

|Tipo|Requer humano?|Flow associado|Quando usar|
|---|---|---|---|
|**Interactive Step**|✅ Sim|Screen Flow|Aprovação, revisão, preenchimento humano|
|**Background Step**|❌ Não|Autolaunched Flow|Ação automática (enviar email, atualizar registro)|

## Evaluation Flows — Controle de Entrada/Saída

Quando você precisa de **mais de 3 condições** para controlar se um Stage ou Step pode iniciar ou completar, usa um **Evaluation Flow**.

- Tipo especial de Flow criado com o tile "Evaluation Flow" no Flow Builder
    
- Contém uma variável Boolean de saída obrigatória: **`isOrchestrationConditionMet`**
    
- Inicializar como `false`, e setar para `true` quando a condição for atendida
    
- **Só esse valor é retornado** — outras variáveis de output são descartadas
    
    > 🎯 **Pegadinha:** O Evaluation Flow **só retorna um booleano** (`isOrchestrationConditionMet`). Se a questão falar de retornar outros dados → não é Evaluation Flow.
    

## Casos de Uso Típicos de Flow Orchestration

- Processo de onboarding de cliente (TI configura acesso → RH faz cadastro → Financeiro cria conta)
    
- Aprovação de contrato multidepartamental (Jurídico → Financeiro → Diretoria)
    
- Case management com múltiplas equipes (abertura → triagem → resolução → fechamento)
    
- Processo de crédito com análise automática + aprovação humana
    

## Diferença Flow Orchestration vs. Flow simples

||Flow Simples|Flow Orchestration|
|---|---|---|
|Equipes envolvidas|Uma|Múltiplas|
|Complexidade|Baixa/média|Alta|
|Aprovações humanas|Possível mas limitado|Nativo e robusto|
|Rastreabilidade|Básica|Completa (por Stage/Step)|
|Paralelismo|Não nativo|Steps paralelos no mesmo Stage|

---

# 7. 🏗️ ANYPOINT PLATFORM — ENTREGA E GESTÃO DE APIs (15%)

## Ciclo de Vida de uma API no Anypoint Platform

text

`1. DESIGN    └── API Designer → escrever especificação RAML ou OAS   └── Mocking Service → testar sem implementação 2. PUBLISH    └── Publicar spec no Anypoint Exchange   └── Outros times podem descobrir e reusar 3. BUILD    └── Anypoint Studio → implementar a lógica da aplicação Mule   └── Conectores MuleSoft para sistemas externos 4. DEPLOY    └── CloudHub / Runtime Fabric / On-Premises   └── Runtime Manager → gerenciar aplicações deployadas 5. MANAGE    └── API Manager → aplicar políticas de segurança e controle   └── API Gateway → enforçar as políticas em runtime 6. MONITOR    └── Anypoint Monitoring → dashboards, alertas, logs, métricas   └── API Analytics → relatórios de uso e performance`

## MUnit — Testes Automatizados para Mule

- Framework de **testes unitários** nativo do Anypoint Studio
    
- Permite criar **mocks de conectores** (testar sem dependências externas reais)
    
- Tipos de teste: unit tests, integration tests, mock services
    
- Roda dentro do **pipeline CI/CD** (Maven + MUnit Plugin)
    
- Valida contratos de API e lógica de transformação antes de produção
    
    > 🎯 **Distinção crítica:**
    > 
    > - **Mocking Service (Exchange/API Designer)** → testa a _especificação_ da API (sem backend)
    >     
    > - **MUnit (Anypoint Studio)** → testa a _implementação_ da aplicação Mule (com lógica real)
    >     
    
    ## Fault Handling — Tratamento de Falhas em Profundidade
    
    **Padrão Síncrono:**
    
    - Erro → **rollback** de todas as transações anteriores do flow
        
    - Erros transitórios (timeout, rede) → **retry automático** (max retries + retry interval configuráveis)
        
    - Após esgotar retries → rollback + log + retorna erro ao solicitante
        

**Padrão Assíncrono (com filas):**

- **Retry Queue** → fila para reprocessamento automático de mensagens com falha transiente
    
- **Dead Letter Queue (DLQ)** → fila para mensagens "envenenadas" que falharam repetidamente e precisam de intervenção manual
    

Mensagem enviada à DLQ carrega: Error Code, Error Message, Process Queue Name, SLA, Last Processed Timestamp.

**Tipos de erro:**

|Tipo|Definição|O que fazer|
|---|---|---|
|**Transiente**|Temporário (timeout de rede, serviço instável)|Retry automático|
|**Poison/Envenenado**|Permanente (dado inválido, lógica quebrada)|Dead Letter Queue → intervenção humana|

---

# 8. 📦 ANYPOINT EXCHANGE — CATÁLOGO E REUSO (8%)

## O que é

Repositório central da Anypoint Platform para publicar, descobrir, compartilhar e reusar assets de integração. Funciona como um "marketplace interno" de componentes.

## Tipos de Assets — Tabela Completa

|Tipo|Descrição|Exemplo|
|---|---|---|
|**API Specification**|Especificação RAML ou OAS|Contrato da API de Pedidos|
|**REST API**|API implementada e publicada|API de Clientes em produção|
|**Template**|App Mule completa e reutilizável por outros times|Template Salesforce ↔ SAP|
|**Example**|App Mule demonstrativa (não reutilizável como template)|Exemplo de uso do conector Kafka|
|**Connector**|Conector para sistema específico|MuleSoft Connector for Salesforce|
|**Custom**|PDFs, documentação genérica|Guia de onboarding de APIs|
|**Fragment**|Fragmento RAML reutilizável|Data Type "Endereço" compartilhado|
|**Policy**|Política de API customizada|Política de segurança corporativa|

> 🎯 **Pegadinha:** Para **compartilhar uma app Mule com outros times** para criarem soluções similares → **Template Asset**. Não "Example" (só demonstra) nem "Custom" (apenas documentação).

## Fluxo de Publicação no Exchange

text

`API Designer (escreve RAML)     ↓ Publica no Exchange (status: Development)     ↓ Revisão e aprovação (status: Published)     ↓ Consumida por outros times     ↓ Nova versão lançada → versão anterior vira: Deprecated`

## Mocking Service

- Disponível no **API Designer** e no **Exchange**
    
- Simula chamadas reais retornando dados dos **exemplos definidos no RAML/OAS**
    
- Testa o contrato da API antes de qualquer implementação de backend
    
- Pode ser acessado **publicamente** (endpoint público) ou **privadamente** (requer token Anypoint)
    

## Best Practices Exchange

- Verificar o Exchange **antes** de criar nova integração (evita retrabalho)
    
- Nomear assets com convenção clara (ex: `sistema-recurso-v1`)
    
- Adicionar documentação, exemplos e casos de uso
    
- Gerenciar **categorias** e **tags** para facilitar descoberta
    
- Versionar semanticamente: `v1.0.0` → `v1.1.0` → `v2.0.0`
    
- Assets como **produtos** — servem múltiplos times, não um projeto específico
    

---

# 9. 📡 MONITORAMENTO E POLÍTICAS DE API (7%)

## API Manager vs. API Gateway vs. Anypoint Monitoring

|Componente|Papel|Analogia|
|---|---|---|
|**API Manager**|**Configura** políticas, define contratos, gerencia versões|"Quem cria as regras"|
|**API Gateway**|**Executa/enforça** as políticas no runtime, intercepta tráfego|"Quem aplica as regras"|
|**Anypoint Monitoring**|Dashboards, alertas, logs, métricas de performance|"Quem observa tudo"|

> 🎯 **Pegadinha:** "Qual componente **enforça** políticas de API?" → **API Gateway**. O API Manager só configura; quem realmente bloqueia ou permite a requisição é o Gateway.

## Políticas de API — Tabela Completa

|Política|Função|HTTP retornado|Quando usar|
|---|---|---|---|
|**Client ID Enforcement**|Exige Client ID (e opcionalmente Secret) para acessar|401 (inválido)|Controle de acesso básico por aplicação|
|**Rate Limiting**|Limita número **total** de requisições por janela de tempo|429 (excedido)|Quota geral de uso da API|
|**Rate Limiting - SLA Based**|Limita requisições **por contrato/cliente** individualmente|401 (credencial), 429 (quota)|Diferentes quotas por tier de cliente|
|**Spike Control**|Limita **picos abruptos** de tráfego (throttling)|429|Proteger backend de sobrecarga repentina|
|**OAuth 2.0**|Autenticação via token OAuth delegado|401|APIs com autenticação delegada|
|**JWT Validation**|Valida JSON Web Tokens|401|Sistemas com auth JWT|
|**IP Whitelist/Blacklist**|Permite ou bloqueia IPs específicos|403|Acesso restrito por rede|
|**JSON Threat Protection**|Protege contra ataques via payload JSON malicioso|400|Segurança contra injection|

> 🎯 **Pegadinha mais cobrada:** API com capacidade limitada que retorna erros quando sobrecarregada → aplicar **Spike Control** (não Rate Limiting simples, que é quota total).

> 🎯 **Segunda pegadinha:** Qual política limita por **cliente individual**? → **Rate Limiting - SLA Based** (não Rate Limiting global).

> 🎯 **Terceira pegadinha:** Rate Limiting - SLA Based **implica Client ID Enforcement** — o cliente precisa se identificar para ter sua cota rastreada individualmente.

## Anypoint Monitoring — Recursos

- **Dashboards** → métricas de CPU, memória, requisições, latência, erros
    
- **Alertas** → notificações quando métricas ultrapassam thresholds
    
- **Logs** → logs de aplicação centralizados e pesquisáveis
    
- **Distributed Tracing** → rastrear uma requisição por todas as APIs da cadeia (Experience → Process → System)
    
- **API Analytics** → relatórios de uso: quem chamou, quando, quantas vezes, com quais erros
    

---

# 10. 🔄 CI/CD NO CONTEXTO MULESOFT

**CI/CD** = **Continuous Integration / Continuous Delivery (ou Deployment)** — prática de DevOps que automatiza as etapas de build, teste e publicação de código.

|Sigla|Nome|O que faz|
|---|---|---|
|**CI**|Continuous Integration|Integra código frequentemente, roda testes automaticamente a cada commit|
|**CD**|Continuous Delivery|Código sempre pronto para produção, deploy com aprovação manual|
|**CD**|Continuous Deployment|Deploy em produção **automático** após passar todos os testes|

## Pipeline CI/CD Típico no MuleSoft

text

`Dev faz commit no Git (GitHub / GitLab / Bitbucket)     ↓ [ CI ] Maven Build → compila o projeto Mule     ↓ [ CI ] MUnit → roda testes unitários e de integração automatizados     ↓ [ CI ] Análise de qualidade (cobertura de código, linting)     ↓ [ CD ] Deploy automático em ambiente de DEV / Homologação     ↓ [ CD ] Testes de aceitação (UAT)     ↓ [ CD ] Deploy em PRODUÇÃO (manual no Delivery / automático no Deployment)`

## Ferramentas do Ecossistema CI/CD MuleSoft

|Ferramenta|Papel|
|---|---|
|**Anypoint Studio**|IDE onde o dev cria a app Mule localmente|
|**Git**|Versionamento de código|
|**Maven + Mule Maven Plugin**|Build e empacotamento do projeto Mule|
|**MUnit**|Testes automatizados de apps Mule|
|**Anypoint CLI**|Deploy via linha de comando no CloudHub/Runtime Fabric|
|**Runtime Manager API**|API REST para automação de deploy|
|**Jenkins / GitHub Actions / Azure DevOps**|Orquestram o pipeline CI/CD|

## Ambientes no Salesforce — Dúvida Tirada em Sessão

Os ambientes Salesforce dentro de um ciclo de entrega:

|Ambiente|Tipo|Uso|
|---|---|---|
|**Developer Org / Sandbox Developer**|Non-production|Desenvolvimento individual|
|**Developer Pro Sandbox**|Non-production|Dev com maior volume de dados|
|**Partial Copy Sandbox**|Non-production|Testes com subset de dados reais|
|**Full Sandbox**|Non-production|Testes de performance, cópia completa da produção|
|**Production Org**|Production|Ambiente real com dados reais dos usuários|

**Fluxo típico de deploy:**

text

`Developer Sandbox → QA/Test Sandbox → Full Sandbox (UAT) → Production`

> 🎯 **Ponto de prova:** Apenas a **Production Org** é a org produtiva. Todas as outras são Non-production (Sandboxes). Mudanças de metadados são promovidas via **Change Sets**, **Salesforce CLI** ou **DevOps Center**.

---

# 11. ❓ DÚVIDAS TIRADAS NAS SESSÕES

## "O Composer faz ETL?"

**Resposta:** O Composer faz operações que se assemelham ao ETL (Extract, Transform, Load) de forma simplificada — ele extrai dados de um sistema, permite transformações básicas via Custom Expression Editor e carrega em outro sistema. Porém, **não é um ETL enterprise de alto volume**. Para ETL robusto e complexo → Anypoint Platform com DataWeave.

---

## "Quais triggers disparam um Opportunity no Composer?"

**Resposta:** No Composer, para Salesforce Opportunities os triggers disponíveis são:

- **New Opportunity** → quando uma oportunidade é criada
    
- **New or Updated Opportunity** → criação OU atualização
    
- **Updated Opportunity** → apenas quando atualizada
    

É possível filtrar por campos específicos (ex: Stage = "Closed Won") para que o flow só dispare em condições determinadas.

---

## "Como o Composer se conecta com as outras ferramentas de Hyperautomation?"

text

`Composer ├── → MuleSoft RPA       (aciona processo RPA diretamente como step) ├── → Salesforce Flow    (chama Autolaunched Flow via action) ├── → Anypoint Platform  (invoca APIs publicadas no Exchange) ├── → Einstein Bots      (indiretamente via Salesforce) └── → Sistemas externos  (via conectores nativos: Slack, Jira, NetSuite, etc.)`

---

## "Quais outros pontos devo me atentar para a prova?"

Consolidado no Checklist Final (Seção 12).

---

## "E quanto aos ambientes da Salesforce (Org, Non-production, Dev, Test, Deploy)?"

Respondido na Seção 10 (CI/CD) acima — tabela de ambientes com tipos e usos.

---

## "E quanto ao Apex?"

**Resposta:** Apex é a linguagem de programação proprietária da Salesforce (similar ao Java). No contexto de Hyperautomation:

- Flows podem **chamar classes Apex** via **Invocable Methods** (métodos marcados com `@InvocableMethod`)
    
- Apex pode **chamar Flows** programaticamente via `Flow.Interview`
    
- Apex é usado quando a lógica é **muito complexa** para Flow declarativo
    
- No exame Hyperautomation, Apex aparece como opção de **último recurso** — preferir Flow sempre que possível
    
- **Ordem de preferência (best practice):** Flow → Flow + Invocable Action → Apex
    
    > 🎯 **Regra de ouro:** Na prova, se a questão tiver uma opção com Flow e outra com Apex fazendo a mesma coisa → **escolha Flow**. Apex é mais complexo, mais difícil de manter e não segue o padrão declarativo da Hyperautomation.
    

---

## "Como usar Hyperautomation para postar um vídeo semanal no YouTube?"

**Resposta:** Exemplo prático de solução completa:

text

`1. TRIGGER: Scheduled Flow (toda segunda-feira às 9h)    ↓ 2. PROCESS: Salesforce Flow busca o vídeo da semana    no objeto customizado "Conteudo_Semanal__c"   ↓ 3. INTEGRATION: MuleSoft Composer (ou Anypoint Platform)    chama a YouTube Data API v3   → Endpoint: POST /youtube/v3/videos (upload)   → Endpoint: POST /youtube/v3/videos (publish)   ↓ 4. NOTIFICATION: Flow envia email de confirmação    ou mensagem no Slack via Composer   ↓ 5. MONITOR: Anypoint Monitoring registra    sucesso/falha da publicação`

---

## "Pode me dar exemplos dos três tipos de API que posso encontrar no dia a dia?"

**System API — Exemplo real:**

text

`GET /sap/customers/{id} → Acessa SAP diretamente → Retorna dados brutos do cliente no formato SAP → Só o time de integração usa essa API`

**Process API — Exemplo real:**

text

`GET /orders/{id}/complete → Internamente chama:    - System API do SAP (dados do pedido)   - System API do Salesforce (dados do cliente)   - System API do estoque (disponibilidade) → Agrega, transforma e retorna um objeto consolidado → Contém regra de negócio: "se estoque < 10, marcar como crítico"`

**Experience API — Exemplo real:**

text

`GET /mobile/v1/my-orders → Chama a Process API de pedidos → Filtra apenas os campos que o app mobile precisa → Formata datas no padrão do mobile (DD/MM/YYYY) → Retorna payload leve e otimizado para tela pequena`

---

## "O que é CI/CD?"

Respondido em detalhes na Seção 10 acima.

---

# 12. ✅ CHECKLIST FINAL DE PROVA

## Os pontos mais importantes organizados por domínio e prioridade

---

## 🔴 DOMÍNIO 1 — Best Practices (20%) — ALTA PRIORIDADE

- Saber escolher a ferramenta certa para cada cenário (matriz de decisão)
    
- RPA = somente quando **não há API disponível**
    
- Ordem de preferência para automação: **Flow → Apex → RPA**
    
- Erro transiente = retry automático | Erro poison = Dead Letter Queue
    
- Retry Queue = reprocessamento automático | DLQ = intervenção humana
    
- **Fault Handling** síncrono: rollback ao falhar
    
- **Fault Handling** assíncrono: Retry Queue → DLQ
    
- Design First: **verificar Exchange antes** de criar nova integração
    
- Assets reutilizáveis devem ser **produtos para múltiplos times**, não projetos isolados
    
- Idempotência em RPA: **com Execution ID** = não duplica | **sem Execution ID** = sempre cria nova instância
    

---

## 🔴 DOMÍNIO 4 — MuleSoft RPA (17%) — ALTA PRIORIDADE

- Ciclo de vida: **Evaluate → Design → Build → Test → Deploy → Monitor**
    
- **RPA Builder** = onde o bot é desenvolvido
    
- **RPA Manager** = onde o bot é gerenciado, testado e monitorado
    
- Connected App Scope para conectar ao Anypoint: **"RPA Integrator"**
    
- Para integrar RPA com Flow: importar como **External Service**
    
- Acionar RPA por: RPA Manager / Composer / Anypoint Platform / Salesforce Flow
    
- Test Plans podem rodar **em paralelo** no RPA Manager
    
- Falhou no Test → volta para **Build** com pacote de análise automático
    
- Um processo pode rodar em **múltiplos bots** simultaneamente em produção
    
- Invocação **idempotente** = passa Execution ID = evita duplicatas
    

---

## 🟠 DOMÍNIO 5 — Anypoint Platform: Entrega de APIs (15%) — ALTA PRIORIDADE

- API-Led Connectivity tem **3 camadas**: Experience → Process → System
    
- Lógica de negócio fica na **Process Layer**
    
- **CloudHub** = deploy padrão gerenciado pela MuleSoft (AWS)
    
- **Runtime Fabric** = usa Docker/Kubernetes, infra da empresa, controle centralizado
    
- **On-Premises** = controle total, dados não saem da empresa
    
- **MUnit** = testes unitários automatizados de apps Mule (roda no CI/CD)
    
- **Mocking Service** = testa especificação RAML sem backend implementado
    
- RAML fragmentos reutilizáveis: **Data Type, Trait, Resource Type, Security Scheme**
    
- `baseUri`, `version`, `types`, `traits`, `securitySchemes` são elementos RAML
    
- Maven + Mule Maven Plugin fazem o **build** de projetos Mule no CI/CD
    

---

## 🟠 DOMÍNIO 4 — Salesforce Flow (13%) — ALTA PRIORIDADE

- **5 tipos de Flow**: Screen, Record-Triggered, Scheduled, Autolaunched, Platform Event-Triggered
    
- Screen Flow = **requer interação humana**, não suporta Wait elements
    
- Record-Triggered: **Before Save** (mais performático) vs **After Save** (para registros relacionados)
    
- `isChanged` **não funciona** em Async Paths
    
- **Nunca DML dentro de loop** → governor limits (máx 2.000 registros em batch)
    
- Einstein Bot + Custom Object + Autolaunched Flow = integração com sistema externo sem objeto padrão
    
- Integrar RPA via **External Service + Invocable Actions**
    
- Preferir **Flow sobre Apex** sempre que possível
    

---

## 🟡 DOMÍNIO 8 — Flow Orchestration (8%) — MÉDIA PRIORIDADE

- Hierarquia: **Orchestration → Stages → Steps → Flows**
    
- Stages executam **sequencialmente**
    
- Steps dentro do mesmo Stage podem executar **em paralelo**
    
- **Interactive Step** = Screen Flow + requer humano
    
- **Background Step** = Autolaunched Flow + automático
    
- **Evaluation Flow** = controla entrada/saída de Stages e Steps com lógica complexa
    
- Evaluation Flow retorna **somente** `isOrchestrationConditionMet` (Boolean)
    
- Inicializar `isOrchestrationConditionMet` como **false**, setar **true** quando condição atendida
    
- **Work Guides** = interface onde usuários completam seus Interactive Steps
    

---

## 🟡 DOMÍNIO 2 — Composer (12%) — MÉDIA PRIORIDADE

- Composer é **no-code** — para admins e analistas, não devs
    
- Composer **não é para alto volume** → Anypoint Platform para isso
    
- Triggers: New Record / Updated Record / New or Updated / Scheduler
    
- Custom Expression Editor: abas **Functions, Data, Operators**
    
- Funções built-in usam **DataWeave** por baixo
    
- `fromBooleanToString()` = converter tipo de dado
    
- Composer pode acionar **RPA, Flows Salesforce e APIs Anypoint**
    
- Controles de flow: **If/Else, For Each, Try/Catch, Stop**
    

---

## 🟡 DOMÍNIO 7 — Anypoint Exchange (8%) — MÉDIA PRIORIDADE

- **Template** = app Mule reutilizável por outros times (não confundir com Example)
    
- **Example** = demonstrativo apenas
    
- **Fragment** = pedaço RAML reutilizável (Data Type, Trait)
    
- Verificar Exchange **antes** de criar nova integração
    
- Asset states: **Development → Published → Deprecated**
    
- Mocking Service disponível no **API Designer** e no **Exchange**
    
- Mocking Service retorna dados dos **exemplos definidos no RAML**
    

---

## 🟡 DOMÍNIO 6 — Monitoramento de APIs (7%) — MÉDIA PRIORIDADE

- **API Gateway enforça** políticas | **API Manager configura** políticas
    
- **Spike Control** = protege contra picos abruptos (RPA com capacidade limitada)
    
- **Rate Limiting** = quota total global
    
- **Rate Limiting - SLA Based** = quota **por cliente individual** (requer Client ID)
    
- **Client ID Enforcement** = controle de acesso básico por aplicação registrada
    
- Spike Control → retorna **429** quando pico detectado
    
- Rate Limiting SLA → **401** (credencial inválida) ou **429** (quota excedida)
    
- **Anypoint Monitoring**: dashboards, alertas, logs, distributed tracing, API analytics