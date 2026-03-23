Deploy de produção no MuleSoft RPA é basicamente pegar um processo já testado, configurar como ele deve rodar em ambiente produtivo (horário, parâmetros, bots) e publicar essa configuração para as instâncias de bot certas.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​

## Visão geral da fase de produção

- Produção segue a mesma lógica da fase de teste: configurar parâmetros, escolher bots e monitorar execução.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- Depois que o processo é publicado em produção, aparecem no Project View as páginas de **Production Configurations** e **Run Results** para acompanhar e administrar as execuções.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    

## Ações disponíveis na configuração

Na tela de Production Configurations você tem quatro ações principais sobre o processo em produção:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​

- **Deploy**: manda o processo para um ou mais RPA bots (passa a rodar de fato).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Revoke**: para imediatamente o processamento; as execuções ficam com status de “canceled”.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Pause**: pausa novas execuções, mas deixa as instâncias que já começaram terminarem normalmente.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Continue**: retoma a execução de um processo que estava pausado.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    

## Criando a configuração de produção

- Clica em **Create run configuration** e define pelo menos um **schedule** para o processo (pode ter vários).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- As abas **Settings, Activity Parameter, User task e Execution** funcionam igual à configuração de teste, herdando o mesmo conceito de parâmetros, usuários e passos de execução.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    

## Agendamento e conflitos

- O schedule do processo não pode conflitar com o de outro processo na mesma **session**; se conflitar, algumas execuções podem ser puladas porque não conseguem controle da sessão.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- Cada session de bot só consegue executar um processo por vez, então a orquestração de horários é crítica para não perder runs.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    

## Seleção de bots e paralelismo

- Na etapa final você escolhe em quais **RPA bots** o processo será deployado e quantas **Assigned Sessions** vai usar.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- Para rodar em paralelo, você atribui o processo a múltiplas sessões; o sistema cria réplicas do processo e distribui entre as sessions disponíveis do bot.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- Se você configurar mais sessões do que o bot realmente tem, algumas execuções vão ser puladas por falta de sessão disponível.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    

## Executar, monitorar e voltar para teste

- Depois de criada a config, é só clicar em **Deploy** na Project View; o status das execuções aparece em **Run Results**.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​
    
- Se o processo for movido de volta para a fase de Test, todas as instâncias deployadas em produção são automaticamente revogadas.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/deploy-production-ready-rpa-processes-to-mulesoft-rpa-bot-instances?trail_id=manage-mulesoft-rpa-solutions)​