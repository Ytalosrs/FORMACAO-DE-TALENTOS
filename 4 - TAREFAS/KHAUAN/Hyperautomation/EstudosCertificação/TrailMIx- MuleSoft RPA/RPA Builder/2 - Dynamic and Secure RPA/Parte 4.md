Esse tópico mostra como usar testes condicionais para decidir o caminho do fluxo (RSVP ou apenas limpeza) e como usar Managed Block para tratar erros de forma controlada.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​

## Ideia principal

- Você define e atualiza um parâmetro de atividade com Set Variable para guardar o “estado” (por exemplo, se precisa ou não fazer RSVP).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Um Exclusive Gateway lê esse valor e decide qual caminho seguir no BPMN: executar os passos de RSVP ou pular direto para o cleanup.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Set Variable e parâmetros

- O passo **Set Variable** serve para alterar o valor de um activity parameter em tempo de execução.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Depois de modificado, esse valor pode ser usado em qualquer outro passo do fluxo, inclusive em gateways e Managed Blocks.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Managed Block (DoAction, OnError, DoAlways)

- O **Managed Block** funciona como um Try/Catch/Finally: tem três seções – DoAction, OnError e DoAlways.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- DoAction executa os passos “normais”; se algum falhar, o fluxo interrompe o restante e vai para OnError, onde geralmente é feito um Set Variable para sinalizar erro ou alterar o caminho do gateway.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- A seção DoAlways roda sempre, com ou sem erro, e é ideal para ações de limpeza (fechar janelas, deslogar, etc.).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Uso no caso de RSVP

- No estudo de caso, o Managed Block verifica se o texto “Un-RSVP” aparece na página; isso indica que o usuário já está inscrito no evento.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Dependendo de encontrar ou não esse texto, o fluxo ajusta o activity parameter via Set Variable e o Exclusive Gateway decide entre: cancelar o RSVP existente, manter como está ou fazer um novo RSVP e adicionar ao calendário.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-conditional-tests-to-verify-automated-step-results?trail_id=get-started-with-mulesoft-rpa-builder)​