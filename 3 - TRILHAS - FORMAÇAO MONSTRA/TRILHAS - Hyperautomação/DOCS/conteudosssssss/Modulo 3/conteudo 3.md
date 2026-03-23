# 📚 Módulo 3

# **🎼 Módulo 3: MuleSoft Composer** 

**Peso no Exame:** 12%

**Foco:** Integração No-Code, Conectores SaaS, Lógica de Fluxo e Transformação de Dados.

O **MuleSoft Composer** é a ferramenta de "cidadão integrador" (Business User). O foco aqui é a velocidade e a simplicidade, mas a prova exige que você entenda as nuances de **lógica, funções e tratamento de erros** dentro dessa interface simplificada.

Na certificação, Composer aparece em cenários onde:

- o dono do processo é um **administrador de negócio** (ex.: admin de Salesforce), não um time de desenvolvimento;
- o volume de dados é **baixo ou moderado**;
- o objetivo é integrar **SaaS com SaaS** rapidamente (Salesforce, NetSuite, Slack, ServiceNow, Google Sheets etc.);
- não há necessidade imediata de um design API‑led completo com múltiplos consumidores.

As questões te testam justamente na fronteira: saber **quando Composer é suficiente** e quando você deve recusar essa alternativa e escolher Anypoint APIs ou RPA.

---

## **1. Fundamentos e Gatilhos (Triggers)**

Todo fluxo no Composer começa com um **Trigger**. Você deve saber identificar os três tipos principais:

* **System Event Trigger:** O fluxo inicia quando algo acontece em um sistema externo.  
  * *Exemplo:* "Quando uma nova oportunidade é fechada no Salesforce" ou "Quando uma linha é adicionada ao Google Sheets".  
* **Scheduler Trigger:** O fluxo inicia em intervalos de tempo definidos.  
  * *Exemplo:* "A cada 15 minutos", "Toda segunda-feira às 08:00". Útil para sincronização de inventário ou relatórios.  
* **HTTP Listener (Invocação Externa):** Permite que outros sistemas chamem o Composer.

---

## **2. Blocos de Construção e Lógica de Fluxo**

Diferente do RPA (que é visual/BPMN), o Composer é **linear**. Você adiciona etapas uma após a outra:

### **A. Conectores (Connections)**

O Composer abstrai a complexidade da API. Você só precisa autenticar (geralmente via OAuth).

* **Ações (Actions):** Criar registro, Atualizar, Buscar (Lookup) ou Deletar.  
* **Seleção de Campos:** Você escolhe exatamente quais campos quer trazer do sistema para economizar memória e performance.

### **B. Controle de Fluxo (Logic)**

Aqui é onde a prova costuma "pegar" o candidato:

* **If/Else (Condicionais):** Permite ramificar o fluxo.  
  * *Cenário:* Se o valor do pedido for > 5000, envie para aprovação no Slack; se for < 5000, crie direto no ERP.  
* **For Each (Loops):** Essencial quando você recebe uma **lista** de dados (ex: uma lista de itens de um pedido). O Composer executará as ações dentro do loop para cada item da lista.

---

## **3. Transformação de Dados (Funções e Fórmulas)**

O Composer não usa DataWeave, mas possui um **Formula Editor** potente. Você deve conhecer as categorias:

* **Texto (String):** CONCAT (unir textos), TRIM (remover espaços), UPPER/LOWER (caixa alta/baixa).  
* **Datas (Date):** ADD_DAYS, FORMAT_DATE. Muito comum em cenários de "Data de Vencimento = Hoje + 30 dias".  
* **Matemática:** Cálculos de impostos ou somatórios de itens.  
* **Mapeamento de Dados:** A habilidade de usar o "pílula de dados" (Data Pill) de uma etapa anterior como entrada para a próxima.

---

## **4. Teste e Monitoramento (Runtime)**

A experiência de teste no Composer é única:

