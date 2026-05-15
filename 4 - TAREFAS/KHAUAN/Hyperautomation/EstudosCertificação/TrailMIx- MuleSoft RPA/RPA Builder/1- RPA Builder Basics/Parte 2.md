Esse tópico mostra como **activity parameters** funcionam como variáveis globais/configuráveis do processo, usados para deixar o RPA mais flexível, seguro e fácil de manter.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​

## O que são activity parameters

- São “variáveis de processo” usadas para guardar credenciais, strings, números, coordenadas de tela e outros valores que serão reutilizados ao longo do fluxo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Evitam hard code em vários elementos do workflow, facilitando manutenção e reduzindo erro quando você precisa trocar um valor.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Onde criar e configurar

- No RPA Builder, você abre o menu Business Process Initialization (BPI) e, na aba **Activity Parameters**, cria os parâmetros e define seus valores padrão.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Esses valores padrão são usados para testes locais no Builder e também podem ser aproveitados quando o processo roda no bot, se não forem sobrescritos.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Onde é possível alterar o valor

- BPI no Builder: criar novos parâmetros e definir o default que serve de base para o processo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- User Task, Test Plan e Production Configuration permitem sobrescrever o valor padrão, inclusive em tempo de execução (User Tasks) ou por ambiente (teste vs produção).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Benefícios práticos

- Permite rodar o mesmo processo para usuários/sistemas diferentes apenas trocando parâmetros (por exemplo, credenciais), sem mexer no workflow.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Melhora segurança e governança: você usa contas/sistemas de teste no desenvolvimento e depois só altera os parâmetros para contas/sistemas de produção.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/set-and-use-activity-parameters-in-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)