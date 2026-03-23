# Salesforce Hyperautomation Specialist — Practice Exam Volume 2 (EN)

### **1.**

AnyAirlines runs Mule apps on AWS and requires **zero-downtime deployments**, **horizontal scaling**, and the ability to deploy into a **customer-managed Kubernetes cluster** due to compliance requirements.  
Which deployment option best fits?

A. CloudHub 1.0  
B. CloudHub 2.0  
C. Runtime Fabric  
D. Anypoint Studio local runtime

**Correct Answer:** C  
**Explanation:** Runtime Fabric is designed for **customer-managed infrastructure** (including Kubernetes) and supports advanced deployment patterns like rolling updates and scaling. CloudHub is MuleSoft-managed (less control over underlying infra). Local runtime isn’t a deployment strategy for production.

---

### **2.**

Northern Trail Outfitters wants to choose between CloudHub and Runtime Fabric. Which two requirements most strongly indicate **Runtime Fabric**?

A. Must deploy into a private network with strict control over ingress/egress  
B. Needs MuleSoft-managed infrastructure with minimal ops overhead  
C. Needs to run apps close to on-prem systems with network constraints  
D. Wants the fastest “click-to-deploy” with default operational management

**Correct Answers:** A, C  
**Explanation:** Runtime Fabric fits when you need **network control** and proximity to restricted systems. CloudHub fits “MuleSoft-managed” and fast operations (B, D).

---

### **3.**

NTO needs to expose inventory data to **mobile** and **web** channels. Data comes from SAP and NetSuite, and must be **normalized**, **deduplicated**, and enriched with business rules.  
Where should the normalization/enrichment logic primarily live?

A. System API  
B. Process API  
C. Experience API  
D. API Gateway policy layer

**Correct Answer:** B  
**Explanation:** **Process APIs** handle orchestration and business logic such as aggregation, normalization, and enrichment. System APIs should remain close to source capabilities. Experience APIs tailor responses per channel. Policies don’t implement business logic.

---

### **4.**

AnyAirlines is designing API-led connectivity for a loyalty program. Which three statements are aligned with best practice?

A. System APIs should abstract and stabilize access to core systems of record  
B. Experience APIs should implement complex cross-system aggregation logic  
C. Process APIs should compose data from multiple System APIs and apply business rules  
D. Experience APIs should tailor data shape to the consumer (mobile/web/partner)  
E. System APIs should contain channel-specific formatting logic

**Correct Answers:** A, C, D  
**Explanation:** A/C/D match the tier responsibilities. B and E invert responsibilities (common distractors).

---

### **5.**

NTO publishes an Experience API to external partners. Partners must authenticate using **OAuth 2.0 access tokens**, and requests without a valid token must be rejected.  
Which policy best matches?

A. OAuth 2.0 Access Token Enforcement  
B. Client ID Enforcement  
C. Spike Control  
D. JSON Threat Protection

**Correct Answer:** A  
**Explanation:** OAuth token enforcement validates access tokens. Client ID Enforcement is identification/contracting (often used with API Manager contracts), not token validation. Spike Control is traffic shaping; JSON Threat Protection is payload safety.

---

### **6.**

AnyAirlines wants:

- to **identify** consuming applications and apply **SLA tiers**, and
    
- also require **OAuth 2.0 tokens** for user/app authorization.  
    Which two policies together best satisfy this?
    

A. Client ID Enforcement  
B. OAuth 2.0 Access Token Enforcement  
C. Spike Control  
D. CORS

**Correct Answers:** A, B  
**Explanation:** Client ID Enforcement supports consumer identification and contracts/tiers; OAuth token enforcement validates tokens. Spike Control/CORS don’t cover identity + authorization.

---

### **7.**

NTO exposes an API publicly. The security team is concerned about **oversized JSON payloads**, **deeply nested JSON**, and payloads designed to exhaust parsing resources.  
Which policy best addresses this?

A. JSON Threat Protection  
B. Spike Control  
C. Rate Limiting – SLA-based  
D. OAuth 2.0 Access Token Enforcement

**Correct Answer:** A  
**Explanation:** JSON Threat Protection is designed to mitigate risks from malicious JSON structures (size, depth, arrays). Spike/Rate limiting control request rates, not payload structure. OAuth validates auth, not payload safety.
### 8.

