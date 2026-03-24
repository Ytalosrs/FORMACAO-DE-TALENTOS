
# Anypoint Platform — Resumo Completo para a Certificação MuleSoft Hyperautomation Developer

> **Relevância no edital:**[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&language=en_US&type=1)]​
> 
> - **Use Anypoint Platform to deliver and manage APIs in a hyperautomation project: 15%**
>     
> - **Use Anypoint Platform to monitor hyperautomation API endpoints: 7%**
>     
> - **Use Anypoint Exchange to catalog, publish, share, discover and reuse assets: 8%**
>     
> - **Total: 30% da prova** — a maior fatia individual do exame
>     

---

## 1. Anypoint Platform — Visão Geral e Componentes para Hyperautomation

A Anypoint Platform é o hub central do ecossistema MuleSoft. No contexto de hyperautomation, ela funciona como a **Application Network** — a infraestrutura que conecta todos os sistemas, ferramentas e automações.[[trailhead.salesforce](https://trailhead.salesforce.com/es/content/learn/modules/mulesoft-basics/app-network)]​

## 1.1. Componentes principais cobrados no edital[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&language=en_US&type=1)]​

|Componente|Função|
|---|---|
|**Design Center / API Designer**|Criar e versionar specs de API (RAML, OAS, AsyncAPI)|
|**Anypoint Exchange**|Catálogo central para publicar, descobrir e reutilizar assets|
|**API Manager**|Gerenciar, proteger e monitorar APIs com políticas e|

# Anypoint Platform — Resumo Completo para a Certificação MuleSoft Hyperautomation Developer

> **Relevância no edital:**[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&language=en_US&type=1)]​
> 
> - **Use Anypoint Platform to deliver and manage APIs in a hyperautomation project: 15%**
>     
> - **Use Anypoint Platform to monitor hyperautomation API endpoints: 7%**
>     
> - **Use Anypoint Exchange to catalog, publish, share, discover and reuse assets: 8%**
>     
> - **Total: 30% da prova** — maior fatia combinada de qualquer tema
>     

---

## 1. Visão Geral — Anypoint Platform na Hyperautomation

A Anypoint Platform é o backbone técnico da hyperautomation, conectando Salesforce Flow, Composer, RPA e sistemas externos em uma **Application Network** coesa. O candidato precisa entender não só os componentes isolados, mas **como eles se encaixam** em um projeto de hyperautomation.[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&language=en_US&type=1)]​

## 1.1. Componentes de alto nível da Anypoint Platform

|Componente|Função|
|---|---|
|**Design Center / API Designer**|Criar e iterar especificações de API (RAML, OAS, AsyncAPI)|
|**Anypoint Exchange**|Catalogar, publicar, descobrir e reutilizar assets|
|**API Manager**|Gerenciar instâncias de API, aplicar políticas, configurar proxies|
|**Runtime Manager**|Fazer deploy e monitorar aplicações Mule em diferentes ambientes|
|**Anypoint Monitoring**|Observabilidade de apps e APIs (dashboards, alertas, logs)|
|**Anypoint Studio / Code Builder**|IDEs para desenvolvimento de integrações Mule|
|**MuleSoft Composer**|Integração no-code para equipes de negócio|
|**MuleSoft RPA**|Automação de processos via bots|
|**Anypoint Visualizer**|Mapa visual da Application Network|
|**Anypoint DataGraph**|Schema unificado de dados da Application Network|

---

## 2. Composable Building Blocks e API-Led Connectivity (15%)

## 2.1. O que são Composable Building Blocks

