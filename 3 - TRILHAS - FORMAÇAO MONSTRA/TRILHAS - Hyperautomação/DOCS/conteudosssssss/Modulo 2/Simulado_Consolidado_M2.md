# 🎓 Simulado Consolidado – Módulo 2: MuleSoft RPA

Este documento reúne as 45 questões das três provas do Módulo 2, focadas em Fundamentos, Arquitetura e Ciclo de Vida do MuleSoft RPA, com gabarito comentado.

---

## 📝 Questões de 1 a 15 (Prova 1)

**1. AnyAirlines wants to automate a stable, repetitive back‑office process currently executed by an operator in a legacy Windows application. There is no API available. What is the most appropriate first technology choice?**
A. MuleSoft Composer with HTTP trigger
B. MuleSoft RPA Builder creating a UI automation process
C. Salesforce Flow with External Services
D. Anypoint Platform Experience API only

**Resposta correta: B**
**Por que:** Quando o sistema é um aplicativo Windows legado e não possui APIs, o MuleSoft RPA Builder é a ferramenta correta para criar automação via interface de usuário (UI).

---

**2. Northern Trail Outfitters (NTO) wants to decide whether a candidate process is suitable for RPA. Which characteristic most strongly indicates a good fit?**
A. Process changes its steps every week
B. Process is ad‑hoc and creative
C. Process is rule‑based, high volume and stable over time
D. Process is performed once per year by executives

**Resposta correta: C**
**Por que:** Os melhores candidatos para RPA são processos baseados em regras claras, estáveis (que não mudam o tempo todo) e que possuem volume suficiente para justificar o esforço de automação.

---

**3. A question describes the Evaluation phase inside RPA Manager. What is the most efficient way to use this phase according to best practices?**
A. To configure attended robots on users’ desktops
B. To estimate automation potential and business value before building
C. To deploy processes directly to production workers
D. To record user clicks automatically

**Resposta correta: B**
**Por que:** A fase de *Evaluation* serve para qualificar o processo, calculando o ROI (retorno sobre investimento) e a viabilidade técnica antes de gastar tempo no desenvolvimento.

---

**4. A company wants traceability of who approved which bot process and when it went to production. Which RPA Manager capability is most relevant?**
A. Credential Manager
B. Process Operations dashboards
C. Lifecycle with stages like Evaluation, Design, Build, Test, Production
D. Recorder exports

**Resposta correta: C**
**Por que:** O *Lifecycle* (Ciclo de Vida) do RPA Manager gerencia as permissões e aprovações necessárias para mover um processo de uma fase para a outra, garantindo governança.

---

**5. A scenario describes a new process that is still being redesigned by the business team and frequently changes the system steps. What is the best recommendation?**
A. Immediately automate with RPA to capture all changes
B. Wait until the process is stable before committing to RPA
C. Use RPA only in production, not in test
D. Replace the process with manual spreadsheets permanently

**Resposta correta: B**
**Por que:** Automatizar processos instáveis gera manutenção constante e falhas. A recomendação é aguardar a estabilização do processo de negócio antes de implementar o RPA.

---

**6. NTO needs to ensure that passwords used by bots are never visible to RPA developers. Which component should be highlighted in the answer?**
A. Local configuration files on the bot machine
B. Credential Manager in RPA Manager
C. Comments inside the workflow activities
D. Environment variables on developers’ laptops

**Resposta correta: B**
**Por que:** O *Credential Manager* permite que senhas sejam armazenadas de forma segura e injetadas no robô em tempo de execução, sem que o desenvolvedor tenha acesso ao valor real.

---

**7. A candidate solution stores credentials in an Excel file read by the bot at runtime. Why is this not aligned with MuleSoft RPA best practices?**
A. Bots cannot read Excel files
B. Excel files cannot be versioned
C. Credentials must be stored securely and centrally in Credential Manager
D. RPA Manager does not allow bots to access files

**Resposta correta: C**
**Por que:** Armazenar senhas em arquivos (como Excel ou texto) é uma falha grave de segurança. Deve-se usar sempre o Credential Manager centralizado.

---

**8. A bank wants to run multiple independent RPA processes in parallel on the same infrastructure to maximize ROI. Which concept is most relevant?**
A. Background Steps
B. Workers in CloudHub
C. RPA Agents configured to handle multiple processes
D. Visualforce pages