NTO routes Cases to Sales/Product/Support based on Case Type. Which component?  
A. For Each  
B. If/Else  
C. Switch/Case  
D. Swimlane  
**Correct Answer:** C  
**Explanation:** Multiple mutually exclusive routes → Switch/Case. If/Else is binary; For Each iterates; Swimlane isn’t a Composer control component.

### 9.

Bidirectional near-real-time sync between two Salesforce orgs using Composer. Minimum flows?  
A. 1  
B. 2  
C. 3  
D. 4  
**Correct Answer:** B  
**Explanation:** One flow per direction (Org A→B, Org B→A).

### 10.

To prevent infinite loops in bidirectional sync, best approach?  
A. Remove one flow  
B. Add a sync flag / “Last Synced By” condition to skip reprocessing  
C. Replace Composer with RPA  
D. Publish to Exchange  
**Correct Answer:** B  
**Explanation:** Loop prevention via flags/timestamps is standard. Removing a flow breaks bidirectional requirement; RPA/Exchange don’t solve loop logic.

### 11.

Test the same flow against DEV/QA/UAT Salesforce sandboxes. What should you do?  
A. Create separate connections per environment in Composer  
B. Install Composer in each sandbox  
C. Create Named Credentials in Anypoint  
D. Use mock data because Composer can’t access sandboxes  
**Correct Answer:** A  
**Explanation:** Composer uses connections. No per-sandbox installation required. Named Credentials in Anypoint isn’t relevant. Sandboxes are supported.

### 12.

A Composer flow must update ~1,000 records each run and performance is poor. Best recommendation?  
A. Consider migrating to Anypoint Platform for higher volume/complexity needs  
B. Use RPA Recorder to speed it up  
C. Convert to a Screen Flow  
D. Apply Client ID Enforcement  
**Correct Answer:** A  
**Explanation:** Higher volume/robustness often suggests Anypoint. RPA/Screen Flow/policies don’t address integration throughput and design limits.

### 13.

A non-critical step fails sometimes. The business wants to notify and continue processing. Best approach?  
A. Add error handling/branching + notify (email) and proceed for non-critical step  
B. Use MUnit in Composer  
C. Use Anypoint MQ to “ignore errors”  
D. Rewrite in Apex  
**Correct Answer:** A  
**Explanation:** Handle errors in-flow and notify. MUnit is for Mule apps, not Composer. MQ doesn’t “ignore errors.” Apex is unnecessary.

### 14.

Business users want to start an integration “on demand” without a record-change trigger. Best trigger style?  
A. Schedule  
B. Inbound Webhook trigger  
C. Record Created  
D. Record Updated  
**Correct Answer:** B  
**Explanation:** Webhook enables external/on-demand invocation. Schedule is periodic; record triggers require data changes.

### 15.

For Slack notifications from Composer, which two increase reliability?  
A. Standardize message templates and channels  
B. Send messages only inside For Each  
C. Add error notifications for failed Slack actions  
D. Apply Spike Control on the Slack connector  
**Correct Answers:** A, C  
**Explanation:** Templates and error handling are best practice. For Each isn’t required. Spike Control is an API gateway policy, not a connector setting.

### 16.

Retrieve a record by unique key; if not found, alert and stop. Best structure?  
A. If/Else checking for empty result before Slack step  
B. Switch/Case based on priority  
C. For Each always  
D. Orchestration with stages  
**Correct Answer:** A  
**Explanation:** Presence/absence is binary → If/Else. Switch/Case and For Each are mismatched; Orchestration is for process coordination, not this.

### 17.

Destination system requires ISO datetime as a string. Best solution?  
A. Use Composer formatting/conversion functions before mapping  
B. Build an RPA bot to format values  
C. Build a System API only to format datetime  
D. Use Flow Orchestration  
**Correct Answer:** A  
**Explanation:** Simple transformation belongs in Composer mapping. RPA/API/Orchestration are unnecessary for trivial formatting.

### 18.

NTO wants a job to run every 30 minutes in Composer. Which option is correct?  
A. Schedule every 30 minutes  
B. Schedule every 30 days  
C. Schedule based on formula only  
D. Only possible through cron in Anypoint Studio  
**Correct Answer:** A  
**Explanation:** Composer offers common intervals such as 30 minutes. Others are incorrect/overcomplicated.

