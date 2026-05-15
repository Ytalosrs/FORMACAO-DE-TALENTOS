## Hyperautomation Concepts (1–10)

**1.** Northern Trail Outfitters wants to modernize its processes by replacing repetitive manual tasks with automations that combine Flow, RPA, Composer, and APIs. According to Salesforce’s view, what best describes **Hyperautomation** in this context?

A. Using RPA only to remove all human involvement.

B. Combining multiple automation technologies to orchestrate end‑to‑end business processes.

C. Replacing all legacy systems with a single ERP.

D. Running autolaunched flows in batch every night.

E. Deploying a single Einstein Bot for all channels.

> **Answer:** B

---

**2.** An architect needs to explain the difference between **isolated automation** and **hyperautomation** to executives. Which statement is most aligned with Salesforce’s recommended understanding?

A. Isolated automation focuses on bots; hyperautomation focuses only on APIs.

B. Isolated automation uses Composer; hyperautomation always uses Flow Orchestration.

C. Isolated automation fixes point problems; hyperautomation connects people, data, and systems across end‑to‑end business journeys.

D. Isolated automation is always synchronous; hyperautomation is always asynchronous.

E. Isolated automation runs in the cloud; hyperautomation runs only on‑premises.

> **Answer:** C

---

**3.** A company wants to reduce customer service handling time by connecting digital channels, Salesforce Service Cloud, legacy systems without APIs, and real‑time partner integrations. Which combination represents a **typical hyperautomation architecture** in the Salesforce ecosystem?

A. Flow Builder, Flow Orchestration, MuleSoft Composer, MuleSoft RPA, and Anypoint Platform APIs.

B. Apex and Lightning Web Components only.

C. Einstein Bots and Digital Engagement only.

D. MuleSoft APIs only, without any Salesforce automation.

E. Reports and dashboards only.

> **Answer:** A

---

**4.** A CIO wants to select the right automation technology for each type of task. Which mapping best aligns with Salesforce hyperautomation guidance?

A. Salesforce Flow for every external integration, MuleSoft RPA for reporting.

B. MuleSoft Composer for SaaS‑to‑SaaS integrations, MuleSoft RPA for systems without APIs, Flow Orchestration to coordinate human and automated steps.

C. Use RPA for everything, because it is more flexible.

D. Use REST APIs only for any kind of user interaction.

E. Use Apex only because it is a full programming language.

> **Answer:** B

---

**5.** During an automation maturity review, the team finds dozens of automations built by different departments without governance. Which practice best matches Salesforce’s hyperautomation vision to fix this issue?

A. Centralize everything on a single Apex developer.

B. Turn off existing automations and start from scratch.

C. Create an Automation Center of Excellence with design standards, asset catalog, and centralized monitoring.

D. Move all automations into a single Flow.

E. Move all integrations to spreadsheets.

> **Answer:** C

---

**6.** A consultant is defining a **governance** strategy for hyperautomation. Which element is most important to ensure scalability and reuse?

A. Build automations only in production.

B. Avoid documentation to move faster.

C. Establish naming conventions, API‑led integration patterns, versioning, and dev/test/prod environments.

D. Let any user activate automations directly in production.

E. Disable logs to reduce costs.

> **Answer:** C

---

**7.** A company wants to implement hyperautomation with a strong focus on **data security**. Which approach is best aligned with good practices?

A. Expose sensitive data in flow logs to help troubleshooting.

B. Use only generic integration users with administrator access everywhere.

C. Apply least‑privilege access in integrations, mask sensitive data in logs, and use strong authentication for connections.

D. Store access tokens in plain text custom fields.

E. Share integration credentials over email.

> **Answer:** C

---

**8.** While building a hyperautomation roadmap, the business team wants to prioritize initiatives. Which criterion is **most suitable** to decide which processes to automate first?

A. Number of fields on the object.

B. Technical complexity of integrations only.

C. Combination of business impact (time savings, error reduction) and technical feasibility.

D. Number of users involved, regardless of value.

E. Choose only processes that involve RPA.

> **Answer:** C

---

**9.** An architect is evaluating the use of **API‑led connectivity** in a hyperautomation initiative. What is the main benefit of this approach for Salesforce + MuleSoft?

A. Providing a single giant API that covers all systems.

