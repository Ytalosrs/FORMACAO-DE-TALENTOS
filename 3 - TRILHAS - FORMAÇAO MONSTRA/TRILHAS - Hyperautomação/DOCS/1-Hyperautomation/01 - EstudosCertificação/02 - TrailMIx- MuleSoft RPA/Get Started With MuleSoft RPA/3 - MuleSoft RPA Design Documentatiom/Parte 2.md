
O tópico mostra como o MuleSoft **RPA Manager** organiza o trabalho de RPA em backlogs, controla quem edita o quê e em que fase do ciclo de vida o processo está, até abrir o BPMN para design.​

## Backlogs e “reivindicar” processo

- Há duas visões principais: **Backlog da Equipe** (processos aprovados aguardando designer) e **Meu Backlog** (o que já está sob sua responsabilidade).​
    
- Quando você “reivindica” um processo no Backlog da Equipe, ele sai dessa lista e passa para o seu Meu Backlog, onde você pode iniciar a automação.

## Configuração inicial do processo

- Ao clicar em “Iniciar automação”, abre-se o editor de criação do processo, onde se definem: categoria, aplicativos necessários, equipe do processo, responsável e gerente do projeto.​
    
- Normalmente essa criação inicial é feita por um gerente de projeto, que monta a equipe e define quem pode atuar em cada fase do ciclo de vida do processo RPA.​
    

## Ciclo de vida e permissões

- O processo passa por fases (por exemplo, **Design** e **Build**) e o que você pode fazer no BPMN depende da fase.

- Na fase de Design, quem tem permissão vê o ícone “Abrir processo” (editor BPMN) e “Análise financeira”; quando o processo é promovido para Build, o BPMN fica somente leitura, mas ainda dá para editar a documentação das atividades.​
    

## Editor BPMN dentro do RPA Manager

- Ao abrir um processo com permissão de Design, o diagrama BPMN é exibido no editor do RPA Manager, com indicador de fase no canto superior direito e botão “Publicar” para promover à fase de Construção.​
    
- Se for um processo novo, o RPA Manager cria um modelo padrão: um Evento Inicial sem rótulo ligado a uma Tarefa de Bot em branco, que você depois detalha.​
    

## Acesso via “Meu RPA”

- A seção **Meu RPA** mostra rapidamente todos os processos que você pode visualizar ou editar, seja porque os reivindicou, seja porque foi adicionado à equipe do ciclo de vida.​
    
- Clicar no nome abre diretamente o editor BPMN; clicar no ícone Editar leva à página de gerenciamento do processo (configuração de equipe, nomes etc.), não ao diagrama.​