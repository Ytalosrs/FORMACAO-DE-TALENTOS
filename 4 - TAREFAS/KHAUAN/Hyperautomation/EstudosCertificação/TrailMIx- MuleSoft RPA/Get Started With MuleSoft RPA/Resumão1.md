## **1. O QUE É MuleSoft RPA**

## Conceito Fundamental​

A **Automação Robótica de Processos (RPA)** usa "robôs" de software que imitam ações de usuários humanos—clicar, digitar, extrair dados—para automatizar tarefas repetitivas sem necessidade de código ou integração profunda com sistemas legados.

## Casos de Uso Típicos​

- Extração e entrada de dados entre sistemas
    
- Processamento de folha de pagamento
    
- Comparação de preços
    
- Processamento de reembolsos
    
- Qualquer tarefa repetitiva, estruturada e baseada em regras
    

## Proposta do MuleSoft​

Uma **plataforma unificada orientada ao usuário** que gerencia todo o ciclo de vida de automações RPA com:

- **"Cliques, não código"**: pessoas de negócio podem automatizar sem depender da TI
    
- **Governança centralizada**: auditoria, controle de acesso e rastreamento integrados
    
- **Integração com Salesforce**: conecta-se ao Anypoint Platform e ferramentas de fluxo Salesforce
    

## Desafios Reais nas Empresas​

Muitos projetos RPA falham por:

- Problemas de governança e transparência
    
- Falta de escalabilidade
    
- Excesso de expectativa (tentar usar RPA para tudo)
    

**Resultado quando bem implementado**: redução significativa de custos e aumento de qualidade dos dados.

---

## **2. COMPONENTES DA PLATAFORMA MuleSoft RPA**

## 2.1 RPA Manager – O Orquestrador Central​

**O que é**: Console em nuvem que centraliza todo o gerenciamento.

**Responsabilidades**:

- Gerenciar usuários, permissões e equipes
    
- Avaliar viabilidade financeira de processos
    
- Desenhar processos em BPMN
    
- Gerar chaves de API e integrações
    
- Testar, implantar e monitorar processos RPA
    
- Acompanhar backlogs e ciclo de vida
    

**Módulos principais**:​

- **My RPA**: visão rápida dos processos que você pode editar
    
- **Process Automation**: criar e gerenciar processos
    
- **Process Evaluation**: avaliar candidatos a automação
    
- **Process Operations**: configurar execução em produção
    
- **Process Monitoring**: dashboards, alertas, status em tempo real
    
- **Bot Management**: configurar e monitorar bots Windows
    
- **User Management**: permissões e acesso
    
- **Organization Management**: configuração geral
    

---

## 2.2 RPA Recorder – Documentação Executável​

**O que é**: Aplicativo Windows que grava ações de um usuário executando uma tarefa manualmente.

**Funcionamento**:

- Captura cliques, teclas, movimentos de mouse e screenshots
    
- Gera automaticamente um diagrama BPMN detalhado
    
- Produz documentação legível das tarefas
    
- Permite editar e mesclar gravações
    

**Duas visões**:​

- **Recorder view**: captura você executando o processo em tempo real
    
- **Editor view**: ajusta, refina e mescla as gravações antes de usar no Manager
    

**Resultado**: Um "esqueleto" pronto do processo com toda a documentação necessária, acelerando a captura de requisitos.

---

## 2.3 RPA Builder – Centro de Desenvolvimento​

**O que é**: Aplicativo Windows conectado ao RPA Manager, onde a automação "ganha corpo".

**Principais funções**:​

- Importa projetos do RPA Manager (frequentemente alimentados pelo Recorder)
    
- Transforma documentação em **workflows executáveis** usando a Toolbox
    
- Trabalha com **variáveis, parâmetros** e **estruturas de controle**
    
- Substitui gravações "cruas" por componentes mais robustos
    
- Implementa integração com sistemas externos, tratamento de erros e validação
    

**Características**:

- Workspace altamente personalizável (painéis, janelas, layout)
    
- Colaboração centralizada com governança (tudo sincroniza com Manager)
    
- Teste local de steps ou do processo inteiro
    

