# 🎓 Simulado Consolidado – Módulo 1: Melhores Práticas, Estratégia e Arquitetura

Este documento reúne as 45 questões das três provas do Módulo 1, com gabarito comentado para facilitar o estudo.

---

## 📝 Questões de 1 a 15 (Prova 1)

**1. AnyAirlines wants to automate checking customer loyalty status in a legacy green‑screen system with no APIs. What is the most appropriate primary technology?**
A. MuleSoft Composer calling a REST API
B. MuleSoft RPA with screen automation
C. Salesforce Flow with HTTP Callout
D. Anypoint Platform Experience API only

**Resposta correta: B**
**Por que:** Quando não existem APIs disponíveis e o sistema é legado (green-screen), o MuleSoft RPA é a ferramenta ideal para automatizar via interface de usuário (screen automation).

---

**2. Northern Trail Outfitters (NTO) wants to quickly sync standard objects between Salesforce and NetSuite using clicks, not code. Which solution best fits the requirement?**
A. Anypoint Studio with custom DataWeave transformations
B. MuleSoft RPA recording user actions in both systems
C. MuleSoft Composer with prebuilt SaaS connectors
D. Salesforce Flow with Scheduled Path and custom Apex

**Resposta correta: C**
**Por que:** O MuleSoft Composer é focado em integrações "clique, não código" entre sistemas SaaS (como Salesforce e NetSuite) usando conectores pré-construídos.

---

**3. A company needs to process millions of transaction records nightly, aggregating data from multiple databases. Which component should be the core of this integration?**
A. MuleSoft RPA with multiple bots in parallel
B. MuleSoft Composer flows triggered every 5 minutes
C. Anypoint Platform APIs with batch processing
D. Salesforce Flow invoked by Platform Events only

**Resposta correta: C**
**Por que:** Para altos volumes de dados e processamento em lote (batch), a Anypoint Platform (Mule runtime) é a ferramenta mais robusta e performática.

---

**4. A project team wants to avoid building multiple logins to the same legacy ERP for different automations. What is the best practice aligned with C4E?**
A. Embed login logic inside every bot individually
B. Reuse a shared RPA process published in Anypoint Exchange
C. Implement login logic in a Salesforce Screen Flow
D. Configure separate credentials in each Composer flow

**Resposta correta: B**
**Por que:** O modelo C4E (Center for Enablement) promove o reuso. Publicar um processo de RPA comum no Anypoint Exchange permite que outras equipes o reutilizem, evitando duplicidade de lógica de login.

---

**5. A customer asks: “We need the fastest no‑code way to connect Salesforce and ServiceNow with simple field mappings.” Which two dimensions from the tool selection matrix are most relevant to justify using Composer?**
A. Volume and Interface
B. Complexidade e Perfil do Usuário
C. Volume and Complexidade de Protocolo
D. Governança and Segurança Avançada

**Resposta correta: B**
**Por que:** O Composer é escolhido quando a complexidade é baixa/média e o perfil do usuário é de analista de negócios (no-code).

---

**6. NTO wants to minimize the impact of a flaky on‑premises database during request/response lookups in Anypoint APIs. What is the most efficient way to protect the consumer experience?**
A. Use RPA to read database screens instead of APIs
B. Implement exponential backoff and retries in the API
C. Move all logic into Salesforce Flows
D. Call the database directly from Composer on every request

**Resposta correta: B**
**Por que:** Implementar retentativas (retries) com espera exponencial (exponential backoff) é uma prática padrão de resiliência em APIs para lidar com falhas temporárias de backend.

---

**7. A solution architect wants to ensure end‑to‑end testing of a new hyperautomation scenario before the legacy system is ready. Which component should be used to simulate backend APIs?**
A. MuleSoft RPA Recorder
B. Anypoint Exchange Mocking Service
C. Salesforce Sandbox with only partial data
D. Production database with masked records

**Resposta correta: B**
**Por que:** O Mocking Service do Anypoint permite simular o comportamento de APIs antes mesmo delas serem implementadas, acelerando testes paralelos.

---

**8. In a complex flow involving Salesforce, RPA and Composer, one transaction failed. Logs show that the robot could not open a desktop window. How should the error be classified?**
A. Business exception
B. Integration exception
C. Technical exception in the RPA layer
D. Data quality exception

**Resposta correta: C**
**Por que:** Se o robô falhou ao abrir uma janela (problema de infra ou interface), trata-se de uma exceção técnica na camada de RPA, não um erro de regra de negócio.

---

