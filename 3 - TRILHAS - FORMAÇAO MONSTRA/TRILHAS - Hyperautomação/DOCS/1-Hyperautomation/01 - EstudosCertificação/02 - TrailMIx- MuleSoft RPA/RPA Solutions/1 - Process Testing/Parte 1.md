O tópico mostra como criar um plano de testes no MuleSoft RPA Manager para validar se o processo está realmente pronto para produção, configurando dados, usuários humanos e bots de forma controlada.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​

## Objetivo do plano de testes

- O plano de testes define as condições de execução (dados, parâmetros, bots, sessões) para fazer QA do processo já construído na fase Build, antes de ir para produção.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- No RPA Manager, ao entrar na fase Test, surgem as seções **Test Plans** (onde você cria e dispara planos) e **Test Results** (onde acompanha os resultados organizados pelo nome do plano).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Etapas da criação (abas)

- **Settings**: você dá um nome único ao plano (base para agrupar resultados) e, opcionalmente, uma descrição que ajuda o time a entender o propósito daquele teste.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- **Activity Parameter**: você define valores iniciais para parâmetros de atividade, podendo manter o default do Builder, sobrescrever manualmente ou vincular a variáveis globais para simular diferentes cenários sem alterar o processo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Tarefas humanas e execução

- **User Task**: você atribui usuários ou grupos às tarefas humanas; eles recebem notificações em _My RPA > Team Tasks_ e precisam “claimar” e agir para o fluxo seguir.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- **Execution**: você escolhe o bot, o tipo de sessão (desktop existente ou sessão segura, que é a melhor prática) e se o bot terá acesso ao Windows shell, evitando cliques acidentais em Start/taskbar se desativar.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Seleção de bots e estados

- **Bots**: você seleciona um ou mais bots compatíveis com a configuração do plano, garantindo que o ambiente do bot (apps, sessão, etc.) suporte o processo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-testing/create-and-configure-rpa-process-test-plans?trail_id=manage-mulesoft-rpa-solutions&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- Estados do bot: **Deployable** (totalmente compatível), **Warning** (compatível, mas pode faltar algum recurso, como Excel) e **Not Deployable** (configuração incompatível, por exemplo só suporta sessão segura enquanto o plano exige sessão existente).