**Papel no ciclo de melhoria contínua**:​

- Recebe **analysis packages** quando há erro em produção
    
- Baixa os pacotes de análise do Manager
    
- Abre no Builder para inspeção e debug
    
- Ajusta o fluxo
    
- Reenvia ao Manager para novos testes e deployment
    

---

## 2.4 RPA Bots – Agentes de Execução​

**O que é**: Instâncias de Windows que executam os processos RPA.

**Funcionamento**:

- Conectam-se ao RPA Manager
    
- Baixam as implementações prontas do Builder
    
- Executam os processos nas fases de Test e Production
    
- Configuram sessão/ambiente conforme necessário
    
- Tiram screenshots quase em tempo real durante execução
    

**Geração de dados**:

- Geram arquivos de **log** detalhados
    
- Produzem **analysis packages** em caso de erro
    
- Enviam dados de diagnóstico para troubleshooting
    

**Uso prático**: Permitem ao Manager exibir monitoring em tempo quase real e fornecem o insumo técnico para que você debug no Builder.

---

## **3. CICLO DE VIDA DO PROJETO RPA (5 FASES)**

O MuleSoft RPA estrutura todo projeto em **5 fases sequenciais**, cada uma com personas, permissões e entregas específicas:​

## Fase 1: Evaluation (Avaliação)​

**Objetivo**: Decidir se vale a pena automatizar um processo.

**Protagonista**: Business Analyst

**O que se faz**:

- Análise de **custos**: tempo manual, custo por execução, frequência mensal
    
- Análise de **qualificadores**: natureza do trabalho (regra vs intervenção), tipo de entrada/saída, estabilidade, tipo de dados
    
- Análise de **benefícios**: impacto em qualidade, complexidade, risco
    
- Cálculo de **ROI e ponto de equilíbrio**
    

**Ferramentas**:​

- **Evaluation Tool**: preenche critérios e visualiza em **Matriz de Processos** (eixo x = Qualificadores, eixo y = Benefícios)
    
- Cores de vermelho a verde indicam atratividade do candidato
    

**Statuses do processo**:​

- Created → Approved (passa para Process Matrix) → Rejected
    

**Resultado**: Processo aprovado é atribuído a um **Project Manager**, que monta o time e move para Design.

---

## Fase 2: Design (Desenho)​

**Objetivo**: Desenhar o "blueprint" técnico do processo em BPMN.

**Protagonistas**: Business Analyst, Designer, às vezes RPA Developer

**O que se faz**:

- Modelar processo como **diagrama BPMN** no editor do RPA Manager (drag-and-drop)
    
- Conectar eventos iniciais, tarefas do bot, tarefas de usuário e gateways
    
- Usar **activity parameters** como variáveis
    
- Adicionar anotações (muitas vindas do **Recorder**)
    

**Fluxo de trabalho típico**:​

1. Desenhar estrutura de alto nível em BPMN
    
2. Usar **MuleSoft RPA Recorder** para gravar a execução manual do processo
    
3. Importar BPMN gerado pelo Recorder
    
4. Mesclar com o desenho original: remover tarefas desnecessárias, quebrar/refazer rotas, copiar detalhes técnicos (screenshots, teclas, valores)
    

**Resultado**: BPMN final documentado, pronto para ser baixado no Builder.

**Permissões**: Quem tem acesso pode editar o BPMN; depois que passa para Build, fica somente leitura (mas documentação pode ser editada).

---

## Fase 3: Build (Construção)​

**Objetivo**: Transformar o BPMN em workflows robustos e executáveis.

**Protagonista**: RPA Developer

**O que se faz**:​

- Baixa o BPMN e a documentação (especialmente do Recorder) no **RPA Builder**
    
- Converte em **executable code blocks** usando blocos da **Toolbox**
    
- Substitui gravações "cruas" por componentes mais robustos:
    
    - Ações de UI mais confiáveis
        
    - Manipulação de arquivos (Excel, CSV, etc.)
        
    - Integração com sistemas (REST, email, etc.)
        
    - Tratamento de exceções e erros
        
    - Validação de dados
        
