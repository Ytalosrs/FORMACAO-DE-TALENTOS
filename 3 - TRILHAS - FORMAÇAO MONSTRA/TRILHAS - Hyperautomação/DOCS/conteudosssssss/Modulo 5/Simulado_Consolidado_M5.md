# 🎓 Simulado Consolidado – Módulo 5: Anypoint Platform & API‑led Connectivity

Este documento reúne as 45 questões das três provas do Módulo 5, focadas em Fundamentos de Anypoint Platform, Arquitetura API-led, Ciclo de Vida de APIs e Governança, com gabarito comentado.

---

## 📝 Questões de 1 a 15 (Prova 1)

**1. AnyAirlines wants to modernizar integrações ponto‑a‑ponto e adotar uma arquitetura mais governada. Qual abordagem é mais alinhada à MuleSoft?**
A. Adicionar mais integrações diretas entre sistemas
B. Implementar API‑Led Connectivity com camadas System, Process e Experience
C. Usar apenas RPA e Composer
D. Construir um monólito gigante de integração

**Resposta correta: B**
**Por que:** A conectividade baseada em APIs (*API-led Connectivity*) é a metodologia central da MuleSoft para promover agilidade, reuso e governança através de camadas de responsabilidade.

---

**2. Northern Trail Outfitters (NTO) precisa acessar dados do SAP de maneira reutilizável para vários projetos. Que tipo de API deve ser criada primeiro?**
A. Experience API
B. System API para expor dados do SAP
C. Process API
D. Apenas um job em lote

**Resposta correta: B**
**Por que:** A *System API* é a camada que "desbloqueia" os dados dos sistemas de registro (como SAP, ERP, Bancos de Dados) e os expõe de forma padronizada para reuso.

---

**3. Uma empresa precisa combinar dados de Cliente (CRM) e Estoque (ERP) em uma lógica de “Criar Pedido”. Em qual camada isso normalmente vive?**
A. System API
B. Process API
C. Experience API
D. Apenas no banco de dados

**Resposta correta: B**
**Por que:** A *Process API* é responsável pela orquestração de múltiplas System APIs, aplicação de regras de negócio e agregação de dados.

---

**4. Um aplicativo móvel precisa de um payload específico e simplificado para exibir pedidos a um usuário final. Qual camada deve expor essa interface?**
A. System API
B. Process API
C. Experience API
D. API interna do banco

**Resposta correta: C**
**Por que:** A *Experience API* é a camada que adapta os dados e funcionalidades para as necessidades específicas de um canal de consumo (Mobile, Web, IoT, etc.).

---

**5. Em um cenário de prova, uma alternativa sugere colocar toda a transformação de dados diretamente em System APIs. Por que isso é geralmente incorreto?**
A. System APIs não podem transformar dados
B. Transformações e orquestrações de negócio pertencem principalmente a Process APIs
C. Experience APIs não podem consumir System APIs
D. Só RPA deve transformar dados

**Resposta correta: B**
**Por que:** Manter as *System APIs* simples e focadas apenas no acesso ao dado garante que elas sejam mais reutilizáveis. A lógica complexa deve subir para a camada de Processo.

---

**6. O exame apresenta um ciclo: Design → Simulate → Implement → Deploy → Manage. Qual plataforma isso descreve?**
A. Composer
B. Anypoint Platform (API Designer, Mocking Service, Studio, Runtime Manager, API Manager)
C. Salesforce Setup
D. Sistema operacional

**Resposta correta: B**
**Por que:** Este é o Ciclo de Vida de APIs completo suportado pelas diversas ferramentas da plataforma Anypoint.

---

**7. NTO quer que times de Flow e RPA comecem a trabalhar antes da implementação real das APIs. Qual recurso é mais relevante?**
A. Mocking Service do Anypoint Exchange
B. Apenas logs em produção
C. Functional Monitoring
D. Visualizer

**Resposta correta: A**
**Por que:** O *Mocking Service* gera uma URL de teste que simula o comportamento da API com base na especificação (RAML/OAS), permitindo desenvolvimento paralelo.

---

**8. Uma pergunta de prova fala sobre "desbloquear dados de sistemas centrais e isolar a complexidade do destino". Qual camada está sendo descrita?**
A. Experience API
B. Process API
C. System API
D. Exchange Asset

**Resposta correta: C**
**Por que:** As *System APIs* isolam as complexidades técnicas (protocolos proprietários, formatos legados) dos sistemas de backend.

---

**9. Uma empresa publica a especificação de API no Exchange para que Salesforce Flow possa consumi‑la via External Services. Que ativo está sendo aproveitado?**
A. API Fragment
B. API Specification (RAML/OAS)
C. Template de projeto
D. RPA Asset

