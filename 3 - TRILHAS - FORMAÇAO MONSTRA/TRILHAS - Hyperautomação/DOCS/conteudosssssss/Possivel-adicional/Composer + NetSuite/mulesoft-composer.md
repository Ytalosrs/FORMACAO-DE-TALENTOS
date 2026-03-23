# Revisão MuleSoft Composer – Focado no Mule-Dev-202

> Objetivo: revisar só o que mais cai sobre **MuleSoft Composer** no exame Mule-Dev-202.

---

## Módulo 1 – Conceito e Quando Usar Composer

### 1. Papel do Composer

- Ferramenta low-code para integrar Salesforce e outros sistemas SaaS (Slack, NetSuite, ServiceNow, etc.) via flows com gatilhos (triggers) e ações (actions).
- Ideal para integrações de baixa/média complexidade, sincronização de dados e automações reativas a eventos, sem desenvolvimento de código.

### 2. Quando usar x quando não usar

- Use Composer quando:
  - Precisa sincronizar dados entre Salesforce e outro SaaS.
  - Quer reagir a eventos (novo registro, atualização, mensagem) em tempo quase real.
  - O volume é moderado e a lógica é relativamente simples.
- Prefira outras ferramentas quando:
  - Precisa de API pública governada, com múltiplos consumidores, versionamento e políticas → use APIs Mule (System/Process/Experience).
  - Volume alto, lógica complexa, integrações críticas de core → Mule/Anypoint (API-led).
  - Processo essencialmente de UI, sem APIs disponíveis e muito repetitivo → MuleSoft RPA.

---

## Módulo 2 – Triggers (Gatilhos) e Conexões

### 1. Criação de flow e trigger

- Todo flow começa com um trigger.
- Passos típicos:
  1. Criar ou clonar o flow.
  2. Na tela "What Should Start This Flow?", escolher o conector (Salesforce, Slack, etc.).
  3. Selecionar/criar a conexão (sandbox ou produção).
  4. Definir o tipo de trigger (evento ou Scheduler).

### 2. Tipos de trigger

- Evento de sistema (event-based):
  - "On new record" ou "On updated record" em Salesforce ou outro SaaS.
  - "On new message" em Slack, etc.
- Scheduler:
  - Executa a cada X minutos/horas/dias, ideal para sincronizações periódicas.

### 3. Boas práticas e detalhes de prova

- Desenvolver e testar em sandbox; só depois replicar/ajustar para produção.
- Para testar um trigger de evento, usar o botão **Test** no Composer e, em seguida, provocar o evento no sistema (por ex., criar um novo registro).
- Triggers têm nome, que pode ser renomeado (usando apenas caracteres válidos: letras, números, espaço, -, ., _).
- Se precisar trocar o data source do trigger (por exemplo, de Salesforce para outro), normalmente é necessário criar um novo flow.

---

## Módulo 3 – Actions, Flow Controls (If/Else, For Each) e Transformação

### 1. Actions

- Actions são os passos que realizam operações em sistemas:
  - Criar/atualizar/buscar registros em Salesforce e outros SaaS.
  - Enviar mensagens em Slack, criar issues, etc.
  - Chamar APIs via HTTP connector.
- Cada action precisa de uma conexão configurada com o sistema alvo.

### 2. Flow controls – If/Else e For Each

- If/Else Block:
  - Permite definir caminhos diferentes no flow com base em condições.
  - Composer sugere campos ("data pills") e operadores com base no que veio do trigger e de actions anteriores.
  - Só o primeiro branch cuja condição é verdadeira executa; a ordem dos branches importa.
- For Each:
  - Usado para iterar sobre uma **lista de itens** (por exemplo, uma lista de registros retornados por uma busca).
  - Passos:
    1. Adicionar For Each.
    2. Escolher um data pill que seja uma lista.
    3. Adicionar actions dentro do For Each para operar em cada item.

### 3. Transformação de dados

- Mapear campos de entrada para os campos de saída (de um sistema para outro).
- Operações comuns:
  - Concatenar strings (por exemplo, nome completo).
  - Converter tipos simples, definir valores padrão.
- Em cenários de prova, normalmente a resposta correta usa um único flow com If/Else ou For Each, em vez de criar vários flows diferentes.

