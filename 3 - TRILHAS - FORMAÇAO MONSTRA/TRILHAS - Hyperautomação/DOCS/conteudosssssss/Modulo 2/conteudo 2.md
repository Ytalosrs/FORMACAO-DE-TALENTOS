# 📚 Módulo 2

# **🤖 Módulo 2: MuleSoft RPA (Conteúdo Extendido)**

**Peso no Exame:** 17%

**Foco:** Ciclo de vida de automação, ferramentas de desenvolvimento, lógica de robôs e gestão de ambientes.

Este módulo mede se você sabe **pensar como designer de automação**, não apenas se sabe “apertar botões” no Builder. As questões usam cenários de processos reais (financeiro, atendimento, backoffice) para testar se você:

- escolhe **bem** o candidato a RPA (estável, repetitivo, baseado em regras);
- entende **onde** configurar cada coisa (Manager, Builder, Recorder, agentes);
- sabe diferenciar **erro técnico** de **exceção de negócio**;
- evita usar RPA onde uma **API simples** já resolveria melhor.

Se você dominar estes pontos, vai conseguir eliminar rapidamente as alternativas “tentadoras, mas erradas” que aparecem na prova.

---

## **1. Arquitetura e Componentes Detalhados**

A arquitetura do MuleSoft RPA é distribuída. Entender onde cada tarefa é executada é vital:

### **A. MuleSoft RPA Manager (O Orquestrador)**

* **Ambiente:** Cloud (SaaS).  
* **Função:** É o centro de comando. Aqui você gerencia o ciclo de vida (Lifecycle), usuários, permissões, credenciais seguras e agendamentos.  
* **Recursos Críticos:**  
  * **Process Operations:** Onde você vê o status de saúde de todos os bots.  
  * **Credential Manager:** Armazena senhas de forma criptografada para que o robô as use sem que o desenvolvedor as veja.  
  * **Dashboard de Análise:** Avalia o ROI (Retorno sobre Investimento) e economia de tempo.

### **B. MuleSoft RPA Builder (A Forja)**

* **Ambiente:** Desktop (Windows).  
* **Função:** Onde a "mágica" técnica acontece. Você define as **Workflow Activities**.  
* **Toolbox:** Contém centenas de ações pré-configuradas (Excel, Mail, UI Automation, OCR, Browser Control).  
* **Variáveis e Parâmetros:** No Builder, você mapeia como os dados entram e saem de cada tarefa.

### **C. MuleSoft RPA Recorder (O Acelerador)**

* **Função:** Captura as ações de um usuário real (cliques e digitação) e gera um arquivo que pode ser importado para o Builder.  
* **Ponto de Prova:** O Recorder não gera uma automação pronta para produção; ele cria um *esqueleto* que deve ser refinado no Builder.

---

## **2. O Ciclo de Vida do Processo (Fases Obrigatórias)**

O exame costuma cobrar a ordem e o propósito de cada fase no RPA Manager:

1. **Evaluation (Avaliação):** O processo é viável? É estável? O Manager gera um gráfico de "Aptidão para Automação".  
2. **Design:** Desenha-se o fluxo usando **BPMN**. Aqui define-se o que o robô faz (**Bot Task**) e onde o humano intervém (**User Task**).  
3. **Build (Construção):** A lógica é implementada no Builder e os parâmetros de entrada/saída são configurados.  
4. **Test:** O processo é movido para o estágio de teste no Manager. Ele deve ser executado com sucesso em um ambiente de homologação.  
5. **Production (Produção):** O processo é publicado e agendado.

---

## **3. Lógica de Automação e Melhores Práticas Técnicas**

### **UI Automation (Automação de Interface)**

* **Web: Object-Based.** Sempre prefira identificar botões por IDs ou XPaths (é mais estável).  
* **Desktop: Image-Based / Pattern Recognition.** Quando não há IDs (sistemas legados), o robô "tira uma foto" do botão e procura por ele na tela.  
* **OCR (Optical Character Recognition):** Utilizado para ler textos dentro de imagens ou PDFs escaneados.

