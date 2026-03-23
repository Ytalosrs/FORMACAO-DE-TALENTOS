# 🎓 Simulado Consolidado – Módulo 4: Salesforce Flow Orchestration

Este documento reúne as 45 questões das três provas do Módulo 4, focadas em Fundamentos de Salesforce Flow, Integração, Hiperautomação e Boas Práticas, com gabarito comentado.

---

## 📝 Questões de 1 a 15 (Prova 1)

**1. AnyAirlines wants a guided screen for agents to capture claim details in Salesforce and then send the data to an API. Which tipo de Flow é mais apropriado?**
A. Autolaunched Flow
B. Screen Flow
C. Schedule‑Triggered Flow
D. Record‑Triggered Flow

**Resposta correta: B**
**Por que:** Sempre que houver necessidade de interação com o usuário através de telas, formulários ou guias, o tipo de fluxo correto é o *Screen Flow*.

---

**2. Northern Trail Outfitters (NTO) precisa que, ao criar um novo Contrato, uma automação execute lógica imediatamente sem interface de usuário. Qual tipo de Flow deve ser usado?**
A. Screen Flow
B. Record‑Triggered Flow
C. Flow Orchestration
D. Scheduled Flow externo

**Resposta correta: B**
**Por que:** Para disparar uma lógica automaticamente em resposta a uma operação de banco de dados (Criação, Atualização ou Exclusão de um registro), utiliza-se o *Record-Triggered Flow*.

---

**3. Um cenário descreve um fluxo complexo de backoffice que deve ser chamado tanto por Apex quanto por uma Orchestration. Qual tipo de Flow é mais adequado como “bloco reutilizável”?**
A. Screen Flow
B. Autolaunched Flow
C. Record‑Triggered Flow
D. Workflow Rule

**Resposta correta: B**
**Por que:** *Autolaunched Flows* não possuem interface e não dependem de um gatilho de registro específico, sendo ideais para serem chamados como subflows ou por código Apex.

---

**4. AnyAirlines quer que, sempre que uma Opportunity for marcada como “Closed Won”, um processo RPA seja chamado via External Services. Onde essa chamada deve ficar?**
A. Em um Screen Flow independente
B. Em um Record‑Triggered Flow na Opportunity
C. Em um Flow Orchestration sem gatilho
D. Em um Apex Trigger apenas

**Resposta correta: B**
**Por que:** O fechamento de uma oportunidade é um evento de registro. O *Record-Triggered Flow* captura esse evento e pode disparar a ação de integração (External Service) de forma automatizada.

---

**5. NTO quer garantir que o mesmo Record‑Triggered Flow seja reutilizável entre ambientes (Sandbox → Produção). O que representa essa definição de fluxo?**
A. Flow Metadata migrada por change sets ou DevOps
B. Logs do Salesforce
C. Documentação em PDF
D. Código Java externo

**Resposta correta: A**
**Por que:** No Salesforce, os fluxos são definidos como Metadados (Metadata), permitindo que sejam versionados e migrados entre diferentes ambientes.

---

**6. Um candidato sugere usar apenas Apex para todas as automações, ignorando Flows. Por que isso não está alinhado com o posicionamento atual da Salesforce?**
A. Apex está obsoleto
B. Salesforce incentiva o uso de Flow como motor declarativo principal, reservando Apex para lógica muito complexa
C. Flow não suporta integrações
D. Flows não podem ser testados

**Resposta correta: B**
**Por que:** A estratégia "Flow First" da Salesforce preconiza o uso de ferramentas declarativas (sem código) sempre que possível para facilitar a manutenção e agilidade, usando código apenas para o que o Flow não resolve.

---

**7. Um Screen Flow coleta dados do cliente e, depois, precisa chamar uma API da MuleSoft para validar limite de crédito. Qual recurso do Flow deve ser usado para consumir a especificação dessa API de forma declarativa?**
A. Platform Events
B. External Services
C. Inbound Email Services
D. Apex REST Callout escrito manualmente

**Resposta correta: B**
**Por que:** O *External Services* permite importar uma especificação de API (como Swagger/OpenAPI) e transformá-la em ações que podem ser arrastadas e soltas dentro do Flow Builder.