- Organiza em workflows reutilizáveis
    
- Testa steps localmente ou o processo inteiro
    

**Reutilização de componentes**:​

- **Activity Library**: componentes criados uma vez, usados em múltiplos processos
    
- Arquivos **.CRPA**: packotes de automação reutilizáveis
    
- Templates **.tptx**: modelos para processos similares
    

**Resultado**: Processo pronto e testado localmente.

---

## Fase 4: Test (Teste)​

**Objetivo**: Validar que o processo funciona conforme esperado em ambiente controlado.

**Protagonista**: QA, RPA Developer

**O que se faz**:​

- Retorna ao **RPA Manager** (não é no Builder)
    
- Cria **Test Plans** com:
    
    - Valores de activity parameters (dados de teste)
        
    - Seleção de qual **RPA Bot** usar
        
    - Tipo de Windows session dedicada para execução
        
- Dispara execução manualmente
    
- Manager exibe:
    
    - Logs por flow element (cada passo do fluxo)
        
    - Screenshots quase em tempo real
        
    - Status de sucesso/falha
        

**Debug em caso de erro**:

- Manager gera **analysis package**
    
- Baixa no Builder
    
- Abre para inspeção detalhada
    
- Identifica e corrige o erro
    
- Reenvia ao Manager para reteste
    

**Resultado**: Processo validado, pronto para produção.

---

## Fase 5: Production (Produção)​

**Objetivo**: Executar o processo automaticamente em ambiente real, com monitoramento.

**Protagonista**: Operations, RPA Developer

**O que se faz**:​

- Configura **Execution Plan** (similar ao Test Plan, mas para produção)
    
- Define **schedulers**: quando e com que frequência rodar
    
    - Exemplo: weekdays 8h–17h, toda segunda-feira, etc.
        
- RPA Manager fornece **monitoring**:
    
    - Dashboards de performance
        
    - Alertas em caso de falha
        
    - Screenshots quase em tempo real das sessions Windows
        
    - Visualização de logs
        

**Resultado**: Processo rodando autonomamente com visibilidade total.

---

## **4. BPMN: LINGUAGEM VISUAL PARA RPA**

## O que é BPMN?​

**BPMN** (Business Process Model and Notation) é a **notação padrão** para modelar processos de negócio visualmente. No MuleSoft RPA, é a linguagem central para desenhar automações.

## Estrutura e Elementos​

Um diagrama BPMN é construído com:

- **Elementos** (símbolos): eventos, tarefas, gateways
    
- **Conexões**: setas de fluxo (sequence flow) que ligam elementos
    
- **Parâmetros**: variáveis e configurações em cada elemento
    

## Elementos Principais no MuleSoft RPA​

|Elemento|Descrição|Uso|
|---|---|---|
|**Evento Inicial (Start Event)**|Começo do fluxo|Só pode haver UM por diagrama|
|**Evento Final (End Event)**|Encerramento do fluxo|Pode haver VÁRIOS; descreve liberação de recursos|
|**Tarefa do Bot (Bot Task)**|Código/instruções executadas pelo bot|Quando o robô faz uma ação|
|**Tarefa do Usuário (User Task)**|Pausa para interação humana|Quando precisa esperar input humano|
|**Gateway Exclusivo (Exclusive Gateway)**|Decisão condicional|Escolhe entre 2+ caminhos baseado em condição|
|**Evento de Limite de Temporizador (Timer Event)**|Condição de timeout|"Pula" uma etapa se exceder tempo|
|**Evento Intermediário (Intermediate Event)**|Divide fluxos complexos|Cria subfluxos ligados por links nomeados|

## Dentro de uma Bot Task​

Você pode adicionar **elementos especiais** para integração:

- Email
    
- Excel
    
- Sistema de arquivos
    
- Chamadas REST
    
- Sistemas externos diversos
    

---

## BPMN como XML​

**A "mágica"**: O diagrama visual é representado como **XML estruturado**, similar aos fluxos Mule.

**Vantagens**:

- Legível por máquina e fácil de interpretar
    
- O que se desenha graficamente vira estrutura XML padronizada
    
