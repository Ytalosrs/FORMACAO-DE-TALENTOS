const MODULES = [
  { id: 1, code: "M1", title: "Módulo 1: Melhores Práticas de Hiperautomação", weight: "20%" },
  { id: 2, code: "M2", title: "Módulo 2: MuleSoft RPA", weight: "17%" },
  { id: 3, code: "M3", title: "Módulo 3: MuleSoft Composer", weight: "12%" },
  { id: 4, code: "M4", title: "Módulo 4: Salesforce Flow", weight: "13%" },
  { id: 5, code: "M5", title: "Módulo 5: Anypoint Platform & APIs", weight: "15%" },
  { id: 6, code: "M6", title: "Módulo 6: Monitoring & API Manager", weight: "7%" },
  { id: 7, code: "M7", title: "Módulo 7: Anypoint Exchange", weight: "8%" },
  { id: 8, code: "M8", title: "Módulo 8: Flow Orchestration", weight: "8%" }
];

const QUESTION_BANK = {
  "M1-P1": [
    {
      id: "M1-P1-Q1",
      text: "AnyAirlines wants to automate checking customer loyalty status in a legacy green-screen system with no APIs. What is the most appropriate primary technology?",
      options: {
        "A": "MuleSoft Composer calling a REST API",
        "B": "MuleSoft RPA with screen automation",
        "C": "Salesforce Flow with HTTP Callout",
        "D": "Anypoint Platform Experience API only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Seleção de ferramenta"]
    },
    {
      id: "M1-P1-Q2",
      text: "Northern Trail Outfitters (NTO) wants to quickly sync standard objects between Salesforce and NetSuite using clicks, not code. Which solution best fits the requirement?",
      options: {
        "A": "Anypoint Studio with custom DataWeave transformations",
        "B": "MuleSoft RPA recording user actions in both systems",
        "C": "MuleSoft Composer with prebuilt SaaS connectors",
        "D": "Salesforce Flow with Scheduled Path and custom Apex"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Composer", "No-code"]
    },
    {
      id: "M1-P1-Q3",
      text: "A company needs to process millions of transaction records nightly, aggregating data from multiple databases. Which component should be the core of this integration?",
      options: {
        "A": "MuleSoft RPA with multiple bots in parallel",
        "B": "MuleSoft Composer flows triggered every 5 minutes",
        "C": "Anypoint Platform APIs with batch processing",
        "D": "Salesforce Flow invoked by Platform Events only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Anypoint", "Volume alto"]
    },
    {
      id: "M1-P1-Q4",
      text: "A project team wants to avoid building multiple logins to the same legacy ERP for different automations. What is the best practice aligned with C4E?",
      options: {
        "A": "Embed login logic inside every bot individually",
        "B": "Reuse a shared RPA process published in Anypoint Exchange",
        "C": "Implement login logic in a Salesforce Screen Flow",
        "D": "Configure separate credentials in each Composer flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Reuso", "C4E"]
    },
    {
      id: "M1-P1-Q5",
      text: "A customer asks: \"We need the fastest no-code way to connect Salesforce and ServiceNow with simple field mappings.\" Which two dimensions from the tool selection matrix are most relevant to justify using Composer?",
      options: {
        "A": "Volume and Interface",
        "B": "Complexity and User Profile",
        "C": "Volume and Protocol Complexity",
        "D": "Governance and Advanced Security"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Tool selection"]
    },
    {
      id: "M1-P1-Q6",
      text: "NTO wants to minimize the impact of a flaky on-premises database during request/response lookups in Anypoint APIs. What is the most efficient way to protect the consumer experience?",
      options: {
        "A": "Use RPA to read database screens instead of APIs",
        "B": "Implement exponential backoff and retries in the API",
        "C": "Move all logic into Salesforce Flows",
        "D": "Call the database directly from Composer on every request"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resiliência", "APIs"]
    },
    {
      id: "M1-P1-Q7",
      text: "A solution architect wants to ensure end-to-end testing of a new hyperautomation scenario before the legacy system is ready. Which component should be used to simulate backend APIs?",
      options: {
        "A": "MuleSoft RPA Recorder",
        "B": "Anypoint Exchange Mocking Service",
        "C": "Salesforce Sandbox with only partial data",
        "D": "Production database with masked records"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Mocking Service", "Testing"]
    },
    {
      id: "M1-P1-Q8",
      text: "In a complex flow involving Salesforce, RPA and Composer, one transaction failed. Logs show that the robot could not open a desktop window. How should the error be classified?",
      options: {
        "A": "Business exception",
        "B": "Integration exception",
        "C": "Technical exception in the RPA layer",
        "D": "Data quality exception"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA", "Erros técnicos"]
    },
    {
      id: "M1-P1-Q9",
      text: "A retail company already exposes a stable Customer System API on Anypoint. A new chatbot experience must reuse this data. What is the most efficient way to design the solution?",
      options: {
        "A": "Build a new System API specifically for the chatbot",
        "B": "Call the database directly from Einstein Bot",
        "C": "Create an Experience API on top of the existing System API",
        "D": "Use RPA to query the database with a headless client"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["API-led", "Experience API", "Reuso"]
    },
    {
      id: "M1-P1-Q10",
      text: "A bank wants to avoid duplicate processing if a request message is accidentally sent twice to an API that triggers RPA. Which concept is most important here?",
      options: {
        "A": "Idempotency of API operations",
        "B": "Horizontal scaling of workers",
        "C": "API proxying with Flex Gateway",
        "D": "Scheduler-based throttling only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Idempotência", "APIs"]
    },
    {
      id: "M1-P1-Q11",
      text: "In an end-to-end test of a hyperautomation flow, which is the most efficient way to isolate where an error occurred?",
      options: {
        "A": "Disable logs and enable only monitoring dashboards",
        "B": "Test the entire chain only from the user interface",
        "C": "Validate RPA, integration APIs and target systems independently",
        "D": "Retry the entire flow repeatedly until it passes"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Testing", "Observabilidade"]
    },
    {
      id: "M1-P1-Q12",
      text: "A process involves a long-running human approval plus a short, technical API call. When designing the architecture, which tool should handle the long-running orchestration?",
      options: {
        "A": "Salesforce Flow Orchestration",
        "B": "MuleSoft Composer only",
        "C": "Anypoint Experience API",
        "D": "MuleSoft RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Flow Orchestration", "Orquestração longa"]
    },
    {
      id: "M1-P1-Q13",
      text: "A candidate proposes putting all heavy data transformations into System APIs to keep Process APIs \"thin\". Why is this not aligned with MuleSoft best practices?",
      options: {
        "A": "System APIs must not connect to any databases",
        "B": "Process APIs are responsible for orchestration and business logic",
        "C": "Experience APIs cannot perform transformations",
        "D": "RPA bots should handle transformations instead"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Process API"]
    },
    {
      id: "M1-P1-Q14",
      text: "Which option best describes API-led Connectivity in the context of hyperautomation?",
      options: {
        "A": "Direct point-to-point integrations between all systems",
        "B": "A layered model with System, Process and Experience APIs promoting reuse",
        "C": "A set of UI flows built only in Salesforce",
        "D": "A network of ungoverned webhooks between services"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Arquitetura"]
    },
    {
      id: "M1-P1-Q15",
      text: "During an exam question, a scenario offers four valid-sounding options. Which one is most likely correct according to MuleSoft strategy?",
      options: {
        "A": "The option that recreates existing integrations from scratch",
        "B": "The option that maximizes reuse of existing APIs and assets",
        "C": "The option that adds the greatest number of new components",
        "D": "The option that ignores API-led layers for speed"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Estratégia MuleSoft", "Reuso"]
    }
  ],
  "M1-P2": [
    {
      id: "M1-P2-Q1",
      text: "AnyAirlines already has several point-to-point integrations between SaaS systems. They now want a more governed and reusable architecture. Which approach best aligns with MuleSoft recommendations?",
      options: {
        "A": "Add more scheduled jobs between systems as needed",
        "B": "Replace all integrations with a single monolithic API",
        "C": "Implement API-led connectivity with System, Process and Experience APIs",
        "D": "Move all integrations into Salesforce Flow only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["API-led", "Architecture", "Reuse"]
    },
    {
      id: "M1-P2-Q2",
      text: "NTO wants to expose product prices to multiple channels (web, mobile app, Salesforce). What is the most efficient way to design this according to API-led principles?",
      options: {
        "A": "One Process API that all channels call directly",
        "B": "Separate System APIs for each channel",
        "C": "A shared Product System API plus dedicated Experience APIs per channel",
        "D": "Multiple duplicated APIs per consumer team"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["API-led", "System API", "Experience API"]
    },
    {
      id: "M1-P2-Q3",
      text: "A scenario describes a Composer flow calling an API that performs heavy aggregations across systems. Where should the complex business logic primarily reside?",
      options: {
        "A": "Inside the Composer formula editor",
        "B": "Inside the Salesforce Flow screen logic",
        "C": "Inside a Process API on Anypoint Platform",
        "D": "Inside the RPA bot actions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Process API", "Business logic"]
    },
    {
      id: "M1-P2-Q4",
      text: "A candidate suggests using RPA to automate a system that already exposes robust, secure REST APIs. Which statement best reflects MuleSoft best practice?",
      options: {
        "A": "Acceptable, because RPA is always simpler to configure",
        "B": "Not ideal; prefer API-based integration first and reserve RPA for no-API cases",
        "C": "Required, because exam scenarios always prefer RPA",
        "D": "Required, because APIs cannot be reused in other channels"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "APIs", "Best practice"]
    },
    {
      id: "M1-P2-Q5",
      text: "A retail customer wants near real-time inventory updates between their ERP and Salesforce. Which tool combination best balances speed and maintainability?",
      options: {
        "A": "Only RPA bots reading ERP screens",
        "B": "Anypoint Platform System API for ERP plus Composer for light orchestration",
        "C": "Composer polling ERP database directly every second",
        "D": "Manual CSV uploads by users"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["ERP", "Composer", "System API"]
    },
    {
      id: "M1-P2-Q6",
      text: "A scenario describes a complex multi-step process where a human underwriter reviews cases over several days. Which component should coordinate long-running steps while still leveraging APIs and RPA where needed?",
      options: {
        "A": "Single large RPA process with embedded decision logic",
        "B": "Salesforce Flow Orchestration with background and interactive steps",
        "C": "A large Composer flow with nested If/Else branches",
        "D": "A single Process API with many synchronous calls"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow Orchestration", "Long-running process"]
    },
    {
      id: "M1-P2-Q7",
      text: "In a hyperautomation project, who is primarily responsible for promoting reuse of assets like APIs, RPA processes and fragments according to the C4E model?",
      options: {
        "A": "Only project managers",
        "B": "The Center for Enablement acting as an enablement and governance team",
        "C": "Individual developers working in isolation",
        "D": "External vendors only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["C4E", "Reuse", "Governance"]
    },
    {
      id: "M1-P2-Q8",
      text: "A question describes repeated failures in a hyperautomation chain whenever a legacy system is under heavy load. Which combination best addresses resilience at the integration layer?",
      options: {
        "A": "Remove logs to save processing time",
        "B": "Implement retries with exponential backoff and timeouts in the APIs",
        "C": "Move all logic to RPA bots to hide the problem",
        "D": "Increase Salesforce governor limits"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resilience", "Exponential backoff"]
    },
    {
      id: "M1-P2-Q9",
      text: "A company wants to test a new orchestration between Salesforce Flow and RPA while the final production credentials are not yet available. What is the safest test data strategy?",
      options: {
        "A": "Use real customer data in production systems",
        "B": "Use synthetic/mock data defined in API specifications",
        "C": "Export CSVs from production and mask only names",
        "D": "Duplicate production environment without any anonymization"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Testing", "Mock data"]
    },
    {
      id: "M1-P2-Q10",
      text: "The exam presents four tool choices for a simple SaaS-to-SaaS integration with low volume and business admin ownership. Which one is most aligned with MuleSoft guidance?",
      options: {
        "A": "Anypoint Platform with fully custom APIs",
        "B": "MuleSoft Composer with out-of-the-box connectors",
        "C": "RPA bots simulating all user clicks",
        "D": "Custom Java microservices on Kubernetes"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "SaaS integration"]
    },
    {
      id: "M1-P2-Q11",
      text: "An architect proposes to centralize all error handling in the RPA layer. Why is this approach problematic for hyperautomation?",
      options: {
        "A": "APIs never fail, so this is unnecessary",
        "B": "Each layer (APIs, RPA, Flow, Composer) should handle its own technical concerns",
        "C": "RPA cannot log any errors",
        "D": "Composer has no way to react to failures"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Error handling", "Architecture"]
    },
    {
      id: "M1-P2-Q12",
      text: "A scenario mentions \"avoiding duplicate login implementations across multiple teams\". Which platform capability directly supports this goal?",
      options: {
        "A": "Publishing shared RPA processes and API specs in Anypoint Exchange",
        "B": "Creating separate logins in each project for independence",
        "C": "Storing credentials in local text files",
        "D": "Embedding passwords into hard-coded scripts"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exchange", "Reuse", "Security"]
    },
    {
      id: "M1-P2-Q13",
      text: "NTO wants to quickly pilot a new customer journey using mocked APIs while backend systems are still under design. Which combination best supports this parallel development?",
      options: {
        "A": "RPA Recorder plus production database",
        "B": "Anypoint API Designer and Mocking Service consumed by Flow/Composer",
        "C": "Manual JSON files exchanged over email",
        "D": "Only Salesforce custom objects with no external connectivity"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Mocking Service", "API Designer"]
    },
    {
      id: "M1-P2-Q14",
      text: "A question describes a flow where Salesforce Screen Flows collect data from agents, which is then processed by RPA in a legacy system. Where should the primary user experience be built?",
      options: {
        "A": "In desktop RPA dialogs",
        "B": "In Salesforce Screen Flows integrated with APIs/RPA",
        "C": "In custom Java Swing applications",
        "D": "In raw database client tools"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "User experience"]
    },
    {
      id: "M1-P2-Q15",
      text: "An exam item shows multiple design options. Which is the strongest sign that one option is a \"trap\" rather than the recommended architecture?",
      options: {
        "A": "It emphasizes reuse of existing APIs and assets",
        "B": "It replaces three integrations with a single well-designed Process API",
        "C": "It adds unnecessary components and ignores existing reusable services",
        "D": "It mentions C4E and governance practices"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Exam strategy", "Architecture traps"]
    }
  ],
  "M1-P3": [
    {
      id: "M1-P3-Q1",
      text: "AnyAirlines wants to expose flight status to partners, mobile apps and internal portals. What is the most efficient high-level design?",
      options: {
        "A": "One monolithic API mixing database calls and UI logic",
        "B": "Separate, duplicated APIs for each consumer",
        "C": "System APIs for core data plus Process and Experience APIs for each channel",
        "D": "Only RPA bots reading from the reservation system"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["API-led", "Arquitetura"]
    },
    {
      id: "M1-P3-Q2",
      text: "A scenario offers the option to \"rebuild a Customer System API from scratch\" even though one already exists. Why is this typically wrong?",
      options: {
        "A": "Existing APIs cannot be reused",
        "B": "MuleSoft discourages versioning of APIs",
        "C": "It violates the principle of reuse and increases maintenance",
        "D": "System APIs are not allowed to expose customer data"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Reuso", "System API"]
    },
    {
      id: "M1-P3-Q3",
      text: "NTO needs a quick proof-of-concept integration from Salesforce to a legacy mainframe with no APIs. Which answer best reflects MuleSoft guidance?",
      options: {
        "A": "Start with MuleSoft RPA to simulate user interactions",
        "B": "Wait until a new REST API is built before doing anything",
        "C": "Use Composer directly against the database tables",
        "D": "Only manual rekeying is acceptable"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["RPA", "Legacy systems"]
    },
    {
      id: "M1-P3-Q4",
      text: "In an exam question, one option suggests performing complex aggregations in the Experience API, while another suggests doing it in the Process API. Which is more aligned with API-led?",
      options: {
        "A": "Experience API, because it is closest to the user",
        "B": "Process API, because it centralizes business logic and orchestration",
        "C": "Both are equivalent according to MuleSoft",
        "D": "Neither; logic must always be in System APIs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Process API"]
    },
    {
      id: "M1-P3-Q5",
      text: "A flow uses RPA to fetch data from a legacy claims system and then sends the result to Salesforce. Where should retries and timeouts for unstable connectivity primarily be configured?",
      options: {
        "A": "Inside the Salesforce page layout",
        "B": "In the integration/API layer that receives or calls the RPA process",
        "C": "Inside the user's browser",
        "D": "Nowhere; failures should be ignored"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resiliência", "Retry/Timeout"]
    },
    {
      id: "M1-P3-Q6",
      text: "A candidate chooses an option that adds Salesforce Flow Orchestration plus multiple new APIs when a simple synchronous API call from a Screen Flow would suffice. What kind of trap is this?",
      options: {
        "A": "Alternative technically impossible",
        "B": "Alternative that adds unnecessary complexity",
        "C": "Alternative that improves reuse",
        "D": "Alternative that follows minimal design"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Estratégia de Exame", "Simplicidade"]
    },
    {
      id: "M1-P3-Q7",
      text: "An exam item describes a need for one-time data migration from a CSV file into Salesforce. Which is the most appropriate integration approach?",
      options: {
        "A": "Full API-led architecture with three layers",
        "B": "Complex RPA automation mimicking user input",
        "C": "Native Salesforce data import tools or simple integration",
        "D": "Building long-running orchestrations with many stages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Data Migration", "Simplicidade"]
    },
    {
      id: "M1-P3-Q8",
      text: "A scenario gives two options: call a Process API that orchestrates multiple System APIs, or let Composer directly call each underlying system separately. Which is typically preferred?",
      options: {
        "A": "Composer calling all systems directly for flexibility",
        "B": "A Process API orchestrating System APIs, reused by Composer and other clients",
        "C": "Only RPA calling each system sequentially",
        "D": "Manual synchronization by business users"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Orquestração"]
    },
    {
      id: "M1-P3-Q9",
      text: "A hyperautomation design includes Composer, RPA, Flow and multiple APIs. Which guiding principle helps keep this architecture maintainable?",
      options: {
        "A": "Push every responsibility to a single tool",
        "B": "Use each tool for the role it is strongest at and maximize reuse",
        "C": "Duplicate logic in each layer for redundancy",
        "D": "Prefer UI automation over APIs whenever possible"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Tool for Job", "Manutenibilidade"]
    },
    {
      id: "M1-P3-Q10",
      text: "An option claims that \"creating separate APIs for each consuming application\" improves reuse. Why is this misleading?",
      options: {
        "A": "MuleSoft does not support multiple APIs",
        "B": "True reuse comes from generic System/Process APIs with Experience APIs only when needed",
        "C": "Experience APIs cannot be consumer-specific",
        "D": "Reuse is unrelated to API design"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Reuso", "API-led"]
    },
    {
      id: "M1-P3-Q11",
      text: "A company wants to validate that their architecture still follows best practices one year after go-live. Which practice best supports this?",
      options: {
        "A": "Ignoring C4E and allowing each team to evolve independently",
        "B": "Reviewing assets published in Anypoint Exchange and enforcing reuse policies",
        "C": "Rewriting all integrations annually",
        "D": "Migrating everything to RPA only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["C4E", "Governança"]
    },
    {
      id: "M1-P3-Q12",
      text: "In a multi-choice question, two options look good, but one ignores API-led layers and directly couples front-end to databases. How should this influence the choice?",
      options: {
        "A": "Prefer the option that respects API-led separation, even if more subtle",
        "B": "Prefer the option that bypasses layers for performance",
        "C": "Both are equally acceptable",
        "D": "Choose randomly if both seem possible"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Estratégia de Exame", "Arquitetura"]
    },
    {
      id: "M1-P3-Q13",
      text: "A scenario describes a business user who must maintain a simple integration without developer support. Which integration tool is the exam most likely to expect?",
      options: {
        "A": "Anypoint Studio with complex DataWeave scripts",
        "B": "MuleSoft Composer with guided interface",
        "C": "Custom Java microservices",
        "D": "Low-level HTTP clients"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Citizen Integrator"]
    },
    {
      id: "M1-P3-Q14",
      text: "NTO needs a fast temporary workaround using RPA while the proper APIs are being built. Which statement aligns with best practice?",
      options: {
        "A": "RPA should permanently replace API-based integrations",
        "B": "RPA can act as a bridge, but long-term strategy should be API-led",
        "C": "RPA and APIs should never coexist",
        "D": "APIs are only for external consumers"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Estratégia", "RPA vs API"]
    },
    {
      id: "M1-P3-Q15",
      text: "An exam option describes \"calling the same System API from multiple Experience APIs and from RPA/Composer flows\". How should this be interpreted?",
      options: {
        "A": "As an anti-pattern that must be avoided",
        "B": "As strong evidence of reuse and correct layering",
        "C": "As a sign that the System API is too generic",
        "D": "As a violation of security principles"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Reuso", "API-led"]
    }
  ],
  "M2-P1": [
    {
      id: "M2-P1-Q1",
      text: "AnyAirlines wants to automate a stable, repetitive back-office process currently executed by an operator in a legacy Windows application. There is no API available. What is the most appropriate first technology choice?",
      options: {
        "A": "MuleSoft Composer with HTTP trigger",
        "B": "MuleSoft RPA Builder creating a UI automation process",
        "C": "Salesforce Flow with External Services",
        "D": "Anypoint Platform Experience API only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Legacy Windows", "UI Automation"]
    },
    {
      id: "M2-P1-Q2",
      text: "Northern Trail Outfitters (NTO) wants to decide whether a candidate process is suitable for RPA. Which characteristic most strongly indicates a good fit?",
      options: {
        "A": "Process changes its steps every week",
        "B": "Process is ad-hoc and creative",
        "C": "Process is rule-based, high volume and stable over time",
        "D": "Process is performed once per year by executives"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA Suitability", "Evaluation"]
    },
    {
      id: "M2-P1-Q3",
      text: "A question describes the Evaluation phase inside RPA Manager. What is the most efficient way to use this phase according to best practices?",
      options: {
        "A": "To configure attended robots on users' desktops",
        "B": "To estimate automation potential and business value before building",
        "C": "To deploy processes directly to production workers",
        "D": "To record user clicks automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Evaluation Phase"]
    },
    {
      id: "M2-P1-Q4",
      text: "A company wants traceability of who approved which bot process and when it went to production. Which RPA Manager capability is most relevant?",
      options: {
        "A": "Credential Manager",
        "B": "Process Operations dashboards",
        "C": "Lifecycle with stages like Evaluation, Design, Build, Test, Production",
        "D": "Recorder exports"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA Lifecycle", "Governance"]
    },
    {
      id: "M2-P1-Q5",
      text: "A scenario describes a new process that is still being redesigned by the business team and frequently changes the system steps. What is the best recommendation?",
      options: {
        "A": "Immediately automate with RPA to capture all changes",
        "B": "Wait until the process is stable before committing to RPA",
        "C": "Use RPA only in production, not in test",
        "D": "Replace the process with manual spreadsheets permanently"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Process Stability", "Best Practices"]
    },
    {
      id: "M2-P1-Q6",
      text: "NTO needs to ensure that passwords used by bots are never visible to RPA developers. Which component should be highlighted in the answer?",
      options: {
        "A": "Local configuration files on the bot machine",
        "B": "Credential Manager in RPA Manager",
        "C": "Comments inside the workflow activities",
        "D": "Environment variables on developers' laptops"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "Credential Manager"]
    },
    {
      id: "M2-P1-Q7",
      text: "A candidate solution stores credentials in an Excel file read by the bot at runtime. Why is this not aligned with MuleSoft RPA best practices?",
      options: {
        "A": "Bots cannot read Excel files",
        "B": "Excel files cannot be versioned",
        "C": "Credentials must be stored securely and centrally in Credential Manager",
        "D": "RPA Manager does not allow bots to access files"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Security", "Best Practices"]
    },
    {
      id: "M2-P1-Q8",
      text: "A bank wants to run multiple independent RPA processes in parallel on the same infrastructure to maximize ROI. Which concept is most relevant?",
      options: {
        "A": "Background Steps",
        "B": "Workers in CloudHub",
        "C": "RPA Agents configured to handle multiple processes",
        "D": "Visualforce pages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Scalability", "RPA Agents"]
    },
    {
      id: "M2-P1-Q9",
      text: "A scenario says: \"The bot must run even when no human is logged into Windows and no monitor is attached.\" Which feature enables this behavior?",
      options: {
        "A": "Desktop recording mode",
        "B": "Secure Session on the RPA Agent",
        "C": "Only attended robots launched by users",
        "D": "Composer test mode"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Secure Session", "Unattended RPA"]
    },
    {
      id: "M2-P1-Q10",
      text: "A process is being moved from Test to Production in RPA Manager. What is the primary expectation before switching the lifecycle stage?",
      options: {
        "A": "The Recorder file compiles successfully",
        "B": "The process has at least one failure to validate logs",
        "C": "The process executed successfully in a controlled test environment",
        "D": "The process is triggered only once in sandbox"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Lifecycle", "Testing"]
    },
    {
      id: "M2-P1-Q11",
      text: "NTO wants to analyze savings and business impact of RPA automations. Which RPA Manager capability best supports this?",
      options: {
        "A": "UI Automation activities in Builder",
        "B": "Dashboard de Análise (ROI and time savings)",
        "C": "Recorder playback feature",
        "D": "Local Windows Task Scheduler"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Analysis Dashboard", "ROI"]
    },
    {
      id: "M2-P1-Q12",
      text: "A candidate suggests using Composer instead of RPA for a legacy desktop app with no APIs but simple, low-volume usage. Which argument best supports choosing RPA instead?",
      options: {
        "A": "Composer does not support any SaaS connectors",
        "B": "RPA is the only tool that can interact via UI when no API exists",
        "C": "Composer cannot call HTTP endpoints",
        "D": "RPA is always cheaper than Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Composer vs RPA"]
    },
    {
      id: "M2-P1-Q13",
      text: "A scenario describes that business wants non-technical users to monitor the health of bots and restart failed items. Which interface should they primarily use?",
      options: {
        "A": "RPA Builder",
        "B": "RPA Manager - Process Operations",
        "C": "Anypoint Studio",
        "D": "Local bot logs only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Process Operations", "Monitoring"]
    },
    {
      id: "M2-P1-Q14",
      text: "A process candidate has extremely low volume but high financial impact and is performed monthly. What is the most appropriate guidance for the exam?",
      options: {
        "A": "Automatically reject it as an RPA candidate",
        "B": "Consider RPA only if the process is complex but stable and rules-based",
        "C": "Only use RPA for daily processes",
        "D": "Only Composer can handle monthly scenarios"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Suitability", "Value Assessment"]
    },
    {
      id: "M2-P1-Q15",
      text: "A company wants to avoid building multiple RPA processes that log into the same system with different credentials and logic. Which practice best aligns with C4E and reuse?",
      options: {
        "A": "Duplicate login logic in every bot for flexibility",
        "B": "Publish a shared login automation as an RPA asset in Exchange",
        "C": "Force all teams to build their own logins from scratch",
        "D": "Move all logins to unmanaged scripts outside RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Reuse", "Exchange", "C4E"]
    }
  ],
  "M2-P2": [
    {
      id: "M2-P2-Q1",
      text: "AnyAirlines is evaluating several candidate processes for RPA. Which combination best fits the Evaluation phase output in RPA Manager?",
      options: {
        "A": "A list of UI selectors for each button",
        "B": "A scorecard showing automation fitness and expected ROI",
        "C": "A deployment package for production agents",
        "D": "A log of all bot executions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Evaluation Phase", "RPA Manager"]
    },
    {
      id: "M2-P2-Q2",
      text: "A scenario lists the following order: Build -> Evaluation -> Production -> Test. What is the correct lifecycle sequence in MuleSoft RPA?",
      options: {
        "A": "Design -> Evaluation -> Test -> Build -> Production",
        "B": "Evaluation -> Design -> Build -> Test -> Production",
        "C": "Evaluation -> Build -> Design -> Production -> Test",
        "D": "Design -> Build -> Production -> Test -> Evaluation"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Lifecycle", "Methodology"]
    },
    {
      id: "M2-P2-Q3",
      text: "NTO wants to ensure that the workflow implemented in Builder matches the business process diagram. Which standard and phase are most relevant?",
      options: {
        "A": "BPMN diagram created in the Design phase",
        "B": "JSON schema generated during Build",
        "C": "Swagger definition imported into RPA Manager",
        "D": "ER diagram of the database"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Design Phase", "BPMN"]
    },
    {
      id: "M2-P2-Q4",
      text: "A candidate solution jumps directly from Recorder output to Production without modifications. Why is this generally wrong?",
      options: {
        "A": "Recorder already optimizes selectors for all systems",
        "B": "Recorder only generates a skeleton and requires refinement in Builder",
        "C": "Recorder cannot store any actions",
        "D": "Recorder automatically handles all errors"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Recorder", "Builder", "Best Practices"]
    },
    {
      id: "M2-P2-Q5",
      text: "A process automates a web application that changes CSS classes frequently but keeps HTML IDs stable. What is the recommended selector strategy?",
      options: {
        "A": "Use image-based recognition only",
        "B": "Use stable object-based selectors like IDs or robust XPaths",
        "C": "Use random wait times and screen coordinates",
        "D": "Use manual keyboard navigation only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Selectors", "Robustness"]
    },
    {
      id: "M2-P2-Q6",
      text: "A legacy desktop app has no accessible object model and uses fixed-position buttons. Which two techniques are most likely for RPA to interact with it?",
      options: {
        "A": "Object-based selectors on HTML elements",
        "B": "Image-based recognition and coordinate-based clicks",
        "C": "Direct SQL queries to the backend database",
        "D": "External Services in Salesforce Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Image Recognition", "Legacy Apps"]
    },
    {
      id: "M2-P2-Q7",
      text: "A scenario describes OCR being used to read text from scanned PDFs before entering data into an ERP. Where does this capability typically live in MuleSoft RPA?",
      options: {
        "A": "In RPA Manager dashboards",
        "B": "In Builder activities that support OCR engines",
        "C": "In Anypoint Monitoring only",
        "D": "In Salesforce Flow Fault paths"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["OCR", "Builder Activities"]
    },
    {
      id: "M2-P2-Q8",
      text: "During testing, a bot fails when a desktop window takes longer than usual to appear. Which adjustment is most appropriate?",
      options: {
        "A": "Disable all waits to speed execution",
        "B": "Increase timeout and implement retries with screenshots on failure",
        "C": "Replace RPA with Composer",
        "D": "Run the bot only during off-hours"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resilience", "Timeouts"]
    },
    {
      id: "M2-P2-Q9",
      text: "NTO wants to distinguish between technical errors (window not found) and business exceptions (invalid ID) in reports. How should the process be designed?",
      options: {
        "A": "Treat all errors as business exceptions",
        "B": "Use dedicated error handling blocks and raise specific business exceptions for data issues",
        "C": "Ignore exceptions and rely on logs only",
        "D": "Let the operating system classify errors automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Error Handling", "Exceptions"]
    },
    {
      id: "M2-P2-Q10",
      text: "A process frequently fails because the target application was updated and a button label changed slightly. Which practice best minimizes future maintenance effort?",
      options: {
        "A": "Use generic selectors based on window position only",
        "B": "Use robust selectors focusing on stable attributes instead of visible text",
        "C": "Re-record the entire process after every minor change",
        "D": "Abort automation and switch to manual processing"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Maintenance", "Selectors"]
    },
    {
      id: "M2-P2-Q11",
      text: "A candidate suggests executing RPA bots only in attended mode on users' desktops for all critical processes. Which downside does the exam expect you to recognize?",
      options: {
        "A": "Attended mode cannot use Credential Manager",
        "B": "Attended bots cannot access web applications",
        "C": "It reduces scalability and breaks the idea of fully automated, scheduled runs",
        "D": "It removes the ability to log errors"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Attended vs Unattended", "Scalability"]
    },
    {
      id: "M2-P2-Q12",
      text: "A banking process must run at night without any human present, accessing multiple secure systems. Which combination is most aligned with best practices?",
      options: {
        "A": "Attended bots with passwords typed by operators",
        "B": "Secure Session plus Credential Manager with scheduled execution",
        "C": "Local scripts storing passwords in plain text",
        "D": "Manual night shifts by staff"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Unattended RPA", "Security"]
    },
    {
      id: "M2-P2-Q13",
      text: "A scenario describes heavy reuse of the same sub-workflow across several RPA processes (for example, \"open SAP session\"). How should this be managed?",
      options: {
        "A": "Duplicate the activities in every process",
        "B": "Create a reusable component and share it as an RPA asset",
        "C": "Implement it separately in each bot without documentation",
        "D": "Move this logic fully into Salesforce Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Reuse", "Components"]
    },
    {
      id: "M2-P2-Q14",
      text: "A candidate process is selected mainly because it uses many different systems and seems \"interesting\" for RPA developers, but it has low volume and unclear rules. What is the recommended decision?",
      options: {
        "A": "Approve immediately because complexity justifies RPA",
        "B": "Reject or postpone until the process is standardized and value is clear",
        "C": "Implement only half of the steps",
        "D": "Split it randomly across many bots"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Project Selection", "Feasibility"]
    },
    {
      id: "M2-P2-Q15",
      text: "A question contrasts \"record-and-playback only\" with \"structured workflow designed in Builder using BPMN concepts and parameters\". Which option better represents a production-ready approach?",
      options: {
        "A": "Record-and-playback only, because it is faster",
        "B": "Structured Builder workflow aligned with BPMN design and parameterized data",
        "C": "Manual execution without any automation",
        "D": "Only scripting in external tools, without RPA platform"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Development Standards", "BPMN"]
    }
  ],
  "M2-P3": [
    {
      id: "M2-P3-Q1",
      text: "AnyAirlines reports that a bot suddenly stopped clicking the \"Save\" button in a web app after a browser update. What is the most appropriate first action?",
      options: {
        "A": "Rebuild the entire RPA process from scratch",
        "B": "Update the selector (XPath/locator) in RPA Builder and republish",
        "C": "Increase machine CPU and memory",
        "D": "Disable SSL in the browser"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Maintenance", "Troubleshooting"]
    },
    {
      id: "M2-P3-Q2",
      text: "An exam question describes \"CPF inválido\" being detected by the bot when validating input data. How should this failure be classified?",
      options: {
        "A": "Technical exception",
        "B": "Business exception",
        "C": "Network outage",
        "D": "Infrastructure failure"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exceptions", "Business Logic"]
    },
    {
      id: "M2-P3-Q3",
      text: "A bot cannot find a window because the application server is down. What is the most appropriate handling?",
      options: {
        "A": "Treat as business exception and send to human review queue",
        "B": "Treat as technical exception and implement retry with exponential backoff",
        "C": "Ignore the error and continue processing",
        "D": "Ask the end-user to fix it manually every time"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exceptions", "Technical Failure"]
    },
    {
      id: "M2-P3-Q4",
      text: "NTO wants to provide detailed evidence when a technical error occurs in production. Which design choice best supports troubleshooting?",
      options: {
        "A": "Disable all logs for performance",
        "B": "Capture screenshots and key context in error handling blocks",
        "C": "Store errors only in local text files on the bot machine",
        "D": "Send only a generic email without details"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Logging", "Troubleshooting"]
    },
    {
      id: "M2-P3-Q5",
      text: "A scenario describes bots using shared Windows accounts that multiple humans also know. Why is this problematic from an exam perspective?",
      options: {
        "A": "It prevents bots from running in Secure Session",
        "B": "It violates security and auditability; credentials should be managed centrally and not shared",
        "C": "It makes bots faster than allowed",
        "D": "It is required for Credential Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "Best Practices"]
    },
    {
      id: "M2-P3-Q6",
      text: "A financial institution requires that no one, including developers, knows the actual passwords used by bots. Which RPA Manager feature should be emphasized?",
      options: {
        "A": "Logger configuration",
        "B": "Credential Manager with role-based access",
        "C": "Local Windows registry keys",
        "D": "Recorder encryption"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "RBAC"]
    },
    {
      id: "M2-P3-Q7",
      text: "During testing, a bot encounters invalid business data and raises a business exception, sending the case to a human analyst. What is the main benefit of this pattern?",
      options: {
        "A": "Hides technical problems from business users",
        "B": "Ensures that data issues are routed to the right human decision point",
        "C": "Reduces the need for monitoring",
        "D": "Guarantees that no manual work is ever needed"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Human-in-the-loop", "Exceptions"]
    },
    {
      id: "M2-P3-Q8",
      text: "A scenario states that multiple RPA processes must be moved from Test to Production while maintaining clear separation of environments. What is a recommended practice?",
      options: {
        "A": "Use the same credentials and endpoints in all stages",
        "B": "Configure distinct environments and lifecycles for Test and Production in RPA Manager",
        "C": "Only test directly in Production",
        "D": "Run Test and Production on the same Windows session"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Environments", "Lifecycle"]
    },
    {
      id: "M2-P3-Q9",
      text: "NTO sees that some robots occasionally fail due to temporary network issues. Which combination best aligns with robust error handling?",
      options: {
        "A": "Immediate permanent failure on first error",
        "B": "Retry with exponential backoff and escalation if threshold is exceeded",
        "C": "Infinite retries without alerting anyone",
        "D": "Manual restart only, without any automation"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resilience", "Retries"]
    },
    {
      id: "M2-P3-Q10",
      text: "An exam option suggests that \"Secure Session requires a human to stay logged into Windows\". Why is this option incorrect?",
      options: {
        "A": "Secure Session is only for Linux",
        "B": "Secure Session creates its own virtual session and does not need a logged-in user",
        "C": "Secure Session disables bot execution",
        "D": "Secure Session is only for Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Secure Session", "Concepts"]
    },
    {
      id: "M2-P3-Q11",
      text: "A company wants to ensure that only authorized operations staff can restart failed bot runs. Where should this control be configured?",
      options: {
        "A": "In local Windows user accounts only",
        "B": "In RPA Manager roles and permissions",
        "C": "In the browser cache",
        "D": "In Composer project settings"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Roles"]
    },
    {
      id: "M2-P3-Q12",
      text: "A scenario shows a process where UI changes frequently and APIs are available. The option proposes using RPA instead of APIs. Why is this likely a \"trap\" answer?",
      options: {
        "A": "RPA cannot interact with UIs",
        "B": "Best practice prefers API-based integrations when usable, keeping RPA for no-API cases",
        "C": "APIs are always slower than RPA",
        "D": "Exams never mention RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Strategy", "RPA vs API"]
    },
    {
      id: "M2-P3-Q13",
      text: "An exam case describes an overnight batch bot that processes thousands of records. What is the most important monitoring consideration?",
      options: {
        "A": "Manual checking of each desktop in the morning",
        "B": "Centralized logging and dashboards in RPA Manager (and Anypoint Monitoring if APIs are involved)",
        "C": "Relying on users to report problems only",
        "D": "Disabling all alerts to avoid noise"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Monitoring", "Batch Processing"]
    },
    {
      id: "M2-P3-Q14",
      text: "NTO wants to avoid running more parallel bots than licensed or than the machine can support. What should be configured?",
      options: {
        "A": "API rate limiting only",
        "B": "Proper RPA Agent capacity and scheduling aligned with license and hardware",
        "C": "More Screen Flows in Salesforce",
        "D": "Extra manual shifts"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Capacity Planning", "Licensing"]
    },
    {
      id: "M2-P3-Q15",
      text: "A question offers the following four choices about handling errors in RPA: 1) Ignore errors 2) Raise generic failures only 3) Separate technical and business exceptions with targeted handling 4) Stop using RPA. Which choice is most aligned with MuleSoft RPA best practices?",
      options: {
        "A": "1 only",
        "B": "2 only",
        "C": "3 only",
        "D": "4 only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Error Handling", "Best Practices"]
    }
  ],
  "M3-P1": [
    {
      id: "M3-P1-Q1",
      text: "AnyAirlines wants a no‑code integration that creates a record in SAP whenever a new Opportunity is closed in Salesforce. Which trigger should be used in Composer?",
      options: {
        "A": "Scheduler trigger",
        "B": "System event trigger on Salesforce",
        "C": "HTTP Listener trigger",
        "D": "Manual run only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Triggers"]
    },
    {
      id: "M3-P1-Q2",
      text: "Northern Trail Outfitters (NTO) needs a flow that runs every night at 02:00 to sync inventory from Google Sheets into Salesforce. Which trigger is most appropriate?",
      options: {
        "A": "System event trigger on Google Sheets",
        "B": "Scheduler trigger configured for 02:00",
        "C": "HTTP Listener triggered by an external system",
        "D": "No trigger; Composer does not support schedules"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Scheduler"]
    },
    {
      id: "M3-P1-Q3",
      text: "A scenario states: “Business admins must configure integrations between Salesforce, Slack and ServiceNow without writing code.” Which tool is the exam most likely expecting?",
      options: {
        "A": "Anypoint Studio",
        "B": "MuleSoft Composer",
        "C": "Salesforce Apex",
        "D": "MuleSoft RPA Builder"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Persona"]
    },
    {
      id: "M3-P1-Q4",
      text: "NTO wants to minimize unnecessary data transfer when using Composer to query ServiceNow. What is the recommended practice?",
      options: {
        "A": "Always select all fields",
        "B": "Select only the fields relevant for the flow",
        "C": "Use SOQL to filter fields",
        "D": "Move filtering to RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Best Practices"]
    },
    {
      id: "M3-P1-Q5",
      text: "A flow needs to process every line in a collection returned from Workday. Which Composer element should be used?",
      options: {
        "A": "If/Else only",
        "B": "For Each loop",
        "C": "Separate flows for each item",
        "D": "Multiple HTTP Listeners"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Loops"]
    },
    {
      id: "M3-P1-Q6",
      text: "A candidate solution maps a single record from Salesforce directly into a list field in another system, without iteration. What problem is most likely?",
      options: {
        "A": "Composer will silently fix the mapping",
        "B": "Only the first item will be processed or the mapping will fail",
        "C": "All records will be processed correctly",
        "D": "Composer will automatically create a For Each"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Mapping"]
    },
    {
      id: "M3-P1-Q7",
      text: "A scenario describes the need to concatenate first name and last name into a single “FullName” field inside Composer. Where should this be done?",
      options: {
        "A": "In an external API only",
        "B": "In the Formula Editor using string functions",
        "C": "In RPA before sending to Composer",
        "D": "Directly in the database"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Formulas"]
    },
    {
      id: "M3-P1-Q8",
      text: "A business user needs to add 30 days to the current date to calculate a due date. Which category of Composer functions is most relevant?",
      options: {
        "A": "Text functions only",
        "B": "Date functions such as ADD_DAYS",
        "C": "Math functions only",
        "D": "Security functions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Date Functions"]
    },
    {
      id: "M3-P1-Q9",
      text: "AnyAirlines wants to test a Composer flow that is triggered by a new record in Salesforce. What is the correct way to use Test Mode?",
      options: {
        "A": "Activate Test Mode and perform the real triggering action within the time window",
        "B": "Click “Run” without providing any data",
        "C": "Test Mode is not available for event‑based triggers",
        "D": "Use only mocked systems; real data is not allowed"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Testing"]
    },
    {
      id: "M3-P1-Q10",
      text: "A scenario explains that Composer Test Mode uses real systems and can create real records. What is the main implication for the exam?",
      options: {
        "A": "It is safe to use in production with any data",
        "B": "Test Mode must be used only in non‑production orgs or with test data",
        "C": "Test Mode uses only mock data",
        "D": "Test Mode cannot show run history"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Testing", "Safety"]
    },
    {
      id: "M3-P1-Q11",
      text: "A flow fails when calling an external system due to a missing required field. What is the expected behavior of Composer?",
      options: {
        "A": "It retries automatically with different field values",
        "B": "It stops at the failing step and marks the run as failed",
        "C": "It skips the step and continues silently",
        "D": "It fixes the field mapping automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Error Handling"]
    },
    {
      id: "M3-P1-Q12",
      text: "NTO wants to understand what data passed through each step of a failed run. Where should they look?",
      options: {
        "A": "In the operating system event viewer",
        "B": "In Composer Run History, inspecting data pills for each step",
        "C": "In Anypoint Studio logs",
        "D": "Only in Salesforce debug logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Troubleshooting"]
    },
    {
      id: "M3-P1-Q13",
      text: "A candidate claims that Composer can replace all Anypoint APIs because it can call any system. Why is this not aligned with best practices?",
      options: {
        "A": "Composer cannot call any external system",
        "B": "Composer is intended for simpler, low‑to‑medium complexity integrations, not full API‑led architectures",
        "C": "Anypoint APIs cannot be reused",
        "D": "Exams do not consider Composer a valid tool"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Positioning"]
    },
    {
      id: "M3-P1-Q14",
      text: "A scenario requires Composer to be invoked from an external, custom web application on demand. Which trigger should be used?",
      options: {
        "A": "System event trigger",
        "B": "Scheduler trigger",
        "C": "HTTP Listener trigger",
        "D": "No trigger, only manual run"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Composer", "HTTP Trigger"]
    },
    {
      id: "M3-P1-Q15",
      text: "A business admin asks which environment is recommended to build and test new Composer flows before moving to production. What is the best answer?",
      options: {
        "A": "Directly in the production org",
        "B": "In a sandbox or dedicated non‑production environment",
        "C": "In any org, there is no difference",
        "D": "In a local file system"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "ALM"]
    }
  ],
  "M3-P2": [
    {
      id: "M3-P2-Q1",
      text: "NTO has a flow that must apply different tax rates depending on the country of the customer. Which Composer feature should be used to branch the logic?",
      options: {
        "A": "For Each",
        "B": "If/Else block",
        "C": "HTTP Listener",
        "D": "Scheduler"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Logic"]
    },
    {
      id: "M3-P2-Q2",
      text: "A scenario describes receiving a list of order items from Salesforce and needing to create one record in an ERP system for each item. Which structure is most appropriate?",
      options: {
        "A": "Single action outside any loop",
        "B": "Multiple parallel flows",
        "C": "For Each loop around the ERP creation step",
        "D": "Repeated HTTP Listeners"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Composer", "Loops"]
    },
    {
      id: "M3-P2-Q3",
      text: "AnyAirlines wants to normalize customer names by trimming spaces and converting them to upper case before sending to an external system. Which functions combination is correct?",
      options: {
        "A": "LOWER + CONCAT",
        "B": "TRIM + UPPER",
        "C": "FORMAT_DATE + TRIM",
        "D": "RAND + UPPER"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "String Functions"]
    },
    {
      id: "M3-P2-Q4",
      text: "A flow must calculate a due date 10 days after the invoice date and send it to another system. Which Composer feature handles this?",
      options: {
        "A": "Math functions only",
        "B": "Date functions in Formula Editor (por exemplo ADD_DAYS)",
        "C": "Manual calculation outside the flow",
        "D": "RPA bot functions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Date Functions"]
    },
    {
      id: "M3-P2-Q5",
      text: "A candidate suggests storing complex JSON in a text field and parsing it manually in another system. Which alternative better aligns with Composer capabilities?",
      options: {
        "A": "Use structured mapping with data pills instead of opaque JSON strings",
        "B": "Always store data as CSV in text fields",
        "C": "Use only static text values",
        "D": "Use RPA to parse JSON"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Data Mapping"]
    },
    {
      id: "M3-P2-Q6",
      text: "A scenario describes frequent failures because values sent to the destination system are null. What is the best way to handle this in Composer?",
      options: {
        "A": "Ignore null values",
        "B": "Use If/Else blocks to validate data before calling the destination",
        "C": "Disable validation in the destination system",
        "D": "Rely only on retries"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Validation"]
    },
    {
      id: "M3-P2-Q7",
      text: "NTO wants to see exactly which values were passed to a connector action during the last run without re‑executing the flow. Where can they find this?",
      options: {
        "A": "System debug logs only",
        "B": "Composer Run History, expanding the specific execution",
        "C": "Local browser cache",
        "D": "Salesforce Setup Audit Trail"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Run History"]
    },
    {
      id: "M3-P2-Q8",
      text: "In Test Mode, how long does Composer typically wait for the trigger event before timing out?",
      options: {
        "A": "A few seconds only",
        "B": "Approximately 10 minutes, depending on configuration",
        "C": "24 hours",
        "D": "It does not wait; it runs immediately"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Test Mode"]
    },
    {
      id: "M3-P2-Q9",
      text: "AnyAirlines wants to reuse the same Composer connection to Salesforce across several flows. What is the best practice?",
      options: {
        "A": "Create a new connection in every flow",
        "B": "Use shared connections configured once and referenced by several flows",
        "C": "Store credentials directly in each step",
        "D": "Use only anonymous connections"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Connections"]
    },
    {
      id: "M3-P2-Q10",
      text: "A candidate solution catches a failed call to an external system and sends a descriptive error message to a Slack channel. What does this represent?",
      options: {
        "A": "Misuse of Composer",
        "B": "A valid pattern for basic error notification",
        "C": "Unsupported integration type",
        "D": "Replacement for all logging needs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Error Notification"]
    },
    {
      id: "M3-P2-Q11",
      text: "A scenario compares two options:\n- Option A: Validate data with If/Else before calling the system\n- Option B: Call the system directly and rely fully on runtime errors\nWhich option is most aligned with Composer best practices?",
      options: {
        "A": "Option A",
        "B": "Option B",
        "C": "Both are identical",
        "D": "Neither is supported"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Best Practices"]
    },
    {
      id: "M3-P2-Q12",
      text: "NTO wants to avoid partial processing where only the first element of a list is handled. Which Composer concept should they verify is configured correctly?",
      options: {
        "A": "Triggers",
        "B": "For Each loops around list operations",
        "C": "Only the HTTP Listener",
        "D": "The sandbox org type"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Loops"]
    },
    {
      id: "M3-P2-Q13",
      text: "A candidate flow uses Composer to orchestrate many complex system interactions, heavy transformations and advanced error handling. What limitation should you keep in mind for the exam?",
      options: {
        "A": "Composer cannot interact with SaaS systems",
        "B": "Composer is designed for simpler logic; complex orchestration and transformations belong in Anypoint APIs",
        "C": "Composer does not support If/Else",
        "D": "Composer cannot call RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Positioning"]
    },
    {
      id: "M3-P2-Q14",
      text: "A scenario describes the need to test a Composer flow without impacting real SAP production data. Which approach is best?",
      options: {
        "A": "Use Test Mode in a sandbox connected to a SAP test environment",
        "B": "Use Test Mode directly against SAP production",
        "C": "Composer cannot be tested",
        "D": "Test only by reading logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Testing"]
    },
    {
      id: "M3-P2-Q15",
      text: "An exam item shows three good‑looking options and one that bypasses all validation, sending raw data directly to the destination. Which type of “pegadinha” is this?",
      options: {
        "A": "Alternative tecnicamente possível, mas insegura ou frágil",
        "B": "Alternativa que exagera na reutilização",
        "C": "Alternativa que usa muitos flows",
        "D": "Alternativa que segue todas as boas práticas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exam Strategy", "Best Practices"]
    }
  ],
  "M3-P3": [
    {
      id: "M3-P3-Q1",
      text: "AnyAirlines wants to build a mission‑critical, high‑volume integration reused by many teams. One option is “implement everything in Composer”. Why is this likely wrong?",
      options: {
        "A": "Composer does not support SaaS connectors",
        "B": "High‑volume, reusable integrations belong in Anypoint APIs, not somente em Composer",
        "C": "Composer cannot send HTTP requests",
        "D": "Composer cannot be monitored"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Positioning"]
    },
    {
      id: "M3-P3-Q2",
      text: "NTO wants business admins to quickly connect Salesforce and Slack for simple notifications without involving developers. Which combination is most aligned with exam expectations?",
      options: {
        "A": "Anypoint Studio + DataWeave",
        "B": "MuleSoft Composer + Slack connector",
        "C": "Custom Java microservice",
        "D": "RPA bot posting to Slack"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Use Case"]
    },
    {
      id: "M3-P3-Q3",
      text: "A scenario states that an integration must be easily consumable by multiple channels (web, mobile, partners) and governed with policies like rate limiting. Which is the best place for the core logic?",
      options: {
        "A": "Composer flow",
        "B": "Anypoint Platform APIs (System/Process/Experience)",
        "C": "Local scripts",
        "D": "Only RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Governance"]
    },
    {
      id: "M3-P3-Q4",
      text: "An exam item offers two options:\n- A) Composer calling each SaaS system directly with many mappings\n- B) Composer calling a Process API that orquestra os sistemas\nWhich is more aligned with reuse and API‑led?",
      options: {
        "A": "A",
        "B": "B"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Composer", "API-led"]
    },
    {
      id: "M3-P3-Q5",
      text: "A candidate suggests using Composer to perform heavy data transformations that already exist in a Process API. What is the better approach?",
      options: {
        "A": "Duplicar a lógica no Composer",
        "B": "Reutilizar o Process API e manter a transformação centralizada nele",
        "C": "Mover a lógica para RPA",
        "D": "Implementar toda a lógica em Screen Flows"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Reuse"]
    },
    {
      id: "M3-P3-Q6",
      text: "A process uses Composer to trigger MuleSoft RPA via its connector for screen automation in a legacy system. What typical pattern does this illustrate?",
      options: {
        "A": "Composer como “orquestração leve” e RPA como “execução pesada”",
        "B": "RPA como orquestrador de Composer",
        "C": "APIs substituindo Composer",
        "D": "Apenas uso de HTTP Listener"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "RPA"]
    },
    {
      id: "M3-P3-Q7",
      text: "AnyAirlines has a Composer flow that fails frequently due to destination system unavailability. Which strategy is most reasonable in this context?",
      options: {
        "A": "Blindly retry infinite times no Composer",
        "B": "Validar dados e, quando possível, mover lógica crítica para APIs com políticas e retry apropriado",
        "C": "Ignorar todas as falhas",
        "D": "Remover logs para “melhorar performance”"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resilience", "Architecture"]
    },
    {
      id: "M3-P3-Q8",
      text: "An option claims that Composer supports complex “try/catch” structures like a full programming language. Why is that likely a pegadinha?",
      options: {
        "A": "Porque Composer não suporta nenhum tipo de lógica",
        "B": "Porque Composer tem lógica limitada; recomenda‑se validar antes e tratar erros de forma simples",
        "C": "Porque Composer é apenas uma IDE",
        "D": "Porque Composer é igual ao Anypoint Studio"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Error Handling"]
    },
    {
      id: "M3-P3-Q9",
      text: "NTO wants to ensure that integrations built by business users do not bypass corporate APIs and governance. Which guideline is most appropriate?",
      options: {
        "A": "Composer deve sempre chamar sistemas diretamente",
        "B": "Composer deve consumir APIs existentes quando disponíveis, em vez de ir direto ao backend",
        "C": "Composer nunca deve ser usado com APIs",
        "D": "Composer deve substituir o API Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Governance"]
    },
    {
      id: "M3-P3-Q10",
      text: "A scenario describes a one‑off data load of thousands of historical records. One answer suggests building a permanent Composer flow for this. Why is this potentially not ideal?",
      options: {
        "A": "Composer não consegue lidar com nenhum volume",
        "B": "Para migração pontual, ferramentas dedicadas ou scripts temporários podem ser mais adequados",
        "C": "Composer não tem conectores para SaaS",
        "D": "Composer só roda em produção"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Data Loading"]
    },
    {
      id: "M3-P3-Q11",
      text: "An exam question describes three options:\n- A) Composer para baixa complexidade entre SaaS\n- B) APIs Anypoint para integrações críticas e reutilizáveis\n- C) RPA para sistemas sem API\nWhich statement best reflects MuleSoft positioning?",
      options: {
        "A": "Apenas A está correta",
        "B": "A, B e C estão corretas e complementares",
        "C": "Apenas C está correta",
        "D": "Nenhuma está correta"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["MuleSoft Strategy", "Positioning"]
    },
    {
      id: "M3-P3-Q12",
      text: "A candidate chooses an option where Composer directly manipulates database tables of a core system instead of calling a System API. Why is this problematic?",
      options: {
        "A": "Porque bancos de dados não podem ser acessados",
        "B": "Porque viola o princípio de desacoplamento e governança (API-led)",
        "C": "Porque Composer não tem conector de banco de dados",
        "D": "Porque RPA deve ser usado"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Best Practices"]
    },
    {
      id: "M3-P3-Q13",
      text: "A scenario asks for the best tool to sync contacts between Salesforce and Google Contacts for a single user, without IT involvement. What is the answer?",
      options: {
        "A": "MuleSoft Composer",
        "B": "Anypoint Platform",
        "C": "Custom Apex Trigger",
        "D": "MuleSoft RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Use Case"]
    },
    {
      id: "M3-P3-Q14",
      text: "Why is it important to use Sandboxes for testing Composer flows?",
      options: {
        "A": "Because Test Mode doesn't work in Production",
        "B": "Because Composer actions in Test Mode create real data in the connected systems",
        "C": "Because Sandboxes are faster",
        "D": "Because Production doesn't support Slack"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Testing"]
    },
    {
      id: "M3-P3-Q15",
      text: "What is the primary target audience for MuleSoft Composer?",
      options: {
        "A": "Java Developers",
        "B": "System Administrators and Business Analysts (Citizen Integrators)",
        "C": "Data Scientists",
        "D": "End users of the mobile app"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Persona"]
    }
  ],
  "M4-P1": [
    {
      id: "M4-P1-Q1",
      text: "AnyAirlines wants a guided screen for agents to capture claim details in Salesforce and then send the data to an API. Which tipo de Flow é mais apropriado?",
      options: {
        "A": "Autolaunched Flow",
        "B": "Screen Flow",
        "C": "Schedule‑Triggered Flow",
        "D": "Record‑Triggered Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Screen Flow"]
    },
    {
      id: "M4-P1-Q2",
      text: "Northern Trail Outfitters (NTO) precisa que, ao criar um novo Contrato, uma automação execute lógica imediatamente sem interface de usuário. Qual tipo de Flow deve ser usado?",
      options: {
        "A": "Screen Flow",
        "B": "Record‑Triggered Flow",
        "C": "Flow Orchestration",
        "D": "Scheduled Flow externo"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Record-Triggered"]
    },
    {
      id: "M4-P1-Q3",
      text: "Um cenário descreve um fluxo complexo de backoffice que deve ser chamado tanto por Apex quanto por uma Orchestration. Qual tipo de Flow é mais adequado como “bloco reutilizável”?",
      options: {
        "A": "Screen Flow",
        "B": "Autolaunched Flow",
        "C": "Record‑Triggered Flow",
        "D": "Workflow Rule"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Autolaunched"]
    },
    {
      id: "M4-P1-Q4",
      text: "AnyAirlines quer que, sempre que uma Opportunity for marcada como “Closed Won”, um processo RPA seja chamado via External Services. Onde essa chamada deve ficar?",
      options: {
        "A": "Em um Screen Flow independente",
        "B": "Em um Record‑Triggered Flow na Opportunity",
        "C": "Em um Flow Orchestration sem gatilho",
        "D": "Em um Apex Trigger apenas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Integration"]
    },
    {
      id: "M4-P1-Q5",
      text: "NTO quer garantir que o mesmo Record‑Triggered Flow seja reutilizável entre ambientes (Sandbox → Produção). O que representa essa definição de fluxo?",
      options: {
        "A": "Flow Metadata migrada por change sets ou DevOps",
        "B": "Logs do Salesforce",
        "C": "Documentação em PDF",
        "D": "Código Java externo"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Flow", "Metadata"]
    },
    {
      id: "M4-P1-Q6",
      text: "Um candidato sugere usar apenas Apex para todas as automações, ignorando Flows. Por que isso não está alinhado com o posicionamento atual da Salesforce?",
      options: {
        "A": "Apex está obsoleto",
        "B": "Salesforce incentiva o uso de Flow como motor declarativo principal, reservando Apex para lógica muito complexa",
        "C": "Flow não suporta integrações",
        "D": "Flows não podem ser testados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Strategy", "Flow vs Apex"]
    },
    {
      id: "M4-P1-Q7",
      text: "Um Screen Flow coleta dados do cliente e, depois, precisa chamar uma API da MuleSoft para validar limite de crédito. Qual recurso do Flow deve ser usado para consumir a especificação dessa API de forma declarativa?",
      options: {
        "A": "Platform Events",
        "B": "External Services",
        "C": "Inbound Email Services",
        "D": "Apex REST Callout escrito manualmente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "External Services"]
    },
    {
      id: "M4-P1-Q8",
      text: "Um cenário descreve um Flow que precisa chamar um endpoint HTTP simples sem possuir um arquivo OpenAPI ou RAML. Qual recurso pode ser usado?",
      options: {
        "A": "HTTP Callout configurado diretamente no Flow",
        "B": "Apenas Apex HTTP classes",
        "C": "Somente Workflow Rules",
        "D": "Visualforce Pages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Flow", "HTTP Callout"]
    },
    {
      id: "M4-P1-Q9",
      text: "AnyAirlines quer usar Einstein Bot para coletar informações de um passageiro e, em seguida, chamar um processo de backoffice via Flow. Qual relacionamento é mais correto?",
      options: {
        "A": "Bot chama Flow, que chama APIs/RPA",
        "B": "Flow chama Bot, que chama APIs",
        "C": "RPA chama Bot, que chama Flow",
        "D": "Composer chama Bot diretamente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Einstein Bot", "Flow"]
    },
    {
      id: "M4-P1-Q10",
      text: "NTO deseja que parte da lógica de cálculo seja reutilizada em vários Flows. Qual recurso do Flow ajuda nessa reutilização?",
      options: {
        "A": "Subflows",
        "B": "Process Builder",
        "C": "Workflow Rules",
        "D": "Approval Processes"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Flow", "Subflows"]
    },
    {
      id: "M4-P1-Q11",
      text: "Um cenário de prova afirma que um Flow deveria processar vários registros de uma vez, mas está tratando apenas um por vez e atingindo governor limits. Qual princípio deve ser lembrado?",
      options: {
        "A": "Bulkification do Flow",
        "B": "Somente uso de Apex",
        "C": "Desativar limites da plataforma",
        "D": "Usar RPA no lugar do Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Flow", "Bulkification"]
    },
    {
      id: "M4-P1-Q12",
      text: "Uma equipe quer que um Flow rode em resposta a um evento externo publicado pela MuleSoft. Qual recurso Salesforce está mais alinhado a esse caso?",
      options: {
        "A": "Email Services",
        "B": "Platform Events como gatilho",
        "C": "Custom Metadata Types",
        "D": "Static Resources"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Platform Events"]
    },
    {
      id: "M4-P1-Q13",
      text: "Um candidato sugere usar Screen Flow para toda lógica, inclusive cenários sem interface. Por que isso pode ser uma má escolha?",
      options: {
        "A": "Screen Flow não suporta apex actions",
        "B": "Autolaunched Flow é mais apropriado para lógica sem UI, facilitando reutilização e orquestração",
        "C": "Screen Flow não suporta subflows",
        "D": "Screen Flow não pode usar External Services"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Best Practices"]
    },
    {
      id: "M4-P1-Q14",
      text: "Um Record‑Triggered Flow faz atualizações em massa, mas está falhando por limites de DML. Qual prática está mais alinhada a boas práticas?",
      options: {
        "A": "Fazer DML dentro de loops sem agrupar registros",
        "B": "Usar padrões de bulkification e evitar DML em loops",
        "C": "Sempre reduzir o número de registros processados",
        "D": "Mover tudo para RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow", "Limits"]
    },
    {
      id: "M4-P1-Q15",
      text: "Um item de prova mostra um cenário simples de automação de CRM com lógica declarativa, sem necessidade de código complexo. Qual ferramenta a prova tende a preferir?",
      options: {
        "A": "Apex triggers apenas",
        "B": "Salesforce Flow",
        "C": "MuleSoft RPA",
        "D": "Custom Java Services"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Tool Selection"]
    }
  ],
  "M4-P2": [
    {
      id: "M4-P2-Q1",
      text: "NTO wants to ensure that a Flow that calls an external MuleSoft API handles timeout errors gracefully without crashing the user experience. Which Flow element is used for this?",
      options: {
        "A": "Fault Paths",
        "B": "Apex Triggers",
        "C": "Validation Rules",
        "D": "Assignment Element"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Flow", "Error Handling"]
    },
    {
      id: "M4-P2-Q2",
      text: "A scenario describes a complex approval process that involves multiple users and steps over several days. Which tool is designed for this long‑running orchestration?",
      options: {
        "A": "Flow Orchestration",
        "B": "Synchronous Apex",
        "C": "Before‑Save Flow",
        "D": "Formula Fields"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Long-running"]
    },
    {
      id: "M4-P2-Q3",
      text: "AnyAirlines needs to combine parallel work streams (e.g., Finance approval and Legal approval) before proceeding to the next step. What is a key feature of Flow Orchestration for this?",
      options: {
        "A": "Stages and Steps (Background/Interactive)",
        "B": "Single threaded Apex",
        "C": "Validation Rules",
        "D": "Outbound Messages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Parallelism"]
    },
    {
      id: "M4-P2-Q4",
      text: "How does Flow Orchestration differ from a standard Flow in terms of user assignment?",
      options: {
        "A": "It cannot assign tasks",
        "B": "It has built‑in mechanisms to assign interactive steps to specific users or groups",
        "C": "It relies solely on email alerts",
        "D": "It only supports system users"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Orchestration", "Assignment"]
    },
    {
      id: "M4-P2-Q5",
      text: "A candidate proposes using Flow Orchestration for a high‑frequency, sub‑second latency transaction. Why is this likely incorrect?",
      options: {
        "A": "Orchestration is optimized for long‑running, multi‑step processes, not low‑latency real‑time transactions",
        "B": "Orchestration is too expensive",
        "C": "Orchestration cannot run on Salesforce",
        "D": "Orchestration does not support data"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Positioning"]
    },
    {
      id: "M4-P2-Q6",
      text: "What is the role of 'Background Steps' in Flow Orchestration?",
      options: {
        "A": "To change the background color of the screen",
        "B": "To execute autolaunched flows (system actions) without user intervention",
        "C": "To play background music",
        "D": "To hide data from users"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Orchestration", "Background Steps"]
    },
    {
      id: "M4-P2-Q7",
      text: "NTO wants to visualize the progress of an Orchestration instance. Where can they see this?",
      options: {
        "A": "Orchestration Runs list view and the visual debugger",
        "B": "Only in Apex debug logs",
        "C": "It is invisible",
        "D": "In the MuleSoft Anypoint Platform only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Monitoring"]
    },
    {
      id: "M4-P2-Q8",
      text: "A scenario describes a requirement to wait for an external system callback before moving to the next stage. Which Orchestration pattern supports this?",
      options: {
        "A": "Pause/Resume or waiting for a platform event in a background step",
        "B": "Infinite loop in Apex",
        "C": "Screen Flow with a timer",
        "D": "Manual refresh"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Wait"]
    },
    {
      id: "M4-P2-Q9",
      text: "How does Flow Orchestration handle 'Interactive Steps'?",
      options: {
        "A": "By launching a Screen Flow for the assigned user",
        "B": "By sending a text message only",
        "C": "By opening a command prompt",
        "D": "By running an Apex job"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Interactive Steps"]
    },
    {
      id: "M4-P2-Q10",
      text: "AnyAirlines wants to trigger an Orchestration when a Case status changes to 'Escalated'. What is the standard way to do this?",
      options: {
        "A": "Record‑Triggered Orchestration",
        "B": "Manual API call only",
        "C": "Scheduled job only",
        "D": "Visualforce button"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Triggers"]
    },
    {
      id: "M4-P2-Q11",
      text: "What is a major benefit of Flow Orchestration over legacy Process Builder?",
      options: {
        "A": "Better visualization of complex multi‑step/multi‑user processes and parallel execution",
        "B": "Process Builder is faster",
        "C": "Orchestration uses less storage",
        "D": "Orchestration requires no configuration"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Strategy", "Comparison"]
    },
    {
      id: "M4-P2-Q12",
      text: "A candidate suggests using Orchestration for simple field updates on the same record. Why is this inefficient?",
      options: {
        "A": "Record‑Triggered Flows are much lighter and faster for simple same‑record updates",
        "B": "Orchestration cannot update fields",
        "C": "Orchestration requires a license for every update",
        "D": "Field updates are not supported"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Best Practices", "Efficiency"]
    },
    {
      id: "M4-P2-Q13",
      text: "NTO needs to ensure that if a step in an Orchestration fails, the entire process can be rolled back or handled gracefully. What feature aids this?",
      options: {
        "A": "Orchestration’s error handling and compensation logic (though limited, improved over time)",
        "B": "Ignoring errors",
        "C": "Deleting the record",
        "D": "Calling support"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Error Handling"]
    },
    {
      id: "M4-P2-Q14",
      text: "A scenario involves a 'Work Guide' component on a record page. What is its purpose in Orchestration?",
      options: {
        "A": "To display the current Interactive Step assigned to the user",
        "B": "To show Apex code",
        "C": "To list all users in the org",
        "D": "To show MuleSoft logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "UI"]
    },
    {
      id: "M4-P2-Q15",
      text: "Which statement best summarizes the relationship between Flow and Orchestration?",
      options: {
        "A": "Flows are the building blocks (steps) that Orchestration organizes into a process",
        "B": "They are competing tools that never work together",
        "C": "Orchestration replaces Apex, Flow replaces HTML",
        "D": "Flow is for data, Orchestration is for UI only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Concepts", "Relationship"]
    }
  ],
  "M4-P3": [
    {
      id: "M4-P3-Q1",
      text: "NTO is debating between using MuleSoft RPA or Flow Orchestration for a specific task. The task involves automating a legacy desktop application without APIs. Which tool is correct?",
      options: {
        "A": "Flow Orchestration",
        "B": "MuleSoft RPA",
        "C": "Salesforce Flow",
        "D": "MuleSoft Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Tool Selection"]
    },
    {
      id: "M4-P3-Q2",
      text: "A scenario requires coordinating a month‑long onboarding process involving HR (manual approval), IT (API provisioning), and Facilities (badge creation). Which tool orchestrates this end‑to‑end?",
      options: {
        "A": "MuleSoft RPA",
        "B": "Flow Orchestration",
        "C": "Anypoint MQ",
        "D": "Batch Apex"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Orchestration", "Use Case"]
    },
    {
      id: "M4-P3-Q3",
      text: "AnyAirlines wants to trigger an RPA process directly from a Salesforce Record‑Triggered Flow. What is the recommended integration pattern?",
      options: {
        "A": "Use External Services to consume the RPA API invoked via Flow",
        "B": "Write Apex to make a SOAP call",
        "C": "It is not possible",
        "D": "Use email to trigger RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Integration", "RPA"]
    },
    {
      id: "M4-P3-Q4",
      text: "A candidate suggests replacing all Flow Orchestrations with MuleSoft Composer. Why is this incorrect?",
      options: {
        "A": "Composer is for integration, not for long‑running multi‑user state machine orchestration",
        "B": "Composer is more expensive",
        "C": "Composer only works with Slack",
        "D": "Orchestration is deprecated"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Positioning", "Comparison"]
    },
    {
      id: "M4-P3-Q5",
      text: "In a Hyperautomation solution, what is the typical role of Flow Orchestration?",
      options: {
        "A": "The 'Conductor' that manages the state and sequence of human and system tasks",
        "B": "The 'Worker' that performs screen scraping",
        "C": "The 'Database' that stores customer records",
        "D": "The 'API Gateway'"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Architecture", "Role"]
    },
    {
      id: "M4-P3-Q6",
      text: "An exam item describes a need to process a list of records in parallel background steps. How does Orchestration handle this?",
      options: {
        "A": "By defining multiple steps in the same stage (Parallel execution)",
        "B": "It forces sequential execution only",
        "C": "It requires multiple Orchestrations",
        "D": "It uses Batch Apex only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Parallelism"]
    },
    {
      id: "M4-P3-Q7",
      text: "What happens to an Orchestration if a Background Step Flow fails?",
      options: {
        "A": "The Orchestration pauses or fails depending on configuration, allowing for intervention",
        "B": "It deletes all data",
        "C": "It automatically restarts from the beginning",
        "D": "It ignores the error"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Error Handling"]
    },
    {
      id: "M4-P3-Q8",
      text: "NTO wants to ensure that a task is reassigned if the primary assignee doesn't act within 24 hours. Which Orchestration feature supports this?",
      options: {
        "A": "Step escalation/expiration logic (SLA)",
        "B": "Validation Rules",
        "C": "RPA Bots",
        "D": "Apex Triggers"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "SLA"]
    },
    {
      id: "M4-P3-Q9",
      text: "A scenario involves a 'Business Exception' where a manager rejects an approval. How should the Orchestration handle this?",
      options: {
        "A": "Route to a different stage or step designed for rejection handling",
        "B": "Crash the system",
        "C": "Delete the record",
        "D": "Send an email and stop"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Logic"]
    },
    {
      id: "M4-P3-Q10",
      text: "Which user license is typically required to run Flow Orchestrations?",
      options: {
        "A": "Salesforce user license with Orchestration permission set (or specific feature license)",
        "B": "Marketing Cloud license",
        "C": "Tableau license",
        "D": "MuleSoft Titanium license"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Licensing", "Orchestration"]
    },
    {
      id: "M4-P3-Q11",
      text: "A candidate confuses 'Flow Builder' with 'Flow Orchestration Builder'. What is the main visual difference?",
      options: {
        "A": "Orchestration Builder organizes elements into Stages and Steps",
        "B": "They look exactly the same",
        "C": "Flow Builder has no canvas",
        "D": "Orchestration Builder is text‑only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["UI", "Builder"]
    },
    {
      id: "M4-P3-Q12",
      text: "Why is 'Context Record' important in Orchestration?",
      options: {
        "A": "It ties the orchestration instance to a specific business record (e.g., Case, Opportunity)",
        "B": "It is not used",
        "C": "It determines the color of the screen",
        "D": "It is used only for logging"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Context"]
    },
    {
      id: "M4-P3-Q13",
      text: "NTO wants to use an Evaluation Flow to decide if a step should start. What does an Evaluation Flow return?",
      options: {
        "A": "A boolean (True/False) indicating if criteria are met",
        "B": "A list of records",
        "C": "A PDF document",
        "D": "An external API response"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Evaluation"]
    },
    {
      id: "M4-P3-Q14",
      text: "A scenario describes a need to audit who approved each step and when. Where is this data natively stored?",
      options: {
        "A": "Orchestration Run and Step Instance objects",
        "B": "In a text file",
        "C": "It is not stored",
        "D": "In the user's browser cache"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Audit"]
    },
    {
      id: "M4-P3-Q15",
      text: "What is the best way to debug a failed Orchestration?",
      options: {
        "A": "Use the 'Orchestration Runs' view to inspect step status and error messages",
        "B": "Guess and redeploy",
        "C": "Ask the user to try again",
        "D": "Check the recycle bin"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Orchestration", "Troubleshooting"]
    }
  ],
  "M5-P1": [
    {
      id: "M5-P1-Q1",
      text: "AnyAirlines wants to modernizar integrações ponto‑a‑ponto e adotar uma arquitetura mais governada. Qual abordagem é mais alinhada à MuleSoft?",
      options: {
        "A": "Adicionar mais integrações diretas entre sistemas",
        "B": "Implementar API‑Led Connectivity com camadas System, Process e Experience",
        "C": "Usar apenas RPA e Composer",
        "D": "Construir um monólito gigante de integração"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "A conectividade baseada em APIs (*API-led Connectivity*) é a metodologia central da MuleSoft para promover agilidade, reuso e governança através de camadas de responsabilidade.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q2",
      text: "Northern Trail Outfitters (NTO) precisa acessar dados do SAP de maneira reutilizável para vários projetos. Que tipo de API deve ser criada primeiro?",
      options: {
        "A": "Experience API",
        "B": "System API para expor dados do SAP",
        "C": "Process API",
        "D": "Apenas um job em lote"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "A *System API* é a camada que 'desbloqueia' os dados dos sistemas de registro (como SAP, ERP, Bancos de Dados) e os expõe de forma padronizada para reuso.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q3",
      text: "Uma empresa precisa combinar dados de Cliente (CRM) e Estoque (ERP) em uma lógica de “Criar Pedido”. Em qual camada isso normalmente vive?",
      options: {
        "A": "System API",
        "B": "Process API",
        "C": "Experience API",
        "D": "Apenas no banco de dados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "A *Process API* é responsável pela orquestração de múltiplas System APIs, aplicação de regras de negócio e agregação de dados.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q4",
      text: "Um aplicativo móvel precisa de um payload específico e simplificado para exibir pedidos a um usuário final. Qual camada deve expor essa interface?",
      options: {
        "A": "System API",
        "B": "Process API",
        "C": "Experience API",
        "D": "API interna do banco"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      explanation: "A *Experience API* é a camada que adapta os dados e funcionalidades para as necessidades específicas de um canal de consumo (Mobile, Web, IoT, etc.).",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q5",
      text: "Em um cenário de prova, uma alternativa sugere colocar toda a transformação de dados diretamente em System APIs. Por que isso é geralmente incorreto?",
      options: {
        "A": "System APIs não podem transformar dados",
        "B": "Transformações e orquestrações de negócio pertencem principalmente a Process APIs",
        "C": "Experience APIs não podem consumir System APIs",
        "D": "Só RPA deve transformar dados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Manter as *System APIs* simples e focadas apenas no acesso ao dado garante que elas sejam mais reutilizáveis. A lógica complexa deve subir para a camada de Processo.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q6",
      text: "O exame apresenta um ciclo: Design → Simulate → Implement → Deploy → Manage. Qual plataforma isso descreve?",
      options: {
        "A": "Composer",
        "B": "Anypoint Platform (API Designer, Mocking Service, Studio, Runtime Manager, API Manager)",
        "C": "Salesforce Setup",
        "D": "Sistema operacional"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Este é o Ciclo de Vida de APIs completo suportado pelas diversas ferramentas da plataforma Anypoint.",
      topics: ["Anypoint Platform", "Lifecycle"]
    },
    {
      id: "M5-P1-Q7",
      text: "NTO quer que times de Flow e RPA comecem a trabalhar antes da implementação real das APIs. Qual recurso é mais relevante?",
      options: {
        "A": "Mocking Service do Anypoint Exchange",
        "B": "Apenas logs em produção",
        "C": "Functional Monitoring",
        "D": "Visualizer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      explanation: "O *Mocking Service* gera uma URL de teste que simula o comportamento da API com base na especificação (RAML/OAS), permitindo desenvolvimento paralelo.",
      topics: ["Anypoint Platform", "Mocking Service"]
    },
    {
      id: "M5-P1-Q8",
      text: "Uma pergunta de prova fala sobre 'desbloquear dados de sistemas centrais e isolar a complexidade do destino'. Qual camada está sendo descrita?",
      options: {
        "A": "Experience API",
        "B": "Process API",
        "C": "System API",
        "D": "Exchange Asset"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      explanation: "As *System APIs* isolam as complexidades técnicas (protocolos proprietários, formatos legados) dos sistemas de backend.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q9",
      text: "Uma empresa publica a especificação de API no Exchange para que Salesforce Flow possa consumi‑la via External Services. Que ativo está sendo aproveitado?",
      options: {
        "A": "API Fragment",
        "B": "API Specification (RAML/OAS)",
        "C": "Template de projeto",
        "D": "RPA Asset"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O *External Services* do Salesforce lê a especificação da API publicada no Exchange para gerar as ações no Flow Builder.",
      topics: ["Anypoint Platform", "Anypoint Exchange"]
    },
    {
      id: "M5-P1-Q10",
      text: "Em um cenário, múltiplas equipes querem consumir a mesma API de clientes para diferentes casos de uso. Qual abordagem é mais eficiente?",
      options: {
        "A": "Criar uma nova API idêntica para cada equipe",
        "B": "Expor uma System API reutilizável e, quando necessário, Experience APIs específicas",
        "C": "Usar apenas integrações ponto‑a‑ponto",
        "D": "Restringir o uso da API a um único time"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Este modelo maximiza o reuso do acesso ao dado (System API) enquanto atende às necessidades específicas de cada projeto (Experience API).",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q11",
      text: "AnyAirlines precisa de controle de acesso, rate limiting e monitoramento central de APIs. Qual componente é responsável principalmente por isso?",
      options: {
        "A": "Anypoint Studio",
        "B": "Runtime Manager",
        "C": "API Manager",
        "D": "RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      explanation: "O *API Manager* é a ferramenta de governança onde políticas de segurança e controle de tráfego são aplicadas às APIs.",
      topics: ["Anypoint Platform", "API Manager"]
    },
    {
      id: "M5-P1-Q12",
      text: "Uma alternativa diz que “Experience APIs devem acessar diretamente bancos de dados, sem System APIs, para reduzir hops”. Como isso deve ser avaliado?",
      options: {
        "A": "Correto; isso reduz latência",
        "B": "Errado; viola separação de responsabilidades da API‑Led",
        "C": "Aceitável apenas para RPA",
        "D": "Recomendado pela MuleSoft"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Acessar o banco diretamente na camada de Experiência cria acoplamento forte e impede que a lógica de acesso ao banco seja reutilizada por outras APIs.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q13",
      text: "Um time deseja versionar contratos de APIs, obter feedback e simular chamadas antes de implementar código. Que ferramenta é usada na fase de Design?",
      options: {
        "A": "Anypoint Studio",
        "B": "API Designer",
        "C": "Runtime Manager",
        "D": "Visualizer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O *API Designer* é o ambiente web para escrever especificações de API (RAML ou OAS) e testá-las via Mocking Service.",
      topics: ["Anypoint Platform", "API Designer"]
    },
    {
      id: "M5-P1-Q14",
      text: "NTO precisa escolher a camada certa para expor dados a um aplicativo de atendimento ao cliente em Salesforce, sem expor detalhes internos de sistemas. Qual é a melhor opção?",
      options: {
        "A": "System API",
        "B": "Process API",
        "C": "Experience API específica para Salesforce",
        "D": "Conexão direta ao banco"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      explanation: "A *Experience API* atua como um contrato sob medida para o consumidor (Salesforce), escondendo a complexidade das camadas inferiores.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    },
    {
      id: "M5-P1-Q15",
      text: "Uma alternativa sugere que “API‑Led Connectivity é apenas um nome para qualquer conjunto de APIs sem regras claras”. Qual é a leitura correta?",
      options: {
        "A": "Verdadeiro",
        "B": "Falso; API‑Led define claramente papéis de System, Process e Experience APIs com foco em reutilização e governança",
        "C": "Depende do projeto",
        "D": "Só se aplica a on‑premises"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "API-led Connectivity é uma metodologia disciplinada com regras claras de arquitetura para promover o reuso de ativos de TI.",
      topics: ["Anypoint Platform", "API-led Connectivity"]
    }
  ],
  "M5-P2": [
    {
      id: "M5-P2-Q1",
      text: "AnyAirlines está definindo o processo de desenvolvimento de APIs. Qual ordem representa corretamente o ciclo de vida dentro da Anypoint Platform?",
      options: {
        "A": "Implement → Design → Deploy → Manage",
        "B": "Design → Simulate → Feedback → Implement → Deploy → Manage",
        "C": "Deploy → Design → Implement → Manage",
        "D": "Simulate → Design → Deploy → Implement"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O ciclo começa pelo design do contrato, simulação para feedback, implementação do código, publicação e posterior gerenciamento.",
      topics: ["Anypoint Platform", "Lifecycle"]
    },
    {
      id: "M5-P2-Q2",
      text: "NTO quer permitir que consumidores explorem APIs, vejam documentação e testem chamadas em um console interativo. Qual componente deve ser usado?",
      options: {
        "A": "Runtime Manager",
        "B": "Anypoint Exchange (API Portal)",
        "C": "Anypoint Studio",
        "D": "Anypoint Monitoring"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O Anypoint Exchange funciona como o catálogo de ativos e portal de desenvolvedor, onde as APIs são descobertas e testadas.",
      topics: ["Anypoint Exchange", "API Portal"]
    },
    {
      id: "M5-P2-Q3",
      text: "Um time precisa editar fluxos Mule, adicionar conectores e escrever DataWeave. Qual ferramenta é utilizada?",
      options: {
        "A": "API Designer",
        "B": "Anypoint Studio",
        "C": "API Manager",
        "D": "RPA Builder"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O Anypoint Studio é a IDE para desenvolvimento técnico de aplicações Mule.",
      topics: ["Anypoint Studio"]
    },
    {
      id: "M5-P2-Q4",
      text: "Uma empresa precisa escalar o número de workers da aplicação conforme cresce o uso da API. Onde isso é configurado?",
      options: {
        "A": "Exchange",
        "B": "Runtime Manager",
        "C": "API Designer",
        "D": "Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O Runtime Manager gerencia deploy e capacidade (vCores/Workers) das aplicações Mule.",
      topics: ["Runtime Manager", "Escalabilidade"]
    },
    {
      id: "M5-P2-Q5",
      text: "A solução exige deployment em data center próprio com requisitos estritos de compliance. Qual opção de deploy é mais alinhada?",
      options: {
        "A": "Apenas CloudHub",
        "B": "On‑Premises ou Runtime Fabric, conforme o contexto",
        "C": "Apenas RPA",
        "D": "Apenas Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "A MuleSoft suporta modelo híbrido: CloudHub, On‑Premises e Runtime Fabric (Kubernetes).",
      topics: ["Deployment", "Runtime Fabric"]
    },
    {
      id: "M5-P2-Q6",
      text: "Um item de prova descreve containers e Kubernetes para rodar aplicações Mule. Qual tecnologia da MuleSoft é citada?",
      options: {
        "A": "Runtime Fabric (RTF)",
        "B": "Anypoint MQ",
        "C": "CloudHub 1.0",
        "D": "Exchange"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      explanation: "Runtime Fabric permite executar apps Mule em clusters Kubernetes (cloud ou on‑prem).",
      topics: ["Runtime Fabric", "Containers"]
    },
    {
      id: "M5-P2-Q7",
      text: "Compartilhar uma API interna com parceiros, com controle de acesso e botão “Request Access”. Qual recurso suporta isso?",
      options: {
        "A": "API Notebook",
        "B": "API Portal / Exchange com fluxo de Client ID/Secret",
        "C": "Runtime Manager",
        "D": "Apenas documentação PDF"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O Exchange publica portais onde desenvolvedores solicitam acesso às APIs com credenciais.",
      topics: ["Exchange", "Acesso"]
    },
    {
      id: "M5-P2-Q8",
      text: "API será consumida por Salesforce Flow via External Services e por RPA via HTTP. Qual prática melhor suporta reutilização?",
      options: {
        "A": "Publicar a especificação e a API como ativos no Exchange",
        "B": "Esconder a especificação",
        "C": "Criar uma API separada para cada consumidor",
        "D": "Expor diretamente o banco de dados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      explanation: "Contrato centralizado no Exchange promove consumo consistente por múltiplos clientes.",
      topics: ["Exchange", "Reuso"]
    },
    {
      id: "M5-P2-Q9",
      text: "Simular a API de crédito antes da implementação definitiva, permitindo uso de dados fictícios. O que utilizar?",
      options: {
        "A": "Mocking Service do Exchange",
        "B": "Apenas logs",
        "C": "Testes manuais em produção",
        "D": "Visualizer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      explanation: "Mocking Service simula respostas com base na especificação para desenvolvimento paralelo.",
      topics: ["Mocking Service"]
    },
    {
      id: "M5-P2-Q10",
      text: "A fase “Manage” inclui o quê?",
      options: {
        "A": "Apenas desligar a API quando necessário",
        "B": "Aplicar políticas, controlar consumo, analytics e governança",
        "C": "Depende do tipo de API",
        "D": "Só vale para APIs públicas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Gerenciar é contínuo: segurança, performance e análise de uso durante todo o ciclo.",
      topics: ["API Manager", "Governança"]
    },
    {
      id: "M5-P2-Q11",
      text: "Ver relacionamentos entre APIs e dependências em um mapa visual. Qual recurso atende?",
      options: {
        "A": "Visualizer",
        "B": "Functional Monitoring",
        "C": "Exchange",
        "D": "RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      explanation: "Anypoint Visualizer exibe graficamente as relações e o fluxo entre aplicações/APIs.",
      topics: ["Visualizer", "Observabilidade"]
    },
    {
      id: "M5-P2-Q12",
      text: "Garantir que mudanças em um fragmento RAML compartilhado não quebrem projetos dependentes sem visibilidade. Qual conceito aparece no Exchange?",
      options: {
        "A": "Asset apenas",
        "B": "Dependency tracking",
        "C": "Worker logs",
        "D": "Credential Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Exchange rastreia dependências entre ativos, facilitando análise de impacto.",
      topics: ["Exchange", "Dependências"]
    },
    {
      id: "M5-P2-Q13",
      text: "Implementar APIs diretamente no API Manager. Por que isso é incorreto?",
      options: {
        "A": "API Manager não existe",
        "B": "API Manager é para governança e políticas, não para desenvolvimento de código",
        "C": "API Manager substitui Exchange",
        "D": "API Manager roda apenas on‑premises"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Código Mule é desenvolvido no Studio e publicado via Runtime Manager; API Manager governa.",
      topics: ["API Manager", "Governança"]
    },
    {
      id: "M5-P2-Q14",
      text: "Decidir entre CloudHub e On‑Premises: acesso simplificado a sistemas internos sem expor firewalls. Qual opção pode ser mais adequada?",
      options: {
        "A": "Apenas CloudHub sempre",
        "B": "On‑Premises ou RTF próximo dos sistemas internos",
        "C": "Apenas Composer",
        "D": "Apenas RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Executar o runtime Mule dentro da rede local facilita acesso a sistemas internos.",
      topics: ["Runtime Fabric", "Deployment"]
    },
    {
      id: "M5-P2-Q15",
      text: "Para cada novo projeto, criar uma API idêntica com URL diferente. Por que isso é uma pegadinha?",
      options: {
        "A": "APIs não podem ter URLs diferentes",
        "B": "Isso reduz reutilização e aumenta fragmentação, contra a estratégia da MuleSoft",
        "C": "Exchange não suporta múltiplas APIs",
        "D": "CloudHub não suporta mais de uma aplicação"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Duplicar APIs gera dívida técnica; o modelo correto é tratar API como produto reutilizável.",
      topics: ["Estratégia de API", "Reuso"]
    }
  ],
  "M5-P3": [
    {
      id: "M5-P3-Q1",
      text: "AnyAirlines nota que diferentes equipes estão construindo integrações diretas para o mesmo sistema legado, sem usar APIs comuns. Qual prática da MuleSoft mais combate esse problema?",
      options: {
        "A": "Incentivar mais integrações ponto‑a‑ponto",
        "B": "Criar System/Process APIs reutilizáveis e catalogá‑las no Exchange",
        "C": "Migrar tudo para planilhas",
        "D": "Usar apenas RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "O catálogo centralizado no Exchange permite que as equipes descubram ativos já existentes, evitando o retrabalho e a fragmentação.",
      topics: ["Anypoint Exchange", "Reuso", "API-led"]
    },
    {
      id: "M5-P3-Q2",
      text: "NTO quer aplicar políticas de Rate Limiting em uma API sem alterar o código Mule. Qual componente deve ser usado?",
      options: {
        "A": "Anypoint Studio",
        "B": "API Manager com políticas aplicadas ao endpoint",
        "C": "Runtime Manager",
        "D": "RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "As políticas do API Manager são aplicadas dinamicamente via API Gateway, sem necessidade de redeploy do código.",
      topics: ["API Manager", "Rate Limiting", "Governança"]
    },
    {
      id: "M5-P3-Q3",
      text: "Um Flow está sobrecarregando um sistema legado via API, causando travamentos. Qual resposta mais alinhada?",
      options: {
        "A": "Permitir o volume e esperar atualização do sistema",
        "B": "Aplicar Rate Limiting / SLA‑based Tiering na API para proteger o sistema",
        "C": "Desativar logs do sistema legado",
        "D": "Substituir a API por acesso direto ao banco"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Rate Limiting protege o backend contra picos de tráfego, evitando indisponibilidade.",
      topics: ["API Manager", "SLA-based", "Resiliência"]
    },
    {
      id: "M5-P3-Q4",
      text: "Expor uma API sem autenticação para simplificar consumo por RPA, Flow e Composer. Como isso deve ser visto?",
      options: {
        "A": "Correto para ambientes internos",
        "B": "Errado; políticas como Client ID Enforcement são recomendadas mesmo em cenários internos críticos",
        "C": "Recomendado em provas",
        "D": "Neutro"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Credenciais (Client ID/Secret) são fundamentais para rastreabilidade e governança.",
      topics: ["Segurança", "Client ID Enforcement"]
    },
    {
      id: "M5-P3-Q5",
      text: "Garantir que apenas IPs da infraestrutura Salesforce acessem determinada API. Qual política é usada?",
      options: {
        "A": "Rate Limiting",
        "B": "IP Whitelisting",
        "C": "Client ID Enforcement",
        "D": "JWT Validation"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "IP Whitelisting restringe acesso a IPs/faixas de rede pré‑autorizadas.",
      topics: ["Segurança", "IP Whitelisting"]
    },
    {
      id: "M5-P3-Q6",
      text: "Várias APIs críticas fazem parte de um fluxo de hiperautomação. Qual combinação ajuda a enxergar disponibilidade e erros em tempo real?",
      options: {
        "A": "Apenas logs locais dos servidores",
        "B": "Anypoint Monitoring com dashboards e Log Search",
        "C": "E‑mails manuais de usuários",
        "D": "Apenas o console do RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Anypoint Monitoring centraliza métricas e logs, identificando gargalos rapidamente.",
      topics: ["Monitoring", "Observabilidade"]
    },
    {
      id: "M5-P3-Q7",
      text: "Um Flow disparou milhares de requisições simultâneas e o sistema entrou em “choque”. Qual alternativa correta?",
      options: {
        "A": "Escalar apenas vCores",
        "B": "Combinar Rate Limiting e ajustar capacidade (vCores/workers) conforme necessário",
        "C": "Desligar o Flow permanentemente",
        "D": "Migrar para integrações manuais"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Controle de tráfego e capacidade adequada mitigam picos sem indisponibilidade.",
      topics: ["Rate Limiting", "Capacidade", "CloudHub"]
    },
    {
      id: "M5-P3-Q8",
      text: "Monitorar se a API responde corretamente a cenários críticos, não apenas disponibilidade. Qual recurso?",
      options: {
        "A": "Visualizer",
        "B": "Functional Monitoring",
        "C": "Exchange",
        "D": "API Notebook"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Functional Monitoring cria testes funcionais automatizados periódicos contra endpoints.",
      topics: ["Functional Monitoring", "Qualidade"]
    },
    {
      id: "M5-P3-Q9",
      text: "Novo consumidor pede API própria com sua lógica e dados, apesar de existir API genérica. Por que isto é pegadinha?",
      options: {
        "A": "APIs não podem ter mais de um consumidor",
        "B": "Viola reutilização e aumenta acoplamento, indo contra API‑Led",
        "C": "Nenhuma API pode ser genérica",
        "D": "API Manager não suporta múltiplas políticas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Evoluir ou expor Experience API é preferível a duplicar contratos.",
      topics: ["API-led", "Reuso", "Arquitetura"]
    },
    {
      id: "M5-P3-Q10",
      text: "Experience API faz transformações pesadas, mas já existe Process API que faz o mesmo. Qual opção é mais alinhada?",
      options: {
        "A": "Manter lógica duplicada na Experience API",
        "B": "Centralizar transformação na Process API e manter Experience mais fina",
        "C": "Migrar tudo para System APIs",
        "D": "Remover Process API"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "A lógica de negócio deve residir na Process API, habilitando reuso entre canais.",
      topics: ["Process API", "Arquitetura"]
    },
    {
      id: "M5-P3-Q11",
      text: "Equipe dispensa publicar ativos no Exchange por já conhecer o código. Por que isto é fraco?",
      options: {
        "A": "Exchange é obrigatório por contrato",
        "B": "Sem catálogo central, reuso, descoberta e governança ficam mais difíceis",
        "C": "APIs não funcionam sem Exchange",
        "D": "Runtime Manager depende do Exchange"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Exchange fundamenta a comunidade de prática e o reuso; sem ele, voltamos a silos.",
      topics: ["Exchange", "Governança", "Reuso"]
    },
    {
      id: "M5-P3-Q12",
      text: "RPA, Flow e Composer devem usar a mesma API de clientes. Qual desenho é mais consistente?",
      options: {
        "A": "Cada ferramenta com seu conector proprietário para o sistema legado",
        "B": "Todas chamando a mesma API publicada e governada na Anypoint Platform",
        "C": "Apenas Flow chamando a API",
        "D": "Apenas RPA chamando a API"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Estado ideal: múltiplas ferramentas consumindo a mesma fonte governada e segura.",
      topics: ["API-led", "Hiperautomação"]
    },
    {
      id: "M5-P3-Q13",
      text: "Shared Load Balancer (SLB) em CloudHub representa o quê?",
      options: {
        "A": "Um concentrador de bots RPA",
        "B": "O balanceador padrão que fornece URL pública para APIs no CloudHub",
        "C": "Componente exclusivo do Runtime Fabric",
        "D": "Módulo de autenticação do Salesforce"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "SLB é o ponto de entrada padrão externo para os workers das aplicações/API.",
      topics: ["CloudHub", "Infraestrutura"]
    },
    {
      id: "M5-P3-Q14",
      text: "Limitar tráfego por plano de acesso (Bronze, Prata, Ouro). Qual funcionalidade é adequada?",
      options: {
        "A": "Rate Limiting simples",
        "B": "SLA‑based policies no API Manager",
        "C": "IP Whitelisting",
        "D": "Desativar API em horários de pico"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "SLA‑based policies definem limites por aplicação cliente (Client ID).",
      topics: ["API Manager", "SLA"]
    },
    {
      id: "M5-P3-Q15",
      text: "“É melhor duplicar APIs do que ajustar contratos existentes para permitir reutilização”. Como responder?",
      options: {
        "A": "Concorda, para evitar dependências",
        "B": "Discorda; a estratégia valoriza reuso, contratos bem desenhados e minimização de duplicação",
        "C": "Depende do humor da equipe",
        "D": "Reproduz a abordagem sem questionar"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      explanation: "Reuso é principal driver de ROI; duplicar APIs promove dívida técnica e acoplamento.",
      topics: ["Arquitetura", "Reuso"]
    }
  ],
  "M6-P1": [],
  "M6-P2": [],
  "M6-P3": [],
  "M7-P1": [],
  "M7-P2": [],
  "M7-P3": [],
  "M8-P1": [],
  "M8-P2": [],
  "M8-P3": []
  ],
  "M2-P1": [
    {
      id: "M2-P1-Q1",
      text: "AnyAirlines wants to automate a stable, repetitive back‑office process currently executed by an operator in a legacy Windows application. There is no API available. What is the most appropriate first technology choice?",
      options: {
        "A": "MuleSoft Composer with HTTP trigger",
        "B": "MuleSoft RPA Builder creating a UI automation process",
        "C": "Salesforce Flow with External Services",
        "D": "Anypoint Platform Experience API only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Legacy systems"]
    },
    {
      id: "M2-P1-Q2",
      text: "Northern Trail Outfitters (NTO) wants to decide whether a candidate process is suitable for RPA. Which characteristic most strongly indicates a good fit?",
      options: {
        "A": "Process changes its steps every week",
        "B": "Process is ad‑hoc and creative",
        "C": "Process is rule‑based, high volume and stable over time",
        "D": "Process is performed once per year by executives"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA", "Candidate Selection"]
    },
    {
      id: "M2-P1-Q3",
      text: "A question describes the Evaluation phase inside RPA Manager. What is the most efficient way to use this phase according to best practices?",
      options: {
        "A": "To configure attended robots on users’ desktops",
        "B": "To estimate automation potential and business value before building",
        "C": "To deploy processes directly to production workers",
        "D": "To record user clicks automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Evaluation"]
    },
    {
      id: "M2-P1-Q4",
      text: "A company wants traceability of who approved which bot process and when it went to production. Which RPA Manager capability is most relevant?",
      options: {
        "A": "Credential Manager",
        "B": "Process Operations dashboards",
        "C": "Lifecycle with stages like Evaluation, Design, Build, Test, Production",
        "D": "Recorder exports"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA Manager", "Lifecycle"]
    },
    {
      id: "M2-P1-Q5",
      text: "A scenario describes a new process that is still being redesigned by the business team and frequently changes the system steps. What is the best recommendation?",
      options: {
        "A": "Immediately automate with RPA to capture all changes",
        "B": "Wait until the process is stable before committing to RPA",
        "C": "Use RPA only in production, not in test",
        "D": "Replace the process with manual spreadsheets permanently"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Stability"]
    },
    {
      id: "M2-P1-Q6",
      text: "NTO needs to ensure that passwords used by bots are never visible to RPA developers. Which component should be highlighted in the answer?",
      options: {
        "A": "Local configuration files on the bot machine",
        "B": "Credential Manager in RPA Manager",
        "C": "Comments inside the workflow activities",
        "D": "Environment variables on developers’ laptops"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Security", "Credential Manager"]
    },
    {
      id: "M2-P1-Q7",
      text: "A candidate solution stores credentials in an Excel file read by the bot at runtime. Why is this not aligned with MuleSoft RPA best practices?",
      options: {
        "A": "Bots cannot read Excel files",
        "B": "Excel files cannot be versioned",
        "C": "Credentials must be stored securely and centrally in Credential Manager",
        "D": "RPA Manager does not allow bots to access files"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA", "Security", "Best practices"]
    },
    {
      id: "M2-P1-Q8",
      text: "A bank wants to run multiple independent RPA processes in parallel on the same infrastructure to maximize ROI. Which concept is most relevant?",
      options: {
        "A": "Background Steps",
        "B": "Workers in CloudHub",
        "C": "RPA Agents configured to handle multiple processes",
        "D": "Visualforce pages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA Agent", "Parallelism"]
    },
    {
      id: "M2-P1-Q9",
      text: "A scenario says: “The bot must run even when no human is logged into Windows and no monitor is attached.” Which feature enables this behavior?",
      options: {
        "A": "Desktop recording mode",
        "B": "Secure Session on the RPA Agent",
        "C": "Only attended robots launched by users",
        "D": "Composer test mode"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Secure Session"]
    },
    {
      id: "M2-P1-Q10",
      text: "A process is being moved from Test to Production in RPA Manager. What is the primary expectation before switching the lifecycle stage?",
      options: {
        "A": "The Recorder file compiles successfully",
        "B": "The process has at least one failure to validate logs",
        "C": "The process executed successfully in a controlled test environment",
        "D": "The process is triggered only once in sandbox"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA", "Lifecycle", "Test phase"]
    },
    {
      id: "M2-P1-Q11",
      text: "NTO wants to analyze savings and business impact of RPA automations. Which RPA Manager capability best supports this?",
      options: {
        "A": "UI Automation activities in Builder",
        "B": "Dashboard de Análise (ROI and time savings)",
        "C": "Recorder playback feature",
        "D": "Local Windows Task Scheduler"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Analytics", "ROI"]
    },
    {
      id: "M2-P1-Q12",
      text: "A candidate suggests using Composer instead of RPA for a legacy desktop app with no APIs but simple, low‑volume usage. Which argument best supports choosing RPA instead?",
      options: {
        "A": "Composer does not support any SaaS connectors",
        "B": "RPA is the only tool that can interact via UI when no API exists",
        "C": "Composer cannot call HTTP endpoints",
        "D": "RPA is always cheaper than Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "RPA vs Composer"]
    },
    {
      id: "M2-P1-Q13",
      text: "A scenario describes that business wants non‑technical users to monitor the health of bots and restart failed items. Which interface should they primarily use?",
      options: {
        "A": "RPA Builder",
        "B": "RPA Manager – Process Operations",
        "C": "Anypoint Studio",
        "D": "Local bot logs only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Process Operations"]
    },
    {
      id: "M2-P1-Q14",
      text: "A process candidate has extremely low volume but high financial impact and is performed monthly. What is the most appropriate guidance for the exam?",
      options: {
        "A": "Automatically reject it as an RPA candidate",
        "B": "Consider RPA only if the process is complex but stable and rules‑based",
        "C": "Only use RPA for daily processes",
        "D": "Only Composer can handle monthly scenarios"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Candidate Selection"]
    },
    {
      id: "M2-P1-Q15",
      text: "A company wants to avoid building multiple RPA processes that log into the same system with different credentials and logic. Which practice best aligns with C4E and reuse?",
      options: {
        "A": "Duplicate login logic in every bot for flexibility",
        "B": "Publish a shared login automation as an RPA asset in Exchange",
        "C": "Force all teams to build their own logins from scratch",
        "D": "Move all logins to unmanaged scripts outside RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "C4E", "Reuse"]
    }
  ],
  "M2-P2": [
    {
      id: "M2-P2-Q1",
      text: "AnyAirlines is evaluating several candidate processes for RPA. Which combination best fits the Evaluation phase output in RPA Manager?",
      options: {
        "A": "A list of UI selectors for each button",
        "B": "A scorecard showing automation fitness and expected ROI",
        "C": "A deployment package for production agents",
        "D": "A log of all bot executions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Evaluation"]
    },
    {
      id: "M2-P2-Q2",
      text: "A scenario lists the following order: Build → Evaluation → Production → Test. What is the correct lifecycle sequence in MuleSoft RPA?",
      options: {
        "A": "Design → Evaluation → Test → Build → Production",
        "B": "Evaluation → Design → Build → Test → Production",
        "C": "Evaluation → Build → Design → Production → Test",
        "D": "Design → Build → Production → Test → Evaluation"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Lifecycle"]
    },
    {
      id: "M2-P2-Q3",
      text: "NTO wants to ensure that the workflow implemented in Builder matches the business process diagram. Which standard and phase are most relevant?",
      options: {
        "A": "BPMN diagram created in the Design phase",
        "B": "JSON schema generated during Build",
        "C": "Swagger definition imported into RPA Manager",
        "D": "ER diagram of the database"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["RPA", "Design", "BPMN"]
    },
    {
      id: "M2-P2-Q4",
      text: "A candidate solution jumps directly from Recorder output to Production without modifications. Why is this generally wrong?",
      options: {
        "A": "Recorder already optimizes selectors for all systems",
        "B": "Recorder only generates a skeleton and requires refinement in Builder",
        "C": "Recorder cannot store any actions",
        "D": "Recorder automatically handles all errors"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Recorder", "Builder"]
    },
    {
      id: "M2-P2-Q5",
      text: "A process automates a web application that changes CSS classes frequently but keeps HTML IDs stable. What is the recommended selector strategy?",
      options: {
        "A": "Use image‑based recognition only",
        "B": "Use stable object‑based selectors like IDs or robust XPaths",
        "C": "Use random wait times and screen coordinates",
        "D": "Use manual keyboard navigation only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Selectors"]
    },
    {
      id: "M2-P2-Q6",
      text: "A legacy desktop app has no accessible object model and uses fixed‑position buttons. Which two techniques are most likely for RPA to interact with it?",
      options: {
        "A": "Object‑based selectors on HTML elements",
        "B": "Image‑based recognition and coordinate‑based clicks",
        "C": "Direct SQL queries to the backend database",
        "D": "External Services in Salesforce Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Selectors", "Legacy systems"]
    },
    {
      id: "M2-P2-Q7",
      text: "A scenario describes OCR being used to read text from scanned PDFs before entering data into an ERP. Where does this capability typically live in MuleSoft RPA?",
      options: {
        "A": "In RPA Manager dashboards",
        "B": "In Builder activities that support OCR engines",
        "C": "In Anypoint Monitoring only",
        "D": "In Salesforce Flow Fault paths"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "OCR"]
    },
    {
      id: "M2-P2-Q8",
      text: "During testing, a bot fails when a desktop window takes longer than usual to appear. Which adjustment is most appropriate?",
      options: {
        "A": "Disable all waits to speed execution",
        "B": "Increase timeout and implement retries with screenshots on failure",
        "C": "Replace RPA with Composer",
        "D": "Run the bot only during off‑hours"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Testing", "Resilience"]
    },
    {
      id: "M2-P2-Q9",
      text: "NTO wants to distinguish between technical errors (window not found) and business exceptions (invalid ID) in reports. How should the process be designed?",
      options: {
        "A": "Treat all errors as business exceptions",
        "B": "Use dedicated error handling blocks and raise specific business exceptions for data issues",
        "C": "Ignore exceptions and rely on logs only",
        "D": "Let the operating system classify errors automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Error Handling"]
    },
    {
      id: "M2-P2-Q10",
      text: "A process frequently fails because the target application was updated and a button label changed slightly. Which practice best minimizes future maintenance effort?",
      options: {
        "A": "Use generic selectors based on window position only",
        "B": "Use robust selectors focusing on stable attributes instead of visible text",
        "C": "Re‑record the entire process after every minor change",
        "D": "Abort automation and switch to manual processing"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Maintenance", "Selectors"]
    },
    {
      id: "M2-P2-Q11",
      text: "A candidate suggests executing RPA bots only in attended mode on users’ desktops for all critical processes. Which downside does the exam expect you to recognize?",
      options: {
        "A": "Attended mode cannot use Credential Manager",
        "B": "Attended bots cannot access web applications",
        "C": "It reduces scalability and breaks the idea of fully automated, scheduled runs",
        "D": "It removes the ability to log errors"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["RPA", "Attended vs Unattended"]
    },
    {
      id: "M2-P2-Q12",
      text: "A banking process must run at night without any human present, accessing multiple secure systems. Which combination is most aligned with best practices?",
      options: {
        "A": "Attended bots with passwords typed by operators",
        "B": "Secure Session plus Credential Manager with scheduled execution",
        "C": "Local scripts storing passwords in plain text",
        "D": "Manual night shifts by staff"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Unattended", "Security"]
    },
    {
      id: "M2-P2-Q13",
      text: "A scenario describes heavy reuse of the same sub‑workflow across several RPA processes (for example, “open SAP session”). How should this be managed?",
      options: {
        "A": "Duplicate the activities in every process",
        "B": "Create a reusable component and share it as an RPA asset",
        "C": "Implement it separately in each bot without documentation",
        "D": "Move this logic fully into Salesforce Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Reuse"]
    },
    {
      id: "M2-P2-Q14",
      text: "A candidate process is selected mainly because it uses many different systems and seems “interesting” for RPA developers, but it has low volume and unclear rules. What is the recommended decision?",
      options: {
        "A": "Approve immediately because complexity justifies RPA",
        "B": "Reject or postpone until the process is standardized and value is clear",
        "C": "Implement only half of the steps",
        "D": "Split it randomly across many bots"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Candidate Selection"]
    },
    {
      id: "M2-P2-Q15",
      text: "A question contrasts “record‑and‑playback only” with “structured workflow designed in Builder using BPMN concepts and parameters”. Which option better represents a production‑ready approach?",
      options: {
        "A": "Record‑and‑playback only, because it is faster",
        "B": "Structured Builder workflow aligned with BPMN design and parameterized data",
        "C": "Manual execution without any automation",
        "D": "Only scripting in external tools, without RPA platform"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Builder", "Best practices"]
    }
  ],
  "M2-P3": [
    {
      id: "M2-P3-Q1",
      text: "AnyAirlines reports that a bot suddenly stopped clicking the “Save” button in a web app after a browser update. What is the most appropriate first action?",
      options: {
        "A": "Rebuild the entire RPA process from scratch",
        "B": "Update the selector (XPath/locator) in RPA Builder and republish",
        "C": "Increase machine CPU and memory",
        "D": "Disable SSL in the browser"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Maintenance", "Selectors"]
    },
    {
      id: "M2-P3-Q2",
      text: "An exam question describes “CPF inválido” being detected by the bot when validating input data. How should this failure be classified?",
      options: {
        "A": "Technical exception",
        "B": "Business exception",
        "C": "Network outage",
        "D": "Infrastructure failure"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Error Handling"]
    },
    {
      id: "M2-P3-Q3",
      text: "A bot cannot find a window because the application server is down. What is the most appropriate handling?",
      options: {
        "A": "Treat as business exception and send to human review queue",
        "B": "Treat as technical exception and implement retry with exponential backoff",
        "C": "Ignore the error and continue processing",
        "D": "Ask the end‑user to fix it manually every time"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Error Handling", "Resilience"]
    },
    {
      id: "M2-P3-Q4",
      text: "NTO wants to provide detailed evidence when a technical error occurs in production. Which design choice best supports troubleshooting?",
      options: {
        "A": "Disable all logs for performance",
        "B": "Capture screenshots and key context in error handling blocks",
        "C": "Store errors only in local text files on the bot machine",
        "D": "Send only a generic email without details"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Troubleshooting", "Logs"]
    },
    {
      id: "M2-P3-Q5",
      text: "A scenario describes bots using shared Windows accounts that multiple humans also know. Why is this problematic from an exam perspective?",
      options: {
        "A": "It prevents bots from running in Secure Session",
        "B": "It violates security and auditability; credentials should be managed centrally and not shared",
        "C": "It makes bots faster than allowed",
        "D": "It is required for Credential Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Security", "Best practices"]
    },
    {
      id: "M2-P3-Q6",
      text: "A financial institution requires that no one, including developers, knows the actual passwords used by bots. Which RPA Manager feature should be emphasized?",
      options: {
        "A": "Logger configuration",
        "B": "Credential Manager with role‑based access",
        "C": "Local Windows registry keys",
        "D": "Recorder encryption"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Credential Manager", "Security"]
    },
    {
      id: "M2-P3-Q7",
      text: "During testing, a bot encounters invalid business data and raises a business exception, sending the case to a human analyst. What is the main benefit of this pattern?",
      options: {
        "A": "Hides technical problems from business users",
        "B": "Ensures that data issues are routed to the right human decision point",
        "C": "Reduces the need for monitoring",
        "D": "Guarantees that no manual work is ever needed"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Error Handling", "Human-in-the-loop"]
    },
    {
      id: "M2-P3-Q8",
      text: "A scenario states that multiple RPA processes must be moved from Test to Production while maintaining clear separation of environments. What is a recommended practice?",
      options: {
        "A": "Use the same credentials and endpoints in all stages",
        "B": "Configure distinct environments and lifecycles for Test and Production in RPA Manager",
        "C": "Share the same bot machines for both environments simultaneously",
        "D": "Disable testing completely to save time"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Environments", "Lifecycle"]
    },
    {
      id: "M2-P3-Q9",
      text: "A company wants to reuse a specific RPA process (e.g., “Check Credit Score”) across different Composer and Salesforce Flow orchestrations. What is the best way to expose it?",
      options: {
        "A": "Hard-code the bot trigger in every flow",
        "B": "Publish the RPA process as an API-enabled asset in Anypoint Exchange",
        "C": "Only allow manual triggers by users",
        "D": "Use email notifications to start the bot"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Reuse", "Exchange"]
    },
    {
      id: "M2-P3-Q10",
      text: "When a bot is executing in Unattended mode via Secure Session, what happens to the Windows session when the process finishes?",
      options: {
        "A": "The session remains open and logged in indefinitely",
        "B": "The session is automatically locked or logged off by the RPA Agent",
        "C": "The machine reboots automatically",
        "D": "The monitor turns on automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Secure Session"]
    },
    {
      id: "M2-P3-Q11",
      text: "A retail company wants to track the total hours saved by RPA bots last month. Where should they look?",
      options: {
        "A": "In the local Windows Event Viewer",
        "B": "In the RPA Manager Dashboard (ROI/Analysis)",
        "C": "In the source code of the Builder project",
        "D": "In the Salesforce login history"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Manager", "Analytics"]
    },
    {
      id: "M2-P3-Q12",
      text: "An architect is designing a process that involves OCR on documents with variable layouts. What is the best strategy for stability?",
      options: {
        "A": "Use a single coordinate for all documents",
        "B": "Use anchor-based OCR or intelligent document processing (IDP) activities",
        "C": "Ask users to manually type everything first",
        "D": "Disable OCR and use image recognition for every letter"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "OCR", "IDP"]
    },
    {
      id: "M2-P3-Q13",
      text: "A scenario describes a bot that needs to interact with a Java application that doesn't expose standard UI elements. Which strategy is most likely to be recommended?",
      options: {
        "A": "Only keyboard shortcuts",
        "B": "Image recognition and coordinate-based clicks with robust waits",
        "C": "Direct memory injection",
        "D": "Rewriting the Java app in HTML"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Selectors", "Legacy systems"]
    },
    {
      id: "M2-P3-Q14",
      text: "How does the RPA Agent communicate with RPA Manager to receive new tasks?",
      options: {
        "A": "The Manager pushes tasks via SSH",
        "B": "The Agent polls the Manager via HTTPS at regular intervals",
        "C": "Tasks are sent via physical USB drives",
        "D": "There is no communication; agents are manual only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA Architecture", "Agent"]
    },
    {
      id: "M2-P3-Q15",
      text: "A company wants to ensure that if an RPA bot fails, a Salesforce admin is notified immediately. Which integration is best?",
      options: {
        "A": "RPA Manager sending an alert to Anypoint Monitoring, which triggers a notification",
        "B": "The bot writing a text file to its local C: drive",
        "C": "The developer checking logs once a week",
        "D": "Disabling error notifications to avoid noise"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["RPA", "Monitoring", "Alerting"]
    }
  ],
  "M3-P1": [
    {
      id: "M3-P1-Q1",
      text: "AnyAirlines wants a no‑code integration that creates a record in SAP whenever a new Opportunity is closed in Salesforce. Which trigger should be used in Composer?",
      options: {
        "A": "Scheduler trigger",
        "B": "System event trigger on Salesforce",
        "C": "HTTP Listener trigger",
        "D": "Manual run only"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Triggers"]
    },
    {
      id: "M3-P1-Q2",
      text: "Northern Trail Outfitters (NTO) needs a flow that runs every night at 02:00 to sync inventory from Google Sheets into Salesforce. Which trigger is most appropriate?",
      options: {
        "A": "System event trigger on Google Sheets",
        "B": "Scheduler trigger configured for 02:00",
        "C": "HTTP Listener triggered by an external system",
        "D": "No trigger; Composer does not support schedules"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Triggers", "Scheduler"]
    },
    {
      id: "M3-P1-Q3",
      text: "A scenario states: “Business admins must configure integrations between Salesforce, Slack and ServiceNow without writing code.” Which tool is the exam most likely expecting?",
      options: {
        "A": "Anypoint Studio",
        "B": "MuleSoft Composer",
        "C": "Salesforce Apex",
        "D": "MuleSoft RPA Builder"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Composer"]
    },
    {
      id: "M3-P1-Q4",
      text: "NTO wants to minimize unnecessary data transfer when using Composer to query ServiceNow. What is the recommended practice?",
      options: {
        "A": "Always select all fields",
        "B": "Select only the fields relevant for the flow",
        "C": "Use SOQL to filter fields",
        "D": "Move filtering to RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Best Practices", "Efficiency"]
    },
    {
      id: "M3-P1-Q5",
      text: "A flow needs to process every line in a collection returned from Workday. Which Composer element should be used?",
      options: {
        "A": "If/Else only",
        "B": "For Each loop",
        "C": "Separate flows for each item",
        "D": "Multiple HTTP Listeners"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Logic", "Loops"]
    },
    {
      id: "M3-P1-Q6",
      text: "A candidate solution maps a single record from Salesforce directly into a list field in another system, without iteration. What problem is most likely?",
      options: {
        "A": "Composer will silently fix the mapping",
        "B": "Only the first item will be processed or the mapping will fail",
        "C": "All records will be processed correctly",
        "D": "Composer will automatically create a For Each"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Mapping", "Lists"]
    },
    {
      id: "M3-P1-Q7",
      text: "A scenario describes the need to concatenate first name and last name into a single “FullName” field inside Composer. Where should this be done?",
      options: {
        "A": "In an external API only",
        "B": "In the Formula Editor using string functions",
        "C": "In RPA before sending to Composer",
        "D": "Directly in the database"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Formula Editor", "Transformation"]
    },
    {
      id: "M3-P1-Q8",
      text: "A business user needs to add 30 days to the current date to calculate a due date. Which category of Composer functions is most relevant?",
      options: {
        "A": "Text functions only",
        "B": "Date functions such as ADD_DAYS",
        "C": "Math functions only",
        "D": "Security functions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Formula Editor", "Date Functions"]
    },
    {
      id: "M3-P1-Q9",
      text: "AnyAirlines wants to test a Composer flow that is triggered by a new record in Salesforce. What is the correct way to use Test Mode?",
      options: {
        "A": "Activate Test Mode and perform the real triggering action within the time window",
        "B": "Click “Run” without providing any data",
        "C": "Test Mode is not available for event‑based triggers",
        "D": "Use only mocked systems; real data is not allowed"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Testing", "Test Mode"]
    },
    {
      id: "M3-P1-Q10",
      text: "A scenario explains that Composer Test Mode uses real systems and can create real records. What is the main implication for the exam?",
      options: {
        "A": "It is safe to use in production with any data",
        "B": "Test Mode must be used only in non‑production orgs or with test data",
        "C": "Test Mode uses only mock data",
        "D": "Test Mode cannot show run history"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Testing", "Best Practices"]
    },
    {
      id: "M3-P1-Q11",
      text: "A flow fails when calling an external system due to a missing required field. What is the expected behavior of Composer?",
      options: {
        "A": "It retries automatically with different field values",
        "B": "It stops at the failing step and marks the run as failed",
        "C": "It skips the step and continues silently",
        "D": "It fixes the field mapping automatically"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Error Handling"]
    },
    {
      id: "M3-P1-Q12",
      text: "NTO wants to understand what data passed through each step of a failed run. Where should they look?",
      options: {
        "A": "In the operating system event viewer",
        "B": "In Composer Run History, inspecting data pills for each step",
        "C": "In Anypoint Studio logs",
        "D": "Only in Salesforce debug logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Troubleshooting", "Run History"]
    },
    {
      id: "M3-P1-Q13",
      text: "A candidate claims that Composer can replace all Anypoint APIs because it can call any system. Why is this not aligned with best practices?",
      options: {
        "A": "Composer cannot call any external system",
        "B": "Composer is intended for simpler, low‑to‑medium complexity integrations, not full API‑led architectures",
        "C": "Anypoint APIs cannot be reused",
        "D": "Exams do not consider Composer a valid tool"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Composer vs Anypoint"]
    },
    {
      id: "M3-P1-Q14",
      text: "A scenario requires Composer to be invoked from an external, custom web application on demand. Which trigger should be used?",
      options: {
        "A": "System event trigger",
        "B": "Scheduler trigger",
        "C": "HTTP Listener trigger",
        "D": "No trigger, only manual run"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Composer", "Triggers", "HTTP Listener"]
    },
    {
      id: "M3-P1-Q15",
      text: "A business admin asks which environment is recommended to build and test new Composer flows before moving to production. What is the best answer?",
      options: {
        "A": "Directly in the production org",
        "B": "In a sandbox or dedicated non‑production environment",
        "C": "In any org, there is no difference",
        "D": "In a local file system"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "ALM", "Best Practices"]
    }
  ],
  "M3-P2": [
    {
      id: "M3-P2-Q1",
      text: "NTO has a flow that must apply different tax rates depending on the country of the customer. Which Composer feature should be used to branch the logic?",
      options: {
        "A": "For Each",
        "B": "If/Else block",
        "C": "HTTP Listener",
        "D": "Scheduler"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Logic", "Conditional"]
    },
    {
      id: "M3-P2-Q2",
      text: "A scenario describes receiving a list of order items from Salesforce and needing to create one record in an ERP system for each item. Which structure is most appropriate?",
      options: {
        "A": "Single action outside any loop",
        "B": "Multiple parallel flows",
        "C": "For Each loop around the ERP creation step",
        "D": "Repeated HTTP Listeners"
      },
      letters: ["A", "B", "C", "D"],
      correct: "C",
      topics: ["Composer", "Logic", "Loops"]
    },
    {
      id: "M3-P2-Q3",
      text: "AnyAirlines wants to normalize customer names by trimming spaces and converting them to upper case before sending to an external system. Which functions combination is correct?",
      options: {
        "A": "LOWER + CONCAT",
        "B": "TRIM + UPPER",
        "C": "FORMAT_DATE + TRIM",
        "D": "RAND + UPPER"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Formula Editor", "Text Functions"]
    },
    {
      id: "M3-P2-Q4",
      text: "A flow must calculate a due date 10 days after the invoice date and send it to another system. Which Composer feature handles this?",
      options: {
        "A": "Math functions only",
        "B": "Date functions in Formula Editor (e.g. ADD_DAYS)",
        "C": "Manual calculation outside the flow",
        "D": "RPA bot functions"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Formula Editor", "Date Functions"]
    },
    {
      id: "M3-P2-Q5",
      text: "A candidate suggests storing complex JSON in a text field and parsing it manually in another system. Which alternative better aligns with Composer capabilities?",
      options: {
        "A": "Use structured mapping with data pills instead of opaque JSON strings",
        "B": "Always store data as CSV in text fields",
        "C": "Use only static text values",
        "D": "Use RPA to parse JSON"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Best Practices", "Data Mapping"]
    },
    {
      id: "M3-P2-Q6",
      text: "A scenario describes frequent failures because values sent to the destination system are null. What is the best way to handle this in Composer?",
      options: {
        "A": "Ignore null values",
        "B": "Use If/Else blocks to validate data before calling the destination",
        "C": "Disable validation in the destination system",
        "D": "Rely only on retries"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Best Practices", "Validation"]
    },
    {
      id: "M3-P2-Q7",
      text: "NTO wants to see exactly which values were passed to a connector action during the last run without re‑executing the flow. Where can they find this?",
      options: {
        "A": "System debug logs only",
        "B": "Composer Run History, expanding the specific execution",
        "C": "Local browser cache",
        "D": "Salesforce Setup Audit Trail"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Troubleshooting", "Run History"]
    },
    {
      id: "M3-P2-Q8",
      text: "In Test Mode, how long does Composer typically wait for the trigger event before timing out?",
      options: {
        "A": "A few seconds only",
        "B": "Approximately 10 minutes, depending on configuration",
        "C": "24 hours",
        "D": "It does not wait; it runs immediately"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Testing", "Test Mode"]
    },
    {
      id: "M3-P2-Q9",
      text: "AnyAirlines wants to reuse the same Composer connection to Salesforce across several flows. What is the best practice?",
      options: {
        "A": "Create a new connection in every flow",
        "B": "Use shared connections configured once and referenced by several flows",
        "C": "Store credentials directly in each step",
        "D": "Use only anonymous connections"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Connections", "Best Practices"]
    },
    {
      id: "M3-P2-Q10",
      text: "A candidate solution catches a failed call to an external system and sends a descriptive error message to a Slack channel. What does this represent?",
      options: {
        "A": "Misuse of Composer",
        "B": "A valid pattern for basic error notification",
        "C": "Unsupported integration type",
        "D": "Replacement for all logging needs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Error Handling", "Notifications"]
    },
    {
      id: "M3-P2-Q11",
      text: "A scenario compares two options: Option A (Validate data with If/Else before calling the system) and Option B (Call the system directly and rely fully on runtime errors). Which is most aligned with Composer best practices?",
      options: {
        "A": "Option A",
        "B": "Option B",
        "C": "Both are identical",
        "D": "Neither is supported"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Best Practices", "Validation"]
    },
    {
      id: "M3-P2-Q12",
      text: "NTO wants to avoid partial processing where only the first element of a list is handled. Which Composer concept should they verify is configured correctly?",
      options: {
        "A": "Triggers",
        "B": "For Each loops around list operations",
        "C": "Only the HTTP Listener",
        "D": "The sandbox org type"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Logic", "Loops"]
    },
    {
      id: "M3-P2-Q13",
      text: "A candidate flow uses Composer to orchestrate many complex system interactions, heavy transformations and advanced error handling. What limitation should you keep in mind for the exam?",
      options: {
        "A": "Composer cannot interact with SaaS systems",
        "B": "Composer is designed for simpler logic; complex orchestration and transformations belong in Anypoint APIs",
        "C": "Composer does not support If/Else",
        "D": "Composer cannot call RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Composer Limitations"]
    },
    {
      id: "M3-P2-Q14",
      text: "A scenario describes the need to test a Composer flow without impacting real SAP production data. Which approach is best?",
      options: {
        "A": "Use Test Mode in a sandbox connected to a SAP test environment",
        "B": "Use Test Mode directly against SAP production",
        "C": "Composer cannot be tested",
        "D": "Test only by reading logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Testing", "ALM"]
    },
    {
      id: "M3-P2-Q15",
      text: "An exam item shows three good‑looking options and one that bypasses all validation, sending raw data directly to the destination. Which type of “pegadinha” is this?",
      options: {
        "A": "Alternative technically possible but insecure or fragile",
        "B": "Alternative that exaggerates reuse",
        "C": "Alternative that uses too many flows",
        "D": "Alternative that follows all best practices"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exam Strategy", "Best Practices"]
    }
  ],
  "M3-P3": [
    {
      id: "M3-P3-Q1",
      text: "AnyAirlines wants to build a mission‑critical, high‑volume integration reused by many teams. One option is “implement everything in Composer”. Why is this likely wrong?",
      options: {
        "A": "Composer does not support SaaS connectors",
        "B": "High‑volume, reusable integrations belong in Anypoint APIs, not just in Composer",
        "C": "Composer cannot send HTTP requests",
        "D": "Composer cannot be monitored"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Composer vs Anypoint"]
    },
    {
      id: "M3-P3-Q2",
      text: "NTO wants business admins to quickly connect Salesforce and Slack for simple notifications without involving developers. Which combination is most aligned with exam expectations?",
      options: {
        "A": "Anypoint Studio + DataWeave",
        "B": "MuleSoft Composer + Slack connector",
        "C": "Custom Java microservice",
        "D": "RPA bot posting to Slack"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Composer"]
    },
    {
      id: "M3-P3-Q3",
      text: "A scenario states that an integration must be easily consumable by multiple channels (web, mobile, partners) and governed with policies like rate limiting. Which is the best place for the core logic?",
      options: {
        "A": "Composer flow",
        "B": "Anypoint Platform APIs (System/Process/Experience)",
        "C": "Local scripts",
        "D": "Only RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "API-led"]
    },
    {
      id: "M3-P3-Q4",
      text: "An exam item offers two options: Option A (Composer calling each SaaS system directly) and Option B (Composer calling a Process API that orchestrates). Which is more aligned with reuse and API‑led?",
      options: {
        "A": "Option A",
        "B": "Option B"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["API-led", "Reuse", "Composer"]
    },
    {
      id: "M3-P3-Q5",
      text: "A candidate suggests using Composer to perform heavy data transformations that already exist in a Process API. What is the better approach?",
      options: {
        "A": "Duplicate the logic in Composer",
        "B": "Reuse the Process API and keep the transformation centralized in it",
        "C": "Move logic to RPA",
        "D": "Implement all logic in Screen Flows"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Reuse", "Best Practices"]
    },
    {
      id: "M3-P3-Q6",
      text: "A process uses Composer to trigger MuleSoft RPA via its connector for screen automation in a legacy system. What typical pattern does this illustrate?",
      options: {
        "A": "Composer as “light orchestration” and RPA as “heavy execution”",
        "B": "RPA as orchestrator of Composer",
        "C": "APIs replacing Composer",
        "D": "Only use of HTTP Listener"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Tool Selection", "Composer + RPA"]
    },
    {
      id: "M3-P3-Q7",
      text: "AnyAirlines has a Composer flow that fails frequently due to destination system unavailability. Which strategy is most reasonable in this context?",
      options: {
        "A": "Blindly retry infinite times in Composer",
        "B": "Validate data and move critical logic to APIs with appropriate policies and retry",
        "C": "Ignore all failures",
        "D": "Remove logs to improve performance"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Resilience", "Composer vs Anypoint"]
    },
    {
      id: "M3-P3-Q8",
      text: "An option claims that Composer supports complex “try/catch” structures like a full programming language. Why is that likely a trap?",
      options: {
        "A": "Because Composer doesn't support any logic",
        "B": "Because Composer has limited logic; it's recommended to validate before and handle errors simply",
        "C": "Because Composer is just an IDE",
        "D": "Because Composer is identical to Anypoint Studio"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer Limitations", "Error Handling"]
    },
    {
      id: "M3-P3-Q9",
      text: "NTO wants to ensure that integrations built by business users do not bypass corporate APIs and governance. Which guideline is most appropriate?",
      options: {
        "A": "Composer should always call systems directly",
        "B": "Composer should consume existing APIs when available instead of going direct to backend",
        "C": "Composer should never be used with APIs",
        "D": "Composer should replace API Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Governance", "API-led"]
    },
    {
      id: "M3-P3-Q10",
      text: "A scenario describes a one‑off data load of thousands of historical records. One answer suggests building a permanent Composer flow for this. Why is this potentially not ideal?",
      options: {
        "A": "Composer cannot handle any volume",
        "B": "For one-off migration, dedicated tools or temporary scripts may be more suitable",
        "C": "Composer has no SaaS connectors",
        "D": "Composer only runs in production"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Tool Selection", "Data Migration"]
    },
    {
      id: "M3-P3-Q11",
      text: "An exam question describes three options: A (Composer for low complexity SaaS), B (Anypoint APIs for critical/reusable), C (RPA for no-API systems). Which statement reflects MuleSoft positioning?",
      options: {
        "A": "Only A is correct",
        "B": "A, B and C are correct and complementary",
        "C": "Only C is correct",
        "D": "None is correct"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["MuleSoft Strategy", "Tool Selection"]
    },
    {
      id: "M3-P3-Q12",
      text: "A candidate chooses an option where Composer directly manipulates database tables of a core system instead of calling a System API. Why is this problematic?",
      options: {
        "A": "Because databases cannot be accessed",
        "B": "It bypasses the API-led architecture, governance and reuse principles",
        "C": "Composer only supports Excel",
        "D": "RPA is the only tool for databases"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led", "Best Practices", "Governance"]
    },
    {
      id: "M3-P3-Q13",
      text: "A business user wants to trigger a Composer flow from a button in a custom mobile app. What is the most standard way to do this?",
      options: {
        "A": "HTTP Listener trigger in Composer",
        "B": "Scheduler trigger every second",
        "C": "Manual CSV upload",
        "D": "RPA bot watching the screen"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Composer", "Triggers", "HTTP Listener"]
    },
    {
      id: "M3-P3-Q14",
      text: "In the context of MuleSoft Composer, what is a \"Connection\"?",
      options: {
        "A": "A physical cable between servers",
        "B": "A reusable configuration of credentials and settings to access a specific system (e.g., Salesforce, Slack)",
        "C": "A type of loop",
        "D": "A mathematical function"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Connections"]
    },
    {
      id: "M3-P3-Q15",
      text: "Why does the exam emphasize using Sandboxes for testing Composer flows?",
      options: {
        "A": "Because Test Mode doesn't work in Production",
        "B": "Because Composer actions in Test Mode create real data in the connected systems",
        "C": "Because Sandboxes are faster",
        "D": "Because Production doesn't support Slack"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Composer", "Testing", "Best Practices"]
    }
  ],
  "M4-P1": [
    {
      id: "M4-P1-Q1",
      text: "AnyAirlines wants a guided screen for agents to capture claim details in Salesforce and then send the data to an API. Which tipo de Flow é mais apropriado?",
      options: {
        "A": "Autolaunched Flow",
        "B": "Screen Flow",
        "C": "Schedule‑Triggered Flow",
        "D": "Record‑Triggered Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "UI Interaction"]
    },
    {
      id: "M4-P1-Q2",
      text: "Northern Trail Outfitters (NTO) precisa que, ao criar um novo Contrato, uma automação execute lógica imediatamente sem interface de usuário. Qual tipo de Flow deve ser usado?",
      options: {
        "A": "Screen Flow",
        "B": "Record‑Triggered Flow",
        "C": "Flow Orchestration",
        "D": "Scheduled Flow externo"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Triggers"]
    },
    {
      id: "M4-P1-Q3",
      text: "Um cenário descreve um fluxo complexo de backoffice que deve ser chamado tanto por Apex quanto por uma Orchestration. Qual tipo de Flow é mais adequado como “bloco reutilizável”?",
      options: {
        "A": "Screen Flow",
        "B": "Autolaunched Flow",
        "C": "Record‑Triggered Flow",
        "D": "Workflow Rule"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Subflows"]
    },
    {
      id: "M4-P1-Q4",
      text: "AnyAirlines quer que, sempre que uma Opportunity for marcada como “Closed Won”, um processo RPA seja chamado via External Services. Onde essa chamada deve ficar?",
      options: {
        "A": "Em um Screen Flow independente",
        "B": "Em um Record‑Triggered Flow na Opportunity",
        "C": "Em um Flow Orchestration sem gatilho",
        "D": "Em um Apex Trigger apenas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "External Services"]
    },
    {
      id: "M4-P1-Q5",
      text: "NTO quer garantir que o mesmo Record‑Triggered Flow seja reutilizável entre ambientes (Sandbox → Produção). O que representa essa definição de fluxo?",
      options: {
        "A": "Flow Metadata migrada por change sets ou DevOps",
        "B": "Logs do Salesforce",
        "C": "Documentação em PDF",
        "D": "Código Java externo"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "Metadata"]
    },
    {
      id: "M4-P1-Q6",
      text: "Um candidato sugere usar apenas Apex para todas as automações, ignorando Flows. Por que isso não está alinhado com o posicionamento atual da Salesforce?",
      options: {
        "A": "Apex está obsoleto",
        "B": "Salesforce incentiva o uso de Flow como motor declarativo principal, reservando Apex para lógica muito complexa",
        "C": "Flow não suporta integrações",
        "D": "Flows não podem ser testados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    },
    {
      id: "M4-P1-Q7",
      text: "Um Screen Flow coleta dados do cliente e, depois, precisa chamar uma API da MuleSoft para validar limite de crédito. Qual recurso do Flow deve ser usado para consumir a especificação dessa API de forma declarativa?",
      options: {
        "A": "Platform Events",
        "B": "External Services",
        "C": "Inbound Email Services",
        "D": "Apex REST Callout escrito manualmente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "External Services"]
    },
    {
      id: "M4-P1-Q8",
      text: "Um cenário descreve un Flow que precisa chamar um endpoint HTTP simples sem possuir um arquivo OpenAPI ou RAML. Qual recurso pode ser usado?",
      options: {
        "A": "HTTP Callout configurado diretamente no Flow",
        "B": "Apenas Apex HTTP classes",
        "C": "Somente Workflow Rules",
        "D": "Visualforce Pages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "HTTP Callout"]
    },
    {
      id: "M4-P1-Q9",
      text: "AnyAirlines quer usar Einstein Bot para coletar informações de um passageiro e, em seguida, chamar um processo de backoffice via Flow. Qual relacionamento é mais correto?",
      options: {
        "A": "Bot chama Flow, que chama APIs/RPA",
        "B": "Flow chama Bot, que chama APIs",
        "C": "RPA chama Bot, que chama Flow",
        "D": "Composer chama Bot diretamente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Einstein Bot", "Salesforce Flow"]
    },
    {
      id: "M4-P1-Q10",
      text: "NTO deseja que parte da lógica de cálculo seja reutilizada em vários Flows. Qual recurso do Flow ajuda nessa reutilização?",
      options: {
        "A": "Subflows",
        "B": "Process Builder",
        "C": "Workflow Rules",
        "D": "Approval Processes"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "Subflows"]
    },
    {
      id: "M4-P1-Q11",
      text: "Um cenário de prova afirma que um Flow deveria processar vários registros de uma vez, mas está tratando apenas um por vez e atingindo governor limits. Qual princípio deve ser lembrado?",
      options: {
        "A": "Bulkification do Flow",
        "B": "Somente uso de Apex",
        "C": "Desativar limites da plataforma",
        "D": "Usar RPA no lugar do Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "Best Practices"]
    },
    {
      id: "M4-P1-Q12",
      text: "Uma equipe quer que um Flow rode em resposta a um evento externo publicado pela MuleSoft. Qual recurso Salesforce está mais alinhado a esse caso?",
      options: {
        "A": "Email Services",
        "B": "Platform Events como gatilho",
        "C": "Custom Metadata Types",
        "D": "Static Resources"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Platform Events"]
    },
    {
      id: "M4-P1-Q13",
      text: "Um candidato sugere usar Screen Flow para toda lógica, inclusive cenários sem interface. Por que isso pode ser uma má escolha?",
      options: {
        "A": "Screen Flow não suporta apex actions",
        "B": "Autolaunched Flow is more appropriate for logic without UI, facilitating reuse and orchestration",
        "C": "Screen Flow não suporta subflows",
        "D": "Screen Flow não pode usar External Services"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    },
    {
      id: "M4-P1-Q14",
      text: "Um Record‑Triggered Flow faz atualizações em massa, mas está falhando por limites de DML. Qual prática está mais alinhada a boas práticas?",
      options: {
        "A": "Fazer DML dentro de loops sem agrupar registros",
        "B": "Usar padrões de bulkification e evitar DML em loops",
        "C": "Sempre reduzir o número de registros processados",
        "D": "Mover tudo para RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    },
    {
      id: "M4-P1-Q15",
      text: "Um item de prova mostra um cenário simples de automação de CRM com lógica declarativa, sem necessidade de código complexo. Qual ferramenta a prova tende a preferir?",
      options: {
        "A": "Apex triggers apenas",
        "B": "Salesforce Flow",
        "C": "MuleSoft RPA",
        "D": "Custom Java Services"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    }
  ],
  "M4-P2": [
    {
      id: "M4-P2-Q1",
      text: "AnyAirlines quer que um Screen Flow consuma uma API publicada na Anypoint Platform usando um contrato OpenAPI. Qual é o caminho recomendado?",
      options: {
        "A": "Criar Apex HTTP callout manualmente",
        "B": "Importar a especificação via External Services e usar a Action no Flow",
        "C": "Usar apenas HTTP Callout sem contrato",
        "D": "Criar um RPA para chamar a API"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "External Services"]
    },
    {
      id: "M4-P2-Q2",
      text: "NTO tem um cenário em que o Flow precisa chamar uma API cujo contrato ainda está em construção, mas há um Mocking Service disponível no Exchange. Como isso pode ser aproveitado?",
      options: {
        "A": "Não pode; Flow exige API real",
        "B": "External Services podem apontar para a URL do Mocking Service para testes",
        "C": "Somente Composer pode usar Mocking Service",
        "D": "Somente RPA pode usar Mocking Service"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Mocking Service"]
    },
    {
      id: "M4-P2-Q3",
      text: "Um Einstein Bot coleta o número de pedido do cliente e precisa obter o status via MuleSoft. Qual sequência está mais alinhada com a arquitetura recomendada?",
      options: {
        "A": "Bot → RPA → Banco de dados diretamente",
        "B": "Bot → Flow → Anypoint API → Sistema de pedidos",
        "C": "Bot → Composer → Planilha",
        "D": "Bot → Apex batch anonimo"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Architecture", "Einstein Bot"]
    },
    {
      id: "M4-P2-Q4",
      text: "Um Flow que chama um External Service falha with erro 500 na API. Qual recurso do Flow deve ser usado para tratar essa falha de forma controlada?",
      options: {
        "A": "Path padrão do elemento",
        "B": "Fault Path (caminho de erro)",
        "C": "Loop infinito",
        "D": "Recurso de Debug apenas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Error Handling"]
    },
    {
      id: "M4-P2-Q5",
      text: "Em um cenário, o Flow precisa registrar um log e criar um caso interno sempre que uma chamada a API externa falhar. Onde essa lógica deve ficar?",
      options: {
        "A": "Dentro do Fault Path associado à action de callout",
        "B": "Fora do Flow, apenas em Apex",
        "C": "No client que chamou o Flow",
        "D": "Em um Workflow Rule"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "Error Handling"]
    },
    {
      id: "M4-P2-Q6",
      text: "NTO quer automatizar testes de Record‑Triggered Flows para garantir que não quebrem após mudanças. Qual recurso é mais apropriado?",
      options: {
        "A": "Flow Test (ferramenta declarativa)",
        "B": "Apenas testes manuais com Debug",
        "C": "Logs de execução em produção",
        "D": "Testes Apex exclusivamente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "Testing"]
    },
    {
      id: "M4-P2-Q7",
      text: "Um item de prova descreve o uso da ferramenta de Debug de Flow. Qual vantagem principal ela oferece?",
      options: {
        "A": "Substitui todos os testes automatizados",
        "B": "Permite executar o fluxo como um usuário específico e visualizar o caminho e valores das variáveis",
        "C": "Apenas mostra logs de texto",
        "D": "Só funciona para Screen Flows"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Debug"]
    },
    {
      id: "M4-P2-Q8",
      text: "Um Flow acionado por registro está falhando de forma intermitente por causa de uma API instável. Qual combinação é mais adequada?",
      options: {
        "A": "Ignorar as falhas",
        "B": "Implementar tratamento via Fault Path e, se necessário, registrar o erro para reprocessamento",
        "C": "Desativar o Flow",
        "D": "Transferir tudo para Workflow Rules"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Error Handling"]
    },
    {
      id: "M4-P2-Q9",
      text: "AnyAirlines quer usar Einstein Bot como camada inicial e, dependendo da resposta da API, direcionar o caso para um agente humano. Onde essa decisão deve ser tomada?",
      options: {
        "A": "No banco de dados",
        "B": "No Flow que o Bot invoca, com base no retorno da API",
        "C": "Apenas no RPA",
        "D": "Apenas em Apex"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Orchestration"]
    },
    {
      id: "M4-P2-Q10",
      text: "NTO precisa decidir entre External Services e HTTP Callout em um cenário de prova. A API já tem especificação publicada no Exchange e precisa ser reutilizada em vários Flows. Qual é a melhor escolha?",
      options: {
        "A": "HTTP Callout",
        "B": "External Services, para aproveitar o contrato e governança",
        "C": "Apenas Apex",
        "D": "Apenas Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "External Services"]
    },
    {
      id: "M4-P2-Q11",
      text: "Um Flow consome uma API sem contrato, usando apenas URL e método HTTP. Mais tarde, a API ganha especificação OAS. O que a prova tende a considerar uma melhoria?",
      options: {
        "A": "Manter HTTP Callout para simplicidade",
        "B": "Migrar para External Services baseado na especificação",
        "C": "Trocar Flow por RPA",
        "D": "Trocar Flow por Apex triggers"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    },
    {
      id: "M4-P2-Q12",
      text: "Um cenário descreve que analistas de negócio precisam simular entradas diferentes e ver rapidamente o comportamento do Flow. Qual combinação é mais adequada?",
      options: {
        "A": "Flow Test + Debug Tool",
        "B": "Apenas logs em produção",
        "C": "Apenas testes Apex",
        "D": "Apenas monitoramento em Anypoint"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Salesforce Flow", "Testing"]
    },
    {
      id: "M4-P2-Q13",
      text: "Uma integração entre Flow e MuleSoft RPA é implementada via External Services chamando um endpoint do RPA Manager. O que isso representa em termos de hiperautomação?",
      options: {
        "A": "Uso do Flow como gatilho humano chamando processos RPA",
        "B": "Uso do RPA como interface de usuário",
        "C": "Substituição de APIs por bots",
        "D": "Eliminação da necessidade de Exchange"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Hyperautomation", "RPA"]
    },
    {
      id: "M4-P2-Q14",
      text: "Em um cenário de prova, uma alternativa sugere “usar Flow sem nenhum tipo de teste ou debug, confiando somente em produção”. Como essa opção deve ser vista?",
      options: {
        "A": "Correta, pois Flow é declarativo",
        "B": "Errada, pois Flow Test e Debug são recursos importantes cobrados na prova",
        "C": "Neutra, sem impacto",
        "D": "Preferível a qualquer estratégia de testes automatizados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    },
    {
      id: "M4-P2-Q15",
      text: "Uma empresa quer garantir que um Record‑Triggered Flow que chama APIs externas não quebre ao receber dados inesperados. Qual prática é mais alinhada?",
      options: {
        "A": "Assumir que dados sempre são válidos",
        "B": "Validar dados no Flow antes de chamar a API e usar Fault Paths para tratar falhas",
        "C": "Confiar apenas em logs da API",
        "D": "Desativar o Flow quando surgirem erros"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Error Handling"]
    }
  ],
  "M4-P3": [
    {
      id: "M4-P3-Q1",
      text: "AnyAirlines quer que um Screen Flow chame uma API MuleSoft que já está publicada como Experience API. Qual é a abordagem mais alinhada com API‑led?",
      options: {
        "A": "Flow chama diretamente o banco de dados, ignorando a API",
        "B": "Flow consome a Experience API via External Services",
        "C": "Flow usa RPA para consultar o sistema",
        "D": "Flow usa apenas campos calculados, sem integração"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led Connectivity", "Experience API"]
    },
    {
      id: "M4-P3-Q2",
      text: "NTO já possui uma System API para ERP e uma Process API para regras de crédito. Um candidato sugere que the Screen Flow chame diretamente a System API. Qual é a opção mais alinhada?",
      options: {
        "A": "Aceitar, pois Flow deve sempre falar com System APIs",
        "B": "Preferir que o Flow consuma a Process/Experience API, reutilizando a orquestração existente",
        "C": "Ignorar APIs e usar Composer",
        "D": "Usar sempre RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API-led Connectivity", "Best Practices"]
    },
    {
      id: "M4-P3-Q3",
      text: "Um item de prova oferece duas alternativas:\n- A) Criar nova System API específica para um projeto, mesmo já existindo outra que expõe os mesmos dados\n- B) Reutilizar a System API existente e, se necessário, criar uma Experience API\nQual delas está mais alinhada com reutilização?",
      options: {
        "A": "A",
        "B": "B"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["API-led Connectivity", "Reuse"]
    },
    {
      id: "M4-P3-Q4",
      text: "Um Flow de entrada (Screen Flow) coleta dados para sinistro e aciona um RPA que preenche um sistema legado. O que o exame provavelmente quer reforçar?",
      options: {
        "A": "Flow como camada de interface humana em hiperautomação",
        "B": "RPA como interface principal",
        "C": "APIs substituindo Flow",
        "D": "Composer substituindo Flow"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Hyperautomation", "RPA"]
    },
    {
      id: "M4-P3-Q5",
      text: "Uma alternativa sugere colocar toda a lógica de transformação de dados no Screen Flow, mesmo já existindo uma Process API para isso. Por que isso costuma ser uma pegadinha?",
      options: {
        "A": "Flows não podem transformar dados",
        "B": "API‑led recomenda centralizar lógica de negócio na Process API, não na UI",
        "C": "Process APIs não suportam múltiplos consumidores",
        "D": "Examens não cobram Process APIs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Architecture", "API-led Connectivity"]
    },
    {
      id: "M4-P3-Q6",
      text: "Um cenário descreve que, quando uma venda é fechada, o Flow deve: 1) Disparar RPA para sistema legado de logística, 2) Chamar API de SMS, 3) Registrar logs. Qual dos componentes deveria coordenar esse fluxo?",
      options: {
        "A": "Apenas RPA",
        "B": "Record‑Triggered Flow com chamadas às integrações",
        "C": "Apenas Composer",
        "D": "Apenas Apex"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Orchestration"]
    },
    {
      id: "M4-P3-Q7",
      text: "Em uma questão, uma opção propõe usar Flow Orchestration para um processo extremamente simples de uma etapa, que poderia ser resolvido com um único Record‑Triggered Flow. Que tipo de pegadinha é essa?",
      options: {
        "A": "Alternativa tecnicamente impossível",
        "B": "Alternativa que adiciona complexidade desnecessária",
        "C": "Alternativa que ignora reutilização",
        "D": "Alternativa que viola limites de DML"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow Orchestration", "Best Practices"]
    },
    {
      id: "M4-P3-Q8",
      text: "Uma empresa planeja fazer um fluxo que, ao atualizar um registro, chama vários subflows e APIs em série, correndo risco de chegar em limites. Qual abordagem é mais madura?",
      options: {
        "A": "Ignorar limites e confiar em retries",
        "B": "Repensar a arquitetura usando Process APIs, bulkification e, se necessário, Orchestration",
        "C": "Mover tudo para RPA",
        "D": "Desativar validações no Salesforce"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Architecture", "Best Practices"]
    },
    {
      id: "M4-P3-Q9",
      text: "NTO quer garantir que decisões complexas de roteamento (por exemplo, para qual fila enviar um caso) fiquem configuráveis e reutilizáveis. O que a prova tende a preferir?",
      options: {
        "A": "Lógica espalhada em vários Apex Triggers",
        "B": "Lógica centralizada em Flows reutilizáveis ou subflows",
        "C": "Lógica em scripts locais",
        "D": "Lógica somente na API externa"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Salesforce Flow", "Best Practices"]
    }
  "M6-P1": [
    {
      id: "M6-P1-Q1",
      text: "AnyAirlines quer visibilidade em tempo real sobre tempo de resposta, taxa de erro e uso de CPU das APIs que suportam um fluxo de hiperautomação. Qual componente é mais adequado?",
      options: {
        "A": "Anypoint Studio",
        "B": "Anypoint Monitoring",
        "C": "API Designer",
        "D": "RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Monitoring", "Anypoint Platform"]
    },
    {
      id: "M6-P1-Q2",
      text: "Northern Trail Outfitters (NTO) precisa pesquisar rapidamente logs de uma API específica para entender por que um Salesforce Flow recebeu erro 500. Qual recurso deve ser usado?",
      options: {
        "A": "Log Search no Anypoint Monitoring",
        "B": "Somente arquivos locais de log no servidor",
        "C": "E‑mails de usuários finais",
        "D": "Console do navegador"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Troubleshooting", "Logs"]
    },
    {
      id: "M6-P1-Q3",
      text: "Um cenário descreve dashboards com gráficos de erro, latência e throughput das APIs de crédito. Que funcionalidade está sendo usada?",
      options: {
        "A": "Custom Dashboards do Anypoint Monitoring",
        "B": "API Notebook",
        "C": "Exchange Portal",
        "D": "Visualforce Reports"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Monitoring", "Dashboards"]
    },
    {
      id: "M6-P1-Q4",
      text: "Uma empresa precisa aplicar políticas de segurança e de controle de tráfego (Rate Limiting, Client ID Enforcement) em APIs já existentes. Qual componente é responsável?",
      options: {
        "A": "Runtime Manager",
        "B": "API Manager",
        "C": "Anypoint Studio",
        "D": "RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "API Manager"]
    },
    {
      id: "M6-P1-Q5",
      text: "A prova mostra duas opções de endpoint: Basic Endpoint e Proxy Endpoint. Por que alguém escolheria Proxy Endpoint?",
      options: {
        "A": "Para evitar monitoramento",
        "B": "Para colocar uma camada de proxy na frente da API e aplicar políticas sem alterar o código original",
        "C": "Porque Basic Endpoint não suporta HTTP",
        "D": "Porque só Proxy funciona com CloudHub"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API Manager", "Proxy"]
    },
    {
      id: "M6-P1-Q6",
      text: "NTO quer proteger APIs críticas expostas para ferramentas como Flow e Composer, exigindo que cada consumidor se identifique. Qual política deve ser usada?",
      options: {
        "A": "IP Whitelisting",
        "B": "Client ID Enforcement",
        "C": "Rate Limiting somente",
        "D": "Nenhuma; basta usar HTTP"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "Governance"]
    },
    {
      id: "M6-P1-Q7",
      text: "Um cenário fala sobre limitar requisições para evitar que um Composer mal configurado derrube um sistema legado. Qual política atende isso?",
      options: {
        "A": "Client ID Enforcement",
        "B": "Rate Limiting / Throttling",
        "C": "IP Whitelisting",
        "D": "JWT Validation"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Rate Limiting"]
    },
    {
      id: "M6-P1-Q8",
      text: "Uma empresa quer garantir que apenas endereços IP da infraestrutura Salesforce acessem uma determinada API. Que política se aplica?",
      options: {
        "A": "SLA Tiers",
        "B": "IP Whitelisting",
        "C": "CORS",
        "D": "Retry Policy"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "IP Whitelisting"]
    },
    {
      id: "M6-P1-Q9",
      text: "AnyAirlines quer ver um mapa visual mostrando como APIs se conectam umas às outras em seu ecossistema. Qual recurso é mais adequado?",
      options: {
        "A": "Visualizer",
        "B": "Functional Monitoring",
        "C": "Exchange Docs",
        "D": "API Designer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Monitoring", "Visualizer"]
    },
    {
      id: "M6-P1-Q10",
      text: "Um item de prova descreve testes automatizados periódicos que chamam APIs para verificar não só se estão “de pé”, mas se devolvem respostas corretas. O que está sendo descrito?",
      options: {
        "A": "Unit tests em Studio",
        "B": "Functional Monitoring",
        "C": "Logs de servidor",
        "D": "Health Check do sistema operacional"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Monitoring", "Functional Monitoring"]
    },
    {
      id: "M6-P1-Q11",
      text: "NTO precisa ver, em um único lugar, logs de todas as aplicações Mule para facilitar troubleshooting de fluxos que envolvem múltiplas APIs. Qual vantagem do Anypoint Monitoring está sendo explorada?",
      options: {
        "A": "Logs locais em cada worker",
        "B": "Centralização de logs com Log Search",
        "C": "Apenas dashboards de CPU",
        "D": "Apenas API Notebook"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Logs", "Centralization"]
    },
    {
      id: "M6-P1-Q12",
      text: "Uma alternativa afirma que “API Manager substitui completamente Anypoint Monitoring”. Como isso deve ser avaliado?",
      options: {
        "A": "Correto",
        "B": "Errado; API Manager governa endpoints e políticas, Monitoring foca em observabilidade e métricas",
        "C": "Verdadeiro apenas em CloudHub",
        "D": "Verdadeiro apenas on‑premises"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Monitoring"]
    },
    {
      id: "M6-P1-Q13",
      text: "Uma equipe quer ser notificada automaticamente por Slack quando a taxa de erro de uma API ultrapassar certo limite. Que funcionalidade é usada?",
      options: {
        "A": "Alertas do Anypoint Monitoring",
        "B": "Apenas logs locais",
        "C": "API Designer comments",
        "D": "RPA email step"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Monitoring", "Alerts"]
    },
    {
      id: "M6-P1-Q14",
      text: "Um cenário mostra que o Flow recebe “Too Many Requests” (429) de uma API gerenciada. O que isso provavelmente indica?",
      options: {
        "A": "Erro de autenticação",
        "B": "Política de Rate Limiting ou SLA aplicada no API Manager",
        "C": "Falha de hardware",
        "D": "Falha de DNS"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Rate Limiting"]
    },
    {
      id: "M6-P1-Q15",
      text: "Um candidato diz que “não é necessário monitorar APIs internas, apenas as públicas”. Qual é a visão alinhada com a prova?",
      options: {
        "A": "Correcta; internas não precisam de monitoramento",
        "B": "Errada; APIs internas são críticas em cadeias de hiperautomação e devem ser monitoradas",
        "C": "Depende do humor da equipe",
        "D": "Só RPA precisa de monitoramento"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Practices", "Monitoring"]
    }
  ],
  "M6-P2": [
    {
      id: "M6-P2-Q1",
      text: "AnyAirlines nota que o tempo de resposta de uma API aumentou muito, mas o uso de CPU dos workers está baixo. Qual conclusão é mais provável?",
      options: {
        "A": "Problema na infraestrutura da API",
        "B": "Problema no sistema de destino (ex: banco de dados lento)",
        "C": "Falha no API Manager",
        "D": "Falha de rede entre CloudHub e internet"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Troubleshooting", "Performance"]
    },
    {
      id: "M6-P2-Q2",
      text: "Northern Trail Outfitters (NTO) vê CPU constantemente em 100% para uma API crítica. Qual ação está mais alinhada?",
      options: {
        "A": "Reduzir o número de requisições aceitas",
        "B": "Aumentar vCores ou número de workers (escala vertical/horizontal)",
        "C": "Desativar logs",
        "D": "Ignorar, se não há erros 500"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Scaling", "Performance"]
    },
    {
      id: "M6-P2-Q3",
      text: "Um fluxo de hiperautomação começa no Salesforce Flow, chama uma API MuleSoft, que por sua vez chama um sistema legado. O Flow recebe 500. Onde o time deve olhar primeiro?",
      options: {
        "A": "Logs do Flow apenas",
        "B": "Log Search no Anypoint Monitoring para entender o erro no nível da API",
        "C": "Logs do usuário final apenas",
        "D": "Configurações DNS"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Troubleshooting", "Logs"]
    },
    {
      id: "M6-P2-Q4",
      text: "Em um cenário, RPA e Composer consomem a mesma API de estoque. De repente, o sistema legado começa a travar. Qual combinação é mais adequada?",
      options: {
        "A": "Escalar apenas RPA",
        "B": "Aplicar Rate Limiting/SLA Tiers e, se necessário, ajustar capacidade do backend",
        "C": "Desativar monitoramento",
        "D": "Permitir tráfego irrestrito"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Performance"]
    },
    {
      id: "M6-P2-Q5",
      text: "NTO quer diferenciar problemas de infraestrutura (CPU/memória) de problemas de aplicação (erros de negócio). Qual conjunto de visões ajuda?",
      options: {
        "A": "Apenas logs locais",
        "B": "Dashboards de infra + métricas de aplicação no Anypoint Monitoring",
        "C": "Somente gráficos de CPU",
        "D": "Somente contagem de requisições"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Observability", "Monitoring"]
    },
    {
      id: "M6-P2-Q6",
      text: "Um item de prova mostra um gráfico em que a taxa de erro aumenta junto com a latência, enquanto CPU se mantém baixa. O que isso sugere?",
      options: {
        "A": "Gargalo de infraestrutura da API",
        "B": "Gargalo no sistema de destino ou dependência externa",
        "C": "Erro no RPA",
        "D": "Problema de DNS"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Troubleshooting", "Performance"]
    },
    {
      id: "M6-P2-Q7",
      text: "Uma empresa quer detectar proativamente se uma API crítica parou de responder como esperado para um cenário específico, antes que usuários reclamem. Qual recurso usar?",
      options: {
        "A": "Functional Monitoring com testes agendados",
        "B": "Apenas Console de Logs",
        "C": "Apenas alertas de CPU alta",
        "D": "Apenas testes manuais ocasionais"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Monitoring", "Functional Monitoring"]
    },
    {
      id: "M6-P2-Q8",
      text: "AnyAirlines observa picos de tráfego gerados por um Flow mal configurado, causando falhas em lote. Qual resposta mais madura?",
      options: {
        "A": "Desativar o Flow sem análise",
        "B": "Ajustar design do Flow e, em paralelo, configurar Rate Limiting e alertas",
        "C": "Duplicar a API",
        "D": "Ignorar, esperando o volume cair"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Practices", "Governance"]
    },
    {
      id: "M6-P2-Q9",
      text: "NTO precisa investigar um caso específico em que um pedido falhou em uma cadeia de APIs. Qual abordagem é mais eficiente?",
      options: {
        "A": "Pedir prints de tela ao usuário",
        "B": "Correlacionar logs da execução daquela requisição via Anypoint Monitoring",
        "C": "Desinstalar a API",
        "D": "Ler todos os logs de todos os dias manualmente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Troubleshooting", "Logs"]
    },
    {
      id: "M6-P2-Q10",
      text: "Um bot RPA dispara milhares de chamadas, gerando erros 429. O que isso indica e qual ação combina melhor?",
      options: {
        "A": "Indica problema de autenticação; trocar credenciais",
        "B": "Indica violação de Rate Limit; revisar política e padrão de chamada do bot",
        "C": "Indica que a API está offline",
        "D": "Indica erro de DNS"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["RPA", "Governance"]
    },
    {
      id: "M6-P2-Q11",
      text: "Um candidato afirma: “não é necessário configurar alertas, pois o time sempre vê dashboards diariamente”. Como a prova tende a avaliar isso?",
      options: {
        "A": "Correto",
        "B": "Limitado; alertas automáticos são essenciais para responder rapidamente a incidentes",
        "C": "Válido apenas em produção",
        "D": "Suficiente para ambientes críticos"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Practices", "Monitoring"]
    },
    {
      id: "M6-P2-Q12",
      text: "Um cenário mostra que uma API está “up”, mas chamadas para um endpoint específico falham. Qual combinação de recursos ajuda na análise?",
      options: {
        "A": "Apenas status de worker",
        "B": "Logs detalhados e Functional Monitoring para aquele endpoint",
        "C": "Somente dashboards de CPU",
        "D": "Apenas logs do RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Troubleshooting", "Monitoring"]
    },
    {
      id: "M6-P2-Q13",
      text: "AnyAirlines quer reduzir o MTTR (Mean Time To Resolve) para falhas em integrações. Qual prática é mais alinhada?",
      options: {
        "A": "Depender de e‑mails de usuários",
        "B": "Configurar monitoramento, alertas e dashboards claros para APIs chave",
        "C": "Apenas aumentar vCores",
        "D": "Desativar logs para simplificar"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Practices", "Monitoring"]
    },
    {
      id: "M6-P2-Q14",
      text: "Um time observa que, após um deploy, erros começaram a ocorrer. O que deve ser avaliado no Monitoring?",
      options: {
        "A": "Nenhuma métrica, pois é esperado errar",
        "B": "Comparação de métricas antes/depois do deploy (erros, latência, throughput)",
        "C": "Apenas logs locais",
        "D": "Apenas número de workers"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Practices", "Monitoring"]
    },
    {
      id: "M6-P2-Q15",
      text: "Uma alternativa sugere que “para resolver problemas de performance, a melhor estratégia é sempre adicionar mais vCores, sem analisar métricas detalhadas”. Como isso deve ser visto?",
      options: {
        "A": "Correto em todos os casos",
        "B": "Pegadinha; é preciso entender se o gargalo é infra, aplicação ou sistema destino antes de escalar",
        "C": "Aceitável apenas on‑premises",
        "D": "Aceitável apenas em CloudHub"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Best Practices", "Performance"]
    }
  ],
  "M6-P3": [
    {
      id: "M6-P3-Q1",
      text: "AnyAirlines quer garantir que integrações de diferentes times não derrubem um sistema legado via APIs. Qual combinação melhor reflete a abordagem recomendada?",
      options: {
        "A": "Nenhuma limitação; confiar nos times",
        "B": "Aplicar políticas de Rate Limiting/SLA e monitorar com dashboards e alertas",
        "C": "Desativar todas as integrações",
        "D": "Usar apenas RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Best Practices"]
    },
    {
      id: "M6-P3-Q2",
      text: "Uma alternativa sugere expor APIs internas sem autenticação “para simplificar o acesso por RPA e Flow”. Por que isso é uma má prática?",
      options: {
        "A": "Porque APIs internas não podem ser usadas",
        "B": "Porque ignora segurança básica; políticas como Client ID Enforcement são recomendadas",
        "C": "Porque APIs com autenticação não funcionam com Flow",
        "D": "Porque Anypoint Monitoring não suporta APIs internas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "Best Practices"]
    },
    {
      id: "M6-P3-Q3",
      text: "NTO tem múltiplas APIs críticas encadeadas em um processo de hiperautomação. O que melhor representa uma estratégia madura?",
      options: {
        "A": "Monitorar apenas a API final do fluxo",
        "B": "Monitorar e aplicar políticas nas principais APIs, entendendo o impacto de cada uma",
        "C": "Desativar logs para reduzir custo",
        "D": "Depender apenas do monitoramento de RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Strategy", "Observability"]
    },
    {
      id: "M6-P3-Q4",
      text: "Uma questão mostra que um novo cliente externo deve solicitar acesso a uma API. Qual fluxo esperado na plataforma MuleSoft?",
      options: {
        "A": "Cliente acessa o API Portal, solicita acesso e recebe Client ID/Secret aprovado",
        "B": "Cliente recebe acesso direto ao banco",
        "C": "Cliente chama a API sem autenticação",
        "D": "Cliente precisa de usuário administrativo no Anypoint Platform"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Governance", "API Portal"]
    },
    {
      id: "M6-P3-Q5",
      text: "Um candidato escolhe uma opção que diz: “para evitar limites, é melhor remover Rate Limiting de APIs que suportam RPA e Flows”. Como isso deve ser lido?",
      options: {
        "A": "Correcta; limites atrapalham automações",
        "B": "Pegadinha; limites protegem sistemas e ajudam a manter estabilidade",
        "C": "Correcta apenas para sistemas internos",
        "D": "Correcta se houver muitos consumidores"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Best Practices"]
    },
    {
      id: "M6-P3-Q6",
      text: "AnyAirlines quer aplicar regras diferentes de consumo para clientes Gold, Silver e Bronze. Qual funcionalidade se encaixa melhor?",
      options: {
        "A": "IP Whitelisting",
        "B": "SLA‑Based Policies no API Manager",
        "C": "Apenas Rate Limiting estático",
        "D": "Somente logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "SLA"]
    },
    {
      id: "M6-P3-Q7",
      text: "Uma alternativa sugere criar cópias idênticas de uma API para separar tráfego interno e externo, em vez de usar políticas e gestão adequada. Por que isso normalmente é errado?",
      options: {
        "A": "Porque não se pode ter mais de uma API",
        "B": "Porque duplicação aumenta complexidade e reduz reutilização, ao invés de usar governança apropriada",
        "C": "Porque políticas não funcionam em APIs internas",
        "D": "Porque só RPA pode usar APIs internas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Architecture", "Reuse"]
    },
    {
      id: "M6-P3-Q8",
      text: "NTO quer que incidentes de APIs críticas sejam rapidamente comunicados às equipes corretas. Qual combinação é mais alinhada?",
      options: {
        "A": "Apenas dashboards sem alertas",
        "B": "Alertas configurados no Monitoring integrados a canais como e‑mail ou Slack",
        "C": "Depender de clientes externos para avisar",
        "D": "Apenas reuniões semanais de status"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Monitoring", "Alerts"]
    },
    {
      id: "M6-P3-Q9",
      text: "Uma questão mostra que uma API está configurada como Basic Endpoint, diretamente no runtime. Em qual situação considerar Proxy Endpoint faz mais sentido?",
      options: {
        "A": "Quando não se deseja aplicar nenhuma política",
        "B": "Quando se quer colocar um proxy entre consumidor e backend, sem tocar no código da API original",
        "C": "Quando se quer remover monitoramento",
        "D": "Quando a API está em beta"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["API Manager", "Proxy"]
    },
    {
      id: "M6-P3-Q10",
      text: "Um candidato propõe “desabilitar logs detalhados” como solução primária para problemas de performance, sem qualquer análise. Por que isso é uma resposta fraca?",
      options: {
        "A": "Porque logs nunca impactam performance",
        "B": "Porque ataca sintomas às cegas, sem entender métricas nem causas reais",
        "C": "Porque Monitoring não usa logs",
        "D": "Porque API Manager ignora logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Troubleshooting", "Best Practices"]
    },
    {
      id: "M6-P3-Q11",
      text: "AnyAirlines quer evidências de que sua arquitetura está saudável: tempos estáveis, poucas falhas, políticas aplicadas. Qual combinação de ferramentas suporta essa visão?",
      options: {
        "A": "Apenas Studio",
        "B": "Anypoint Monitoring + API Manager (políticas, analytics, SLAs)",
        "C": "Apenas Exchange",
        "D": "Apenas RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Strategy", "Observability"]
    },
    {
      id: "M6-P3-Q12",
      text: "Uma alternativa afirma: “Como as APIs são internas, não há necessidade de políticas de segurança nem controle de quem consome”. Como o candidato deve responder?",
      options: {
        "A": "Concordar, pois segurança é só para APIs externas",
        "B": "Discordar; mesmo internas, APIs críticas precisam de governança e controle de acesso",
        "C": "Depende do time de rede",
        "D": "Verdadeiro apenas em Sandbox"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Security", "Governance"]
    },
    {
      id: "M6-P3-Q13",
      text: "NTO quer uma forma rápida de visualizar, em produção, quem está consumindo cada API e qual o volume por consumidor. Qual componente ajuda?",
      options: {
        "A": "API Manager (analytics e consumer metrics)",
        "B": "Studio",
        "C": "Exchange",
        "D": "Flow Builder"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Governance", "Analytics"]
    },
    {
      id: "M6-P3-Q14",
      text: "Uma questão mostra um fluxo onde Flow → API → Sistema legado. A resposta “correta” sugere desativar Rate Limiting para resolver picos de erro. Que ponto a prova tenta testar?",
      options: {
        "A": "Que limites são sempre ruins",
        "B": "Que remover Rate Limiting pode agravar o problema e derrubar o sistema legado",
        "C": "Que Flow não suporta limites",
        "D": "Que APIs não precisam de proteção"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Resilience"]
    },
    {
      id: "M6-P3-Q15",
      text: "Uma alternativa final diz: “Boa governança significa nunca tocar em políticas ou monitoramento depois da primeira configuração”. Qual é a visão de melhores práticas?",
      options: {
        "A": "Correcta; configuração inicial basta",
        "B": "Errada; governança e monitoramento são contínuos, ajustados conforme uso e incidentes",
        "C": "Correcta apenas em produção",
        "D": "Correcta apenas para APIs internas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Governance", "Best Practices"]
    }
  ],
  "M7-P1": [
    {
      id: "M7-P1-Q1",
      text: "AnyAirlines quer evitar que cada equipe crie integrações duplicadas para o mesmo sistema. Qual papel o Anypoint Exchange desempenha nisso?",
      options: {
        "A": "IDE para desenvolvimento de fluxos Mule",
        "B": "Catálogo central de ativos reutilizáveis (APIs, conectores, templates, fragmentos, RPA)",
        "C": "Ferramenta de deploy on‑premises",
        "D": "Console de RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Reuse"]
    },
    {
      id: "M7-P1-Q2",
      text: "Northern Trail Outfitters (NTO) quer publicar especificações de APIs para que Salesforce Flow possa consumi‑las via External Services. Que tipo de ativo deve ser publicado?",
      options: {
        "A": "API Specification (RAML/OAS)",
        "B": "Apenas API Fragments",
        "C": "Apenas Connectors",
        "D": "Apenas Templates"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exchange", "Salesforce Flow"]
    },
    {
      id: "M7-P1-Q3",
      text: "Um desenvolvedor de Flow precisa entender quais parâmetros uma API de RH MuleSoft exige. Qual é o primeiro passo recomendado?",
      options: {
        "A": "Ver código fonte da aplicação Mule",
        "B": "Consultar o Anypoint Exchange e revisar documentação/console interativo da API",
        "C": "Perguntar por e‑mail ao time de integração",
        "D": "Acessar diretamente o banco de dados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Discovery"]
    },
    {
      id: "M7-P1-Q4",
      text: "Um cenário descreve que uma organização quer compartilhar conectores, templates e fragmentos entre times internos apenas. Qual tipo de ativo/Exchange deve ser usado?",
      options: {
        "A": "Exchange público apenas",
        "B": "Exchange privado da organização",
        "C": "GitHub público",
        "D": "File server compartilhado"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P1-Q5",
      text: "Uma API é publicada no Exchange com sua especificação. O que o Exchange oferece automaticamente para ajudar consumidores?",
      options: {
        "A": "Apenas download de um PDF",
        "B": "Console interativo para testar chamadas e documentação navegável",
        "C": "Apenas logs da API",
        "D": "Relatórios financeiros"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "API Portal"]
    },
    {
      id: "M7-P1-Q6",
      text: "NTO quer reutilizar um modelo padrão de “Endereço” em várias APIs RAML. Que tipo de ativo é mais adequado?",
      options: {
        "A": "API Specification completa",
        "B": "API Fragment (por exemplo, dataType de Endereço)",
        "C": "Template de projeto",
        "D": "RPA Asset"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "API Fragments"]
    },
    {
      id: "M7-P1-Q7",
      text: "Uma alternativa afirma que “Exchange armazena apenas APIs, não outros tipos de ativos”. Como isso deve ser avaliado?",
      options: {
        "A": "Correto",
        "B": "Falso; Exchange também armazena conectores, templates, fragments, RPA assets, etc.",
        "C": "Verdadeiro apenas on‑premises",
        "D": "Verdadeiro apenas para contas gratuitas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Asset Types"]
    },
    {
      id: "M7-P1-Q8",
      text: "Uma empresa quer consumir conectores oficiais para SAP e Oracle desenvolvidos pela MuleSoft e parceiros. Onde esses ativos ficam disponíveis?",
      options: {
        "A": "Apenas em Runtime Manager",
        "B": "No Anypoint Exchange público",
        "C": "Apenas em Composer",
        "D": "Apenas em RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Public Assets"]
    },
    {
      id: "M7-P1-Q9",
      text: "AnyAirlines deseja que os desenvolvedores vejam quais projetos dependem de um determinado fragmento RAML antes de modificá‑lo. Qual recurso do Exchange ajuda nisso?",
      options: {
        "A": "API Notebook",
        "B": "Dependency tracking",
        "C": "Visualizer",
        "D": "RPA Dashboard"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Dependencies"]
    },
    {
      id: "M7-P1-Q10",
      text: "Um item de prova descreve o Exchange como “primeira fonte de verdade” antes de criar qualquer nova integração. O que isso significa na prática?",
      options: {
        "A": "Sempre criar novas APIs sem olhar o catálogo",
        "B": "Consultar Exchange para ver se já existem APIs/ativos reutilizáveis antes de desenvolver algo novo",
        "C": "Usar Exchange apenas para documentação, nunca para reutilização",
        "D": "Usar apenas RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P1-Q11",
      text: "NTO quer publicar um processo RPA já existente para que outras áreas saibam que ela pode ser reutilizada. Onde isso deve ser exposto?",
      options: {
        "A": "Apenas na wiki interna",
        "B": "Como RPA Asset no Anypoint Exchange",
        "C": "Apenas no RPA Manager",
        "D": "Apenas em e‑mails"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "RPA Assets"]
    },
    {
      id: "M7-P1-Q12",
      text: "Uma alternativa diz que “o Exchange não tem impacto na prova, pois é apenas uma loja visual”. Como o candidato deve responder?",
      options: {
        "A": "Concordar; não é relevante",
        "B": "Discordar; Exchange é central para reutilização, Mocking Service e descoberta de ativos",
        "C": "Depende do projeto",
        "D": "Só vale para APIs públicas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Strategy"]
    },
    {
      id: "M7-P1-Q13",
      text: "Um time quer utilizar um template pronto de integração “Salesforce ↔ SAP” fornecido pela MuleSoft. Onde esse template é encontrado?",
      options: {
        "A": "API Manager",
        "B": "Anypoint Exchange (Templates)",
        "C": "Runtime Manager",
        "D": "RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Templates"]
    },
    {
      id: "M7-P1-Q14",
      text: "Uma questão contrasta duas opções: A) Publicar ativos no Exchange, com documentação e exemplos; B) Deixar apenas código em repositórios privados sem documentação. Qual opção mais representa a estratégia MuleSoft?",
      options: {
        "A": "Opção A",
        "B": "Opção B",
        "C": "Ambas igualmente",
        "D": "Nenhuma"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exchange", "Strategy"]
    },
    {
      id: "M7-P1-Q15",
      text: "Uma alternativa diz: “Para maximizar reutilização, sempre crie novos ativos sem registrar dependências.” Por que isso é uma pegadinha?",
      options: {
        "A": "Porque Exchange não suporta dependências",
        "B": "Porque ignorar dependências dificulta entendimento de impacto e governança",
        "C": "Porque dependências são opcionais",
        "D": "Porque só RPA usa dependências"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    }
  ],
  "M7-P2": [
    {
      id: "M7-P2-Q1",
      text: "AnyAirlines quer que a equipe de Salesforce Flow comece a integrar uma API de crédito antes que ela seja implementada de fato. O contrato RAML já existe. Qual recurso acelera isso?",
      options: {
        "A": "Deploy direto em produção",
        "B": "Mocking Service do Exchange, expondo uma URL simulada",
        "C": "Apenas testes manuais no Postman",
        "D": "Logs locais"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Mocking Service"]
    },
    {
      id: "M7-P2-Q2",
      text: "Northern Trail Outfitters (NTO) quer que desenvolvedores externos testem uma API usando um console interativo e, depois, solicitem credenciais de acesso. Onde isso é configurado?",
      options: {
        "A": "Runtime Manager",
        "B": "API Portal/Exchange com fluxo de “Request Access”",
        "C": "Anypoint Studio",
        "D": "Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "API Portal"]
    },
    {
      id: "M7-P2-Q3",
      text: "Um cenário descreve que o time de front‑end quer continuar testando contra mocks enquanto o backend evolui. Qual prática se encaixa melhor?",
      options: {
        "A": "Usar sempre o backend real",
        "B": "Usar Mocking Service com dados de exemplo até o backend estar pronto",
        "C": "Esperar o backend ficar pronto sem testar",
        "D": "Usar apenas RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Mocking Service"]
    },
    {
      id: "M7-P2-Q4",
      text: "Uma alternativa diz que “Mocking Service não é adequado para cenários de hiperautomação”. Como isso deve ser avaliado?",
      options: {
        "A": "Correto",
        "B": "Falso; é muito útil para permitir que Flow, Composer e RPA avancem em paralelo",
        "C": "Verdadeiro apenas para APIs simples",
        "D": "Verdadeiro apenas em CloudHub"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Strategy"]
    },
    {
      id: "M7-P2-Q5",
      text: "NTO quer separar o consumo interno e externo de uma API, mas manter a mesma especificação. O que o Exchange e API Manager podem oferecer?",
      options: {
        "A": "Nada; é preciso duplicar a API",
        "B": "Mesmo contrato no Exchange, com diferentes políticas e portais por consumidor",
        "C": "Apenas documentação estática",
        "D": "Apenas logs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P2-Q6",
      text: "Um desenvolvedor Mule quer criar tutoriais interativos que executam chamadas reais de API dentro da documentação. Que recurso é citado no conteúdo do módulo?",
      options: {
        "A": "API Notebook",
        "B": "Visualizer",
        "C": "RPA Recorder",
        "D": "Functional Monitoring"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exchange", "API Notebook"]
    },
    {
      id: "M7-P2-Q7",
      text: "Uma empresa deseja que times de negócio possam navegar pelos ativos de integração (APIs, templates, RPA) e entender o que já existe antes de abrir novas demandas. Qual prática apoia isso?",
      options: {
        "A": "Manter tudo apenas em repositórios Git internos",
        "B": "Publicar e manter ativos bem documentados no Exchange",
        "C": "Enviar e‑mails com anexos de código",
        "D": "Deixar a equipe de integração “lembrar de cabeça”"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Strategy"]
    },
    {
      id: "M7-P2-Q8",
      text: "AnyAirlines quer que consumidores externos solicitem acesso a uma API diretamente pela documentação e recebam um Client ID/Secret quando aprovados. Que fluxo é este?",
      options: {
        "A": "Provisionamento manual em Studio",
        "B": "Fluxo de “Request Access” em um API Portal do Exchange",
        "C": "Process Builder no Salesforce",
        "D": "Apenas e‑mail manual"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P2-Q9",
      text: "Uma alternativa sugere que “Mocking Service deve ser usado em produção para sempre, pois simplifica o backend”. Por que isso é uma pegadinha?",
      options: {
        "A": "Porque mocks nunca são permitidos",
        "B": "Porque Mocking Service é para testes e desenvolvimento paralelo, não para substituir o backend em produção",
        "C": "Porque só RPA usa mocks",
        "D": "Porque Flow não funciona com mocks"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P2-Q10",
      text: "Em um cenário de prova, o candidato precisa identificar onde encontrar exemplos de requisição e resposta para uma API. Qual local é o mais esperado?",
      options: {
        "A": "Código fonte da API apenas",
        "B": "Documentação e console interativo do asset no Exchange",
        "C": "E‑mails antigos da equipe",
        "D": "Logs de produção"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Discovery"]
    },
    {
      id: "M7-P2-Q11",
      text: "NTO quer controlar quem pode ver determinados ativos sensíveis (por exemplo, APIs internas de finanças). Como o Exchange ajuda?",
      options: {
        "A": "Não ajuda; tudo é sempre público",
        "B": "Permite configurar visibilidade e permissões de acesso a assets",
        "C": "Somente API Manager faz isso",
        "D": "Apenas logs controlam acesso"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P2-Q12",
      text: "Um time lança uma nova versão de uma API, mas quer manter a anterior para alguns consumidores. Como o Exchange contribui aqui?",
      options: {
        "A": "Não suporta versões",
        "B": "Permite versionar assets e manter documentação de múltiplas versões",
        "C": "Remove automaticamente versões antigas",
        "D": "Só mostra a última versão"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Versioning"]
    },
    {
      id: "M7-P2-Q13",
      text: "AnyAirlines quer registrar também templates e exemplos de integração de referência para que projetos futuros sejam acelerados. Como isso aparece no Exchange?",
      options: {
        "A": "Como APIs apenas",
        "B": "Como Templates e Examples publicados como assets",
        "C": "Como logs",
        "D": "Como workers"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P2-Q14",
      text: "Uma alternativa afirma que “apenas APIs públicas da MuleSoft podem ser colocadas no Exchange; APIs internas da empresa não”. Como isso deve ser tratado?",
      options: {
        "A": "Correto",
        "B": "Falso; organizações podem ter Exchanges privados com seus próprios assets internos",
        "C": "Verdadeiro apenas para parceiros",
        "D": "Verdadeiro apenas em CloudHub"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P2-Q15",
      text: "Um time quer criar um portal de desenvolvedores para uma API específica, com branding, docs e botão de acesso. Qual combinação de recursos suporta isso?",
      options: {
        "A": "API Portal no Exchange + API Manager para controle de acesso",
        "B": "Apenas Runtime Manager",
        "C": "Apenas Anypoint Studio",
        "D": "Apenas RPA Manager"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exchange", "Governance"]
    }
  ],
  "M7-P3": [
    {
      id: "M7-P3-Q1",
      text: "AnyAirlines observa que, mesmo com Exchange, times ainda criam integrações duplicadas. Qual prática ajuda a mudar esse comportamento?",
      options: {
        "A": "Proibir o uso de Exchange",
        "B": "Tornar Exchange parte obrigatória do processo: sempre buscar antes de construir",
        "C": "Usar apenas documentação em PDF",
        "D": "Manter apenas comunicação verbal"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q2",
      text: "Uma alternativa sugere usar sempre código novo em cada projeto, para que times “não fiquem dependentes” de assets comuns. Por que isso contraria a visão MuleSoft?",
      options: {
        "A": "Porque código novo é sempre mais lento",
        "B": "Porque MuleSoft valoriza reutilização, contratos bem definidos e catálogo central em vez de duplicação",
        "C": "Porque ativos comuns são proibidos",
        "D": "Porque código novo é mais seguro"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Strategy"]
    },
    {
      id: "M7-P3-Q3",
      text: "NTO quer garantir que todos os projetos usem um modelo único de “Cliente” em RAML. Qual combinação é mais alinhada?",
      options: {
        "A": "Criar o tipo “Cliente” em cada API individual",
        "B": "Criar um API Fragment com tipo “Cliente” e referenciá‑lo em múltiplas APIs",
        "C": "Definir apenas em documentação externa",
        "D": "Definir em banco de dados"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "API Fragments"]
    },
    {
      id: "M7-P3-Q4",
      text: "Uma questão apresenta duas opções: A) Reutilizar uma API existente, ajustando apenas a Experience API; B) Criar uma nova System API com mesma funcionalidade. Qual opção representa uma pegadinha?",
      options: {
        "A": "Opção A",
        "B": "Opção B (Gera duplicação desnecessária)",
        "C": "Ambas",
        "D": "Nenhuma"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q5",
      text: "AnyAirlines quer que novos desenvolvedores aprendam rapidamente como usar uma API interna, sem precisar falar com o time original. Qual recurso do Exchange ajuda?",
      options: {
        "A": "Apenas logs de execução",
        "B": "Documentação gerada automaticamente + exemplos + API Notebook",
        "C": "Apenas código fonte",
        "D": "Apenas reuniões de status"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q6",
      text: "Uma alternativa sugere que processos RPA não precisam aparecer no Exchange, pois “não são APIs”. Como o conteúdo do módulo contradiz isso?",
      options: {
        "A": "RPA não é citado no módulo",
        "B": "RPA Assets podem ser publicados no Exchange para promover visibilidade e reutilização",
        "C": "RPA é apenas para o time de infra",
        "D": "Exchange é apenas para RAML"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "RPA Assets"]
    },
    {
      id: "M7-P3-Q7",
      text: "NTO planeja deletar um fragmento RAML antigo sem verificar dependências. Que risco a prova quer que você reconheça?",
      options: {
        "A": "Nenhum; fragments não são usados em produção",
        "B": "APIs que dependem desse fragmento podem quebrar, e por isso é importante checar “Dependencies” no Exchange",
        "C": "O risco é apenas visual",
        "D": "O fragmento será deletado apenas localmente"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P3-Q8",
      text: "Uma questão afirma que “antes de criar uma nova API, o time deve sempre verificar o Exchange por assets existentes”. Que conceito isso reforça?",
      options: {
        "A": "Acoplamento forte",
        "B": "Reutilização e cultura de catálogo",
        "C": "Enfoque apenas em código",
        "D": "Rejeição a padrões"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q9",
      text: "AnyAirlines quer controlar quais times podem publicar novos assets no Exchange e quem pode apenas consumir. Onde esse controle é configurado?",
      options: {
        "A": "Somente em API Manager",
        "B": "Em permissões e papéis da organização no Anypoint Platform/Exchange",
        "C": "Apenas no Runtime Manager",
        "D": "Apenas no Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P3-Q10",
      text: "Uma alternativa diz: “Para ganhar tempo de prova, é melhor ignorar o Exchange e sempre assumir que precisamos construir algo novo”. Como isso deve ser tratado?",
      options: {
        "A": "Às vezes correto",
        "B": "Como pegadinha; a prova frequentemente espera que você procure reutilizar assets existentes",
        "C": "Correto apenas em projetos pequenos",
        "D": "Correto apenas para RPA"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q11",
      text: "NTO quer padronizar políticas de segurança para todas as APIs de um domínio. Como o Exchange pode ajudar indiretamente?",
      options: {
        "A": "Guardando apenas logs",
        "B": "Servindo como lugar único onde APIs e seus contratos são documentados e descobertos, facilitando aplicação consistente de políticas",
        "C": "Exchange não ajuda em segurança",
        "D": "Apenas RPA ajuda nisso"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Governance"]
    },
    {
      id: "M7-P3-Q12",
      text: "Uma alternativa sugere que “usar Exchange é opcional e não traz benefícios claros”. Baseado no módulo, qual resposta é mais alinhada?",
      options: {
        "A": "Concordar; é apenas uma vitrine",
        "B": "Discordar; Exchange é peça chave para reutilização, descoberta, mock, dependências e portais",
        "C": "Concordar em ambientes de desenvolvimento",
        "D": "Discordar apenas para APIs públicas"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Strategy"]
    },
    {
      id: "M7-P3-Q13",
      text: "AnyAirlines quer compartilhar, com equipes de front‑end, exemplos de chamadas de APIs que serão usadas em Flutter e React. Qual é o melhor local?",
      options: {
        "A": "Anypoint Exchange, na documentação e exemplos do asset correspondente",
        "B": "E‑mails avulsos",
        "C": "Logs de produção",
        "D": "Apenas no código fonte"
      },
      letters: ["A", "B", "C", "D"],
      correct: "A",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q14",
      text: "Uma questão mostra que, mesmo havendo uma API pronta no Exchange, a equipe escolhe criar outra idêntica por desconhecimento. O que isso indica?",
      options: {
        "A": "Arquitetura madura",
        "B": "Falta de cultura de catálogo e reutilização",
        "C": "Foco em velocidade",
        "D": "Independência técnica"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    },
    {
      id: "M7-P3-Q15",
      text: "Uma alternativa final afirma: “O Exchange é apenas para mostrar APIs para times externos, não tem valor para times internos”. Como o candidato deve responder?",
      options: {
        "A": "Concordar",
        "B": "Discordar; times internos são os maiores beneficiados com catálogo, mocks, templates e fragmentos",
        "C": "Depende do tamanho da empresa",
        "D": "Verdadeiro apenas para Salesforce"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Exchange", "Best Practices"]
    }
  ],
  "M8-P1": [
    {
      id: "M8-P1-Q1",
      text: "AnyAirlines quer orquestrar o processo completo de admissão de funcionários, com várias etapas e departamentos. Qual componente é mais apropriado?",
      options: {
        "A": "Um único Screen Flow simples",
        "B": "Salesforce Flow Orchestration",
        "C": "Apenas MuleSoft RPA",
        "D": "Apenas Composer"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Flow Orchestration", "Fundamentals"]
    },
    {
      id: "M8-P1-Q2",
      text: "Northern Trail Outfitters (NTO) precisa entender a estrutura básica de uma orquestração. Qual é a hierarquia correta?",
      options: {
        "A": "Step → Stage → Orchestration",
        "B": "Orchestration → Stages → Steps",
        "C": "Stage → Orchestration → Steps",
        "D": "Steps → Orchestration → Stages"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Structure", "Hierarchy"]
    },
    {
      id: "M8-P1-Q3",
      text: "Em um cenário, o processo de “Admissão de Funcionário” é dividido em Documentação, TI e Treinamento. Como isso deve ser modelado?",
      options: {
        "A": "Cada atividade como uma Orchestration separada",
        "B": "Estágios (Stages) representando cada agrupamento lógico",
        "C": "Apenas Steps sem Stages",
        "D": "Um único Step gigante"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Modeling", "Stages"]
    },
    {
      id: "M8-P1-Q4",
      text: "A orquestração possui etapas que executam Autolaunched Flows sem interação humana. Como são chamadas essas etapas?",
      options: {
        "A": "Interactive Steps",
        "B": "Background Steps",
        "C": "User Tasks",
        "D": "Bot Tasks"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Background Steps", "Automation"]
    },
    {
      id: "M8-P1-Q5",
      text: "Uma etapa exige que um gerente aprove um desconto em uma tela. Que tipo de Step é esse?",
      options: {
        "A": "Background Step",
        "B": "Interactive Step",
        "C": "System Step",
        "D": "Async Step"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Interactive Steps", "Human Interaction"]
    },
    {
      id: "M8-P1-Q6",
      text: "Um cenário fala sobre “Work Items” que aparecem para usuários em uma fila de trabalho, associando um Flow específico a ser preenchido. O que isso representa?",
      options: {
        "A": "Registros de log",
        "B": "Orchestration Work Items",
        "C": "Platform Events",
        "D": "Apex Jobs"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Work Items", "UI"]
    },
    {
      id: "M8-P1-Q7",
      text: "NTO quer que uma etapa interativa seja atribuída a um grupo de aprovadores. O que a Orchestration suporta?",
      options: {
        "A": "Atribuição apenas a usuários individuais",
        "B": "Atribuição a Usuário, Grupo ou Fila (Queue)",
        "C": "Atribuição apenas a filas",
        "D": "Atribuição apenas ao dono do registro"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Assignment", "Queues"]
    },
    {
      id: "M8-P1-Q8",
      text: "Um exemplo de prova descreve um processo que pode levar dias, com múltiplas aprovações em momentos diferentes. Por que Flow Orchestration é adequado aqui?",
      options: {
        "A": "Porque roda apenas em lote",
        "B": "Porque gerencia estado de longo prazo, etapas e responsáveis",
        "C": "Porque substitui APIs",
        "D": "Porque não precisa de Flows"
      },
      letters: ["A", "B", "C", "D"],
      correct: "B",
      topics: ["Long-running Processes", "State Management"]
    },
    {
      id: "M8-P1-Q9",
      text: "Em um Stage, duas etapas devem ocorrer ao mesmo tempo: RH prepara o contrato e TI cria o e‑mail. Como isso é modelado?",
      options: {
        "A": "Steps sequenciais dentro do Stage",
        "B": "Steps paralelos dentro do mesmo Stage, que só termina quando ambos concluírem"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Parallelism", "Efficiency"]
    },
    {
      id: "M8-P1-Q10",
      text: "Um candidato sugere usar apenas Flows isolados para um processo que exige coordenação entre vários times e tarefas humanas espaçadas. Por que isso pode ser insuficiente?",
      options: {
        "A": "Porque Flows não suportam Autolaunched",
        "B": "Porque Orchestration fornece modelo explícito de Stages, Steps e Work Items de longa duração"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Coordination", "Orchestration vs Flow"]
    },
    {
      id: "M8-P1-Q11",
      text: "AnyAirlines quer garantir trilha de auditoria: quem aprovou o quê, em qual etapa. Qual recurso ajuda nisso?",
      options: {
        "A": "Logs apenas em Apex",
        "B": "Estado e histórico de Orchestration Runs e Work Items"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Audit Trail", "Monitoring"]
    },
    {
      id: "M8-P1-Q12",
      text: "Um cenário menciona que a mesma Orchestration será usada em vários tipos de processos semelhantes, com pequenas variações. O que a prova tende a valorizar?",
      options: {
        "A": "Criar uma Orchestration totalmente nova para cada variação",
        "B": "Reutilizar orquestração e subflows onde fizer sentido, evitando duplicações"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Reuse", "Modularity"]
    },
    {
      id: "M8-P1-Q13",
      text: "NTO quer que certas etapas sejam opcionais e outras obrigatórias dentro de um Stage. O que define a conclusão do Stage?",
      options: {
        "A": "Quando qualquer Step termina",
        "B": "Quando todas as Steps obrigatórias terminam"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Stage Completion", "Critical Steps"]
    },
    {
      id: "M8-P1-Q14",
      text: "Uma alternativa diz que “Flow Orchestration é apenas um nome novo para qualquer Screen Flow”. Como isso deve ser avaliado?",
      options: {
        "A": "Correto",
        "B": "Errado; Orchestration adiciona camada de processo multiestágio, não apenas UI"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Definitions", "Architecture"]
    },
    {
      id: "M8-P1-Q15",
      text: "Um processo descrito na prova envolve uma sequência curta, sem interação humana, toda síncrona. Que ferramenta provavelmente será preferida ao invés de Orchestration?",
      options: {
        "A": "Um Flow autônomo (Autolaunched/Record‑Triggered)",
        "B": "Uma Orchestration multiestágio"
      },
      letters: ["A", "B"],
      correct: "A",
      topics: ["Best Practices", "Simplicity"]
    }
  ],
  "M8-P2": [
    {
      id: "M8-P2-Q1",
      text: "AnyAirlines quer que o Stage “TI” só seja iniciado depois que o Stage “Documentação” for aprovado com sucesso. Que conceito se aplica?",
      options: {
        "A": "Work Items",
        "B": "Entry Conditions"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Entry Conditions", "Sequencing"]
    },
    {
      id: "M8-P2-Q2",
      text: "Northern Trail Outfitters (NTO) precisa definir quando um Step é considerado concluído. Em uma etapa interativa, qual é o critério típico?",
      options: {
        "A": "Quando o usuário termina o Screen Flow associado",
        "B": "Quando o administrador clica em “aprovar tudo”"
      },
      letters: ["A", "B"],
      correct: "A",
      topics: ["Step Completion", "Interactive Steps"]
    },
    {
      id: "M8-P2-Q3",
      text: "Em um Background Step, qual evento geralmente determina a Exit Condition?",
      options: {
        "A": "O usuário clicar em “Salvar”",
        "B": "A conclusão do Autolaunched Flow que implementa a lógica"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Exit Condition", "Background Steps"]
    },
    {
      id: "M8-P2-Q4",
      text: "Um cenário descreve um Step que deve ser iniciado apenas quando um certo campo do registro estiver com status “Aprovado”. Onde isso é configurado?",
      options: {
        "A": "Em Work Guide",
        "B": "Na Entry Condition do Step/Stage"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Entry Condition", "Data-driven"]
    },
    {
      id: "M8-P2-Q5",
      text: "Um gerente quer que certas tarefas caiam em uma fila, não em um usuário específico, para que qualquer membro da equipe possa pegá‑las. Como isso é suportado?",
      options: {
        "A": "Atribuição apenas por usuário",
        "B": "Atribuição de Step interativo a Queue"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Assignment", "Queues"]
    },
    {
      id: "M8-P2-Q6",
      text: "NTO precisa que um usuário veja claramente quais tarefas pendentes existem para ele em um determinado registro. Qual componente da UI é usado?",
      options: {
        "A": "Work Guide no registro do Salesforce",
        "B": "Apenas lista de tarefas padrão"
      },
      letters: ["A", "B"],
      correct: "A",
      topics: ["UI Components", "Work Guide"]
    },
    {
      id: "M8-P2-Q7",
      text: "Em um cenário de prova, duas etapas devem rodar em paralelo dentro do mesmo Stage. Quando o Stage é considerado finalizado?",
      options: {
        "A": "Quando qualquer uma termina",
        "B": "Quando todas as Steps obrigatórias paralelas são concluídas"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Stage Completion", "Parallelism"]
    },
    {
      id: "M8-P2-Q8",
      text: "AnyAirlines quer pausar um processo de aprovação até que um evento externo seja concluído. Como o Orchestrator lida com isso?",
      options: {
        "A": "Não suporta pausas",
        "B": "Mantém o estado da Orchestration e aguarda conclusão do Step ou Flow responsável"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["State Management", "Async Processes"]
    },
    {
      id: "M8-P2-Q9",
      text: "Um candidato confunde Orchestration Runs com Flows individuais. Qual a melhor definição de “Orchestration Run”?",
      options: {
        "A": "Código fonte de um Flow",
        "B": "Uma execução específica da orquestração completa, com todos seus Stages e Steps"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Definitions", "Orchestration Run"]
    },
    {
      id: "M8-P2-Q10",
      text: "Um cenário mostra que várias execuções da mesma Orchestration estão em diferentes estados (em andamento, pausada, concluída). Onde isso é visualizado?",
      options: {
        "A": "Apenas em logs brutos",
        "B": "Na página de Orchestration Runs"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Monitoring", "Visibility"]
    },
    {
      id: "M8-P2-Q11",
      text: "NTO precisa depurar por que um processo de compras ficou travado em um Stage específico. Que recurso ajuda?",
      options: {
        "A": "Debug da Orchestration, inspeccionando variáveis entre Stages",
        "B": "Apenas logs de Apex"
      },
      letters: ["A", "B"],
      correct: "A",
      topics: ["Troubleshooting", "Debugger"]
    },
    {
      id: "M8-P2-Q12",
      text: "Um fluxo de exemplo cita: “Stage 1 – Pedido, Stage 2 – Aprovação, Stage 3 – Estoque (background), Stage 4 – Compras”. Em qual Stage a API MuleSoft provavelmente é chamada?",
      options: {
        "A": "Stage 1",
        "B": "Stage 2",
        "C": "Stage 3 (Estoque) via Background Step"
      },
      letters: ["A", "B", "C"],
      correct: "C",
      topics: ["Integration", "Background Steps"]
    },
    {
      id: "M8-P2-Q13",
      text: "AnyAirlines quer que uma etapa de “Revisão de Compliance” seja necessária somente se o valor do pedido for maior que um limite. Onde essa lógica deve ser configurada?",
      options: {
        "A": "Na política de API",
        "B": "Na Entry Condition do Step/Stage de Compliance"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Conditional Execution", "Entry Condition"]
    },
    {
      id: "M8-P2-Q14",
      text: "Uma alternativa diz que “Background Steps não podem chamar APIs, apenas atualizar campos locais”. Com base no conteúdo, isso é:",
      options: {
        "A": "Verdadeiro",
        "B": "Falso; Background Steps executam Flows, que podem chamar APIs MuleSoft e outros serviços"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Capabilities", "Integrations"]
    },
    {
      id: "M8-P2-Q15",
      text: "NTO quer entender quem está segurando um processo parado. Que combinação de informações a Orchestration fornece?",
      options: {
        "A": "Apenas logs de sistema",
        "B": "Orchestration Runs + Work Items, mostrando em qual Step/usuário/queue o processo está"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Visibility", "Bottlenecks"]
    }
  ],
  "M8-P3": [
    {
      id: "M8-P3-Q1",
      text: "AnyAirlines tem um processo de compras: funcionário pede item, gerente aprova, API verifica estoque, compras aprovam compra externa se necessário. Por que Flow Orchestration é indicado?",
      options: {
        "A": "Porque é apenas um processo batch simples",
        "B": "Porque coordena múltiplos passos humanos e automáticos ao longo do tempo"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Use Cases", "Complex Processes"]
    },
    {
      id: "M8-P3-Q2",
      text: "Uma alternativa sugere usar apenas RPA para coordenar todas as aprovações humanas e sistemas em um processo de semanas. Qual é o problema com essa abordagem?",
      options: {
        "A": "RPA não suporta UI",
        "B": "Orchestration foi desenhado para coordenação de longo prazo e tarefas humanas em Salesforce"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Strategy", "RPA vs Orchestration"]
    },
    {
      id: "M8-P3-Q3",
      text: "NTO quer decidir entre Flow Orchestration e um único Screen Flow para um processo de atendimento rápido que termina em poucos minutos em uma única sessão. O que a prova tende a preferir?",
      options: {
        "A": "Orchestration por ser mais complexa",
        "B": "Um Screen Flow simples, sem sobre‑engenharia"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Efficiency", "Decision Making"]
    },
    {
      id: "M8-P3-Q4",
      text: "Uma questão oferece a opção de usar Orchestration para um cenário onde não há etapas humanas nem espera; tudo é síncrono e curto. Que tipo de pegadinha é essa?",
      options: {
        "A": "Alternativa que adiciona complexidade desnecessária"
      },
      letters: ["A"],
      correct: "A",
      topics: ["Anti-patterns", "Over-engineering"]
    },
    {
      id: "M8-P3-Q5",
      text: "AnyAirlines quer que um gerente possa acompanhar o progresso de um processo complexo diretamente no registro de Conta. Qual combinação suporta isso?",
      options: {
        "A": "Apenas logs de API",
        "B": "Orchestration + Work Guide exibido no registro"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["UI", "Visibility"]
    },
    {
      id: "M8-P3-Q6",
      text: "Uma alternativa sugere duplicar a lógica de aprovação em vários Flows em vez de centralizá‑la em uma Orchestration e subflows. Por que isso é frágil?",
      options: {
        "A": "Porque Flows não podem ter lógica de aprovação",
        "B": "Porque duplica lógica e dificulta manutenção e auditoria"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Centralization", "Best Practices"]
    },
    {
      id: "M8-P3-Q7",
      text: "NTO vê vários processos parados em estágios diferentes e precisa priorizar onde atuar. Qual artefato ajuda a ter essa visão de alto nível?",
      options: {
        "A": "Lista de Apex Classes",
        "B": "Lista de Orchestration Runs com status (em andamento, pausada, falha, concluída)"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Management", "Dashboards"]
    },
    {
      id: "M8-P3-Q8",
      text: "Uma questão mostra um processo em que, enquanto RH valida documentos, TI já pode começar a preparar o ambiente, ambos em paralelo. Qual resposta demonstra entendimento correto?",
      options: {
        "A": "Orchestration deve sempre ser sequencial",
        "B": "Orchestration permite Steps paralelos em um Stage, concluído somente quando ambos terminam"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Parallelism", "Process Design"]
    },
    {
      id: "M8-P3-Q9",
      text: "Um candidato escolhe uma opção que diz: “em caso de erro, é melhor cancelar toda a Orchestration sem qualquer informação de estado”. Por que isso é inadequado?",
      options: {
        "A": "Porque não é tecnicamente possível",
        "B": "Porque perde rastreabilidade; melhor registrar, permitir retomada e manter histórico"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Error Handling", "Resilience"]
    },
    {
      id: "M8-P3-Q10",
      text: "AnyAirlines quer que processos de aprovação possam evoluir com o tempo, mantendo histórico de versões. Qual combinação está mais alinhada?",
      options: {
        "A": "Apex hard‑coded",
        "B": "Flows e Orchestrations versionados, com migração cuidadosa entre versões"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Versioning", "Lifecycle Management"]
    },
    {
      id: "M8-P3-Q11",
      text: "Uma alternativa sugere construir toda a lógica de processo em Apex e deixar Orchestration apenas como “fachada vazia”. Por que isso não reflete o foco do módulo?",
      options: {
        "A": "Porque Apex não é suportado",
        "B": "Porque Flow Orchestrator é justamente a camada para coordenar processo, e Apex deve ser usado apenas quando necessário"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Low-code", "Best Practices"]
    },
    {
      id: "M8-P3-Q12",
      text: "NTO quer usar Orchestration, mas também precisa chamar APIs MuleSoft em certos pontos do processo. Qual é a arquitetura recomendada?",
      options: {
        "A": "Orchestration chama Flows, que usam External Services/HTTP Callout para consumir APIs"
      },
      letters: ["A"],
      correct: "A",
      topics: ["Architecture", "Integration"]
    },
    {
      id: "M8-P3-Q13",
      text: "Uma questão apresenta um processo que já está bem atendido por um Record‑Triggered Flow e algumas automações simples. Uma opção sugere migrar tudo para Orchestration “só porque é novo”. Como avaliar?",
      options: {
        "A": "Sempre migrar para a tecnologia mais nova",
        "B": "Reconhecer como pegadinha; só usar Orchestration quando houver benefício claro (longa duração, múltiplos times, etc.)"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Strategy", "Decision Making"]
    },
    {
      id: "M8-P3-Q14",
      text: "AnyAirlines quer que, se a verificação de estoque via API falhar, o processo seja pausada e redirecionada para uma fila de análise. Como isso pode ser modelado?",
      options: {
        "A": "Sem registrar nada",
        "B": "Background Step chamando Flow que trata falhas e encaminha Work Item para fila apropriada"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Exception Handling", "Process Design"]
    },
    {
      id: "M8-P3-Q15",
      text: "Uma alternativa final afirma: “Flow Orchestration substitui completamente a necessidade de RPA, Composer e APIs em qualquer cenário de hiperautomação.” Qual resposta é mais alinhada?",
      options: {
        "A": "Concordar; Orchestration é suficiente para tudo",
        "B": "Discordar; Orchestration coordena processos, mas continua dependendo de Flows, APIs, RPA e Composer para executar tarefas especializadas"
      },
      letters: ["A", "B"],
      correct: "B",
      topics: ["Ecosystem", "Hyperautomation"]
    }
  ]
};
