# 📘 APOSTILA DIDÁTICA – SALESFORCE HYPERAUTOMATION SPECIALIST

---

## VISÃO GERAL DA PROVA (como a banca pensa)

A prova **NÃO testa sintaxe**, nem configuração passo a passo.  
Ela testa **decisão correta de ferramenta + boas práticas + limites de cada tecnologia**.

Os **4 pilares reais** (observados no simulado):

1. **MuleSoft Composer**
    
2. **MuleSoft RPA**
    
3. **Salesforce Flow & Flow Orchestration**
    
4. **Anypoint Platform (API-led, políticas, Exchange, deploy)**
    

Você só passa quando consegue responder mentalmente:

> “Dado esse cenário, **qual ferramenta resolve com MENOR COMPLEXIDADE e MAIOR GOVERNANÇA**?”

---

# 🟦 PILAR 1 — MULESOFT COMPOSER (≈ 40% do simulado)

---

## 1.1 O que é MuleSoft Composer

**MuleSoft Composer** é uma ferramenta **no-code/low-code** para:

- Integrações simples
    
- Automação orientada a eventos
    
- Uso por **administradores e analistas**, não desenvolvedores
    

Ela se conecta a:

- Salesforce
    
- SaaS (Slack, NetSuite, etc.)
    
- MuleSoft RPA
    

📌 **Não é**:

- Plataforma de API enterprise
    
- Ferramenta para lógica complexa ou alto volume
    

---

## 1.2 Por que Composer é importante em hiperautomação

Em projetos reais:

- Reduz dependência de TI
    
- Permite automações rápidas
    
- Atua como **cola entre sistemas e pessoas**
    

A prova cobra Composer como:

> “Ferramenta correta quando o problema é simples, orientado a eventos e não exige código.”

---

## 1.3 Desconstrução das Questões do Simulado (Composer)

### 🔍 Exemplo 1 — Sincronização bidirecional entre dois Salesforce orgs

**Resposta correta:** 2 flows

**Por quê?**

- Composer é **event-driven**
    
- Um flow escuta mudanças no Org A
    
- Outro flow escuta mudanças no Org B
    

❌ Distratores comuns:

- “1 flow” → erro conceitual (não existe escuta bidirecional automática)
    
- “3 ou 4 flows” → exagero sem necessidade
    

📌 **Regra de ouro da prova:**

> _Bidirecional = 1 automação por direção_

---

### 🔍 Exemplo 2 — Roteamento de casos para vários times

**Resposta correta:** Switch / Case

**Por quê?**

- Múltiplos caminhos exclusivos
    
- Cada condição leva a um destino
    

❌ Distratores:

- If/Else → só serve para duas opções
    
- For Each → iteração, não decisão
    
- Swimlane → conceito visual, não lógico
    

📌 Palavra-chave que denuncia Switch/Case:

> “route”, “based on criteria”, “multiple teams”

---

### 🔍 Exemplo 3 — Erros no Composer

**Resposta correta:** Notificação por e-mail

**Por quê?**

- Composer suporta alertas por e-mail nativamente
    
- Não integra nativamente com Chatter ou Slack para erro automático
    

❌ Distrator clássico:

- “Slack notification” (parece lógico, mas não é padrão nativo)
    

---

## 1.4 Pegadinhas recorrentes do Composer

- 🔴 Retorno único ≠ coleção → **não usar For Each**
    
- 🔴 Bidirecional nunca é 1 flow
    
- 🔴 Composer ≠ Anypoint Platform
    

---

# 🟧 PILAR 2 — MULESOFT RPA (≈ 20% do simulado)

---

## 2.1 O que é MuleSoft RPA

**RPA (Robotic Process Automation)** automatiza:

- Sistemas legados
    
- Sites sem API
    
- Aplicações desktop
    

Usa:

- UI automation
    
- BPMN para modelagem
    

---

## 2.2 Por que RPA é importante em hiperautomação

Em projetos reais:

- Resolve o “último quilômetro”
    
- Automatiza onde APIs não existem
    
- Complementa Composer e APIs
    

📌 A prova usa RPA como resposta sempre que o cenário diz:

> “sistema legado”, “sem API”, “interação manual”, “website”

---

## 2.3 Conceitos cobrados nas questões

### 🔹 Exclusive Gateway (BPMN)

**O que é:**  
Um ponto de decisão onde **apenas UM caminho é seguido**.

**Por que importa:**  
Modela decisões condicionais reais (if/else no BPMN).

❌ Distratores:

- “atividade de erro”
    
- “cleanup”
    
- “endpoint final”
    

---

### 🔹 RPA Recorder

**O que faz:**