- Pode ser **importado** no RPA Builder
    
- O XML serve como instrução para gerar um **"esqueleto"** do processo (estrutura básica de atividades)
    
- A partir do esqueleto, você implementa as ações reais (passos de teclado/mouse, chamadas a sistemas, etc.)
    

---

## Anotações e Documentação​

- BPMN permite **anotar visualmente** cada elemento com documentação extra
    
- **Recorder** registra cliques/teclas e converte em texto/documentação associada às Tarefas do Bot
    
- Isso acelera captura de requisitos: grava processo real → Recorder gera documentação legível → refina BPMN e implementação
    

---

## **5. EDITOR BPMN: FERRAMENTAS PRÁTICAS**

## Menu Principal​

O editor BPMN oferece ações essenciais:

- **Salvar**: persiste o diagrama
    
- **Importar**: carrega BPMN do seu PC (ex: do Recorder)
    
- **Gravar** (com Recorder): inicia captura de tela
    
- **Exportar**: baixa o BPMN para o seu PC
    
- Depois que vai para Build, apenas **exportar** fica disponível (diagram fica read-only)
    

## Início do Fluxo​

- Toda automação começa com um **Start Event** ligado a um **Bot Task "vazio"**
    
- Este Bot Task é depois substituído pelos Bot Tasks documentados/refinados com Recorder
    

## Menus Laterais e Ferramentas​

- **Menu à esquerda**: traz todos elementos BPMN (eventos, tarefas, gateways, etc.)
    
- **Menu de contexto**: cada elemento tem opções para conectar, anotar, alterar tipo, remover
    
- **Ferramentas principais**:
    
    - **Hand**: arrastar o diagrama para navegar
        
    - **Lasso**: selecionar partes do diagrama
        
    - **Create/Remove Space**: move elementos abaixo/à direita para abrir espaço
        

---

## Intermediate Events: Quebrando Fluxos Complexos​

**O desafio**: Fluxos muito grandes ficam confusos com linhas cruzadas.

**A solução**: **Throw e Catch Intermediate Events** permitem "pular" de um ponto a outro usando links nomeados.

**Resultado**: Um fluxo grande é dividido em subfluxos mais limpos, cada um com seu próprio End Event, melhorando legibilidade.

---

## Anotações e Contexto​

- Você pode anexar **anotações de texto** a cada elemento (variáveis, detalhes técnicos, etc.)
    
- Útil para documentação técnica e referência futura
    

---

## Navegação e Visualização​

- **Busca por rótulos**: encontra elementos pelo nome
    
- **Minimapa**: visualização compacta do fluxo
    
- **Ajuste ao viewport**: zoom automático para caber na tela
    
- **Zoom in/out**: precisão em diagramas grandes
    

---

## **6. RPA RECORDER: CAPTURA DE REQUISITOS PRÁTICA**

## Conceito Geral​

O Recorder é basicamente um **gerador de "documentação executável"**: grava passos de um usuário em Windows, transforma em BPMN detalhado, que depois é mesclado ao desenho de alto nível para levar o processo à fase de Build.

## Pré-Requisitos: Preparar o Ambiente Windows​

Para evitar falhas por diferenças de tela entre o Recorder (gravação) e os Bots (execução), **alinhe estes parâmetros**:

|Parâmetro|Configuração|
|---|---|
|**Resolução de tela**|Mesma em todos os Windows|
|**Fontes e tipos**|Padrão Windows (não customizadas)|
|**ClearType**|Desativado|
|**Screen saver**|Desativado|
|**Atualizações automáticas**|Desativadas (pode interromper gravação)|
|**Desktop scaling**|100% (não 125% ou 150%)|
|**Efeitos visuais**|"Melhor desempenho" (não "Melhor aparência")|

**Por quê**: Diferenças visuais causam falhas na localização de elementos durante execução.

---

## Usando o Recorder​

**O fluxo típico**:

1. **Inicia gravação**: clica em "Start Recording" ou "Play" no menu do Recorder
    
2. **Alterna entre gravar e estruturar**:
    
    - Grava ações (cliques, digitação, movimentos)
        
    - Pausa a gravação
        
    - Insere novas tarefas/gateways no BPMN (estrutura)
        
    - Retoma gravação
        