B. Splitting integrations into System, Process, and Experience APIs to promote reuse, governance, and decoupling between channels and systems.[](https://www.reddit.com/r/Preparationtips/comments/1m3pe3s/how_to_prepare_for_the_salesforce_certified/)​

C. Eliminating the need for any logic in Salesforce Flow.

D. Completely replacing MuleSoft Composer.

E. Forcing all processes to be synchronous.

> **Answer:** B

---

**10.** Leadership wants to understand the role of **AI** in Salesforce hyperautomation. Which option represents a typical use of AI in this certification’s context?

A. AI replaces all business rules in flows.

B. Einstein Next Best Action recommends actions while Flow Orchestration and integrations execute the resulting steps.

C. AI is used only to build dashboards.

D. AI is used only in Einstein Bots, without process integration.

E. AI is mandatory for any automation.

> **Answer:** B

---

## MuleSoft Composer (11–25)

**11.** Northern Trail Outfitters wants to synchronize contacts between Salesforce and Google Sheets using a **no‑code** integration interface. According to the official documentation, which tool should they use?

A. Anypoint Studio.

B. MuleSoft Composer.

C. Standalone Mule runtime.

D. Salesforce CLI.

E. Apex REST.

> **Answer:** B

---

**12.** In MuleSoft Composer, which element represents the **credentials and URL** used to access a system such as Salesforce, Slack, or NetSuite?

A. Trigger.

B. Action.

C. Connection.

D. Template.

E. Orchestration.

> **Answer:** C

---

**13.** An admin is creating a new MuleSoft Composer flow. After selecting a Salesforce‑based connection, what should they configure as the **first step** of the flow, according to the documentation?[](https://docs.mulesoft.com/composer/ms_composer_overview)​

A. An integration template.

B. A trigger that defines which Salesforce event will start the flow.

C. A write action on another system.

D. A usage monitor.

E. A unit test step.

> **Answer:** B

---

**14.** A Composer flow must run every 15 minutes, regardless of events in external systems. What should be configured?

A. A “record created” trigger in Salesforce.

B. A platform event trigger.

C. A schedule‑based trigger as the start of the flow.

D. An asynchronous Apex action.

E. An automation template.

> **Answer:** C

---

**15.** While building a flow in MuleSoft Composer, the admin sees sample data flowing through the steps. What is the primary purpose of this **sample data** feature?

A. Register final production logs.

B. Let the user test each change in near real time to validate steps before activation.

C. Automatically generate analytics reports.

D. Reduce license costs.

E. Create new custom objects.

> **Answer:** B

---

**16.** After configuring triggers and actions in a Composer flow, what should the admin do **before activating the flow in production**, according to guidance?

A. Export the flow to Anypoint Studio.

B. Test the flow on a single record to validate its behavior.

C. Compile the flow to Java code.

D. Convert the flow to a managed template.

E. Move the flow directly to a production org without tests.

> **Answer:** B

---

**17.** A Composer flow is active, but users suspect it is not updating a target system correctly. Where should the admin check executions and related errors first?

A. The flow’s **Flow Details** page in MuleSoft Composer.

B. Only Salesforce Debug Logs.

C. Only Anypoint Monitoring.

D. Only Setup Audit Trail.

E. Only Data Cloud reports.

> **Answer:** A

---

**18.** The Composer home page should help admins start common integrations quickly, like syncing contacts across systems. Which feature can they use to accelerate flow creation?

A. Usage Summary.

B. Prebuilt templates.

C. Help Center.

D. Flow Orchestration.

E. RPA Manager.

> **Answer:** B

---

**19.** On the MuleSoft Composer home page, the **Usage Summary** section appears. What is its main purpose?[](https://docs.mulesoft.com/composer/ms_composer_overview)​

A. Show only the number of logged‑in users.

B. Display monthly tasks and credit usage per flow for the organization.

C. Configure Salesforce user licenses.

D. Create new custom objects.

E. Generate financial reports.

> **Answer:** B

---

**20.** A Composer flow copies updated records from Salesforce to a billing system. Which best practice should the admin follow when configuring the actions?

A. Always copy all records from the table, regardless of changes.

B. Copy only new or changed records since the last run to reduce processing.

C. Always copy every field, even irrelevant ones.

D. Avoid filters to keep the flow simple.

E. Configure multiple triggers for the same event.

> **Answer:** B

---

**21.** A critical Composer flow runs important integrations. The team wants to be notified of failures in addition to checking the Flow Details page. Which mechanism can be configured to send error notifications?[](https://www.pantherschools.com/what-is-mulesoft-composer/)​

A. Post to a Chatter feed by default.

B. Send emails to a configured address.

C. Send push notifications to the Salesforce mobile app by default.

D. Automatically create case records.

E. Post messages in Slack by default, without setup.

> **Answer:** B

---

**22.** A company wants **near real‑time bidirectional sync** between two Salesforce orgs using MuleSoft Composer. What is the minimum number of flows required?

A. 1.

B. 2.

C. 3.

D. 4.

E. 5.

> **Answer:** B

---

**23.** In a Composer integration project, IT requires all testing to be done in **sandbox orgs** first. During testing, which Salesforce connections should point to sandboxes?

A. Only the trigger.

B. Only the last action.

C. Both the trigger and all actions that interact with Salesforce.

D. Only actions that write to external systems.

E. Testing in sandboxes is not recommended.

> **Answer:** C

---

**24.** An admin opens MuleSoft Composer and wants to create a new flow from scratch. Which option should they select on the home page?

A. Usage Summary.

B. Flows > Create new flow.

C. Help > Create flow.

D. Templates > Activate.

E. Settings > New.

> **Answer:** B

---

**25.** An analyst wants to understand how MuleSoft Composer helps **reduce integration complexity** for business users. How does the documentation describe this benefit?

A. By completely hiding integration logic from the user.

B. By letting users experiment and iterate on a flow, breaking logic into clear steps and adjusting as they discover new use cases.

C. By automatically generating Apex code.

D. By replacing all legacy systems with Salesforce.

E. By preventing flows from being modified after activation.

> **Answer:** B

---

## Salesforce Flow & Flow Orchestration (26–40)

**26.** Northern Trail Outfitters must automate a set of actions in Salesforce that a single user will execute after a Case is created. The solution must organize actions into **logical steps** and allow user input during the process. Which feature is most appropriate?

A. A single autolaunched flow with Apex invocations.

B. A Flow Orchestration with Stages and Steps to organize automated actions and user interactions.

C. A Process Builder process.

D. A nightly batch flow.

E. A workflow rule.

> **Answer:** B

---

**27.** An admin wants to build a **guided** process where the user interacts with screens and makes decisions. Which flow type is most appropriate?

A. Screen Flow.

B. Record‑Triggered Flow.

C. Schedule‑Triggered Flow.

D. Autolaunched Flow with no screens.

E. Before‑save Flow.

> **Answer:** A

---

**28.** A company must run automation automatically whenever an Account record is created or updated, **before** it is saved to the database, in order to update a calculated field. Which Flow type should be used?

A. Screen Flow.

B. Before‑save Record‑Triggered Flow.

C. Schedule‑Triggered Flow.

D. Flow Orchestration Step only.

E. Platform Event‑Triggered Flow.

> **Answer:** B

---

**29.** In Flow Builder, when clicking **Debug**, what does the admin get that is different from **Run**?

A. Debug runs an old version of the flow.

B. Debug shows details of each step, including inputs, outputs, and errors, helping identify issues.

C. Debug works only for admins.

D. Debug disables all validations.

E. Debug logs only to external files.

> **Answer:** B

---

**30.** A Flow Orchestration must involve multiple teams in different stages of a project approval process. How do **Interactive Steps** help in this scenario?

A. They allow users to interact with the process between automated backend steps, completing work items before the orchestration moves on.

B. They remove the need for Salesforce licenses.

C. They replace all automated actions.

D. They automatically create Analytics reports.

E. They are used only for external integrations.

> **Answer:** A

---

**31.** An admin wants to reuse common logic across several flows, such as validations and field updates. Which feature is recommended?

A. Flow Orchestration.

B. Subflows called from a parent flow.

C. Workflow Rules.

D. Process Builder.

E. Apex triggers only.

> **Answer:** B

---

**32.** A company wants to automate a process where a set of records must be processed in batch every day at 11:00 PM. Which flow type is most appropriate?

A. Screen Flow.

B. Schedule‑Triggered Flow.

C. Record‑Triggered Flow.

D. Manually launched autolaunched flow.

E. Flow Orchestration only.

> **Answer:** B

---

**33.** An architect is reviewing automations in an org. What is Salesforce’s current recommendation for new **declarative** automation?

A. Workflow Rules.

B. Process Builder.

C. Salesforce Flow (Flow Builder).

D. Apex triggers for everything.

E. No declarative automation at all.

> **Answer:** C

---

**34.** An admin is testing a flow that is not yet active. Which version does **Run** use in Flow Builder?

A. Always the active version.

B. The most recently saved version of the flow, even if it is not active.

C. A random version.

D. Only versions deployed via change sets.

E. Only cloned versions.

> **Answer:** B

---

**35.** A hyperautomation process requires that a user reviews data and makes a manual decision at a certain point, after several automated steps. Where does this human interaction best fit?

A. In an Interactive Step within a Flow Orchestration.

B. Inside a SOQL query.

C. In a static report.

D. In a Composer template only.

E. In an autonomous AI component.

> **Answer:** A

---

**36.** A team wants to expose an external service (provided by a REST API) as an invocable action in a Salesforce flow with a declarative setup. Which platform feature should be used to register this action?

A. Named Credentials only.

B. External Services with imported OpenAPI specifications.

C. Apex Managed Sharing.

D. Platform Events.

E. Big Objects.

> **Answer:** B

---

**37.** In a hyperautomation flow, the team needs to coordinate multiple flows and human steps in a **multi‑day process** with SLAs and dependencies. Which feature is most appropriate?

A. A single autolaunched flow.

B. Flow Orchestration.

C. MuleSoft Composer only.

D. A simple Screen Flow.

E. Apex Batch only.

> **Answer:** B

---

**38.** An admin is seeing frequent errors in a record‑triggered flow in production. Which practice is recommended to debug without impacting end users?

A. Deactivate the flow and wait.

B. Clone the flow to a sandbox, reproduce the scenario using Debug, then adjust logic.

C. Change the flow directly in production without tests.

D. Delete and recreate the flow from scratch.

E. Ignore errors; the system will self‑adjust.

> **Answer:** B

---

**39.** A developer built a complex flow mixing UI logic and external integrations. To make it more sustainable, which approach aligns with best practices?

A. Keep everything in a single flow for readability.

B. Separate UI logic into Screen Flows, business logic into autolaunched flows, and integrations into reusable APIs.

C. Convert the entire flow to Apex.

D. Move the logic to Process Builder.

E. Use RPA only to interact with Salesforce.

> **Answer:** B

---

**40.** In Flow Builder, what is the main difference in purpose between **Run** and **Debug**?

A. Run always uses the active version; Debug always uses an old version.

B. Run executes the flow normally; Debug shows detailed information per element (inputs, outputs, errors) for troubleshooting.

C. Run works only in production; Debug only in sandbox.

D. Run ignores validations; Debug applies all validations.

E. Run uses sample data; Debug uses only real data.

> **Answer:** B

---

## MuleSoft RPA, Anypoint Platform & API‑Led (41–60)

**41.** AnyAirlines must automate a process that retrieves data from an old website that **does not expose APIs**. Which combination of tools best fits Salesforce’s hyperautomation strategy?

A. MuleSoft Composer only.

B. MuleSoft RPA to interact with the website UI and MuleSoft Composer to orchestrate with Salesforce.

C. Apex only.

D. Salesforce reports only.

E. Flow Orchestration only.

> **Answer:** B

---

**42.** While using **RPA Recorder** in MuleSoft RPA, an analyst records a manual activity in a legacy system. What kind of information does the Recorder automatically capture to support automation?

A. Business comments for each step.

B. Conditional decisions made by the user.

C. Documentation of the UI elements used (buttons, fields, etc.).

D. Environment variable values.

E. Passwords in plain text.

> **Answer:** C

---

**43.** A company needs to create a new API‑based integration with MuleSoft. According to API‑led best practices, what should the developer’s **first step** be?[](https://onlineitguru.com/blog/mulesoft-composer)​

A. Create a project directly in Anypoint Studio with no specification.

B. Install Mule runtime locally and start coding.

C. Create the API specification (RAML) in Design Center, defining resources, methods, and contracts.

D. Open a Salesforce support case.

E. Create a Composer flow.

> **Answer:** C

---

**44.** AnyAirlines is developing a new integration and wants **automated tests** integrated into the API development lifecycle. Which Anypoint Platform component best meets this need?

A. MuleSoft RPA.

B. MuleSoft Composer.

C. MUnit within Anypoint Studio/Platform.

D. Salesforce Flow Debug.

E. Einstein Bots.

> **Answer:** C

---

**45.** A company wants to deploy Anypoint Platform on top of AWS infrastructure with horizontal/vertical scalability and zero‑downtime deployments. Which deployment strategy is most appropriate?

A. Standalone local runtimes only.

B. CloudHub only.

C. Runtime Fabric on AWS infrastructure.

D. Private Cloud Edition in an on‑premises data center.

E. Manual runtimes on isolated VMs without orchestration.

> **Answer:** C

---

**46.** An RPA process in production at AnyAirlines has started to fail. According to recommended practices, what is the best way to debug the problem?

A. Deactivate the process and manually review screenshots.

B. Download the analysis package from RPA Manager, revert the process to the Build phase, import the package into RPA Builder, and debug there.

C. Modify the process directly in production.

D. Ignore failures until they stop.

E. Delete the process and recreate it.

> **Answer:** B

---

**47.** A marketing team wants to run a monthly campaign for the top 10% customers with the highest loyalty points. The scenario uses API‑led connectivity and an external HTTP loyalty system. Which approach best aligns with API‑led best practices?[](https://www.reddit.com/r/Preparationtips/comments/1m3pe3s/how_to_prepare_for_the_salesforce_certified/)​

A. Create a single giant API accessing all systems.

B. Create System APIs for Customer and Loyalty, a Process API that combines the data, and an Experience API for business consumers.

C. Implement everything with RPA.

D. Implement everything with Salesforce reports.

E. Use local spreadsheets only.

> **Answer:** B

---

**48.** In a hyperautomation pipeline, the team wants to expose one API for a mobile app and another for a web portal, both consuming the same backend capabilities. Which **API‑led layer** typically serves these channels?

A. System API.

B. Process API.

C. Experience API.

D. Batch API.

E. Sync API.

> **Answer:** C

---

**49.** An architect is designing how MuleSoft RPA and APIs should work together. In which situation is RPA **most appropriate**, according to hyperautomation guidance?

A. Whenever there are well‑defined REST APIs.

B. When the system lacks APIs or direct data access but has a stable user interface.

C. When the customer prefers not to use Salesforce.

D. When all declarative flows should be replaced.

E. When only reporting is needed.

> **Answer:** B

---

**50.** A company uses MuleSoft Composer, Flow, and RPA in its hyperautomation strategy. Who is typically the **primary target user** for MuleSoft Composer within this combination?

A. Low‑level Java developers.

B. Admins and business analysts who need to build SaaS‑to‑SaaS integrations quickly with a visual interface.

C. End users with no edit permissions.

D. Security teams only.

E. Senior integration architects only.

> **Answer:** B

---

**51.** An RPA job is scheduled to start daily at 10:00 AM and runs for one hour. The schedule uses a fixed interval of 45 minutes between job starts. Assuming no failures, at what time will the process run for the **second time**?

A. 10:45 AM.

B. 11:00 AM.

C. 11:45 AM, because the next run can only start 45 minutes after the first job completes.

D. 10:15 AM.

E. 12:00 PM.

> **Answer:** C

---

**52.** An integration team must monitor and manage APIs, including security policies, SLAs, and analytics. Which Anypoint Platform component is most appropriate for this function?[](https://www.reddit.com/r/Preparationtips/comments/1m3pe3s/how_to_prepare_for_the_salesforce_certified/)​

A. Anypoint Runtime Manager.

B. Anypoint Exchange.

C. Anypoint API Manager.

D. Design Center.

E. RPA Manager.

> **Answer:** C

---

**53.** An organization wants to publish reusable assets—such as API specifications, templates, and connectors—for other teams to consume. Which feature should they use?

A. Anypoint Runtime Manager.

B. Anypoint Exchange.

C. MUnit.

D. DataWeave.

E. RPA Builder.

> **Answer:** B

---

**54.** In the Hyperautomation Specialist context, which is a typical responsibility when working on **API governance**?

A. Creating manual tests only.

B. Configuring open, unauthenticated access for ease of use.

C. Defining authentication standards, restricting access with policies, and monitoring usage via API Manager.[](https://www.reddit.com/r/Preparationtips/comments/1m3pe3s/how_to_prepare_for_the_salesforce_certified/)​

D. Avoiding documentation to speed delivery.

E. Leaving security entirely to the network team.

> **Answer:** C

---

**55.** A company wants to ensure that only authorized users can trigger automations involving sensitive data in Salesforce, Composer, and RPA. Which strategy is most appropriate?

A. Give everyone the System Administrator profile.

B. Control access via Salesforce profiles/permission sets, limit who can configure Composer connections, and use access control in RPA Manager.

C. Share credentials in a document.

D. Use only generic logins.

E. Disable multi‑factor authentication.

> **Answer:** B

---

**56.** In a hyperautomation scenario, the team wants to reduce coupling between front ends and backend systems so internal changes do not break external channels. Which API‑led layer directly supports this objective?[](https://www.reddit.com/r/Preparationtips/comments/1m3pe3s/how_to_prepare_for_the_salesforce_certified/)​

A. System APIs.

B. Process APIs.

C. Experience APIs.

D. Batch APIs.

E. RPA processes.

> **Answer:** B

---

**57.** An architect is deciding between MuleSoft Composer and a full Anypoint Platform‑based integration. In which scenario is Composer **most appropriate**?

A. Highly customized integrations with complex performance and governance requirements.

B. Simple SaaS‑to‑SaaS integrations that must be delivered quickly with minimal coding.

C. On‑premises implementations with no cloud access.

D. Scenarios requiring deep unit testing with MUnit.

E. Situations where a visual interface is not desired.

> **Answer:** B

---

**58.** A company wants to use MuleSoft RPA and Composer in a service process involving data capture in a legacy system, Salesforce record updates, and Slack notifications. Which design best represents the hyperautomation approach?

A. RPA does everything, without Composer or Salesforce.

B. Composer orchestrates the process, calling an RPA bot for the legacy system, updating Salesforce, and sending Slack notifications.

C. A record‑triggered flow only.

D. A single REST API only.

E. Reports only.

> **Answer:** B

---

**59.** A team is defining KPIs to measure the success of hyperautomation initiatives. Which metric set is most relevant?

A. Number of custom objects created, number of Apex triggers.

B. Cycle‑time reduction, decrease in manual errors, increase in process/case throughput, and user satisfaction.

C. Apex code size, log volume.

D. Number of user profiles.

E. Number of dashboards created.

> **Answer:** B

---

**60.** A hyperautomation architect needs to align business and IT stakeholders on the scope of upcoming automation waves. Which practice is most appropriate?

A. Let each department create isolated automations without alignment.

B. Run process discovery sessions, map end‑to‑end journeys, and prioritize high‑impact use cases aligned with the API and automation roadmap.

C. Start with technical implementation only, without involving business.

D. Choose only easy processes, regardless of value.

E. Focus only on internal integrations, ignoring customer experience.

> **Answer:** B


## Explicações das respostas

**1.** (B) Hyperautomation, na visão Salesforce, é exatamente a combinação de várias tecnologias (Flow, Orchestration, MuleSoft, RPA, IA etc.) para automatizar processos ponta a ponta, e não apenas usar uma única ferramenta isolada.

**2.** (C) A diferença central é que automação isolada resolve tarefas pontuais, enquanto hyperautomation se preocupa em conectar pessoas, dados e sistemas ao longo de jornadas completas de negócio, orquestrando tudo como um processo único.

**3.** (A) Uma arquitetura típica de hyperautomation no ecossistema Salesforce combina automações declarativas (Flow/Orchestration) com integrações (MuleSoft Composer/Anypoint APIs) e RPA para cenários sem API, cobrindo do front ao back sem código pesado.

**4.** (B) A boa prática é usar Composer para integrações SaaS a SaaS com cliques, RPA para interfaces sem API e Flow Orchestration para coordenar passos humanos e automáticos, aproveitando a melhor ferramenta para cada tipo de tarefa.

**5.** (C) A abordagem recomendada em grandes programas de automação é criar um CoE (Center of Excellence) com padrões, catálogo de ativos, governança e monitoramento centralizado, em vez de deixar cada área criar automações soltas.

**6.** (C) Escalabilidade e reutilização vêm de padrões: convenções de nomes, API‑led connectivity, versionamento, ambientes de desenvolvimento/teste/produção e práticas de DevOps; isso evita “caos de automações”.

**7.** (C) Princípio do menor privilégio, mascaramento de dados sensíveis em logs e autenticação forte/segura são pilares de segurança recomendados em integrações e automações que tratam informações sensíveis.

**8.** (C) Em priorização de automação, o mais maduro é cruzar impacto de negócio (tempo, custo, erros) com viabilidade técnica, e não só escolher o que é “mais fácil” ou o que tem mais campos.

**9.** (B) API‑led divide integrações em System, Process e Experience APIs para promover reutilização, desacoplamento entre canais e sistemas e melhor governança, em vez de criar uma única API monolítica.

**10.** (B) A visão Salesforce é que IA (por exemplo, Einstein) sugere a próxima melhor ação, enquanto flows, orquestrações e integrações executam automaticamente os próximos passos recomendados.

---

**11.** (B) MuleSoft Composer é justamente a ferramenta no‑code, com interface visual, para automatizar integrações entre sistemas como Salesforce, Google Sheets, Workday etc., sem necessidade de código.

**12.** (C) “Connection” em Composer representa o conjunto de credenciais, URL e configuração de acesso a um sistema, sendo reutilizada por triggers e actions daquele sistema.

**13.** (B) Todo fluxo em Composer começa escolhendo um trigger (por exemplo, “When a record is created in Salesforce”) que define o evento inicial a partir de uma conexão.

**14.** (C) Para rodar a cada 15 minutos sem depender de evento, usa‑se um trigger do tipo “schedule” (agendamento) como início do fluxo, em vez de um evento de registro.

**15.** (B) O uso de sample data no Composer serve para testar visualmente cada passo com dados reais/representativos enquanto você constrói o fluxo, permitindo ajustes antes da ativação em produção.

**16.** (B) As boas práticas indicam testar o fluxo em um registro (ou cenário controlado) antes de ativar, validando se as ações e mapeamentos estão corretos, como descrito no passo de “Test your flow on one record”.

**17.** (A) A página de detalhes do fluxo em Composer é onde você acompanha execuções, histórico e erros, sendo a primeira parada para investigação quando algo não está funcionando.[](https://docs.mulesoft.com/composer/ms_composer_overview)​

**18.** (B) A home do Composer oferece “Templates” pré‑construídos justamente para iniciar integrações comuns mais rápido, bastando ajustar conexões e detalhes.

**19.** (B) A seção “Usage Summary” exibe tarefas mensais e uso de créditos por fluxo/organização, ajudando a monitorar consumo e capacidade de automação.[](https://docs.mulesoft.com/composer/ms_composer_overview)​

**20.** (B) A prática eficiente é processar apenas registros novos ou alterados desde a última execução (incremental), evitando varrer todo o volume e reduzindo carga em origem e destino.

**21.** (B) Composer pode mandar notificações de erro por e‑mail configurado, de forma que o time não dependa só de olhar a tela de Flow Details manualmente.

**22.** (B) Para sincronização bidirecional, é necessário no mínimo um fluxo indo do Org A para o Org B e outro do Org B para o Org A, garantindo que mudanças em qualquer lado sejam refletidas no outro.

**23.** (C) Em testes, tanto o trigger quanto todas as actions que tocam Salesforce devem apontar para sandboxes, para não afetar dados de produção enquanto você valida o fluxo.

**24.** (B) Para criar um novo fluxo do zero, você vai à seção “Flows” e escolhe “Create new flow”, conforme descrito na documentação e nos módulos de Trailhead.

**25.** (B) A própria documentação ressalta que Composer ajuda a “quebrar” a complexidade, permitindo que você itere e ajuste o fluxo passo a passo, com feedback imediato de dados, enquanto descobre novos casos de uso.

---

**26.** (B) Flow Orchestration foi criada justamente para montar processos multi‑etapas com Stages e Steps, unindo ações automáticas e interações de usuários em um só artefato.[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​​

**27.** (A) Quando o usuário precisa passar por telas, tomar decisões e ver instruções passo a passo, o tipo mais adequado é Screen Flow.

**28.** (B) Para atualizar campos calculados antes de gravar o registro, usa‑se um Record‑Triggered Flow configurado para “before save”, que roda na transação de gravação.

**29.** (B) Debug em Flow Builder mostra para cada elemento quais foram os inputs, outputs e possíveis falhas, enquanto Run apenas executa o fluxo de ponta a ponta sem esse nível de detalhe.

**30.** (A) Interactive Steps em Flow Orchestration servem justamente para “parar” a orquestração em pontos onde um usuário precisa completar uma tarefa antes de seguir para o próximo passo.​[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​

**31.** (B) Subflows permitem encapsular lógica comum (por exemplo, validações, atualizações padrão) que pode ser chamada por diversos flows, aumentando a reutilização e facilitando manutenção.

**32.** (B) Schedule‑Triggered Flows são o tipo adequado quando o requisito é execução em lote e em horário fixo (por exemplo, diariamente às 23h).

**33.** (C) A recomendação oficial atual é usar Salesforce Flow (Flow Builder) como tecnologia declarativa padrão, em vez de criar novas automações com Workflow Rules ou Process Builder.

**34.** (B) Ao usar Run/Debug no Flow Builder, você executa a versão mais recente salva (mesmo não ativa), o que é útil para testar mudanças antes de publicá‑las para todos.

**35.** (A) Interactive Steps de uma Orchestration foram pensados para encaixar exatamente esse tipo de “parada” com análise humana, entre blocos de automação de back‑end.[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​​

**36.** (B) External Services usa especificações OpenAPI importadas, combinadas com Named Credentials, para registrar serviços externos e expô‑los como ações invocáveis em Flow Builder.

**37.** (B) Para coordenar vários flows e interações humanas ao longo de dias, com SLAs e dependências entre etapas, Flow Orchestration é a ferramenta certa, pois oferece estágios sequenciais e controle de avanço.​[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​

**38.** (B) A prática segura é clonar o fluxo para um sandbox, reproduzir o cenário usando Debug e só depois ajustar e implantar em produção, evitando impactos diretos nos usuários.

**39.** (B) Separar a lógica em Screen Flows (UI), autolaunched flows (negócio) e APIs (integração) cria camadas reutilizáveis e menos acopladas, facilitando evolução e testes.

**40.** (B) Run executa o fluxo “normalmente” para ver o comportamento final; Debug adiciona rastreamento detalhado de cada elemento para ajudar na identificação de problemas.

---

**41.** (B) Quando não há API, MuleSoft RPA é ideal para interagir com a tela do sistema legado, e Composer pode orquestrar essas chamadas junto com Salesforce, mantendo o processo integrado de ponta a ponta.

**42.** (C) O RPA Recorder captura automaticamente informações dos elementos de interface (botões, campos, etc.), que depois são usadas para reproduzir as ações do usuário com precisão.

**43.** (C) Em API‑led, a boa prática é começar pela definição da especificação RAML/contrato no Design Center, para depois gerar o projeto e implementação, garantindo primeiro o contrato.[](https://onlineitguru.com/blog/mulesoft-composer)​

**44.** (C) MUnit é o framework de testes automatizados de MuleSoft, integrado ao Anypoint Studio/Platform, usado para criar suites de teste de APIs e integrações.

**45.** (C) Runtime Fabric sobre infraestrutura AWS permite escalar horizontal/verticalmente e orquestrar implantações com alta disponibilidade e zero downtime, alinhando‑se ao requisito dado.

**46.** (B) A recomendação é baixar o analysis package do RPA Manager, voltar o processo para fase de Build, importar o pacote no RPA Builder e depurar ali, com logs ricos e capacidade de ajuste.

**47.** (B) O padrão API‑led sugeriria System APIs para Cliente/Fidelidade, um Process API que combine esses dados e um Experience API específico para o caso de uso de marketing.

**48.** (C) Experience APIs são tipicamente responsáveis por servir canais finais (mobile, web, etc.), reaproveitando capacidades das Process/System APIs subjacentes.

**49.** (B) RPA faz mais sentido quando não há API ou acesso direto a dados, mas existe uma interface de usuário estável sobre a qual o robô pode operar.

**50.** (B) O Composer é posicionado como ferramenta para admins e analistas de negócio criarem integrações SaaS a SaaS com interface declarativa, sem precisar de desenvolvimento de baixo nível.

**51.** (C) O primeiro job roda de 10h às 11h; como o intervalo é de 45 minutos **após** o término, a segunda execução começa às 11h45, não às 10h45.

**52.** (C) API Manager é o componente focado em gerenciar APIs: aplicar políticas de segurança, controlar SLAs, analisar uso e monitorar chamadas.

**53.** (B) Anypoint Exchange é o catálogo de ativos reutilizáveis (specs, templates, conectores) para que outros times possam descobrir e consumir integrações e APIs.

**54.** (C) Governança de APIs envolve definir padrões de autenticação/autorização, aplicar políticas (limites, segurança) e monitorar consumo e performance via API Manager.

**55.** (B) A estratégia correta é combinar controle de acesso em Salesforce (perfis/permission sets), restringir quem pode configurar conexões do Composer e usar governança de acesso no RPA Manager.

**56.** (B) Process APIs encapsulam lógica de negócio e compõem dados de múltiplas System APIs, reduzindo o acoplamento entre front‑ends (Experience APIs) e os sistemas de backend.

**57.** (B) Composer é mais indicado para integrações SaaS a SaaS relativamente simples, com forte foco em velocidade de entrega e “cliques, não código”; integrações muito complexas tendem a ir para Anypoint completo.

**58.** (B) O desenho recomendado é Composer orquestrar o fluxo, chamando RPA para o sistema legado, atualizando Salesforce e disparando notificações em Slack, compondo várias tecnologias numa única automação.

**59.** (B) Métricas de maturidade em hyperautomation olham para redução de tempo de ciclo, diminuição de erros manuais, aumento de throughput e satisfação de usuários, não para contagem de objetos ou triggers.

**60.** (B) Sessões de “process discovery” e mapeamento de jornadas ponta a ponta ajudam a identificar processos com maior impacto e alinhar as próximas ondas de automação com o roadmap de APIs, flows, Composer e RPA.