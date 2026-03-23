# 📚 Módulo 4

# **⚡ Módulo 4: Salesforce Flow (Conteúdo Extendido)**

**Peso no Exame:** 13%

**Foco:** Automação declarativa no CRM, integração via External Services, Einstein Bots e Testes de Fluxo.

O **Salesforce Flow** é o motor de automação central dentro da Salesforce. Para o exame de Hiperautomação, o foco não é apenas "criar um registro", mas sim como o Flow atua como a **interface humana** e o **gatilho de eventos** que acionam o MuleSoft RPA e o Composer.

Na certificação, Flow aparece sempre que o cenário fala em:

- **telas para agentes ou funcionários** coletarem dados;
- regras de negócio **declarativas** dentro do CRM;
- chamadas para APIs MuleSoft sem código (External Services / HTTP Callout);
- coordenação com RPA e outros sistemas a partir de eventos de negócio (ex.: oportunidade ganha, caso criado, contrato aprovado).

As questões usam Flow para testar se você sabe separar o que é responsabilidade da **camada de experiência (UI/CRM)** e o que deve ficar em APIs ou RPA.

---

## **1. Tipos de Fluxo e Casos de Uso na Hiperautomação**

Você deve saber qual tipo de fluxo escolher com base no cenário:

* **Screen Flow (Fluxo de Tela):** É a interface de Hiperautomação para o usuário.  
  * *Uso:* Coletar dados de um sinistro ou pedido que serão enviados para uma API da MuleSoft.  
* **Record-Triggered Flow (Fluxo acionado por registro):** Executa automaticamente quando um registro é criado ou atualizado.  
  * *Uso:* Quando um "Contrato" é marcado como "Assinado", o Flow dispara uma chamada para o MuleSoft RPA iniciar o provisionamento no sistema legado.  
* **Autolaunched Flow:** Não tem interface e não depende de gatilhos de registro.  
  * *Uso:* Invocado via Apex, APIs externas ou pelo **Flow Orchestrator**.

---

## **2. Integração: External Services e HTTP Callout**

Este é o ponto mais importante para a certificação MuleSoft. O Flow precisa "falar" com o mundo exterior sem código (Low-Code).

### **External Services**

O Salesforce Flow consome especificações de API (como o **OpenAPI/Swagger** exportado do MuleSoft Anypoint Exchange).

* **Como funciona:** Você importa a especificação da API no Salesforce. Isso transforma os métodos da API (GET, POST) em "Ações" que podem ser arrastadas para dentro do Flow Builder.  
* **Vantagem:** O desenvolvedor não precisa escrever código Apex para fazer uma chamada callout.

### **HTTP Callout (Beta/GA)**

Permite configurar integrações diretamente no Flow Builder informando a URL e o método, sem precisar de um arquivo de especificação prévio.

---

## **3. Einstein Bots e Autendimento**

Na hiperautomação, o Einstein Bot é frequentemente a **camada de entrada**.

* **Gatilho de Ação:** O Bot coleta informações do cliente (ex: "Qual o seu número de pedido?") e invoca um **Flow**.  
* **Integração:** O Flow, por sua vez, chama uma API da MuleSoft para buscar o status do pedido no banco de dados e devolve a resposta para o Bot exibir ao cliente.

---

## **4. Teste de Fluxo (Flow Testing)**

A Salesforce introduziu ferramentas robustas de teste que são cobradas no exame:

* **Flow Test (Declarativo):** Permite criar testes para *Record-Triggered Flows*. Você define um cenário (ex: "Oportunidade fechada com valor negativo") e o que espera que aconteça.  
* **Debug Tool:** Permite rodar o fluxo como um usuário específico e ver o "caminho" que a lógica percorreu, além de inspecionar os valores das variáveis em cada etapa.

---

## **5. Princípios de Hiperautomação no Flow**

Para ser eficiente em um projeto de hiperautomação, o Flow deve seguir estas boas práticas:

* **Bulkification (Processamento em Lote):** O Flow deve ser capaz de lidar com múltiplos registros simultaneamente para evitar atingir os limites da plataforma Salesforce (Governor Limits).  
* **Error Handling (Fault Paths):** Se uma chamada para uma API da MuleSoft falhar dentro do Flow, você deve usar um **Fault Path** (linha vermelha) para decidir o que fazer (ex: criar um registro de erro ou notificar o administrador).  
* **Subflows:** Reutilização! Se você tem uma lógica complexa de cálculo de impostos, coloque em um subflow e chame-o de vários outros fluxos de automação.

---

## **6. Cenário de Exame: "Orquestrando a Entrada"**

**Cenário:** Uma empresa quer que, ao fechar uma venda, o sistema legado de logística (sem API) seja atualizado e o cliente receba um SMS.

1. **Gatilho:** *Record-Triggered Flow* no Salesforce (Opportunity Stage = Closed Won).  
2. **Ação 1:** O Flow invoca um processo de **MuleSoft RPA** (via External Services) para entrar no sistema de logística e postar os dados.  
3. **Ação 2:** Após o sucesso, o Flow chama uma API de mensageria para enviar o SMS.

---

## **💡 Termos Técnicos para Memorizar:**

* **Apex Action:** Usado quando a lógica é complexa demais para o Flow e exige código.  
* **Flow Metadata:** A estrutura do fluxo que pode ser migrada entre ambientes (Sandbox -> Produção).  
* **Platform Events:** Mensagens enviadas para o "barramento" do Salesforce que podem ser ouvidas pelo MuleSoft para iniciar integrações assíncronas.

---

## **6. Checklist do exame para este módulo**

* Dado um cenário, escolha corretamente entre Screen Flow, Record-Triggered Flow e Autolaunched Flow, justificando com o tipo de evento, necessidade de interface e origem dos dados.
* Relacione quando usar Einstein Bots como camada inicial de atendimento e quando direcionar diretamente para um fluxo de backoffice ou agente humano.
* Lembre os passos para criar testes declarativos de Record-Triggered Flows, incluindo configuração de dados de entrada, condições esperadas e validação de resultados.
* Em cada integração descrita, decida entre External Services (quando já existe especificação de API) e HTTP Callout (quando você apenas conhece o endpoint), considerando governança e facilidade de manutenção.
* Avalie se o fluxo está preparado para hiperautomação: caminhos de erro bem definidos, uso de subflows para lógica reutilizável e preocupação com bulkification para não atingir limites da plataforma.

---

## **7. Como este módulo ajuda você na certificação**

- Ao estudar os tipos de Flow e os exemplos deste módulo, tente sempre responder: **“Este cenário é mais sobre interface humana ou sobre integração pesada?”**. Se for interface e regras de CRM, a tendência da prova é apontar para Flow.  
- Em questões que misturam Flow e MuleSoft, identifique qual parte pertence ao Flow (tela, gatilho, decisão simples) e qual parte deve ser delegada a uma API ou a um processo de RPA. Alternativas que colocam toda a lógica no Flow costumam ser pegadinhas.  
- Use os cenários de exemplo como modelos: recrie mentalmente versões parecidas (troque “estoque” por “sinistro”, “cliente” por “aluno”) e veja se você ainda escolheria o mesmo tipo de Flow e o mesmo ponto de integração.  
- Antes da prova, revise os termos Screen Flow, Record-Triggered Flow, Autolaunched Flow, External Services, HTTP Callout, Fault Path e Subflow. Se você consegue explicar cada um em 1–2 frases e dar um exemplo, está pronto para acertar a maioria das questões deste módulo.
