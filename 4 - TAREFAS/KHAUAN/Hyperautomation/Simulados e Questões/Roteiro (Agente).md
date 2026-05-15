Segundo o **documento anexado (Simulado.pdf)**, as questões se repetem em alguns “blocos” bem claros (Ferramentas MuleSoft/Salesforce, decisão de arquitetura, governança de APIs, e boas práticas de automação). Vou estruturar o roteiro por **grupos de questões/temas** e, no fim, te dou um **cronograma do fundamental ao avançado**.

---

# Grupo 1 — Integração Salesforce Flow ↔ APIs (External Services, OpenAPI, Named Credentials)

### Mapeamento de Tópicos

- **Salesforce External Services**
    
- **Importação de especificação** (ênfase em **OpenAPI/Swagger**)
    
- **Named Credentials no Salesforce** (autenticação/endpoint)
    
- Uso do elemento **Action** no Flow para invocar o serviço externo  
    Base no arquivo: importação de OpenAPI para External Services e Named Credentials + Action no Flow.
    

### Padrão de cobrança

- A prova cobra **“qual peça habilita o quê”** (ex.: “o que importar para virar ação invocável no Flow?”).
    
- Mistura termos parecidos (OpenAPI vs RAML vs “Anypoint specs”) pra testar **precisão conceitual**.
    

### Base Teórica Chave

Você precisa dominar a cadeia:

1. **Spec (OpenAPI/RAML)** → 2) **External Service** → 3) **Named Credential** → 4) **Flow Action** (invocação).  
    E saber diferenciar “registro do serviço” (External Services) de “credenciais/auth” (Named Credentials).
    

### Estratégia de Resolução

- Palavra-chave **“invokable actions no Flow”** → pense **External Services** + **OpenAPI**.
    
- Se falar **“armazenar URL e autenticação”** → Named Credentials (no Salesforce, não no Anypoint).
    
- Pegadinha comum: “Named Credentials no Anypoint” (aparece como alternativa errada).
    

### Priorização

**Essencial** (muito central no papel do Hyperautomation Specialist).

---

# Grupo 2 — MuleSoft Composer (estrutura de flows, condições, schedule, ambientes, erros)

### Mapeamento de Tópicos

- **Erros e notificações** (ex.: notificação por e-mail)
    
- **Sincronização bidirecional** entre orgs (mínimo de 2 flows)
    
- **Componentes de lógica**: Switch/Case vs If/Else vs For Each
    
- **Ambientes/conexões** (testar em sandboxes / múltiplas conexões)
    
- **Agendamento** (intervalos como 5 min / 30 min)
    
- **Transformações/funções** (ex.: string → boolean)
    

### Padrão de cobrança

- Muito “**como fazer no Composer**” (qual componente usar, qual configuração existe, quantos flows são necessários).
    
- Questões de “**mínimo necessário**” (ex.: mínimo de flows para bidirecional).
    
- Pegadinhas de nomenclatura: If/Else vs Switch/Case, For Each quando retorna coleção vs registro único.
    

### Base Teórica Chave

- **Conceito de evento/trigger vs action steps** e como isso muda quando você testa (trigger e ações conectados a sandbox).
    
- **Modelos de controle de fluxo**:
    
    - **Switch/Case**: múltiplas rotas por critérios.
        
    - **If/Else**: bifurcação simples.
        
    - **For Each**: iteração sobre coleção.
        
- **Limitações de schedule** (saber o que existe “de fábrica”).
    
- **Boas práticas de ambientes**: conexão por ambiente, evitar testar em produção.
    

### Estratégia de Resolução

- Se o enunciado diz **“rotear para 3+ times/caminhos”** → tende a **Switch/Case**.
    
- Se diz **“bidirecional entre dois sistemas”** → quase sempre **2 automações** (uma por direção).
    
- Se menciona **“erro e notificar”** → procure a alternativa com **email notification** (no documento aparece explícito).
    
- Se menciona **conversão de tipo** → busque função “fromXToY” (ex.: fromStringToBoolean).
    

### Priorização

