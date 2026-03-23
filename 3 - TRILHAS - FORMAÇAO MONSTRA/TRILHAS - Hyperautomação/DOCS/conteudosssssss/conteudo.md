# 📚 Módulo 1

---

# **📚 Módulo 1: Melhores Práticas de Hiperautomação (Deep Dive)**

**Peso no Exame:** 20%

**Foco:** Estratégia, Arquitetura de Solução, Governança e Decisão Técnica.

Este módulo não testa se você sabe "clicar", mas sim se você sabe **pensar como um Arquiteto de Soluções**. A hiperautomação não é sobre uma ferramenta, mas sobre a orquestração eficiente de várias delas.

---

## **1\. A Matriz de Seleção de Ferramentas (The Right Tool for the Job)**

Para a prova, você deve classificar o cenário de negócio com base em 4 critérios: **Complexidade, Volume, Interface e Usuário.**

### **MuleSoft RPA (O "Braço" Digital)**

* **Interface:** Somente para sistemas **sem API** (Legados, Mainframes, aplicações Desktop Windows, Citrix) ou onde o acesso via API é restrito/caro.  
* **Cenário Típico:** "Ler dados de um sistema de contabilidade de 1995 que só roda em Windows".  
* **Nuance de Prova:** Se houver menção a processamento de documentos não estruturados (PDFs escaneados), o RPA com OCR (Optical Character Recognition) é a escolha.

### **MuleSoft Composer (A "Ponte" No-Code)**

* **Interface:** Conectores nativos para SaaS (Salesforce, Slack, NetSuite, Google Sheets, Workday).  
* **Complexidade:** Baixa/Média. Transformações de dados simples.  
* **Perfil:** Administradores de Salesforce (Business Users).  
* **Nuance de Prova:** Se o requisito for "velocidade de entrega" e "sem código" para integrar duas nuvens (ex: Salesforce e ServiceNow), o Composer vence a Anypoint Platform.

### **Anypoint Platform (O "Cérebro" de Integração)**

* **Interface:** APIs (REST, SOAP), FTP, Database, sistemas com alta complexidade de protocolo.  
* **Volume:** Alto. Milhões de registros, processamento em lote (Batch), agregação de dados.  
* **Poder:** DataWeave (a linguagem de transformação da MuleSoft) permite manipulações que o Composer não alcança.  
* **Nuance de Prova:** Se o cenário envolver **reutilização em escala** (API-Led Connectivity), segurança rigorosa (OAuth, Políticas de IP) ou alto volume, a resposta é Anypoint.

---

## **2\. Padrões de Design de Comunicação**

Como as peças se encaixam? A prova cobrará como você estabelece a comunicação entre as nuvens.

### **Invocação de Processos (Triggering)**

* **Salesforce Flow → MuleSoft RPA:** O Salesforce envia uma chamada via **External Services**. O RPA Manager recebe e coloca o bot na fila.  
* **Composer → RPA:** O Composer possui um conector nativo para o MuleSoft RPA. Ele pode passar parâmetros (ex: Nome do Cliente) para o processo de RPA.  
* **Anypoint → Salesforce:** Uso do conector Salesforce (via Pub/Sub API ou CDC \- Change Data Capture) para reagir a mudanças no CRM em tempo real.

### **Sincronismo e Estado**

* **Síncrono (Request/Response):** Ideal para consultas (ex: verificar preço). Usado em APIs na Anypoint.  
* **Assíncrono (Fire and Forget):** Essencial para RPA. O robô pode demorar minutos para abrir uma aplicação. A solução deve prever que a resposta virá depois (callback ou pooling).

---

## **3\. Estratégia de Testes em Hiperautomação (E2E)**

Diferente de um código simples, você deve testar o **fluxo de valor**.

1. **Isolamento de Erro:** Se uma automação falha, você deve ser capaz de identificar se o erro foi na extração (RPA), na transmissão (Composer/Anypoint) ou no destino (Salesforce).  
2. **Dados Sintéticos:** O uso de **Mock Data** (dados fictícios) no Anypoint Exchange é fundamental para testar APIs antes que os sistemas legados estejam prontos.  
3. **Tratamento de Exceções de Negócio vs. Técnicas:**  
   * **Técnica:** Queda de internet, sistema fora do ar (Solução: Retry/Re-tentativa).  
   * **Negócio:** Cliente com crédito insuficiente, CPF inválido (Solução: Direcionar para uma **User Task** ou aprovação manual no Flow).

---

## **4\. Reutilização e o Modelo Operacional (C4E)**

Um pilar da MuleSoft é o **Center for Enablement (C4E)**.

* **Ativos Reutilizáveis:** Não construa o mesmo login de RPA três vezes. Publique o processo no **Anypoint Exchange**.  
* **Fragmentos de RAML:** Use fragmentos de especificação de API para manter a consistência em todos os projetos de hiperautomação.

---

## **5\. Cenário Complexo para Análise (Padrão de Prova)**

**Cenário:** Uma seguradora quer automatizar a abertura de sinistros.

1. O cliente envia uma foto do acidente via WhatsApp.  
2. Um **Einstein Bot** (Salesforce) coleta os dados básicos.  
3. Uma API na **Anypoint Platform** consulta o histórico do cliente no banco de dados local.  
4. Um processo de **MuleSoft RPA** abre o sistema legado de seguros (verde/preto) para registrar o sinistro e gera um número de protocolo.  
5. O **Flow Orchestration** envia uma tarefa para um perito humano validar as fotos.  
6. Após aprovação, o **MuleSoft Composer** posta uma mensagem no canal de "Sinistros Aprovados" no Slack da equipe.

**Por que essa arquitetura é boa?**

* Usa IA para interface (Einstein).  
* Usa RPA apenas onde não há API (sistema legado).  
* Usa Orchestration para gerenciar a espera pelo perito humano (processo de longa duração).  
* Usa Composer para notificações rápidas em ferramentas de colaboração.

