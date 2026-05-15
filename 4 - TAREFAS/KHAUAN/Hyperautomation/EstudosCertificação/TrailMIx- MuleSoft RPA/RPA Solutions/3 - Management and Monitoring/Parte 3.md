Esse tópico mostra como usar o módulo de **Alerting** do MuleSoft RPA Manager para ser avisado rapidamente quando algo dá errado com processos ou bots, sem precisar ficar olhando dashboards o tempo todo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​

## Ideia geral das alerts

- Cada alerta é controlado por uma **alert rule**, que define o gatilho (processo, atividade ou bot + estado) e para onde a notificação será enviada.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- Quando a condição acontece (por exemplo, ExecutionFailure), o sistema dispara o alerta para os destinos configurados, com texto livre e **keywords** que são preenchidas automaticamente (nome do processo, regra, etc.).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    

## Alert targets e grupos

- **Alert targets** são os “destinatários” do alerta; hoje são sempre **email targets**, configurados na visão _Alert Targets_ do módulo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- No email target você define nome, lista de e‑mails e corpo da mensagem com keywords inseridas pelo botão “+”.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- Você pode criar **Alert Target Groups** para agrupar vários targets (por exemplo, time de runtime admins) e reaproveitar esse grupo em várias regras de alerta.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    

## Tipos de alert rule

As alert rules são criadas na visão **Alert Rules** e podem ser de vários tipos:[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​

- **Trigger run result rule**: dispara baseado em um resultado de execução do trigger de processo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Activity run result rule**: dispara quando uma atividade específica tem um certo resultado (ex.: Bot Task de abrir o Chrome falha).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Process run result rule**: dispara quando o processo entra em um estado definido (por exemplo, ExecutionFailure).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- **MuleSoft RPA bot status alert rule**: dispara quando um bot entra em um estado específico.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- **Time-based license alert rule**: alerta sobre limiares de uso da licença baseada em tempo, quando esse modelo de licenciamento está ativo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    

## Ciclo de vida das regras e histórico

- Ao criar uma alert rule, você define nome, descrição, alvo ou grupo de alvos, objeto monitorado (processo, atividade ou bot) e o status que será o gatilho.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- As regras podem ser **pausadas, editadas ou deletadas**; pausadas continuam visíveis, mas param de monitorar.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​
    
- A visão **Alerts** mostra o histórico de alertas já disparados na organização, facilitando auditoria e análise de incidentes.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/deployed-rpa-process-management-and-monitoring/create-and-manage-alerts-in-mulesoft-rpa-manager?trail_id=manage-mulesoft-rpa-solutions)​