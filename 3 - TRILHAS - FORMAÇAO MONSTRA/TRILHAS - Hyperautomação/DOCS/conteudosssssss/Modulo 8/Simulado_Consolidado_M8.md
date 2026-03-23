# 🎓 Simulado Consolidado: Módulo 8
## Salesforce Flow Orchestration: Orquestração de Processos Complexos (Salesforce + MuleSoft)

Este documento reúne as 45 questões das Provas 1, 2 e 3 do Módulo 8, consolidadas para facilitar o estudo. Cada questão apresenta a resposta correta e uma breve explicação fundamentada nas melhores práticas de hiperautomação e Salesforce Flow.

---

### **Questões de 1 a 15 (Foco: Fundamentos de Flow Orchestration)**

**1. AnyAirlines quer orquestrar o processo completo de admissão de funcionários, com várias etapas e departamentos. Qual componente é mais apropriado?**
A. Um único Screen Flow simples  
B. Salesforce Flow Orchestration  
C. Apenas MuleSoft RPA  
D. Apenas Composer  
**Resposta correta: B**  
**Por que:** O Flow Orchestration é projetado para processos de longa duração que envolvem múltiplos usuários, estágios e automações.

**2. Northern Trail Outfitters (NTO) precisa entender a estrutura básica de uma orquestração. Qual é a hierarquia correta?**
A. Step → Stage → Orchestration  
B. Orchestration → Stages → Steps  
C. Stage → Orchestration → Steps  
D. Steps → Orchestration → Stages  
**Resposta correta: B**  
**Por que:** Uma Orquestração é composta por Estágios (Stages), que por sua vez contêm Passos (Steps).

**3. Em um cenário, o processo de “Admissão de Funcionário” é dividido em Documentação, TI e Treinamento. Como isso deve ser modelado?**
A. Cada atividade como uma Orchestration separada  
B. Estágios (Stages) representando cada agrupamento lógico  
C. Apenas Steps sem Stages  
D. Um único Step gigante  
**Resposta correta: B**  
**Por que:** Stages agrupam logicamente Steps relacionados, permitindo uma visão clara do progresso do processo.

**4. A orquestração possui etapas que executam Autolaunched Flows sem interação humana. Como são chamadas essas etapas?**
A. Interactive Steps  
B. Background Steps  
C. User Tasks  
D. Bot Tasks  
**Resposta correta: B**  
**Por que:** Background Steps executam lógica automatizada (Autolaunched Flows) sem a necessidade de intervenção do usuário.

**5. Uma etapa exige que um gerente aprove um desconto em uma tela. Que tipo de Step é esse?**
A. Background Step  
B. Interactive Step  
C. System Step  
D. Async Step  
**Resposta correta: B**  
**Por que:** Interactive Steps exigem que um usuário realize uma ação através de um Screen Flow.

**6. Um cenário fala sobre “Work Items” que aparecem para usuários em uma fila de trabalho, associando um Flow específico a ser preenchido. O que isso representa?**
A. Registros de log  
B. Orchestration Work Items  
C. Platform Events  
D. Apex Jobs  
**Resposta correta: B**  
**Por que:** Work Items são as tarefas geradas pela orquestração e atribuídas aos usuários.

**7. NTO quer que uma etapa interativa seja atribuída a um grupo de aprovadores. O que a Orchestration suporta?**
A. Atribuição apenas a usuários individuais  
B. Atribuição a Usuário, Grupo ou Fila (Queue)  
C. Atribuição apenas a filas  
D. Atribuição apenas ao dono do registro  
**Resposta correta: B**  
**Por que:** A flexibilidade de atribuição permite que tarefas sejam direcionadas para as pessoas ou equipes corretas de forma dinâmica.

**8. Um exemplo de prova descreve um processo que pode levar dias, com múltiplas aprovações em momentos diferentes. Por que Flow Orchestration é adequado aqui?**
A. Porque roda apenas em lote  
B. Porque gerencia estado de longo prazo, etapas e responsáveis  
C. Porque substitui APIs  
D. Porque não precisa de Flows  
**Resposta correta: B**  
**Por que:** Ao contrário de Flows síncronos, a Orquestração mantém o estado do processo por longos períodos (stateful).

