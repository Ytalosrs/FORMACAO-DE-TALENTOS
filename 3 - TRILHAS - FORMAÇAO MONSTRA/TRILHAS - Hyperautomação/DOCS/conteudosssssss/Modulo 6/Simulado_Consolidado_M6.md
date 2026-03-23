# 🎓 Simulado Consolidado: Módulo 6
## Monitoring, Governança e Performance (MuleSoft + Salesforce)

Este documento reúne as 45 questões das Provas 1, 2 e 3 do Módulo 6, consolidadas para facilitar o estudo. Cada questão apresenta a resposta correta e uma breve explicação fundamentada nas melhores práticas de hiperautomação e Anypoint Platform.

---

### **Questões de 1 a 15 (Foco: Monitoring & API Manager)**

**1. AnyAirlines quer visibilidade em tempo real sobre tempo de resposta, taxa de erro e uso de CPU das APIs que suportam um fluxo de hiperautomação. Qual componente é mais adequado?**
A. Anypoint Studio  
B. Anypoint Monitoring  
C. API Designer  
D. RPA Manager  
**Resposta correta: B**  
**Por que:** O Anypoint Monitoring é a ferramenta central de observabilidade que fornece métricas de infraestrutura (CPU/Memória) e de aplicação (latência/erros).

**2. Northern Trail Outfitters (NTO) precisa pesquisar rapidamente logs de uma API específica para entender por que um Salesforce Flow recebeu erro 500. Qual recurso deve ser usado?**
A. Log Search no Anypoint Monitoring  
B. Somente arquivos locais de log no servidor  
C. E‑mails de usuários finais  
D. Console do navegador  
**Resposta correta: A**  
**Por que:** O Log Search permite centralizar e filtrar logs de diferentes workers e APIs em um único lugar, acelerando o troubleshooting.

**3. Um cenário descreve dashboards com gráficos de erro, latência e throughput das APIs de crédito. Que funcionalidade está sendo usada?**
A. Custom Dashboards do Anypoint Monitoring  
B. API Notebook  
C. Exchange Portal  
D. Visualforce Reports  
**Resposta correta: A**  
**Por que:** Custom Dashboards permitem criar visões personalizadas focadas nas métricas de negócio ou técnicas mais relevantes para cada time.

**4. Uma empresa precisa aplicar políticas de segurança e de controle de tráfego (Rate Limiting, Client ID Enforcement) em APIs já existentes. Qual componente é responsável?**
A. Runtime Manager  
B. API Manager  
C. Anypoint Studio  
D. RPA Manager  
**Resposta correta: B**  
**Por que:** O API Manager é o componente da Anypoint Platform focado em governança, segurança e aplicação de políticas (policies).

**5. A prova mostra duas opções de endpoint: Basic Endpoint e Proxy Endpoint. Por que alguém escolheria Proxy Endpoint?**
A. Para evitar monitoramento  
B. Para colocar uma camada de proxy na frente da API e aplicar políticas sem alterar o código original  
C. Porque Basic Endpoint não suporta HTTP  
D. Porque só Proxy funciona com CloudHub  
**Resposta correta: B**  
**Por que:** O Proxy Endpoint permite gerenciar APIs (aplicar políticas) sem precisar modificar a implementação original da aplicação.

**6. NTO quer proteger APIs críticas expostas para ferramentas como Flow e Composer, exigindo que cada consumidor se identifique. Qual política deve ser usada?**
A. IP Whitelisting  
B. Client ID Enforcement  
C. Rate Limiting somente  
D. Nenhuma; basta usar HTTP  
**Resposta correta: B**  
**Por que:** Client ID Enforcement exige que cada aplicação consumidora (como um Flow específico) envie credenciais únicas, permitindo rastreabilidade e controle.

**7. Um cenário fala sobre limitar requisições para evitar que um Composer mal configurado derrube um sistema legado. Qual política atende isso?**
A. Client ID Enforcement  
B. Rate Limiting / Throttling  
C. IP Whitelisting  
D. JWT Validation  
**Resposta correta: B**  
**Por que:** Rate Limiting (ou Throttling) limita a quantidade de chamadas em um período, protegendo o sistema de backend contra sobrecarga.

