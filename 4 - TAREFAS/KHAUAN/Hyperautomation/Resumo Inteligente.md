
# Resumo Inteligente — Trilha: Get Started with MuleSoft Composer

> **Fonte:** Trailhead — 3 módulos, 10 unidades, ~1.000 pontos

---

## 🧭 1. Contexto da Ferramenta — O que é o MuleSoft Composer?

O MuleSoft Composer é uma ferramenta de integração **low-code/no-code** voltada para usuários de negócio e admins Salesforce — não apenas desenvolvedores. Ele resolve o problema crônico de dados **siloed** (isolados em sistemas distintos) sem depender de times de TI sobrecarregados.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/get-to-know-mulesoft-composer)​

**Posicionamento no ecossistema:**

- Roda embutido no Salesforce org (via App Launcher) ou como aplicação standalone
    
- Por baixo dos panos, é **powered pelo MuleSoft Anypoint Platform** — quando você habilita os serviços MuleSoft, o Salesforce cria automaticamente uma org no Anypoint Platform para rodar e gerenciar os flows[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-install-and-config/enable-mulesoft-services-and-user-access)​
    
- Também é conhecido como **MuleSoft Composer for Salesforce**
    

---

## 🎯 2. Por que Utilizar o Composer?

## Problemas que ele resolve:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/get-to-know-mulesoft-composer)​

|Cenário|Solução sem Composer|Com Composer|
|---|---|---|
|Opportunity Closed Won → criar Sales Order no NetSuite|Processo manual repetitivo|Flow automatizado por evento|
|Atualizar contatos no Salesforce a partir de Google Sheets|Export/import manual|Sincronização automática|
|Publicar dados de leads do Salesforce no Tableau Cloud|Export CSV semanal manual|Flow com scheduler|

## Para quem é:

- System admins, analistas de negócio, marketers, salespeople, team leaders
    
- **Qualquer pessoa**, independente de background técnico — zero código necessário[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/get-to-know-mulesoft-composer)​
    

## Benefícios-chave:

- Elimina dependência de equipes de TI para integrações
    
- Reduz erros humanos em processos manuais
    
- Libera time para trabalho estratégico em vez de tarefas repetitivas
    
- Oferece **conectores prontos** para: Salesforce, Tableau, Slack, NetSuite, Workday, Google Sheets, Jira, entre outros (novos sendo adicionados continuamente)[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/get-to-know-mulesoft-composer)​
    

---

## 🏗️ 3. Arquitetura e Componentes de um Flow

Um **Flow** no Composer é uma sequência de passos que integra sistemas e automatiza dados. Ele funciona como um processo **ETL (Extract, Transform, Load)**.

## Componentes de Interação com Sistemas:

|Componente|Função|
|---|---|
|**Trigger**|Inicia o flow. Pode ser: _System Event_ (evento em um sistema), _Scheduler_ (intervalo de tempo), ou _Invoke_ (via HTTP POST externo)|
|**Connection**|Configuração de credenciais para conectar a um sistema (ex.: Salesforce sandbox, NTO Slack)|
|**System Action**|Step que executa uma tarefa: extrair, criar, atualizar ou notificar em um sistema|
|**Variable**|Armazena dados, data pills ou expressões customizadas dentro do flow|

## Componentes de Lógica e Controle:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/explore-mulesoft-composer)​

|Componente|Função|
|---|---|
|**If/Else Block**|Avalia condições e direciona o flow por branches diferentes|
|**For Each Block**|Itera sobre uma coleção de registros, executando ações em cada um|
|**Error Handler Block**|Monitora steps com Watch/On Error — se falhar, executa ações de contingência|

## Data Pills:

Dados de saída de cada step são encapsulados em **data pills** — variáveis que fluem de um step para o próximo, podendo ser mapeadas nos campos do sistema destino.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-flow/map-and-retrieve-data-in-action-steps)​

---

## 🔄 4. Ciclo de Vida Completo de um Flow

O Composer define um ciclo de vida claro em 5 etapas:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/explore-mulesoft-composer)​

text

`1. PLAN → 2. DESIGN & TEST → 3. ACTIVATE → 4. MONITOR & TROUBLESHOOT → 5. DEACTIVATE`

## Detalhando cada fase:

**1. Planejar**

- Identificar o problema de integração
    
- Mapear os sistemas envolvidos e suas credenciais
    
- Definir campos customizados de cross-reference entre sistemas (ex.: ID do produto Salesforce no NetSuite)[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-flow/create-a-flow)​
    

**2. Design & Test**

- Criar o flow no canvas visual
    
- Adicionar Trigger → Actions → Lógica condicional
    
- Mapear data pills entre steps
    
- Testar com dados de sandbox antes de ir para produção
    
- Usar **Select Fields** para filtrar apenas os campos necessários do objeto
    

**3. Ativar**

- Trocar conexões de sandbox por conexões de produção
    
- Clicar em **Activate** — o flow passa a rodar em background automaticamente[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-flow/activate-monitor-and-troubleshoot-a-flow-19)​
    
