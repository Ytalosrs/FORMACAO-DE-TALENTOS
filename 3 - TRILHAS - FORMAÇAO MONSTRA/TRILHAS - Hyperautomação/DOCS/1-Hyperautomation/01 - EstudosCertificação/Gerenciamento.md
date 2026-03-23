No ecossistema de **hyperautomation da Salesforce**, cada ferramenta tem um jeito próprio de gerenciar o ciclo de vida das automações, mas todas seguem a mesma lógica macro: desenhar, versionar, testar, implantar, monitorar e ajustar.

---

## MuleSoft Composer

No Composer, o ciclo de vida gira em torno de **flows** configurados via UI dentro da própria org Salesforce. Você começa criando o fluxo em um ambiente de desenvolvimento (muitas vezes sandbox), definindo conexões, gatilhos e ações, e testando com dados de exemplo diretamente na tela de edição. Depois de validar o comportamento, você **ativa** o flow, o que muda seu estado de “rascunho/teste” para produção: a partir daí o gatilho passa a disparar o fluxo automaticamente sempre que as condições forem atendidas.[](https://docs.mulesoft.com/composer-salesforce/ms_composer_overview)​

O Composer trata gerenciamento principalmente como **gestão operacional**: trocar conexões (por exemplo, apontar de sandbox para produção), renomear conexões para algo mais compreensível, duplicar ou reordenar steps, e atualizar metadados de objetos quando o schema muda. Há uma página de detalhes por fluxo, que funciona como painel de monitoramento: você enxerga execuções recentes, status de sucesso/erro, mensagens de falha e pode usar esses dados para depurar ou ajustar a lógica. Quando algo precisa ser alterado, você edita o flow, testa novamente e mantém apenas uma versão “ativa”; a governança fica mais leve que em Anypoint/Studio, mas suficiente para admins de negócios que precisam de mudanças rápidas.

---

## Salesforce Flow (Flow Builder)

No Flow Builder, o ciclo de vida é mais alinhado ao **ALM clássico da plataforma Salesforce**: você desenvolve e testa flows em sandbox, versiona essas automações e só depois promove para produção via change sets, DevOps Center ou pipelines de CI/CD. Cada flow possui **múltiplas versões**, porém apenas **uma versão pode estar ativa** por vez; isso permite manter histórico, testar uma nova versão em sandbox e, quando estiver pronta, ativá-la no ambiente certo sem perder o que existia antes.

Do ponto de vista de gerenciamento, você controla não apenas o desenho do flow, mas também **quem pode acioná-lo** (perfis, permissões, botões, processos que disparam o flow). A etapa de deployment força uma disciplina: mesmo que um flow estivesse ativo no sandbox, ele chega desativado em produção, exigindo que um admin ative conscientemente a versão correta depois de revisar. A manutenção contínua envolve monitorar o histórico de falhas, ajustar condições de decisão, atualizar campos e objetos conforme o modelo de dados evolui e, quando necessário, desativar ou substituir flows antigos por novos, mantendo a rastreabilidade de versões ao longo do tempo.

---

## MuleSoft RPA (Builder + Manager)

Em MuleSoft RPA, o ciclo de vida é mais formalizado e **guiado por estados**, controlado principalmente pelo **RPA Manager**. Cada processo RPA passa por fases bem definidas: **Evaluate, Design, Build, Test, Production**; essas fases não são só teóricas, elas aparecem em um diagrama no Manager e controlam quem pode fazer o quê em cada momento. Por exemplo, quando o processo está em Design, o RPA Developer ainda não pode implementar no Builder; quando está em Test, Deploy ou Production, designers e developers ficam bloqueados de editar o processo, garantindo estabilidade e governança.[](https://trailhead.salesforce.com/content/learn/modules/mulesoft-rpa-basics/discover-the-mulesoft-rpa-project-lifecycle)​

Dentro de cada fase, o processo tem ainda **status específicos** (Created, Approved, Rejected, etc. na fase de Evaluate) e aparece em uma **Process Matrix** para comparação e priorização de iniciativas de automação. A promoção entre fases é uma ação explícita, muitas vezes associada a diferentes papéis (business analyst, RPA designer, RPA developer, ops), o que força revisões e aprovações. Em produção, o RPA Manager cuida de monitoramento (agendamentos, filas, exceções, KPIs) e também de mudanças estruturadas: quando você precisa adaptar um robô, volta o processo para uma fase anterior, faz as alterações e resegue o pipeline até Production, mantendo trilhas de auditoria sobre quem mudou, quando e por quê.

---

## Anypoint Platform / APIs e integrações (Studio, Design Center, Exchange)

No pilar de integrações “clássicas” (APIs e apps Mule), o ciclo de vida é mais próximo de **desenvolvimento de software tradicional**, com forte uso de versionamento, ambientes múltiplos e estados de lifecycle. Você modela e desenvolve integrações em Anypoint Studio ou Design Center, publica ativos (APIs, conectores, templates) no **Anypoint Exchange** e gerencia versões desses ativos, incluindo o **lifecycle state** (development, stable, deprecated). Só é possível promover um asset para stable se todos os assets dos quais ele depende também estiverem em stable, o que obriga uma cadeia coerente de maturidade entre APIs e dependências.

Do ponto de vista de runtime, você implanta em ambientes distintos (dev, test, prod) via CloudHub, Runtime Fabric ou on‑prem, e gerencia isso com políticas de gateway, monitoramento, alertas e SLAs através do Anypoint Platform. O ciclo de mudanças passa por planejar alterações de specs, criar novas minor/major versions, atualizar implementações, testar e depois mudar o estado do asset e do deployment. Na prática, isso dá uma governança mais rígida (controle fino de versões, compatibilidade, depreciação gradual) que serve de base para as outras camadas de hyperautomação consumirem serviços estáveis: Composer e Salesforce Flow chamam APIs que são geridas por esse ciclo mais pesado.

---

## Como tudo se encaixa na hyperautomation

Essas ferramentas se complementam em camadas: **Composer e Flow** atuam como orquestradores de alto nível dentro e em torno da org Salesforce, **RPA** cobre tarefas onde não há APIs ou integração pronta e **Anypoint Platform** oferece serviços e APIs robustas com lifecycle gerido como software. Do ponto de vista de ciclo de vida, a grande diferença é o **nível de formalidade**: Composer é mais leve e orientado a admin, Flow fica no meio do caminho com versionamento e ALM da plataforma, RPA tem um pipeline de fases bem rígido e Anypoint segue o modelo de desenvolvimento de software com versionamento, ambientes e lifecycle states em Exchange.​






# Conexões

Dentro da hyperautomação da Salesforce, as ferramentas se encaixam como camadas que se chamam mutuamente: APIs e serviços no núcleo (Anypoint), orquestração declarativa (Composer e Flow) e automação de interface/gap de sistemas (RPA).​


## MuleSoft Composer como “hub” de orquestração

O Composer tende a ser o ponto onde você costura sistemas SaaS, Salesforce e RPA em automações de negócio de ponta a ponta. Ele se conecta ao **Anypoint Platform** para consumir APIs publicadas no Exchange e tratá-las como “Shared APIs” dentro dos flows, o que permite que automações no‑code aproveitem serviços corporativos já governados pela TI. Ao mesmo tempo, ele expõe um **conector nativo de MuleSoft RPA**, que chama processos RPA via RPA Manager (usando RPA API URL e API key), transformando bots de interface em mais uma ação dentro do fluxo Composer.

Na prática, isso coloca o Composer no centro: ele pode ouvir eventos em Salesforce ou outros apps, chamar APIs Anypoint para integrações “limpas” via serviço, e, quando não há API disponível (sistemas legados, telas, PDFs), invocar um processo RPA para completar a tarefa. O resultado é uma orquestração de alto nível onde o admin de negócios monta fluxos que transitam livremente entre “mundo API” e “mundo UI”, sem precisar conhecer a complexidade de baixo nível de cada camada.

## Salesforce Flow como orquestrador dentro da plataforma

O Salesforce Flow opera como o motor de automação **intra‑Salesforce**, mas também conversa com as outras peças de hyperautomação. Ele é responsável por reagir a mudanças em registros, eventos de plataforma ou interações do usuário e, a partir daí, pode delegar trabalho ao Composer ou a APIs expostas via Anypoint. Em arquiteturas recomendadas de hyperautomação, é comum usar Flow para dirigir o processo principal (aprovações, ramificações de negócio, interação com usuários) e acionar **Composer Flows invocáveis** ou **Automation APIs de RPA** como “serviços de automação” especializados.

A conexão acontece de duas formas principais: por um lado, Flow pode chamar **APIs Anypoint** diretamente (via ações externas ou invocations) quando se deseja integrar com sistemas já encapsulados em serviços REST; por outro, pode chamar **Composer** ou **RPA** através das Automation APIs expostas pelo Anypoint/Connected Apps ou conectores dedicados, transformando essas automações em passos do processo declarativo dentro da org. Assim, Flow funciona como a “linha narrativa” do processo de negócio, enquanto Composer e RPA executam tarefas específicas fora ou na borda da plataforma.​

## MuleSoft RPA como extensão para o mundo sem API

O MuleSoft RPA entra onde as outras ferramentas não alcançam facilmente: sistemas sem API, aplicações legadas, PDFs, imagens, terminais, páginas web sem integração oficial. Do ponto de vista de conexão com o resto da stack, ele expõe cada automação como um serviço por meio de **Automation APIs** geradas a partir do RPA Manager, com endpoints prontos para iniciar processos, consultar status, obter resultados e assim por diante. Essas APIs podem ser importadas no Anypoint Studio como conectores, consumidas por Composer via conector MuleSoft RPA ou chamadas por Flows e outras aplicações usando HTTP/Automation API.

Isso transforma o robô num cidadão de primeira classe da **application network** do Anypoint: o bot deixa de ser algo isolado e passa a participar da malha de serviços da empresa. Na prática, você pode ter um cenário em que Composer dispara um RPA para capturar dados de um sistema em mainframe, o RPA entrega os resultados via Automation API, e esses dados seguem retornando ao flow Composer ou para um Flow em Salesforce para completar o processo de negócio.​

## Anypoint Platform como backbone de integração

O Anypoint Platform é o **backbone de APIs e integrações** para todas as outras peças. APIs e integrações construídas em Studio ou Design Center são publicadas no **Anypoint Exchange**, onde podem ser consumidas por Composer, RPA, Salesforce Flow e outros clientes. Com Connected Apps e Access Management, o Anypoint fornece a camada de autenticação e autorização que permite que Composer e RPA se registrem como aplicações consumidoras de APIs, garantindo segurança e governança centralizadas.

Além disso, quando você publica um processo RPA como asset em Exchange, ele passa a aparecer ao lado de APIs e templates, tornando‑se parte da mesma “rede de aplicações” reutilizáveis. Isso permite arquiteturas em que uma API chama um RPA bot como fallback quando não há dados estruturados, ou em que Composer e Flow chamam APIs que, internamente, orquestram outros serviços. Em resumo, o Anypoint é a cola de baixo nível que dá linguagem comum (REST, OAuth, políticas, observabilidade) para que Composer, Flow e RPA conversem entre si de forma consistente.​

## Visão integrada da hyperautomação

Quando você olha o conjunto, a complementaridade fica clara: **Anypoint Platform** provê serviços estáveis e governados; **MuleSoft RPA** cobre tarefas sem API; **MuleSoft Composer** costura sistemas e bots em automações no‑code; **Salesforce Flow** orquestra processos de negócio dentro da plataforma, muitas vezes servindo de entrada humana e de “control tower” lógica. As conexões entre elas são feitas por conectores nativos (Composer ↔ RPA), Automation APIs (RPA ↔ Anypoint ↔ Flow/Composer) e Exchange/Connected Apps (Composer/Flow/RPA consumindo APIs do Anypoint).​

Na prática, um caso típico de hyperautomação maduro combina todas: um Flow reage a um evento em Salesforce, delega a integração de dados a um flow do Composer, que chama APIs Anypoint para sistemas modernos e um bot RPA para telas legadas; o resultado volta para Salesforce, onde o Flow conduz aprovações, atualiza registros e dispara novas automações conforme necessário.