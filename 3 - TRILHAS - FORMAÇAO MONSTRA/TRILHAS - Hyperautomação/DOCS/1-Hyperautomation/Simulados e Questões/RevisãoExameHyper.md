Segue um material de estudo estruturado, tópico por tópico do simulado (SALESFORCE-HYPERAUTOMATION-SPECIALIST Exam), focando em: definição, por que usar e funções principais.[](file:///C:/Users/User/Downloads/Simulado.pdf)​

---

## 1. Salesforce External Services e OpenAPI

Quando você quer que um Flow Salesforce chame APIs externas (como APIs MuleSoft), você cadastra essas APIs como **External Services** usando especificações OpenAPI.[](file:///C:/Users/User/Downloads/Simulado.pdf)​

- Definição: External Service é um recurso do Salesforce que registra uma API externa (descrita em OpenAPI) e gera ações invocáveis em Flow/Flow Orchestration.[](file:///C:/Users/User/Downloads/Simulado.pdf)​
    
- Por que usar: evita código Apex, padroniza a integração e oferece ações “clicáveis” em Flows a partir da descrição da API.[](file:///C:/Users/User/Downloads/Simulado.pdf)​
    
- Funções principais:
    
    - Importar o documento OpenAPI e gerar esquemas de request/response.[](file:///C:/Users/User/Downloads/Simulado.pdf)​
        
    - Criar ações invocáveis que você usa em elementos Action do Flow.[](file:///C:/Users/User/Downloads/Simulado.pdf)​
        
    - Usar Named Credentials para autenticar de forma segura.[](file:///C:/Users/User/Downloads/Simulado.pdf)​
        

---

## 2. MuleSoft Composer – Notificações de erro

MuleSoft Composer é a ferramenta low-code de integração (incluindo Salesforce, Slack, NetSuite etc.).

- Definição: Composer permite construir integrações em browser, sem código, com conectores prontos.
    
- Por que usar: ideal para usuários de negócio ou admins que precisam integrar sistemas com lógica simples ou moderada, sem envolver TI em Anypoint.
    
- Funções principais (relevantes pro simulado):
    
    - Monitorar erros na página de detalhes do Flow.
        
    - Enviar notificações de erro por e‑mail configurado no Composer (alertar sem abrir a UI).
        
    - Criar múltiplos flows (ex.: bi‑direcional entre dois orgs Salesforce, NetSuite ↔ Salesforce).
        

---

## 3. Sincronização bidirecional com MuleSoft Composer

Para manter dois orgs Salesforce sincronizados em tempo real, você usa dois flows: um A→B e outro B→A.

- Definição: Sincronização bidirecional é quando alteração em qualquer lado é propagada para o outro.
    
- Por que usar: garante visão única do cliente/processo entre múltiplos orgs, sem copiar manualmente dados.
    
- Funções principais:
    
    - Flow 1: Trigger em mudança no Org A, ação para atualizar Org B.
        
    - Flow 2: Trigger em mudança no Org B, ação para atualizar Org A.
        

---

## 4. Flow Orchestration (Salesforce)

Flow Orchestration é uma “camada acima” dos Flows clássicos, com Stages e Steps para processos longos/multietapas.

- Definição: Orquestrador de fluxos que coordena tarefas automatizadas e tarefas de usuário em Stages/Steps.
    
- Por que usar:
    
    - Processos complexos, multi-departamentos ou multiusuários.
        
    - Melhor monitoramento de progresso (quem está em qual etapa).
        
- Funções principais:
    
    - Stages: grandes “fases” do processo (ex.: Análise, Aprovação, Execução).
        
    - Steps: ações dentro de cada Stage (tarefa de usuário, chamar Flow, atualizar registro).
        
    - Condicional, reatribuição, SLAs e relatórios de andamento.
        

---

## 5. MuleSoft RPA e RPA Recorder

MuleSoft RPA automatiza atividades manuais em UIs que não têm API.

- Definição: Plataforma de Robotic Process Automation da MuleSoft (Recorder, Builder, Manager, bots).
    
- Por que usar: quando o sistema legado não tem API ou integração, mas o processo é estável, repetitivo e baseado em regras/dados.
    
- Funções do RPA Recorder:
    
    - Gravar os passos manuais em uma aplicação/site.
        
    - Capturar documentação dos elementos usados (botões, campos, identificadores, posição, tipo).
        
    - Fornecer base para o RPA Builder gerar o fluxo automatizado.
        
- Critérios de bom candidato a RPA:
    
    - Processo **rule-based** (regras claras, pouco julgamento humano).
        
    - Processo **data-driven** (ler/escrever/transformar dados estruturados).
        

---

## 6. Anypoint Platform, MUnit e estratégias de API-led

Anypoint Platform é a plataforma completa de integração da MuleSoft (design, build, deploy, manage).

## 6.1. MUnit e testes automatizados

- Definição: MUnit é o framework de testes para aplicações Mule (unitário e integração) dentro do Anypoint Studio.
    
- Por que usar: integrar com CI/CD, evitar regressões, validar fluxos, mocks de sistemas externos.
    
- Funções principais:
    
    - Testes unitários de flows e subflows.
        
    - Mocks de connectors/externos.
        
    - Relatórios e cobertura para pipelines.
        

## 6.2. API-led Connectivity (System, Process, Experience)

API-led divide sua rede de aplicações em três camadas:

- System APIs
    
    - Definição: expõem sistemas de registro (ERP, Salesforce, DB) com operações CRUD e encapsulam complexidade/segurança.
        
    - Por que usar: reutilização e padronização de acesso, isolamento de mudanças de backend.
        
- Process APIs
    
    - Definição: agregam dados de múltiplos System APIs, aplicam lógica de negócio e transformações.
        
    - Por que usar: separar lógica de negócio da camada de experiência, reuso entre canais.
        
    - Função típica: data aggregation + transformation (caso de top 10% de pontos de fidelidade).
        
- Experience APIs
    
    - Definição: ajustam dados para canais específicos (web, mobile, parceiros), formatos ou filtragens.
        
    - Por que usar: fornecer payload otimizado ao consumidor sem duplicar lógica core.
        

## 6.3. Design-first com RAML e Design Center

- Definição: RAML (RESTful API Modeling Language) é a linguagem usada para modelar APIs; Design Center é a UI de design da Anypoint.
    
- Por que usar:
    
    - Começar pela especificação (endpoints, métodos, tipos) antes de implementar.
        
    - Estimular contrato claro entre devs, front, negócio.
        
- Funções principais:
    
    - Desenho colaborativo da RAML.
        
    - Geração de scaffolding de projeto em Anypoint Studio a partir da RAML.
        

---

## 7. MuleSoft RPA – Ciclo de vida e debugging

Quando um processo RPA falha em produção, você usa RPA Manager e RPA Builder para diagnosticar.

- Definição:
    
    - RPA Manager: orquestra bots, monitora execuções, gera analysis packages.
        
    - RPA Builder: ambiente para construir e depurar processos RPA.
        
- Por que usar esse fluxo: isola o problema em ambiente de build, com logs ricos, sem travar produção.
    
- Passos típicos:
    
    - Baixar o analysis package do Manager.
        
    - Reverter o processo para fase Build.
        
    - Importar o pacote no Builder e depurar step-by-step.
        

---

## 8. Salesforce Flows – Boas práticas de DML e limites

Salesforce tem limites de governor para DML e consultas; flows mal desenhados estouram esses limites.

- Princípios importantes:
    
    - Evitar DML dentro de loops (For Each): em vez disso, acumular registros em coleção e dar um único DML bulk.
        
    - Loopar coleções para montar listas de registros a serem salvos de uma vez.
        
- Benefícios:
    
    - Menos DML calls, menos risco de exceder limites.
        
    - Melhor performance e comportamento bulk-safe.
        

---

## 9. Named Credentials, External Services e Actions em Flow

Para um Flow chamar APIs externas (NTO, AnyAirlines, MuleSoft etc.):

- Named Credentials (Salesforce)
    
    - Definição: objeto que guarda URL base + auth (OAuth, password etc.).
        
    - Por que usar: abstrai detalhes de autenticação do código/flow.
        
- External Services
    
    - Registrar APIs usando OpenAPI/RAML e ligar às Named Credentials.[](file:///C:/Users/User/Downloads/Simulado.pdf)​
        
- Elemento Action no Flow
    
    - Usar a Action gerada pelo External Service para chamar o método específico (GET, POST etc.).
        

---

## 10. Segurança: Connected Apps, perfis e perm sets

Quando um Flow Salesforce chama um API MuleSoft via Connected App, você controla quem pode invocar.

- Connected App
    
    - Definição: configuração que permite integração OAuth entre Salesforce e app externo (Mule).[]
        
- Controle de acesso por usuário
    
    - Atribuir **profile**/permission set à Connected App para limitar quais usuários podem usar aquele fluxo de integração.
        
- Por que usar: segregar quem pode disparar automações críticas (financeiro, dados sensíveis etc.).
    

---

## 11. MuleSoft Composer – Ambientes e conexões

Para testar flows usando múltiplos ambientes (sandboxes) sem afetar produção:

- Testes em sandbox
    
    - Trigger e ações devem apontar para org sandbox, evitando impactos em produção.
        
- Múltiplos ambientes
    
    - No Composer, você cria uma **conexão** para cada ambiente não produtivo (cada org, cada instância NetSuite, etc.).
        

---

## 12. Einstein Bots – Diálogos básicos

Einstein Bot usa diálogos de tipos diferentes para conversar e acionar ações.

- Tipos principais:
    
    - Message: mostra texto ao usuário (feedback, avisos de resposta incorreta).
        
    - Question: coleta informações (nome, CPF, número do caso etc.).
        
    - Action: chama Flow, Apex, ou integrações.
        
    - Rules: define decisões de roteamento de diálogo.
        
- Exemplo: ao usuário errar uma resposta, você adiciona um diálogo Message com instruções.
    

Einstein Bot costuma iniciar processos (como abertura de aplicação de cartão) e criar registros em objetos custom.

---

## 13. Runtime Fabric e estratégias de deploy

Anypoint Runtime Fabric (RTF) é uma camada para rodar runtimes Mule em infra de sua escolha (ex.: AWS).

- Definição: container orchestration layer da MuleSoft para deploy em Kubernetes/VMs on-prem ou cloud (AWS, Azure, etc.).
    
- Por que usar:
    
    - Escalabilidade vertical/horizontal.
        
    - Zero-downtime deployments (rolling update, canary).
        
    - Governança centralizada via Anypoint Platform.
        
- Outras estratégias (para contraste):
    
    - CloudHub: PaaS gerenciado Mule na cloud da MuleSoft.
        
    - Hybrid/Private Cloud Edition: combina on-prem e cloud ou data center privado.
        

---

## 14. API Functional Monitoring e health-check

Para monitorar saúde de APIs que acessam DBs, API Functional Monitoring faz chamadas automatizadas.

- Estratégias importantes:
    
    - Chamar um health-check endpoint e validar se responde corretamente.
        
    - Fazer GET em endpoint real e validar se resposta bate com dados esperados.
        
- Por que usar: monitora disponibilidade e integridade de ponta a ponta, não só logs.
    

---

## 15. Gestão de casos com Slack + MuleSoft Composer

Composer pode orquestrar notificação em Slack com base em eventos de Case no Service Cloud.

- Trigger: case criado/modificado.
    
- Roteamento: Switch/Case no Composer decide para qual time (vendas, produto, suporte técnico) enviar, com base em campos do case.
    
- Ações: enviar mensagem para canal Slack apropriado.
    

---

## 16. Hyperautomation – Combinação de ferramentas

Hyperautomation é a combinação coordenada de várias tecnologias (Flow, Flow Orchestration, Composer, RPA, Anypoint, Einstein Bot) para automatizar ponta a ponta.

## 16.1. Quando usar o quê (resumão):

|Cenário|Ferramentas principais|Justificativa|
|---|---|---|
|Integrar dois orgs Salesforce / Salesforce ↔ NetSuite sem TI|MuleSoft Composer|Low-code, conector pronto para SaaS, gatilhos em eventos.|
|Automatizar processo multiusuário complexo interno em Salesforce|Flow Orchestration|Stages/Steps, tarefas humanas, acompanhamento.|
|Expor APIs com governança, testes, CLI/CD|Anypoint Platform (API-led, MUnit, RTF)|Design-first, policies, monitoramento, deploy flexível.|
|UI sem API, legado, atividade manual repetitiva|MuleSoft RPA|Recorder + Builder + Manager, baseado em regras e dados.|
|Iniciar processo via chat (ex.: aplicação cartão, abertura de caso)|Einstein Bots + Salesforce Flows|Conversacional + automação de backoffice.|
|Fluxo NetSuite → Salesforce e atualizar dependentes em Salesforce|Composer + Salesforce Flow|Composer integra, Flow atualiza relacionamentos em massa.|

---

## 17. Políticas de API: Spike Control, Rate Limiting, proxies e Exchange

## 17.1. Limitar carga em API que chama RPA

- Spike Control
    
    - Definição: política que suaviza picos de tráfego, limitando rajadas curtas de requests.
        
    - Por que usar: para backend frágil (RPA) que só suporta X requisições/segundo.
        
- Rate Limiting – SLA
    
    - Mais focado em limite por período (ex.: 1000 requisições/hora por client).
        

## 17.2. Proxies para APIs legadas

Quando você tem APIs não-Mule e quer gerenciá-las no Anypoint:

- Criar proxy em frente a cada API existente, sem reescrever o backend.
    
- Aplicar policies (auth, throttling, logging) no proxy.
    

## 17.3. Publicar APIs no Anypoint Exchange

Para expor a API no portal público do Exchange:

- API deve estar funcional e registrada no API Manager.
    
- Configurar visibilidade para **public** para ser acessível externamente.
    
- Recomenda-se também configurar segurança (API Manager policies).
    

---

## 18. Salesforce Flow + Composer + RPA – Arquiteturas típicas

## 18.1. Salesforce dispara RPA e integra com NetSuite

Exemplo do simulado:

- Trigger: registro criado no Salesforce (Flow ou diretamente no Composer).
    
- Composer:
    
    - Recebe evento do Salesforce, chama processo RPA (MuleSoft RPA).
        
    - Após RPA terminar, usa o resultado para criar registro no NetSuite.
        

## 18.2. Composer e Flow juntos

- Composer: integra NetSuite/Salesforce, dispara quando registro no NetSuite é criado.
    
- Salesforce Flow: ao registro Salesforce ser atualizado, atualiza registros dependentes.
    

---

## 19. BPMN – Gateways

No diagrama BPMN, o gateway exclusivo (losango com “X”) representa decisão.

- Definição: ponto de ramificação onde apenas um caminho é seguido, baseado em condição.
    
- Por que usar: modelar diferentes atividades para diferentes cenários de negócio.