**Resposta correta: B**
**Por que:** O *External Services* do Salesforce lê a especificação da API publicada no Exchange para gerar as ações no Flow Builder.

---

**10. Em um cenário, múltiplas equipes querem consumir a mesma API de clientes para diferentes casos de uso. Qual abordagem é mais eficiente?**
A. Criar uma nova API idêntica para cada equipe
B. Expor uma System API reutilizável e, quando necessário, Experience APIs específicas
C. Usar apenas integrações ponto‑a‑ponto
D. Restringir o uso da API a um único time

**Resposta correta: B**
**Por que:** Este modelo maximiza o reuso do acesso ao dado (System API) enquanto atende às necessidades específicas de cada projeto (Experience API).

---

**11. AnyAirlines precisa de controle de acesso, rate limiting e monitoramento central de APIs. Qual componente é responsável principalmente por isso?**
A. Anypoint Studio
B. Runtime Manager
C. API Manager
D. RPA Manager

**Resposta correta: C**
**Por que:** O *API Manager* é a ferramenta de governança onde políticas de segurança e controle de tráfego são aplicadas às APIs.

---

**12. Uma alternativa diz que “Experience APIs devem acessar diretamente bancos de dados, sem System APIs, para reduzir hops”. Como isso deve ser avaliado?**
A. Correto; isso reduz latência
B. Errado; viola separação de responsabilidades da API‑Led
C. Aceitável apenas para RPA
D. Recomendado pela MuleSoft

**Resposta correta: B**
**Por que:** Acessar o banco diretamente na camada de Experiência cria acoplamento forte e impede que a lógica de acesso ao banco seja reutilizada por outras APIs.

---

**13. Um time deseja versionar contratos de APIs, obter feedback e simular chamadas antes de implementar código. Que ferramenta é usada na fase de Design?**
A. Anypoint Studio
B. API Designer
C. Runtime Manager
D. Visualizer

**Resposta correta: B**
**Por que:** O *API Designer* é o ambiente web para escrever especificações de API (RAML ou OAS) e testá-las via Mocking Service.

---

**14. NTO precisa escolher a camada certa para expor dados a um aplicativo de atendimento ao cliente em Salesforce, sem expor detalhes internos de sistemas. Qual é a melhor opção?**
A. System API
B. Process API
C. Experience API específica para Salesforce
D. Conexão direta ao banco

**Resposta correta: C**
**Por que:** A *Experience API* atua como um contrato sob medida para o consumidor (Salesforce), escondendo a complexidade das camadas inferiores.

---

**15. Uma alternativa sugere que “API‑Led Connectivity é apenas um nome para qualquer conjunto de APIs sem regras claras”. Qual é a leitura correta?**
A. Verdadeiro
B. Falso; API‑Led define claramente papéis de System, Process e Experience APIs com foco em reutilização e governança
C. Depende do projeto
D. Só se aplica a on‑premises

**Resposta correta: B**
**Por que:** API-led Connectivity é uma metodologia disciplinada com regras claras de arquitetura para promover o reuso de ativos de TI.

---

## 📝 Questões de 16 a 30 (Prova 2)

**16. AnyAirlines está definindo o processo de desenvolvimento de APIs. Qual ordem representa corretamente o ciclo de vida dentro da Anypoint Platform?**
A. Implement → Design → Deploy → Manage
B. Design → Simulate → Feedback → Implement → Deploy → Manage
C. Deploy → Design → Implement → Manage
D. Simulate → Design → Deploy → Implement

**Resposta correta: B**
**Por que:** O ciclo começa pelo design do contrato, simulação para feedback, implementação do código, publicação e posterior gerenciamento.

---

**17. NTO quer permitir que consumidores explorem APIs, vejam documentação e testem chamadas em um console interativo. Qual componente deve ser usado?**
A. Runtime Manager
B. Anypoint Exchange (API Portal)
C. Anypoint Studio
D. Anypoint Monitoring

**Resposta correta: B**
**Por que:** O *Anypoint Exchange* funciona como o "catálogo de ativos" e portal de desenvolvedor, onde as APIs são descobertas e testadas.

---

**18. Um time precisa editar fluxos Mule, adicionar conectores e escrever DataWeave. Qual ferramenta é utilizada?**
A. API Designer
B. Anypoint Studio
C. API Manager
D. RPA Builder

**Resposta correta: B**
**Por que:** O *Anypoint Studio* é a IDE desktop (baseada em Eclipse) para o desenvolvimento técnico das aplicações Mule.

---

