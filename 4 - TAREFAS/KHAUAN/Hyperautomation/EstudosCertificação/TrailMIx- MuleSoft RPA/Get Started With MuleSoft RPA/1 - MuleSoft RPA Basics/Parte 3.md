O tópico apresenta os quatro componentes principais (RPA Manager, RPA Recorder, RPA Builder e RPA Bots) e como cada um atua em colaboração ao longo do lifecycle; entre eles, o **MuleSoft RPA Builder** é a ferramenta central de desenvolvimento onde a automação realmente “ganha corpo”.​

## RPA Manager (visão rápida)

- Centraliza todo o gerenciamento de processos RPA, com módulos como My RPA, Process Automation, Process Evaluation, Process Operations, Process Monitoring, Dashboard, Alerts, Bot Management, User Management e Organization Management.​
    
- É nele que você acompanha backlog, ciclo de vida (Project view + Lifecycle Assistant), execução em produção, dashboards e alertas, além de configurar bots, usuários e integração com Anypoint Platform.
    

## RPA Recorder

- Fica na máquina local e tem duas views: Recorder view (captura você executando o processo) e Editor view (onde você ajusta e mescla gravações).​
    
- Gera automaticamente a representação gráfica do processo e a documentação das tasks, que depois serão usadas como base no Builder para implementação detalhada.​
    

## RPA Builder – papel principal

- O **MuleSoft RPA Builder** é o app de desenvolvimento que roda na sua máquina e se conecta ao RPA Manager, permitindo implementar o processo em um ambiente de dev mantendo colaboração e governança centralizadas.​
    
- Ele oferece um workspace altamente personalizável (painéis, janelas, layout) para focar nas tasks de automação mais usadas, facilitando o dia a dia de desenvolvimento.
    

## O que você realmente faz no Builder

- Importa projetos vindos do RPA Manager (muitas vezes alimentados pelo Recorder) e transforma a documentação/fluxo em **workflows executáveis**, usando blocos da Toolbox, variáveis, parâmetros e estruturas de controle.​
    
- Ajusta e “endurece” as ações gravadas (por exemplo, cliques e digitação) trocando por componentes mais robustos de UI, manipulação de arquivos, integração, tratamento de erros, etc., para deixar o processo estável e resiliente.​
    

## Builder como centro de troubleshooting

- O Builder é também o principal ambiente de **debug**: os bots geram **analysis packages** quando ocorre erro em produção ou teste, que podem ser baixados no Manager e carregados no Builder para inspeção e correção.​
    
- Isso coloca o Builder no centro do ciclo de melhoria contínua: você desenvolve, recebe pacotes de análise, ajusta o fluxo e reenviá‑lo ao Manager para novos testes e deployment.

## RPA Bots

- São instâncias Windows que se conectam ao RPA Manager e executam os processos nas fases de Test e Production, tirando screenshots quase em tempo real e gerando arquivos de log e analysis packages.​
    
- Ajudam o Manager a exibir monitoring em tempo quase real e dão o insumo técnico para que você, no Builder, consiga diagnosticar problemas de execução e otimizar a automação.