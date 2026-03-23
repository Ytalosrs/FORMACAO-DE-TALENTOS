# 🎓 Simulado Consolidado – Módulo 3: MuleSoft Composer

Este documento reúne as 45 questões das três provas do Módulo 3, focadas em Fundamentos, Lógica, Funções e Estratégia do MuleSoft Composer, com gabarito comentado.

---

## 📝 Questões de 1 a 15 (Prova 1)

**1. AnyAirlines wants a no‑code integration that creates a record in SAP whenever a new Opportunity is closed in Salesforce. Which trigger should be used in Composer?**
A. Scheduler trigger
B. System event trigger on Salesforce
C. HTTP Listener trigger
D. Manual run only

**Resposta correta: B**
**Por que:** Para reagir a um evento em tempo real (como o fechamento de uma oportunidade no Salesforce), o gatilho correto é o *System event trigger*.

---

**2. Northern Trail Outfitters (NTO) needs a flow that runs every night at 02:00 to sync inventory from Google Sheets into Salesforce. Which trigger is most appropriate?**
A. System event trigger on Google Sheets
B. Scheduler trigger configured for 02:00
C. HTTP Listener triggered by an external system
D. No trigger; Composer does not support schedules

**Resposta correta: B**
**Por que:** Quando a integração deve ocorrer em um horário específico, utiliza-se o *Scheduler trigger*.

---

**3. A scenario states: “Business admins must configure integrations between Salesforce, Slack and ServiceNow without writing code.” Which tool is the exam most likely expecting?**
A. Anypoint Studio
B. MuleSoft Composer
C. Salesforce Apex
D. MuleSoft RPA Builder

**Resposta correta: B**
**Por que:** O MuleSoft Composer é a ferramenta *no-code* da MuleSoft voltada para administradores de negócio e usuários não-desenvolvedores (*citizen integrators*).

---

**4. NTO wants to minimize unnecessary data transfer when using Composer to query ServiceNow. What is the recommended practice?**
A. Always select all fields
B. Select only the fields relevant for the flow
C. Use SOQL to filter fields
D. Move filtering to RPA

**Resposta correta: B**
**Por que:** Selecionar apenas os campos necessários melhora a performance e reduz o consumo de banda e processamento (princípio de eficiência).

---

**5. A flow needs to process every line in a collection returned from Workday. Which Composer element should be used?**
A. If/Else only
B. For Each loop
C. Separate flows for each item
D. Multiple HTTP Listeners

**Resposta correta: B**
**Por que:** O bloco *For Each* é utilizado para iterar sobre uma lista (coleção) de itens e executar ações para cada um deles individualmente.

---

**6. A candidate solution maps a single record from Salesforce directly into a list field in another system, without iteration. What problem is most likely?**
A. Composer will silently fix the mapping
B. Only the first item will be processed or the mapping will fail
C. All records will be processed correctly
D. Composer will automatically create a For Each

**Resposta correta: B**
**Por que:** Tentar mapear um registro único onde se espera uma lista (ou vice-versa) causa erro de tipo de dado ou processamento incompleto.

---

**7. A scenario describes the need to concatenate first name and last name into a single “FullName” field inside Composer. Where should this be done?**
A. In an external API only
B. In the Formula Editor using string functions
C. In RPA before sending to Composer
D. Directly in the database

**Resposta correta: B**
**Por que:** O *Formula Editor* do Composer permite realizar manipulações de dados, como concatenação de strings, usando funções integradas.

---

**8. A business user needs to add 30 days to the current date to calculate a due date. Which category of Composer functions is most relevant?**
A. Text functions only
B. Date functions such as ADD_DAYS
C. Math functions only
D. Security functions

**Resposta correta: B**
**Por que:** Cálculos envolvendo datas (como adicionar dias) são feitos através das funções de data, como `ADD_DAYS`.

---

**9. AnyAirlines wants to test a Composer flow that is triggered by a new record in Salesforce. What is the correct way to use Test Mode?**
A. Activate Test Mode and perform the real triggering action within the time window
B. Click “Run” without providing any data
C. Test Mode is not available for event‑based triggers
D. Use only mocked systems; real data is not allowed