### 19.

Composer invokes an RPA process with a User Task that can take up to 24 hours. How should results be consumed?  
A. Use a second Composer flow triggered when the RPA completes  
B. Wait inside the same Composer flow until completion  
C. Poll status every minute forever  
D. Replace with Flow Orchestration  
**Correct Answer:** A  
**Explanation:** Long-running tasks should be decoupled via completion event/second flow. Waiting/polling is inefficient; Orchestration doesn’t replace RPA execution.

### 20.

Which two signals suggest Anypoint Platform may be preferable over Composer?  
A. Need API policies, governance, and broad reuse  
B. Simple 2-step Salesforce-to-Slack automation  
C. High volume + complex transformations + strict SLAs  
D. Update a single Salesforce field  
**Correct Answers:** A, C  
**Explanation:** Enterprise scale/governance/complexity → Anypoint. Simple tasks remain in Composer.

### 21.

To prevent unauthorized users from running an automation that creates sensitive records, best approach?  
A. Use Salesforce permissions (profiles/permission sets) tied to the operation  
B. JSON Threat Protection  
C. RPA Recorder restrictions  
D. Spike Control  
**Correct Answer:** A  
**Explanation:** User-level access is governed in Salesforce via permissions. API policies don’t directly control Salesforce user invocations.

### 22.

They need auditable logging for every run (correlation ID, status). Best approach?  
A. Write logs to a custom Salesforce object for each run/failure  
B. Rely only on Composer’s UI history  
C. Use Slack messages as logs  
D. Use Flow Orchestration for logging  
**Correct Answer:** A  
**Explanation:** Persisted logs enable reporting/audit. UI-only is limited; Slack isn’t an audit store; Orchestration doesn’t automatically solve logging.

### 23.

Need a monthly CSV of top 10% customers by loyalty points; customer data already uses API-led; loyalty system has HTTP endpoint with no integration yet. Best approach?  
A. Build a System API for loyalty and reuse existing Customer System API  
B. Do the entire ranking in Composer only  
C. Build a Process API to aggregate/transform and compute top 10%  
D. Build an Experience API to expose the result to business consumers  
E. Use RPA to compute the top 10%  
**Correct Answers:** A, C, D  
**Explanation:** With existing API-led strategy, extend with System (loyalty), Process (logic), Experience (consumption). Composer-only is less robust; RPA unnecessary when API exists.

### 24.

A Salesforce-based automation needs consistent authentication and credential rotation for an external service used from Salesforce. Best approach?  
A. Salesforce Named Credentials  
B. Client ID Enforcement in Anypoint  
C. Hardcode credentials in Composer  
D. Store credentials in a public Salesforce text field  
**Correct Answer:** A  
**Explanation:** Named Credentials centralize auth and rotation. Client ID Enforcement isn’t credential storage. Hardcoding/public fields are security anti-patterns.


### 25.

AnyAirlines must extract data from a legacy website with no API. Best tool?  
A. MuleSoft RPA  
B. MuleSoft Composer  
C. Flow Orchestration  
D. Experience API  
**Correct Answer:** A  
**Explanation:** UI automation without APIs → RPA. Composer/Orchestration require APIs or Salesforce context; Experience API assumes API access.

### 26.

What does RPA Recorder automatically capture when recording manual activity?  
A. Business intent notes  
B. Conditional decisions by the user  
C. UI elements/metadata used during interaction  
D. Full test plans  
**Correct Answer:** C  
**Explanation:** Recorder captures UI interaction details; logic/comments/tests are added later.

### 27.

Best practices for autogenerated Recorder workflow code:  
A. Replace fragile autogenerated steps with more robust/specialized steps  
B. Keep as-is; it’s production-ready  
C. Remove/mask sensitive info captured during recording  
D. Disable all keystrokes/mouse clicks before production  
**Correct Answers:** A, C  
**Explanation:** Autogenerated flows often need hardening and may contain secrets. “Production-ready” is a trap; disabling clicks breaks automation.

### 28.

A BPMN diamond with an “X” represents:  
A. Error handler activity  
B. Exclusive Gateway (one of several paths based on conditions)  
C. End event  
D. Parallel split  
**Correct Answer:** B  
**Explanation:** “X” gateway = exclusive decision. Other symbols describe different BPMN elements.