**9. A retail company already exposes a stable Customer System API on Anypoint. A new chatbot experience must reuse this data. What is the most efficient way to design the solution?**
A. Build a new System API specifically for the chatbot
B. Call the database directly from Einstein Bot
C. Create an Experience API on top of the existing System API
D. Use RPA to query the database with a headless client

**Resposta correta: C**
**Por que:** Seguindo o modelo API-led, deve-se criar uma Experience API para adaptar os dados do System API existente para as necessidades específicas do novo canal (chatbot).

---

**10. A bank wants to avoid duplicate processing if a request message is accidentally sent twice to an API that triggers RPA. Which concept is most important here?**
A. Idempotency of API operations
B. Horizontal scaling of workers
C. API proxying with Flex Gateway
D. Scheduler‑based throttling only

**Resposta correta: A**
**Por que:** Idempotência garante que múltiplas requisições idênticas produzam o mesmo resultado sem efeitos colaterais duplicados (como processar um pagamento duas vezes).

---

**11. In an end‑to‑end test of a hyperautomation flow, which is the most efficient way to isolate where an error occurred?**
A. Disable logs and enable only monitoring dashboards
B. Test the entire chain only from the user interface
C. Validate RPA, integration APIs and target systems independently
D. Retry the entire flow repeatedly until it passes

**Resposta correta: C**
**Por que:** Isolar e testar cada componente de forma independente é a melhor forma de localizar a causa raiz de falhas em cadeias complexas de hiperautomação.

---

**12. A process involves a long‑running human approval plus a short, technical API call. When designing the architecture, which tool should handle the long‑running orchestration?**
A. Salesforce Flow Orchestration
B. MuleSoft Composer only
C. Anypoint Experience API
D. MuleSoft RPA Manager

**Resposta correta: A**
**Por que:** O Salesforce Flow Orchestration é projetado especificamente para orquestrar processos complexos que envolvem múltiplos passos e intervenção humana ao longo do tempo.

---

**13. A candidate proposes putting all heavy data transformations into System APIs to keep Process APIs “thin”. Why is this not aligned with MuleSoft best practices?**
A. System APIs must not connect to any databases
B. Process APIs are responsible for orchestration and business logic
C. Experience APIs cannot perform transformations
D. RPA bots should handle transformations instead

**Resposta correta: B**
**Por que:** No modelo API-led, as System APIs devem ser simples (acesso ao dado), enquanto a lógica de negócio e orquestração residem nas Process APIs.

---

**14. Which option best describes API‑led Connectivity in the context of hyperautomation?**
A. Direct point‑to‑point integrations between all systems
B. A layered model with System, Process and Experience APIs promoting reuse
C. A set of UI flows built only in Salesforce
D. A network of ungoverned webhooks between services

**Resposta correta: B**
**Por que:** Esta é a definição fundamental do API-led: uma arquitetura em camadas que promove governança, agilidade e reuso.

---

**15. During an exam question, a scenario offers four valid‑sounding options. Which one is most likely correct according to MuleSoft strategy?**
A. The option that recreates existing integrations from scratch
B. The option that maximizes reuse of existing APIs and assets
C. The option that adds the greatest number of new components
D. The option that ignores API‑led layers for speed

**Resposta correta: B**
**Por que:** A estratégia da MuleSoft sempre prioriza o reuso de ativos existentes para acelerar a entrega e reduzir custos.

---

## 📝 Questões de 16 a 30 (Prova 2)

**16. AnyAirlines already has several point‑to‑point integrations between SaaS systems. They now want a more governed and reusable architecture. Which approach best aligns with MuleSoft recommendations?**
A. Add more scheduled jobs between systems as needed
B. Replace all integrations with a single monolithic API
C. Implement API‑led connectivity with System, Process and Experience APIs
D. Move all integrations into Salesforce Flow only

**Resposta correta: C**
**Por que:** O API-led connectivity resolve o problema de integrações ponto-a-ponto (espaguete), trazendo governança e reuso através de camadas.

---

**17. NTO wants to expose product prices to multiple channels (web, mobile app, Salesforce). What is the most efficient way to design this according to API‑led principles?**
A. One Process API that all channels call directly
B. Separate System APIs for each channel
C. A shared Product System API plus dedicated Experience APIs per channel
D. Multiple duplicated APIs per consumer team

**Resposta correta: C**
**Por que:** Centraliza-se o acesso ao dado no System API e criam-se Experience APIs leves para atender as especificidades de cada canal (mobile vs web).

---

**18. A scenario describes a Composer flow calling an API that performs heavy aggregations across systems. Where should the complex business logic primarily reside?**
A. Inside the Composer formula editor
B. Inside the Salesforce Flow screen logic
C. Inside a Process API on Anypoint Platform
D. Inside the RPA bot actions