**Resposta correta: A**
**Por que:** O *Test Mode* do Composer abre uma janela de tempo (geralmente 10 minutos) para que você execute a ação real no sistema de origem e o Composer capture esse evento para teste.

---

**10. A scenario explains that Composer Test Mode uses real systems and can create real records. What is the main implication for the exam?**
A. It is safe to use in production with any data
B. Test Mode must be used only in non‑production orgs or with test data
C. Test Mode uses only mock data
D. Test Mode cannot show run history

**Resposta correta: B**
**Por que:** Como o Composer interage com sistemas reais, testes em produção podem criar dados indesejados. Deve-se usar sandboxes para testes.

---

**11. A flow fails when calling an external system due to a missing required field. What is the expected behavior of Composer?**
A. It retries automatically with different field values
B. It stops at the failing step and marks the run as failed
C. It skips the step and continues silently
D. It fixes the field mapping automatically

**Resposta correta: B**
**Por que:** Por padrão, o Composer interrompe a execução no passo que falhou e registra o erro no histórico de execução.

---

**12. NTO wants to understand what data passed through each step of a failed run. Where should they look?**
A. In the operating system event viewer
B. In Composer Run History, inspecting data pills for each step
C. In Anypoint Studio logs
D. Only in Salesforce debug logs

**Resposta correta: B**
**Por que:** O *Run History* permite inspecionar cada execução, mostrando os valores que entraram e saíram de cada etapa da automação.

---

**13. A candidate claims that Composer can replace all Anypoint APIs because it can call any system. Why is this not aligned with best practices?**
A. Composer cannot call any external system
B. Composer is intended for simpler, low‑to‑medium complexity integrations, not full API‑led architectures
C. Anypoint APIs cannot be reused
D. Exams do not consider Composer a valid tool

**Resposta correta: B**
**Por que:** O Composer é complementar ao Anypoint. Integrações críticas, complexas e de alta escala devem ser feitas via APIs no Anypoint Platform.

---

**14. A scenario requires Composer to be invoked from an external, custom web application on demand. Which trigger should be used?**
A. System event trigger
B. Scheduler trigger
C. HTTP Listener trigger
D. No trigger, only manual run

**Resposta correta: C**
**Por que:** O *HTTP Listener* permite que sistemas externos chamem o fluxo do Composer através de uma requisição HTTP (webhook).

---

**15. A business admin asks which environment is recommended to build and test new Composer flows before moving to production. What is the best answer?**
A. Directly in the production org
B. In a sandbox or dedicated non‑production environment
C. In any org, there is no difference
D. In a local file system

**Resposta correta: B**
**Por que:** Sempre siga as boas práticas de ALM (Application Lifecycle Management), desenvolvendo e testando em sandboxes antes de mover para produção.

---

## 📝 Questões de 16 a 30 (Prova 2)

**16. NTO has a flow that must apply different tax rates depending on the country of the customer. Which Composer feature should be used to branch the logic?**
A. For Each
B. If/Else block
C. HTTP Listener
D. Scheduler

**Resposta correta: B**
**Por que:** O bloco *If/Else* permite criar ramificações condicionais na lógica do fluxo baseadas em valores de dados.

---

**17. A scenario describes receiving a list of order items from Salesforce and needing to create one record in an ERP system for each item. Which structure is most appropriate?**
A. Single action outside any loop
B. Multiple parallel flows
C. For Each loop around the ERP creation step
D. Repeated HTTP Listeners

**Resposta correta: C**
**Por que:** Para processar itens de uma lista individualmente, deve-se envolver a ação de criação no ERP com um loop *For Each*.

---

**18. AnyAirlines wants to normalize customer names by trimming spaces and converting them to upper case before sending to an external system. Which functions combination is correct?**
A. LOWER + CONCAT
B. TRIM + UPPER
C. FORMAT_DATE + TRIM
D. RAND + UPPER

**Resposta correta: B**
**Por que:** `TRIM` remove espaços extras e `UPPER` converte o texto para maiúsculas.

---

**19. A flow must calculate a due date 10 days after the invoice date and send it to another system. Which Composer feature handles this?**
A. Math functions only
B. Date functions in Formula Editor (por exemplo ADD_DAYS)
C. Manual calculation outside the flow
D. RPA bot functions

