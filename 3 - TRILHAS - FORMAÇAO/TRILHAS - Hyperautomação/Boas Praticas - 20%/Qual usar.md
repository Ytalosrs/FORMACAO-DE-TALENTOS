## A Lógica de Decisão: Qual Ferramenta Usar?

## Árvore de Decisão Completa


`Você tem uma situação para automatizar               ↓ O processo envolve conversa com usuário final ou atendimento inteligente?     SIM → Agentforce / Einstein Bot    NÃO ↓ O processo acontece DENTRO do Salesforce (reagir a registros, aprovações, notificações)?     SIM → Salesforce Flow    NÃO ↓ O sistema de destino TEM API ou é SaaS (Google Sheets, Slack, NetSuite, Jira)?     SIM → MuleSoft Composer    NÃO ↓ O sistema NÃO tem API — é tela, desktop, PDF, sistema legado?     SIM → MuleSoft RPA    NÃO ↓ É uma API corporativa complexa que precisa de versionamento, políticas, SLA e governança técnica?     SIM → Anypoint Platform (Studio + API Manager)`

---

## A Tabela Completa: Situação → Ferramenta → Quem Faz

|#|Situação / Cenário|Ferramenta|Quem executa (papel)|
|---|---|---|---|
|1|Cliente manda mensagem no chat: "qual o status do meu pedido?"|**Agentforce**|Agentforce Agent (IA autônoma)|
|2|Um Lead é criado no Salesforce e precisa de email de boas-vindas|**Salesforce Flow**|Admin / Flow Builder|
|3|Um Opportunity fechado precisa criar uma fatura no NetSuite automaticamente|**MuleSoft Composer**|Admin de negócio / Composer|
|4|Dados precisam ser digitados em um sistema legado sem API|**MuleSoft RPA**|RPA Developer + RPA Bot|
|5|Uma API precisa ser exposta com rate limiting, OAuth e monitoramento de SLA|**Anypoint API Manager**|Integration Developer / Arquiteto|
|6|Admin quer construir um Flow mais rápido descrevendo em linguagem natural|**Einstein for Flow**|Admin Salesforce|
|7|Processo complexo envolve Salesforce + sistema externo + tela legada|**Flow + Composer + RPA juntos**|Admin + Developer + RPA Developer|

---

## Quem Pode Usar Cada Ferramenta

Essa dimensão é importante — a certificação testa se você sabe **qual perfil opera cada ferramenta**.

text

`NÍVEL TÉCNICO     ▲    │  Anypoint Studio ──────────────── Integration Developer / Arquiteto MuleSoft    │  MuleSoft RPA Builder ─────────── RPA Developer    │  Salesforce Flow Builder ─────── Admin Salesforce / Developer    │  MuleSoft Composer ────────────── Admin de Negócio / Analista    │  Agentforce ───────────────────── Admin Salesforce (configura) / Usuário Final (usa)    ▼ NÍVEL BAIXO (sem código)`

## Por perfil de quem vai operar:

| Perfil                      | Ferramentas que usa             | O que consegue fazer                                  |
| --------------------------- | ------------------------------- | ----------------------------------------------------- |
| **Usuário Final / Cliente** | Agentforce (chat)               | Conversa, solicita automações via linguagem natural   |
| **Admin de Negócio**        | Composer, Agentforce (config)   | Monta flows no-code entre sistemas SaaS               |
| **Admin Salesforce**        | Flow Builder, Einstein for Flow | Automatiza processos dentro do Salesforce             |
| **RPA Developer**           | RPA Builder, RPA Manager        | Grava, constrói e gerencia bots de tela               |
| **Integration Developer**   | Anypoint Studio, API Manager    | Constrói APIs e integrações complexas com código      |
| **Arquiteto**               | Toda a stack                    | Define qual combinação de ferramentas usar no projeto |

---

## O Critério Decisivo em 5 Perguntas

Quando chegar uma situação na prova ou no trabalho, responde isso em ordem:

text

`1. Tem humano conversando?          → Agentforce 2. É dentro do Salesforce?          → Flow 3. Tem API disponível?              → Composer 4. Não tem API (tela/legado)?       → RPA 5. Precisa de governança de API?    → Anypoint API Manager`

---

## Exemplo Aplicado: Caso Real Completo

**Situação:** Uma empresa de seguros precisa:

- Atender clientes via chat
    
- Quando cliente pede cotação → buscar dados no Salesforce
    