- Após ativação: integração near real-time entre sistemas
    

**4. Monitorar & Troubleshoot**

- O Composer roda verificações a cada **15 minutos** para detectar flows com falha
    
- Envia **notificações por email** ao owner do flow com erros
    
- Na página do flow: **Run History** mostra ID, Start/End date, Status de cada instância
    
- Para depurar: filtrar por `Status: Failed` e analisar a mensagem de erro detalhada (ex.: CLIENT_ERROR com valor inválido para canal Slack)[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-flow/activate-monitor-and-troubleshoot-a-flow-19)​
    
- O Anypoint Platform gerencia automaticamente o deploy, scaling e gestão dos flows
    

**5. Desativar**

- Quando o flow não serve mais ao propósito original, deve ser desativado
    

---

## 🔧 5. Instalação e Configuração

O setup no Salesforce segue este fluxo:

text

`Compra → Admin instala Managed Package → Pré-autoriza usuários (OAuth) →  Habilita MuleSoft Services (cria org Anypoint) → Atribui Permission Set → Launch`

**Pontos críticos:**

- O managed package é instalado via **Setup > MuleSoft Composer**
    
- Para pré-autorizar: OAuth Policy = **"Admin approved users are pre-authorized"** + IP Relaxation = **"Relax IP restrictions"**[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-install-and-config/install-mulesoft-composer-and-preauthorize-users)​
    
- Ao habilitar MuleSoft Services com **Initiate Configuration**, o Salesforce cria automaticamente uma org e conta no Anypoint Platform[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-install-and-config/enable-mulesoft-services-and-user-access)​
    
- O **permission set "MuleSoft Composer User"** é obrigatório para criar e rodar flows
    
- **Não está disponível no Trailhead Playground** — requer org real ou sandbox
    

---

## 🗺️ 6. Mapeamento e Transformação de Dados

## Mapeamento de Dados:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-flow/map-and-retrieve-data-in-action-steps)​

Ao configurar um action step, você mapeia campos do objeto destino para **source values**:

- Text strings / numbers (valores fixos)
    
- **Data pills** (output de steps anteriores)
    
- Picklist values de data pills
    
- Custom Expressions (combinação de texto + data pills + funções)
    

## Filtros e Condições em Get Records:

- Operadores disponíveis: `Equals`, `Does not equal`, `Contains`, `Starts with`, `Ends with`, `Is Empty`, `Is Not Empty`
    
- Combinação lógica com **AND** (todas as condições) ou **OR** (qualquer condição)[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-flow/map-and-retrieve-data-in-action-steps)​
    
- Possibilidade de ordenar resultados Ascending/Descending por campo
    

## Custom Expression Editor:

Permite construir expressões avançadas combinando:

- Data pills de qualquer step anterior
    
- Funções e fórmulas de transformação
    
- Texto literal
    

---

## ⚡ 7. MuleSoft Composer no Contexto de Hyperautomação

O Composer se encaixa como a **camada de integração citizen-led** dentro de uma estratégia de Hyperautomação:

text

`┌─────────────────────────────────────────────────────┐ │               HYPERAUTOMAÇÃO                         │ │                                                      │ │  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  │ │  │  MuleSoft   │  │  Salesforce  │  │  MuleSoft  │  │ │  │  Composer   │  │   Flow/RPA   │  │  Anypoint  │  │ │  │ (Citizen    │  │ (Automation) │  │ (Dev-grade │  │ │  │ Integration)│  │              │  │   APIs)    │  │ │  └─────────────┘  └──────────────┘  └────────────┘  │ └─────────────────────────────────────────────────────┘`

**Como o Composer se conecta com ferramentas do ecossistema:**

|Ferramenta|Tipo de Conexão|
|---|---|
|**Salesforce (Sales Cloud, Service Cloud)**|Trigger + Action nativo — evento em record inicia flows|
|**Slack**|Action — post messages, notificações automáticas|
|**NetSuite**|Action — criar/atualizar Sales Orders, sincronizar dados financeiros|
|**Google Sheets**|Action + Trigger — leitura/escrita de spreadsheets como fonte de dados|
|**Tableau**|Action — publicar datasets e extracts automaticamente|
|**Jira**|Action — criar issues automaticamente a partir de cases do Salesforce|
|**Workday**|Action — integração com dados de RH|
|**MuleSoft Anypoint Platform**|Backend — o Anypoint gerencia a execução de todos os flows do Composer|
|**Agentforce MuleSoft**|Evolução — integração com agentes de IA para automação inteligente|

**Invoke Trigger** (HTTP POST externo) permite que **MuleSoft RPA** ou outros sistemas externos disparem flows do Composer, criando uma ponte direta entre RPA e integração de dados.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-composer-basics/explore-mulesoft-composer)​

---

## 📋 Resumo Executivo