**Resposta correta: B**
**Por que:** O cálculo de prazos é uma operação comum de data feita através do editor de fórmulas.

---

**20. A candidate suggests storing complex JSON in a text field and parsing it manually in another system. Which alternative better aligns with Composer capabilities?**
A. Use structured mapping with data pills instead of opaque JSON strings
B. Always store data as CSV in text fields
C. Use only static text values
D. Use RPA to parse JSON

**Resposta correta: A**
**Por que:** O Composer trabalha melhor com campos estruturados (*data pills*). Evite passar "caixas pretas" de JSON se você pode mapear os campos individualmente.

---

**21. A scenario describes frequent failures because values sent to the destination system are null. What is the best way to handle this in Composer?**
A. Ignore null values
B. Use If/Else blocks to validate data before calling the destination
C. Disable validation in the destination system
D. Rely only on retries

**Resposta correta: B**
**Por que:** Validar se os campos obrigatórios estão preenchidos antes de chamar o sistema de destino evita erros em tempo de execução.

---

**22. NTO wants to see exactly which values were passed to a connector action during the last run without re‑executing the flow. Where can they find this?**
A. System debug logs only
B. Composer Run History, expanding the specific execution
C. Local browser cache
D. Salesforce Setup Audit Trail

**Resposta correta: B**
**Por que:** O *Run History* detalhado mostra o estado dos dados em cada etapa da execução passada.

---

**23. In Test Mode, how long does Composer typically wait for the trigger event before timing out?**
A. A few seconds only
B. Approximately 10 minutes, depending on configuration
C. 24 hours
D. It does not wait; it runs immediately

**Resposta correta: B**
**Por que:** O Composer mantém o modo de teste ativo por cerca de 10 minutos aguardando o evento disparador.

---

**24. AnyAirlines wants to reuse the same Composer connection to Salesforce across several flows. What is the best practice?**
A. Create a new connection in every flow
B. Use shared connections configured once and referenced by several flows
C. Store credentials directly in each step
D. Use only anonymous connections

**Resposta correta: B**
**Por que:** Conexões podem e devem ser compartilhadas entre fluxos para facilitar a gestão de credenciais e tokens.

---

**25. A candidate solution catches a failed call to an external system and sends a descriptive error message to a Slack channel. What does this represent?**
A. Misuse of Composer
B. A valid pattern for basic error notification
C. Unsupported integration type
D. Replacement for all logging needs

**Resposta correta: B**
**Por que:** Usar o Composer para notificar falhas em canais de comunicação é uma prática comum para dar visibilidade operacional.

---

**26. A scenario compares two options:
- Option A: Validate data with If/Else before calling the system
- Option B: Call the system directly and rely fully on runtime errors
Which option is most aligned with Composer best practices?**
A. Option A
B. Option B
C. Both are identical
D. Neither is supported

**Resposta correta: A**
**Por que:** A prevenção de erros através de validação prévia é sempre preferível a lidar com falhas de execução.

---

**27. NTO wants to avoid partial processing where only the first element of a list is handled. Which Composer concept should they verify is configured correctly?**
A. Triggers
B. For Each loops around list operations
C. Only the HTTP Listener
D. The sandbox org type

**Resposta correta: B**
**Por que:** Sem um loop *For Each*, o Composer processará apenas o primeiro item da lista ou falhará.

---

**28. A candidate flow uses Composer to orchestrate many complex system interactions, heavy transformations and advanced error handling. What limitation should you keep in mind for the exam?**
A. Composer cannot interact with SaaS systems
B. Composer is designed for simpler logic; complex orchestration and transformations belong in Anypoint APIs
C. Composer does not support If/Else
D. Composer cannot call RPA

**Resposta correta: B**
**Por que:** O Composer não substitui o Anypoint Studio para integrações de "missão crítica" ou lógica pesada de transformação (DataWeave).

---

**29. A scenario describes the need to test a Composer flow without impacting real SAP production data. Which approach is best?**
A. Use Test Mode in a sandbox connected to a SAP test environment
B. Use Test Mode directly against SAP production
C. Composer cannot be tested
D. Test only by reading logs

**Resposta correta: A**
**Por que:** O isolamento de ambientes (Sandbox com Sandbox) é a regra de ouro para testes seguros.