**19. Uma empresa precisa escalar o número de trabalhadores (workers) da aplicação conforme cresce o uso da API. Onde isso é configurado?**
A. Exchange
B. Runtime Manager
C. API Designer
D. Composer

**Resposta correta: B**
**Por que:** O *Runtime Manager* é onde as aplicações são publicadas (CloudHub, On-prem, RTF) e onde se gerencia a capacidade computacional (vCores/Workers).

---

**20. Em um cenário, a solução exige deployment em data center próprio com requisitos estritos de compliance. Qual opção de deploy é mais alinhada?**
A. Apenas CloudHub
B. On‑Premises ou Runtime Fabric, conforme o contexto
C. Apenas RPA
D. Apenas Composer

**Resposta correta: B**
**Por que:** A MuleSoft oferece flexibilidade de deployment (Híbrido), permitindo rodar aplicações na nuvem (CloudHub) ou dentro da infraestrutura do cliente.

---

**21. Um item de prova descreve um cenário de containers e Kubernetes para rodar aplicações Mule. Qual tecnologia da MuleSoft é citada?**
A. Runtime Fabric (RTF)
B. Anypoint MQ
C. CloudHub 1.0
D. Exchange

**Resposta correta: A**
**Por que:** O *Runtime Fabric* é o serviço de containerização da MuleSoft que permite rodar aplicações Mule em clusters Kubernetes (AWS, Azure, Google ou On-prem).

---

**22. AnyAirlines quer compartilhar uma API interna com desenvolvedores externos de parceiros, com controle de acesso e botão “Request Access”. Qual recurso suporta isso?**
A. API Notebook
B. API Portal / Exchange com fluxo de Client ID/Secret
C. Runtime Manager somente
D. Apenas documentação PDF

**Resposta correta: B**
**Por que:** O Exchange permite criar portais públicos ou privados onde desenvolvedores podem solicitar acesso formal às APIs.

---

**23. NTO tem uma API que será consumida por Salesforce Flow via External Services e por RPA via HTTP. Qual prática melhor suporta essa reutilização?**
A. Publicar a especificação e a API como ativos no Exchange
B. Esconder a especificação
C. Criar uma API separada para cada consumidor
D. Expor diretamente o banco de dados

**Resposta correta: A**
**Por que:** Ter um contrato centralizado no Exchange permite que diferentes ferramentas consumam a mesma API de forma consistente.

---

**24. Um time quer simular a API de crédito antes da implementação definitiva, permitindo que Flows e RPA usem dados fictícios. O que deve ser utilizado?**
A. Mocking Service do Exchange
B. Apenas logs
C. Apenas testes manuais em produção
D. Visualizer

**Resposta correta: A**
**Por que:** O *Mocking Service* é a ferramenta ideal para simular respostas de APIs que ainda não foram codificadas.

---

**25. Uma alternativa diz que a fase de “Manage” se refere apenas a desligar a API quando necessário. Qual é a visão correta?**
A. Correto
B. Falso; “Manage” inclui aplicar políticas, controlar consumo, analytics e governança
C. Depende do tipo de API
D. Só vale para APIs públicas

**Resposta correta: B**
**Por que:** Gerenciar uma API é um processo contínuo de garantir segurança, performance e análise de uso durante todo o seu tempo de vida.

---

**26. Em um cenário de prova, a empresa precisa enxergar relacionamentos entre APIs e dependências em um mapa visual. Qual recurso atende isso?**
A. Visualizer
B. Functional Monitoring
C. Exchange
D. RPA Manager

**Resposta correta: A**
**Por que:** O *Anypoint Visualizer* gera automaticamente um gráfico da rede de aplicações, mostrando como as APIs se conectam e o fluxo dos dados.

---

**27. NTO quer garantir que mudanças em um fragmento RAML compartilhado não quebrem projetos dependentes sem visibilidade. Qual conceito aparece no Exchange?**
A. Asset apenas
B. Dependency tracking
C. Worker logs
D. Credential Manager

**Resposta correta: B**
**Por que:** O Exchange ajuda a rastrear quais projetos dependem de quais ativos, facilitando a análise de impacto em caso de mudanças.

---

**28. Um candidato sugere implementar APIs diretamente no API Manager. Por que isso é incorreto?**
A. API Manager não existe
B. API Manager é para governança e políticas, não para desenvolvimento de código
C. API Manager substitui Exchange
D. API Manager roda apenas em on‑premises

**Resposta correta: B**
**Por que:** O código da API (lógica Mule) é desenvolvido no Studio e publicado via Runtime Manager. O API Manager apenas gerencia a "casca" de governança sobre esse código.

