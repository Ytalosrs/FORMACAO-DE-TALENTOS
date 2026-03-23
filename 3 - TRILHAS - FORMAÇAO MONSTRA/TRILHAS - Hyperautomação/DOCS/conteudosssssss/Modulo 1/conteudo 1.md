# 📚 Módulo 1

---

# **📚 Módulo 1: Melhores Práticas de Hiperautomação (Deep Dive)**

**Peso no Exame:** 20%

**Foco:** Estratégia, Arquitetura de Solução, Governança e Decisão Técnica.

Este módulo não testa se você sabe "clicar", mas sim se você sabe **pensar como um Arquiteto de Soluções**. A hiperautomação não é sobre uma ferramenta, mas sobre a orquestração eficiente de várias delas.

---

## **1. A Matriz de Seleção de Ferramentas (The Right Tool for the Job)**

Para a prova, você deve classificar o cenário de negócio com base em 4 critérios: **Complexidade, Volume, Interface e Usuário.**

### **MuleSoft RPA (O "Braço" Digital)**

* **Interface:** Somente para sistemas **sem API** (Legados, Mainframes, aplicações Desktop Windows, Citrix) ou onde o acesso via API é restrito/caro.  
* **Cenário Típico:** "Ler dados de um sistema de contabilidade de 1995 que só roda em Windows".  
* **Nuance de Prova:** Se houver menção a processamento de documentos não estruturados (PDFs escaneados), o RPA com OCR (Optical Character Recognition) é a escolha.

### **MuleSoft Composer (A "Ponte" No-Code)**

* **Interface:** Conectores nativos para SaaS (Salesforce, Slack, NetSuite, Google Sheets, Workday).  
* **Complexidade:** Baixa/Média. Transformações de dados simples.  
* **Perfil:** Administradores de Salesforce (Business Users).  
* **Nuance de Prova:** Se o requisito for "velocidade de entrega" e "sem código" para integrar duas nuvens (ex: Salesforce e ServiceNow), o Composer vence a Anypoint Platform.

### **Anypoint Platform (O "Cérebro" de Integração)**

* **Interface:** APIs (REST, SOAP), FTP, Database, sistemas com alta complexidade de protocolo.  
* **Volume:** Alto. Milhões de registros, processamento em lote (Batch), agregação de dados.  
* **Poder:** DataWeave (a linguagem de transformação da MuleSoft) permite manipulações que o Composer não alcança.  
* **Nuance de Prova:** Se o cenário envolver **reutilização em escala** (API-Led Connectivity), segurança rigorosa (OAuth, Políticas de IP) ou alto volume, a resposta é Anypoint.

---

## **2. Padrões de Design de Comunicação**

Como as peças se encaixam? A prova cobrará como você estabelece a comunicação entre as nuvens.

### **Invocação de Processos (Triggering)**

* **Salesforce Flow → MuleSoft RPA:** O Salesforce envia uma chamada via **External Services**. O RPA Manager recebe e coloca o bot na fila.  
* **Composer → RPA:** O Composer possui um conector nativo para o MuleSoft RPA. Ele pode passar parâmetros (ex: Nome do Cliente) para o processo de RPA.  
* **Anypoint → Salesforce:** Uso do conector Salesforce (via Pub/Sub API ou CDC - Change Data Capture) para reagir a mudanças no CRM em tempo real.

### **Sincronismo e Estado**

* **Síncrono (Request/Response):** Ideal para consultas (ex: verificar preço). Usado em APIs na Anypoint.  
* **Assíncrono (Fire and Forget):** Essencial para RPA. O robô pode demorar minutos para abrir uma aplicação. A solução deve prever que a resposta virá depois (callback ou pooling).

---

## **3. Estratégia de Testes em Hiperautomação (E2E)**

Diferente de um código simples, você deve testar o **fluxo de valor**.

