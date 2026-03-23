Esse tópico mostra como pensar na **disponibilidade** de um processo RPA: quando o bot está “de plantão” esperando gatilhos e como montar um schedule que realmente dispara as execuções, respeitando o horário de serviço do bot.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​

## Comportamento do bot no horário

- O bot funciona como um atendente: durante o horário agendado ele fica escutando o gatilho, e quando dispara, precisa terminar o processo, mesmo que passe um pouco do horário de fim.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    
- Quando termina uma execução, se ainda está dentro do intervalo de schedule, volta a “escutar”; se já saiu do horário e não está rodando nada, suspende o processo até o próximo período agendado.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    

## Criando o schedule no assistente

- O schedule é configurado no **Scheduling assistant** ao criar a run configuration; primeiro você define o **padrão inicial** (intervalo de datas/horas e a primeira execução).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    
- Há dois modos principais: **Specific interval** (começo e fim com data/hora exatas) e **All day** (meia-noite até meia-noite nos dias escolhidos).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    
- Boa prática: deixar pelo menos 2 minutos de janela, porque o bot só verifica início de schedule uma vez por minuto; menos que isso pode fazer a execução nunca disparar.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    

## Repetição do padrão

- Depois do padrão inicial, você configura **como ele se repete** (a cada X minutos/horas/dias, até uma data de término).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    
- Se a duração do intervalo for menor que o tempo entre repetições, você tem blocos de execução intercalados com períodos em standby.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    
- Se a duração do intervalo for maior que o tempo entre repetições, os intervalos se sobrepõem e o efeito é de processo disponível 24/7.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    

## Impacto dos service times do bot

- O bot também tem um **service time** próprio (janela em que ele está autorizado a rodar); esse horário tem prioridade sobre o schedule do processo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​
    
- Na prática, o que vale é a interseção: se o processo está agendado de 10h–11h, mas o bot só pode rodar de 10h15–10h45, a disponibilidade efetiva daquele processo será 10h15–10h45.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-process-deployment/schedule-rpa-process-availability?trail_id=manage-mulesoft-rpa-solutions)​