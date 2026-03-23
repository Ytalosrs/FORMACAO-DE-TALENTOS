Automatizar interações dinâmicas aqui significa ensinar o bot a lidar com telas que mudam (páginas carregando, listas, dropdowns, múltiplos botões iguais), usando Image Search de forma mais inteligente, com âncoras e validações.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​

## Ideia principal

- O módulo mostra como tornar o bot mais **robusto** em cenários reais: confirmar que uma página carregou, localizar elementos que se repetem e escolher o certo, e interagir com dropdowns.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Para isso, você combina Image Search, áreas de busca dinâmicas (anchor points) e Mouse Actions, em vez de depender só de coordenadas fixas de tela.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Anchor points (busca dinâmica)

- Você usa o resultado de uma primeira Image Search como âncora para limitar a área da segunda busca, tornando-a relativa a um elemento e não à tela inteira.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Isso melhora desempenho e, mais importante, permite escolher o elemento correto quando há várias imagens idênticas (por exemplo, vários botões “Open” em uma lista, escolhendo o da linha certa).[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Verificar carregamento da página

- Depois de clicar em um link ou botão de navegação, você adiciona uma Image Search para encontrar um texto ou imagem específica da nova página.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Se a imagem for encontrada, o bot confirma que a página carregou; se não, lança erro ali, em vez de “quebrar” adiante no fluxo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Interagir com dropdowns

- Passos típicos: localizar o dropdown por Image Search, abrir com Mouse Actions, localizar a opção dentro da lista por outra Image Search e limitar essa busca com base na localização anterior.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Em seguida, o bot clica na opção desejada com Mouse Actions, tornando a seleção de opções de lista mais confiável mesmo em layouts dinâmicos.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-dynamic-interactions-with-a-windows-program?trail_id=get-started-with-mulesoft-rpa-builder)​