### 29. (RPA Testing)

Where do RPA process test plans execute?  
A. On a configured RPA Bot  
B. In RPA Manager only  
C. In RPA Builder only  
D. In Salesforce Setup  
**Correct Answer:** A  
**Explanation:** Bots run executions/tests. Builder is authoring; Manager is monitoring/management.

### 30.

An RPA process fails in Production. Best practice debugging approach?  
A. Download analysis package, revert to Build phase, import into Builder, debug  
B. Copy logs into a text editor and guess root cause  
C. Deactivate the process and run manually forever  
D. Replace with Composer immediately  
**Correct Answer:** A  
**Explanation:** Proper debugging uses analysis package + Builder. Others are unreliable or change scope unnecessarily.

### 31.

Which two qualifiers indicate good RPA candidates?  
A. Rule-based  
B. Requires creative judgment at many steps  
C. Data-driven  
D. Highly variable daily with no patterns  
**Correct Answers:** A, C  
**Explanation:** RPA excels at repeatable, rules + data. High variability/creativity reduces automation success.

### 32.

RPA process has a User Task that can take up to 24 hours. Best way for Composer to consume results?  
A. Trigger a second Composer flow when the RPA completes  
B. Block the original Composer flow until completion  
C. Poll every minute continuously  
D. Replace with Flow Orchestration  
**Correct Answer:** A  
**Explanation:** Asynchronous completion pattern. Blocking/polling is inefficient; Orchestration doesn’t execute UI automation.

### 33.

A bot must ensure applications are closed at the end even if an error occurs. Best approach?  
A. Add cleanup/finally steps in the bot workflow  
B. Add an Exclusive Gateway  
C. Publish an Experience API  
D. Add a Composer Switch/Case  
**Correct Answer:** A  
**Explanation:** Cleanup handling belongs in bot design. Gateways/Composer/APIs don’t guarantee application closure.

### 34.

Which three practices reduce UI automation fragility?  
A. Prefer stable selectors/identifiers over screen coordinates  
B. Add waits/state checks before clicking  
C. Remove logging to improve performance  
D. Handle exceptions and alternate paths  
E. Apply Spike Control  
**Correct Answers:** A, B, D  
**Explanation:** Stability + synchronization + exception handling improves robustness. Removing logs harms troubleshooting. Spike Control is unrelated.

### 35.

Where should bot credentials be stored?  
A. Secure credential/secret mechanism (vault/managed secrets)  
B. Hardcoded in workflow  
C. Sent via Slack DM to bot operator  
D. Stored in a public Salesforce field  
**Correct Answer:** A  
**Explanation:** Secrets must be protected. Hardcoding or public storage is insecure; Slack is not secure secret storage.

### 36.

A website layout change breaks an RPA process. Best next step?  
A. Update selectors and replace recorded steps with more robust steps  
B. Record more clicks and rerun  
C. Switch to Composer even though there is no API  
D. Ignore the failure and proceed  
**Correct Answer:** A  
**Explanation:** Maintain selectors and harden workflow. More clicks increases fragility. Composer can’t automate UI without APIs. Ignoring breaks business outcomes.

---


### 37.

NTO needs a multi-step process with handoffs across departments after a Case is created. Best structure?  
A. Flow Orchestration using stages and steps  
B. One autolaunched flow with all logic  
C. Only a Screen Flow  
D. RPA bot to coordinate users  
**Correct Answer:** A  
**Explanation:** Orchestration is purpose-built for multi-step, handoffs, and process tracking. Others lack governance/coordination.

### 38.

How do Interactive Steps help involve users?  
A. Let users interact directly with external systems via UI automation  
B. Allow user interaction between automated backend steps  
C. Enforce API policies  
D. Run large batch jobs  
**Correct Answer:** B  
**Explanation:** Interactive Steps are human tasks/inputs in the orchestrated process. Not API policy or batch features.

### 39.

How should stages be organized for a complicated process?  
A. Group steps by handoffs/major branches  
B. Group steps by technology used (Slack stage, NetSuite stage)  
C. Group steps by responsibility transitions (who owns work)  
D. Create random stages for aesthetics  
**Correct Answers:** A, C  
**Explanation:** Stages represent phases/handoffs/ownership changes. Grouping by tool is a common distractor.

### 40.