**Resposta correta: C**
**Por que:** O RPA Agent pode ser configurado para gerenciar múltiplas sessões e processos, otimizando o uso do hardware disponível.

---

**9. A scenario says: “The bot must run even when no human is logged into Windows and no monitor is attached.” Which feature enables this behavior?**
A. Desktop recording mode
B. Secure Session on the RPA Agent
C. Only attended robots launched by users
D. Composer test mode

**Resposta correta: B**
**Por que:** O *Secure Session* permite que o robô crie sua própria sessão Windows virtual, permitindo execuções em background (unattended) sem necessidade de um monitor físico.

---

**10. A process is being moved from Test to Production in RPA Manager. What is the primary expectation before switching the lifecycle stage?**
A. The Recorder file compiles successfully
B. The process has at least one failure to validate logs
C. The process executed successfully in a controlled test environment
D. The process is triggered only once in sandbox

**Resposta correta: C**
**Por que:** A fase de *Test* serve para validar se a lógica construída no Builder funciona conforme o esperado antes de ser liberada para o ambiente produtivo.

---

**11. NTO wants to analyze savings and business impact of RPA automations. Which RPA Manager capability best supports this?**
A. UI Automation activities in Builder
B. Dashboard de Análise (ROI and time savings)
C. Recorder playback feature
D. Local Windows Task Scheduler

**Resposta correta: B**
**Por que:** O Dashboard de Análise do RPA Manager consolida dados de execução para mostrar o quanto de tempo e dinheiro a empresa está economizando com as automações.

---

**12. A candidate suggests using Composer instead of RPA for a legacy desktop app with no APIs but simple, low‑volume usage. Which argument best supports choosing RPA instead?**
A. Composer does not support any SaaS connectors
B. RPA is the only tool that can interact via UI when no API exists
C. Composer cannot call HTTP endpoints
D. RPA is always cheaper than Composer

**Resposta correta: B**
**Por que:** O Composer não consegue interagir com telas de aplicativos desktop; ele se comunica via APIs. Se não há API, o RPA é a única opção técnica viável.

---

**13. A scenario describes that business wants non‑technical users to monitor the health of bots and restart failed items. Which interface should they primarily use?**
A. RPA Builder
B. RPA Manager – Process Operations
C. Anypoint Studio
D. Local bot logs only

**Resposta correta: B**
**Por que:** *Process Operations* é a interface web simplificada do RPA Manager voltada para o monitoramento e operação dos processos publicados.

---

**14. A process candidate has extremely low volume but high financial impact and is performed monthly. What is the most appropriate guidance for the exam?**
A. Automatically reject it as an RPA candidate
B. Consider RPA only if the process is complex but stable and rules‑based
C. Only use RPA for daily processes
D. Only Composer can handle monthly scenarios

**Resposta correta: B**
**Por que:** Embora o volume seja baixo, o alto impacto financeiro e a estabilidade podem justificar o RPA. O volume não é o único critério de seleção.

---

**15. A company wants to avoid building multiple RPA processes that log into the same system with different credentials and logic. Which practice best aligns with C4E and reuse?**
A. Duplicate login logic in every bot for flexibility
B. Publish a shared login automation as an RPA asset in Exchange
C. Force all teams to build their own logins from scratch
D. Move all logins to unmanaged scripts outside RPA

**Resposta correta: B**
**Por que:** Criar automações modulares (como um login comum) e compartilhá-las no Exchange é a base da estratégia de reuso da MuleSoft.

---

## 📝 Questões de 16 a 30 (Prova 2)

**16. AnyAirlines is evaluating several candidate processes for RPA. Which combination best fits the Evaluation phase output in RPA Manager?**
A. A list of UI selectors for each button
B. A scorecard showing automation fitness and expected ROI
C. A deployment package for production agents
D. A log of all bot executions

**Resposta correta: B**
**Por que:** O resultado da fase de *Evaluation* é um relatório (scorecard) que ajuda a decidir se o processo deve ou não seguir para desenvolvimento.

---

**17. A scenario lists the following order: Build → Evaluation → Production → Test. What is the correct lifecycle sequence in MuleSoft RPA?**
A. Design → Evaluation → Test → Build → Production
B. Evaluation → Design → Build → Test → Production
C. Evaluation → Build → Design → Production → Test
D. Design → Build → Production → Test → Evaluation

**Resposta correta: B**
**Por que:** A sequência correta começa pela Avaliação, seguida pelo Desenho (BPMN), Construção (Builder), Teste e finalmente Produção.

