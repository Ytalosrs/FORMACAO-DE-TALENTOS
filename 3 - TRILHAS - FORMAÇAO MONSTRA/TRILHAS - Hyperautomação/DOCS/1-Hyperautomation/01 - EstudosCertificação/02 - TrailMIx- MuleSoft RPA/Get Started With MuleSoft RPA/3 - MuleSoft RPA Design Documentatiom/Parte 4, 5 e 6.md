Os três tópicos mostram que o RPA Recorder é basicamente um gerador de “documentação executável”: ele grava passos de usuário em Windows, transforma em BPMN detalhado e depois você une isso ao desenho de alto nível para levar o processo à fase de Build.​

## 1. Preparar o ambiente para o Recorder

- O Recorder captura cliques, teclas, movimentos de mouse e screenshots para descrever como o usuário executa manualmente uma atividade de Bot Task.​
    
- Para evitar falhas por diferença de tela, o Windows do Recorder deve estar alinhado com o Windows dos bots: mesma resolução, fontes, ClearType desativado, sem screen saver, sem atualizações automáticas, desktop scaling em 100% e efeitos visuais ajustados para “melhor desempenho”.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-design-documentation?trail_id=get-started-with-mulesoft-rpa&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## 2. Usar o MuleSoft RPA Recorder

- O menu do Recorder permite iniciar/pausar gravação, parar e salvar em diagrama BPMN, tirar screenshots, adicionar comentários e criar novas atividades (novas Bot Tasks) enquanto grava.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-design-documentation?trail_id=get-started-with-mulesoft-rpa&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- A ideia é alternar entre gravar ações e estruturar o fluxo: grava UI, pausa, insere novas tarefas/gateways no BPMN, retoma gravação, inclusive cobrindo diferentes ramos de Gateways (ex.: logado vs não logado) em sequências separadas.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-design-documentation?trail_id=get-started-with-mulesoft-rpa&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    

## 3. Mesclar BPMN gravado com o desenho original

- Depois de gravar, você importa o BPMN gerado pelo Recorder e o mescla com o BPMN original do RPA Manager: remove tarefas, quebra/refaz rotas, copia detalhes (screenshots, teclas, valores) das atividades gravadas para o modelo principal.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/mulesoft-rpa-design-documentation?trail_id=get-started-with-mulesoft-rpa&trailmix_creator_id=mulesoft-trailhead&trailmix_slug=mulesoft-rpa)​
    
- O editor do Recorder e o do RPA Manager têm os mesmos componentes, o que facilita reorganizar o fluxo; quando o design final está pronto, publica-se o processo e ele é promovido da fase de **Design** para **Build**, onde o desenvolvedor implementa de fato os passos no RPA Builder.​