---

**29. AnyAirlines precisa decidir entre CloudHub e On‑Premises. O cenário enfatiza acesso simplificado a sistemas internos sem expor firewalls. Qual opção pode ser mais adequada?**
A. Apenas CloudHub sempre
B. On‑Premises ou RTF próximo dos sistemas internos
C. Apenas Composer
D. Apenas RPA

**Resposta correta: B**
**Por que:** Rodar o runtime Mule dentro da rede local facilita o acesso a sistemas que não estão expostos para a internet.

---

**30. Uma alternativa propõe: “Para cada novo projeto, criar uma nova API idêntica com URL diferente para facilitar gestão por time”. Por que isso é provavelmente uma pegadinha?**
A. Porque APIs não podem ter URLs diferentes
B. Porque isso reduz reutilização e aumenta fragmentação, contra a estratégia da MuleSoft
C. Porque Exchange não suporta múltiplas APIs
D. Porque CloudHub não suporta mais de uma aplicação

**Resposta correta: B**
**Por que:** Criar APIs redundantes gera dívida técnica e vai contra o princípio de "API as a Product" da MuleSoft, que foca no reuso.

---

## 📝 Questões de 31 a 45 (Prova 3)

**31. AnyAirlines nota que diferentes equipes estão construindo integrações diretas para o mesmo sistema legado, sem usar APIs comuns. Qual prática da MuleSoft mais combate esse problema?**
A. Incentivar mais integrações ponto‑a‑ponto
B. Criar System/Process APIs reutilizáveis e catalogá‑las no Exchange
C. Migrar tudo para planilhas
D. Usar apenas RPA

**Resposta correta: B**
**Por que:** O catálogo centralizado no Exchange permite que as equipes descubram ativos já existentes, evitando o retrabalho e a fragmentação.

---

**32. NTO quer aplicar políticas de Rate Limiting em uma API sem alterar o código Mule. Qual componente deve ser usado?**
A. Anypoint Studio
B. API Manager com políticas aplicadas ao endpoint
C. Runtime Manager
D. RPA Manager

**Resposta correta: B**
**Por que:** As políticas do *API Manager* são aplicadas dinamicamente através de um *API Gateway*, sem necessidade de recompilar ou redeployar o código da aplicação.

---

**33. Um cenário de exame: um Flow está sobrecarregando um sistema legado via API, causando travamentos. Qual resposta mais alinhada?**
A. Permitir o volume e esperar que o sistema seja atualizado
B. Aplicar Rate Limiting / SLA‑based Tiering na API para proteger o sistema
C. Desativar logs do sistema legado
D. Substituir a API por acesso direto ao banco

**Resposta correta: B**
**Por que:** O *Rate Limiting* protege os sistemas de backend contra picos de tráfego que poderiam causar indisponibilidade.

---

**34. Uma alternativa sugere expor uma API sem nenhuma forma de autenticação para simplificar o consumo por RPA, Flow e Composer. Como isso deve ser visto?**
A. Correto para ambientes internos
B. Errado; políticas como Client ID Enforcement são recomendadas mesmo em cenários internos críticos
C. Recomendado em provas
D. Neutro

**Resposta correta: B**
**Por que:** Mesmo em redes internas, o uso de credenciais (Client ID/Secret) é fundamental para rastreabilidade e governança de quem está consumindo o quê.

---

**35. Uma empresa quer garantir que apenas IPs da infraestrutura Salesforce acessem determinada API. Qual política é usada?**
A. Rate Limiting
B. IP Whitelisting
C. Client ID Enforcement
D. JWT Validation

**Resposta correta: B**
**Por que:** A política de *IP Whitelisting* (ou Allowlist) restringe o acesso à API apenas para endereços IP ou faixas de rede pré-autorizadas.

---

**36. Em um cenário, várias APIs críticas fazem parte de um fluxo de hiperautomação. Qual combinação ajuda a enxergar disponibilidade e erros em tempo real?**
A. Apenas logs locais dos servidores
B. Anypoint Monitoring com dashboards e Log Search
C. E‑mails manuais de usuários
D. Apenas o console do RPA

**Resposta correta: B**
**Por que:** O *Anypoint Monitoring* centraliza métricas e logs de todas as APIs, permitindo identificar gargalos e falhas rapidamente.

---

**37. Um item descreve um sistema em “choque” porque um Flow disparou milhares de requisições simultâneas. A alternativa correta provavelmente fala sobre:**
A. Escalar apenas vCores
B. Combinar Rate Limiting e, se necessário, ajustar capacidade (vCores/workers)
C. Desligar o Flow permanentemente
D. Migrar para integrações manuais