---

**18. NTO wants to ensure that the workflow implemented in Builder matches the business process diagram. Which standard and phase are most relevant?**
A. BPMN diagram created in the Design phase
B. JSON schema generated during Build
C. Swagger definition imported into RPA Manager
D. ER diagram of the database

**Resposta correta: A**
**Por que:** O MuleSoft RPA usa o padrão BPMN 2.0 na fase de *Design* para mapear o fluxo do processo que será posteriormente implementado.

---

**19. A candidate solution jumps directly from Recorder output to Production without modifications. Why is this generally wrong?**
A. Recorder already optimizes selectors for all systems
B. Recorder only generates a skeleton and requires refinement in Builder
C. Recorder cannot store any actions
D. Recorder automatically handles all errors

**Resposta correta: B**
**Por que:** O Recorder captura os passos básicos, mas a automação robusta (com tratamento de erros, variáveis e seletores estáveis) deve ser feita no Builder.

---

**20. A process automates a web application that changes CSS classes frequently but keeps HTML IDs stable. What is the recommended selector strategy?**
A. Use image‑based recognition only
B. Use stable object‑based selectors like IDs or robust XPaths
C. Use random wait times and screen coordinates
D. Use manual keyboard navigation only

**Resposta correta: B**
**Por que:** Seletores baseados em IDs estáveis são muito mais confiáveis do que reconhecimento de imagem ou classes CSS que mudam frequentemente.

---

**21. A legacy desktop app has no accessible object model and uses fixed‑position buttons. Which two techniques are most likely for RPA to interact with it?**
A. Object‑based selectors on HTML elements
B. Image‑based recognition and coordinate‑based clicks
C. Direct SQL queries to the backend database
D. External Services in Salesforce Flow

**Resposta correta: B**
**Por que:** Em sistemas legados "fechados", o robô precisa "enxergar" o botão via imagem ou clicar em coordenadas específicas da tela.

---

**22. A scenario describes OCR being used to read text from scanned PDFs before entering data into an ERP. Where does this capability typically live in MuleSoft RPA?**
A. In RPA Manager dashboards
B. In Builder activities that support OCR engines
C. In Anypoint Monitoring only
D. In Salesforce Flow Fault paths

**Resposta correta: B**
**Por que:** O reconhecimento óptico de caracteres (OCR) é uma funcionalidade disponível como atividade dentro do RPA Builder.

---

**23. During testing, a bot fails when a desktop window takes longer than usual to appear. Which adjustment is most appropriate?**
A. Disable all waits to speed execution
B. Increase timeout and implement retries with screenshots on failure
C. Replace RPA with Composer
D. Run the bot only during off‑hours

**Resposta correta: B**
**Por que:** Aumentar o tempo de espera (timeout) e capturar evidências (screenshots) ajuda o robô a ser mais resiliente a variações de performance do sistema.

---

**24. NTO wants to distinguish between technical errors (window not found) and business exceptions (invalid ID) in reports. How should the process be designed?**
A. Treat all errors as business exceptions
B. Use dedicated error handling blocks and raise specific business exceptions for data issues
C. Ignore exceptions and rely on logs only
D. Let the operating system classify errors automatically

**Resposta correta: B**
**Por que:** Separar os tipos de erro permite que a equipe de TI cuide dos problemas técnicos e a equipe de negócio cuide dos problemas de dados.

---

**25. A process frequently fails because the target application was updated and a button label changed slightly. Which practice best minimizes future maintenance effort?**
A. Use generic selectors based on window position only
B. Use robust selectors focusing on stable attributes instead of visible text
C. Re‑record the entire process after every minor change
D. Abort automation and switch to manual processing

**Resposta correta: B**
**Por que:** Evitar depender de textos visíveis (labels) e usar atributos técnicos estáveis reduz a quebra da automação quando a UI muda.

---

**26. A candidate suggests executing RPA bots only in attended mode on users’ desktops for all critical processes. Which downside does the exam expect you to recognize?**
A. Attended mode cannot use Credential Manager
B. Attended bots cannot access web applications
C. It reduces scalability and breaks the idea of fully automated, scheduled runs
D. It removes the ability to log errors

**Resposta correta: C**
**Por que:** O modo *Attended* (assistido) exige um humano para iniciar a tarefa, o que impede a escala massiva e a automação de processos noturnos ou de alto volume.

---