**Resposta correta: C**
**Por que:** Lógica complexa e pesada deve ser mantida na Anypoint Platform (Process API) para melhor performance, governança e reuso.

---

**19. A candidate suggests using RPA to automate a system that already exposes robust, secure REST APIs. Which statement best reflects MuleSoft best practice?**
A. Acceptable, because RPA is always simpler to configure
B. Not ideal; prefer API‑based integration first and reserve RPA for no‑API cases
C. Required, because exam scenarios always prefer RPA
D. Required, because APIs cannot be reused in other channels

**Resposta correta: B**
**Por que:** Integrações baseadas em API são sempre mais estáveis e performáticas que RPA. RPA deve ser o "último recurso" quando não há APIs disponíveis.

---

**20. A retail customer wants near real‑time inventory updates between their ERP and Salesforce. Which tool combination best balances speed and maintainability?**
A. Only RPA bots reading ERP screens
B. Anypoint Platform System API for ERP plus Composer for light orchestration
C. Composer polling ERP database directly every second
D. Manual CSV uploads by users

**Resposta correta: B**
**Por que:** Usar uma API para acessar o ERP garante estabilidade, e o Composer permite que o negócio gerencie a orquestração leve de forma ágil.

---

**21. A scenario describes a complex multi‑step process where a human underwriter reviews cases over several days. Which component should coordinate long‑running steps while still leveraging APIs and RPA where needed?**
A. Single large RPA process with embedded decision logic
B. Salesforce Flow Orchestration with background and interactive steps
C. A large Composer flow with nested If/Else branches
D. A single Process API with many synchronous calls

**Resposta correta: B**
**Por que:** Processos de longa duração com intervenção humana são o caso de uso principal do Salesforce Flow Orchestration.

---

**22. In a hyperautomation project, who is primarily responsible for promoting reuse of assets like APIs, RPA processes and fragments according to the C4E model?**
A. Only project managers
B. The Center for Enablement acting as an enablement and governance team
C. Individual developers working in isolation
D. External vendors only

**Resposta correta: B**
**Por que:** O C4E é o pilar organizacional da MuleSoft para garantir que os ativos sejam criados para reuso e que as equipes saibam como utilizá-los.

---

**23. A question describes repeated failures in a hyperautomation chain whenever a legacy system is under heavy load. Which combination best addresses resilience at the integration layer?**
A. Remove logs to save processing time
B. Implement retries with exponential backoff and timeouts in the APIs
C. Move all logic to RPA bots to hide the problem
D. Increase Salesforce governor limits

**Resposta correta: B**
**Por que:** Timeouts e retries com backoff protegem a cadeia de integração contra instabilidades temporárias dos sistemas de backend.

---

**24. A company wants to test a new orchestration between Salesforce Flow and RPA while the final production credentials are not yet available. What is the safest test data strategy?**
A. Use real customer data in production systems
B. Use synthetic/mock data defined in API specifications
C. Export CSVs from production and mask only names
D. Duplicate production environment without any anonymization

**Resposta correta: B**
**Por que:** O uso de dados sintéticos ou mocks baseados na especificação da API permite testar a lógica sem riscos de segurança ou dependência de sistemas reais.

---

**25. The exam presents four tool choices for a simple SaaS‑to‑SaaS integration with low volume and business admin ownership. Which one is most aligned with MuleSoft guidance?**
A. Anypoint Platform with fully custom APIs
B. MuleSoft Composer with out‑of‑the‑box connectors
C. RPA bots simulating all user clicks
D. Custom Java microservices on Kubernetes

**Resposta correta: B**
**Por que:** Baixo volume, conectores padrão e dono de negócio (business admin) apontam diretamente para o MuleSoft Composer.

---

**26. An architect proposes to centralize all error handling in the RPA layer. Why is this approach problematic for hyperautomation?**
A. APIs never fail, so this is unnecessary
B. Each layer (APIs, RPA, Flow, Composer) should handle its own technical concerns
C. RPA cannot log any errors
D. Composer has no way to react to failures

**Resposta correta: B**
**Por que:** O tratamento de erro deve ser distribuído; cada camada é responsável por seus erros técnicos, reportando-os de forma clara para a camada superior.

---

**27. A scenario mentions “avoiding duplicate login implementations across multiple teams”. Which platform capability directly supports this goal?**
A. Publishing shared RPA processes and API specs in Anypoint Exchange
B. Creating separate logins in each project for independence
C. Storing credentials in local text files
D. Embedding passwords into hard‑coded scripts