---

**8. Um cenário descreve um Flow que precisa chamar um endpoint HTTP simples sem possuir um arquivo OpenAPI ou RAML. Qual recurso pode ser usado?**
A. HTTP Callout configurado diretamente no Flow
B. Apenas Apex HTTP classes
C. Somente Workflow Rules
D. Visualforce Pages

**Resposta correta: A**
**Por que:** Recentemente, o Salesforce Flow adicionou a capacidade de configurar chamadas HTTP diretamente na interface (HTTP Callout), sem a necessidade de um arquivo de contrato prévio.

---

**9. AnyAirlines quer usar Einstein Bot para coletar informações de um passageiro e, em seguida, chamar um processo de backoffice via Flow. Qual relacionamento é mais correto?**
A. Bot chama Flow, que chama APIs/RPA
B. Flow chama Bot, que chama APIs
C. RPA chama Bot, que chama Flow
D. Composer chama Bot diretamente

**Resposta correta: A**
**Por que:** O Einstein Bot atua como a interface de chat, que invoca um Flow para realizar a lógica de negócio e as integrações necessárias.

---

**10. NTO deseja que parte da lógica de cálculo seja reutilizada em vários Flows. Qual recurso do Flow ajuda nessa reutilização?**
A. Subflows
B. Process Builder
C. Workflow Rules
D. Approval Processes

**Resposta correta: A**
**Por que:** *Subflows* permitem encapsular uma lógica em um fluxo separado e chamá-lo de dentro de múltiplos outros fluxos, evitando duplicidade de código/lógica.

---

**11. Um cenário de prova afirma que um Flow deveria processar vários registros de uma vez, mas está tratando apenas um por vez e atingindo governor limits. Qual princípio deve ser lembrado?**
A. Bulkification do Flow
B. Somente uso de Apex
C. Desativar limites da plataforma
D. Usar RPA no lugar do Flow

**Resposta correta: A**
**Por que:** A "Bulkification" é o design de automações que processam coleções de registros de forma eficiente, respeitando os limites da plataforma Salesforce (Governor Limits).

---

**12. Uma equipe quer que um Flow rode em resposta a um evento externo publicado pela MuleSoft. Qual recurso Salesforce está mais alinhado a esse caso?**
A. Email Services
B. Platform Events como gatilho
C. Custom Metadata Types
D. Static Resources

**Resposta correta: B**
**Por que:** *Platform Events* são mensagens baseadas em eventos que permitem a comunicação assíncrona entre o Salesforce e sistemas externos (como a MuleSoft).

---

**13. Um candidato sugere usar Screen Flow para toda lógica, inclusive cenários sem interface. Por que isso pode ser uma má escolha?**
A. Screen Flow não suporta apex actions
B. Autolaunched Flow é mais apropriado para lógica sem UI, facilitando reutilização e orquestração
C. Screen Flow não suporta subflows
D. Screen Flow não pode usar External Services

**Resposta correta: B**
**Por que:** Usar o tipo de fluxo correto facilita a manutenção. Se não há tela, o *Autolaunched Flow* é mais leve e flexível para ser orquestrado.

---

**14. Um Record‑Triggered Flow faz atualizações em massa, mas está falhando por limites de DML. Qual prática está mais alinhada a boas práticas?**
A. Fazer DML dentro de loops sem agrupar registros
B. Usar padrões de bulkification e evitar DML em loops
C. Sempre reduzir o número de registros processados
D. Mover tudo para RPA

**Resposta correta: B**
**Por que:** Nunca deve-se colocar operações de banco de dados (DML como Create, Update) dentro de loops. Deve-se coletar os dados em uma variável de coleção e fazer uma única operação fora do loop.

---

**15. Um item de prova mostra um cenário simples de automação de CRM com lógica declarativa, sem necessidade de código complexo. Qual ferramenta a prova tende a preferir?**
A. Apex triggers apenas
B. Salesforce Flow
C. MuleSoft RPA
D. Custom Java Services