**27. A banking process must run at night without any human present, accessing multiple secure systems. Which combination is most aligned with best practices?**
A. Attended bots with passwords typed by operators
B. Secure Session plus Credential Manager with scheduled execution
C. Local scripts storing passwords in plain text
D. Manual night shifts by staff

**Resposta correta: B**
**Por que:** *Secure Session* lida com a sessão Windows e *Credential Manager* lida com as senhas de forma segura, permitindo execução 100% autônoma.

---

**28. A scenario describes heavy reuse of the same sub‑workflow across several RPA processes (for example, “open SAP session”). How should this be managed?**
A. Duplicate the activities in every process
B. Create a reusable component and share it as an RPA asset
C. Implement it separately in each bot without documentation
D. Move this logic fully into Salesforce Flow

**Resposta correta: B**
**Por que:** Criar componentes reutilizáveis economiza tempo de desenvolvimento e facilita a manutenção futura.

---

**29. A candidate process is selected mainly because it uses many different systems and seems “interesting” for RPA developers, but it has low volume and unclear rules. What is the recommended decision?**
A. Approve immediately because complexity justifies RPA
B. Reject or postpone until the process is standardized and value is clear
C. Implement only half of the steps
D. Split it randomly across many bots

**Resposta correta: B**
**Por que:** Complexidade por si só não justifica o RPA. O processo deve trazer valor claro ao negócio e ter regras bem definidas.

---

**30. A question contrasts “record‑and‑playback only” with “structured workflow designed in Builder using BPMN concepts and parameters”. Which option better represents a production‑ready approach?**
A. Record‑and‑playback only, because it is faster
B. Structured Builder workflow aligned with BPMN design and parameterized data
C. Manual execution without any automation
D. Only scripting in external tools, without RPA platform

**Resposta correta: B**
**Por que:** Automações profissionais exigem estrutura, tratamento de erro e parametrização, o que só é possível através de um fluxo estruturado no Builder.

---

## 📝 Questões de 31 a 45 (Prova 3)

**31. AnyAirlines reports that a bot suddenly stopped clicking the “Save” button in a web app after a browser update. What is the most appropriate first action?**
A. Rebuild the entire RPA process from scratch
B. Update the selector (XPath/locator) in RPA Builder and republish
C. Increase machine CPU and memory
D. Disable SSL in the browser

**Resposta correta: B**
**Por que:** Atualizações de navegadores podem mudar a estrutura do DOM da página. A solução é ajustar o seletor técnico para que o robô encontre o botão novamente.

---

**32. An exam question describes “CPF inválido” being detected by the bot when validating input data. How should this failure be classified?**
A. Technical exception
B. Business exception
C. Network outage
D. Infrastructure failure

**Resposta correta: B**
**Por que:** Erros nos dados (como um CPF inválido) são regras de negócio, não falhas técnicas da ferramenta ou da rede.

---

**33. A bot cannot find a window because the application server is down. What is the most appropriate handling?**
A. Treat as business exception and send to human review queue
B. Treat as technical exception and implement retry with exponential backoff
C. Ignore the error and continue processing
D. Ask the end‑user to fix it manually every time

**Resposta correta: B**
**Por que:** Se o servidor está fora, é um erro técnico temporário. O robô deve tentar novamente após alguns instantes antes de desistir.

---

**34. NTO wants to provide detailed evidence when a technical error occurs in production. Which design choice best supports troubleshooting?**
A. Disable all logs for performance
B. Capture screenshots and key context in error handling blocks
C. Store errors only in local text files on the bot machine
D. Send only a generic email without details

**Resposta correta: B**
**Por que:** Screenshots são fundamentais no RPA para entender o que o robô estava "vendo" no exato momento da falha.

---

**35. A scenario describes bots using shared Windows accounts that multiple humans also know. Why is this problematic from an exam perspective?**
A. It prevents bots from running in Secure Session
B. It violates security and auditability; credentials should be managed centrally and not shared
C. It makes bots faster than allowed
D. It is required for Credential Manager

**Resposta correta: B**
**Por que:** O uso de contas compartilhadas impede a rastreabilidade de quem realizou a ação, violando princípios básicos de segurança corporativa.

---

**36. A financial institution requires that no one, including developers, knows the actual passwords used by bots. Which RPA Manager feature should be emphasized?**
A. Logger configuration
B. Credential Manager with role‑based access
C. Local Windows registry keys
D. Recorder encryption