**Resposta correta: A**
**Por que:** O Exchange é o repositório central de ativos reutilizáveis, permitindo que equipes compartilhem lógicas comuns como autenticação.

---

**28. NTO wants to quickly pilot a new customer journey using mocked APIs while backend systems are still under design. Which combination best supports this parallel development?**
A. RPA Recorder plus production database
B. Anypoint API Designer + Mocking Service consumed by Flow/Composer
C. Manual JSON files exchanged over email
D. Only Salesforce custom objects with no external connectivity

**Resposta correta: B**
**Por que:** O API Designer permite definir o contrato da API e o Mocking Service permite que as equipes de front-end/Salesforce comecem a trabalhar imediatamente.

---

**29. A question describes a flow where Salesforce Screen Flows collect data from agents, which is then processed by RPA in a legacy system. Where should the primary user experience be built?**
A. In desktop RPA dialogs
B. In Salesforce Screen Flows integrated with APIs/RPA
C. In custom Java Swing applications
D. In raw database client tools

**Resposta correta: B**
**Por que:** O Salesforce é a "janela única" para o usuário. O RPA deve rodar em background (headless ou via API) para não interromper a experiência do agente.

---

**30. An exam item shows multiple design options. Which is the strongest sign that one option is a “trap” rather than the recommended architecture?**
A. It emphasizes reuse of existing APIs and assets
B. It replaces three integrations with a single well‑designed Process API
C. It adds unnecessary components and ignores existing reusable services
D. It mentions C4E and governance practices

**Resposta correta: C**
**Por que:** Pegadinhas de exame costumam oferecer soluções excessivamente complexas ou que ignoram ativos já existentes que poderiam ser reutilizados.

---

## 📝 Questões de 31 a 45 (Prova 3)

**31. AnyAirlines wants to expose flight status to partners, mobile apps and internal portals. What is the most efficient high‑level design?**
A. One monolithic API mixing database calls and UI logic
B. Separate, duplicated APIs for each consumer
C. System APIs for core data plus Process and Experience APIs for each channel
D. Only RPA bots reading from the reservation system

**Resposta correta: C**
**Por que:** Segue o padrão API-led Connectivity: System APIs para dados, Process para orquestração e Experience para os diferentes consumidores (parceiros, mobile, portal).

---

**32. A scenario offers the option to “rebuild a Customer System API from scratch” even though one already exists. Why is this typically wrong?**
A. Existing APIs cannot be reused
B. MuleSoft discourages versioning of APIs
C. It violates the principle of reuse and increases maintenance
D. System APIs are not allowed to expose customer data

**Resposta correta: C**
**Por que:** Reconstruir algo que já existe gera esforço desnecessário e aumenta o débito técnico. O foco deve ser o reuso de ativos existentes.

---

**33. NTO needs a quick proof‑of‑concept integration from Salesforce to a legacy mainframe with no APIs. Which answer best reflects MuleSoft guidance?**
A. Start with MuleSoft RPA to simulate user interactions
B. Wait until a new REST API is built before doing anything
C. Use Composer directly against the database tables
D. Only manual rekeying is acceptable

**Resposta correta: A**
**Por que:** Para sistemas legados sem APIs, o RPA é a solução recomendada pela MuleSoft para prover automação rápida.

---

**34. In an exam question, one option suggests performing complex aggregations in the Experience API, while another suggests doing it in the Process API. Which is more aligned with API‑led?**
A. Experience API, because it is closest to the user
B. Process API, because it centralizes business logic and orchestration
C. Both are equivalent according to MuleSoft
D. Neither; logic must always be in System APIs

**Resposta correta: B**
**Por que:** A camada de Processo é onde a lógica de negócio e as agregações entre diferentes sistemas devem ocorrer para que possam ser reutilizadas por múltiplas experiências.

---

**35. A flow uses RPA to fetch data from a legacy claims system and then sends the result to Salesforce. Where should retries and timeouts for unstable connectivity primarily be configured?**
A. Inside the Salesforce page layout
B. In the integration/API layer that receives or calls the RPA process
C. Inside the user’s browser
D. Nowhere; failures should be ignored

**Resposta correta: B**
**Por que:** A camada de integração (Mule APIs) é o local correto para gerenciar resiliência técnica, como retentativas de chamadas a processos de RPA instáveis.

---

**36. A candidate chooses an option that adds Salesforce Flow Orchestration plus multiple new APIs when a simple synchronous API call from a Screen Flow would suffice. What kind of trap is this?**
A. Alternative technically impossible
B. Alternative that adds unnecessary complexity
C. Alternative that improves reuse
D. Alternative that follows minimal design

