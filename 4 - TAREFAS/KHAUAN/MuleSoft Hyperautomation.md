# Guia de Estudo – MuleSoft Hyperautomation Developer (Módulos)

> Objetivo: dominar o suficiente de cada módulo para acertar +80% do simulado Mule‑Dev‑202.[web:10][web:20]

---

## Módulo 1 – System / Process / Experience API e API‑led

### 1. Conceitos centrais

- **API‑led connectivity**  
  - System API: expõe dados de sistemas de registro (CRM, ERP, bancos, sistemas legados).[web:10][web:26]  
  - Process API: orquestra múltiplos System APIs, aplica regras de negócio, agregação e enriquecimento.[web:10][web:26]  
  - Experience API: adapta dados para o canal (web, mobile, parceiros), cuidando de formato, paginação e campos específicos.[web:10][web:26]  

- Responsabilidades típicas:  
  - System API: CRUD, cache, acesso controlado, sem lógica de negócio complexa.[web:10][web:26]  
  - Process API: combinação de dados, transformação, cálculos, orquestrações.[web:10][web:26]  
  - Experience API: personalização para front‑end, BFF (Backend‑for‑Frontend).[web:10][web:26]  

### 2. Como ler cenários de prova

- Perguntas comuns:  
  - “Onde colocar a lógica de negócio?” → Process API.  
  - “Como tornar dados reutilizáveis entre sistemas?” → System API.[web:10][web:26]  
  - “Como adaptar resposta para um app mobile específico?” → Experience API.[web:10][web:26]  

- Erros de design que costumam cair:  
  - Colocar regra de negócio na Experience API (deveria estar na Process API).  
  - Acessar sistemas diretamente de Experience API ignorando System API.[web:10][web:26]  

### 3. API‑led dentro de Hyperautomation

- Combinações típicas em questões:  
  - Flow/Flow Orchestration chamando Experience ou Process API para buscar dados.[web:10][web:21]  
  - Composer usando HTTP connector para chamar uma Experience API.[web:22][web:25]  
  - RPA consumindo APIs quando há endpoints disponíveis além da UI.[web:15][web:21]  

- Pense sempre em:  
  - “Quem consome?” → Experience.  
  - “Quem integra sistemas?” → Process.  
  - “Quem fala com o sistema de registro?” → System.[web:10][web:26]  

---

## Módulo 2 – Deploy, API Manager, Políticas e Plataforma

### 1. CloudHub x Runtime Fabric

- CloudHub:  
  - Plataforma gerenciada pela MuleSoft (SaaS).  
  - Escalabilidade simplificada, menos esforço de infra.  
  - Boa opção para integrações novas e ambientes cloud‑first.[web:26][web:19]  

- Runtime Fabric (RTF):  
  - Roda em Kubernetes/infra do cliente (on‑prem ou cloud privada).  
  - Mais controle, isolamento, compliance/regulatórios.[web:26][web:19]  

### 2. API Manager e proxies

- API Manager:  
  - Registro de APIs, gestão de versões e de contratos.  
  - Criação de API proxies para backends (Mule ou legados).[web:10][web:26]  
  - Aplicação de políticas (segurança, limites, transformações).[web:10][web:26]  

- API Proxy:  
  - Utilizado para expor serviços existentes (HTTP, SOAP, Mule) com governança, segurança e monitoração sem mudar o backend.[web:10][web:26]  

### 3. Políticas importantes para o exame

- Rate Limiting / Rate Limiting SLA‑based:  
  - Limita número de requisições por período (global ou por contrato/SLA).[web:10][web:16]  

- Spike Control:  
  - Suaviza picos súbitos, protegendo o backend contra rajadas de requisições.[web:10][web:16]  

- JSON Threat Protection:  
  - Bloqueia payloads JSON maliciosos/excessivos (tamanho, profundidade, número de elementos).[web:10]  

- OAuth 2.0 enforcement:  
  - Valida tokens OAuth 2.0 antes de encaminhar requisições; típico em APIs expostas a clientes externos.[web:10][web:26]  

### 4. Integração com Salesforce / Composer / RPA

- Salesforce Flow/Orchestration:  
  - Podem consumir APIs Mule via External Services ou ações custom.[web:10][web:21]  

- Composer:  
  - Usa conectores nativos ou HTTP connector para chamar APIs geridas no Anypoint.[web:22][web:25]  

- RPA:  
  - Pode consumir APIs para obter dados ou registrar resultados, reduzindo dependência de UI.[web:15][web:21]  

