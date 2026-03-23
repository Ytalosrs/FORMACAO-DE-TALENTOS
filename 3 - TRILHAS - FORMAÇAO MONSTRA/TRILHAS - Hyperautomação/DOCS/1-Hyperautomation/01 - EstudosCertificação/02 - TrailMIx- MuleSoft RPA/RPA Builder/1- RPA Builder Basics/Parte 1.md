Esse tópico mostra como preparar o ambiente e como é estruturado o desenvolvimento de um processo RPA dentro do RPA Builder, desde as permissões até os componentes usados no workflow.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​

## Pré‑requisitos e permissões

- É preciso ter licença de MuleSoft RPA, acesso de rede ao RPA Manager, login com permissão de RPA Builder e uma máquina Windows com o Builder instalado.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- O admin concede a permissão de uso do RPA Builder em RPA Manager, em User Management → Users, via opção **MuleSoft RPA Builder assignment**.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Ideia geral do RPA Builder

- O RPA Builder é um IDE visual de “programação em blocos”, onde você monta o processo arrastando componentes da Toolbox para o Workflow em vez de escrever código.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- Cada componente visual gera o código que o bot executa para automatizar ações humanas no Windows (interações de UI, arquivos, APIs etc.).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Fluxo de trabalho com BPMN e repositório

- Você faz login no RPA Manager e, no Builder, importa o diagrama BPMN do repositório, que já contém Bot Tasks, User Tasks e, se usado o Recorder, instruções detalhadas na documentação dos fluxos.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- No próprio Builder é possível ajustar o BPMN, fazer backup da implementação em arquivo CRPA, importar outra CRPA e depois enviar a versão final de volta para o RPA Manager.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Toolbox, controles e blocos de ação

- A Toolbox traz módulos para: interagir com desktop Windows, reconhecer imagem/texto em tela, trabalhar com variáveis/credenciais, acessar Excel/arquivos/email/REST e controlar fluxo e tratamento de erro.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- O Recorder já costuma gerar um Transaction block envolvendo um App Session; você complementa esses blocos adicionando outros elementos e configurando cada um.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## Action steps (folhas do workflow)

- Action steps são os nós folha do workflow e representam uma única operação (por exemplo, executar um programa ou localizar uma imagem na tela).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- Cada action step tem uma tela de configuração que define como o bot realiza aquela ação, a partir de bibliotecas internas do RPA Builder.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-builder-basics/discover-how-to-build-rpa-process-implementations?trail_id=get-started-with-mulesoft-rpa-builder&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​