**Essencial** (é o “coração” operacional da prova pelo volume e variedade no simulado).

---

# Grupo 3 — Salesforce Flow e Flow Orchestration (quando usar, como estruturar, branching)

### Mapeamento de Tópicos

- **Quando usar Flow Orchestration** (processo multi-etapas, coordenação de etapas/usuários)
    
- **Stages e Steps** (organização do processo)
    
- **Evaluation flows + decision/branching** (retornar variável e decidir caminho)
    
- Conceito de **capturar outcome** e atualizar registros após etapas
    
- **Boas práticas em Flow** (ex.: evitar DML em loop / bulk)
    

### Padrão de cobrança

- A banca cobra “**ferramenta certa para o tipo de processo**”:
    
    - single user vs multi-user
        
    - multi-department / handoffs
        
- Cobra muito **estrutura**: “como organizar com Stages/Steps”, “como ramificar 3 caminhos”.
    

### Base Teórica Chave

- Orchestration = **coordenação** (stages como macro-fases; steps como unidades; foco em handoffs/branches).
    
- Para 3 caminhos: **evaluation flow retorna “código/numero” + decisão** (não inventar múltiplas evaluation flows sem necessidade).
    
- Performance/governança no Flow: mentalidade de **bulk** e evitar DML em loop.
    

### Estratégia de Resolução

- Se o enunciado fala “**handoffs / departamentos / vários usuários**” → Orchestration.
    
- Se fala “**3 caminhos**” e menciona exit criteria → procure alternativa com **evaluation flow retornando variável** + decision.
    
- Se falar de limite/governor → elimine opções que façam DML repetido; prefira bulk/coleta e gravação no final.
    

### Priorização

**Essencial**.

---

# Grupo 4 — Anypoint Platform (API-led, políticas, Exchange, governança/segurança, deploy)

### Mapeamento de Tópicos

- **API-led connectivity** (System / Process / Experience; transformação/aggregação no Process)
    
- **Políticas de API**:
    
    - Spike Control (proteger de rajadas)
        
    - Rate Limiting SLA-Based (limitar por cliente)
        
- **Exchange**:
    
    - Publicar API internamente (private Exchange)
        
    - Publicar para público (visibilidade pública antes de compartilhar)
        
- **Seleção de ferramenta**: Composer vs Studio vs RPA (ex.: SOAP e near real-time → Studio)
    
- **Segurança**: Connected App + permissões (restringir quem invoca)
    

### Padrão de cobrança

- Questões de **cenário + restrições**:
    
    - “limite de chamadas por segundo” → política certa (Spike vs Rate limit).
        
    - “agregação/transformação” → camada Process.
        
    - “interno vs público” → private Exchange vs visibilidade pública.
        
- Cobrança alta de **terminologia** (System/Process/Experience; Spike Control; SLA-based).
    

### Base Teórica Chave

- API-led:
    
    - **System**: acesso a sistemas fonte.
        
    - **Process**: orquestra/transforma/agrega.
        
    - **Experience**: entrega para canal (web/mobile).
        
- Políticas:
    
    - **Spike Control**: suaviza rajadas (burst).
        
    - **Rate Limiting SLA-Based**: limites por cliente/tiers.
        
- Exchange:
    
    - Interno → **private Exchange**.
        
    - Público → ajustar **visibilidade** para public antes de compartilhar.
        

### Estratégia de Resolução

- “**bursts / overload / por segundo**” → Spike Control (não confundir com rate limit de SLA).
    
- “**limitar por cliente**” → Rate Limiting SLA-Based (não confundir com Client ID Enforcement).
    
- “**agregação e transformação**” → Process API (não Experience).
    
- “**compartilhar internamente**” → private Exchange (não portal público).
    

### Priorização

**Essencial**.

---

# Grupo 5 — MuleSoft RPA (gravação, BPMN, ciclo de vida, testes)

### Mapeamento de Tópicos

- **Recorder**: o que ele captura / cuidados com código gerado (sensível, robustez)
    
- **BPMN**: símbolos (ex.: gateway exclusivo)
    
