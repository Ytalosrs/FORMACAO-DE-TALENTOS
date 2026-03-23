# 📚 Módulo 7

# **📦 Módulo 7: Anypoint Exchange**

**Peso no Exame:** 8%

**Foco:** Catálogo de Ativos, Compartilhamento, Reutilização e Mocking Service.

O **Anypoint Exchange** é o "mercado central" de uma estratégia de hiperautomação. Sem ele, a reutilização se torna impossível e cada desenvolvedor acaba criando integrações duplicadas. Para a prova, o foco é como publicar ativos e como usá-los para acelerar os testes.

Os enunciados da certificação usam Exchange principalmente para verificar se você:

- procura **primeiro** por ativos já existentes (APIs, conectores, processos);
- entende que a documentação e os exemplos do Exchange substituem “mandar mensagem para o time de integração”;
- sabe usar **Mocking Service** para permitir desenvolvimento em paralelo;
- enxerga o Exchange como peça central da estratégia de C4E e reutilização.

---

## **1. O Papel do Exchange na Hiperautomação**

O Exchange não armazena apenas APIs. Ele é um repositório para diversos tipos de ativos que as ferramentas de automação consomem:

* **API Specifications:** (RAML/OAS) que o Salesforce Flow consome via *External Services*.  
* **Connectors:** Ativos prontos para serem usados no Anypoint Studio.  
* **Templates e Exemplos:** Projetos pré-configurados para casos de uso comuns (ex: Sincronização de Contas entre Salesforce e SAP).  
* **API Fragments:** Pedaços reutilizáveis de código RAML (como um modelo padrão de "Endereço") para manter a consistência.  
* **RPA Assets:** Processos de RPA podem ser publicados aqui para que outras áreas da empresa saibam que aquela automação já existe.

---

## **2. Publicação e Descoberta**

* **Publicação:** Você pode publicar ativos de forma **Privada** (apenas para sua organização) ou acessar o Exchange **Público** (conectores da MuleSoft e de parceiros como SAP, Oracle, AWS).  
* **Documentação Automática:** Ao publicar uma especificação, o Exchange gera automaticamente um console interativo onde outros desenvolvedores podem ler como a API funciona sem precisar baixar o código.

---

## **3. Mocking Service (O Acelerador de Testes)**

Este é um dos recursos mais cobrados em provas de certificação:

* **O que é:** O Exchange simula uma API real baseada no seu contrato (RAML/OAS). Ele gera uma URL temporária que retorna dados de exemplo.  
* **Utilidade na Hiperautomação:** Imagine que a equipe de integração ainda não terminou de construir a API de crédito. A equipe de **Salesforce Flow** pode usar a URL do **Mocking Service** no *External Services* para testar a lógica da tela de vendas hoje mesmo.  
* **Vantagem:** Permite o desenvolvimento paralelo entre diferentes equipes.

---

## **4. Portais de API (API Portals)**

O Exchange permite criar um portal público ou privado para desenvolvedores externos.

* Lá, você pode gerenciar quem tem acesso à sua API e fornecer um botão de "Request Access", onde o usuário solicita um **Client ID** e **Client Secret** para começar a consumir a automação.

---

## **5. Cenário de Exame: "O Dilema do Desenvolvedor"**

**Cenário:** Um desenvolvedor de Salesforce Flow precisa conectar o fluxo a um sistema de RH que já possui uma API MuleSoft pronta, mas ele não sabe quais são os parâmetros de entrada. Qual o primeiro passo recomendado pela MuleSoft?

* **Resposta correta:** Consultar o **Anypoint Exchange**, localizar a API de RH e revisar a documentação gerada automaticamente e os exemplos de requisição no console interativo.

---

## **💡 Glossário para Memorizar:**

* **Asset:** Qualquer recurso publicado no Exchange (API, Conector, Fragmento).  
* **API Notebook:** Ferramenta dentro do Exchange para criar tutoriais interativos que executam chamadas reais de API.  
* **Dependency:** Quando uma API usa um fragmento ou conector do Exchange, isso é listado como uma dependência para garantir que o projeto não quebre se o ativo original for deletado.

---

## **6. Checklist do exame para este módulo**

* Em qualquer cenário, identifique quais ativos deveriam estar publicados no Exchange (APIs, conectores, templates, fragmentos, processos de RPA) para maximizar a reutilização entre times.
* Demonstre como publicar ativos em Exchanges privados da organização e quando é adequado consumir ativos do Exchange público (conectores oficiais e de parceiros).
* Explique como o Mocking Service acelera o desenvolvimento paralelo: equipes de front-end (Flow, Composer) consomem mocks enquanto as APIs reais ainda estão sendo implementadas.
* Use sempre o Exchange como primeira fonte de verdade em cenários de prova: antes de criar integração do zero, procure especificações, exemplos e dependências existentes.
* Relacione o uso de portais de API e o fluxo de "Request Access" com governança de clientes externos e controle de chaves (Client ID/Secret).

---

## **7. Como usar este módulo para aumentar suas chances na prova**

- Em qualquer questão que sugira “criar algo do zero”, pergunte-se se não faria mais sentido **reutilizar um asset existente no Exchange**. Muitas alternativas erradas ignoram essa possibilidade de propósito.  
- Pratique mentalmente o fluxo: *“Publicar especificação → testar com Mocking Service → consumir no Flow/Composer →, depois, substituir pela API real”*. Esse é exatamente o tipo de sequência que o exame gosta de descrever.  
- Antes da prova, revise os conceitos de Asset, API Specification, Fragment, Template, Mocking Service e API Portal, garantindo que você sabe dar um exemplo rápido de uso para cada um.  
- Nos simulados, se a pergunta envolver “outro time precisa entender como usar uma API”, a resposta mais alinhada normalmente passa por **consultar o Exchange** ou **criar um portal de API**, e não por mandar documentação manual em e‑mail ou planilha.