---

**30. An exam item shows three good‑looking options and one that bypasses all validation, sending raw data directly to the destination. Which type of “pegadinha” is this?**
A. Alternative tecnicamente possível, mas insegura ou frágil
B. Alternativa que exagera na reutilização
C. Alternativa que usa muitos flows
D. Alternativa que segue todas as boas práticas

**Resposta correta: A**
**Por que:** No exame, alternativas que funcionam mas ignoram segurança ou robustez são armadilhas comuns.

---

## 📝 Questões de 31 a 45 (Prova 3)

**31. AnyAirlines wants to build a mission‑critical, high‑volume integration reused by many teams. One option is “implement everything in Composer”. Why is this likely wrong?**
A. Composer does not support SaaS connectors
B. High‑volume, reusable integrations belong in Anypoint APIs, not somente em Composer
C. Composer cannot send HTTP requests
D. Composer cannot be monitored

**Resposta correta: B**
**Por que:** O Composer é para agilidade e integrações pontuais. Para alta escala e reuso corporativo, a plataforma Anypoint é a escolha correta.

---

**32. NTO wants business admins to quickly connect Salesforce and Slack for simple notifications without involving developers. Which combination is most aligned with exam expectations?**
A. Anypoint Studio + DataWeave
B. MuleSoft Composer + Slack connector
C. Custom Java microservice
D. RPA bot posting to Slack

**Resposta correta: B**
**Por que:** O Composer foi criado justamente para permitir que usuários de negócio criem essas conexões simples rapidamente e sem código.

---

**33. A scenario states that an integration must be easily consumable by multiple channels (web, mobile, partners) and governed with policies like rate limiting. Which is the best place for the core logic?**
A. Composer flow
B. Anypoint Platform APIs (System/Process/Experience)
C. Local scripts
D. Only RPA

**Resposta correta: B**
**Por que:** Governança centralizada e consumo multicanal são os pilares da estratégia de APIs (API-led Connectivity) da MuleSoft.

---

**34. An exam item offers two options:
- A) Composer calling each SaaS system directly with many mappings
- B) Composer calling a Process API that orquestra os sistemas
Which is more aligned with reuse and API‑led?**
A. A
B. B

**Resposta correta: B**
**Por que:** Chamar uma API de Processo permite que a lógica de orquestração seja reutilizada por outros sistemas, além do fluxo do Composer.

---

**35. A candidate suggests using Composer to perform heavy data transformations that already exist in a Process API. What is the better approach?**
A. Duplicar a lógica no Composer
B. Reutilizar o Process API e manter a transformação centralizada nele
C. Mover a lógica para RPA
D. Implementar toda a lógica em Screen Flows

**Resposta correta: B**
**Por que:** Evite duplicar lógica. Se a transformação já existe em uma API, o Composer deve simplesmente consumir essa API.

---

**36. A process uses Composer to trigger MuleSoft RPA via its connector for screen automation in a legacy system. What typical pattern does this illustrate?**
A. Composer como “orquestração leve” e RPA como “execução pesada”
B. RPA como orquestrador de Composer
C. APIs substituindo Composer
D. Apenas uso de HTTP Listener

**Resposta correta: A**
**Por que:** Este é o "Combo" da MuleSoft: Composer cuida do fluxo entre sistemas modernos (SaaS) e chama o RPA para lidar com as telas dos sistemas legados.

---

**37. AnyAirlines has a Composer flow that fails frequently due to destination system unavailability. Which strategy is most reasonable in this context?**
A. Blindly retry infinite times no Composer
B. Validar dados e, quando possível, mover lógica crítica para APIs com políticas e retry apropriado
C. Ignorar todas as falhas
D. Remover logs para “melhorar performance”

**Resposta correta: B**
**Por que:** Se uma integração falha muito, ela pode precisar de mecanismos de resiliência mais avançados (como filas e retentativas configuráveis) que as APIs Anypoint oferecem melhor.

---

**38. An option claims that Composer supports complex “try/catch” structures like a full programming language. Why is that likely a pegadinha?**
A. Porque Composer não suporta nenhum tipo de lógica
B. Porque Composer tem lógica limitada; recomenda‑se validar antes e tratar erros de forma simples
C. Porque Composer é apenas uma IDE
D. Porque Composer é igual ao Anypoint Studio