**9. Em um Stage, duas etapas devem ocorrer ao mesmo tempo: RH prepara o contrato e TI cria o e‑mail. Como isso é modelado?**
A. Steps sequenciais dentro do Stage  
B. Steps paralelos dentro do mesmo Stage, que só termina quando ambos concluírem  
**Resposta correta: B**  
**Por que:** Steps paralelos aumentam a eficiência do processo, permitindo que diferentes equipes trabalhem simultaneamente.

**10. Um candidato sugere usar apenas Flows isolados para um processo que exige coordenação entre vários times e tarefas humanas espaçadas. Por que isso pode ser insuficiente?**
A. Porque Flows não suportam Autolaunched  
B. Porque Orchestration fornece modelo explícito de Stages, Steps e Work Items de longa duração  
**Resposta correta: B**  
**Por que:** A Orquestração fornece a "cola" e a visibilidade necessária para processos complexos que Flows individuais não conseguem gerenciar sozinhos.

**11. AnyAirlines quer garantir trilha de auditoria: quem aprovou o quê, em qual etapa. Qual recurso ajuda nisso?**
A. Logs apenas em Apex  
B. Estado e histórico de Orchestration Runs e Work Items  
**Resposta correta: B**  
**Por que:** O Salesforce rastreia automaticamente o ciclo de vida de cada execução, fornecendo auditoria nativa.

**12. Um cenário menciona que a mesma Orchestration será usada em vários tipos de processos semelhantes, com pequenas variações. O que a prova tende a valorizar?**
A. Criar uma Orchestration totalmente nova para cada variação  
B. Reutilizar orquestração e subflows onde fizer sentido, evitando duplicações  
**Resposta correta: B**  
**Por que:** Segue o princípio de modularidade e reutilização, facilitando a manutenção futura.

**13. NTO quer que certas etapas sejam opcionais e outras obrigatórias dentro de um Stage. O que define a conclusão do Stage?**
A. Quando qualquer Step termina  
B. Quando todas as Steps obrigatórias terminam  
**Resposta correta: B**  
**Por que:** A conclusão do Stage é baseada no sucesso de seus passos críticos configurados como obrigatórios.

**14. Uma alternativa diz que “Flow Orchestration é apenas um nome novo para qualquer Screen Flow”. Como isso deve ser avaliado?**
A. Correto  
B. Errado; Orchestration adiciona camada de processo multiestágio, não apenas UI  
**Resposta correta: B**  
**Por que:** Orquestração é um motor de processos (workflow engine) que coordena múltiplos Flows.

**15. Um processo descrito na prova envolve uma sequência curta, sem interação humana, toda síncrona. Que ferramenta provavelmente será preferida ao invés de Orchestration?**
A. Um Flow autônomo (Autolaunched/Record‑Triggered)  
B. Uma Orchestration multiestágio  
**Resposta correta: A**  
**Por que:** Para processos simples e síncronos, o uso de Orchestration é considerado "sobre-engenharia" (over-engineering).

---

### **Questões de 16 a 30 (Foco: Entry/Exit, Atribuição e Execução)**

**16. AnyAirlines quer que o Stage “TI” só seja iniciado depois que o Stage “Documentação” for aprovado com sucesso. Que conceito se aplica?**
A. Work Items  
B. Entry Conditions  
**Resposta correta: B**  
**Por que:** Entry Conditions definem os critérios necessários para que um Stage ou Step comece a ser executado.

**17. Northern Trail Outfitters (NTO) precisa definir quando um Step é considerado concluído. Em uma etapa interativa, qual é o critério típico?**
A. Quando o usuário termina o Screen Flow associado  
B. Quando o administrador clica em “aprovar tudo”  
**Resposta correta: A**  
**Por que:** O fim do Screen Flow sinaliza ao motor de orquestração que a tarefa humana foi realizada.