- Preencher a cotação num sistema legado (sem API)
    
- Enviar resultado por email
    
- Registrar tudo no Salesforce
    

**Mapeamento:**

|Passo|O que acontece|Ferramenta|Quem configura|
|---|---|---|---|
|Cliente pede cotação no chat|Interface conversacional|**Agentforce**|Admin Salesforce|
|Busca dados do cliente no Salesforce|Processo interno Salesforce|**Salesforce Flow**|Admin Salesforce|
|Preenche sistema legado de seguros|Sistema sem API, opera tela|**MuleSoft RPA**|RPA Developer|
|Envia email com resultado|Conecta sistema de email externo|**MuleSoft Composer**|Admin de Negócio|
|Atualiza registro no Salesforce|Processo interno Salesforce|**Salesforce Flow**|Admin Salesforce|

---

## A Regra de Ouro

> **Se o processo toca o Salesforce por dentro → Flow**  
> **Se o processo conecta sistemas externos com API → Composer**  
> **Se o processo opera uma tela sem API → RPA**  
> **Se o processo conversa com humano → Agentforce**  
> **Se a API precisa ser controlada/governada → API Manager**

Essas fronteiras raramente são exclusivas — em projetos reais você vai combinar 2, 3 ou todas as ferramentas. O que muda é **quem entra em cena em cada etapa** do processo.

vamos divergir esse mundo das API's como saber se vou usar o Composer, Anypoint Platform, API Manager, Anypoint Exchange ?

Boa — esse é um dos pontos mais confusos porque os nomes se sobrepõem e parecem fazer a mesma coisa. Vou separar cada um com clareza.

---

## Primeiro: Entendendo o que cada um É de verdade

Antes de decidir qual usar, precisa entender que essas ferramentas **não são concorrentes** — elas são **camadas diferentes** do mesmo ecossistema.

text

`┌─────────────────────────────────────────────────────┐ │              ANYPOINT PLATFORM                       │ │  (o "guarda-chuva" — contém tudo abaixo)            │ │                                                      │ │  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  │ │  │  Design     │  │  Anypoint    │  │    API     │  │ │  │  Center /   │  │  Exchange    │  │  Manager   │  │ │  │  Studio     │  │  (vitrine)   │  │ (porteiro) │  │ │  └─────────────┘  └──────────────┘  └────────────┘  │ └─────────────────────────────────────────────────────┘          ↕ consome / publica          ┌─────────────────────────────────────────────────────┐ │              MULESOFT COMPOSER                       │ │  (produto separado — no-code, para admins)          │ └─────────────────────────────────────────────────────┘`

---

## A Separação Fundamental

|Ferramenta|O que é de verdade|Analogia|
|---|---|---|
|**Anypoint Platform**|O ecossistema completo de APIs e integrações|O **shopping center** inteiro|
|**Design Center / Studio**|Onde você **constrói** a API|A **fábrica** dentro do shopping|
|**Anypoint Exchange**|Onde você **publica e descobre** APIs|A **vitrine** do shopping|
|**API Manager**|Onde você **controla e protege** a API em produção|O **porteiro/segurança** do shopping|
|**MuleSoft Composer**|Produto **separado**, no-code, para conectar sistemas|Um **food truck** fora do shopping — independente, mais simples|

---

## Quando Usar Cada Um

## MuleSoft Composer

**Use quando:**

- Você é **admin de negócio** (sem conhecimento de código)
    
- Quer conectar **sistemas SaaS prontos** (Salesforce ↔ Slack, Google Sheets, NetSuite, Jira)
    
- A integração é **simples a moderada** — trigger → ação → resultado
    
- Não precisa de lógica complexa, transformação pesada de dados ou governança de API
    

**Não use quando:**

- A integração é complexa (múltiplos sistemas, transformações de dados sofisticadas)
    
- Precisa expor uma API para outros consumirem
    
- Precisa de versionamento, políticas de segurança, rate limiting
    

text

`Exemplo Composer: "Quando um Lead for criado no Salesforce  → adicionar linha no Google Sheets → enviar mensagem no Slack"`

---

## Anypoint Studio / Design Center

**Use quando:**

- Você é **Integration Developer** (sabe programar / DataWeave)
    
- Precisa **construir uma API do zero** — com lógica complexa, transformação de dados, múltiplos protocolos
    
- A integração envolve sistemas legados, bancos de dados, filas de mensagens (MQ)
    
- Precisa de **testes automatizados** (MUnit), CI/CD, versionamento de código
    