**Resposta correta: B**
**Por que:** O Composer é uma ferramenta simplificada. Ele não possui estruturas de controle de erro complexas como linguagens de programação (Java/Python).

---

**39. NTO wants to ensure that integrations built by business users do not bypass corporate APIs and governance. Which guideline is most appropriate?**
A. Composer deve sempre chamar sistemas diretamente
B. Composer deve consumir APIs existentes quando disponíveis, em vez de ir direto ao backend
C. Composer nunca deve ser usado com APIs
D. Composer deve substituir o API Manager

**Resposta correta: B**
**Por que:** O uso de APIs corporativas pelo Composer garante que as regras de segurança e governança definidas pela TI sejam respeitadas.

---

**40. A scenario describes a one‑off data load of thousands of historical records. One answer suggests building a permanent Composer flow for this. Why is this potentially not ideal?**
A. Composer não consegue lidar com nenhum volume
B. Para migração pontual, ferramentas dedicadas ou scripts temporários podem ser mais adequados
C. Composer não tem conectores para SaaS
D. Composer só roda em produção

**Resposta correta: B**
**Por que:** O Composer é otimizado para fluxos de eventos contínuos. Cargas massivas de dados históricos costumam ser feitas com ferramentas de ETL ou migração de dados.

---

**41. An exam question describes three options:
- A) Composer para baixa complexidade entre SaaS
- B) APIs Anypoint para integrações críticas e reutilizáveis
- C) RPA para sistemas sem API
Which statement best reflects MuleSoft positioning?**
A. Apenas A está correta
B. A, B e C estão corretas e complementares
C. Apenas C está correta
D. Nenhuma está correta

**Resposta correta: B**
**Por que:** A MuleSoft prega o uso da ferramenta certa para o problema certo: Composer para agilidade, Anypoint para escala/reuso e RPA para legados.

---

**42. A candidate chooses an option where Composer directly manipulates database tables of a core system instead of calling a System API. Why is this problematic?**
A. Porque bancos de dados não podem ser acessados
B. Porque ignora API‑led, governança e reutilização do System API existente
C. Porque Composer não suporta conexões
D. Porque System APIs não podem ser versionadas

**Resposta correta: B**
**Por que:** Acessar o banco diretamente "pula" as regras de negócio e segurança que estão embutidas na API de Sistema.

---

**43. AnyAirlines wants to give non‑technical users autonomy, but also keep control over changes in integrations. Which governance model is mais alinhado com a prova?**
A. Cada time constrói flows sem qualquer guideline
B. C4E definindo padrões, reuse de ativos e suporte aos citizen integrators
C. Apenas um time central pode criar qualquer integração
D. Toda integração deve ser feita por desenvolvedores Java

**Resposta correta: B**
**Por que:** O C4E (Center for Enablement) é o modelo da MuleSoft para permitir que a empresa scale integrações com qualidade e governança.

---

**44. A scenario compares two solutions:
- Option 1: Composer call to an Experience API exposing data for a specific UI
- Option 2: Composer leitura direta do banco, sem API
Which option is usually preferred?**
A. Option 1, pois respeita API‑led e reutilização
B. Option 2, porque é “mais direta”
C. Ambas são equivalentes
D. Nenhuma é suportada

**Resposta correta: A**
**Por que:** Sempre prefira consumir APIs (especialmente se já existirem) para manter a arquitetura limpa e reutilizável.

---

**45. Uma questão da prova mistura camadas da API‑led e ferramentas:
- System API para acessar ERP
- Process API para regra de negócio
- Experience API para Salesforce/Composer
- Composer consumindo a Experience API
Como essa arquitetura deve ser vista?**
A. Errada, pois Composer nunca deve consumir APIs
B. Alinhada com a estratégia MuleSoft de reutilização e separação de responsabilidades
C. Errada, pois Process APIs não devem existir
D. Errada, pois RPA deveria substituir Composer

**Resposta correta: B**
**Por que:** Esta é a arquitetura ideal, onde o Composer atua como o consumidor final de uma cadeia de APIs bem estruturada e governada.