3. **Cobre diferentes ramos**: se há gateways (ex: logado vs não logado), grava cada caminho em sequências separadas
    
4. **Usa menus auxiliares**:
    
    - Tirar screenshots (para documentação)
        
    - Adicionar comentários (notas sobre o passo)
        
    - Criar novas atividades (novas Bot Tasks) enquanto grava
        

**Resultado**: Um BPMN gravado com:

- Fluxo estruturado
    
- Screenshots de cada etapa
    
- Documentação legível
    
- Detalhes técnicos (cliques, teclas pressionadas)
    

---

## Mesclar BPMN Gravado com Desenho Original​

**Após gravar**:

1. **Importa** o BPMN gerado pelo Recorder no RPA Manager
    
2. **Mescla** com o BPMN original:
    
    - Remove tarefas desnecessárias
        
    - Quebra/refaz rotas que não fazem sentido
        
    - Copia detalhes (screenshots, teclas, valores) das atividades gravadas para o modelo principal
        
3. **Aproveita que ambos editores (Recorder e Manager) têm os mesmos componentes**, facilitando reorganizar o fluxo
    

**Quando terminar**:

- Publica o processo no Manager
    
- Processo é promovido de **Design** para **Build**
    
- Developer implementa de fato os passos no RPA Builder
    

---

## **7. GERENCIAMENTO NO RPA MANAGER**

## Backlogs e Responsabilidade​

O Manager oferece duas visões:

|Visão|O que contém|
|---|---|
|**Backlog da Equipe**|Processos aprovados aguardando um designer se responsabilizar|
|**Meu Backlog**|Processos sob sua responsabilidade pessoal|

**Fluxo de responsabilidade**:​

- Você "reivindica" um processo no Backlog da Equipe
    
- Ele sai dessa lista e passa para o seu Meu Backlog
    
- Agora você pode iniciar a automação
    

---

## Configuração Inicial do Processo​

Ao clicar em "Iniciar automação", define-se:

- **Categoria**: tipo de processo
    
- **Aplicativos necessários**: quais sistemas será integrado
    
- **Equipe do processo**: quem trabalha nele
    
- **Responsável**: o dono
    
- **Gerente do projeto**: quem coordena
    

_Normalmente feito por um gerente de projeto que monta o time e define permissões._

---

## Ciclo de Vida e Permissões​

- Processo passa por fases (Design, Build, etc.)
    
- **O que você pode fazer** depende da fase
    
- **Na fase Design**: acesso total ao BPMN (ícone "Abrir processo") + análise financeira
    
- **Quando promove para Build**: BPMN fica somente leitura, mas você ainda edita a documentação das atividades
    

---

## Editor BPMN Dentro do Manager​

- Ao abrir um processo com permissão, o BPMN aparece no editor do Manager
    
- **Indicador de fase**: no canto superior direito (mostra em que etapa está)
    
- **Botão "Publicar"**: promove o processo para a próxima fase (Build)
    
- **Processo novo**: Manager cria modelo padrão (Start Event + Bot Task vazio) que você detalha
    

---

## Acesso Via "Meu RPA"​

Seção **Meu RPA** mostra rapidamente todos os processos que você pode visualizar/editar:

- Clicar no nome: abre o editor BPMN diretamente
    
- Clicar no ícone "Editar": vai para página de gerenciamento (equipe, nomes, etc.), não o diagrama
    

---

## **8. ANÁLISE FINANCEIRA E ROI**

## Objetivo​

A tela de **Análise Financeira** estima custos, economias e o **ponto de equilíbrio (ROI)** de um processo RPA, ajudando na decisão de investimento.

---

## Seção 1: Análise Financeira – Lançamentos de Custos​

Permite registrar custos de curto/longo prazo e frequência de execução.

**Campos principais**:

- **Meses**: período analisado (ex: 12 meses)
    
- **Investimento**: valor total + depreciação para chegar ao custo mensal
    
- **Previsão de execuções mensais**: quantas vezes o processo roda por mês
    