|Aspecto|Resumo|
|---|---|
|**O que é**|Ferramenta de integração low-code nativa no Salesforce, powered by Anypoint Platform|
|**Para quem**|Admins, analistas, business users — sem necessidade de código|
|**Como funciona**|Flows com Trigger → Actions → Lógica → Ativação em produção|
|**Ciclo de vida**|Plan → Design/Test → Activate → Monitor → Deactivate|
|**No ecossistema**|Camada citizen de integração entre Salesforce, apps SaaS e sistemas legados|
|**Hyperautomação**|Complementa RPA (MuleSoft RPA) e automação (Salesforce Flow) com integração de dados sem código|
|**Diferencial**|Zero dependência de TI, conectores prontos, monitoramento automático, escalado pelo Anypoint|

Perguntas: Então durante o exame de certificação, quando mencionar ETL é algo voltado para o Composer? O que seria um Opportunity? O Composer pode ser disparado (Invocado) por outras ferramentas? Mas ele pode invocar outras ferramentas também?

Concluiu 1 etapa

Ótimas perguntas — vou responder cada uma com precisão de prova.

---

## 1. ETL é algo voltado para o Composer no exame?

**Não exclusivamente — mas o Composer é o contexto mais direto quando ETL aparecer.**

O módulo define claramente: _"In a nutshell, a flow is an extract, transform, load (ETL) process"_. Então no exame, se aparecer ETL associado ao Composer, é correto — o flow executa exatamente esse ciclo:

text

`EXTRACT   → Trigger/Get Records buscam dados do sistema fonte TRANSFORM → Data pills + Custom Expressions + funções reformatam os dados LOAD      → System Action carrega/cria/atualiza no sistema destino`

**Porém, atenção:** ETL não é exclusivo do Composer. No universo MuleSoft/Salesforce em geral, o Anypoint Platform e o próprio DataWeave também fazem ETL — mas em nível de desenvolvimento (pro-code). Se a questão do exame contextualizar **"low-code"**, **"citizen integration"** ou **"flow"**, ETL = Composer. Se contextualizar **"Anypoint Studio"**, **"DataWeave"**, **"API"** — aí é o lado desenvolvedor da plataforma.

---

## 2. O que seria uma Opportunity?

**Opportunity é um objeto padrão do Salesforce CRM** — representa uma **oportunidade de venda em andamento**.

No contexto de negócios:

- É um registro que acompanha o ciclo de vendas de um potencial negócio
    
- Tem campos como: Stage (fase), Amount (valor), Close Date, Account relacionado, produtos associados
    

**Os stages mais comuns incluem:**

- Prospecting → Qualification → Proposal → Negotiation → **Closed Won** / Closed Lost
    

O exemplo clássico da trilha usa exatamente isso: quando uma Opportunity é atualizada para **Closed Won** no Salesforce, o Composer automaticamente cria um **Sales Order no NetSuite** — sem nenhuma ação manual. Esse é o trigger de system event: `On New or Updated Record → Object: Opportunity`.

Em resumo: **Opportunity = negócio que o time de vendas está trabalhando para fechar**. É um dos objetos mais usados em triggers de automação no ecossistema Salesforce.

---

## 3. O Composer pode ser invocado por outras ferramentas E invocar outras ferramentas?

**Sim para os dois lados — e esse é um ponto crítico para a prova de Hyperautomação.**

## Ser invocado (Inbound):

O Composer possui o tipo de trigger **"Invoke"** — que expõe o flow como um **endpoint HTTP POST**. Isso significa que:

- MuleSoft RPA pode terminar um processo robótico e chamar um flow do Composer via HTTP
    
- Salesforce Flow pode invocar o Composer via chamada externa
    
- Qualquer sistema com capacidade de fazer requisições HTTP pode disparar o flow
    

## Invocar outras ferramentas (Outbound):

Através dos **System Actions** com connectors, o Composer pode acionar ativamente:

|Ferramenta|O que o Composer pode fazer|
|---|---|
|Salesforce|Criar/atualizar records, buscar dados|
|NetSuite|Criar Sales Orders, sincronizar dados financeiros|
|Slack|Postar mensagens em canais, notificar usuários|
|Jira|Criar issues, atualizar tickets|
|Google Sheets|Ler e escrever dados em planilhas|
|Tableau|Publicar datasets e extracts|
|Workday|Integrar dados de RH|

## O fluxo no contexto de Hyperautomação fica assim:

text

`[Evento externo / RPA / Schedule]          ↓  (Invoke / System Event / Scheduler)   [MuleSoft Composer Flow]         ↓  (System Actions via Connectors) [Salesforce] [NetSuite] [Slack] [Jira] [etc.]`

**Resumindo para a prova:** O Composer é **bidirecional** — ele tanto **escuta eventos** de sistemas externos quanto **aciona ativamente** outros sistemas. O Invoke Trigger especificamente é o que habilita que ferramentas como MuleSoft RPA o chamem programaticamente, tornando-o um elemento central na arquitetura de Hyperautomação.

E quanto aos gatilhos que disparam o Composer?

Concluiu 1 etapa