**8. Uma empresa quer garantir que apenas endereços IP da infraestrutura Salesforce acessem uma determinada API. Que política se aplica?**
A. SLA Tiers  
B. IP Whitelisting  
C. CORS  
D. Retry Policy  
**Resposta correta: B**  
**Por que:** IP Whitelisting restringe o acesso à API apenas a uma lista pré-definida de endereços IP confiáveis.

**9. AnyAirlines quer ver um mapa visual mostrando como APIs se conectam umas às outras em seu ecossistema. Qual recurso é mais adequado?**
A. Visualizer  
B. Functional Monitoring  
C. Exchange Docs  
D. API Designer  
**Resposta correta: A**  
**Por que:** O Anypoint Visualizer gera automaticamente um mapa de dependências e topologia da rede de APIs baseando-se no tráfego real.

**10. Um item de prova descreve testes automatizados periódicos que chamam APIs para verificar não só se estão “de pé”, mas se devolvem respostas corretas. O que está sendo descrito?**
A. Unit tests em Studio  
B. Functional Monitoring  
C. Logs de servidor  
D. Health Check do sistema operacional  
**Resposta correta: B**  
**Por que:** O Functional Monitoring executa testes sintéticos agendados para garantir a disponibilidade funcional dos endpoints.

**11. NTO precisa ver, em um único lugar, logs de todas as aplicações Mule para facilitar troubleshooting de fluxos que envolvem múltiplas APIs. Qual vantagem do Anypoint Monitoring está sendo explorada?**
A. Logs locais em cada worker  
B. Centralização de logs com Log Search  
C. Apenas dashboards de CPU  
D. Apenas API Notebook  
**Resposta correta: B**  
**Por que:** A centralização evita que o desenvolvedor tenha que acessar cada instância individualmente, facilitando a correlação de erros.

**12. Uma alternativa afirma que “API Manager substitui completamente Anypoint Monitoring”. Como isso deve ser avaliado?**
A. Correto  
B. Errado; API Manager governa endpoints e políticas, Monitoring foca em observabilidade e métricas  
C. Verdadeiro apenas em CloudHub  
D. Verdadeiro apenas on‑premises  
**Resposta correta: B**  
**Por que:** São ferramentas complementares. O Manager foca em "quem pode acessar" e "quais regras", enquanto o Monitoring foca em "como está a saúde do sistema".

**13. Uma equipe quer ser notificada automaticamente por Slack quando a taxa de erro de uma API ultrapassar certo limite. Que funcionalidade é usada?**
A. Alertas do Anypoint Monitoring  
B. Apenas logs locais  
C. API Designer comments  
D. RPA email step  
**Resposta correta: A**  
**Por que:** Alertas configuráveis no Monitoring permitem automação de incidentes, enviando notificações para e-mail ou Webhooks (como Slack).

**14. Um cenário mostra que o Flow recebe “Too Many Requests” (429) de uma API gerenciada. O que isso provavelmente indica?**
A. Erro de autenticação  
B. Política de Rate Limiting ou SLA aplicada no API Manager  
C. Falha de hardware  
D. Falha de DNS  
**Resposta correta: B**  
**Por que:** O código HTTP 429 é o padrão para indicar que o limite de requisições configurado foi excedido.

**15. Um candidato diz que “não é necessário monitorar APIs internas, apenas as públicas”. Qual é a visão alinhada com a prova?**
A. Correta; internas não precisam de monitoramento  
B. Errada; APIs internas são críticas em cadeias de hiperautomação e devem ser monitoradas  
C. Depende do humor da equipe  
D. Só RPA precisa de monitoramento  
**Resposta correta: B**  
**Por que:** Em API-led Connectivity, falhas em System APIs (internas) derrubam toda a cadeia. O monitoramento deve ser fim-a-fim.

---