---

## **💡 Termos Técnicos que você deve dominar para este módulo:**

* **Idempotência:** Capacidade de executar a mesma operação várias vezes sem mudar o resultado (evita duplicatas).  
* **BPMN (Business Process Model and Notation):** A linguagem visual usada para desenhar os processos de RPA e Flow Orchestration.  
* **Exponential Backoff:** Técnica de espera crescente entre tentativas de erro (ex: espera 1s, depois 2s, 4s, 8s...).  
* **API-Led Connectivity:** Dividir APIs em camadas (System, Process, Experience) para maximizar a reutilização.

---

## **6\. Checklist do exame para este módulo**

* Em qualquer cenário, identifique rapidamente se ele pede MuleSoft RPA, Composer, Anypoint Platform, Salesforce Flow ou uma combinação deles, observando interface disponível, volume de dados, complexidade e perfil do usuário.
* Ao imaginar um fluxo de ponta a ponta, desenhe mentalmente a sequência Salesforce → Anypoint → Composer → RPA, marcando onde cada ferramenta entra, qual protocolo usa (HTTP, conectores nativos, eventos) e se a comunicação é síncrona ou assíncrona.
* Para cada solução, pense em como testá-la de ponta a ponta: quais dados sintéticos você usaria, quais partes podem ser simuladas (Mocking Service no Anypoint, dados de teste em Salesforce) e onde estão os pontos de observabilidade.
* Relacione tipos de falha com camadas específicas: validação de negócio em Flow/Composer, erros técnicos em APIs (Anypoint), problemas de interface no RPA e gargalos de performance monitorados pelo Anypoint Monitoring.
* Identifique sempre oportunidades de reutilização: APIs publicadas no Exchange, fragmentos de RAML, processos de RPA reutilizáveis, subflows em Salesforce e fluxos genéricos de Composer que podem ser chamados por diferentes equipes.
* Avalie a velocidade de desenvolvimento desejada no cenário: integrações simples entre nuvens SaaS favorecem o Composer; processos com interação humana longa pedem Flow Orchestration; integrações críticas e reutilizáveis exigem Anypoint; sistemas sem API pedem RPA.

# 📚 Módulo 2

# **🤖 Módulo 2: MuleSoft RPA (Conteúdo Extendido)**

**Peso no Exame:** 17%

**Foco:** Ciclo de vida de automação, ferramentas de desenvolvimento, lógica de robôs e gestão de ambientes.

Neste módulo, o exame avalia sua capacidade técnica de transformar um processo manual em um fluxo automatizado funcional, utilizando os três pilares do MuleSoft RPA: **Manager, Builder e Bot.**

---

## **1\. Arquitetura e Componentes Detalhados**

A arquitetura do MuleSoft RPA é distribuída. Entender onde cada tarefa é executada é vital:

### **A. MuleSoft RPA Manager (O Orquestrador)**

* **Ambiente:** Cloud (SaaS).  
* **Função:** É o centro de comando. Aqui você gerencia o ciclo de vida (Lifecycle), usuários, permissões, credenciais seguras e agendamentos.  
* **Recursos Críticos:**  
  * **Process Operations:** Onde você vê o status de saúde de todos os bots.  
  * **Credential Manager:** Armazena senhas de forma criptografada para que o robô as use sem que o desenvolvedor as veja.  
  * **Dashboard de Análise:** Avalia o ROI (Retorno sobre Investimento) e economia de tempo.

### **B. MuleSoft RPA Builder (A Forja)**

* **Ambiente:** Desktop (Windows).  
* **Função:** Onde a "mágica" técnica acontece. Você define as **Workflow Activities**.  
* **Toolbox:** Contém centenas de ações pré-configuradas (Excel, Mail, UI Automation, OCR, Browser Control).  
* **Variáveis e Parâmetros:** No Builder, você mapeia como os dados entram e saem de cada tarefa.

### **C. MuleSoft RPA Recorder (O Acelerador)**

* **Função:** Captura as ações de um usuário real (cliques e digitação) e gera um arquivo que pode ser importado para o Builder.  
* **Ponto de Prova:** O Recorder não gera uma automação pronta para produção; ele cria um *esqueleto* que deve ser refinado no Builder.

---

## **2\. O Ciclo de Vida do Processo (Fases Obrigatórias)**

O exame costuma cobrar a ordem e o propósito de cada fase no RPA Manager:

1. **Evaluation (Avaliação):** O processo é viável? É estável? O Manager gera um gráfico de "Aptidão para Automação".  
2. **Design:** Desenha-se o fluxo usando **BPMN**. Aqui define-se o que o robô faz (**Bot Task**) e onde o humano intervém (**User Task**).  
3. **Build (Construção):** A lógica é implementada no Builder e os parâmetros de entrada/saída são configurados.  
4. **Test:** O processo é movido para o estágio de teste no Manager. Ele deve ser executado com sucesso em um ambiente de homologação.  
5. **Production (Produção):** O processo é publicado e agendado.

---

## **3\. Lógica de Automação e Melhores Práticas Técnicas**

### **UI Automation (Automação de Interface)**

* **Web: Object-Based.** Sempre prefira identificar botões por IDs ou XPaths (é mais estável).  
* **Desktop: Image-Based / Pattern Recognition.** Quando não há IDs (sistemas legados), o robô "tira uma foto" do botão e procura por ele na tela.  
* **OCR (Optical Character Recognition):** Utilizado para ler textos dentro de imagens ou PDFs escaneados.

### **Activity Parameters (Comunicação)**

Como os dados fluem entre o sistema e o robô:

* **Inbound:** Dados que o robô recebe (ex: "Número do Pedido" vindo do Salesforce).  
* **Outbound:** Dados que o robô entrega após terminar (ex: "Status: Sucesso" ou "ID do ERP").