Os gatilhos do Composer são exatamente **3 tipos**, e é importante saber diferenciá-los para a prova:

---

## Os 3 Tipos de Trigger do MuleSoft Composer

## 🔵 1. System Event (Evento de Sistema)

**O que é:** O flow é disparado automaticamente quando um **evento ocorre em um sistema conectado**.

**Como funciona:**

- Você conecta a um sistema via connector (ex.: Salesforce, NetSuite, Jira)
    
- Define qual evento interessa: `New or Updated Record`, `New Record`, etc.
    
- Toda vez que esse evento acontece no sistema, o flow é acionado em near real-time
    

**Exemplos práticos:**

- Uma Opportunity é atualizada para **Closed Won** no Salesforce → cria Sales Order no NetSuite
    
- Um novo Case é criado no Service Cloud → abre Issue no Jira
    
- Um Account é criado ou atualizado → envia notificação no Slack
    

> **Ponto de atenção:** Nem todo connector funciona como trigger — alguns só funcionam como Action. Se um connector não aparecer na lista de triggers, verifique se está disponível como action.

---

## 🟡 2. Scheduler (Agendador)

**O que é:** O flow é disparado em **intervalos regulares de tempo**, independente de qualquer evento.

**Como funciona:**

- Você define um intervalo: a cada 15, 30, 45 min... até 30 dias
    
- Após ativação, o flow começa a rodar no próximo ciclo e continua indefinidamente
    

**Exemplo prático:**

- Ativar às 8h de segunda → primeira execução às 9h → continua a cada 1 hora até ser desativado
    

**Quando usar:**

- Sincronizações periódicas (ex.: toda semana exportar leads para Tableau)
    
- Processos batch que não dependem de um evento específico
    
- Relatórios e atualizações recorrentes
    

---

## 🟠 3. Invoke (Invocação Externa)

**O que é:** O flow é disparado por um **sistema externo via HTTP POST request**.

**Como funciona:**

- O Composer expõe o flow como um endpoint HTTP
    
- Qualquer sistema com capacidade de fazer requisições HTTP pode chamar esse endpoint e iniciar o flow
    

**Quando usar:**

- **MuleSoft RPA** termina um processo robótico e precisa acionar uma integração de dados
    
- Salesforce Flow ou outro orquestrador precisa delegar uma integração para o Composer
    
- Sistemas legados ou APIs externas precisam disparar uma automação no Composer
    

> Este é o trigger mais importante no contexto de **Hyperautomação** — é ele que conecta o Composer como peça de um orquestrador maior, recebendo chamadas de outras ferramentas do ecossistema.

---

## Resumo Visual para a Prova

text

`┌──────────────────────────────────────────────────────────┐ │              TRIGGERS DO MULESOFT COMPOSER               │ ├─────────────────┬────────────────────┬───────────────────┤ │  SYSTEM EVENT   │    SCHEDULER       │     INVOKE        │ ├─────────────────┼────────────────────┼───────────────────┤ │ Baseado em      │ Baseado em         │ Baseado em        │ │ EVENTO          │ TEMPO              │ CHAMADA EXTERNA   │ ├─────────────────┼────────────────────┼───────────────────┤ │ Ex.: Record     │ Ex.: A cada 1h,    │ Ex.: HTTP POST    │ │ criado/atualiz. │ 15min, 30 dias     │ de RPA ou Flow    │ ├─────────────────┼────────────────────┼───────────────────┤ │ Real-time       │ Periódico/Batch    │ On-demand         │ └─────────────────┴────────────────────┴───────────────────┘`

**Macete para a prova:** Se a questão mencionar "real-time reativo" → System Event. "Periódico/recorrente" → Scheduler. "Acionado por outra ferramenta/sistema" → Invoke.

Passamos pelas ferramentas!! Pesquise por outros bons pontos importantes conforme o edital do exame

Concluiu 9 etapas

Com base no edital oficial e nas fontes de estudo identificadas, aqui estão os principais pontos adicionais que o exame **Salesforce Certified MuleSoft Hyperautomation Developer (Mule-Dev-202)** cobre e que ainda não tinham sido detalhados:​

---

## 🗂️ Estrutura Oficial do Exame

|Domínio|Peso|
|---|---|
|**Best Practices para Hyperautomation**|20%|
|**Composer para Integrações**|12%|
|**MuleSoft RPA**|17%|
|**Salesforce Flow**|13%|
|**Anypoint Platform — Entrega de APIs**|15%|
|**Anypoint Platform — Monitoramento**|7%|
|**Anypoint Exchange — Catálogo e Reuso**|8%|
|**Flow Orchestration — Workstreams**|8%|

