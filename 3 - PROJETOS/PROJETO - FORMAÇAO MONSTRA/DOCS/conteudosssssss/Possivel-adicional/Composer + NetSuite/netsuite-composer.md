# Revisão NetSuite com MuleSoft Composer – Focado no Mule-Dev-202

> Objetivo: revisar os pontos de NetSuite que mais caem no exame Mule-Dev-202 quando usados com MuleSoft Composer.

---

## Módulo 1 – Conceito e Cenários de Prova

### 1. Papel do NetSuite nos cenários

- NetSuite aparece como ERP/financeiro principal em integrações tipo "Salesforce ↔ NetSuite".
- Casos clássicos de prova:
  - Sync de **Accounts (Salesforce)** com **Customers (NetSuite)**.
  - Criação de **Sales Orders** em NetSuite quando uma **Opportunity** vira Closed Won.
  - Sincronização de dados financeiros em lote (Scheduler).

### 2. Decisão de ferramenta

- Quando o enunciado fala em "sincronizar Salesforce com NetSuite" sem muita complexidade técnica e com foco em citizen developers, normalmente a resposta é **MuleSoft Composer** usando o **NetSuite connector**.
- Quando o cenário envolve múltiplos consumidores, governança pesada ou alto volume, o caminho geralmente é: APIs Mule (System/Process/Experience) + eventualmente Composer/Flows consumindo essas APIs.
- Se o processo em NetSuite só acontece pela UI (sem API viável) e é muito repetitivo, o padrão é **Composer orquestrando** e **RPA executando a UI**.

---

## Módulo 2 – Conexão Composer–NetSuite (Pré-requisitos e Autenticação)

### 1. Pré-requisitos em NetSuite

- Habilitar **Token-Based Authentication (TBA)** em NetSuite.
- Usar um **usuário regular (WSU)**, nunca concurrent user (cWSU), para a integração.
- Garantir que o role usado na integração **não exija 2FA** (two-factor) para essa conta.

### 2. Versão suportada

- Composer suporta NetSuite **2020.2 ou superior**; versões mais antigas não são suportadas.

### 3. Parâmetros de conexão em Composer

Na hora de criar uma conexão NetSuite no Composer, você precisa de:

- Connection Display Name – nome amigável para reconhecer a conexão.
- Account – ID da conta NetSuite (account ID).
- Consumer Key / Consumer Secret (da Integration em NetSuite).
- Token ID / Token Secret (do Access Token para User + Role).

### 4. Campo de ligação em Salesforce

- No objeto **Account** do Salesforce, é recomendável (e em prática, necessário) ter um campo customizado chamado algo como **NetSuite ID** para armazenar o `internalId` do Customer em NetSuite.
- Esse campo é a chave para manter o vínculo entre Account e Customer em execuções futuras do flow.

### 5. Escopo de conexões

- Conexões em Composer **não são compartilhadas entre usuários**.
- Cada usuário do Composer precisa criar sua própria conexão NetSuite, mesmo que usem o mesmo ambiente/credenciais.

---

## Módulo 3 – Usuário de Integração, Roles e Permissões

### 1. Usuário de integração em NetSuite

- Recomenda-se criar um usuário de integração dedicado (por exemplo, integration@empresa.com).
- Esse usuário é vinculado a um **role específico de integração**.

### 2. Bundle MuleSoft e role recomendado

- Instalar o bundle da MuleSoft para NetSuite, que inclui um **role pronto** com as permissões mínimas necessárias para o conector Composer.
- Em questões de prova, a alternativa correta costuma ser "instalar o bundle MuleSoft e usar o role fornecido" em vez de criar um role manual super permissivo.

### 3. Integração + Access Tokens

Passos típicos no NetSuite:

1. Criar uma Integration em Setup > Integration > Manage Integrations (marcar Token-Based Authentication).
2. Atribuir o role adequado ao usuário de integração.
3. Criar Access Token para combinação (Integration, User, Role).
4. Copiar Token ID e Token Secret e usar na conexão em Composer.

---

## Módulo 4 – Modelagem de Dados: Account ↔ Customer, Endereços e IDs

### 1. Campo de identificação cruzada

- **Salesforce Account** ↔ **NetSuite Customer**:
  - Campo em Salesforce: NetSuite ID (custom) para guardar `internalId` do Customer.
  - Campo em NetSuite: internalId do registro tipo CUSTOMER.

### 2. Endereços (Address)

- Em Salesforce, o endereço em Account é um campo **composto** (Street, City, State, Postal Code, Country).
- Em NetSuite, o Customer armazena endereços em uma **addressBookList** (lista de itens de endereço, cada um com Street, City, State, Zip, Country, etc.).