**Resposta correta: B**
**Por que:** O exame testa se você sabe escolher a solução mais simples e adequada. Usar orquestração complexa para algo que uma chamada simples resolve é considerado má prática de design.

---

**37. An exam item describes a need for one‑time data migration from a CSV file into Salesforce. Which is the most appropriate integration approach?**
A. Full API‑led architecture with three layers
B. Complex RPA automation mimicking user input
C. Native Salesforce data import tools or simple integration
D. Building long‑running orchestrations with many stages

**Resposta correta: C**
**Por que:** Para migrações pontuais (one-time), ferramentas nativas (Data Loader) ou integrações simples são preferíveis a construir uma arquitetura complexa de APIs.

---

**38. A scenario gives two options: call a Process API that orchestrates multiple System APIs, or let Composer directly call each underlying system separately. Which is typically preferred?**
A. Composer calling all systems directly for flexibility
B. A Process API orchestrating System APIs, reused by Composer and other clients
C. Only RPA calling each system sequentially
D. Manual synchronization by business users

**Resposta correta: B**
**Por que:** Orquestrar via Process API centraliza a lógica e permite que tanto o Composer quanto outros canais reutilizem a mesma regra de negócio.

---

**39. A hyperautomation design includes Composer, RPA, Flow and multiple APIs. Which guiding principle helps keep this architecture maintainable?**
A. Push every responsibility to a single tool
B. Use each tool for the role it is strongest at and maximize reuse
C. Duplicate logic in each layer for redundancy
D. Prefer UI automation over APIs whenever possible

**Resposta correta: B**
**Por que:** O princípio "best tool for the job" garante que cada ferramenta (RPA para UI, Composer para SaaS, Anypoint para volume/lógica) seja usada onde brilha mais.

---

**40. An option claims that “creating separate APIs for each consuming application” improves reuse. Why is this misleading?**
A. MuleSoft does not support multiple APIs
B. True reuse comes from generic System/Process APIs with Experience APIs only when needed
C. Experience APIs cannot be consumer‑specific
D. Reuse is unrelated to API design

**Resposta correta: B**
**Por que:** Criar APIs específicas para cada app gera silos. O reuso real vem de APIs de Sistema e Processo que servem a múltiplos propósitos.

---

**41. A company wants to validate that their architecture still follows best practices one year after go‑live. Which practice best supports this?**
A. Ignoring C4E and allowing each team to evolve independently
B. Reviewing assets published in Anypoint Exchange and enforcing reuse policies
C. Rewriting all integrations annually
D. Migrating everything to RPA only

**Resposta correta: B**
**Por que:** Governança contínua via C4E e auditoria do que está no Exchange garante que o reuso e os padrões de qualidade sejam mantidos a longo prazo.

---

**42. In a multi‑choice question, two options look good, but one ignores API‑led layers and directly couples front‑end to databases. How should this influence the choice?**
A. Prefer the option that respects API‑led separation, even if more subtle
B. Prefer the option that bypasses layers for performance
C. Both are equally acceptable
D. Choose randomly if both seem possible

**Resposta correta: A**
**Por que:** O exame da MuleSoft sempre favorecerá a arquitetura em camadas (API-led) sobre acoplamento direto, visando manutenibilidade e agilidade.

---

**43. A scenario describes a business user who must maintain a simple integration without developer support. Which integration tool is the exam most likely to expect?**
A. Anypoint Studio with complex DataWeave scripts
B. MuleSoft Composer with guided interface
C. Custom Java microservices
D. Low‑level HTTP clients

**Resposta correta: B**
**Por que:** O Composer é a ferramenta voltada para o "Citizen Integrator" ou usuário de negócio, permitindo integrações sem código.

---

**44. NTO needs a fast temporary workaround using RPA while the proper APIs are being built. Which statement aligns with best practice?**
A. RPA should permanently replace API‑based integrations
B. RPA can act as a bridge, but long‑term strategy should be API‑led
C. RPA and APIs should never coexist
D. APIs are only for external consumers

**Resposta correta: B**
**Por que:** RPA é excelente para agilidade inicial (time-to-market), mas o objetivo final deve ser uma arquitetura baseada em APIs mais estáveis.

---

**45. An exam option describes “calling the same System API from multiple Experience APIs and from RPA/Composer flows”. How should this be interpreted?**
A. As an anti‑pattern that must be avoided
B. As strong evidence of reuse and correct layering
C. As a sign that the System API is too generic
D. As a violation of security principles

**Resposta correta: B**
**Por que:** Este cenário exemplifica o sucesso do modelo API-led: um único ativo (System API) servindo a múltiplos consumidores de forma eficiente.