### **Error Handling (Tratamento de Erros)**

* **Error Catching:** Blocos que "capturam" a falha. Se o robô não encontrar uma janela, ele deve tirar um screenshot da tela de erro e encerrar a sessão de forma limpa, em vez de apenas travar.  
* **Business Exceptions:** Se um dado for inválido (ex: CPF inexistente), o robô deve lançar uma exceção de negócio e mover o item para uma fila de análise humana.

---

## **4\. Segurança e Sessão (Secure Session)**

Este é um ponto técnico avançado que diferencia o MuleSoft RPA:

* **Sessão Segura:** O robô não precisa de um usuário logado fisicamente com monitor. Ele cria sua própria sessão Windows virtual, executa as tarefas e a encerra.  
* **Agentes (Bots):** Podem ser configurados para rodar múltiplos processos em paralelo, dependendo das licenças e da capacidade da máquina host.

---

## **5\. Cenário de Exame: "O Robô Parou"**

**Pergunta típica:** Um robô de RPA estava funcionando perfeitamente, mas parou de clicar no botão "Salvar" de um sistema web após uma atualização do navegador. O que você deve fazer?

* **Resposta correta:** Abrir o **RPA Builder**, atualizar o localizador (XPath ou Seletor) do botão e republicar a versão do processo.

---

## **💡 Glossário para Memorizar:**

* **BPMN:** Notação gráfica para desenhar o fluxo (Manager).  
* **Bot Tasks:** Tarefas executadas pelo software.  
* **User Tasks:** Pontos de parada para intervenção humana (Workflow Manager).  
* **Artifacts:** Documentos ou arquivos gerados/usados pelo robô durante a execução.

---

## **6\. Checklist do exame para este módulo**

* Dado um processo candidato, avalie se ele é estável, repetitivo, baseado em regras claras e com volume suficiente para justificar automação com RPA.
* Associe problemas comuns a fases específicas do ciclo de vida (Evaluation, Design, Build, Test, Production) e saiba onde o exame espera que você atue em cada situação.
* Diferencie bem erros técnicos (como alteração de layout, tempo de resposta, janela não encontrada) de exceções de negócio (como dados inválidos ou ausência de registro) e escolha a abordagem correta para cada tipo.
* Decida quando usar UI Automation baseada em objeto, em imagem ou OCR, e quando é melhor substituir cliques por chamadas de API via Anypoint.
* Demonstre entendimento de como publicar, versionar, agendar, monitorar e reiniciar processos pelo RPA Manager, interpretando métricas e logs de execução.

# 📚 Módulo 3

# **🎼 Módulo 3: MuleSoft Composer** 

**Peso no Exame:** 12%

**Foco:** Integração No-Code, Conectores SaaS, Lógica de Fluxo e Transformação de Dados.

O **MuleSoft Composer** é a ferramenta de "cidadão integrador" (Business User). O foco aqui é a velocidade e a simplicidade, mas a prova exige que você entenda as nuances de **lógica, funções e tratamento de erros** dentro dessa interface simplificada.

---

## **1\. Fundamentos e Gatilhos (Triggers)**

Todo fluxo no Composer começa com um **Trigger**. Você deve saber identificar os três tipos principais:

* **System Event Trigger:** O fluxo inicia quando algo acontece em um sistema externo.  
  * *Exemplo:* "Quando uma nova oportunidade é fechada no Salesforce" ou "Quando uma linha é adicionada ao Google Sheets".  
* **Scheduler Trigger:** O fluxo inicia em intervalos de tempo definidos.  
  * *Exemplo:* "A cada 15 minutos", "Toda segunda-feira às 08:00". Útil para sincronização de inventário ou relatórios.  
* **HTTP Listener (Invocação Externa):** Permite que outros sistemas chamem o Composer.

---

## **2\. Blocos de Construção e Lógica de Fluxo**

Diferente do RPA (que é visual/BPMN), o Composer é **linear**. Você adiciona etapas uma após a outra:

### **A. Conectores (Connections)**

O Composer abstrai a complexidade da API. Você só precisa autenticar (geralmente via OAuth).

* **Ações (Actions):** Criar registro, Atualizar, Buscar (Lookup) ou Deletar.  
* **Seleção de Campos:** Você escolhe exatamente quais campos quer trazer do sistema para economizar memória e performance.

### **B. Controle de Fluxo (Logic)**

Aqui é onde a prova costuma "pegar" o candidato:

* **If/Else (Condicionais):** Permite ramificar o fluxo.  
  * *Cenário:* Se o valor do pedido for \> 5000, envie para aprovação no Slack; se for \< 5000, crie direto no ERP.  
* **For Each (Loops):** Essencial quando você recebe uma **lista** de dados (ex: uma lista de itens de um pedido). O Composer executará as ações dentro do loop para cada item da lista.

---

## **3\. Transformação de Dados (Funções e Fórmulas)**

O Composer não usa DataWeave, mas possui um **Formula Editor** potente. Você deve conhecer as categorias:

* **Texto (String):** CONCAT (unir textos), TRIM (remover espaços), UPPER/LOWER (caixa alta/baixa).  
* **Datas (Date):** ADD\_DAYS, FORMAT\_DATE. Muito comum em cenários de "Data de Vencimento \= Hoje \+ 30 dias".  
* **Matemática:** Cálculos de impostos ou somatórios de itens.  
* **Mapeamento de Dados:** A habilidade de usar o "pílula de dados" (Data Pill) de uma etapa anterior como entrada para a próxima.

---

## **4\. Teste e Monitoramento (Runtime)**

A experiência de teste no Composer é única:

* **Test Mode:** Você ativa o modo de teste e o Composer aguarda 10 minutos para que o evento de gatilho aconteça.  
* **Consumo de Dados Reais:** Diferente de um "mock", o teste do Composer interage com os sistemas reais. **Atenção:** Se você testar uma criação de registro no SAP, o registro será criado de fato.  
* **Run History:** Onde você vê o sucesso ou falha de cada execução. Cada "pílula" de dado pode ser inspecionada para ver o valor que passou por ela em tempo real.

---

## **5\. Tratamento de Erros no Composer**

O Composer é menos resiliente que a Anypoint Platform, mas tem regras específicas:

* **Interrupção Automática:** Se uma etapa falha (ex: erro de autenticação ou campo obrigatório faltando), o fluxo para imediatamente naquela etapa.  
* **Notificações de Erro:** O administrador recebe um e-mail automático com os detalhes da falha.  
* **Limitações:** O Composer não possui blocos de "Try/Catch" complexos. A estratégia recomendada é validar os dados (usando If/Else) *antes* de tentar enviá-los ao sistema de destino.

---

## **6\. Diferenciais Estratégicos (RPA vs. Composer)**

A prova vai te colocar em um dilema: **Quando usar o conector de RPA dentro do Composer?**

* **Resposta:** Use o Composer como a "orquestração leve" e o RPA como a "execução pesada".  
* **Exemplo:** O Composer recebe um arquivo do OneDrive (Gatilho), valida se o nome está correto (If/Else), e então chama o **MuleSoft RPA** para digitar os dados desse arquivo em um sistema legado.

---

## **💡 Cenário de Prova:**

"Uma empresa precisa que, sempre que um novo funcionário for contratado no Workday, ele receba automaticamente um kit de boas-vindas. O processo deve: 1\. Verificar se o funcionário é do Brasil. 2\. Se sim, postar no Slack e criar um ticket no ServiceNow."

**Como configurar no Composer:**

1. **Trigger:** New Related Record no Workday.  
2. **Logic:** Bloco **If/Else** verificando o campo Country \== "Brazil".  
3. **Action (dentro do If):** Post Message no conector Slack.  
4. **Action (dentro do If):** Create Record no conector ServiceNow.

---

## **7\. Checklist do exame para este módulo**

* Em qualquer cenário, identifique claramente qual será o gatilho do Composer (evento em sistema SaaS, agendamento ou chamada HTTP) e qual conector principal será usado.
* Certifique-se de saber quando usar If/Else para ramificações simples e quando é obrigatório um For Each para listas, evitando processar apenas o primeiro registro por engano.
* Treine mentalmente transformações comuns com fórmulas de texto, número e data, como cálculos de vencimento, normalização de nomes, criação de IDs compostos e arredondamentos.
* Para cada fluxo, defina como testá-lo: qual dado real dispara o gatilho, como validar os resultados e como usar o Run History para inspecionar cada etapa e cada data pill.
* Quando estiver em dúvida entre Composer e Anypoint, use o critério de complexidade e reutilização: integrações simples, com poucos sistemas e baixo volume favorecem Composer; integrações críticas, com várias equipes e múltiplos consumidores favorecem APIs no Anypoint.

---

# 📚 Módulo 4

# **⚡ Módulo 4: Salesforce Flow (Conteúdo Extendido)**

**Peso no Exame:** 13%

**Foco:** Automação declarativa no CRM, integração via External Services, Einstein Bots e Testes de Fluxo.

O **Salesforce Flow** é o motor de automação central dentro da Salesforce. Para o exame de Hiperautomação, o foco não é apenas "criar um registro", mas sim como o Flow atua como a **interface humana** e o **gatilho de eventos** que acionam o MuleSoft RPA e o Composer.

---

## **1\. Tipos de Fluxo e Casos de Uso na Hiperautomação**

Você deve saber qual tipo de fluxo escolher com base no cenário:

* **Screen Flow (Fluxo de Tela):** É a interface de Hiperautomação para o usuário.  
  * *Uso:* Coletar dados de um sinistro ou pedido que serão enviados para uma API da MuleSoft.  
* **Record-Triggered Flow (Fluxo acionado por registro):** Executa automaticamente quando um registro é criado ou atualizado.  
  * *Uso:* Quando um "Contrato" é marcado como "Assinado", o Flow dispara uma chamada para o MuleSoft RPA iniciar o provisionamento no sistema legado.  
* **Autolaunched Flow:** Não tem interface e não depende de gatilhos de registro.  
  * *Uso:* Invocado via Apex, APIs externas ou pelo **Flow Orchestrator**.

---

## **2\. Integração: External Services e HTTP Callout**

Este é o ponto mais importante para a certificação MuleSoft. O Flow precisa "falar" com o mundo exterior sem código (Low-Code).

### **External Services**

O Salesforce Flow consome especificações de API (como o **OpenAPI/Swagger** exportado do MuleSoft Anypoint Exchange).

* **Como funciona:** Você importa a especificação da API no Salesforce. Isso transforma os métodos da API (GET, POST) em "Ações" que podem ser arrastadas para dentro do Flow Builder.  
* **Vantagem:** O desenvolvedor não precisa escrever código Apex para fazer uma chamada callout.

### **HTTP Callout (Beta/GA)**

Permite configurar integrações diretamente no Flow Builder informando a URL e o método, sem precisar de um arquivo de especificação prévio.

---

## **3\. Einstein Bots e Autendimento**

Na hiperautomação, o Einstein Bot é frequentemente a **camada de entrada**.

* **Gatilho de Ação:** O Bot coleta informações do cliente (ex: "Qual o seu número de pedido?") e invoca um **Flow**.  
* **Integração:** O Flow, por sua vez, chama uma API da MuleSoft para buscar o status do pedido no banco de dados e devolve a resposta para o Bot exibir ao cliente.

---

## **4\. Teste de Fluxo (Flow Testing)**

A Salesforce introduziu ferramentas robustas de teste que são cobradas no exame:

* **Flow Test (Declarativo):** Permite criar testes para *Record-Triggered Flows*. Você define um cenário (ex: "Oportunidade fechada com valor negativo") e o que espera que aconteça.  
* **Debug Tool:** Permite rodar o fluxo como um usuário específico e ver o "caminho" que a lógica percorreu, além de inspecionar os valores das variáveis em cada etapa.

---

## **5\. Princípios de Hiperautomação no Flow**

Para ser eficiente em um projeto de hiperautomação, o Flow deve seguir estas boas práticas:

* **Bulkification (Processamento em Lote):** O Flow deve ser capaz de lidar com múltiplos registros simultaneamente para evitar atingir os limites da plataforma Salesforce (Governor Limits).  
* **Error Handling (Fault Paths):** Se uma chamada para uma API da MuleSoft falhar dentro do Flow, você deve usar um **Fault Path** (linha vermelha) para decidir o que fazer (ex: criar um registro de erro ou notificar o administrador).  
* **Subflows:** Reutilização\! Se você tem uma lógica complexa de cálculo de impostos, coloque em um subflow e chame-o de vários outros fluxos de automação.

---

## **6\. Cenário de Exame: "Orquestrando a Entrada"**

**Cenário:** Uma empresa quer que, ao fechar uma venda, o sistema legado de logística (sem API) seja atualizado e o cliente receba um SMS.

1. **Gatilho:** *Record-Triggered Flow* no Salesforce (Opportunity Stage \= Closed Won).  
2. **Ação 1:** O Flow invoca um processo de **MuleSoft RPA** (via External Services) para entrar no sistema de logística e postar os dados.  
3. **Ação 2:** Após o sucesso, o Flow chama uma API de mensageria para enviar o SMS.

---

## **💡 Termos Técnicos para Memorizar:**

* **Apex Action:** Usado quando a lógica é complexa demais para o Flow e exige código.  
* **Flow Metadata:** A estrutura do fluxo que pode ser migrada entre ambientes (Sandbox \-\> Produção).  
* **Platform Events:** Mensagens enviadas para o "barramento" do Salesforce que podem ser ouvidas pelo MuleSoft para iniciar integrações assíncronas.

---

## **6\. Checklist do exame para este módulo**

* Dado um cenário, escolha corretamente entre Screen Flow, Record-Triggered Flow e Autolaunched Flow, justificando com o tipo de evento, necessidade de interface e origem dos dados.
* Relacione quando usar Einstein Bots como camada inicial de atendimento e quando direcionar diretamente para um fluxo de backoffice ou agente humano.
* Lembre os passos para criar testes declarativos de Record-Triggered Flows, incluindo configuração de dados de entrada, condições esperadas e validação de resultados.
* Em cada integração descrita, decida entre External Services (quando já existe especificação de API) e HTTP Callout (quando você apenas conhece o endpoint), considerando governança e facilidade de manutenção.
* Avalie se o fluxo está preparado para hiperautomação: caminhos de erro bem definidos, uso de subflows para lógica reutilizável e preocupação com bulkification para não atingir limites da plataforma.

# 📚 Módulo 5

# **🌐 Módulo 5: Anypoint Platform & APIs**

**Peso no Exame:** 15%

**Foco:** Ciclo de Vida de APIs, API-Led Connectivity, Especificações (RAML/OAS) e Componentes da Plataforma.

Se o Composer é a ponte e o RPA é o braço, a **Anypoint Platform** é o sistema nervoso central. Para a hiperautomação, o foco aqui é como as APIs servem de base para que todas as outras ferramentas (Flow, RPA, Composer) funcionem de forma escalável e segura.

---

## **1\. API-Led Connectivity (O Coração da Estratégia)**

A Salesforce enfatiza fortemente o modelo de três camadas para garantir que a hiperautomação não se torne uma "teia de aranha" de integrações ponto a ponto:

* **System APIs:** Desbloqueiam dados de sistemas centrais (SAP, SQL, Mainframe). Elas isolam a complexidade do sistema de destino.  
* **Process APIs:** Onde reside a lógica de negócio. Elas combinam dados de múltiplas System APIs (ex: "Criar Pedido" que consulta Cliente no CRM e Estoque no ERP).  
* **Experience APIs:** Formatam os dados para o consumo final. É aqui que você cria o endpoint específico para ser consumido pelo **Salesforce Flow** ou por um aplicativo móvel.

---

## **2\. Ciclo de Vida da API (API Lifecycle)**

Você deve conhecer as fases que ocorrem dentro do **Anypoint Platform**:

1. **Design (API Designer):** Cria-se o contrato da API usando **RAML** (RESTful API Modeling Language) ou **OAS** (OpenAPI Specification).  
2. **Simulate (Mocking Service):** Permite que os desenvolvedores de Flow ou RPA comecem a trabalhar usando dados fictícios antes mesmo da API ser construída.  
3. **Feedback:** Colaboração no contrato.  
4. **Implement (Anypoint Studio):** Onde o desenvolvedor Mule constrói a lógica real usando fluxos e a linguagem **DataWeave**.  
5. **Deploy (Runtime Manager):** Publicação da API (na nuvem CloudHub ou on-premises).  
6. **Manage (API Manager):** Aplicação de políticas de segurança (OAuth, Rate Limiting).

---

## **3\. Componentes Chave da Plataforma**

* **Anypoint Exchange:** O "App Store" da sua empresa. Lá você publica as especificações para que o **Salesforce Flow** possa encontrá-las via *External Services*.  
* **Anypoint Studio:** IDE baseada em Eclipse para o desenvolvimento pesado de fluxos Mule.  
* **Runtime Manager:** Onde você gerencia o status das aplicações, escala trabalhadores (workers) e configura vCores.  
* **API Manager:** Focado em governança. Se uma automação está sobrecarregando um sistema, é aqui que você limita o tráfego (Throttling).