**Resposta correta: B**
**Por que:** Para automações de CRM padrão e lógica declarativa, o Salesforce Flow é a ferramenta estratégica recomendada pela Salesforce.

---

## 📝 Questões de 16 a 30 (Prova 2)

**16. AnyAirlines quer que um Screen Flow consuma uma API publicada na Anypoint Platform usando um contrato OpenAPI. Qual é o caminho recomendado?**
A. Criar Apex HTTP callout manualmente
B. Importar a especificação via External Services e usar a Action no Flow
C. Usar apenas HTTP Callout sem contrato
D. Criar um RPA para chamar a API

**Resposta correta: B**
**Por que:** Importar o contrato OpenAPI via *External Services* é a forma mais robusta e governada de integrar o Flow com APIs da MuleSoft.

---

**17. NTO tem um cenário em que o Flow precisa chamar uma API cujo contrato ainda está em construção, mas há um Mocking Service disponível no Exchange. Como isso pode ser aproveitado?**
A. Não pode; Flow exige API real
B. External Services podem apontar para a URL do Mocking Service para testes
C. Somente Composer pode usar Mocking Service
D. Somente RPA pode usar Mocking Service

**Resposta correta: B**
**Por que:** O *Mocking Service* fornece uma URL temporária que simula o comportamento da API, permitindo que o desenvolvimento do Flow avance antes mesmo da API estar pronta.

---

**18. Um Einstein Bot coleta o número de pedido do cliente e precisa obter o status via MuleSoft. Qual sequência está mais alinhada com a arquitetura recomendada?**
A. Bot → RPA → Banco de dados diretamente
B. Bot → Flow → Anypoint API → Sistema de pedidos
C. Bot → Composer → Planilha
D. Bot → Apex batch anonimo

**Resposta correta: B**
**Por que:** Esta sequência respeita a separação de responsabilidades: Bot (Interface), Flow (Orquestração no Salesforce) e API (Integração e lógica de backend).

---

**19. Um Flow que chama um External Service falha com erro 500 na API. Qual recurso do Flow deve ser usado para tratar essa falha de forma controlada?**
A. Path padrão do elemento
B. Fault Path (caminho de erro)
C. Loop infinito
D. Recurso de Debug apenas

**Resposta correta: B**
**Por que:** O *Fault Path* (conectores vermelhos) permite que o desenvolvedor de Flow defina o que deve acontecer quando uma etapa técnica falha (ex: mostrar mensagem amigável ou criar log).

---

**20. Em um cenário, o Flow precisa registrar um log e criar um caso interno sempre que uma chamada a API externa falhar. Onde essa lógica deve ficar?**
A. Dentro do Fault Path associado à action de callout
B. Fora do Flow, apenas em Apex
C. No client que chamou o Flow
D. Em um Workflow Rule

**Resposta correta: A**
**Por que:** O tratamento de erro deve ser feito o mais próximo possível da falha para garantir que o fluxo de exceção seja executado corretamente.

---

**21. NTO quer automatizar testes de Record‑Triggered Flows para garantir que não quebrem após mudanças. Qual recurso é mais apropriado?**
A. Flow Test (ferramenta declarativa)
B. Apenas testes manuais com Debug
C. Logs de execução em produção
D. Testes Apex exclusivamente

**Resposta correta: A**
**Por que:** O *Flow Test* permite criar casos de teste declarativos que podem ser executados para validar se as mudanças recentes afetaram o comportamento esperado do fluxo.

---

**22. Um item de prova descreve o uso da ferramenta de Debug de Flow. Qual vantagem principal ela oferece?**
A. Substitui todos os testes automatizados
B. Permite executar o fluxo como um usuário específico e visualizar o caminho e valores das variáveis
C. Apenas mostra logs de texto
D. Só funciona para Screen Flows

**Resposta correta: B**
**Por que:** O *Debug* é a ferramenta essencial para o desenvolvedor de Flow testar a lógica passo a passo, simulando diferentes condições e usuários.

---

**23. Um Flow acionado por registro está falhando de forma intermitente por causa de uma API instável. Qual combinação é mais adequada?**
A. Ignorar as falhas
B. Implementar tratamento via Fault Path e, se necessário, registrar o erro para reprocessamento
C. Desativar o Flow
D. Transferir tudo para Workflow Rules