1. **Isolamento de Erro:** Se uma automação falha, você deve ser capaz de identificar se o erro foi na extração (RPA), na transmissão (Composer/Anypoint) ou no destino (Salesforce).  
2. **Dados Sintéticos:** O uso de **Mock Data** (dados fictícios) no Anypoint Exchange é fundamental para testar APIs antes que os sistemas legados estejam prontos.  
3. **Tratamento de Exceções de Negócio vs. Técnicas:**  
   * **Técnica:** Queda de internet, sistema fora do ar (Solução: Retry/Re-tentativa).  
   * **Negócio:** Cliente com crédito insuficiente, CPF inválido (Solução: Direcionar para uma **User Task** ou aprovação manual no Flow).

---

## **4. Reutilização e o Modelo Operacional (C4E)**

Um pilar da MuleSoft é o **Center for Enablement (C4E)**.

* **Ativos Reutilizáveis:** Não construa o mesmo login de RPA três vezes. Publique o processo no **Anypoint Exchange**.  
* **Fragmentos de RAML:** Use fragmentos de especificação de API para manter a consistência em todos os projetos de hiperautomação.

---

## **5. Cenário Complexo para Análise (Padrão de Prova)**

**Cenário:** Uma seguradora quer automatizar a abertura de sinistros.

1. O cliente envia uma foto do acidente via WhatsApp.  
2. Um **Einstein Bot** (Salesforce) coleta os dados básicos.  
3. Uma API na **Anypoint Platform** consulta o histórico do cliente no banco de dados local.  
4. Um processo de **MuleSoft RPA** abre o sistema legado de seguros (verde/preto) para registrar o sinistro e gera um número de protocolo.  
5. O **Flow Orchestration** envia uma tarefa para um perito humano validar as fotos.  
6. Após aprovação, o **MuleSoft Composer** posta uma mensagem no canal de "Sinistros Aprovados" no Slack da equipe.

**Por que essa arquitetura é boa?**

* Usa IA para interface (Einstein).  
* Usa RPA apenas onde não há API (sistema legado).  
* Usa Orchestration para gerenciar a espera pelo perito humano (processo de longa duração).  
* Usa Composer para notificações rápidas em ferramentas de colaboração.

---

## **💡 Termos Técnicos que você deve dominar para este módulo:**

* **Idempotência:** Capacidade de executar a mesma operação várias vezes sem mudar o resultado (evita duplicatas).  
* **BPMN (Business Process Model and Notation):** A linguagem visual usada para desenhar os processos de RPA e Flow Orchestration.  
* **Exponential Backoff:** Técnica de espera crescente entre tentativas de erro (ex: espera 1s, depois 2s, 4s, 8s...).  
* **API-Led Connectivity:** Dividir APIs em camadas (System, Process, Experience) para maximizar a reutilização.

---

## **6. Checklist do exame para este módulo**

* Em qualquer cenário, identifique rapidamente se ele pede MuleSoft RPA, Composer, Anypoint Platform, Salesforce Flow ou uma combinação deles, observando interface disponível, volume de dados, complexidade e perfil do usuário.
* Ao imaginar um fluxo de ponta a ponta, desenhe mentalmente a sequência Salesforce → Anypoint → Composer → RPA, marcando onde cada ferramenta entra, qual protocolo usa (HTTP, conectores nativos, eventos) e se a comunicação é síncrona ou assíncrona.
* Para cada solução, pense em como testá-la de ponta a ponta: quais dados sintéticos você usaria, quais partes podem ser simuladas (Mocking Service no Anypoint, dados de teste em Salesforce) e onde estão os pontos de observabilidade.
* Relacione tipos de falha com camadas específicas: validação de negócio em Flow/Composer, erros técnicos em APIs (Anypoint), problemas de interface no RPA e gargalos de performance monitorados pelo Anypoint Monitoring.
* Identifique sempre oportunidades de reutilização: APIs publicadas no Exchange, fragmentos de RAML, processos de RPA reutilizáveis, subflows em Salesforce e fluxos genéricos de Composer que podem ser chamados por diferentes equipes.
* Avalie a velocidade de desenvolvimento desejada no cenário: integrações simples entre nuvens SaaS favorecem o Composer; processos com interação humana longa pedem Flow Orchestration; integrações críticas e reutilizáveis exigem Anypoint; sistemas sem API pedem RPA.