---

## **4\. Blocos de Construção de Hiperautomação (Mule Apps)**

Para o exame, entenda como um aplicativo Mule (Mule App) se comporta em um cenário de automação:

* **Conectores:** Diferente do Composer, o Anypoint tem centenas de conectores técnicos (protocolos como AS2, SFTP, HL7).  
* **DataWeave 2.0:** É a linguagem de transformação. Ela é capaz de converter um XML complexo do sistema legado em um JSON simples que o Salesforce Flow consome facilmente.  
* **Deployment Options:**  
  * **CloudHub:** Totalmente gerenciado pela MuleSoft (SaaS).  
  * **On-Premises:** Quando o bot de RPA precisa acessar algo que está atrás de um firewall muito rígido.  
  * **Runtime Fabric (RTF):** Deploy em containers (Kubernetes).

---

## **5\. Cenário de Exame: "Reutilização em Escala"**

**Pergunta típica:** Uma empresa já possui uma API que busca dados de clientes no SAP. Eles agora precisam usar esses dados em um novo projeto de RPA e em um fluxo de tela no Salesforce. Qual a melhor abordagem?

* **Resposta correta:** Publicar a especificação da API no **Anypoint Exchange**. O RPA usará o conector HTTP para chamar a API e o Salesforce Flow usará **External Services** para consumir a mesma API. **Nunca** crie integrações duplicadas para o mesmo dado.

---

## **💡 Termos Técnicos para Memorizar:**

* **RAML:** Linguagem padrão para desenhar APIs no ecossistema MuleSoft.  
* **vCore:** Unidade de medida de capacidade computacional no CloudHub.  
* **Shared Load Balancer (SLB):** O balanceador de carga padrão que fornece a URL da sua API.  
* **Políticas de API:** Regras de segurança (ex: JWT Validation) aplicadas sem mudar o código da API.

---

## **6\. Checklist do exame para este módulo**

* Em qualquer cenário, identifique quais APIs deveriam estar nas camadas System, Process e Experience, garantindo máxima reutilização e isolamento de complexidade.
* Descreva o ciclo de vida de uma API dentro da Anypoint Platform, desde o design com RAML/OAS até o deploy e a aplicação de políticas no API Manager.
* Relacione quando usar cada opção de deploy (CloudHub, On-Premises, Runtime Fabric) com base em requisitos de segurança, conectividade com legados e governança.
* Demonstre como APIs e especificações são compartilhadas com outras ferramentas de hiperautomação via Anypoint Exchange e External Services no Salesforce.
* Ao ler um cenário, pense em como você mediria sucesso e reutilização dessa API: número de consumidores, redução de integrações ponto a ponto e facilidade de mudança.

# 📚 Módulo 6

# **📊 Módulo 6: Anypoint Monitoring & API Manager**

**Peso no Exame:** 7%

**Foco:** Visibilidade, Saúde do Ecossistema, Governança de Endpoints e Resolução de Problemas.

Este módulo foca na fase de **Operação**. Em projetos de hiperautomação, onde várias ferramentas estão encadeadas, o monitoramento é o que diferencia uma solução robusta de uma que "quebra e ninguém sabe o porquê".

---

## **1\. Anypoint Monitoring (Visibilidade de Ponta a Ponta)**

O Anypoint Monitoring fornece insights em tempo real sobre as APIs que sustentam sua hiperautomação.

* **Dashboards Integrados:** Visualização de métricas de performance como tempo de resposta, taxa de erro e utilização de CPU/Memória dos Workers.  
* **Custom Dashboards:** Permite que você crie visões específicas para o negócio (ex: "Quantos pedidos o RPA processou via API hoje?").  
* **Log Search:** Centraliza os logs de todas as aplicações. Essencial para o **Troubleshooting**: se um Salesforce Flow recebe um erro "500", você vai ao Anypoint Monitoring para ler o log técnico e entender o que houve na camada de integração.  
* **Alertas:** Configuração de notificações automáticas (via E-mail ou Slack) caso uma API crucial ultrapasse um limite de erro.

---

## **2\. API Manager (Governança e Proteção)**

Enquanto o Monitoring "observa", o API Manager "controla". Ele é responsável por gerenciar os endpoints de hiperautomação.

### **Configurações de Endpoint**

* **Basic Endpoint:** A API é gerenciada diretamente onde está hospedada.  
* **Proxy Endpoint:** Uma camada extra (Proxy) é colocada na frente da API. Isso permite aplicar políticas de segurança e monitoramento sem tocar no código original da aplicação (ideal para proteger sistemas legados que o RPA acessa).

### **Aplicação de Políticas (Policies)**

As políticas garantem que a hiperautomação seja segura e não derrube os sistemas de backend:

* **Rate Limiting / Throttling:** Limita o número de requisições que um processo (ex: um loop mal configurado no Composer) pode fazer à API por minuto.  
* **Client ID Enforcement:** Exige que qualquer ferramenta (Flow, Composer ou RPA) se identifique com uma "chave" antes de acessar os dados.  
* **IP Whitelisting:** Permite que apenas endereços IP específicos (como os da infraestrutura da Salesforce) acessem a API.

---

## **3\. Identificação de Gargalos (Performance)**

A prova pode questionar como identificar onde a automação está lenta:

* **Métricas de Infraestrutura:** Se o uso de CPU está em **100%**, a API precisa de mais **vCores** (Escalabilidade Vertical).  
* **Métricas de Aplicação:** Se o tempo de resposta aumentou, mas o CPU está baixo, o problema pode estar no sistema de destino (ex: o banco de dados que o RPA consulta está lento).

---

## **4\. Cenário de Exame: "O Sistema em Choque"**