- **Custos operacionais mensais**: custo de manutenção, bot licensing, etc.
    

---

## Seção 2: Avaliação de Custos​

Usa os lançamentos para calcular e plotar ao longo do tempo:

|Métrica|O que significa|
|---|---|
|**Custos fixos mensais** (linha verde)|Custo do bot, licença, infraestrutura|
|**Custos totais mensais** (linha azul)|Fixos + variáveis|
|**Economia mensal** (linha preta)|O quanto você economiza vs processo manual|
|**Lucro líquido mensal** (linha laranja)|Economia - Custos = ganho real|

**Combina**:

- Custos reais de bots já em produção
    
- Execuções esperadas
    
- Custo do processo manual
    
- Resultado: visão clara da economia mês a mês
    

---

## Seção 3: Análise do Ponto de Equilíbrio​

Calcula custos totais acumulados vs economias acumuladas ao longo do tempo.

**O Ponto de Equilíbrio (Break-Even)**:

- É o momento em que a **curva de economia acumulada** ultrapassa a **curva de custos totais**
    
- Indica quando o RPA passa a gerar **mais economia do que custo**
    
- Exemplo: "O processo se paga em 6 meses, depois é lucro"
    

**Valor para a decisão**: Mostra se e quando o investimento em RPA terá retorno positivo.

---

## **9. FLUXO COMPLETO: DA IDEIA À PRODUÇÃO**

## Diagrama Conceitual do Ciclo Completo

text

`1. AVALIAÇÃO    ↓   BA analisa custos/qualificadores/benefícios   Resultado: Processo Aprovado ou Rejeitado   ↓   [Se Aprovado] 2. DESIGN    ↓   Designer desenha BPMN no Manager   RPA Recorder grava processo manual   Mesclam BPMN gravado + desenho original   Resultado: BPMN final documentado   ↓ 3. BUILD    ↓   Developer baixa BPMN no Builder   Transforma em workflows robustos (Toolbox, variáveis, tratamento de erros)   Testa localmente   Resultado: Processo executável   ↓ 4. TEST    ↓   QA cria Test Plans no Manager   Executa com Bot em ambiente controlado   Se erro: analysis package → Builder para debug   Resultado: Processo validado   ↓ 5. PRODUCTION    ↓   Operations configura Execution Plan   Define scheduler (quando/frequência)   Manager monitora em tempo real   Resultado: Processo rodando autonomamente`

---

## **10. FLUXO DE TRABALHO REAL: ENTRE FERRAMENTAS**

## Sincronização Manager ↔ Builder ↔ Bots​

**Manager** é o hub central:

- Armazena BPMN e configurações
    
- Controla fases e permissões
    
- Recebe dados dos Bots
    
- Exibe monitoring
    

**Builder** é o IDE de desenvolvimento:

- Baixa projects do Manager
    
- Implementa a lógica
    
- Recebe analysis packages para debug
    
- Reenvia código ao Manager
    

**Bots** são executores:

- Baixam processes do Manager
    
- Executam em Windows
    
- Geram logs e analysis packages
    
- Tiram screenshots quase em tempo real
    

**Ciclo de melhoria contínua**:​

- Erro em produção → Bot gera analysis package
    
- Manager recebe o pacote
    
- Developer baixa no Builder
    
- Abre para inspeção e corrige
    
- Reenvia ao Manager
    
- Retesta e redeploy
    

---

## **RESUMO VISUAL: 7 CONCEITOS ESSENCIAIS**

|#|Conceito|Descrição|Ferramenta|
|---|---|---|---|
|1|**RPA**|Robôs de software que imitam usuários|MuleSoft RPA|
|2|**Manager**|Orquestrador central de todo projeto|Web console|
|3|**Recorder**|Gera documentação + BPMN automaticamente|Windows app|
|4|**BPMN**|Linguagem visual + XML para desenhar processos|Editor Manager|
|5|**Builder**|Transforma BPMN em código executável|Windows IDE|
|6|**Bots**|Executam o processo em Windows|Windows agents|
|7|**5 Fases**|Evaluation → Design → Build → Test → Production|Manager workflow|