# 📚 Módulo 8

# **🎼 Módulo 8: Salesforce Flow Orchestration (Conteúdo Extendido)**

**Peso no Exame: 8%**

**Foco: Coordenação de Processos Complexos, Etapas (Steps), Estágios (Stages) e Atribuição de Tarefas.**

**O Flow Orchestration é o nível mais alto da hiperautomação. Enquanto um Flow comum resolve uma tarefa rápida, o Orchestrator resolve um processo de negócio inteiro que pode durar dias ou semanas e envolver diferentes departamentos.**

Na certificação, este módulo aparece quando o cenário fala de:

- aprovações em múltiplos níveis (gestor, compliance, compras, jurídico);
- processos que ficam **em espera** aguardando ação humana;
- necessidade de rastrear quem fez o quê, e quando;
- coordenação entre vários Flows e chamadas a APIs MuleSoft em momentos diferentes do processo.

As perguntas querem verificar se você sabe quando um simples Screen Flow já resolve e quando é necessário subir o nível para uma Orchestration multiestágio.

---

## **1. A Hierarquia da Orquestração**

**Para a prova, você deve entender a estrutura de uma orquestração:**

* **Orchestration (A Orquestra): O processo completo (ex: Admissão de Funcionário).**  
* **Stages (Estágios): Agrupamentos lógicos de etapas. Um estágio só termina quando todas as suas etapas obrigatórias são concluídas. (ex: Estágio de Documentação, Estágio de TI).**  
* **Steps (Etapas): As unidades de trabalho dentro de um estágio.**  
  * **Background Steps: Executam um fluxo sem intervenção humana (ex: Atualizar banco de dados via API MuleSoft).**  
  * **Interactive Steps: Exigem que um usuário faça algo em uma tela (ex: Gerente aprovar um desconto).**

---

## **2. Condições de Entrada e Saída (Entry & Exit)**

**A lógica do Orchestrator é baseada em "quando começar" e "quando terminar":**

* **Entry Conditions: Define quando uma etapa ou estágio deve ser iniciado. Você pode usar fórmulas complexas para garantir que uma etapa de "Configurar Notebook" só comece se a etapa "Aprovação do Gestor" tiver sido concluída com sucesso.**  
* **Exit Conditions: Define quando uma etapa é considerada finalizada. Em etapas interativas, geralmente é quando o usuário termina o Flow de tela. Em etapas de background, é quando o fluxo autolançado termina sua execução.**

---

## **3. Atribuição e Notificações (Work Items)**

**Diferente dos fluxos comuns, o Orchestrator gerencia a Work Queue (Fila de Trabalho):**

* **Atribuição: Você pode atribuir uma etapa interativa a um Usuário, um Grupo (Group) ou uma Fila (Queue).**  
* **Work Guide: É o componente visual que aparece no registro do Salesforce para o usuário atribuído, mostrando exatamente qual Flow ele precisa preencher para que o processo avance.**  
* **Contexto: O Orchestrator mantém o estado do processo. Ele sabe quem aprovou o quê e quando, criando uma trilha de auditoria completa da automação.**

---

## **4. Orquestração Paralela vs. Sequencial**

**Um ponto comum em exames é saber como o Orchestrator lida com o tempo:**

* **Sequencial: A Etapa B só começa após a Etapa A.**  
* **Paralela: As Etapas A e B começam ao mesmo tempo dentro do mesmo Estágio. O Estágio só avançará quando ambas terminarem.**  
  * ***Exemplo:*** **Enquanto o RH prepara o contrato (Humano), o sistema de TI já cria o e-mail automaticamente (Background).**

---

## **5. Depuração e Monitoramento (Orchestration Runs)**

* **Orchestration Runs: No menu de configuração, você pode ver todas as execuções em curso, quais estão pausadas aguardando alguém e quais falharam.**  
* **Debug: Assim como no Flow Builder, você pode depurar uma orquestração para validar se as variáveis de um estágio estão passando corretamente para o próximo.**

---

## **6. Cenário de Exame: "O Processo de Compras"**

**Cenário: Uma empresa tem um processo onde: 1. O funcionário pede um item. 2. O gerente aprova. 3. O sistema de estoque (via MuleSoft) verifica a disponibilidade. 4. Se não houver estoque, o setor de compras deve aprovar uma aquisição externa.**

* **Como configurar:**  
  * **Stage 1 (Pedido): Step Interativo para o funcionário.**  
  * **Stage 2 (Aprovação): Step Interativo para o gerente.**  
  * **Stage 3 (Estoque): Step de Background que chama uma API MuleSoft.**  
  * **Decisão: Se a API MuleSoft retornar "Sem Estoque", o Orchestrator ativa o Stage 4 (Compras) atribuído à fila de Compras.**

---

## **💡 Glossário para Memorizar:**

* **Interactive Step: Passo que requer interação humana via Screen Flow.**  
* **Background Step: Passo automatizado via Autolaunched Flow.**  
* **Orchestration Work Item: O registro que representa a tarefa pendente para um usuário.**

---

## **6. Checklist do exame para este módulo**

* Em qualquer cenário de trabalho em equipe, identifique quais etapas podem ser automatizadas por Flows isolados e quais precisam ser coordenadas por uma Orchestration multiestágio.
* Defina claramente entry e exit conditions para cada estágio, garantindo que o processo não avance sem as aprovações e validações necessárias descritas no enunciado.
* Escolha corretamente se uma etapa interativa deve ser atribuída a um usuário específico, grupo ou fila, de acordo com a forma como o cenário descreve responsabilidades organizacionais.
* Relacione problemas descritos em cenários (processos travados, etapas pendentes, usuários sem tarefas) com as ferramentas de debug, monitoramento e gerenciamento de Orchestration Runs.
* Descreva como você versionaria, implantaria e ajustaria uma orquestração já em produção, mantendo rastreabilidade e minimizando impacto sobre execuções em andamento.

---

## **7. Como estudar este módulo com foco na prova**

- Ao ler cenários de múltiplos passos e aprovações, tente desenhar mentalmente a orquestração em estágios e steps (quem faz o quê, em qual ordem, e com qual tipo de Step).  
- Em questões que falam de processos parados ou usuários sem tarefas, pense em **Work Items**, atribuição e Orchestration Runs como pontos chave da solução.  
- Revise os conceitos de Interactive Step, Background Step, Stage, Entry Condition, Exit Condition e Work Guide, garantindo que você consegue dar um exemplo simples de cada um.  
- Use o cenário de compras deste módulo como base e crie variantes na sua cabeça (por exemplo, onboarding de cliente, abertura de sinistro, admissão de funcionário), sempre tentando decidir quais partes seriam orquestradas via Flow Orchestration e quais apenas com Flows normais e APIs.
