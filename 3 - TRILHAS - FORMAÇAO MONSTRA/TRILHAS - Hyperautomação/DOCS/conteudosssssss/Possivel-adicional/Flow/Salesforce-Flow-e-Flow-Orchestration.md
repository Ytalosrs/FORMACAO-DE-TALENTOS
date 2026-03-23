# Salesforce Flow e Flow Orchestration

## 1. Visão geral

- **Flow** é a principal ferramenta de automação declarativa da Salesforce, usada para implementar regras de negócio e integrações em formato de fluxograma, com “clique, não código”.
- **Flow Orchestration** é uma camada acima: coordena vários flows, pessoas e etapas ao longo do tempo, para processos complexos e multi‑times.

---

## 2. Salesforce Flow (Flow “normal”)

### 2.1. O que é e para que serve

- Automatiza tarefas como criar/atualizar registros, enviar e‑mails, chamar APIs externas, aplicar regras e guiar usuários em telas.
- Substitui Workflow Rules e Process Builder na maior parte dos casos; hoje é a “ferramenta padrão” de automação declarativa.

### 2.2. Componentes básicos

- Elements (elementos): blocos do fluxo, como:
  - Get/Create/Update/Delete Records, Screen, Decision, Loop, Assignment, Action.
- Connectors: linhas que conectam elementos e definem o caminho de execução.
- Resources: variáveis, constantes, fórmulas, coleções, text templates, etc., usadas para guardar e manipular dados dentro do flow.

### 2.3. Tipos principais de Flow

- Screen Flow:
  - Tem telas (screens), exige interação do usuário (botão, página Lightning, etc.).
- Record‑Triggered Flow:
  - Dispara quando um registro é criado, atualizado ou apagado; roda em background, sem tela.
- Schedule‑Triggered Flow:
  - Dispara em horários ou frequências definidas, processando lotes de registros.
- Platform Event‑Triggered Flow:
  - Inicia quando uma Platform Event é publicada.
- Autolaunched Flow:
  - Não tem trigger interno; é chamado por Apex, botão, outro Flow, Orchestration etc.

### 2.4. O que dá para fazer com Flow

- Atualizar campos, criar registros filhos, enviar notificações, criar tarefas e eventos baseados em regras de negócio.
- Integrar com sistemas externos usando:
  - Actions padrão ou personalizadas.
  - External Services + Named Credentials para expor APIs como “ações” no flow.
- Criar assistentes guiados (wizards) com Screen Flows para vendas, suporte, onboarding, etc.

### 2.5. Boas práticas e limites

- Evitar DML dentro de Loop:
  - Coletar registros em coleções e fazer DML em lote para não estourar governor limits.
- Usar Debug para testar caminhos, entradas e saídas de cada elemento, em vez de testar direto em produção.
- Não hard‑codear IDs ou valores fixos sensíveis; usar Custom Metadata/Settings ou constantes.
- Dividir flows muito grandes em sub‑flows para facilitar manutenção e reutilização.

---

## 3. Flow Orchestration

### 3.1. Ideia geral

- Orchestration coordena processos complexos que passam por vários times, duram horas ou dias e misturam tarefas humanas e automáticas.
- Em vez de um flow gigantesco, você cria vários flows menores (Screen e Autolaunched) e a Orchestration “amarra” quem roda o quê, em que ordem e com quais condições de entrada/saída.
- Tipos principais:
  - Record‑triggered orchestration: começa quando um registro é criado/atualizado, com filtros de entrada.
  - Autolaunched orchestration: disparada por botão, Apex, flow, etc.

### 3.2. Partes mais importantes

#### Stages

- Stages agrupam passos relacionados em “fases” do processo, por exemplo: Análise, Aprovação, Implementação.
- Só um stage fica “em andamento” por vez; ele é considerado concluído quando:
  - Todas as steps obrigatórias completam, ou  
  - Um **evaluation flow** retorna verdadeiro (permitindo fechar o stage mesmo se nem tudo rodou).

#### Steps

- Steps ficam dentro dos stages e definem qual flow vai rodar e quem participa.

Tipos:

- Interactive Steps:
  - Referenciam um **Screen Flow** ativo.
  - Geram um **work item** para um usuário, grupo ou queue, visualizado na Work Guide.
- Background Steps:
  - Chamam um **Autolaunched Flow** para executar lógica automática, síncrona ou assíncrona.
  - Podem receber dados de entrada e devolver dados de saída para etapas seguintes.

#### Evaluation Flows

- São autolaunched flows usados como “porteiros” para decidir quando um stage ou step começa/termina, quando a lógica é muito complexa para condições simples.
- Exemplos:
  - Verificar se todos os approvals esperados existem antes de encerrar um stage.
  - Retornar um código (1, 2, 3) que será lido por um Decision na Orchestration para escolher o próximo caminho.

### 3.3. Ferramentas/recursos de Orchestration no dia a dia

- Entrada da Orchestration:
  - Define qual evento inicia o processo (criação/atualização de registro com certos critérios, ou chamada explícita).
- Assignment nas Interactive Steps:
  - Define se o trabalho vai para um usuário específico, grupo, queue ou é determinado dinamicamente por campos do registro (ex.: Owner, Região, Time).
- Execução paralela:
  - Dentro do mesmo stage, steps podem rodar em sequência ou em paralelo; você define dependências (“só começa quando tal step acabar” ou via evaluation flow).
- Work Guide:
  - Interface onde usuários veem seus work items, executam as tarefas e onde admins podem reatribuir itens se algo travar.
- Monitor/console:
  - Visão de todas as instâncias da Orchestration (em andamento, concluídas, canceladas), permitindo acompanhar o processo ponta‑a‑ponta.

---

## 4. Diferença prática: Flow x Flow Orchestration

### 4.1. Regra mental rápida

- Se o problema é “quando o registro X muda, faça Y e Z”, pense em **Flow normal**.
- Se o problema é “esse processo passa por vendas, jurídico, financeiro, suporte, com várias idas e vindas”, pense em **Flow Orchestration**, usando flows menores como peças.

### 4.2. Tabela comparativa

| Aspecto                         | Flow “normal”                                                    | Flow Orchestration                                                              |
|--------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Foco                           | Regras baseadas em dados (mudança de registros, agendamentos)    | Processo de negócio ponta‑a‑ponta, multi‑times e multi‑etapas                  |
| Duração típica                 | Segundos ou poucos minutos                                       | Horas, dias ou semanas                                                         |
| Tarefas humanas                | Screen Flow pontual                                              | Vários **work items** encadeados em Stages                                     |
| Estrutura                      | Elementos dentro de um único flow                               | Stages com múltiplos Steps (interactive/background + evaluation flows)         |
| Reuso                          | Flow pode ser sub‑flow de outros flows/orchestrations           | Orchestration orquestra vários flows reutilizáveis                             |
| Uso típico                     | Atualizar campos, criar registros, enviar e‑mails, validações    | Aprovações complexas, onboarding multi‑área, processos com muitos hand‑offs    |

---

## 5. Exemplos de uso

- **Flow**:
  - Atualizar campos em Account quando Opportunity vira Closed Won.
  - Criar tarefas automaticamente ao criar um Case.
  - Enviar e‑mails/notifications com base em mudanças de um único registro.

- **Flow Orchestration**:
  - Pedido de desconto especial que passa por Vendas → Jurídico → Financeiro → Diretoria, com aprovações sequenciais/paralelas.
  - Onboarding de cliente que envolve múltiplas equipes (implementação, treinamento, suporte) e etapas com prazos longos.