text

`Exemplo Studio: "Construir uma API que recebe pedidos de 3 sistemas diferentes,  transforma os dados em um formato único, valida regras de negócio e persiste no banco de dados"`

**Design Center** = versão web (mais leve, para spec/RAML)  
**Anypoint Studio** = versão desktop completa (para implementação real)

---

## Anypoint Exchange

**Use quando:**

- Você **publicou** uma API e quer disponibilizá-la para outros times consumirem
    
- Você quer **descobrir** se já existe uma API/conector pronto antes de construir do zero
    
- Quer **documentar e versionar** APIs como assets reutilizáveis
    
- Quer compartilhar **conectores, templates, exemplos** entre times
    

text

`Exemplo Exchange: "O time de TI publicou a API de Clientes v2.1 no Exchange  → O time de negócios encontra e reutiliza essa API    no Composer sem precisar construir nada"`

**Exchange não constrói nem controla — só publica e disponibiliza.**

---

## API Manager

**Use quando:**

- Sua API **já está construída e deployada** e precisa ser protegida
    
- Precisa aplicar **políticas** (rate limiting, OAuth, JWT, IP whitelist)
    
- Precisa de **monitoramento de SLA** (tempo de resposta, disponibilidade)
    
- Precisa de **alertas** quando algo quebrar em produção
    
- Precisa controlar **quem tem acesso** à API (client credentials)
    

text

`Exemplo API Manager: "A API de Clientes está em produção  → Máximo 100 chamadas por minuto por consumidor → Só aceitar com token OAuth válido → Alertar se tempo de resposta > 3 segundos → Bloquear IPs suspeitos"`

**API Manager não constrói — só governa o que já existe.**

---

## O Fluxo Completo de uma API na Anypoint Platform

text

`1. DESIGN CENTER / STUDIO    └→ Arquiteto define a spec da API (RAML/OAS)   └→ Developer implementa a lógica no Studio             ↓ publica 2. ANYPOINT EXCHANGE    └→ API fica disponível como asset   └→ Outros times descobrem e reutilizam   └→ Composer pode consumir como "Shared API"             ↓ deploya (CloudHub / Runtime Fabric) 3. RUNTIME MANAGER    └→ API está rodando em produção             ↓ conecta ao 4. API MANAGER    └→ Aplica políticas (segurança, rate limiting)   └→ Monitora métricas e SLA   └→ Dispara alertas   └→ Controla acesso por client credentials`

---

## A Tabela de Decisão Rápida

|Pergunta|Resposta|Ferramenta|
|---|---|---|
|Quero conectar Salesforce com Google Sheets sem código?|Integração simples, sou admin|**Composer**|
|Quero construir uma API do zero com lógica complexa?|Sou developer|**Studio / Design Center**|
|Quero ver se já existe um conector/API pronto?|Pesquisar no catálogo|**Exchange**|
|Quero publicar minha API para outros times usarem?|Disponibilizar como asset|**Exchange**|
|Quero proteger minha API com OAuth e rate limiting?|Governança em produção|**API Manager**|
|Quero monitorar performance e SLA da API?|Observabilidade|**API Manager**|
|Tudo isso junto, do build ao monitor?|Ciclo completo|**Anypoint Platform**|

---

## Por Perfil: Quem Usa o Quê

|Perfil|Ferramenta principal|Por quê|
|---|---|---|
|**Admin de Negócio**|Composer|No-code, conecta SaaS rapidamente|
|**Admin Salesforce**|Composer + Flow|Integrações simples + automação interna|
|**Integration Developer**|Studio + Exchange|Constrói e publica APIs complexas|
|**Arquiteto MuleSoft**|Design Center + Exchange + API Manager|Define specs, governa o portfólio de APIs|
|**Ops / DevOps**|API Manager + Runtime Manager|Monitora, alerta, faz deploy|

---

## A Regra de Ouro para APIs

text

`Construir API complexa?      → Studio / Design Center Publicar / Descobrir API?    → Exchange   Proteger / Monitorar API?    → API Manager Conectar SaaS sem código?    → Composer (não é "API" no sentido técnico) Tudo isso junto?             → Anypoint Platform (o guarda-chuva)`

O erro mais comum é achar que o **Composer substitui o Studio** ou que o **Exchange é onde você configura segurança**. Cada um tem uma função muito específica na cadeia — e na prova, essa distinção aparece em praticamente todas as questões de cenário.