### 3. Padrão de mapeamento (Trailhead/exame)

- Em um flow Composer típico de sync Account → Customer:
  - O trigger traz o Account.
  - Uma action de NetSuite (Get Records) busca Customers pelo NetSuite ID ou pelo Company Name.
  - Em caso de criação, você:
    - Desmembra o endereço composto em campos simples.
    - Cria um item de addressBookList no Customer com esses campos.
- Quando o enunciado diz que "endereço de Account é composto e Customer usa lista de endereços", a alternativa correta envolve tratar Address como uma **lista** no lado NetSuite (possivelmente com For Each, se houver múltiplos endereços).

---

## Módulo 5 – Ações do NetSuite Connector e Limitações

### 1. Ações principais

O NetSuite connector no Composer oferece, entre outras, as seguintes ações:

- **Create Record** – cria um registro (ex.: CUSTOMER, SALES_ORDER).
- **Update Record** – atualiza um registro existente.
- **Upsert Record** – cria ou atualiza dependendo se o registro já existe.
- **Delete Record** – remove um registro.
- **Get Records** – obtém uma lista de até 500 registros com base em critérios.

### 2. Limitações importantes (Get Records)

- A ação **Get Records** tem limitações de filtro:
  - Nem todos os operadores/campos são suportados no critério.
  - Em geral, você precisa usar filtros simples e suportados (igual, maior que, etc.).
- Em questões de prova, se aparecer uma alternativa com filtro muito complexo no Get Records, desconfie – a resposta correta costuma usar um filtro mais simples ou outro padrão de busca.

---

## Módulo 6 – Flows Típicos Composer + NetSuite

### 1. Sync Account → Customer (Trailhead pattern)

Fluxo padrão:

1. **Trigger**: On new or updated Account (Salesforce).
2. **Get Records (NetSuite Customer)**: buscar Customer pelo NetSuite ID ou pelo Company Name.
3. **If/Else**:
   - Se não encontrou Customer:
     - Create Record (Customer) em NetSuite com dados do Account.
     - Update Record (Account) em Salesforce para salvar o internalId em NetSuite ID.
   - Se encontrou Customer:
     - Update Record (Customer) com dados atualizados do Account.

### 2. Quote-to-Cash (Opportunity → Sales Order)

Fluxo típico:

1. **Trigger**: Opportunity mudou para Closed Won em Salesforce.
2. **Get Records**: buscar Customer vinculado (via Account e NetSuite ID).
3. **Create Record (Sales Order)** em NetSuite com base nos produtos/valores da Opportunity.
4. **Notificação**: enviar mensagem para finance/billing (Slack, email, etc.).

### 3. Sync em lote com Scheduler

Fluxo simples:

1. **Trigger**: Scheduler diário.
2. **Get Records**: buscar um conjunto de Accounts ou registros NetSuite.
3. **For Each**: para cada registro, criar/atualizar o correspondente no outro sistema.

---

## Módulo 7 – Boas Práticas, Limitações e Decisões de Arquitetura

### 1. Boas práticas Composer + NetSuite

- Desenvolver e testar em **sandbox** (Salesforce e, se disponível, NetSuite sandbox) antes de apontar para produção.
- Configurar notificações para erros na criação/atualização de Customers ou Sales Orders.
- Monitorar volume: se o número de registros crescer muito, avaliar migrar a integração para Mule/Anypoint.

### 2. Decidir entre Composer, RPA e APIs Mule

- **Composer + NetSuite connector**:
  - Cenário principal quando NetSuite expõe APIs e você está integrando Salesforce com NetSuite de forma relativamente direta.
- **Composer + RPA**:
  - Útil quando parte do processo em NetSuite é puramente de UI (tela) e não tem API adequada, mas a orquestração começa em Salesforce/Composer.
- **APIs Mule (System/Process/Experience)**:
  - Quando múltiplos sistemas além do Salesforce precisam consumir dados de NetSuite com governança, segurança e reuso.
  - Composer/Flow podem ser consumidores dessas APIs, em vez de falar diretamente com NetSuite.

---

## Como usar este arquivo na revisão

- Leia cada módulo em 5–10 minutos focando em:
  - Pré-requisitos de conexão NetSuite.
  - Padrões de sync Account ↔ Customer e Opportunity ↔ Sales Order.
  - Limitações de Get Records e boas práticas de campo NetSuite ID.
- Depois, faça questões do simulado que mencionem NetSuite e tente classificar:
  - Qual ação do conector está sendo usada?
  - Como está sendo mapeado o endereço?
  - A decisão de ferramenta faz sentido (Composer, RPA ou APIs Mule)?
