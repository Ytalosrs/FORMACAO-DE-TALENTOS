
# Materiais por fora do site da Salesforce:

Tutorial genérico para criar um processo RPA: https://youtu.be/CHCla-tW9zY
Playlist demonstrando um processo completo - desde design ao robô: https://www.youtube.com/watch?v=sv0bwFELV1Y&list=PLWKvNn16SH-JxXic2R_mcecchUbZRayTv

# Descubra o ciclo de vida do projeto RPA da MuleSoft

- O conteúdo descreve o **MuleSoft RPA project lifecycle** com estas fases, em ordem: Evaluation, Design, Build, Test e Production (Deployment/Operation), controladas pelo RPA Manager​.
    
- Cada fase é associada a personas específicas (business analyst, project manager, RPA developer etc.) e o RPA Manager trava ou libera ações conforme o status do processo.

## Evaluation phase

- Na **Evaluation phase**, um business analyst usa a evaluation tool do **MuleSoft RPA Manager** para analisar complexidade, frequência, esforço manual e custo‑benefício do processo.​
    
- O processo passa por statuses Created, Approved e Rejected; ao ser Approved entra na **Process Matrix** e é atribuído a um project manager, que monta o time e move o processo para a Design phase.

## Design phase (BPMN)

- Na **Design phase**, o processo é modelado como um **BPMN diagram** no BPMN editor do RPA Manager, manualmente (drag and drop) ou a partir do **MuleSoft RPA Recorder**.​
    
- O BPMN conecta start event, bot tasks, user tasks e gateways, usando **activity parameters** como variáveis, e anotações (muitas vindas do Recorder) que depois são usadas pelo **RPA Builder** para gerar blocos de código.​
    

## Build phase (RPA Builder)

- Na **Build phase**, o BPMN é baixado para o **MuleSoft RPA Builder**, que converte a documentação (principalmente do Recorder) em executable code blocks organizados em workflows usando a Toolbox.​
    
- O RPA developer ajusta ou substitui gravações “cruas” do Recorder por ações mais robustas da Toolbox, testa steps ou o processo inteiro, pode editar BPMN e reutilizar componentes via activity library, arquivos **.CRPA** e templates **.tptx**.​
    

## Test phase

- Na **Test phase**, o processo volta ao RPA Manager, onde são criados **Test Plans** com activity parameter values, seleção de RPA bots e tipo de Windows session dedicada para execução.​
    
- A execução de um Test Plan é disparada manualmente; o Manager mostra logs por flow element, screenshots quase em tempo real e um **analysis package** pode ser exportado e aberto no RPA Builder para localizar e corrigir erros.​
    

## Production phase

- Na **Production phase**, a implantação é configurada em um **Execution Plan**, semelhante ao Test Plan, mas incluindo **schedulers** para definir quando e com que frequência o processo roda (por exemplo, weekdays 8h–17h).​
    
- O RPA Manager fornece monitoring com dashboards, alerts e screenshots quase em tempo real das Windows sessions que executam os bots, permitindo acompanhar performance e responder rapidamente a falhas.