### **Questões de 16 a 30 (Foco: Performance e Troubleshooting)**

**16. AnyAirlines nota que o tempo de resposta de uma API aumentou muito, mas o uso de CPU dos workers está baixo. Qual conclusão é mais provável?**
A. Problema na infraestrutura da API  
B. Problema no sistema de destino (ex: banco de dados lento)  
C. Falha no API Manager  
D. Falha de rede entre CloudHub e internet  
**Resposta correta: B**  
**Por que:** Se a CPU da API está baixa mas o tempo de resposta é alto, a API provavelmente está esperando uma resposta de um sistema externo lento (IO-bound).

**17. Northern Trail Outfitters (NTO) vê CPU constantemente em 100% para uma API crítica. Qual ação está mais alinhada?**
A. Reduzir o número de requisições aceitas  
B. Aumentar vCores ou número de workers (escala vertical/horizontal)  
C. Desativar logs  
D. Ignorar, se não há erros 500  
**Resposta correta: B**  
**Por que:** CPU alta constante indica gargalo de processamento, exigindo escala vertical (mais vCores) ou horizontal (mais workers).

**18. Um fluxo de hiperautomação começa no Salesforce Flow, chama uma API MuleSoft, que por sua vez chama um sistema legado. O Flow recebe 500. Onde o time deve olhar primeiro?**
A. Logs do Flow apenas  
B. Log Search no Anypoint Monitoring para entender o erro no nível da API  
C. Logs do usuário final apenas  
D. Configurações DNS  
**Resposta correta: B**  
**Por que:** O erro 500 é genérico. É preciso olhar os logs da API MuleSoft para ver o stacktrace real e identificar se o erro é na API ou no sistema legado.

**19. Em um cenário, RPA e Composer consomem a mesma API de estoque. De repente, o sistema legado começa a travar. Qual combinação é mais adequada?**
A. Escalar apenas RPA  
B. Aplicar Rate Limiting/SLA Tiers e, se necessário, ajustar capacidade do backend  
C. Desativar monitoramento  
D. Permitir tráfego irrestrito  
**Resposta correta: B**  
**Por que:** A governança via políticas protege o legado (backend) contra picos de tráfego descontrolados de automações.

**20. NTO quer diferenciar problemas de infraestrutura (CPU/memória) de problemas de aplicação (erros de negócio). Qual conjunto de visões ajuda?**
A. Apenas logs locais  
B. Dashboards de infra + métricas de aplicação no Anypoint Monitoring  
C. Somente gráficos de CPU  
D. Somente contagem de requisições  
**Resposta correta: B**  
**Por que:** A observabilidade moderna exige correlação entre a saúde do servidor e o comportamento do código da aplicação.

**21. Um item de prova mostra um gráfico em que a taxa de erro aumenta junto com a latência, enquanto CPU se mantém baixa. O que isso sugere?**
A. Gargalo de infraestrutura da API  
B. Gargalo no sistema de destino ou dependência externa  
C. Erro no RPA  
D. Problema de DNS  
**Resposta correta: B**  
**Por que:** Latência alta e erro alto com CPU baixa é o padrão clássico de falha em um sistema dependente (ex: timeout de banco de dados).

**22. Uma empresa quer detectar proativamente se uma API crítica parou de responder como esperado para um cenário específico, antes que usuários reclamem. Qual recurso usar?**
A. Functional Monitoring com testes agendados  
B. Apenas Console de Logs  
C. Apenas alertas de CPU alta  
D. Apenas testes manuais ocasionais  
**Resposta correta: A**  
**Por que:** O monitoramento funcional age como um "usuário robô" que testa a API constantemente, detectando falhas antes dos usuários reais.

**23. AnyAirlines observa picos de tráfego gerados por um Flow mal configurado, causando falhas em lote. Qual resposta mais madura?**
A. Desativar o Flow sem análise  
B. Ajustar design do Flow e, em paralelo, configurar Rate Limiting e alertas  
C. Duplicar a API  
D. Ignorar, esperando o volume cair  
**Resposta correta: B**  
**Por que:** A solução envolve corrigir a causa raiz (o Flow) e aplicar proteção defensiva (Rate Limiting) para garantir a resiliência.

