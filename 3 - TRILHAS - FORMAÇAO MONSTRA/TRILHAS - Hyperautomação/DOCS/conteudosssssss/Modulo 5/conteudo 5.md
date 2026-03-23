# 📚 Módulo 5

# **🌐 Módulo 5: Anypoint Platform & APIs**

**Peso no Exame:** 15%

**Foco:** Ciclo de Vida de APIs, API-Led Connectivity, Especificações (RAML/OAS) e Componentes da Plataforma.

Se o Composer é a ponte e o RPA é o braço, a **Anypoint Platform** é o sistema nervoso central. Para a hiperautomação, o foco aqui é como as APIs servem de base para que todas as outras ferramentas (Flow, RPA, Composer) funcionem de forma escalável e segura.

Na prova, este módulo é o que mais diferencia alguém que **pensa em integrações pontuais** de alguém que **pensa em arquitetura reutilizável**. Quase sempre que o enunciado mencionar:

- múltiplos consumidores (apps, bots, flows, parceiros),
- necessidade de governança e segurança,
- evitar duplicação de integrações,
- ou “estratégia de longo prazo”,

a alternativa correta estará relacionada a desenhar ou reutilizar APIs bem modeladas na Anypoint Platform, e não a criar integrações isoladas em cada ferramenta.

---

## **1. API-Led Connectivity (O Coração da Estratégia)**

A Salesforce enfatiza fortemente o modelo de três camadas para garantir que a hiperautomação não se torne uma "teia de aranha" de integrações ponto a ponto:

* **System APIs:** Desbloqueiam dados de sistemas centrais (SAP, SQL, Mainframe). Elas isolam a complexidade do sistema de destino.  
* **Process APIs:** Onde reside a lógica de negócio. Elas combinam dados de múltiplas System APIs (ex: "Criar Pedido" que consulta Cliente no CRM e Estoque no ERP).  
* **Experience APIs:** Formatam os dados para o consumo final. É aqui que você cria o endpoint específico para ser consumido pelo **Salesforce Flow** ou por um aplicativo móvel.

---

## **2. Ciclo de Vida da API (API Lifecycle)**

Você deve conhecer as fases que ocorrem dentro do **Anypoint Platform**:

1. **Design (API Designer):** Cria-se o contrato da API usando **RAML** (RESTful API Modeling Language) ou **OAS** (OpenAPI Specification).  
2. **Simulate (Mocking Service):** Permite que os desenvolvedores de Flow ou RPA comecem a trabalhar usando dados fictícios antes mesmo da API ser construída.  
3. **Feedback:** Colaboração no contrato.  
4. **Implement (Anypoint Studio):** Onde o desenvolvedor Mule constrói a lógica real usando fluxos e a linguagem **DataWeave**.  
5. **Deploy (Runtime Manager):** Publicação da API (na nuvem CloudHub ou on-premises).  
6. **Manage (API Manager):** Aplicação de políticas de segurança (OAuth, Rate Limiting).

---

## **3. Componentes Chave da Plataforma**

* **Anypoint Exchange:** O "App Store" da sua empresa. Lá você publica as especificações para que o **Salesforce Flow** possa encontrá-las via *External Services*.  
* **Anypoint Studio:** IDE baseada em Eclipse para o desenvolvimento pesado de fluxos Mule.  
* **Runtime Manager:** Onde você gerencia o status das aplicações, escala trabalhadores (workers) e configura vCores.  
* **API Manager:** Focado em governança. Se uma automação está sobrecarregando um sistema, é aqui que você limita o tráfego (Throttling).

---

## **4. Blocos de Construção de Hiperautomação (Mule Apps)**

Para o exame, entenda como um aplicativo Mule (Mule App) se comporta em um cenário de automação:

* **Conectores:** Diferente do Composer, o Anypoint tem centenas de conectores técnicos (protocolos como AS2, SFTP, HL7).  
* **DataWeave 2.0:** É a linguagem de transformação. Ela é capaz de converter um XML complexo do sistema legado em um JSON simples que o Salesforce Flow consome facilmente.  
* **Deployment Options:**  
  * **CloudHub:** Totalmente gerenciado pela MuleSoft (SaaS).  
  * **On-Premises:** Quando o bot de RPA precisa acessar algo que está atrás de um firewall muito rígido.  
  * **Runtime Fabric (RTF):** Deploy em containers (Kubernetes).

---

## **5. Cenário de Exame: "Reutilização em Escala"**

**Pergunta típica:** Uma empresa já possui uma API que busca dados de clientes no SAP. Eles agora precisam usar esses dados em um novo projeto de RPA e em um fluxo de tela no Salesforce. Qual a melhor abordagem?

* **Resposta correta:** Publicar a especificação da API no **Anypoint Exchange**. O RPA usará o conector HTTP para chamar a API e o Salesforce Flow usará **External Services** para consumir a mesma API. **Nunca** crie integrações duplicadas para o mesmo dado.

---

## **💡 Termos Técnicos para Memorizar:**

* **RAML:** Linguagem padrão para desenhar APIs no ecossistema MuleSoft.  
* **vCore:** Unidade de medida de capacidade computacional no CloudHub.  
* **Shared Load Balancer (SLB):** O balanceador de carga padrão que fornece a URL da sua API.  
* **Políticas de API:** Regras de segurança (ex: JWT Validation) aplicadas sem mudar o código da API.

---

## **6. Checklist do exame para este módulo**

* Em qualquer cenário, identifique quais APIs deveriam estar nas camadas System, Process e Experience, garantindo máxima reutilização e isolamento de complexidade.
* Descreva o ciclo de vida de uma API dentro da Anypoint Platform, desde o design com RAML/OAS até o deploy e a aplicação de políticas no API Manager.
* Relacione quando usar cada opção de deploy (CloudHub, On-Premises, Runtime Fabric) com base em requisitos de segurança, conectividade com legados e governança.
* Demonstre como APIs e especificações são compartilhadas com outras ferramentas de hiperautomação via Anypoint Exchange e External Services no Salesforce.
* Ao ler um cenário, pense em como você mediria sucesso e reutilização dessa API: número de consumidores, redução de integrações ponto a ponto e facilidade de mudança.

---

## **7. Estratégia de estudo para a certificação neste módulo**

- Releia os exemplos de API-led sempre tentando classificar rapidamente cada API em **System, Process ou Experience**. Esse reflexo é muito cobrado nas perguntas de múltipla escolha.  
- Ao fazer as provas, para cada questão de arquitetura, responda mentalmente: *“Esta opção aumenta ou reduz reutilização?”*; opções que recriam integrações do zero quase sempre são as erradas.  
- Use o conteúdo deste módulo para justificar as respostas das questões que falam de Mocking Service, Exchange, políticas de API Manager e tipos de deploy: localize no texto exatamente onde essa decisão é sustentada.  
- Antes da prova, revise os termos RAML, OAS, API Designer, Exchange, Runtime Manager, API Manager, vCore e Rate Limiting. Entender como essas peças se conectam torna muito mais fácil eliminar alternativas que ignoram a plataforma e sugerem soluções manuais ou não governadas.