A stage has three possible exit paths based on criteria. Best implementation?  
A. Evaluation flow returns a number/code, then Decision routes paths  
B. Chain multiple evaluation flows until one matches  
C. Use Composer Switch/Case inside Orchestration  
D. Apply Spike Control  
**Correct Answer:** A  
**Explanation:** Standard pattern: evaluation output → decision. Composer/policies are irrelevant inside Orchestration routing.

### 41. (Flow best practice)

A Salesforce admin hits DML governor limits in Flow due to many record updates. Best advice?  
A. Avoid DML inside loops; use collections and bulk updates  
B. Increase DML governor limits in Setup  
C. Replace Flow with RPA  
D. Apply Rate Limiting policy  
**Correct Answer:** A  
**Explanation:** Bulkification avoids governor limits. Limits can’t be increased. RPA/policies don’t fix Salesforce transaction limits.

### 42.

AnyAirlines needs automated steps plus an approval before continuing. Best solution?  
A. Orchestration with automated steps and an Interactive Step for approval  
B. Composer only  
C. RPA only  
D. Experience API only  
**Correct Answer:** A  
**Explanation:** Orchestration combines automation + human tasks. Others don’t provide in-Salesforce approval orchestration.

### 43.

Which three signals strongly suggest Flow Orchestration over a simple Flow?  
A. Multiple users participate  
B. Handoffs across teams  
C. Only one field update on a record  
D. Interactive steps and stage tracking are required  
E. The process has clear phases/milestones  
**Correct Answers:** A, B, D  
**Explanation:** Multi-user + handoffs + interactive/traceable phases → Orchestration. Single field update is simple Flow territory.

### 44.

A process spans external automation and must capture the outcome back in Salesforce at completion. Best pattern?  
A. Use Orchestration to update Salesforce records at the end of a stage/step  
B. Have RPA write directly into Salesforce database tables  
C. Use Spike Control to manage the outcome  
D. Composer cannot record outcomes  
**Correct Answer:** A  
**Explanation:** Salesforce remains system of record; update via Flow/Orchestration. Direct DB writes are not appropriate. Policies/claims about Composer are distractors.

### 45.

When an Order is marked Complete, update Last Order Date on related Account. Best practice?  
A. Record-triggered Flow on Order to update Account  
B. Replace the whole integration with API-led in Anypoint  
C. Build an RPA bot to update Account  
D. Send a Slack notification instead  
**Correct Answer:** A  
**Explanation:** This is an internal Salesforce data rule → record-triggered Flow. Other options are unnecessary or don’t meet requirement.

### 46.

What is the difference between Run and Debug modes in Flow Builder?  
A. Debug shows step-by-step details for troubleshooting  
B. Debug uses AI to fix bugs automatically  
C. Run is only available for active flows  
D. Run ignores the latest saved version  
**Correct Answer:** A  
**Explanation:** Debug provides granular execution detail. The other statements are common distractors/misconceptions.

### 47.

The business wants progress visibility by phases (Intake, Validation, Approval). What supports that?  
A. Stages in Flow Orchestration  
B. For Each in Composer  
C. Spike Control policy  
D. Client ID Enforcement  
**Correct Answer:** A  
**Explanation:** Stages represent process phases and provide tracking. Others are unrelated.

### 48.

A process is single-user but long and needs structure + traceability. What’s most aligned?  
A. Use Orchestration with stages/steps even if single-user  
B. Put everything into one massive Screen Flow  
C. Use subflows for modularity/reuse where appropriate  
D. Use RPA as the primary orchestrator  
**Correct Answers:** A, C  
**Explanation:** Orchestration provides structure/visibility; subflows improve reuse. Massive Screen Flows create maintenance risk. RPA isn’t a Salesforce process coordinator.

---


### 49. (API-led)

NTO uses API-led connectivity for web/mobile channels and needs aggregation/transformation from multiple systems. Where should that logic live?  
A. Experience API  
B. Process API  
C. System API  
D. API Gateway  
**Correct Answer:** B  
**Explanation:** Process API handles orchestration, aggregation, transformation. Experience shapes per channel; System exposes source systems; Gateway enforces policies.

### 50. 

