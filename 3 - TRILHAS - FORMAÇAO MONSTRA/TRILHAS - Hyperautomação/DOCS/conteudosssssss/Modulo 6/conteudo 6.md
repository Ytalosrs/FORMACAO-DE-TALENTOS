# 📚 Módulo 6

# **📊 Módulo 6: Anypoint Monitoring & API Manager**

**Peso no Exame:** 7%

**Foco:** Visibilidade, Saúde do Ecossistema, Governança de Endpoints e Resolução de Problemas.

Este módulo foca na fase de **Operação**. Em projetos de hiperautomação, onde várias ferramentas estão encadeadas, o monitoramento é o que diferencia uma solução robusta de uma que "quebra e ninguém sabe o porquê".

Na prova, Monitoring e API Manager aparecem em cenários de:

- **degradação de performance** ao longo do tempo;
- sistemas legados entrando em colapso por excesso de requisições;
- necessidade de provar, com métricas, que a arquitetura está saudável;
- proteção de APIs consumidas por Flows, Composer e RPA.

Saber ler essas situações e traduzir em políticas ou ajustes de monitoramento é o que o examinador quer avaliar aqui.

---

## **1. Anypoint Monitoring (Visibilidade de Ponta a Ponta)**

O Anypoint Monitoring fornece insights em tempo real sobre as APIs que sustentam sua hiperautomação.

* **Dashboards Integrados:** Visualização de métricas de performance como tempo de resposta, taxa de erro e utilização de CPU/Memória dos Workers.  
* **Custom Dashboards:** Permite que você crie visões específicas para o negócio (ex: "Quantos pedidos o RPA processou via API hoje?").  
* **Log Search:** Centraliza os logs de todas as aplicações. Essencial para o **Troubleshooting**: se um Salesforce Flow recebe um erro "500", você vai ao Anypoint Monitoring para ler o log técnico e entender o que houve na camada de integração.  
* **Alertas:** Configuração de notificações automáticas (via E-mail ou Slack) caso uma API crucial ultrapasse um limite de erro.

---

## **2. API Manager (Governança e Proteção)**

Enquanto o Monitoring "observa", o API Manager "controla". Ele é responsável por gerenciar os endpoints de hiperautomação.

### **Configurações de Endpoint**

* **Basic Endpoint:** A API é gerenciada diretamente onde está hospedada.  
* **Proxy Endpoint:** Uma camada extra (Proxy) é colocada na frente da API. Isso permite aplicar políticas de segurança e monitoramento sem tocar no código original da aplicação (ideal para proteger sistemas legados que o RPA acessa).

### **Aplicação de Políticas (Policies)**

As políticas garantem que a hiperautomação seja segura e não derrube os sistemas de backend:

* **Rate Limiting / Throttling:** Limita o número de requisições que um processo (ex: um loop mal configurado no Composer) pode fazer à API por minuto.  
* **Client ID Enforcement:** Exige que qualquer ferramenta (Flow, Composer ou RPA) se identifique com uma "chave" antes de acessar os dados.  
* **IP Whitelisting:** Permite que apenas endereços IP específicos (como os da infraestrutura da Salesforce) acessem a API.

---

## **3. Identificação de Gargalos (Performance)**

A prova pode questionar como identificar onde a automação está lenta:

* **Métricas de Infraestrutura:** Se o uso de CPU está em **100%**, a API precisa de mais **vCores** (Escalabilidade Vertical).  
* **Métricas de Aplicação:** Se o tempo de resposta aumentou, mas o CPU está baixo, o problema pode estar no sistema de destino (ex: o banco de dados que o RPA consulta está lento).

---

## **4. Cenário de Exame: "O Sistema em Choque"**

**Cenário:** Você implementou uma automação onde o Salesforce Flow dispara milhares de requisições para uma API MuleSoft que atualiza o estoque. O sistema de estoque (legado) começou a travar devido ao volume. O que fazer?

* **Resposta correta:** No **API Manager**, aplicar uma política de **Rate Limiting** ou **SLA-Based Tiering**. Isso forçará o Flow a esperar ou receber um erro de "Too Many Requests", protegendo o sistema legado de um colapso.

---

## **💡 Glossário para Memorizar:**

* **Functional Monitoring:** Testes automatizados que "batem" na API periodicamente para garantir que ela está devolvendo o resultado esperado (não apenas se está online).  
* **Visualizer:** Uma ferramenta dentro do Monitoring que desenha um mapa automático de como as APIs estão conectadas entre si.  
* **Runtime Fabric:** Se mencionado, lembre-se que o monitoramento em RTF exige a configuração de agentes específicos para coletar métricas de containers.

---

## **6. Checklist do exame para este módulo**

* Dado um problema de performance, identifique rapidamente se ele está na infraestrutura (vCores, memória) ou no sistema de destino, usando métricas do Anypoint Monitoring.
* Saiba quando aplicar Rate Limiting, Client ID Enforcement, IP Whitelisting e outras políticas do API Manager para proteger sistemas legados e controlar o consumo por parte de Flows, Composer e RPA.
* Relacione tipos de endpoint (Basic x Proxy) com cenários de modernização: quando é viável colocar um proxy na frente de um sistema legado sem alterar o código original.
* Demonstre como usar functional monitoring para validar continuamente se as APIs críticas para hiperautomação continuam respondendo com a carga e os dados esperados.
* Em cenários de "sistema em choque", descreva como você ajustaria políticas, escalaria recursos e notificaria equipes usando alertas integrados com e-mail ou Slack.

---

## **7. Como estudar este módulo pensando na prova**

- Ao revisar os conceitos, tente sempre ligar cada um a um tipo de problema: *“Quando eu pensaria em Rate Limiting? Quando eu pensaria em aumentar vCores? Quando eu olharia para logs?”*. Isso ajuda a responder cenários rapidamente.  
- Leia de novo o cenário “O Sistema em Choque” e crie variações mentais (por exemplo, Flow → Composer, estoque → faturamento) mantendo a mesma solução com políticas no API Manager.  
- Nos simulados, sempre que uma questão falar que “ninguém sabe por que a automação falha”, pense em **Monitoring, Visualizer e Functional Monitoring** como candidatos à resposta.  
- Antes da certificação, revise os nomes das políticas mais comuns (Rate Limiting, SLA-Based, Client ID Enforcement, IP Whitelisting) e tenha claro o que cada uma protege; isso evita cair em alternativas que trocam os papéis dessas políticas.