**24. NTO precisa investigar um caso específico em que um pedido falhou em uma cadeia de APIs. Qual abordagem é mais eficiente?**
A. Pedir prints de tela ao usuário  
B. Correlacionar logs da execução daquela requisição via Anypoint Monitoring  
C. Desinstalar a API  
D. Ler todos os logs de todos os dias manualmente  
**Resposta correta: B**  
**Por que:** O Log Search permite buscar por IDs de correlação ou metadados específicos do pedido, isolando o erro em segundos.

**25. Um bot RPA dispara milhares de chamadas, gerando erros 429. O que isso indica e qual ação combina melhor?**
A. Indica problema de autenticação; trocar credenciais  
B. Indica violação de Rate Limit; revisar política e padrão de chamada do bot  
C. Indica que a API está offline  
D. Indica erro de DNS  
**Resposta correta: B**  
**Por que:** O erro 429 confirma que o bot ultrapassou a quota. A solução pode ser aumentar o limite (se o backend suportar) ou otimizar o bot.

**26. Um candidato afirma: “não é necessário configurar alertas, pois o time sempre vê dashboards diariamente”. Como a prova tende a avaliar isso?**
A. Correto  
B. Limitado; alertas automáticos são essenciais para responder rapidamente a incidentes  
C. Válido apenas em produção  
D. Suficiente para ambientes críticos  
**Resposta correta: B**  
**Por que:** Dashboards dependem de observação humana ativa. Alertas são proativos e fundamentais para operações de missão crítica.

**27. Um cenário mostra que uma API está “up”, mas chamadas para um endpoint específico falham. Qual combinação de recursos ajuda na análise?**
A. Apenas status de worker  
B. Logs detalhados e Functional Monitoring para aquele endpoint  
C. Somente dashboards de CPU  
D. Apenas logs do RPA  
**Resposta correta: B**  
**Por que:** Se o worker está "up", o problema é na lógica da aplicação ou no endpoint específico, o que exige análise de logs e testes funcionais.

**28. AnyAirlines quer reduzir o MTTR (Mean Time To Resolve) para falhas em integrações. Qual prática é mais alinhada?**
A. Depender de e‑mails de usuários  
B. Configurar monitoramento, alertas e dashboards claros para APIs chave  
C. Apenas aumentar vCores  
D. Desativar logs para simplificar  
**Resposta correta: B**  
**Por que:** Visibilidade clara e notificações rápidas são os pilares para reduzir o tempo médio de resolução de problemas.

**29. Um time observa que, após um deploy, erros começaram a ocorrer. O que deve ser avaliado no Monitoring?**
A. Nenhuma métrica, pois é esperado errar  
B. Comparação de métricas antes/depois do deploy (erros, latência, throughput)  
C. Apenas logs locais  
D. Apenas número de workers  
**Resposta correta: B**  
**Por que:** Comparar o comportamento "baseline" com o estado pós-deploy ajuda a confirmar rapidamente se a nova versão introduziu regressões.

**30. Uma alternativa sugere que “para resolver problemas de performance, a melhor estratégia é sempre adicionar mais vCores, sem analisar métricas detalhadas”. Como isso deve ser visto?**
A. Correto em todos os casos  
B. Pegadinha; é preciso entender se o gargalo é infra, aplicação ou sistema destino antes de escalar  
C. Aceitável apenas on‑premises  
D. Aceitável apenas em CloudHub  
**Resposta correta: B**  
**Por que:** Escalar sem análise é caro e ineficiente. Se o gargalo for um banco de dados lento, adicionar vCores na API MuleSoft não resolverá o problema.

---

### **Questões de 31 a 45 (Foco: Estratégia e Governança)**

