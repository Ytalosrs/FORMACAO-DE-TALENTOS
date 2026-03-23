Esses arquivos fecham bem o “lado QA + operação” do MuleSoft RPA. Um resumo bem detalhado, mas direto:

1. **Variáveis globais**
    
    - São valores centralizados no RPA Manager (URL, caminho de pasta, credencial, coordenada etc.) usados por vários processos e deployments, em vez de repetir o mesmo valor em muitos Activity Parameters.​
        
    - São criadas em Global Variables (Process Automation), com nome, tipo (integer, alphanumeric, boolean, float, coordinates), valor e em quais fases valem (Test, Production, ambas).​
        
    - A tela permite ver onde são usadas, editar ou apagar (se não estiverem em uso); alterações passam a valer só para execuções futuras.​
        
    - Uso típico: caminhos de rede, URLs padrão, pastas de download, coordenadas comuns; qualquer mudança é feita em um único lugar e propaga para todos os processos.​
        
2. **Planos de teste (Test Plans) – criação e configuração**
    
    - O test plan define “como testar” um processo já construído na fase Build: dados, parâmetros, bots e sessões para garantir que o processo está pronto para produção.​
        
    - Ao colocar o projeto em fase Test, aparecem as seções Test Plans (para criar/disparar) e Test Results (para ver resultados agrupados por plano).​
        
    - Abas principais ao criar o plano:
        
        - **Settings**: nome único do plano (serve como chave para agrupar execuções) e descrição para o time entender o objetivo do teste.​
            
        - **Activity Parameter**: define valores de teste para activity parameters: pode manter o default do Builder, sobrescrever manualmente ou vincular a global variables para simular cenários diferentes sem mexer no processo.​
            
        - **User Task**: atribui usuários/grupos às tarefas humanas; eles recebem tarefas em “My RPA Team Tasks” e precisam “claimar” para o fluxo continuar.​
            
        - **Execution**: escolhe bot, tipo de sessão (desktop existente ou secure session, que é a boa prática) e se o bot terá acesso ao Windows shell (para evitar cliques acidentais em Start/taskbar se desativar).​
            
    - Na seleção de bots, o Manager indica estados:
        
        - Deployable: totalmente compatível.
            
        - Warning: compatível, mas pode faltar recurso (ex.: Excel).
            
        - Not Deployable: incompatível (ex.: só suporta sessão segura, mas o plano exige sessão existente).​
            
3. **Execução e análise de Test Plans**
    
    - Diversos planos podem ser criados para cobrir cenários diferentes; todos podem ser executados em paralelo clicando em Execute.​
        
    - O andamento e o status de cada plano aparecem em Test Results, mostrando se o trigger disparou e se o processo rodou com sucesso.​
        
    - Ao clicar nas contagens de sucesso/falha, abre-se Process Run Results com detalhes de cada execução.​
        
    - Quando um teste falha, é possível baixar um **analysis package**, compartilhar com o time de desenvolvimento e usá-lo no Builder para encontrar a causa-raiz com mais facilidade.​
        
    - O menu Robot State and Operations mostra por bot: estado atual, desde quando está neste estado, ID da instância, workflow em execução e número de execuções bem-sucedidas.​
        
    - O ícone de monitor inicia um streaming ao vivo da execução, permitindo ver exatamente onde o fluxo quebra.​
        
    - Há materiais de apoio (vídeo walkthrough, PDF passo a passo e guia de cleanup), fechando o ciclo de criar, executar, revisar e monitorar testes.​
        
4. **Process Monitoring (monitoramento em tempo real)**
    
    - A visão **Process Monitoring** permite ver em tempo real o que processos e bots estão fazendo, ajudando a achar gargalos e erros rapidamente.​
        
    - Em **Process Streaming**, aparecem todos os processos produtivos, mostrando sessões em execução, quantas configurations existem, quantos bots e sessões estão rodando.​
        
    - Ao clicar no ícone de monitor de um processo, são exibidos painéis com cada sessão ativa: qual bot está rodando, número da sessão, atividade atual e um stream de imagens da tela do Windows.​
        
    - Em **Robot State and Operations**, a visão é organizada por bot: cada um é um box com estado atual das sessões, número de secure sessions, estado do passo, tempo no estado, ID da instância, atividade em execução e contagem de runs concluídos.​
        
    - O **Process Monitor** mostra em detalhe uma sessão:
        
        - Painel de **Process Stream**: imagens ao vivo da área de trabalho do bot.
            
        - Painel de **BPMN**: modelo do processo, com a tarefa atual destacada, ajudando a localizar o ponto exato da falha/travamento.​
            