> **60 questões, 90 min, aprovação com 70% (42 acertos), sem pré-requisitos**[](https://trailheadacademy.salesforce.com/pt-BR/certificate/exam-hyperautomation-developer---Mule-Dev-202)​

---

## 📦 Anypoint Exchange — Tipos de Assets (8%)[](https://www.p2pexams.com/free-questions/sample-questions-for-salesforce-certified-hyperautomation-specialist-exam-by-blair.pdf)​

|Tipo|Uso|
|---|---|
|**API Asset**|Especificação RAML/OAS|
|**Template Asset**|App Mule reutilizável entre times|
|**Connector Asset**|Conector de sistema (Salesforce, SAP…)|
|**Custom Asset**|Documentação genérica|

> 🎯 **Pegadinha:** Para compartilhar uma app Mule com outros times criarem soluções similares → **Template Asset**, não Custom Asset[](https://www.p2pexams.com/free-questions/sample-questions-for-salesforce-certified-hyperautomation-specialist-exam-by-blair.pdf)​

- Verificar o Exchange **antes** de criar nova integração (evitar retrabalho)[](https://www.certshero.com/salesforce/salesforce-hyperautomation-specialist/practice-test)​
    
- Usar **Mocking Service** para testar APIs antes de ter backend implementado
    

---

## 📡 Monitoramento e Políticas de API (7%)[](https://www.p2pexams.com/free-questions/sample-questions-for-salesforce-certified-hyperautomation-specialist-exam-by-blair.pdf)​

- **API Manager** → _configura_ políticas
    
- **API Gateway** → _executa/enforça_ políticas no runtime
    

> 🎯 **Pegadinha:** Qual componente **enforça** políticas? **API Gateway** — não API Manager[](https://www.p2pexams.com/free-questions/sample-questions-for-salesforce-certified-hyperautomation-specialist-exam-by-blair.pdf)​

**Políticas mais cobradas:**​

- **Spike Control** → protege contra picos abruptos
    
- **Rate Limiting** → quota total de chamadas
    
- **Client ID Enforcement** → exige credenciais de
    

Aprofunde sobre os assuntos!

Concluiu 9 etapas

# 🎓 APROFUNDAMENTO COMPLETO — Salesforce Certified MuleSoft Hyperautomation Developer

---

## 🏗️ DOMÍNIO 1 — Best Practices para Hyperautomation (20%)

> **O maior domínio do exame — vale 1 em cada 5 questões**

## Ciclo de Vida de um Projeto de Hyperautomation

text

`1. DESCOBERTA → Identificar processos para automatizar (avaliar ROI, repetitividade) 2. DESIGN     → Definir arquitetura, escolher ferramentas, mapear integrações 3. BUILD      → Desenvolver as automações (RPA, Flows, APIs) 4. TEST       → Testar unitariamente e end-to-end 5. DEPLOY     → Publicar em produção 6. MONITOR    → Observar performance, tratar falhas, otimizar`

## Matriz de Decisão de Ferramentas — A Mais Cobrada do Exame

|Cenário|Ferramenta Correta|Por quê?|
|---|---|---|
|Integrar dois SaaS sem código (ex: Salesforce ↔ Slack)|**MuleSoft Composer**|No-code, conectores nativos para SaaS|
|Automatizar UI de sistema legado sem API|**MuleSoft RPA**|Interage com interface gráfica|
|Orquestrar processo multiequipe com aprovações humanas|**Flow Orchestration**|Coordena workflows com etapas interativas|
|API de alto volume, transformação complexa, produção|**Anypoint Platform**|Robustez, escalabilidade, políticas|
|Atualizar campo quando registro é criado/editado|**Record-Triggered Flow**|Automação declarativa nativa Salesforce|
|Processo agendado (ex: todo dia às 9h)|**Scheduled Flow**|Temporização nativa|
|Interação conversacional com cliente|**Einstein Bot**|NLU e diálogos|
|Reuso de integração já criada por outro time|**Anypoint Exchange**|Repositório central de assets|

> 🎯 **Pegadinha clássica:** RPA deve ser usado **somente quando o sistema NÃO tem API disponível**. Se tem API → use Anypoint ou Composer. Usar RPA em sistema com API é má prática e certamente cai na prova[](https://docs.mulesoft.com/rpa-home/)​

## Fault Handling — Tratamento de Falhas em Profundidade[](https://blogs.mulesoft.com/dev-guides/how-to-tutorials/error-handling-integration-patterns/)​

**Padrão Síncrono (requisição-resposta):**

- Se um passo falha → **rollback** de todas as transações anteriores
    
- Erros transitórios: tentativas com **retry automático** (max retries + retry interval configuráveis)
    
- Após esgotar retries: rollback + log + retorna erro ao solicitante
    

**Padrão Assíncrono (filas/eventos):**

- **Retry Queue** → fila para reprocessamento automático de mensagens com falha transiente
    
- **Dead Letter Queue (DLQ)** → fila de mensagens "envenenadas" que falharam repetidamente e precisam de intervenção manual
    
- Mensagem enviada à DLQ contém: Error Code, Error Message, Process Queue Name, SLA, Last Processed Timestamp
    

> 🎯 **Pegadinha:** A diferença entre erro **transiente** (temporário, ex: timeout de rede → pode ser reprocessado automaticamente) vs erro **poison/envenenado** (permanente, ex: dado inválido → precisa de intervenção humana → vai para DLQ)[](https://blogs.mulesoft.com/dev-guides/how-to-tutorials/error-handling-integration-patterns/)​

## Componibilidade e Reuso

- **Design first** → Antes de construir, verificar no Exchange se já existe
    
- **Assets como produtos** → APIs e templates devem servir múltiplos times, não um projeto específico
    
- **Fragmentos RAML reutilizáveis** → Data Types, Traits, Security Schemes compartilhados via Exchange[](https://conscendo.io/designing-reusable-assets-anypoint-exchange-best-practices/)​
    
- **Shared Libraries Mule** → Lógica comum (logging, error handling, transformações) empacotada uma vez e reusada
    

---

## 📦 DOMÍNIO 2 — Anypoint Exchange: Catálogo e Reuso (8%)

## O que é o Exchange

Repositório central (marketplace interno + público) da Anypoint Platform para publicar, descobrir, compartilhar e reusar assets de integração.

## Tipos de Assets — Detalhado

|Tipo de Asset|Descrição|Exemplo de Uso|
|---|---|---|
|**API Specification**|Especificação RAML ou OAS de uma API|Contrato de uma API de Pedidos|
|**REST API**|API implementada e publicada|API de Clientes em produção|
|**Template**|App Mule completa, configurável e reutilizável|Template de sincronização Salesforce ↔ SAP|
|**Example**|App Mule demonstrativa (não reutilizável como template)|Exemplo de uso de conector Kafka|
|**Connector**|Conector para sistema específico|MuleSoft Connector for Salesforce|
|**Custom**|PDFs, imagens, documentação genérica|Guia de onboarding de APIs|
|**Fragment**|Fragmento RAML reutilizável (Data Type, Trait…)|Tipo de dados "Endereço" compartilhado|
|**Policy**|Política de API customizada|Política de segurança corporativa|

> 🎯 **Pegadinha:** Para **compartilhar uma app Mule com outros times para criarem soluções similares** → resposta correta é **Template Asset**, não "Example" (que é só demonstração) nem "Custom Asset" (documentação genérica)[](https://docs.mulesoft.com/rpa-manager/processautomation-deploy)​

## Fluxo de Publicação no Exchange[](https://docs.mulesoft.com/exchange/workflow-sharing-assets)​

text

`API Designer (escreve RAML)      → Publica no Exchange (status: Draft/Development)    → Revisão e aprovação (status: Published)    → Consumida por outros times    → Versão mais nova? Versão anterior vai para: Deprecated`

## Mocking Service — Teste Antes do Backend[](https://docs.mulesoft.com/design-center/design-mocking-service)​

- Disponível diretamente no **API Designer** e no **Exchange**
    
- Simula chamadas reais à API usando os exemplos definidos no RAML/OAS
    
- Retorna dados fictícios para validar o contrato da API antes de qualquer implementação
    
- Pode ser acessado publicamente (endpoint público) ou privadamente (requer token)
    

> 🎯 **Distinção crítica:**
> 
> - **Mocking Service** = testa especificação da API (sem backend implementado)
>     
> - **MUnit** = testa a **implementação** da aplicação Mule (com lógica de integração)
>     

## Best Practices Exchange

- Sempre verificar o Exchange **antes** de criar nova integração — evita duplicação[](https://docs.mulesoft.com/rpa-home/)​
    
- Nomear assets com convenção clara (ex: `sistema-recurso-versão`)
    
- Adicionar documentação, exemplos e casos de uso no Exchange
    
- Gerenciar **categorias** e **tags** para facilitar descoberta
    
- Versionar semanticamente (v1.0.0, v1.1.0, v2.0.0)
    

---

## 📡 DOMÍNIO 3 — Anypoint Platform: APIs (Entrega 15% + Monitoramento 7%)

## API-Led Connectivity — As 3 Camadas

text

`┌─────────────────────────────────────────────────┐ │  EXPERIENCE LAYER (APIs de Experiência)          │ │  → Expostas para o consumidor final              │ │  → Mobile App, Web, Partner Portal               │ │  → Adaptadas por canal                           │ ├─────────────────────────────────────────────────┤ │  PROCESS LAYER (APIs de Processo)               │ │  → Orquestram múltiplas System APIs              │ │  → Contém lógica de negócio                     │ │  → Agregação, transformação, roteamento          │ ├─────────────────────────────────────────────────┤ │  SYSTEM LAYER (APIs de Sistema)                 │ │  → Comunicam diretamente com backends            │ │  → SAP, Salesforce, banco de dados, ERP          │ │  → Isolam a complexidade do sistema legado       │ └─────────────────────────────────────────────────┘`

> 🎯 **Pegadinha:** Se o exame perguntar "onde fica a lógica de negócio de integração?" → **Process Layer**. Se perguntar "onde o mobile app consome a API?" → **Experience Layer**.

## RAML — Pontos Detalhados do Exame[](https://www.pass4success.com/salesforce/exam/salesforce-hyperautomation-specialist)​

**Elementos de uma especificação RAML:**

- `title` → nome da API
    
- `version` → versão (ex: v1)
    
- `baseUri` → URL base (ex: `https://api.empresa.com/v1`)
    
- `mediaType` → formato padrão (application/json)
    
- `types` → definição de tipos de dados (Data Types)
    
- `traits` → comportamentos reutilizáveis (ex: paginação, autenticação)
    
- `resourceTypes` → tipos de recursos reutilizáveis
    
- `securitySchemes` → esquemas de segurança (OAuth 2.0, Basic Auth)
    
- `/recursos` → endpoints com métodos (GET, POST, PUT, PATCH, DELETE)
    

**Fragmentos RAML (reutilizáveis via Exchange):**

- **Data Type** → define estrutura de objetos (ex: `Customer`, `Order`)
    
- **Trait** → define comportamento compartilhado (ex: paginação, error-response)
    
- **Resource Type** → template de recurso completo
    
- **Security Scheme** → esquema de segurança reutilizável
    

## Políticas de API — Detalhe Completo

|Política|Função|Código de Retorno|Quando usar|
|---|---|---|---|
|**Client ID Enforcement**|Exige Client ID (e opcionalmente Client Secret) para acessar a API|401 se inválido|Controle de acesso básico por aplicação|
|**Rate Limiting**|Limita número total de requisições por janela de tempo|429 se excedido|Quota geral de uso|
|**Rate Limiting - SLA Based**|Limita requisições **por contrato/cliente** (SLA individual)|401 (credencial inválida), 429 (quota excedida)|Diferentes quotas por tier de cliente|
|**Spike Control**|Limita picos abruptos de tráfego (throttling)|429|Proteger backend de sobrecarga repentina|
|**OAuth 2.0**|Autenticação via token OAuth|401|APIs com autenticação delegada|
|**JWT Validation**|Valida JSON Web Tokens|401|Sistemas com autenticação JWT|
|**IP Whitelist**|Permite apenas IPs específicos|403|Acesso restrito por rede|
|**JSON Threat Protection**|Protege contra ataques via payload JSON malicioso|400|Segurança contra injection|

> 🎯 **Pegadinha de prova:** Uma API de RPA tem capacidade limitada e retorna erros quando sobrecarregada. Qual política aplicar? → **Spike Control** (não Rate Limiting, que é quota total)[](https://www.exact2pass.com/salesforce-hyperautomation-specialist-salesforce-certified-hyperautomation-specialist-exam-question.html)​​

> 🎯 **Outra pegadinha:** Qual política limita requisições **por cliente individual**? → **Rate Limiting - SLA Based** (não Rate Limiting simples, que é global)[](https://www.p2pexams.com/free-questions/dumpssheet-salesforce-certified-hyperautomation-specialist-questions-by-santana-22-07-2024-11qa.pdf)​

## API Gateway vs API Manager

|Componente|Papel|Onde fica|
|---|---|---|
|**API Manager**|**Configura** políticas, define contratos, gerencia versões|Anypoint Platform (cloud)|
|**API Gateway**|**Executa/enforça** políticas em runtime, intercepta tráfego|Runtime (on-prem ou CloudHub)|
|**Anypoint Monitoring**|Dashboards, alertas, logs, métricas de performance|Anypoint Platform|

> 🎯 **Pegadinha:** "Qual componente é responsável por **enforçar** políticas de API?" → **API Gateway**[](https://docs.mulesoft.com/rpa-manager/processautomation-deploy)​

## Opções de Deploy — Comparativo Detalhado

|Opção|Gerenciamento|Onde roda|Ideal para|
|---|---|---|---|
|**CloudHub**|MuleSoft gerencia tudo|Cloud AWS (multi-tenant)|Padrão, fácil, sem infraestrutura própria|
|**CloudHub 2.0**|MuleSoft gerencia (containers)|Cloud (containers isolados)|Isolamento maior, mais moderno|
|**Runtime Fabric**|Empresa gerencia infra|On-prem ou cloud própria (Kubernetes/Docker)|Empresas reguladas, dados sensíveis|
|**On-Premises (Standalone)**|Empresa gerencia tudo|Servidor físico da empresa|Controle total, latência baixa, sem cloud|
|**Hybrid**|Misto|Cloud + on-prem|Transição gradual para cloud|
|**Anypoint Studio (local)**|Desenvolvedor|Máquina local|Desenvolvimento e testes apenas|

> 🎯 **Pegadinha:** Runtime Fabric usa **Docker e Kubernetes** para orquestração. Permite deploy em múltiplas clouds e on-prem com **controle centralizado** pelo Anypoint Platform[](https://www.xtivia.com/blog/apps/comparing-mulesoft-deployment-options/)​

---

## 🤖 DOMÍNIO 4 — MuleSoft RPA (17%)

## Ciclo de Vida Completo do RPA

text

`1. EVALUATE (Avaliar)    ├── Analisar processo candidato para RPA   ├── Calcular ROI e complexidade   ├── Criar BPMN do processo   └── Definir as bot tasks 2. DESIGN (Projetar)    ├── Modelar o processo no RPA Manager (usando BPMN)   ├── Definir parâmetros de entrada/saída   └── Dividir em atividades (Activity Steps) 3. BUILD (Construir)    ├── Implementar cada Activity Step no RPA Builder   ├── Configurar cada action step via wizard   ├── Testar cada step localmente na máquina do dev   └── Build de um workflow Mule por bot task 4. TEST (Testar)    ├── Publicar para fase Test no RPA Manager (Publish to Test)   ├── Criar Test Configurations (parâmetros, bots, ambiente)   ├── Executar Test Plans (pode rodar em paralelo)   ├── Analisar resultados no Test Results panel   └── Se falhou → volta para BUILD (com pacote de análise automático) 5. DEPLOY / PRODUCTION (Produzir)    ├── Transição para fase Production no RPA Manager   ├── Configurar parâmetros de produção   ├── Definir agendamento de execução   ├── Selecionar RPA Bots que vão executar   └── Um processo pode rodar em múltiplos bots simultaneamente 6. MONITOR (Monitorar)    ├── Acompanhar performance no RPA Manager   ├──`

O que é CI/CD?

Concluiu 1 etapa

## O que é CI/CD?

**CI/CD** significa **Continuous Integration / Continuous Delivery (ou Deployment)** — Integração Contínua e Entrega/Implantação Contínua. É uma prática de engenharia de software e DevOps que automatiza as etapas de build, teste e publicação de código.

---

## 🔄 CI — Integração Contínua (Continuous Integration)

É a prática de os desenvolvedores **enviarem código ao repositório central com frequência** (várias vezes por dia), e a cada envio um pipeline automatizado executa:

1. **Build** → compila o código
    
2. **Testes automatizados** → unit tests, integration tests
    
3. **Análise de qualidade** → cobertura de código, linting
    
4. **Feedback imediato** → se algo quebrou, o desenvolvedor sabe na hora
    

> **Objetivo:** Detectar erros cedo, antes de acumular conflitos entre branches e antes de chegar em produção.

---

## 🚀 CD — Entrega ou Implantação Contínua

O "CD" tem dois significados complementares:

|Termo|Significado|Diferença|
|---|---|---|
|**Continuous Delivery**|Código sempre pronto para ir a produção, mas **requer aprovação manual** para o deploy final|Semi-automatizado|
|**Continuous Deployment**|Deploy em produção acontece **automaticamente** após passar todos os testes, sem intervenção humana|Totalmente automatizado|

---

## 🏗️ Pipeline CI/CD — Fluxo Típico

text

`Desenvolvedor faz push de código         ↓ [ CI ]  Build automático         ↓ [ CI ]  Testes unitários         ↓ [ CI ]  Testes de integração         ↓ [ CI ]  Análise de qualidade/segurança         ↓ [ CD ]  Deploy automático em ambiente de Homologação/Staging         ↓ [ CD ]  Testes de aceitação (UAT)         ↓ [ CD ]  Deploy em Produção (manual ou automático)`

---

## 🔧 No contexto de MuleSoft e Anypoint Platform

No universo que você está estudando para a prova, CI/CD aparece assim:

- **Anypoint Studio** → onde o dev cria a aplicação Mule localmente
    
- **Git (GitHub/GitLab/Bitbucket)** → repositório de código versionado
    
- **Maven / Mule Maven Plugin** → ferramenta de build de projetos Mule
    
- **MUnit** → framework de testes automatizados para apps Mule (roda no pipeline CI)
    
- **Runtime Manager API / Anypoint CLI** → usados para fazer deploy automatizado no CloudHub ou Runtime Fabric
    
- **Jenkins / GitHub Actions / Azure DevOps** → ferramentas de CI/CD que orquestram o pipeline
    

**Fluxo típico MuleSoft CI/CD:**

text

`Commit no Git     → Maven build (compila projeto Mule)    → MUnit executa testes automatizados    → Se passou → deploy automático via Anypoint CLI no CloudHub    → Monitoramento pelo Anypoint Monitoring`

---

## 📌 Por que CI/CD importa para o exame?

Embora CI/CD não seja um domínio com peso próprio no exame Hyperautomation Developer, ele aparece como **best practice** dentro do **Domínio 1 (Best Practices — 20%)** e no **Domínio 5 (Anypoint Platform — 15%)**, nos pontos de:

- **MUnit** como ferramenta de teste automatizado (cai na prova!)
    
- **Deploy automatizado** no CloudHub via pipeline
    
- **Reuso de assets** do Exchange como parte da estratégia de CI/CD
    
- **Ambientes** (Dev → Test → Staging → Production) como parte do ciclo de entrega
    

> 🎯 **Pegadinha potencial:** Para testes **automatizados de aplicações Mule em pipeline CI**, a ferramenta correta é **MUnit** — não Mocking Service (que é para testar especificações de API antes de ter backend).