---

## Módulo 3 – MuleSoft Composer

### 1. Propósito e posição no ecossistema

- Composer:  
  - Integração low‑code/point‑and‑click entre sistemas SaaS (Salesforce, Slack, Gmail, ServiceNow etc.).  
  - Ideal para citizen developers e integrações de baixa/média complexidade.[web:8][web:21]  

- Quando não usar Composer:  
  - Cenários de alto volume, RT estrito, lógica complexa, necessidade de API pública → usar Mule APIs.[web:21][web:10]  

### 2. Gatilhos (triggers)

- Tipos principais:  
  - Record created/updated/deleted (Salesforce, outros SaaS).[web:22][web:25]  
  - Scheduler (executa a cada X minutos/horas/dias).[web:6][web:25]  
  - Eventos/mensagens (ex.: Slack message posted).[web:22][web:25]  

- Boas práticas:  
  - Evitar loops (por exemplo, flow que atualiza o mesmo registro que dispara o trigger).  
  - Usar filtros (por campo, por data de alteração) e flags de controle.[web:22][web:21]  

### 3. Construção e governança de flows

- Ciclo básico:  
  1. Definir gatilho.  
  2. Adicionar ações (conectores) em sequência lógica.  
  3. Mapear campos de entrada/saída.  
  4. Testar com dados de exemplo.  
  5. Ativar e monitorar o flow.[web:22][web:25]  

- Governança:  
  - Usar conexões apropriadas por ambiente (sandbox vs produção).  
  - Configurar notificações para falhas.  
  - Versionar flows quando fizer alterações significativas.[web:22][web:21]  

### 4. Erros, limites e padrões com RPA

- Timeouts e duração:  
  - Composer tem limites de tempo para execução das ações; processos muito longos (como RPA pesado) não devem bloquear um flow inteiro.[web:12][web:6]  

- Padrões com RPA:  
  - Flow Composer dispara um processo RPA (por exemplo, via conector MuleSoft RPA).  
  - RPA executa o trabalho de UI.  
  - Resultado volta para Salesforce ou outro sistema por API ou atualização de registro.[web:6][web:21]  

- Boas práticas de erro:  
  - Testar step‑a‑step com “Test” do Composer.  
  - Tratar condições de resposta vazia/erro com condicionais e branches.[web:22][web:21]  

---

## Módulo 4 – MuleSoft RPA

### 1. Seleção de candidatos a RPA

- Bons candidatos:  
  - Processos repetitivos, baseados em regras claras e estáveis.  
  - Alto volume e impacto operacional (redução grande de esforço manual).  
  - Sistemas sem API ou com UI legada (desktop, web antiga).[web:15][web:21]  

- Quando evitar RPA:  
  - Processos criativos ou com alto julgamento humano.  
  - Regras mudando frequentemente.  
  - Sempre que uma integração via API/Composer for mais simples e robusta.[web:15][web:21]  

### 2. Construção de automações RPA

- RPA Recorder:  
  - Captura cliques, digitação, navegação, seletores de elementos, sequência de passos.[web:11][web:4]  
  - Serve como ponto de partida; depois o desenvolvedor refina a automação.[web:11][web:21]  

- Refinamentos essenciais:  
  - Substituir seletores frágeis por seletores estáveis (ID, texto, atributos específicos).[web:15][web:21]  
  - Adicionar waits condicionais (esperar elementos, janelas, textos).  
  - Implementar exceções e caminhos alternativos.[web:11][web:15]  

### 3. Testes, monitoria e operação

- Testes e debugging:  
  - Rodar em modo debug, acompanhar passo a passo, analisar logs.  
  - Identificar se falha é de ambiente (credencial, servidor) ou de lógica (layout mudou, campo sumiu).[web:16][web:21]  

- Operação:  
  - Robots executando como contas de serviço.  
  - Credenciais e segredos em cofres seguros (não hard‑code).[web:15][web:21]  
  - Monitorar filas, tempos de execução e taxa de falhas.[web:15][web:21]  

### 4. Integração com Composer e APIs

- Composer → RPA:  
  - Composer dispara processos RPA com dados de entrada (por ex., dados de Salesforce).[web:6][web:21]  

- RPA → APIs:  
  - RPA pode chamar APIs Mule para buscar dados adicionais ou registrar resultados, evitando excesso de interação com UI.[web:15][web:21]  

---

## Módulo 5 – Salesforce Flow e Flow Orchestration

