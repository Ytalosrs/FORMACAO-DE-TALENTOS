Variáveis globais no MuleSoft RPA são valores configuráveis centralizados no RPA Manager, pensados para serem reaproveitados por vários processos e deploys diferentes, sem você precisar editar cada processo individualmente.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​

## Ideia principal

- Uma **variável global** é um valor (ex.: caminho de pasta, URL, credencial, coordenada) que fica no MuleSoft RPA Manager e pode ser usado por vários processos e por vários deployments.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- Em vez de configurar o mesmo valor em dezenas de Activity Parameters diferentes, você aponta todos eles para a mesma variável global e só altera em um lugar.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    

## Onde cria e gerencia

- As variáveis globais são criadas e mantidas no menu **Global Variables** dentro do módulo **Process Automation** do MuleSoft RPA Manager.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- Ao criar, você define: nome, descrição, tipo, valor e em qual fase ela vale (Test, Production ou ambas).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    

## Comportamento em runtime

- A tela de Global Variables mostra todas as variáveis e permite três ações: ver onde é usada (Usage), editar e deletar (se não estiver em uso).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- Se você editar a variável global **durante** a execução de um processo, a mudança só vale para as próximas execuções; a instância que já está rodando usa o valor que ela pegou no início.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    

## Tipos disponíveis

MuleSoft RPA Manager suporta cinco tipos de variáveis globais:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​

- **Integer**: números inteiros no intervalo aproximado de −2.147.483.647−2.147.483.647 a 2.147.486.472.147.486.47.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Alphanumeric**: qualquer string, sem limite de tamanho.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Boolean**: verdadeiro/falso.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Float**: número com casas decimais, com precisão de até 16 dígitos após a vírgula.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Coordinates**: par de inteiros (X, Y), útil para automações baseadas em posição na tela.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    

## Quando faz sentido usar

- Para valores **compartilhados entre vários processos**, por exemplo: caminho de file share, URLs padrão, caminhos de download, coordenadas de clique comuns.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​
    
- Para **padronizar e reduzir manutenção**: se o caminho de rede muda toda semana, você altera só a variável global, e todos os processos passam a usar o novo valor automaticamente.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/share-values-between-rpa-processes-with-global-variables?trail_id=manage-mulesoft-rpa-solutions)​