---

## Módulo 4 – HTTP Connector e APIs

### 1. Uso do HTTP connector

- Usado quando não existe conector nativo para o sistema que você precisa chamar.
- Permite configurar:
  - URL e método (GET, POST, etc.).
  - Headers (incluindo Authorization com token Bearer, por exemplo).
  - Query parameters e corpo (body) da requisição.

### 2. Composer dentro do padrão API-led

- Em arquiteturas API-led, Composer costuma chamar **Experience APIs** ou **Process APIs**, não diretamente sistemas de registro.
- Isso garante reutilização e governança: System APIs permanecem como camada de acesso a dados, enquanto Process e Experience mediam o consumo.

### 3. Padrões de prova

- Se o enunciado fala: "Conectar Salesforce a um serviço REST interno/externo que já existe", e não há conector nativo, a alternativa correta tende a ser "usar HTTP connector em um flow do Composer".
- Para cenários com múltiplos consumidores e políticas avançadas, a prova normalmente empurra a resposta para uma API Mule em vez de Composer.

---

## Módulo 5 – Composer + MuleSoft RPA

### 1. Quando combinar Composer com RPA

- Quando há um processo de UI (sistema legado sem API) que precisa ser disparado por um evento (ex.: novo registro em Salesforce) ou por um agendamento.
- Composer coordena; RPA executa a interação com a interface.

### 2. Passos para integrar Composer e RPA

1. Criar flow em Composer.
2. Definir trigger (evento ou Scheduler).
3. Adicionar action de tipo "MuleSoft RPA" e criar conexão usando a API Key do RPA.
4. Na action, escolher "Invoke RPA Process" e selecionar a invocable run configuration desejada.
5. Configurar **Output** como "Use response in this flow" para poder usar a resposta do processo RPA nas próximas actions.
6. Testar o flow com **Test** e verificar `RPA Execution ID` e `RPA Execution Status`.

### 3. Padrões que caem na prova

- Perguntas em ordem de passos (qual é a sequência correta para Composer acionar um processo RPA?).
- Perguntas que misturam ferramentas: "Como automatizar um processo em website sem API a partir de um evento em Salesforce?" → Composer como orquestrador + RPA para a UI.

---

## Módulo 6 – Testes, Erros, Limitações e Ciclo de Vida do Flow

### 1. Ciclo de vida típico de um flow

1. Criar ou clonar o flow.
2. Configurar o trigger com a conexão correta (preferencialmente sandbox).
3. Adicionar actions e flow controls (If/Else, For Each).
4. Usar **Test** para validar trigger e cada action com dados de teste.
5. Corrigir erros e salvar.
6. Ativar o flow.
7. Monitorar execuções, erros e ajustar quando necessário.

### 2. Tratamento de erros

- Boas práticas:
  - Tratar respostas vazias ou de erro com condições (If/Else), não assumir que o call sempre vai funcionar.
  - Configurar notificações para falhas (por exemplo, enviar email/Slack em caso de erro).
- Na prova, a alternativa correta costuma mencionar "testar o flow" e "usar sandbox" antes de ativar em produção.

### 3. Limitações e comportamentos importantes

- Limitações gerais:
  - Composer é pensado para cargas leves e médias; se o volume aumentar muito, recomenda-se mover a integração para Mule/Anypoint.
  - Não é possível simplesmente mudar o tipo de trigger para outro data source em um flow existente; costuma ser necessário criar um novo flow.
- Conexões:
  - Ao tentar excluir uma conexão usada por flows, Composer mostra a lista de flows que a utilizam para evitar quebra.
- HTTP e listas:
  - Algumas APIs que exigem listas têm restrições: em geral, Composer só consegue criar uma lista a partir de outra lista já disponível no flow.

---

## Como usar este arquivo na revisão

- Leia cada módulo em 5–10 minutos e tente lembrar exemplos de questões do seu simulado que se encaixem naquele tema.
- Depois de revisar um módulo, faça 5–10 questões relacionadas (por exemplo, módulo de triggers + actions, depois módulo de RPA com Composer).
- Antes da prova, releia só os títulos e bullets principais para ativar rápido o raciocínio de "qual ferramenta", "qual trigger", "qual padrão".