### **Activity Parameters (Comunicação)**

Como os dados fluem entre o sistema e o robô:

* **Inbound:** Dados que o robô recebe (ex: "Número do Pedido" vindo do Salesforce).  
* **Outbound:** Dados que o robô entrega após terminar (ex: "Status: Sucesso" ou "ID do ERP").

### **Error Handling (Tratamento de Erros)**

* **Error Catching:** Blocos que "capturam" a falha. Se o robô não encontrar uma janela, ele deve tirar um screenshot da tela de erro e encerrar a sessão de forma limpa, em vez de apenas travar.  
* **Business Exceptions:** Se um dado for inválido (ex: CPF inexistente), o robô deve lançar uma exceção de negócio e mover o item para uma fila de análise humana.

---

## **4. Segurança e Sessão (Secure Session)**

Este é um ponto técnico avançado que diferencia o MuleSoft RPA:

* **Sessão Segura:** O robô não precisa de um usuário logado fisicamente com monitor. Ele cria sua própria sessão Windows virtual, executa as tarefas e a encerra.  
* **Agentes (Bots):** Podem ser configurados para rodar múltiplos processos em paralelo, dependendo das licenças e da capacidade da máquina host.

---

## **5. Cenário de Exame: "O Robô Parou"**

**Pergunta típica:** Um robô de RPA estava funcionando perfeitamente, mas parou de clicar no botão "Salvar" de um sistema web após uma atualização do navegador. O que você deve fazer?

* **Resposta correta:** Abrir o **RPA Builder**, atualizar o localizador (XPath ou Seletor) do botão e republicar a versão do processo.

---

## **💡 Glossário para Memorizar:**

* **BPMN:** Notação gráfica para desenhar o fluxo (Manager).  
* **Bot Tasks:** Tarefas executadas pelo software.  
* **User Tasks:** Pontos de parada para intervenção humana (Workflow Manager).  
* **Artifacts:** Documentos ou arquivos gerados/usados pelo robô durante a execução.

---

## **6. Checklist do exame para este módulo**

* Dado um processo candidato, avalie se ele é estável, repetitivo, baseado em regras claras e com volume suficiente para justificar automação com RPA.
* Associe problemas comuns a fases específicas do ciclo de vida (Evaluation, Design, Build, Test, Production) e saiba onde o exame espera que você atue em cada situação.
* Diferencie bem erros técnicos (como alteração de layout, tempo de resposta, janela não encontrada) de exceções de negócio (como dados inválidos ou ausência de registro) e escolha a abordagem correta para cada tipo.
* Decida quando usar UI Automation baseada em objeto, em imagem ou OCR, e quando é melhor substituir cliques por chamadas de API via Anypoint.
* Demonstre entendimento de como publicar, versionar, agendar, monitorar e reiniciar processos pelo RPA Manager, interpretando métricas e logs de execução.

---

## **7. Como usar este módulo para estudar para a certificação**

- Leia primeiro a **visão de arquitetura** (Manager, Builder, Recorder, ciclo de vida) pensando em um processo real que você conhece no seu trabalho. Pergunte-se: “Se eu fosse automatizar isso, quais etapas virariam Bot Task e quais ficariam como User Task?”  
- Sempre que encontrar um conceito (por exemplo, *Secure Session* ou *Business Exception*), tente imaginar uma **pergunta de prova** em cima dele. Isso ajuda a fixar por que o tema é importante.  
- Volte nas questões das provas do Módulo 1 e Módulo 2 que envolvem RPA e tente justificar, em voz alta, por que as alternativas erradas violam alguma boa prática explicada neste texto.  
- Antes da prova oficial, revise este módulo procurando palavras‑chave que frequentemente aparecem nos enunciados: *Evaluation, Design, Build, Test, Production, Secure Session, OCR, Business Exception, RPA Manager, RPA Builder*. Se você souber explicar cada uma em 2 frases, está no caminho certo para acertar as questões deste assunto.