**18. Em um Background Step, qual evento geralmente determina a Exit Condition?**
A. O usuário clicar em “Salvar”  
B. A conclusão do Autolaunched Flow que implementa a lógica  
**Resposta correta: B**  
**Por que:** Como não há interação humana, o término da lógica do Flow define o fim do passo.

**19. Um cenário descreve um Step que deve ser iniciado apenas quando um certo campo do registro estiver com status “Aprovado”. Onde isso é configurado?**
A. Em Work Guide  
B. Na Entry Condition do Step/Stage  
**Resposta correta: B**  
**Por que:** Entry Conditions podem se basear em dados do registro ou em resultados de passos anteriores.

**20. Um gerente quer que certas tarefas caiam em uma fila, não em um usuário específico, para que qualquer membro da equipe possa pegá‑las. Como isso é suportado?**
A. Atribuição apenas por usuário  
B. Atribuição de Step interativo a Queue  
**Resposta correta: B**  
**Por que:** Atribuir a filas (Queues) é uma prática padrão para distribuir carga de trabalho entre equipes.

**21. NTO precisa que um usuário veja claramente quais tarefas pendentes existem para ele em um determinado registro. Qual componente da UI é usado?**
A. Work Guide no registro do Salesforce  
B. Apenas lista de tarefas padrão  
**Resposta correta: A**  
**Por que:** O componente Lightning "Orchestration Work Guide" mostra dinamicamente o Flow que o usuário precisa preencher.

**22. Em um cenário de prova, duas etapas devem rodar em paralelo dentro do mesmo Stage. Quando o Stage é considerado finalizado?**
A. Quando qualquer uma termina  
B. Quando todas as Steps obrigatórias paralelas são concluídas  
**Resposta correta: B**  
**Por que:** O Stage aguarda a convergência de todos os passos obrigatórios que foram iniciados.

**23. AnyAirlines quer pausar um processo de aprovação até que um evento externo seja concluído. Como o Orchestrator lida com isso?**
A. Não suporta pausas  
B. Mantém o estado da Orchestration e aguarda conclusão do Step ou Flow responsável  
**Resposta correta: B**  
**Por que:** Esta é a principal vantagem da orquestração: a capacidade de "dormir" e "acordar" conforme eventos ocorrem.

**24. Um candidato confunde Orchestration Runs com Flows individuais. Qual a melhor definição de “Orchestration Run”?**
A. Código fonte de um Flow  
B. Uma execução específica da orquestração completa, com todos seus Stages e Steps  
**Resposta correta: B**  
**Por que:** Orchestration Run representa uma instância viva do processo para um registro específico.

**25. Um cenário mostra que várias execuções da mesma Orchestration estão em diferentes estados (em andamento, pausada, concluída). Onde isso é visualizado?**
A. Apenas em logs brutos  
B. Na página de Orchestration Runs  
**Resposta correta: B**  
**Por que:** A página de monitoramento nativa permite gerenciar todas as instâncias ativas e finalizadas.

**26. NTO precisa depurar por que um processo de compras ficou travado em um Stage específico. Que recurso ajuda?**
A. Debug da Orchestration, inspeccionando variáveis entre Stages  
B. Apenas logs de Apex  
**Resposta correta: A**  
**Por que:** O depurador visual permite entender o fluxo de dados e por que certas condições de entrada/saída não foram atendidas.

**27. Um fluxo de exemplo cita: “Stage 1 – Pedido, Stage 2 – Aprovação, Stage 3 – Estoque (background), Stage 4 – Compras”. Em qual Stage a API MuleSoft provavelmente é chamada?**
A. Stage 1  
B. Stage 2  
C. Stage 3 (Estoque) via Background Step  
**Resposta correta: C**  
**Por que:** Integrações de sistema sem tela (como verificar estoque) são tipicamente Background Steps.

**28. AnyAirlines quer que uma etapa de “Revisão de Compliance” seja necessária somente se o valor do pedido for maior que um limite. Onde essa lógica deve ser configurada?**
A. Na política de API  
B. Na Entry Condition do Step/Stage de Compliance  
**Resposta correta: B**  
**Por que:** Entry Conditions podem conter lógica condicional para decidir se um passo deve ou não ser executado.

