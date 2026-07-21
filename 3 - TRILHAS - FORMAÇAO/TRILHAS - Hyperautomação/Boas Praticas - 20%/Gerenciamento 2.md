
## 🎯 O Cenário: "Quando um Lead é criado no Salesforce, enviar um email de boas-vindas e registrar no Google Sheets"

Vamos ver como esse processo seria gerenciado em cada ferramenta:

---

## 🔵 MuleSoft Composer — "O Encanador de Dados"

Pensa no Composer como um **cano que conecta dois sistemas**. Você monta o cano, testa se a água flui, abre a torneira (ativa), e depois observa se não tem vazamento.

## Ciclo de Vida:

text

`[1. BUILD] → [2. TEST] → [3. ACTIVATE] → [4. MONITOR]`

**1. BUILD** — Você abre o Composer e monta o flow assim:

text

`Trigger: "Novo Lead criado no Salesforce"     ↓ Action 1: "Enviar email de boas-vindas"     ↓ Action 2: "Adicionar linha no Google Sheets"`

**2. TEST** — Você clica em **Test** com um registro fictício (ex: Lead "João Teste"). O Composer processa **apenas esse 1 registro** e mostra se funcionou ou falhou. Se falhou, aparece a mensagem de erro.

**3. ACTIVATE** — Clica em **Activate**. O flow vira status `active` e passa a rodar automaticamente para todo Lead novo.

**4. MONITOR** — Na tela do flow, você vê o **Run History**:

text

`✅ 10/03 14:00 | SUCCESS | Lead: Maria Silva ✅ 10/03 15:30 | SUCCESS | Lead: Carlos Souza ❌ 10/03 16:00 | FAILED  | Lead: Pedro Lima → Erro: "Google Sheets sem permissão"`

**Se der erro:** Você desativa o flow → edita → corrige → reativa.

---

## 🟡 Salesforce Flow (Flow Builder) — "O Robô de Processo Interno"

Pensa no Flow como um **funcionário interno do Salesforce** que executa passos automaticamente quando algo acontece dentro do Salesforce.

## Ciclo de Vida:

text

`[1. BUILD no Flow Builder] → [2. DEBUG] → [3. ATIVAR] → [4. MONITORAR por Email]`

**1. BUILD** — Você abre o Flow Builder e monta:

text

`Trigger: "Lead criado" (Record-Triggered Flow)     ↓ Decision: "O Lead tem email preenchido?"     ├── SIM → Action: "Enviar email de boas-vindas"    └── NÃO → Action: "Criar Task para o vendedor ligar"`

**2. DEBUG** — Antes de ativar, você clica em **Debug** no próprio Flow Builder:

- O sistema simula a execução
    
- Você vê no painel direito cada step executado, em ordem:
    

text

`✅ DECISION: "Tem email?" → SIM ✅ ACTION: "Enviar email" → Executado com sucesso`

- Ainda dá para depurar **como se fosse outro usuário** (ex: "e se o vendedor João tentasse executar isso?") — ótimo para pegar erros de permissão antes de colocar em produção.
    

**3. ATIVAR** — Clica em **Activate**. A partir daí, todo Lead criado dispara o flow automaticamente.

**4. MONITORAR** — O Flow não tem um painel de histórico como o Composer. Se falhar em produção, o **Salesforce manda um email automático** para o último admin que editou o flow:

text

`Assunto: "Flow Error: Lead Welcome Flow" Corpo:   ✅ DECISION: "Tem email?" → SIM  ✅ ACTION: "Enviar email" → OK  ❌ ACTION: "Criar Task" → FALHA: "Usuário sem permissão de criar Task"`

O email mostra **exatamente qual step quebrou** e por quê.

**Se der erro:** Você abre o Flow Builder → clica em Debug → reproduz o erro → corrige → salva → ativa nova versão.

---

## 🟤 MuleSoft RPA — "O Robô de Mouse e Teclado"

Pensa no RPA como um **estagiário virtual** que literalmente abre programas, clica em botões e digita dados — igual um humano faria. Ideal para sistemas que não têm API.

## Ciclo de Vida:

text

`[1. BUILD no RPA Builder] → [2. TEST] → [3. DEPLOY para Bot] → [4. MONITOR em tempo real]`

Imagine que o Google Sheets só existe numa versão desktop antiga, sem API. O RPA faria:

**1. BUILD** — Você grava as ações no RPA Builder:

text

`Passo 1: Abrir o Excel Passo 2: Ir para a aba "Leads" Passo 3: Clicar na primeira célula vazia Passo 4: Digitar o nome do Lead Passo 5: Salvar o arquivo`

**2. TEST** — No RPA Manager, você cria um **Test Plan**, assina o processo para um bot de teste, e executa. O bot roda os passos e você vê o resultado:

text