**31. AnyAirlines quer garantir que integrações de diferentes times não derrubem um sistema legado via APIs. Qual combinação melhor reflete a abordagem recomendada?**
A. Nenhuma limitação; confiar nos times  
B. Aplicar políticas de Rate Limiting/SLA e monitorar com dashboards e alertas  
C. Desativar todas as integrações  
D. Usar apenas RPA  
**Resposta correta: B**  
**Por que:** Governança (políticas) + Observabilidade (monitoramento) formam a base para uma hiperautomação segura e escalável.

**32. Uma alternativa sugere expor APIs internas sem autenticação “para simplificar o acesso por RPA e Flow”. Por que isso é uma má prática?**
A. Porque APIs internas não podem ser usadas  
B. Porque ignora segurança básica; políticas como Client ID Enforcement são recomendadas  
C. Porque APIs com autenticação não funcionam com Flow  
D. Porque Anypoint Monitoring não suporta APIs internas  
**Resposta correta: B**  
**Por que:** O princípio "Zero Trust" exige que mesmo tráfego interno seja autenticado para garantir segurança e rastreabilidade de quem está consumindo o dado.

**33. NTO tem múltiplas APIs críticas encadeadas em um processo de hiperautomação. O que melhor representa uma estratégia madura?**
A. Monitorar apenas a API final do fluxo  
B. Monitorar e aplicar políticas nas principais APIs, entendendo o impacto de cada uma  
C. Desativar logs para reduzir custo  
D. Depender apenas do monitoramento de RPA  
**Resposta correta: B**  
**Por que:** Em uma rede de APIs, cada nó é um ponto potencial de falha. A governança deve ser distribuída por toda a arquitetura.

**34. Uma questão mostra que um novo cliente externo deve solicitar acesso a uma API. Qual fluxo esperado na plataforma MuleSoft?**
A. Cliente acessa o API Portal, solicita acesso e recebe Client ID/Secret aprovado  
B. Cliente recebe acesso direto ao banco  
C. Cliente chama a API sem autenticação  
D. Cliente precisa de usuário administrativo no Anypoint Platform  
**Resposta correta: A**  
**Por que:** O Exchange/API Portal é o "self-service" onde consumidores descobrem APIs e requisitam credenciais de forma governada.

**35. Um candidato escolhe uma opção que diz: “para evitar limites, é melhor remover Rate Limiting de APIs que suportam RPA e Flows”. Como isso deve ser lido?**
A. Correta; limites atrapalham automações  
B. Pegadinha; limites protegem sistemas e ajudam a manter estabilidade  
C. Correta apenas para sistemas internos  
D. Correta se houver muitos consumidores  
**Resposta correta: B**  
**Por que:** Automações podem gerar tráfego recursivo ou infinito se houver bugs. Os limites são "cintos de segurança" essenciais.

**36. AnyAirlines quer aplicar regras diferentes de consumo para clientes Gold, Silver e Bronze. Qual funcionalidade se encaixa melhor?**
A. IP Whitelisting  
B. SLA‑Based Policies no API Manager  
C. Apenas Rate Limiting estático  
D. Somente logs  
**Resposta correta: B**  
**Por que:** SLA Tiers permitem definir diferentes limites (ex: 100 req/min para Gold, 10 req/min para Silver) para o mesmo endpoint.

**37. Uma alternativa sugere criar cópias idênticas de uma API para separar tráfego interno e externo, em vez de usar políticas e gestão adequada. Por que isso normalmente é errado?**
A. Porque não se pode ter mais de uma API  
B. Porque duplicação aumenta complexidade e reduz reutilização, ao invés de usar governança apropriada  
C. Porque políticas não funcionam em APIs internas  
D. Porque só RPA pode usar APIs internas  
**Resposta correta: B**  
**Por que:** A duplicação de código gera pesadelos de manutenção. O correto é usar uma única implementação com políticas de segurança diferenciadas.

**38. NTO quer que incidentes de APIs críticas sejam rapidamente comunicados às equipes corretas. Qual combinação é mais alinhada?**
A. Apenas dashboards sem alertas  
B. Alertas configurados no Monitoring integrados a canais como e‑mail ou Slack  
C. Depender de clientes externos para avisar  
D. Apenas reuniões semanais de status  
**Resposta correta: B**  
**Por que:** A integração de alertas com ferramentas de colaboração (Slack/OpsGenie) garante que o time de suporte aja no instante da falha.