**Resposta correta: B**
**Por que:** O Credential Manager com RBAC garante que apenas o robô e o administrador do sistema tenham acesso às credenciais sensíveis.

---

**37. During testing, a bot encounters invalid business data and raises a business exception, sending the case to a human analyst. What is the main benefit of this pattern?**
A. Hides technical problems from business users
B. Ensures that data issues are routed to the right human decision point
C. Reduces the need for monitoring
D. Guarantees that no manual work is ever needed

**Resposta correta: B**
**Por que:** Exceções de negócio permitem que o robô "pule" itens problemáticos e os entregue para um humano resolver, sem parar a execução do restante da fila.

---

**38. A scenario states that multiple RPA processes must be moved from Test to Production while maintaining clear separation of environments. What is a recommended practice?**
A. Use the same credentials and endpoints in all stages
B. Configure distinct environments and lifecycles for Test and Production in RPA Manager
C. Only test directly in Production
D. Run Test and Production on the same Windows session

**Resposta correta: B**
**Por que:** Ambientes de Teste e Produção devem ser isolados no RPA Manager para evitar que execuções de teste afetem dados reais de produção.

---

**39. NTO sees that some robots occasionally fail due to temporary network issues. Which combination best aligns with robust error handling?**
A. Immediate permanent failure on first error
B. Retry with exponential backoff and escalation if threshold is exceeded
C. Infinite retries without alerting anyone
D. Manual restart only, without any automation

**Resposta correta: B**
**Por que:** A retentativa com espera exponencial é a melhor prática para lidar com instabilidades de rede sem intervenção humana imediata.

---

**40. An exam option suggests that “Secure Session requires a human to stay logged into Windows”. Why is this option incorrect?**
A. Secure Session is only for Linux
B. Secure Session creates its own virtual session and does not need a logged‑in user
C. Secure Session disables bot execution
D. Secure Session is only for Composer

**Resposta correta: B**
**Por que:** A grande vantagem da *Secure Session* é justamente permitir que o robô rode sem precisar de uma sessão de usuário ativa ou monitor ligado.

---

**41. A company wants to ensure that only authorized operations staff can restart failed bot runs. Where should this control be configured?**
A. In local Windows user accounts only
B. In RPA Manager roles and permissions
C. In the browser cache
D. In Composer project settings

**Resposta correta: B**
**Por que:** Toda a governança de acesso e operação das automações de RPA é feita através do portal RPA Manager.

---

**42. A scenario shows a process where UI changes frequently and APIs are available. The option proposes using RPA instead of APIs. Why is this likely a “trap” answer?**
A. RPA cannot interact with UIs
B. Best practice prefers API‑based integrations when usable, keeping RPA for no‑API cases
C. APIs are always slower than RPA
D. Exams never mention RPA

**Resposta correta: B**
**Por que:** APIs são mais rápidas, seguras e estáveis que automação de interface. O exame sempre vai preferir a API se ela estiver disponível.

---

**43. An exam case describes an overnight batch bot that processes thousands of records. What is the most important monitoring consideration?**
A. Manual checking of each desktop in the morning
B. Centralized logging and dashboards in RPA Manager (and Anypoint Monitoring if APIs are involved)
C. Relying on users to report problems only
D. Disabling all alerts to avoid noise

**Resposta correta: B**
**Por que:** Automações em lote exigem monitoramento centralizado para que se possa verificar o sucesso/falha de milhares de transações de forma eficiente.

---

**44. NTO wants to avoid running more parallel bots than licensed or than the machine can support. What should be configured?**
A. API rate limiting only
B. Proper RPA Agent capacity and scheduling aligned with license and hardware
C. More Screen Flows in Salesforce
D. Extra manual shifts

**Resposta correta: B**
**Por que:** O agendamento no RPA Manager deve levar em conta o número de licenças de robôs e a capacidade técnica (CPU/RAM) das máquinas executoras.

---

**45. A question offers the following four choices about handling errors in RPA:
1) Ignore errors
2) Raise generic failures only
3) Separate technical and business exceptions with targeted handling
4) Stop using RPA
Which choice is most aligned with MuleSoft RPA best practices?**
A. 1 only
B. 2 only
C. 3 only
D. 4 only

**Resposta correta: C**
**Por que:** O tratamento de erro profissional no RPA exige distinguir falhas de sistema de falhas de dados de negócio para que cada uma tenha o fluxo de correção adequado.