`✅ Passo 1: Abrir Excel → OK ✅ Passo 2: Ir para aba "Leads" → OK ❌ Passo 3: Clicar na célula → FALHA: "Aba não encontrada"`

**3. DEPLOY** — Após aprovação nos testes, você cria uma **Production Configuration**, escolhe o bot de produção, define o agendamento e clica em **Deploy**.

**4. MONITOR** — No RPA Manager você tem:

- **Process Streaming**: vê ao vivo uma "filmagem" do que o robô está fazendo na tela
    
- **Run Results**: tabela com todas as execuções e falhas
    
- Se falhar → baixa o **Analysis Package** → arrasta no RPA Builder → ele destaca **exatamente qual passo quebrou** com screenshot do momento da falha
    

**Se der erro:** Reverter o processo para fase **Build** → corrigir → testar → fazer novo deploy.

---

## 🟣 Anypoint API Manager — "O Porteiro da API"

Pensa no API Manager como um **porteiro de hotel** que controla quem entra, quantas vezes por minuto, e avisa a segurança se algo suspeito acontecer.

## Ciclo de Vida:

text

`[1. Design Center] → [2. Studio/Implementação] → [3. Deploy via Runtime Manager] → [4. GERENCIAR no API Manager]`

No nosso cenário, a API que recebe os dados do Lead e distribui para os sistemas.

**1-3. Build e Deploy** — A API é criada no Design Center, implementada no Studio e publicada no Runtime Manager. O API Manager passa a gerenciá-la.

**4. GERENCIAR** — No API Manager você configura:

text

`Policies (regras):   ✅ Rate Limiting: máximo 100 chamadas por minuto  ✅ Autenticação: só aceitar com token válido Alertas configurados:   🔔 Se erro 500 aparecer → enviar email para o time  🔔 Se tempo de resposta > 3s → notificar o arquiteto`

**MONITORAR** — Na tela de **Key Metrics** você vê em tempo real:

text

`Total de chamadas hoje: 1.247 Erros (4xx/5xx): 3  ← clica para ver quais Tempo médio de resposta: 0,8s Violações de policy: 12 (Rate Limit excedido)`

**Se der problema:** O alerta já foi disparado por email → você entra no API Manager → vê qual endpoint está com erro → ajusta a policy ou aciona o time de desenvolvimento.

---

## 🗺️ Resumo Visual do Ciclo de Vida

text

`VOCÊ TEM UM PROCESSO PARA AUTOMATIZAR               ↓    É repetitivo num sistema SEM API?         SIM → MuleSoft RPA (robô de tela)         NÃO ↓    É integração entre sistemas externos?         SIM → MuleSoft Composer (sem código)         NÃO ↓    É automação DENTRO do Salesforce?         SIM → Salesforce Flow (lógica interna)         NÃO ↓    É uma API que precisa ser controlada/monitorada?         SIM → Anypoint API Manager (porteiro)`

O ponto central é: **todas as ferramentas têm Build → Test → Produção → Monitorar**. A diferença é o **nível de detalhe do monitoramento** — o RPA Manager é o mais robusto (streaming ao vivo, analysis package), enquanto o Composer é o mais simples (só Run History). O Flow usa email para alertar falhas, e o API Manager foca em métricas de performance e violações de policy.





## Como as Ferramentas de Hyperautomation se Conectam e Trabalham em Conjunto

Com base na documentação oficial da MuleSoft, aqui está o mapa completo de integração entre as ferramentas:

---

## 🗺️ Visão Geral: O Ecossistema Conectado

text

`Salesforce Flow / Eventos externos            ↓ (trigger)   MuleSoft Composer (orquestrador)           ↓ (invoca via conector RPA)      Anypoint Exchange           ↓ (publica/disponibiliza)         MuleSoft RPA           ↓ (executa no desktop)        RPA Bot (execução real)           ↓ (retorna resultado)   MuleSoft Composer (resultado)           ↓ (continua o flow)  Salesforce / Sistema de destino`

---

## 🔗 Como Cada Ferramenta se Conecta

## 1. RPA → Anypoint Exchange (Publicação)