**Cenário:** Você implementou uma automação onde o Salesforce Flow dispara milhares de requisições para uma API MuleSoft que atualiza o estoque. O sistema de estoque (legado) começou a travar devido ao volume. O que fazer?

* **Resposta correta:** No **API Manager**, aplicar uma política de **Rate Limiting** ou **SLA-Based Tiering**. Isso forçará o Flow a esperar ou receber um erro de "Too Many Requests", protegendo o sistema legado de um colapso.

---

## **💡 Glossário para Memorizar:**

* **Functional Monitoring:** Testes automatizados que "batem" na API periodicamente para garantir que ela está devolvendo o resultado esperado (não apenas se está online).  
* **Visualizer:** Uma ferramenta dentro do Monitoring que desenha um mapa automático de como as APIs estão conectadas entre si.  
* **Runtime Fabric:** Se mencionado, lembre-se que o monitoramento em RTF exige a configuração de agentes específicos para coletar métricas de containers.

---

## **6\. Checklist do exame para este módulo**

* Dado um problema de performance, identifique rapidamente se ele está na infraestrutura (vCores, memória) ou no sistema de destino, usando métricas do Anypoint Monitoring.
* Saiba quando aplicar Rate Limiting, Client ID Enforcement, IP Whitelisting e outras políticas do API Manager para proteger sistemas legados e controlar o consumo por parte de Flows, Composer e RPA.
* Relacione tipos de endpoint (Basic x Proxy) com cenários de modernização: quando é viável colocar um proxy na frente de um sistema legado sem alterar o código original.
* Demonstre como usar functional monitoring para validar continuamente se as APIs críticas para hiperautomação continuam respondendo com a carga e os dados esperados.
* Em cenários de "sistema em choque", descreva como você ajustaria políticas, escalaria recursos e notificaria equipes usando alertas integrados com e-mail ou Slack.

# 📚 Módulo 7

# **📦 Módulo 7: Anypoint Exchange**

**Peso no Exame:** 8%

**Foco:** Catálogo de Ativos, Compartilhamento, Reutilização e Mocking Service.

O **Anypoint Exchange** é o "mercado central" de uma estratégia de hiperautomação. Sem ele, a reutilização se torna impossível e cada desenvolvedor acaba criando integrações duplicadas. Para a prova, o foco é como publicar ativos e como usá-los para acelerar os testes.

---

## **1\. O Papel do Exchange na Hiperautomação**

O Exchange não armazena apenas APIs. Ele é um repositório para diversos tipos de ativos que as ferramentas de automação consomem:

* **API Specifications:** (RAML/OAS) que o Salesforce Flow consome via *External Services*.  
* **Connectors:** Ativos prontos para serem usados no Anypoint Studio.  
* **Templates e Exemplos:** Projetos pré-configurados para casos de uso comuns (ex: Sincronização de Contas entre Salesforce e SAP).  
* **API Fragments:** Pedaços reutilizáveis de código RAML (como um modelo padrão de "Endereço") para manter a consistência.  
* **RPA Assets:** Processos de RPA podem ser publicados aqui para que outras áreas da empresa saibam que aquela automação já existe.

---

## **2\. Publicação e Descoberta**

* **Publicação:** Você pode publicar ativos de forma **Privada** (apenas para sua organização) ou acessar o Exchange **Público** (conectores da MuleSoft e de parceiros como SAP, Oracle, AWS).  
* **Documentação Automática:** Ao publicar uma especificação, o Exchange gera automaticamente um console interativo onde outros desenvolvedores podem ler como a API funciona sem precisar baixar o código.

---

## **3\. Mocking Service (O Acelerador de Testes)**

Este é um dos recursos mais cobrados em provas de certificação:

* **O que é:** O Exchange simula uma API real baseada no seu contrato (RAML/OAS). Ele gera uma URL temporária que retorna dados de exemplo.  
* **Utilidade na Hiperautomação:** Imagine que a equipe de integração ainda não terminou de construir a API de crédito. A equipe de **Salesforce Flow** pode usar a URL do **Mocking Service** no *External Services* para testar a lógica da tela de vendas hoje mesmo.  
* **Vantagem:** Permite o desenvolvimento paralelo entre diferentes equipes.

---

## **4\. Portais de API (API Portals)**

O Exchange permite criar um portal público ou privado para desenvolvedores externos.

* Lá, você pode gerenciar quem tem acesso à sua API e fornecer um botão de "Request Access", onde o usuário solicita um **Client ID** e **Client Secret** para começar a consumir a automação.

---

## **5\. Cenário de Exame: "O Dilema do Desenvolvedor"**

**Cenário:** Um desenvolvedor de Salesforce Flow precisa conectar o fluxo a um sistema de RH que já possui uma API MuleSoft pronta, mas ele não sabe quais são os parâmetros de entrada. Qual o primeiro passo recomendado pela MuleSoft?

* **Resposta correta:** Consultar o **Anypoint Exchange**, localizar a API de RH e revisar a documentação gerada automaticamente e os exemplos de requisição no console interativo.

---

## **💡 Glossário para Memorizar:**

* **Asset:** Qualquer recurso publicado no Exchange (API, Conector, Fragmento).  
* **API Notebook:** Ferramenta dentro do Exchange para criar tutoriais interativos que executam chamadas reais de API.  
* **Dependency:** Quando uma API usa um fragmento ou conector do Exchange, isso é listado como uma dependência para garantir que o projeto não quebre se o ativo original for deletado.

---

## **6\. Checklist do exame para este módulo**

* Em qualquer cenário, identifique quais ativos deveriam estar publicados no Exchange (APIs, conectores, templates, fragmentos, processos de RPA) para maximizar a reutilização entre times.
* Demonstre como publicar ativos em Exchanges privados da organização e quando é adequado consumir ativos do Exchange público (conectores oficiais e de parceiros).
* Explique como o Mocking Service acelera o desenvolvimento paralelo: equipes de front-end (Flow, Composer) consomem mocks enquanto as APIs reais ainda estão sendo implementadas.
* Use sempre o Exchange como primeira fonte de verdade em cenários de prova: antes de criar integração do zero, procure especificações, exemplos e dependências existentes.
* Relacione o uso de portais de API e o fluxo de "Request Access" com governança de clientes externos e controle de chaves (Client ID/Secret).