**Resposta correta: B**
**Por que:** Resiliência em integrações exige tratar falhas de forma elegante, informando o usuário ou agendando uma nova tentativa.

---

**24. AnyAirlines quer usar Einstein Bot como camada inicial e, dependendo da resposta da API, direcionar o caso para um agente humano. Onde essa decisão deve ser tomada?**
A. No banco de dados
B. No Flow que o Bot invoca, com base no retorno da API
C. Apenas no RPA
D. Apenas em Apex

**Resposta correta: B**
**Por que:** O Flow é o cérebro da orquestração dentro do Salesforce; ele avalia o retorno da integração e decide o próximo passo no atendimento.

---

**25. NTO precisa decidir entre External Services e HTTP Callout em um cenário de prova. A API já tem especificação publicada no Exchange e precisa ser reutilizada em vários Flows. Qual é a melhor escolha?**
A. HTTP Callout
B. External Services, para aproveitar o contrato e governança
C. Apenas Apex
D. Apenas Composer

**Resposta correta: B**
**Por que:** Se o contrato (OpenAPI/RAML) já existe no Exchange, usar *External Services* garante que o Flow esteja alinhado com a versão oficial da API e facilita a reutilização.

---

**26. Um Flow consome uma API sem contrato, usando apenas URL e método HTTP. Mais tarde, a API ganha especificação OAS. O que a prova tende a considerar uma melhoria?**
A. Manter HTTP Callout para simplicidade
B. Migrar para External Services baseado na especificação
C. Trocar Flow por RPA
D. Trocar Flow por Apex triggers

**Resposta correta: B**
**Por que:** Evoluir de uma chamada HTTP manual para uma integração baseada em contrato (External Services) aumenta a robustez e governança da solução.

---

**27. Um cenário descreve que analistas de negócio precisam simular entradas diferentes e ver rapidamente o comportamento do Flow. Qual combinação é mais adequada?**
A. Flow Test + Debug Tool
B. Apenas logs em produção
C. Apenas testes Apex
D. Apenas monitoramento em Anypoint

**Resposta correta: A**
**Por que:** Estas são as ferramentas nativas do Salesforce para validação rápida e interativa da lógica dos fluxos.

---

**28. Uma integração entre Flow e MuleSoft RPA é implementada via External Services chamando um endpoint do RPA Manager. O que isso representa em termos de hiperautomação?**
A. Uso do Flow como gatilho humano chamando processos RPA
B. Uso do RPA como interface de usuário
C. Substituição de APIs por bots
D. Eliminação da necessidade de Exchange

**Resposta correta: A**
**Por que:** Esta é a visão de hiperautomação da MuleSoft/Salesforce: o usuário interage com o Salesforce (Flow) e este dispara robôs para realizar tarefas em sistemas legados.

---

**29. Em um cenário de prova, uma alternativa sugere “usar Flow sem nenhum tipo de teste ou debug, confiando somente em produção”. Como essa opção deve ser vista?**
A. Correta, pois Flow é declarativo
B. Errada, pois Flow Test e Debug são recursos importantes cobrados na prova
C. Neutra, sem impacto
D. Preferível a qualquer estratégia de testes automatizados

**Resposta correta: B**
**Por que:** Ignorar ferramentas de teste e qualidade é sempre uma prática errada em exames de certificação.

---

**30. Uma empresa quer garantir que um Record‑Triggered Flow que chama APIs externas não quebre ao receber dados inesperados. Qual prática é mais alinhada?**
A. Assumir que dados sempre são válidos
B. Validar dados no Flow antes de chamar a API e usar Fault Paths para tratar falhas
C. Confiar apenas em logs da API
D. Desativar o Flow quando surgirem erros

**Resposta correta: B**
**Por que:** Validação defensiva (antes da chamada) e tratamento de exceção (após a chamada) são fundamentais para automações robustas.

---

## 📝 Questões de 31 a 45 (Prova 3)