**29. Uma alternativa diz que “Background Steps não podem chamar APIs, apenas atualizar campos locais”. Com base no conteúdo, isso é:**
A. Verdadeiro  
B. Falso; Background Steps executam Flows, que podem chamar APIs MuleSoft e outros serviços  
**Resposta correta: B**  
**Por que:** Flows (via External Services ou Apex) são o principal meio da Orquestração interagir com sistemas externos.

**30. NTO quer entender quem está segurando um processo parado. Que combinação de informações a Orchestration fornece?**
A. Apenas logs de sistema  
B. Orchestration Runs + Work Items, mostrando em qual Step/usuário/queue o processo está  
**Resposta correta: B**  
**Por que:** A visibilidade do "gargalo" humano ou técnico é uma funcionalidade central do Orchestrator.

---

### **Questões de 31 a 45 (Foco: Estratégia, Cenários e Pegadinhas)**

**31. AnyAirlines tem um processo de compras: funcionário pede item, gerente aprova, API verifica estoque, compras aprovam compra externa se necessário. Por que Flow Orchestration é indicado?**
A. Porque é apenas um processo batch simples  
B. Porque coordena múltiplos passos humanos e automáticos ao longo do tempo  
**Resposta correta: B**  
**Por que:** O cenário envolve diferentes personas (funcionário, gerente, compras) e sistemas (API), caracterizando uma orquestração clássica.

**32. Uma alternativa sugere usar apenas RPA para coordenar todas as aprovações humanas e sistemas em um processo de semanas. Qual é o problema com essa abordagem?**
A. RPA não suporta UI  
B. Orchestration foi desenhado para coordenação de longo prazo e tarefas humanas em Salesforce  
**Resposta correta: B**  
**Por que:** RPA é focado em automatizar tarefas repetitivas em sistemas legados; a coordenação de pessoas no Salesforce é o forte da Orquestração.

**33. NTO quer decidir entre Flow Orchestration e um único Screen Flow para um processo de atendimento rápido que termina em poucos minutos em uma única sessão. O que a prova tende a preferir?**
A. Orchestration por ser mais complexa  
B. Um Screen Flow simples, sem sobre‑engenharia  
**Resposta correta: B**  
**Por que:** Se o processo é linear e concluído por uma única pessoa em uma sentada, um Flow simples é mais eficiente.

**34. Uma questão oferece a opção de usar Orchestration para um cenário onde não há etapas humanas nem espera; tudo é síncrono e curto. Que tipo de pegadinha é essa?**
A. Alternativa que adiciona complexidade desnecessária  
**Resposta correta: A**  
**Por que:** Orquestração consome recursos e adiciona latência; não deve ser usada para automações síncronas simples.

**35. AnyAirlines quer que um gerente possa acompanhar o progresso de um processo complexo diretamente no registro de Conta. Qual combinação suporta isso?**
A. Apenas logs de API  
B. Orchestration + Work Guide exibido no registro  
**Resposta correta: B**  
**Por que:** O Work Guide mostra tanto a tarefa atual quanto o progresso geral para quem tem acesso ao registro.

**36. Uma alternativa sugere duplicar a lógica de aprovação em vários Flows em vez de centralizá‑la em uma Orchestration e subflows. Por que isso é frágil?**
A. Porque Flows não podem ter lógica de aprovação  
B. Porque duplica lógica e dificulta manutenção e auditoria  
**Resposta correta: B**  
**Por que:** A centralização na Orquestração garante que as regras de negócio sejam aplicadas de forma consistente em todo o ciclo de vida do processo.

**37. NTO vê vários processos parados em estágios diferentes e precisa priorizar onde atuar. Qual artefato ajuda a ter essa visão de alto nível?**
A. Lista de Apex Classes  
B. Lista de Orchestration Runs com status (em andamento, pausada, falha, concluída)  
**Resposta correta: B**  
**Por que:** Orchestration Runs funcionam como um painel de controle operacional para gestores de processo.