### 1. Salesforce Flow (automação dentro do org)

- Tipos principais:  
  - Record‑Triggered Flow (before/after save).  
  - Screen Flow (interação com usuário em tela).  
  - Autolaunched Flow (sem interface, chamado por Apex, botão, Orchestrator etc.).[web:10][web:21]  

- Boas práticas:  
  - Minimizar DML/queries dentro de loops.  
  - Agrupar operações em coleções para respeitar governor limits.[web:16][web:10]  

- Integração com APIs:  
  - External Services para consumir APIs do Anypoint.  
  - Ações invocáveis para chamar integrações específicas.[web:10][web:21]  

### 2. Flow Orchestrator

- Conceito:  
  - Orquestra processos multi‑etapas e multi‑usuários; combina tarefas automáticas e humanas em **stages** e **steps**.[web:10][web:24]  

- Elementos principais:  
  - Stages: agrupam steps; ajudam a visualizar fases do processo.  
  - Steps interativos: tarefas atribuídas a usuários/filas.  
  - Steps automáticos: chamam flows, automatizações, integrações.[web:24][web:21]  

- Recursos de processo:  
  - Paralelismo de steps.  
  - SLA/prazos para tarefas.  
  - Roteamento, reassign, visibilidade do progresso.[web:24][web:21]  

### 3. Padrões de uso em hyperautomation

- Quando usar Flow:  
  - Atualizações simples de registro, lógica local no Salesforce, sem múltiplos atores.[web:10][web:21]  

- Quando usar Flow Orchestration:  
  - Onboarding, aprovação de crédito, processo com várias equipes e etapas, mistura de automação e tarefas humanas.[web:24][web:21]  

- Combinação com Composer/RPA/Mule:  
  - Orchestrator coordena o processo e chama: Flow (atualização de registro), Composer (integração SaaS), RPA (UI de sistema legado), APIs Mule.[web:10][web:21][web:24]  

---

## Módulo 6 – Estratégia de Ferramenta, MUnit e Integração ponta a ponta

### 1. Escolha de ferramenta por cenário

- Salesforce Flow:  
  - Automação de eventos no Salesforce (record created/updated), sem múltiplos times/etapas complexas.[web:10][web:21]  

- Flow Orchestrator:  
  - Processos de negócio compostos, com várias tarefas humanas/automáticas, multi‑equipes, SLA e tracking.[web:24][web:21]  

- Composer:  
  - Integrações low‑code entre Salesforce e outros sistemas SaaS, volume moderado, lógica limitada.[web:22][web:25]  

- Mule APIs (API‑led):  
  - Integrações complexas, multi‑consumidor, necessidade de governança, versionamento, segurança avançada.[web:10][web:26]  

- RPA:  
  - Automação de interface em sistemas sem API ou quando o custo/tempo de desenvolver API é muito alto.[web:15][web:21]  

### 2. MUnit e testes de integrações

- MUnit:  
  - Framework de testes para Mule apps.  
  - Permite criar testes unitários e de integração para flows Mule.[web:16][web:26]  

- Capacidades:  
  - Mock de conectores externos (HTTP, DB, JMS).  
  - Asserções de payload, status, propriedades.  
  - Testes de cenários de erro e exceção.[web:16][web:26]  

- Questões típicas:  
  - “Qual ferramenta usar para testar uma API Mule antes do deploy?” → MUnit.  
  - “Como isolar o backend em um teste Mule?” → mock de endpoints externos com MUnit.[web:16][web:10]  

### 3. Integração ponta a ponta em Hyperautomation

- Combinações frequentes:  
  - Flow Orchestrator coordena o processo.  
  - Flows atualizam registros Salesforce.  
  - Composer integra com sistemas SaaS.  
  - RPA manipula sistemas sem API.  
  - Mule APIs conectam sistemas core e expõem dados para o resto.[web:10][web:21][web:20]  

- Raciocínio esperado na prova:  
  - Dado um cenário de negócio, determinar a **melhor combinação** de ferramentas respeitando governança, complexidade, custo e escalabilidade.[web:10][web:21][web:23]  

---

## Dica final de uso deste arquivo

- Use cada módulo como “checklist mental” antes de fazer blocos de questões do simulado.  
- Para cada questão, pergunte:  
  - Qual camada (System/Process/Experience)?  
  - Qual ferramenta (Flow, Orchestrator, Composer, Mule API, RPA)?  
  - Que política/forma de deploy faz mais sentido? [web:10][web:20][web:21]  