**O que acontece:** Depois que um processo RPA é criado e testado no RPA Manager, ele precisa ser "publicado" para ficar disponível para outras ferramentas.[](https://docs.mulesoft.com/rpa-home/automation-tutorial-deploy)​

**Passos reais da documentação:**

1. No RPA Manager → **My RPA > My Processes**
    
2. Criar uma **Invocable Run Configuration** (configuração invocável)
    
3. Selecionar o bot que vai executar
    
4. Clicar em **Publish > Publish to Anypoint**
    

**Resultado:** O processo RPA vira uma API disponível no Anypoint Exchange — como um "produto" que outros sistemas podem chamar.

---

## 2. Composer → RPA (Invocação)

**O que acontece:** O Composer usa um conector nativo de RPA para chamar o processo publicado no Exchange.

**Passos reais da documentação:**

1. Abrir MuleSoft Composer → **New Flow**
    
2. Definir um **trigger** (ex: Scheduler a cada 15 min, ou evento do Salesforce)
    
3. Adicionar **System Action > MuleSoft RPA**
    
4. Configurar a conexão com credenciais do RPA Manager
    
5. Selecionar **Action: Invoke RPA Process**
    
6. Escolher a configuração invocável publicada no Exchange
    
7. Configurar **Output: Use response in this flow**
    

**Dois modos de chamada disponíveis:**[](https://docs.mulesoft.com/rpa-home/invoke-rpa-services)​

- **Síncrono (Sync):** O Composer espera o RPA terminar antes de continuar o flow
    
- **Assíncrono (Async):** O Composer continua executando enquanto o RPA roda em paralelo
    

---

## 3. Salesforce Flow → Composer (Trigger)

**O que acontece:** Um Flow do Salesforce pode ser o gatilho que dispara um Flow do Composer, que por sua vez chama o RPA.

**Exemplo prático:**

- Um registro de Lead é criado no Salesforce → Flow detecta → chama Composer via webhook → Composer aciona RPA para preencher um formulário legado com os dados do Lead
    

---

## 4. RPA Poll Trigger (RPA → Composer)

O conector RPA no Composer também permite criar **listeners (ouvintes)** que ficam monitorando o status de processos RPA e disparam ações no Composer quando o processo termina.[](https://docs.mulesoft.com/rpa-home/invoke-rpa-services)​

---

## 📋 Tabela de Integrações

|De|Para|Como|Quando usar|
|---|---|---|---|
|**RPA Manager**|**Anypoint Exchange**|Publish to Anypoint|Depois de testar, para disponibilizar o processo|
|**Composer**|**MuleSoft RPA**|Conector nativo MuleSoft RPA|Para iniciar automações a partir de eventos de negócio|
|**Salesforce Flow**|**Composer**|Webhook / Invocable Flow|Quando o gatilho vem do Salesforce CRM|
|**Composer**|**Salesforce**|Conector Salesforce|Para atualizar registros após o RPA executar|
|**RPA**|**Composer**|RPA Poll Trigger|Para monitorar conclusão de processos RPA|

---

## 🏗️ Exemplo Real de Projeto Completo

**Cenário:** Uma empresa recebe novos clientes no Salesforce e precisa cadastrá-los em um sistema legado que não tem API.

text

`1. [Salesforce Flow]    → Lead criado no Salesforce dispara o Flow    2. [MuleSoft Composer]    → Flow do Composer é acionado com os dados do Lead   → Composer prepara os dados (nome, email, telefone)    3. [MuleSoft RPA via Anypoint Exchange]    → Composer chama o processo RPA (modo síncrono)   → RPA Bot abre o sistema legado no desktop   → Bot preenche o formulário com os dados   → Bot confirma o cadastro   → Retorna: { status: "SUCCEED", id_gerado: "12345" }    4. [MuleSoft Composer - continuação]    → Recebe o resultado do RPA   → Atualiza o Lead no Salesforce com o ID do sistema legado   → Envia email de confirmação via conector de email    5. [Salesforce]    → Lead atualizado com campo "Sistema Legado ID: 12345"`

---

## 🔑 Conceitos-Chave Para Conectar as Ferramentas

|Conceito|O que é|Para que serve|
|---|---|---|
|**Invocable Run Configuration**|Configuração do processo RPA que permite ser chamado externamente|Necessário para o Composer poder invocar o RPA|
|**Anypoint Exchange**|Repositório central de APIs e assets|Onde o RPA é publicado para ser descoberto pelo Composer|
|**RPA Connector**|Plugin nativo do Composer para RPA|Faz a "ponte" de comunicação Composer ↔ RPA|
|**RPA API Key**|Chave de autenticação do usuário RPA|Autentica o Composer com o RPA Manager|
|**Sync vs Async**|Modos de chamada|Sync: espera resultado; Async: continua sem esperar|

---

## ⚙️ Pré-requisitos Para a Integração Funcionar

Segundo a documentação oficial, antes de integrar você precisa:[](https://docs.mulesoft.com/rpa-home/automation-tutorial-deploy)​

1. **Configurar Anypoint Platform Credentials** no RPA Manager (Settings)
    
2. **Criar uma API Key** de usuário no RPA Manager
    
3. **Publicar** o processo RPA como "Invocable" no Exchange
    
4. **Configurar a Connection** no Composer com a URL da API RPA (`https://<tenant>.rpa.mulesoft.com/rpa/api/v1`) e a API Key
    

---

Esse é o fluxo completo e oficial de como as ferramentas se integram. O Anypoint Exchange funciona como o "hub" central — tudo que é construído (RPA, APIs, Connectors) é publicado lá e então consumido pelas outras ferramentas de forma organizada.