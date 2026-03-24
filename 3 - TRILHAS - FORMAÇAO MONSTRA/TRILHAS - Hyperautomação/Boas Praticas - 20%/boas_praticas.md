1. Boas práticas gerais de hyperautomation (20%)
Escolher a combinação certa de ferramentas (Flow, Orchestrator, Composer, RPA, Anypoint) baseada no tipo de processo (frequência, volume, sistemas envolvidos, interação humana).
​

Planejar testes fim a fim desde o início, com dados de teste representativos cobrindo integrações, automações humanas e orquestrações.
​

Aplicar padrões de design consistentes para comunicação entre Salesforce, Anypoint, Composer e RPA (por exemplo, APIs como camada de integração, RPA para sistemas sem API, Flow como orquestrador interno).
​

Definir fault handling específico por ferramenta: tratamento de exceção em Flow, políticas e logs em APIs, retries e compensações em RPA, erros em Composer.
​

Priorizar reuso: publicar e consumir ativos via Anypoint Exchange, reaproveitar flows, subflows, templates de RPA e configurações de Orchestrator.
​

Ajustar expectativa de velocidade de desenvolvimento conforme a complexidade do caso de uso e da mistura de ferramentas escolhidas.
​

2. Boas práticas com Composer (12%)
Usar conectores oficiais do Composer para integrar sistemas e mapear apenas os campos necessários em cada ação.
​

Controlar o fluxo com If/Else e For Each para evitar lógicas complexas em um único passo; dividir em pequenos blocos legíveis.
​

Padronizar transformações com funções de número, string e data, mantendo fórmulas simples e reutilizáveis.
​

Testar flows do Composer sistematicamente, validando entradas, saídas e erros antes de colocar em produção.
​

3. Boas práticas com MuleSoft RPA (17%)
Avaliar se um processo é adequado para RPA (repetitivo, baseado em UI, sem API disponível) usando o RPA Manager.
​

Desenvolver processos RPA em etapas claras: design, build, teste, com foco em robustez de seletores e manuseio de exceções.
​

Planejar deploy de RPA considerando orquestração pelo RPA Manager e dependências de ambiente.
​

Monitorar e solucionar problemas de RPA continuamente, usando logs e métricas para ajustar scripts e configurações.
​

4. Boas práticas com Salesforce Flow (13%)
Escolher o tipo de Flow adequado (record-triggered, scheduled, screen, etc.) ao cenário de hyperautomation.
​

Integrar Einstein Bots para automatizar atendimento ao cliente onde comporta, deixando casos complexos para agentes humanos.
​

Criar testes de Flow (Flow Testing) para record-triggered flows, garantindo comportamento previsível em múltiplos cenários.
​

Conectar flows com APIs externas quando necessário, mantendo lógica de integração organizada e reutilizável.
​

Dominar o básico de Flow (variáveis, coleções, subflows, fault paths) para implementar automações confiáveis.
​

5. Boas práticas com Anypoint Platform – entrega e gestão de APIs (15%)
Tratar APIs e specs como building blocks componíveis, pensados para reuso em múltiplas automações.
​

Conhecer as capacidades e componentes de alto nível da Anypoint Platform (design, runtime, gestão, segurança, monitoramento) e usá-los de forma integrada.
​

Escolher opções de deploy de Mule apps (CloudHub, Runtime Fabric, etc.) alinhadas a requisitos de negócio, governança e operação.
​

6. Boas práticas com Anypoint Platform – monitorar endpoints (7%)
Configurar gestão de APIs com endpoints básicos, proxies e políticas, seguindo boas práticas de hyperautomation (segurança, rate limiting, logs).
​

Utilizar Anypoint Monitoring para observar aplicações e APIs, definindo alertas e dashboards relevantes para o processo automatizado.
​

7. Boas práticas com Anypoint Exchange (8%)
Publicar ativos em Exchanges privados e públicos com boa documentação, versionamento e metadados.
​

Usar o mocking service do Exchange para testar APIs sem depender do backend real, acelerando desenvolvimento e testes.
​

Em cenários de hyperautomation, seguir boas práticas de Exchange: padronizar nomes, tags, visibilidade e incentivos ao reuso.
​

8. Boas práticas com Flow Orchestrator (8%)
Combinar múltiplos workflows automatizados em um processo coordenado, usando Orchestrator como camada de coordenação.
​

Customizar condições de entrada e saída para evaluation flows, evitando que etapas disparem fora de contexto.
​

Atribuir passos interativos a grupos ou filas, garantindo que atividades humanas sejam roteadas corretamente.
​

Usar boas práticas de ciclo de vida: depurar, implantar e gerenciar orquestrações com governança e monitoramento adequados.
​