5. **Schedules, disponibilidade e service time do bot**
    
    - O bot se comporta como um atendente “de plantão” durante o horário agendado: fica escutando gatilhos e, quando um dispara, executa o processo até terminar, mesmo que passe um pouco da hora de fim.​
        
    - Ao terminar uma execução:
        
        - Se ainda estiver dentro do intervalo, volta a escutar.
            
        - Se já saiu do horário e não está rodando nada, suspende o processo até o próximo período agendado.​
            
    - O schedule é configurado no **Scheduling assistant** ao criar a run configuration:
        
        - Definição do padrão inicial (datas/horas de início/fim e primeira execução).
            
        - Modos principais: **Specific interval** (início/fim exatos) e **All day** (meia-noite a meia-noite em dias escolhidos).​
            
    - Boa prática: deixar pelo menos 2 minutos de janela, porque o bot verifica o início de schedule apenas uma vez por minuto; janelas menores podem fazer a execução nunca disparar.​
        
    - Depois do padrão inicial, define-se a repetição: a cada X minutos/horas/dias até uma data final.​
        
        - Se a duração do intervalo < tempo entre repetições: há blocos de execução intercalados com períodos em standby.
            
        - Se a duração do intervalo > tempo entre repetições: os intervalos se sobrepõem, resultando em efeito de disponibilidade 24/7.​
            
    - Além do schedule do processo, cada bot tem um **service time** próprio: janela em que está autorizado a rodar.​
        
    - Na prática, a disponibilidade real é a interseção: se o processo está agendado 10h–11h, mas o bot só pode rodar 10h15–10h45, a disponibilidade efetiva será 10h15–10h45.​
        
6. **Gestão de bots, licenças e troubleshooting (Bot Management e Run Results)**
    
    - A visão de **Bot Management** mostra bots conectados ao RPA Manager, permitindo administrar disponibilidade e saber quais instâncias podem executar processos.​
        
    - Existem dois tipos principais de licença:
        
        - Licença de bot RPA (para rodar processos).
            
        - Licença de secure session (para sessões seguras).​
            
    - O número de sessões simultâneas que um bot pode abrir é igual ao número de licenças atribuídas; se houver mais processos do que licenças, algumas execuções podem ser ignoradas.​
        
    - Em **Process Run Results**, aparece uma tabela de resultados de execução, com coluna de falhas contendo timestamp e mensagem de erro, apontando o passo de atividade onde o problema ocorreu.​
        
    - Cada falha gera um **analysis package** que pode ser baixado, importado no Builder e arrastado para o workbench, destacando bot task, workflow, atividade, descrição detalhada do erro e snapshots de tempo de execução e de design.​
        
    - Se for preciso alterar o processo, ele deve ser revertido para a fase Build antes de aplicar correções usando o pacote de análise.​
        
    - O módulo também oferece walkthroughs e exercícios de cleanup para praticar configuração, troubleshooting e limpeza do ambiente.​
        
7. **Produção, deploy e paralelismo (Production Configurations)**
    
    - A fase de produção pega um processo já testado e define como ele deve rodar no ambiente produtivo: horários, parâmetros, bots e monitoramento.​
        
    - Em **Production Configurations**, as ações principais são:
        
        - **Deploy**: envia o processo para um ou mais bots; a partir daí, ele roda de fato.
            
        - **Revoke**: interrompe imediatamente o processamento; execuções pendentes ficam com status “canceled”.
            
        - **Pause**: pausa novas execuções, mas permite que as já iniciadas terminem normalmente.
            
        - **Continue**: retoma execuções de um processo pausado.​
            
    - Ao criar uma run configuration de produção, são definidas:
        
        - Schedules (podem existir vários).
            
        - Settings, Activity Parameter, User Task e Execution, seguindo a mesma lógica de teste (herdando o conceito de parâmetros, usuários e passos de execução).​
            
    - Cuidados com agendamento e conflitos:
        
        - O schedule de um processo não pode “competir” com outro que use a mesma session; se conflitar, algumas execuções podem ser puladas por não conseguirem controle da sessão.​
            
        - Cada session de bot só roda um processo por vez, então a orquestração de horários é crítica para não perder runs.​
            
    - Na etapa final, escolhem-se os bots e o número de **Assigned Sessions**:
        
        - Para rodar em paralelo, atribui-se o processo a múltiplas sessions, e o sistema cria réplicas e distribui os runs entre elas.
            
        - Se forem configuradas mais sessions do que o bot tem licenças, algumas execuções serão puladas por falta de sessão disponível.​
            
    - Depois de criada a config, basta clicar em Deploy; o status das execuções é visto em Run Results. Se o processo voltar para a fase Test, todas as instâncias de produção são revogadas automaticamente.​
        
8. **Outro conteúdo de acompanhamento (mais Process Monitoring)**
    
    - Há mais um texto focando em Process Streaming e Robot State and Operations, reforçando que você pode visualizar, em tempo real, sessões em execução, quantas configurations existem e quantos bots/sessões estão ativas.​
        
    - O Process Monitor mostra simultaneamente a tela do bot e o BPMN, permitindo unir visão técnica de fluxo com o que está acontecendo no Windows naquele instante.​
        

Em conjunto, esses arquivos explicam como padronizar valores (global variables), testar bem (test plans), monitorar (Process Monitoring), planejar horários (schedules + service time), operar em produção (Production Configurations) e manter bots saudáveis (Bot Management + Run Results).