AnyAirlines’ API backend fails during sudden bursts of traffic. Which policy prevents overload?  
A. Client ID Enforcement  
B. JSON Threat Protection  
C. Spike Control  
D. CORS  
**Correct Answer:** C  
**Explanation:** Spike Control smooths bursts. Client ID is identification; Threat Protection is payload security; CORS is browser cross-origin.

### 51. 

Which policy limits how many requests an individual client can make based on tiers/SLA?  
A. Spike Control  
B. Rate Limiting – SLA-based  
C. OAuth token enforcement only  
D. JSON Threat Protection  
**Correct Answer:** B  
**Explanation:** SLA-based rate limiting is per consumer/tier. Spike Control targets burst smoothing, not per-client quotas.

### 52.

NTO wants to share an internal API with website backend and RPA bots only within the organization. Best place?  
A. Public Exchange  
B. Private Exchange  
C. Share the RAML in SharePoint  
D. Post docs in Slack  
**Correct Answer:** B  
**Explanation:** Private Exchange is designed for internal discovery/reuse with access control. Public Exchange is external.

### 53.

AnyAirlines wants to publish an API to the public Exchange portal. What must be configured first?  
A. Set asset/API instance visibility appropriately for public sharing  
B. Build an RPA bot to validate the API  
C. Build a Screen Flow to publish the API  
D. Add a Switch/Case routing step  
**Correct Answer:** A  
**Explanation:** Public sharing requires visibility/public access configuration. Others don’t control Exchange publication.

### 54.

Before building a new integration/API, where should a developer look for reusable assets?  
A. Anypoint Exchange  
B. RPA Recorder  
C. API catalog/Design Center (as applicable)  
D. Slack channel history  
**Correct Answers:** A, C  
**Explanation:** Exchange + design/catalog are for discovery/reuse. Recorder and Slack aren’t asset repositories.

### 55.

AnyAirlines runs on AWS and needs vertical/horizontal scaling plus zero-downtime deployments for Mule runtimes. Best deployment strategy?  
A. CloudHub only  
B. Runtime Fabric  
C. Private Cloud Edition is required  
D. Composer scheduling  
**Correct Answer:** B  
**Explanation:** Runtime Fabric supports enterprise deployment patterns, scaling, and rolling/zero-downtime approaches on customer-managed infra/cloud.

### 56.

Which component enforces API policies at runtime?  
A. API Analytics  
B. API Manager alone  
C. API Gateway/runtime component  
D. Exchange portal  
**Correct Answer:** C  
**Explanation:** API Manager configures policies; enforcement happens at the gateway/runtime (e.g., Flex Gateway/Mule runtime gateway layer).

### 57.

NTO has existing non-MuleSoft APIs and wants quick security/governance in Anypoint without rewriting. Best approach?  
A. Rewrite all APIs in Mule  
B. Create an API proxy in front of each existing API  
C. Convert to RPA  
D. Expose each endpoint as a basic endpoint without proxy  
**Correct Answer:** B  
**Explanation:** Proxies allow applying policies/analytics quickly. Rewriting is slow; RPA is irrelevant; no proxy means less governance.

### 58.

AnyAirlines wants built-in automated testing for Mule integrations. Which tool fits?  
A. MUnit (within Anypoint/Studio ecosystem)  
B. MuleSoft Composer  
C. Flow Orchestration  
D. RPA Manager  
**Correct Answer:** A  
**Explanation:** MUnit is the standard for Mule app automated tests. Others don’t provide Mule application unit testing.

### 59.

Requirement: SOAP-based service, bidirectional near real-time, complex transformations, strong reliability. Which three decisions align best?  
A. Implement using Anypoint Studio (Mule app)  
B. Model the API/spec in Design Center (RAML/OAS)  
C. Use Compo
D. Apply governance/policies via API Manager  
E. Use RPA because SOAP is “legacy”  
**Correct Answers:** A, B, D  
**Explanation:** Enterprise integration with SOAP/complexity → Mule app + API design + policy governance. Composer is too limited; RPA is for UI, not SOAP integration.

### 60.

AnyAirlines needs to enforce per-consumer quotas and contractual usage tiers. Best mechanism?  
A. Rate Limiting – SLA-based  
B. Switch/Case  
C. Screen Flow  
D. RPA Recorder  
**Correct Answer:** A  
**Explanation:** SLA-based rate limiting supports tiers/quotas per client. Others aren’t API governance mechanisms.