* **Test Mode:** Você ativa o modo de teste e o Composer aguarda 10 minutos para que o evento de gatilho aconteça.  
* **Consumo de Dados Reais:** Diferente de um "mock", o teste do Composer interage com os sistemas reais. **Atenção:** Se você testar uma criação de registro no SAP, o registro será criado de fato.  
* **Run History:** Onde você vê o sucesso ou falha de cada execução. Cada "pílula" de dado pode ser inspecionada para ver o valor que passou por ela em tempo real.

---

## **5. Tratamento de Erros no Composer**

O Composer é menos resiliente que a Anypoint Platform, mas tem regras específicas:

* **Interrupção Automática:** Se uma etapa falha (ex: erro de autenticação ou campo obrigatório faltando), o fluxo para imediatamente naquela etapa.  
* **Notificações de Erro:** O administrador recebe um e-mail automático com os detalhes da falha.  
* **Limitações:** O Composer não possui blocos de "Try/Catch" complexos. A estratégia recomendada é validar os dados (usando If/Else) *antes* de tentar enviá-los ao sistema de destino.

---

## **6. Diferenciais Estratégicos (RPA vs. Composer)**

A prova vai te colocar em um dilema: **Quando usar o conector de RPA dentro do Composer?**

* **Resposta:** Use o Composer como a "orquestração leve" e o RPA como a "execução pesada".  
* **Exemplo:** O Composer recebe um arquivo do OneDrive (Gatilho), valida se o nome está correto (If/Else), e então chama o **MuleSoft RPA** para digitar os dados desse arquivo em um sistema legado.

---

## **💡 Cenário de Prova:**

"Uma empresa precisa que, sempre que um novo funcionário for contratado no Workday, ele receba automaticamente um kit de boas-vindas. O processo deve: 1. Verificar se o funcionário é do Brasil. 2. Se sim, postar no Slack e criar um ticket no ServiceNow."

**Como configurar no Composer:**

1. **Trigger:** New Related Record no Workday.  
2. **Logic:** Bloco **If/Else** verificando o campo Country == "Brazil".  
3. **Action (dentro do If):** Post Message no conector Slack.  
4. **Action (dentro do If):** Create Record no conector ServiceNow.

---

## **7. Checklist do exame para este módulo**

* Em qualquer cenário, identifique claramente qual será o gatilho do Composer (evento em sistema SaaS, agendamento ou chamada HTTP) e qual conector principal será usado.
* Certifique-se de saber quando usar If/Else para ramificações simples e quando é obrigatório um For Each para listas, evitando processar apenas o primeiro registro por engano.
* Treine mentalmente transformações comuns com fórmulas de texto, número e data, como cálculos de vencimento, normalização de nomes, criação de IDs compostos e arredondamentos.
* Para cada fluxo, defina como testá-lo: qual dado real dispara o gatilho, como validar os resultados e como usar o Run History para inspecionar cada etapa e cada data pill.
* Quando estiver em dúvida entre Composer e Anypoint, use o critério de complexidade e reutilização: integrações simples, com poucos sistemas e baixo volume favorecem Composer; integrações críticas, com várias equipes e múltiplos consumidores favorecem APIs no Anypoint.

---

## **8. Como este módulo ajuda diretamente na prova**

- Leia cada seção deste módulo com a pergunta mental: **“O exame usaria este conceito para justificar Composer ou para descartá‑lo?”**. Isso treina você a identificar alternativas‑armadilha.  
- Ao revisar cenários de prova, marque palavras‑chave como *low volume*, *business admins*, *prebuilt connectors*, *quick integration*: quase sempre apontam para Composer como resposta correta.  
- Quando o enunciado mencionar **reutilização em larga escala**, **múltiplos consumidores** ou **políticas avançadas de segurança**, desconfie de Composer e considere que a resposta deve ser um desenho com APIs na Anypoint Platform.  
- Use as provas do módulo para praticar essa decisão: depois de responder, volte ao texto e localize onde a justificativa da alternativa correta aparece. Isso cria um vínculo forte entre teoria e prática, aumentando a chance de você reconhecer o padrão imediatamente no dia da certificação.