**31. AnyAirlines quer que um Screen Flow chame uma API MuleSoft que já está publicada como Experience API. Qual é a abordagem mais alinhada com API‑led?**
A. Flow chama diretamente o banco de dados, ignorando a API
B. Flow consome a Experience API via External Services
C. Flow usa RPA para consultar o sistema
D. Flow usa apenas campos calculados, sem integração

**Resposta correta: B**
**Por que:** Seguir a arquitetura API-led significa consumir a camada de API correta (Experience API) em vez de tentar acessar o backend diretamente.

---

**32. NTO já possui uma System API para ERP e uma Process API para regras de crédito. Um candidato sugere que o Screen Flow chame diretamente a System API. Qual é a opção mais alinhada?**
A. Aceitar, pois Flow deve sempre falar com System APIs
B. Preferir que o Flow consuma a Process/Experience API, reutilizando a orquestração existente
C. Ignorar APIs e usar Composer
D. Usar sempre RPA

**Resposta correta: B**
**Por que:** Chamar a System API diretamente ignora a lógica de negócio e orquestração já existente na Process API, violando o princípio de reuso.

---

**33. Um item de prova oferece duas alternativas:
- A) Criar nova System API específica para um projeto, mesmo já existindo outra que expõe os mesmos dados
- B) Reutilizar a System API existente e, se necessário, criar uma Experience API
Qual delas está mais alinhada com reutilização?**
A. A
B. B

**Resposta correta: B**
**Por que:** A base da arquitetura MuleSoft é evitar a criação de ativos redundantes. Se os dados já estão expostos por uma System API, ela deve ser reutilizada.

---

**34. Um Flow de entrada (Screen Flow) coleta dados para sinistro e aciona um RPA que preenche um sistema legado. O que o exame provavelmente quer reforçar?**
A. Flow como camada de interface humana em hiperautomação
B. RPA como interface principal
C. APIs substituindo Flow
D. Composer substituindo Flow

**Resposta correta: A**
**Por que:** O Flow fornece a experiência de usuário (UX) moderna enquanto o RPA lida com a complexidade do sistema legado (UI antiga).

---

**35. Uma alternativa sugere colocar toda a lógica de transformação de dados no Screen Flow, mesmo já existindo uma Process API para isso. Por que isso costuma ser uma pegadinha?**
A. Flows não podem transformar dados
B. API‑led recomenda centralizar lógica de negócio na Process API, não na UI
C. Process APIs não suportam múltiplos consumidores
D. Examens não cobram Process APIs

**Resposta correta: B**
**Por que:** Transformações pesadas e lógica de negócio centralizada devem ficar nas APIs de Processo para que possam ser reutilizadas por outros canais além do Salesforce.

---

**36. Um cenário descreve que, quando uma venda é fechada, o Flow deve: 1) Disparar RPA para sistema legado de logística, 2) Chamar API de SMS, 3) Registrar logs. Qual dos componentes deveria coordenar esse fluxo?**
A. Apenas RPA
B. Record‑Triggered Flow com chamadas às integrações
C. Apenas Composer
D. Apenas Apex

**Resposta correta: B**
**Por que:** O Flow no Salesforce é o orquestrador natural para eventos que acontecem dentro do CRM e precisam disparar múltiplas ações externas.

---

**37. Em uma questão, uma opção propõe usar Flow Orchestration para um processo extremamente simples de uma etapa, que poderia ser resolvido com um único Record‑Triggered Flow. Que tipo de pegadinha é essa?**
A. Alternativa tecnicamente impossível
B. Alternativa que adiciona complexidade desnecessária
C. Alternativa que ignora reutilização
D. Alternativa que viola limites de DML

**Resposta correta: B**
**Por que:** *Flow Orchestration* é para processos multi-etapa, multi-usuário e de longa duração. Usá-lo para algo simples é "overengineering".

---

**38. Uma empresa planeja fazer um fluxo que, ao atualizar um registro, chama vários subflows e APIs em série, correndo risco de chegar em limites. Qual abordagem é mais madura?**
A. Ignorar limites e confiar em retries
B. Repensar a arquitetura usando Process APIs, bulkification e, se necessário, Orchestration
C. Mover tudo para RPA
D. Desativar validações no Salesforce

