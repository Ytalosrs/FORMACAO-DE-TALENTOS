Esse tópico mostra como fazer buscas dinâmicas em GUI usando parâmetros de atividade, OCR e atalhos de teclado, para o mesmo bot funcionar com textos diferentes sem mudar o fluxo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​

## Ideia geral do tópico

- Você adiciona parâmetros de atividade ao workflow para receber valores dinâmicos (por exemplo, o nome de um evento ou palavra-chave).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Em vez de procurar sempre a mesma imagem fixa, o bot passa a procurar texto que muda conforme o parâmetro, usando OCR e combinações de teclas como Ctrl+F.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## O que é OCR e para que serve

- OCR (Optical Character Recognition) é o recurso que lê o texto na tela e transforma em uma lista de palavras com suas coordenadas na página.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- No MuleSoft RPA, o passo de ação OCR permite procurar por uma string de texto (inclusive vinda de parâmetro de atividade) dentro dessa lista, localizando a posição do texto na tela para depois usar como âncora.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Quando usar OCR em vez de Image Search

- Use Image Search quando o elemento é estático (ícone, botão fixo, label que não muda) e você tem uma imagem de referência.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Use OCR quando o texto é dinâmico (por exemplo, “Composer” hoje, “DataWeave” amanhã), porque o Image Search não consegue buscar valores que mudam; já o OCR aceita texto parametrizado.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Keystrokes e Enter String

- O tópico também explica o uso de Keystrokes e Enter String: Keystrokes é indicado para atalhos de teclado (como Ctrl+F), porque você pode gravar as teclas e definir em qual janela elas serão executadas.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Para digitar texto “normal” em campos, a recomendação é usar Enter String; Keystrokes fica reservado para combinações especiais de teclas.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Fluxo típico com OCR + parâmetros

- O exemplo navega em uma página com uma lista de eventos e quer encontrar o primeiro evento cujo título contém um valor guardado em parâmetro de atividade (por exemplo “Composer”).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Primeiro, o bot envia Ctrl+F com Keystrokes para usar a busca do navegador e garantir que o texto fique visível; em seguida, usa o passo de ação OCR, com Search mode em Fuzzy Comparison e Search text ligado ao parâmetro, para achar as coordenadas exatas desse texto na tela.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/use-dynamic-values-in-automated-gui-searches?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Depois de encontrada a localização, o bot usa essa posição como âncora para clicar no botão correto (por exemplo, o RSVP do evento correspondente).