São **APIs, specs e outros assets reutilizáveis** que funcionam como peças intercambiáveis na construção de soluções de hyperautomation. A ideia central é: ao invés de construir integrações ponto-a-ponto, você constrói blocos reutilizáveis que podem ser compostos em diferentes combinações.[[trailhead.salesforce](https://trailhead.salesforce.com/es/content/learn/modules/mulesoft-basics/app-network)]​

**Como consumir em hyperautomation:**

- APIs publicadas no Exchange são descobertas e reutilizadas por Flows, Composer, RPA e outras Mule apps
    
- MuleSoft API Catalog sincroniza APIs do Anypoint Platform direto no Salesforce org, tornando-as ações no Flow Builder[ da pesquisa anterior]
    

## 2.2. API-Led Connectivity — As três camadas

A arquitetura de três camadas é a espinha dorsal do design de APIs no MuleSoft:

text

`┌─────────────────────────────────────────────┐ │        Experience APIs (Camada 3)           │ │  Adaptadas a cada canal/consumidor          │ │  Ex: API Mobile, API Partner Portal         │ ├─────────────────────────────────────────────┤ │        Process APIs (Camada 2)              │ │  Orquestram dados de múltiplos sistemas     │ │  Ex: Order Management API, Customer 360     │ ├─────────────────────────────────────────────┤ │        System APIs (Camada 1)               │ │  Conectam diretamente a sistemas de record  │ │  Ex: Salesforce API, SAP API, DB API        │ └─────────────────────────────────────────────┘`

**System APIs:** isolam os sistemas de record de mudanças; consumidores nunca acessam o sistema diretamente[[trailhead.salesforce](https://trailhead.salesforce.com/es/content/learn/modules/mulesoft-basics/app-network)]​  
**Process APIs:** orquestram múltiplos System APIs, implementam lógica de negócio; quebram silos de tecnologia[[trailhead.salesforce](https://trailhead.salesforce.com/es/content/learn/modules/mulesoft-basics/app-network)]​  
**Experience APIs:** entregam dados no formato ideal para cada consumidor (mobile, parceiros, Salesforce Flow, etc.)

> **Ponto de prova:** A API-led connectivity promove **reuse** — quando múltiplos projetos precisam do mesmo sistema, reutilizam a mesma System API em vez de recriar a integração do zero, aumentando velocity e padronização.

## 2.3. Anypoint Platform — Capacidades de Hyperautomation

|Capacidade|Ferramenta|Uso em Hyperautomation|
|---|---|---|
|Design API-first|Design Center|Definir contratos antes de implementar|
|Publish & Discover|Exchange|Reutilizar assets entre equipes|
|Manage & Secure|API Manager|Aplicar políticas, proxies, throttling|
|Deploy|Runtime Manager|Deploy em CloudHub, RTF, on-premises|
|Monitor|Anypoint Monitoring|Observabilidade de ponta a ponta|
|Connect No-Code|Composer|Integração para usuários de negócio|
|Automate Tasks|RPA|Bots para tarefas repetitivas de UI|

## 2.4. Opções de Deploy de Aplicações Mule (cobrado diretamente)[[help.salesforce](https://help.salesforce.com/s/articleView?id=005298960&language=en_US&type=1)]​

## CloudHub (iPaaS gerenciado pela Salesforce/MuleSoft)

- **CloudHub 1.0:** modelo original, workers baseados em vCores
    
- **CloudHub 2.0:** modelo atual dominante, baseado em containers OCI/Docker, Kubernetes subjacente gerenciado pela MuleSoft
    
- Deploy totalmente gerenciado — sem overhead de infraestrutura
    
- Ideal para: velocidade de entrega, APIs digitais, cenários sem requisitos regulatórios rígidos
    

## Anypoint Runtime Fabric (RTF)

- Runtime **Kubernetes-native** no ambiente do próprio cliente (on-premises, private cloud, ou qualquer nuvem pública)
    
- Suporta: Red Hat OpenShift, Amazon EKS, Azure AKS, Google GKE, VMware Tanzu, bare-metal
    
- **Control plane** permanece na Anypoint Platform (multi-tenant); **data plane** é single-tenant do cliente
    
- Ideal para: requisitos de compliance, soberania de dados, latência controlada
    

## Hybrid (on-premises gerenciado via Runtime Manager)

- Servidores Mule on-premises do cliente, gerenciados pelo console do Runtime Manager na nuvem
    
- Dados ficam nos servidores locais; gerenciamento e monitoramento centralizados na Anypoint Platform
    

## Anypoint Runtime Manager — Visão unificada

- Interface única para deployar, gerenciar e monitorar Mule apps em qualquer ambiente
    
- Suporta ambientes separados: Development, Sandbox, Staging, Production
    

> **Ponto de prova para a prova:** Saiba identificar a opção de deploy correta por cenário — **CloudHub** para simplicidade e velocidade; **RTF** para controle total e compliance; **Hybrid** para on-premises com gerenciamento central.

---

## 3. API Manager — Monitoramento de Endpoints (7%)

## 3.1. Configuração de Endpoints

**Basic Endpoint Configuration:**

- Configura a inbound URL do API no API Manager
    
- Necessário para que a Anypoint Platform gerencie a API (diretamente ou via proxy)
    
- Define o endpoint real de entrada (se há load balancer, usa-se o endpoint do LB)
    

**Proxy Endpoint Configuration:**

- O proxy atua como **intermediário** entre aplicações externas e o backend
    
- Backend pode ser qualquer tecnologia (não precisa ser Mule)
    
- O proxy é deployado no CloudHub ou RTF e rastreado automaticamente pelo API Manager
    
- Ao receber uma chamada, o proxy aplica as políticas e encaminha ao backend
    

**Fluxo de uma chamada via Proxy:**

text

`Client App → API Proxy → [Políticas aplicadas] → Backend API                 ↑         API Manager gerencia         e distribui políticas`

> O Mule **bloqueia a API** até que todas as políticas sejam aplicadas. O proxy descobre as políticas via client ID e secret ao ser deployado.

## 3.2. Policies (Políticas) — Conceito crítico

Políticas controlam **segurança, tráfego e adaptabilidade** das APIs sem modificar o código de implementação.

**Arquitetura de execução:**

- API Manager configura as políticas
    
- API proxy/app aplica as políticas **internamente** (minimiza comunicação com a plataforma em runtime)
    
- Mudanças de política são baixadas para os runtimes conectados **sem necessidade de redeploy do proxy**
    

**Categorias de políticas:**

|Categoria|Exemplos|Uso em Hyperautomation|
|---|---|---|
|**Segurança**|Client ID Enforcement, OAuth 2.0, JWT, Basic Auth|Autenticar consumidores de API|
|**Controle de tráfego**|Rate Limiting, Throttling, SLA-based|Proteger backend de sobrecarga|
|**Acesso**|IP Allowlist, IP Blocklist|Restringir chamadas por origem|
|**Qualidade**|Caching, Response Timeout|Melhorar performance|
|**Custom Policies**|Desenvolvimento próprio|Funcionalidades específicas do negócio|

**Automated Policies:**

- Aplicadas automaticamente a **todas as APIs** de um ambiente
    
- Configuradas por Organization Admin, Environment Admin ou usuário com permissão "Manage Policies"
    
- Garantem conformidade sem que cada equipe precise lembrar de aplicar manualmente
    

> **Ponto de prova:** O candidato deve saber escolher entre basic endpoint (API direta), proxy endpoint (intermediário com policies) e entender quando cada cenário é adequado.

## 3.3. Anypoint Monitoring — Observabilidade Completa

**Funcionalidades principais:**

|Funcionalidade|Disponibilidade|O que faz|
|---|---|---|
|**Built-in Dashboards (Apps)**|Todos os planos|Métricas padrão de Mule apps e APIs|
|**Built-in Dashboards (APIs)**|Todos os planos (com API Autodiscovery ativo)|Charts de uso e performance por API|
|**Custom Dashboards**|Advanced e Titanium|Dashboards customizados correlacionando múltiplas métricas|
|**Basic Alerts**|Todos os planos|Alertas para apps, servidores e APIs com thresholds|
|**Alerts for Custom Dashboards**|Titanium|Alertas sobre gráficos customizados|
|**Log Search (cross-app)**|Titanium|Busca logs de múltiplas apps simultaneamente|
|**Log Points**|Advanced e Titanium|Geração de logs em tempo real sem escrever código|
|**Raw Data Downloads**|Titanium|Download dos dados brutos de log|
|**Log Tailing**|Todos os planos|Acompanhar logs em tempo real|
|**Anypoint Insights**|Disponível separadamente|Métricas de alto nível de todas as apps e APIs|

**Built-in App Dashboards — abas disponíveis:**

- Overview (visão geral)
    
- Inbound/Outbound (tráfego)
    
- Performance
    
- Failures (falhas)
    
- JVM
    
- Infrastructure
    
- Custom Metrics (Advanced/Titanium)
    
- Application Network (com Visualizer, Advanced/Titanium)
    

**Como funcionam os Alertas:**

- Thresholds são verificados a cada **5 minutos**
    
- A métrica avaliada é a **média dos últimos 5 minutos**
    
- Alerta dispara apenas quando o estado **muda** (OK → Alerting ou vice-versa)
    
- Tipos: Basic alerts (apps, servers, APIs) e Custom Dashboard alerts
    
- Também possível criar alertas no API Manager (para SLA) e Runtime Manager (eventos de servidor) acessíveis a partir do Anypoint Monitoring
    

> **Ponto de prova:** Para monitorar APIs, o **API Autodiscovery** deve estar habilitado na aplicação Mule. Sem isso, as métricas de API não aparecem nos dashboards do Anypoint Monitoring.

---

## 4. Anypoint Exchange — Catalogar, Publicar e Reutilizar Assets (8%)

## 4.1. O que é o Anypoint Exchange

É o **marketplace interno e externo** de assets de integração da organização — onde equipes publicam, descobrem e reutilizam APIs, conectores, templates e exemplos. Funciona como uma camada de governança e reuso que acelera a entrega de projetos de hyperautomation.

## 4.2. Tipos de Assets suportados

|Tipo de Asset|Descrição|
|---|---|
|**REST API (RAML)**|Especificação RAML (.raml)|
|**REST API (OAS)**|Especificação OpenAPI (.yaml ou .json) — suporta OAS 2.0 e OAS 3.0|
|**AsyncAPI**|Especificação para APIs assíncronas/event-driven|
|**SOAP API (WSDL)**|Especificação WSDL para web services SOAP|
|**HTTP API**|APIs HTTP sem especificação formal|
|**GraphQL API**|Schemas GraphQL|
|**Connector**|Conectores reutilizáveis (Mule 3 e Mule 4)|
|**Template**|Projetos Mule completos como ponto de partida|
|**Example**|Projetos de exemplo para demonstrar padrões|
|**Policy**|Configurações de política reutilizáveis|
|**RAML Fragment**|Fragmentos reutilizáveis de especificações RAML|
|**Ruleset**|Conjuntos de regras de validação|
|**RPA Templates**|Templates de atividades RPA|
|**Custom Asset**|Qualquer outro tipo de documentação ou asset|

> **Ponto de prova:** Para RAML e OAS, o Exchange **gera automaticamente** a versão correspondente — ao publicar um RAML, gera OAS 2.0, e vice-versa (para assets publicados após janeiro de 2019).

## 4.3. Publicar Assets — Métodos

|Método|Quando usar|
|---|---|
|**Exchange UI (Publish new asset)**|OAS, RAML, RAML Fragment, HTTP, WSDL, AsyncAPI, Custom|
|**Anypoint Studio (Mavenize)**|Templates e Examples — requer Maven|
|**Anypoint CLI**|Automação via CLI: `exchange asset upload`|
|**Exchange API (REST)**|Publicação programática, CI/CD pipelines|
|**Maven (Exchange Maven Facade)**|Publicação de connectors e apps via Maven|
|**Anypoint Code Builder**|Publish direto da IDE para o Exchange|

## 4.4. Visibilidade: Private vs. Public Portal

**Private Exchange (padrão):**

- Vis