**Resposta correta: B**
**Por que:** Quando a complexidade aumenta no Salesforce, deve-se delegar a orquestração pesada para a MuleSoft (Process APIs) e garantir que o Flow esteja otimizado (Bulkification).

---

**39. NTO quer garantir que decisões complexas de roteamento (por exemplo, para qual fila enviar um caso) fiquem configuráveis e reutilizáveis. O que a prova tende a preferir?**
A. Lógica espalhada em vários Apex Triggers
B. Lógica centralizada em Flows reutilizáveis ou subflows
C. Lógica em scripts locais
D. Lógica somente na API externa

**Resposta correta: B**
**Por que:** Centralizar a lógica de decisão em subflows permite que ela seja alterada em um único lugar e impacte todo o sistema, aumentando a agilidade.

---

**40. Uma alternativa diz: “Para garantir performance, conecte o Flow diretamente ao banco de dados, evitando APIs e Exchange.” Por que isso is incorreto?**
A. Salesforce não consegue acessar bancos de dados
B. Isso viola API‑led Connectivity, governança e reutilização de ativos
C. APIs não suportam governança
D. Exchange é apenas opcional para RPA

**Resposta correta: B**
**Por que:** Acesso direto ao banco cria silos de dados, ignora segurança centralizada e impede que outras equipes reutilizem a lógica de acesso.

---

**41. Um cenário mostra: Flow → chama API sem contrato → ninguém sabe quem consome a API. Qual melhoria está mais alinhada à estratégia da MuleSoft?**
A. Deixar como está
B. Publicar a especificação no Exchange, usar External Services e aplicar políticas no API Manager
C. Trocar API por consultas diretas em banco
D. Migrar toda a lógica para RPA

**Resposta correta: B**
**Por que:** Governança completa envolve visibilidade (Exchange), integração fácil (External Services) e segurança (API Manager).

---

**42. Uma questão descreve um time criando vários Flows que fazem chamadas redundantes para diferentes APIs com lógica duplicada. Qual resposta mais alinhada à visão de C4E?**
A. Permitir duplicação para velocidade
B. Criar Process/Experience APIs reutilizáveis e documentá‑las no Exchange para uso pelos Flows
C. Descontinuar o uso de Flow
D. Criar um Flow separado para cada time sem padrão

**Resposta correta: B**
**Por que:** O C4E atua para identificar essas redundâncias e promover a criação de ativos reutilizáveis que beneficiem toda a organização.

---

**43. Uma opção sugere que, quando uma API falha, é melhor deixar o Flow quebrar silenciosamente para o usuário não perceber. Como isso deve ser avaliado?**
A. Correta, porque melhora UX
B. Errada; erros devem ser tratados via Fault Paths e feedback adequado
C. Neutra
D. Só correta em produção

**Resposta correta: B**
**Por que:** Erros silenciosos geram inconsistência de dados e frustração posterior. O erro deve ser capturado e o usuário informado ou a falha registrada para correção.

---

**44. Em um cenário típico de hiperautomação, qual papel do Salesforce Flow em relação a RPA, Composer e APIs?**
A. Ser o motor de UI e gatilho de eventos, consumindo APIs/RPA/Composer
B. Substituir todos os outros componentes
C. Apenas executar batchs noturnos
D. Atuar apenas como ferramenta de teste

**Resposta correta: A**
**Por que:** No ecossistema Salesforce/MuleSoft, o Flow é a ferramenta que orquestra a jornada do usuário e dispara as integrações de backend.

---

**45. Uma alternativa de prova diz: “Construa um novo Flow complexo que duplica o comportamento de uma Experience API já existente, para não depender da equipe de integração.” Por que essa resposta é provavelmente errada?**
A. Flows não podem consumir APIs
B. Ela ignora reutilização de APIs existentes e aumenta a dívida técnica
C. Experience APIs não podem ser chamadas por Flow
D. Não há impacto em arquitetura

**Resposta correta: B**
**Por que:** Duplicar lógica em ferramentas diferentes cria um pesadelo de manutenção. Deve-se sempre reutilizar o que já foi construído e governado.