- **Test plans**: executam no **RPA Bot**
    
- Integração Composer → RPA (padrões quando há User Task longa) (aparece no simulado em outras partes, pelo trecho visto anteriormente no PDF)
    

### Padrão de cobrança

- Foco em **ciclo de vida** e **operacionalização** (como testar, onde roda, como modelar).
    
- BPMN aparece como “interpretação de símbolo” (bem direto, mas fácil errar se você não viu).
    

### Base Teórica Chave

- Entender diferença entre:
    
    - **Builder/Design** (construção)
        
    - **Manager/Operação**
        
    - **Bot/Execução** (onde realmente roda o teste).
        
- BPMN: gateway exclusivo = **um caminho dentre vários** (condicional).
    

### Estratégia de Resolução

- Se a pergunta fala “**onde executa**” (test plan/run) → procure opção “**Bot**” (execução real).
    
- BPMN com “X” no losango → **exclusive gateway** (um único caminho).
    

### Priorização

**Importante** (não é tão volumoso quanto Composer/Orchestration, mas cai).

---

# Priorização geral (pela frequência observada no arquivo)

- **Essencial:** MuleSoft Composer; Flow Orchestration; Integrações Salesforce↔APIs (External Services/Named Creds); Anypoint Platform (API-led + policies + Exchange).  
    Evidência de recorrência e variedade: Composer/Orchestration/API-led/Policies aparecem em múltiplos trechos do documento.
    
- **Importante:** MuleSoft RPA (testes, BPMN, recorder).
    
- **Complementar:** Einstein Bot detalhes de diálogo; pontos pontuais de Flow governor/DML; funções específicas de transformação (você estuda, mas não coloca como “pilar”).
    

---

# Cronograma lógico (fundamental → avançado)

## Semana 1 — Fundamentos de Ferramentas e “quando usar o quê”

**Foco**

- Mapa mental: Composer vs Flow vs Flow Orchestration vs RPA vs Anypoint Studio/Platform
    

**Entregáveis verificáveis**

- 1 página: “Ferramenta → quando usar → quando NÃO usar”
    
- 20 flashcards (decisão de ferramenta por cenário)
    

---

## Semana 2 — Salesforce Flow + Integração com APIs (External Services)

**Foco**

- OpenAPI/RAML → External Services → Named Credentials → Action no Flow
    

**Entregáveis**

- Checklist passo-a-passo (Setup) de Named Credential + External Service (1 página)
    
- 20 flashcards (palavras-chave: invokable, spec, auth, named credential)
    

---

## Semana 3 — MuleSoft Composer “na prática de prova”

**Foco**

- Switch/Case vs If/Else vs For Each
    
- Bidirecional (2 flows)
    
- Notificações de erro, schedule, ambientes/conexões
    

**Entregáveis**

- 30 flashcards (componentes e cenários)
    
- 1 “guia de decisão” (1 página): qual componente usar quando
    

---

## Semana 4 — Flow Orchestration (stages/steps/branching)

**Foco**

- Stages por handoffs/branches
    
- 3 caminhos via evaluation flow retornando variável + decision
    

**Entregáveis**

- 1 mapa mental: Orchestration (stages/steps/evaluation/decision)
    
- 20 flashcards (sinais do enunciado que apontam Orchestration)
    

---

## Semana 5 — Anypoint Platform (API-led + Policies + Exchange)

**Foco**

- API-led tiers e onde fica transformação/agregação
    
- Policies: Spike vs Rate limiting SLA-based
    
- Exchange: private vs public/visibilidade
    

**Entregáveis**

- 25 flashcards (policies + API-led + Exchange)
    
- 1 folha “policy cheat sheet” (quando usar cada uma)
    

---

## Semana 6 — MuleSoft RPA + Revisão ativa + Simulados

**Foco**

- BPMN (gateway exclusivo)
    
- Test plans no Bot e noções do ciclo
    
- Revisão geral por tópicos fracos
    

**Entregáveis**

- 15 flashcards RPA/BPMN
    
- 1 simulado cronometrado + revisão de erros (meta: ≥ 70%)