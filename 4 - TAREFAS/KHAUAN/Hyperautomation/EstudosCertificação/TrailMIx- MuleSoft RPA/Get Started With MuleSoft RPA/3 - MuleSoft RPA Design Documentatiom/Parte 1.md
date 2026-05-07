
BPMN é usado como uma linguagem visual padrão para modelar os processos de RPA no MuleSoft, e esses diagramas são armazenados como XML estruturado que pode ser importado e transformado em um “esqueleto” de automação no RPA Builder.​

## Essencial sobre BPMN no MuleSoft RPA

- **BPMN** é a notação padrão de modelagem de processos de negócio usada para desenhar os fluxos de RPA no MuleSoft RPA Manager.​
    
- O modelo é todo construído com **elementos** (símbolos) conectados por setas de fluxo: eventos, tarefas, gateways e conexões.​
    
- Elementos principais que o MuleSoft RPA usa:​
    
    - Evento inicial (começo do fluxo, só pode haver um).
        
    - Evento final (pode haver vários, encerra o fluxo e pode descrever liberação de recursos).
        
    - Evento de limite de temporizador (condição de timeout para “pular” uma etapa).
        
    - Tarefa do Bot (código/instruções executadas pelo bot de RPA).
        
    - Tarefa do Usuário (pausa para interação humana).
        
    - Gateway exclusivo (decisão condicional entre dois ou mais caminhos).
        
    - Evento intermediário (divide fluxos complexos em subfluxos ligados por links nomeados).
        
- Todos esses símbolos são chamados de **elementos** porque, no contexto do MuleSoft RPA, servem para gerar programas executáveis e são configurados com parâmetros de execução (ex.: quando dispara, que recurso acessa, etc.).​
    
- Dentro de uma Tarefa do Bot, você adiciona elementos especiais para integrar com sistemas externos (e‑mail, Excel, sistema de arquivos, REST, etc.).​
    

## Foco no XML do diagrama BPMN

- A “mágica” do BPMN é que o diagrama visual é representado como **XML estruturado**, de forma semelhante à representação dos fluxos Mule.​
    
- Esse XML é legível por máquina e fácil de interpretar: o que se desenha graficamente no RPA Manager vira uma estrutura XML padronizada.​
    
- O diagrama BPMN criado no MuleSoft RPA Manager pode ser **importado** no MuleSoft RPA Builder, e o XML serve como instrução para gerar um **esqueleto** do processo RPA (estrutura básica de atividades e fluxo).​
    
- A partir desse esqueleto, você começa a implementar de fato as ações (passos de teclado/mouse, chamadas a sistemas, etc.) para automatizar o trabalho humano em Windows.​
    

## Documentação automática com Recorder

- O BPMN permite **anotar** visualmente os elementos com documentação extra.​
    
- O MuleSoft RPA Recorder registra cliques e teclas de um usuário no Windows e converte isso em texto/documentação associada às Tarefas do Bot no diagrama BPMN.​
    
- Isso acelera a captura de requisitos: você grava o processo real, o Recorder gera texto legível como documentação, e depois você refina o diagrama BPMN e a implementação antes de fechar todos os detalhes técnicos.​
    

Se quiser, dá para montar um exemplo simples de XML BPMN e mapear linha a linha para os elementos (Evento Inicial, Tarefa do Bot, Evento Final) pensando em um fluxo típico de RPA que você já construiu.