**Resposta correta: B**
**Por que:** A solução envolve tanto o controle do tráfego (Rate Limiting) quanto a garantia de que a infraestrutura (vCores) suporta a carga esperada.

---

**38. NTO quer monitorar não só se a API está “de pé”, mas se está respondendo corretamente a determinados cenários críticos. Qual recurso é mencionado?**
A. Visualizer
B. Functional Monitoring
C. Exchange
D. API Notebook

**Resposta correta: B**
**Por que:** O *Functional Monitoring* permite criar testes automatizados que rodam periodicamente contra os endpoints das APIs para validar a correção funcional.

---

**39. Uma alternativa diz: “Sempre que um novo consumidor aparecer, crie uma API nova para ele, com sua própria lógica e dados, mesmo que já exista uma API genérica”. Por que isso é típica pegadinha?**
A. Porque APIs não podem ter mais de um consumidor
B. Porque viola reutilização e aumenta acoplamento, indo contra o modelo API‑Led
C. Porque nenhuma API pode ser genérica
D. Porque API Manager não suporta múltiplas políticas

**Resposta correta: B**
**Por que:** O modelo de maturidade da MuleSoft preza pelo reuso. Se uma API já atende 90% das necessidades, ela deve ser evoluída ou complementada por uma Experience API, não duplicada.

---

**40. Em um cenário, uma Experience API faz transformações pesadas e agregações de múltiplos sistemas. Já existe uma Process API que faz o mesmo. Qual opção é mais alinhada?**
A. Manter lógica duplicada na Experience API
B. Centralizar transformação na Process API e manter Experience mais fina**
C. Migrar tudo para System APIs
D. Remover Process API

**Resposta correta: B**
**Por que:** Manter a lógica de negócio na camada de Processo garante que outros canais (além daquela Experience API específica) possam se beneficiar da mesma lógica.

---

**41. Uma equipe argumenta que não há necessidade de publicar ativos no Exchange porque todos já sabem onde está o código. Por que isso é fraco arquiteturalmente?**
A. Porque o Exchange é obrigatório por contrato
B. Porque sem catálogo central, reutilização, descoberta e governança ficam muito mais difíceis
C. Porque APIs não funcionam sem Exchange
D. Porque Runtime Manager depende do Exchange

**Resposta correta: B**
**Por que:** O Exchange é a base da "Comunidade de Prática" e do reuso. Sem ele, a TI volta ao modelo de silos de informação.

---

**42. AnyAirlines quer que RPA, Flow e Composer usem a mesma API de clientes. Qual desenho é mais consistente com a estratégia MuleSoft?**
A. Cada ferramenta chamando seu próprio conector proprietário para o sistema legado
B. Todas chamando a mesma API publicada e governada na Anypoint Platform
C. Apenas Flow chamando a API
D. Apenas RPA chamando a API

**Resposta correta: B**
**Por que:** Este é o estado ideal da Hiperautomação: múltiplas ferramentas de consumo bebendo da mesma fonte de dados governada e segura (API).

---

**43. Um item de prova menciona “Shared Load Balancer” (SLB). O que ele representa?**
A. Um concentrador de bots RPA
B. O balanceador padrão que fornece URL pública para APIs no CloudHub
C. Um componente exclusivo do Runtime Fabric
D. Um módulo de autenticação do Salesforce

**Resposta correta: B**
**Por que:** No CloudHub, o SLB é o ponto de entrada padrão para as requisições externas chegarem até os workers das APIs.

---

**44. NTO quer limitar o tráfego para uma API com base no plano de acesso de cada consumidor (por exemplo, Bronze, Prata, Ouro). Qual funcionalidade é mais adequada?**
A. Rate Limiting simples
B. SLA‑based policies no API Manager
C. IP Whitelisting apenas
D. Desativar API em horários de pico

**Resposta correta: B**
**Por que:** As políticas baseadas em SLA permitem definir limites de consumo diferenciados para cada aplicação cliente (Client ID).

---

**45. Uma alternativa de prova afirma: “Em uma boa arquitetura MuleSoft, é melhor duplicar APIs do que ajustar contratos existentes para permitir reutilização”. Como o candidato ideal responde?**
A. Concorda, para evitar dependências
B. Discorda; a estratégia valoriza reutilização, contratos bem desenhados e minimização de duplicação
C. Depende do humor da equipe
D. Reproduz a abordagem sem questionar

**Resposta correta: B**
**Por que:** O reuso é o principal driver de ROI da MuleSoft. Duplicar APIs é o caminho mais rápido para criar um ecossistema de integração impossível de manter.