- Captura elementos de UI
    
- Documenta interações
    

❌ O que NÃO faz:

- Não captura lógica
    
- Não gera código pronto para produção
    

📌 Questão clássica:

> “O que o Recorder coleta automaticamente?”  
> Resposta: **documentação dos elementos usados**

---

### 🔹 Testes de RPA

**Onde executam os testes?**  
✅ **No RPA Bot**

❌ Distratores:

- RPA Builder (design)
    
- RPA Manager (gestão)
    

---

# 🟩 PILAR 3 — SALESFORCE FLOW & FLOW ORCHESTRATION (≈ 25%)

---

## 3.1 O que é Salesforce Flow

Ferramenta declarativa para:

- Automação dentro do Salesforce
    
- Regras, DML, atualizações
    

---

## 3.2 O que é Flow Orchestration

Extensão do Flow para:

- Processos longos
    
- Múltiplos usuários
    
- Múltiplos departamentos
    

Usa:

- **Stages** → grandes fases
    
- **Steps** → ações
    
- **Evaluation flows** → decisões
    

---

## 3.3 Por que a prova gosta de Orchestration

Porque ela testa:

- Governança
    
- Clareza de processo
    
- Arquitetura correta
    

📌 Palavra-chave típica:

> “multi-step”, “multi-department”, “handoffs”, “approvals”

---

## 3.4 Questões explicadas

### 🔍 Exemplo — Processo complexo após criação de Case

**Resposta correta:** Flow Orchestration com Stages e Steps

❌ Distratores:

- Autolaunched Flow (simples demais)
    
- Parent/Subflows (menos governança)
    
- Screen Flow isolado
    

---

### 🔍 Exemplo — 3 caminhos possíveis após um Stage

**Resposta correta:**  
Evaluation Flow retorna variável → Decision

❌ Distratores:

- Múltiplos evaluation flows
    
- Lógica hardcoded
    

📌 A prova gosta de:

> “retornar número/código e decidir”

---

### 🔍 Boas práticas de Flow

- ❌ DML dentro de loop
    
- ✅ Bulk DML com coleção
    

Se aparecer “governor limits”, essa é a pista.

---

# 🟥 PILAR 4 — ANYPOINT PLATFORM (≈ 30%)

---

## 4.1 O que é Anypoint Platform

Plataforma enterprise para:

- APIs
    
- Integrações complexas
    
- Governança
    
- Escalabilidade
    

---

## 4.2 API-led Connectivity (cai MUITO)

### System API

- Acesso direto a sistemas
    

### Process API

- Orquestra
    
- Transforma
    
- Agrega dados
    

### Experience API

- Entrega para canal (mobile, web, parceiros)
    

📌 Questão clássica:

> “Onde ocorre agregação e transformação?”  
> Resposta: **Process API**

---

## 4.3 Políticas de API (pegadinhas clássicas)

### Spike Control

- Protege contra **rajadas súbitas**
    

### Rate Limiting (SLA)

- Limita chamadas **por cliente**
    

❌ Erro comum:

- Confundir Spike com Rate Limit
    

---

## 4.4 Exchange

- **Private Exchange** → uso interno
    
- **Public Exchange** → exposição externa
    

📌 Questão recorrente:

> “Compartilhar API internamente?”  
> Resposta: **Private Exchange**

---

## 4.5 Runtime Fabric

- Deploy em AWS / cloud próprio
    
- Escala horizontal/vertical
    
- Zero downtime
    

Sempre aparece em cenários enterprise.

---

# ⭐ GUIA DE “COMO PASSAR” — DICAS DE OURO

1. **Sem API → pense RPA**
    
2. **Simples, evento, admin → Composer**
    
3. **Multiusuário/multidepartamento → Orchestration**
    
4. **Agregação/transformação → Process API**
    
5. **Rajada → Spike Control**
    
6. **Por cliente → Rate Limiting**
    
7. **Bidirecional → 2 automações**
    
8. **API no Flow → OpenAPI + External Services**
    
9. **Compartilhar internamente → Private Exchange**
    

---

# 📚 GLOSSÁRIO DO SIMULADO

- **OpenAPI Specification**: padrão para External Services no Flow
    
- **Named Credentials**: URL + autenticação no Salesforce
    
- **BPMN**: notação de processos do RPA
    
- **Exclusive Gateway**: decisão exclusiva no BPMN
    
- **Runtime Fabric**: runtime enterprise para Mule
    
- **API-led Connectivity**: arquitetura em 3 camadas
    
- **Switch/Case**: decisão múltipla no Composer
    
- **Evaluation Flow**: flow que retorna dados para decidir caminhos