**38. Uma questão mostra um processo em que, enquanto RH valida documentos, TI já pode começar a preparar o ambiente, ambos em paralelo. Qual resposta demonstra entendimento correto?**
A. Orchestration deve sempre ser sequencial  
B. Orchestration permite Steps paralelos em um Stage, concluído somente quando ambos terminam  
**Resposta correta: B**  
**Por que:** O paralelismo é fundamental para reduzir o tempo total do ciclo (cycle time) em processos complexos.

**39. Um candidato escolhe uma opção que diz: “em caso de erro, é melhor cancelar toda a Orchestration sem qualquer informação de estado”. Por que isso é inadequado?**
A. Porque não é tecnicamente possível  
B. Porque perde rastreabilidade; melhor registrar, permitir retomada e manter histórico  
**Resposta correta: B**  
**Por que:** Resiliência em hiperautomação significa saber onde o processo parou e ser capaz de reiniciá-lo ou corrigi-lo sem perder o trabalho já feito.

**40. AnyAirlines quer que processos de aprovação possam evoluir com o tempo, mantendo histórico de versões. Qual combinação está mais alinhada?**
A. Apex hard‑coded  
B. Flows e Orchestrations versionados, com migração cuidadosa entre versões  
**Resposta correta: B**  
**Por que:** O versionamento nativo permite que instâncias antigas terminem na versão original enquanto novos processos usam a lógica atualizada.

**41. Uma alternativa sugere construir toda a lógica de processo em Apex e deixar Orchestration apenas como “fachada vazia”. Por que isso não reflete o foco do módulo?**
A. Porque Apex não é suportado  
B. Porque Flow Orchestrator é justamente a camada para coordenar processo, e Apex deve ser usado apenas quando necessário  
**Resposta correta: B**  
**Por que:** A plataforma favorece o desenvolvimento "low-code" para facilitar a agilidade e a manutenção por administradores e desenvolvedores.

**42. NTO quer usar Orchestration, mas também precisa chamar APIs MuleSoft em certos pontos do processo. Qual é a arquitetura recomendada?**
A. Orchestration chama Flows, que usam External Services/HTTP Callout para consumir APIs  
**Resposta correta: A**  
**Por que:** Esta arquitetura une o poder de orquestração do Salesforce com a conectividade de dados da MuleSoft.

**43. Uma questão apresenta um processo que já está bem atendido por um Record‑Triggered Flow e algumas automações simples. Uma opção sugere migrar tudo para Orchestration “só porque é novo”. Como avaliar?**
A. Sempre migrar para a tecnologia mais nova  
B. Reconhecer como pegadinha; só usar Orchestration quando houver benefício claro (longa duração, múltiplos times, etc.)  
**Resposta correta: B**  
**Por que:** "Se não está quebrado, não conserte". A migração só se justifica se houver necessidade de recursos específicos da orquestração.

**44. AnyAirlines quer que, se a verificação de estoque via API falhar, o processo seja pausada e redirecionada para uma fila de análise. Como isso pode ser modelado?**
A. Sem registrar nada  
B. Background Step chamando Flow que trata falhas e encaminha Work Item para fila apropriada  
**Resposta correta: B**  
**Por que:** O tratamento de exceções permite que o processo continue (mesmo que por um caminho alternativo) em vez de simplesmente falhar.

**45. Uma alternativa final afirma: “Flow Orchestration substitui completamente a necessidade de RPA, Composer e APIs em qualquer cenário de hiperautomação.” Qual resposta é mais alinhada?**
A. Concordar; Orchestration é suficiente para tudo  
B. Discordar; Orchestration coordena processos, mas continua dependendo de Flows, APIs, RPA e Composer para executar tarefas especializadas  
**Resposta correta: B**  
**Por que:** Nenhuma ferramenta faz tudo. A hiperautomação de sucesso é uma composição de diferentes tecnologias trabalhando em harmonia.