**39. Uma questão mostra que uma API está configurada como Basic Endpoint, diretamente no runtime. Em qual situação considerar Proxy Endpoint faz mais sentido?**
A. Quando não se deseja aplicar nenhuma política  
B. Quando se quer colocar um proxy entre consumidor e backend, sem tocar no código da API original  
C. Quando se quer remover monitoramento  
D. Quando a API está em beta  
**Resposta correta: B**  
**Por que:** O Proxy é ideal para APIs legadas ou de terceiros onde você quer adicionar segurança (como OAuth) sem poder mexer no código fonte da aplicação original.

**40. Um candidato propõe “desabilitar logs detalhados” como solução primária para problemas de performance, sem qualquer análise. Por que isso é uma resposta fraca?**
A. Porque logs nunca impactam performance  
B. Porque ataca sintomas às cegas, sem entender métricas nem causas reais  
C. Porque Monitoring não usa logs  
D. Porque API Manager ignora logs  
**Resposta correta: B**  
**Por que:** Embora logs excessivos possam impactar o I/O, desativá-los sem diagnóstico impede que você veja o que realmente está causando a lentidão.

**41. AnyAirlines quer evidências de que sua arquitetura está saudável: tempos estáveis, poucas falhas, políticas aplicadas. Qual combinação de ferramentas suporta essa visão?**
A. Apenas Studio  
B. Anypoint Monitoring + API Manager (políticas, analytics, SLAs)  
C. Apenas Exchange  
D. Apenas RPA Manager  
**Resposta correta: B**  
**Por que:** O Monitoring dá a prova técnica (saúde), e o API Manager dá a prova de conformidade (governança).

**42. Uma alternativa afirma: “Como as APIs são internas, não há necessidade de políticas de segurança nem controle de quem consome”. Como o candidato deve responder?**
A. Concordar, pois segurança é só para APIs externas  
B. Discordar; mesmo internas, APIs críticas precisam de governança e controle de acesso  
C. Depende do time de rede  
D. Verdadeiro apenas em Sandbox  
**Resposta correta: B**  
**Por que:** Governança interna previne o uso indevido de dados sensíveis e permite identificar qual departamento ou processo está consumindo recursos.

**43. NTO quer uma forma rápida de visualizar, em produção, quem está consumindo cada API e qual o volume por consumidor. Qual componente ajuda?**
A. API Manager (analytics e consumer metrics)  
B. Studio  
C. Exchange  
D. Flow Builder  
**Resposta correta: A**  
**Por que:** O dashboard de Analytics do API Manager rastreia o uso por Client ID, permitindo auditoria e planejamento de capacidade.

**44. Uma questão mostra um fluxo onde Flow → API → Sistema legado. A resposta “correta” sugere desativar Rate Limiting para resolver picos de erro. Que ponto a prova tenta testar?**
A. Que limites são sempre ruins  
B. Que remover Rate Limiting pode agravar o problema e derrubar o sistema legado  
C. Que Flow não suporta limites  
D. Que APIs não precisam de proteção  
**Resposta correta: B**  
**Por que:** Esta é uma pegadinha clássica. Remover o limite durante um pico pode causar um efeito cascata que derruba o banco de dados legado.

**45. Uma alternativa final diz: “Boa governança significa nunca tocar em políticas ou monitoramento depois da primeira configuração”. Qual é a visão de melhores práticas?**
A. Correta; configuração inicial basta  
B. Errada; governança e monitoramento são contínuos, ajustados conforme uso e incidentes  
C. Correta apenas em produção  
D. Correta apenas para APIs internas  
**Resposta correta: B**  
**Por que:** O ecossistema de integrações é dinâmico. Políticas devem ser refinadas e alertas ajustados para evitar "fadiga de alertas" e garantir proteção atualizada.