# 📚 Módulo 8

# **🎼 Módulo 8: Salesforce Flow Orchestration (Conteúdo Extendido)**

**Peso no Exame: 8%**

**Foco: Coordenação de Processos Complexos, Etapas (Steps), Estágios (Stages) e Atribuição de Tarefas.**

**O Flow Orchestration é o nível mais alto da hiperautomação. Enquanto um Flow comum resolve uma tarefa rápida, o Orchestrator resolve um processo de negócio inteiro que pode durar dias ou semanas e envolver diferentes departamentos.**

---

## **1\. A Hierarquia da Orquestração**

**Para a prova, você deve entender a estrutura de uma orquestração:**

* **Orchestration (A Orquestra): O processo completo (ex: Admissão de Funcionário).**  
* **Stages (Estágios): Agrupamentos lógicos de etapas. Um estágio só termina quando todas as suas etapas obrigatórias são concluídas. (ex: Estágio de Documentação, Estágio de TI).**  
* **Steps (Etapas): As unidades de trabalho dentro de um estágio.**  
  * **Background Steps: Executam um fluxo sem intervenção humana (ex: Atualizar banco de dados via API MuleSoft).**  
  * **Interactive Steps: Exigem que um usuário faça algo em uma tela (ex: Gerente aprovar um desconto).**

---

## **2\. Condições de Entrada e Saída (Entry & Exit)**

**A lógica do Orchestrator é baseada em "quando começar" e "quando terminar":**

* **Entry Conditions: Define quando uma etapa ou estágio deve ser iniciado. Você pode usar fórmulas complexas para garantir que uma etapa de "Configurar Notebook" só comece se a etapa "Aprovação do Gestor" tiver sido concluída com sucesso.**  
* **Exit Conditions: Define quando uma etapa é considerada finalizada. Em etapas interativas, geralmente é quando o usuário termina o Flow de tela. Em etapas de background, é quando o fluxo autolançado termina sua execução.**

---

## **3\. Atribuição e Notificações (Work Items)**

**Diferente dos fluxos comuns, o Orchestrator gerencia a Work Queue (Fila de Trabalho):**

* **Atribuição: Você pode atribuir uma etapa interativa a um Usuário, um Grupo (Group) ou uma Fila (Queue).**  
* **Work Guide: É o componente visual que aparece no registro do Salesforce para o usuário atribuído, mostrando exatamente qual Flow ele precisa preencher para que o processo avance.**  
* **Contexto: O Orchestrator mantém o estado do processo. Ele sabe quem aprovou o quê e quando, criando uma trilha de auditoria completa da automação.**

---

## **4\. Orquestração Paralela vs. Sequencial**

**Um ponto comum em exames é saber como o Orchestrator lida com o tempo:**

* **Sequencial: A Etapa B só começa após a Etapa A.**  
* **Paralela: As Etapas A e B começam ao mesmo tempo dentro do mesmo Estágio. O Estágio só avançará quando ambas terminarem.**  
  * ***Exemplo:*** **Enquanto o RH prepara o contrato (Humano), o sistema de TI já cria o e-mail automaticamente (Background).**

---

## **5\. Depuração e Monitoramento (Orchestration Runs)**

* **Orchestration Runs: No menu de configuração, você pode ver todas as execuções em curso, quais estão pausadas aguardando alguém e quais falharam.**  
* **Debug: Assim como no Flow Builder, você pode depurar uma orquestração para validar se as variáveis de um estágio estão passando corretamente para o próximo.**

---

## **6\. Cenário de Exame: "O Processo de Compras"**

**Cenário: Uma empresa tem um processo onde: 1\. O funcionário pede um item. 2\. O gerente aprova. 3\. O sistema de estoque (via MuleSoft) verifica a disponibilidade. 4\. Se não houver estoque, o setor de compras deve aprovar uma aquisição externa.**

* **Como configurar:**  
  * **Stage 1 (Pedido): Step Interativo para o funcionário.**  
  * **Stage 2 (Aprovação): Step Interativo para o gerente.**  
  * **Stage 3 (Estoque): Step de Background que chama uma API MuleSoft.**  
  * **Decisão: Se a API MuleSoft retornar "Sem Estoque", o Orchestrator ativa o Stage 4 (Compras) atribuído à fila de Compras.**

---

## **💡 Glossário para Memorizar:**

* **Interactive Step: Passo que requer interação humana via Screen Flow.**  
* **Background Step: Passo automatizado via Autolaunched Flow.**  
* **Orchestration Work Item: O registro que representa a tarefa pendente para um usuário.**

---

## **6\. Checklist do exame para este módulo**

* Em qualquer cenário de trabalho em equipe, identifique quais etapas podem ser automatizadas por Flows isolados e quais precisam ser coordenadas por uma Orchestration multiestágio.
* Defina claramente entry e exit conditions para cada estágio, garantindo que o processo não avance sem as aprovações e validações necessárias descritas no enunciado.
* Escolha corretamente se uma etapa interativa deve ser atribuída a um usuário específico, grupo ou fila, de acordo com a forma como o cenário descreve responsabilidades organizacionais.
* Relacione problemas descritos em cenários (processos travados, etapas pendentes, usuários sem tarefas) com as ferramentas de debug, monitoramento e gerenciamento de Orchestration Runs.
* Descreva como você versionaria, implantaria e ajustaria uma orquestração já em produção, mantendo rastreabilidade e minimizando impacto sobre execuções em andamento.
