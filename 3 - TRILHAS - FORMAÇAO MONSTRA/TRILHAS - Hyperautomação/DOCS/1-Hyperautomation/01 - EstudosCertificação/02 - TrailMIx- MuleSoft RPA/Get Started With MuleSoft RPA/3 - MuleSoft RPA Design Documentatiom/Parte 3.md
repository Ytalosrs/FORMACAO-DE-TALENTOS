O tópico mostra como usar o editor **BPMN** do MuleSoft RPA Manager para desenhar fluxos de automação, entendendo menus, ferramentas de edição e boas práticas de organização do diagrama.​

## Objetivo do módulo

- Entender as opções de menu do editor BPMN (salvar, importar, gravar e exportar diagramas).
- Aprender a dividir fluxos complexos usando Intermediate Events para reduzir linhas cruzadas e melhorar a legibilidade.

## Menu principal e início do fluxo

- O menu no canto inferior esquerdo permite salvar, importar um diagrama BPMN do seu PC e abrir o RPA Recorder; depois que o processo vai para a fase Build, o menu muda para apenas exportar o BPMN.

- Todo fluxo começa com um Start Event ligado a um Bot Task “vazio”, que depois é substituído pelos Bot Tasks gravados/refinados com o RPA Recorder.
    

## Menus laterais e Intermediate Events

- O menu fixo à esquerda traz os elementos BPMN e ferramentas (eventos, tarefas, gateways etc.), enquanto cada elemento tem seu próprio menu de contexto para conectar, anotar, alterar tipo ou remover.
    
- Intermediate Events (Throw e Catch) permitem “pular” de um ponto a outro do diagrama usando links nomeados, quebrando um fluxo grande em subfluxos mais limpos, cada um com seu próprio End Event.
    

## Ferramentas de edição e contexto

- As principais ferramentas são: Hand (arrastar o diagrama), Lasso (selecionar partes) e Create/Remove Space, que move todos os elementos abaixo/à direita de um ponto para abrir espaço no meio do fluxo.​
    
- Nos menus de contexto, é possível anexar anotações de texto (por exemplo, variáveis e detalhes técnicos), conectar com sequence flow, trocar o tipo de evento e remover elementos mantendo o fluxo conectado.​
    

## Navegação e prática

- O menu de navegação oferece busca por rótulos de elementos, minimapa, ajuste ao viewport e zoom in/out para explorar diagramas grandes com mais precisão.​
    
- O módulo termina com um walkthrough em vídeo e PDF mostrando, passo a passo, como esboçar um processo RPA completo no editor do MuleSoft RPA Manager.