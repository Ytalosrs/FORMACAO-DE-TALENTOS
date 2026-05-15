## Questões sobre Conceitos Gerais de Hyperautomation (1–10)

**1.** A Northern Trail Outfitters quer modernizar seus processos substituindo tarefas manuais repetitivas por automações que combinam várias tecnologias (Flow, RPA, Composer e APIs). Segundo o posicionamento da Salesforce, o que melhor descreve **Hyperautomation** nesse contexto?

A. Uso exclusivo de RPA para eliminar toda intervenção humana.

B. Combinação de múltiplas tecnologias de automação para orquestrar processos ponta a ponta.

C. Substituição de todos os sistemas legados por um único sistema ERP.

D. Execução de fluxos autolançados em lote toda noite.

E. Implantação de um único bot Einstein para todos os canais.

> **Resposta:** B

---

**2.** Um arquiteto precisa explicar a diferença entre **automação isolada** e **hyperautomation** para a diretoria. Qual afirmação está mais alinhada ao entendimento recomendado pela Salesforce?

A. Automação isolada foca em bots; hyperautomation foca apenas em APIs.

B. Automação isolada usa Composer; hyperautomation sempre usa Flow Orchestration.

C. Automação isolada resolve tarefas pontuais; hyperautomation conecta pessoas, dados e sistemas em jornadas completas de negócios.

D. Automação isolada é sempre síncrona; hyperautomation é sempre assíncrona.

E. Automação isolada roda na nuvem; hyperautomation roda apenas on‑premises.

> **Resposta:** C

---

**3.** Uma empresa quer reduzir o tempo de atendimento ao cliente conectando canais digitais, Salesforce Service Cloud, sistemas legados sem API e integrações em tempo real com parceiros. Qual combinação de componentes representa uma **arquitetura típica de hyperautomation** no ecossistema Salesforce?

A. Flow Builder, MuleSoft Composer, MuleSoft RPA, APIs no Anypoint Platform e Flow Orchestration.

B. Apenas Apex e Lightning Web Components.

C. Apenas Einstein Bots e Digital Engagement.

D. Apenas MuleSoft APIs sem qualquer automação em Salesforce.

E. Apenas relatórios e dashboards em Analytics.

> **Resposta:** A

---

**4.** Um CIO quer escolher a melhor tecnologia de automação para cada tipo de tarefa. Qual mapeamento está mais alinhado com as recomendações para um cenário de hyperautomation?

A. Salesforce Flow para qualquer integração externa, MuleSoft RPA para relatórios.

B. MuleSoft Composer para integrações SaaS a SaaS, MuleSoft RPA para tarefas em sistemas sem API, Flow Orchestration para coordenar etapas humanas e automáticas.

C. Apenas RPA para tudo, pois é mais flexível.

D. Apenas APIs REST para qualquer tipo de interação do usuário.

E. Apenas Apex por ser linguagem de programação completa.

> **Resposta:** B

---

**5.** Durante uma avaliação de maturidade em automação, o time percebe que tem dezenas de automações construídas por áreas distintas, sem governança. Qual prática está mais alinhada à visão de hyperautomation da Salesforce para corrigir esse problema?

A. Centralizar tudo em um único desenvolvedor Apex.

B. Desligar automações existentes e começar do zero.

C. Criar um Center of Excellence (CoE) de automação com padrões de design, catálogo de ativos e monitoramento centralizado.

D. Migrar todas as automações para um único fluxo em Flow Builder.

E. Mover todas as integrações para planilhas.

> **Resposta:** C

---

**6.** Um consultor está definindo uma estratégia de **governança** para hyperautomation. Qual elemento é mais importante para garantir escalabilidade e reutilização?

A. Criar apenas automações em ambiente de produção.

B. Evitar documentação para ganhar velocidade.

C. Estabelecer naming conventions, padrões de integração (API-led), versionamento e ambientes de teste.

D. Permitir que qualquer usuário ative automações diretamente em produção.

E. Desabilitar logs para reduzir custos.

> **Resposta:** C

---

**7.** Uma empresa deseja implementar hyperautomation com foco em **segurança de dados**. Qual abordagem está mais alinhada às boas práticas?

A. Expor dados sensíveis em logs de fluxo para facilitar troubleshooting.

B. Usar apenas usuários genéricos de integração, com permissões de administrador em todos os sistemas.

C. Aplicar princípio de menor privilégio nas integrações, mascarar dados sensíveis em logs e usar autenticação forte para conexões.

D. Armazenar tokens de acesso em campos de texto em objetos personalizados.

E. Compartilhar credenciais de integração por e‑mail.

> **Resposta:** C

---

**8.** Ao desenhar um roadmap de hyperautomation, o time de negócios quer priorizar iniciativas. Qual critério é **mais adequado** para definir quais processos automatizar primeiro?

A. Quantidade de campos no objeto.

B. Complexidade técnica das integrações.

C. Combinação de impacto de negócio (economia de tempo, redução de erros) e viabilidade técnica.

D. Número de usuários que trabalham no processo, independentemente do valor gerado.

E. Escolher apenas processos que envolvam RPA.

> **Resposta:** C

---

**9.** Um arquiteto está avaliando o uso de **API-led connectivity** em uma iniciativa de hyperautomation. Qual é o principal benefício dessa abordagem dentro do contexto Salesforce + MuleSoft?

A. Fornecer uma única API gigante que cobre todos os sistemas.

B. Dividir integrações em System, Process e Experience APIs, promovendo reutilização, governança e desacoplamento entre canais e sistemas.

C. Eliminar a necessidade de qualquer lógica em Salesforce Flow.

D. Substituir completamente o uso de MuleSoft Composer.

E. Forçar que todos os processos sejam síncronos.

> **Resposta:** B

---

**10.** A diretoria quer entender o papel da **IA** em hyperautomation com Salesforce. Qual opção representa um uso típico de IA no contexto da certificação Hyperautomation Specialist?

A. IA substitui todas as regras de negócio em flows.

B. Einstein Next Best Action recomenda ações enquanto Flow Orchestration e integrações executam os próximos passos.

C. IA é usada apenas para criar dashboards.

D. IA é usada somente em bots Einstein, sem integração com processos.

E. IA é obrigatória para qualquer automação.

> **Resposta:** B

---

## Questões sobre MuleSoft Composer (11–25)

**11.** A Northern Trail Outfitters quer automatizar a sincronização de contatos entre Salesforce e Google Sheets usando uma interface **no‑code**. Segundo a documentação oficial, qual ferramenta deve ser usada?

A. Anypoint Studio.

B. MuleSoft Composer.

C. Mule runtime on‑premises.

D. Salesforce CLI.

E. Apex REST.

> **Resposta:** B

---

**12.** Em MuleSoft Composer, qual elemento representa as **credenciais e URL** usadas para acessar um sistema como Salesforce, Slack ou NetSuite?

A. Trigger.

B. Action.

C. Connection.

D. Template.

E. Orchestration.

> **Resposta:** C

---

**13.** Um administrador está criando um fluxo no MuleSoft Composer. Após escolher uma conexão baseada em Salesforce, o que ele deve configurar como **primeiro passo** do fluxo, de acordo com a documentação?

A. Um template de integração.

B. Um trigger que define qual evento em Salesforce iniciará o fluxo.

C. Uma ação de escrita em outro sistema.

D. Um monitor de uso.

E. Uma etapa de teste unitário.

> **Resposta:** B

---

**14.** Um fluxo do Composer precisa ser executado a cada 15 minutos, independentemente de eventos em sistemas externos. O que deve ser configurado?

A. Um trigger do tipo "record created" em Salesforce.

B. Um trigger de evento de plataforma.

C. Um agendamento (schedule) como início do fluxo, sem conexão específica.

D. Uma ação assíncrona de Apex.

E. Um template de automação.

> **Resposta:** C

---

**15.** Durante a criação de um fluxo no MuleSoft Composer, o administrador vê dados de exemplo passando pelos passos do fluxo. Qual é o principal objetivo dessa funcionalidade de **sample data**?

A. Registrar logs definitivos de produção.

B. Permitir testar cada mudança em tempo quase real, facilitando validação das etapas antes da ativação.

C. Gerar relatórios analíticos automáticos.

D. Reduzir custos de licenciamento.

E. Criar novos objetos personalizados.

> **Resposta:** B

---

**16.** Após configurar triggers e ações em um fluxo do Composer, o que o administrador deve fazer **antes de ativar o fluxo em produção**, conforme a documentação?

A. Exportar o fluxo para Anypoint Studio.

B. Testar o fluxo em um único registro para validar o comportamento.

C. Compilar o fluxo em código Java.

D. Converter o fluxo em um template gerenciado.

E. Migrar o fluxo para um org de produção separado.

> **Resposta:** B

---

**17.** Um fluxo do Composer foi ativado, mas os usuários suspeitam que ele não está atualizando um sistema de destino corretamente. Onde o administrador deve verificar a execução e eventuais erros?

A. Na página de detalhes do fluxo (Flow Details) em MuleSoft Composer.

B. Apenas nos logs do Salesforce Debug.

C. Apenas no Anypoint Monitoring.

D. Apenas no Setup Audit Trail.

E. Em relatórios do Data Cloud.

> **Resposta:** A

---

**18.** Uma empresa deseja começar rapidamente com automações comuns, como sincronizar contatos entre dois sistemas. Na home do MuleSoft Composer, qual recurso pode ser usado para acelerar a criação do fluxo?

A. Usage Summary.

B. Templates pré‑construídos.

C. Help Center.

D. Flow Orchestration.

E. RPA Manager.

> **Resposta:** B

---

**19.** O painel inicial do MuleSoft Composer exibe uma seção **Usage Summary**. Qual é o propósito principal dessa funcionalidade?

A. Mostrar apenas o número de usuários logados.

B. Exibir tarefas mensais e uso de créditos por fluxo para a organização.

C. Configurar licenças de usuários do Salesforce.

D. Criar novos objetos personalizados.

E. Gerar relatórios financeiros.

> **Resposta:** B

---

**20.** Um administrador está planejando um fluxo Composer que copia registros modificados em Salesforce para um sistema de faturamento. Qual boa prática ele deve seguir ao configurar as ações?

A. Copiar todos os registros da tabela, independentemente de mudanças.

B. Copiar apenas registros novos ou alterados desde a última execução, reduzindo processamento.

C. Sempre copiar todos os campos, mesmo os irrelevantes.

D. Evitar filtros para simplificar o fluxo.

E. Configurar múltiplos triggers para o mesmo evento.

> **Resposta:** B

---

**21.** Um fluxo MuleSoft Composer está realizando integrações críticas. O time deseja ser avisado se ocorrerem falhas, além de consultar a página de Flow Details. Qual mecanismo pode ser configurado para enviar notificações de erro?

A. Publicar em um feed do Chatter.

B. Enviar e‑mails para um endereço configurado.

C. Enviar notificações push no aplicativo móvel Salesforce.

D. Criar um registro de caso automaticamente.

E. Enviar mensagem para canal do Slack por padrão, sem configuração.

> **Resposta:** B

---

**22.** Uma empresa deseja sincronizar dados em **tempo quase real** entre dois orgs Salesforce usando MuleSoft Composer. Quantos fluxos são necessários para um cenário de sincronização **bidirecional**?

A. 1.

B. 2.

C. 3.

D. 4.

E. 5.

> **Resposta:** B

---

**23.** Em um projeto de integração com Composer, a equipe de TI orienta que todos os testes devem ser feitos em **orgs sandbox** antes de ir para produção. Quais conexões devem apontar para sandbox durante testes?

A. Apenas o trigger.

B. Apenas a última ação do fluxo.

C. Tanto o trigger quanto todas as ações que interagem com Salesforce.

D. Apenas ações que escrevem em sistemas externos.

E. Não é recomendável testar em sandbox.

> **Resposta:** C

---

**24.** Um administrador acessa o MuleSoft Composer e deseja criar um novo fluxo. Na página inicial, qual opção ele deve selecionar para começar **do zero**?

A. Usage Summary.

B. Flows > Create new flow.

C. Help > Create flow.

D. Templates > Activate.

E. Settings > New.

> **Resposta:** B

---

**25.** Um analista quer entender como o MuleSoft Composer auxilia na **quebra da complexidade** de integrações entre sistemas. Como a documentação descreve esse benefício?

A. Ao ocultar completamente a lógica de integração do usuário.

B. Ao permitir que o usuário experimente e itere sobre um fluxo, dividindo a lógica em passos claros e ajustando conforme descobre novos casos de uso.

C. Ao gerar automaticamente código Apex.

D. Ao substituir todos os sistemas legados por Salesforce.

E. Ao impedir que flows sejam modificados após ativados.

> **Resposta:** B

---

## Questões sobre Salesforce Flow e Flow Orchestration (26–40)

**26.** A Northern Trail Outfitters precisa automatizar uma série de ações em Salesforce que será executada por um único usuário após a criação de um registro de caso. A solução precisa organizar ações em **etapas lógicas** e permitir entrada de dados do usuário durante o processo. Qual recurso é mais adequado?

A. Um único fluxo autolançado com Apex invocado.

B. Uma Flow Orchestration com Stages e Steps para organizar ações automatizadas e interações do usuário.

C. Um processo no Process Builder.

D. Um fluxo em lote executado diariamente.

E. Um workflow rule.

> **Resposta:** B

---

**27.** Um administrador quer automatizar um processo **guiado**, em que o usuário interage com telas e toma decisões. Qual tipo de flow é mais adequado?

A. Screen Flow.

B. Record‑Triggered Flow.

C. Schedule‑Triggered Flow.

D. Autolaunched Flow sem tela.

E. Before‑save Flow.

> **Resposta:** A

---

**28.** Uma empresa precisa executar um fluxo automaticamente quando um registro de Conta é criado ou atualizado, antes de ser salvo no banco de dados, para atualizar um campo calculado. Qual tipo de Flow deve ser usado?

A. Screen Flow.

B. Record‑Triggered Flow antes da gravação (before‑save).

C. Schedule‑Triggered Flow.

D. Flow Orchestration Step.

E. Platform Event‑Triggered Flow.

> **Resposta:** B

---

**29.** Em Flow Builder, ao clicar em **Debug**, o que o administrador obtém que é diferente de **Run**?

A. Debug executa versão antiga do fluxo.

B. Debug mostra detalhes de cada etapa, incluindo entradas, saídas e eventuais erros, ajudando a identificar problemas.

C. Debug executa apenas para usuários administradores.

D. Debug desativa todas as validações.

E. Debug publica logs apenas em arquivos externos.

> **Resposta:** B

---

**30.** Uma Flow Orchestration precisa envolver múltiplos times em diferentes etapas de um processo de aprovação de projeto. Como **Interactive Steps** ajudam nesse cenário?

A. Permitem que usuários interajam com o processo entre etapas automatizadas, concluindo tarefas atribuídas antes que a orquestração siga para o próximo passo.

B. Eliminam a necessidade de licenças Salesforce.

C. Substituem completamente qualquer ação automatizada.

D. Criam automaticamente relatórios de Analytics.

E. São usadas apenas para integrações externas.

> **Resposta:** A

---

**31.** Um administrador quer reutilizar lógica comum em vários flows, como validações e atualizações de campos. Qual recurso é recomendado?

A. Flow Orchestration.

B. Subflows chamados a partir de um flow principal.

C. Workflow Rules.

D. Process Builder.

E. Apex Triggers.

> **Resposta:** B

---

**32.** Uma empresa deseja automatizar um processo em que um conjunto de registros deve ser processado em lote diariamente às 23h. Qual tipo de flow é mais adequado?

A. Screen Flow.

B. Schedule‑Triggered Flow.

C. Record‑Triggered Flow.

D. Autolaunched Flow acionado manualmente.

E. Flow Orchestration.

> **Resposta:** B

---

**33.** Um arquiteto está revisando o uso de automações em um org. A recomendação atual da Salesforce é priorizar qual tecnologia para novas automações declarativas?

A. Workflow Rules.

B. Process Builder.

C. Salesforce Flow (Flow Builder).

D. Apex Triggers para tudo.

E. Nenhuma automação declarativa.

> **Resposta:** C

---

**34.** Um administrador está testando um fluxo que ainda está inativo. O que o modo **Run** em Flow Builder utiliza ao executar o fluxo?

A. Sempre a versão ativa.

B. A versão mais recente salva do fluxo, mesmo que ainda não esteja ativa.

C. Uma versão aleatória.

D. Apenas versões implantadas via change set.

E. Apenas versões clonadas.

> **Resposta:** B

---

**35.** Um processo de hyperautomation exige que um usuário analise dados e tome uma decisão manual em determinado ponto, após várias ações automáticas. Onde esse tipo de interação humana se encaixa melhor?

A. Em um Interactive Step de uma Flow Orchestration.

B. Em um SOQL dentro de Apex.

C. Em um relatório estático.

D. Em um template de Composer.

E. Em uma função de IA autônoma.

> **Resposta:** A

---

**36.** Uma empresa quer expor uma ação externa (fornecida por um serviço REST) para ser chamada dentro de um fluxo Salesforce de forma declarativa. Que recurso da plataforma deve ser usado para registrar essa ação?

A. Named Credentials apenas.

B. External Services com especificações OpenAPI importadas.

C. Apex Managed Sharing.

D. Platform Events.

E. Big Objects.

> **Resposta:** B

---

**37.** Em um fluxo de hyperautomation, o time quer coordenar a execução de múltiplos flows e etapas humanas em um **processo de vários dias**, com SLAs e dependências. Qual recurso é mais apropriado?

A. Um único autolaunched flow.

B. Flow Orchestration.

C. MuleSoft Composer.

D. Um fluxo de tela simples.

E. Apex Batch.

> **Resposta:** B

---

**38.** Um administrador está recebendo erros frequentes em um fluxo record‑triggered em produção. Qual prática é recomendada para depurar o problema sem impactar usuários finais?

A. Desativar o fluxo em produção e esperar.

B. Clonar o fluxo para um sandbox, reproduzir o cenário com Debug e ajustar a lógica.

C. Alterar o fluxo diretamente em produção sem testes.

D. Apagar o fluxo e recriá‑lo do zero.

E. Ignorar os erros, pois o sistema se ajustará com o tempo.

> **Resposta:** B

---

**39.** Um desenvolvedor criou um flow complexo que mistura lógica de interface com integrações externas. Para torná‑lo mais sustentável, qual abordagem está alinhada às boas práticas?

A. Manter tudo em um único fluxo para facilitar a leitura.

B. Separar lógica de interface em Screen Flows, lógica de negócio em autolaunched flows e integrações em APIs reutilizáveis.

C. Converter todo o fluxo em Apex.

D. Mover a lógica para Process Builder.

E. Usar apenas RPA para interagir com Salesforce.

> **Resposta:** B

---

**40.** Em Flow Builder, qual é a principal diferença de propósito entre **Run** e **Debug**?

A. Run usa sempre a versão ativa; Debug usa sempre a versão antiga.

B. Run executa o fluxo normalmente; Debug exibe detalhes de cada etapa (inputs, outputs e erros) para fins de depuração.

C. Run só funciona em produção; Debug só funciona em sandbox.

D. Run ignora validações; Debug aplica todas as validações.

E. Run usa dados de exemplo; Debug usa apenas dados reais.

> **Resposta:** B

---

## Questões sobre MuleSoft RPA, Anypoint Platform e API‑Led (41–60)

**41.** A AnyAirlines precisa automatizar um processo que obtém dados de um site antigo que **não expõe APIs**. Qual combinação de ferramentas é mais apropriada na estratégia de hyperautomation?

A. Apenas MuleSoft Composer.

B. MuleSoft RPA para interagir com o site e MuleSoft Composer para orquestrar a automação com Salesforce.

C. Apenas Apex.

D. Apenas relatórios em Salesforce.

E. Somente Flow Orchestration.

> **Resposta:** B

---

**42.** Durante o uso do **RPA Recorder** em MuleSoft RPA, um analista está gravando uma atividade manual em um sistema legado. Que tipo de informação o Recorder coleta automaticamente para suportar a automação?

A. Comentários de negócio sobre cada passo.

B. Decisões condicionais tomadas pelo usuário.

C. Documentação dos elementos de interface usados (botões, campos, etc.).

D. Valores de variáveis de ambiente.

E. Senhas em texto plano.

> **Resposta:** C

---

**43.** Uma empresa precisa criar uma nova integração baseada em APIs usando MuleSoft. De acordo com as boas práticas de API‑led connectivity, qual deve ser o **primeiro passo** do desenvolvedor?

A. Criar um projeto diretamente no Anypoint Studio sem especificação.

B. Instalar runtime Mule localmente e começar a codar.

C. Criar a especificação da API (RAML) no Design Center, definindo recursos, métodos e contratos.

D. Abrir um caso de suporte na Salesforce.

E. Criar um fluxo Composer.

> **Resposta:** C

---

**44.** A AnyAirlines está desenvolvendo uma nova integração e quer ter **testes automatizados** integrados ao processo de desenvolvimento de APIs. Qual componente do Anypoint Platform atende melhor a essa necessidade?

A. MuleSoft RPA.

B. MuleSoft Composer.

C. MUnit dentro do Anypoint Studio e Anypoint Platform.

D. Salesforce Flow Debug.

E. Einstein Bots.

> **Resposta:** C

---

**45.** Uma empresa quer implantar o Anypoint Platform aproveitando serviços da AWS, com escalabilidade vertical/horizontal e zero downtime em implantações. Que estratégia de deployment é mais adequada?

A. Apenas Runtime local standalone.

B. CloudHub.

C. Runtime Fabric em infraestrutura AWS.

D. Private Cloud Edition em datacenter próprio.

E. Instalação manual de runtimes em VMs isoladas sem orquestração.

> **Resposta:** C

---

**46.** Um processo de RPA em produção da AnyAirlines começou a falhar. Segundo as práticas recomendadas, qual é a melhor forma de depurar o problema?

A. Desativar o processo e analisar manualmente prints de tela.

B. Baixar o pacote de análise no RPA Manager, reverter o processo para a fase de Build, importar o pacote no RPA Builder e depurar.

C. Modificar o processo diretamente em produção.

D. Ignorar as falhas até que parem.

E. Deletar o processo e recriá‑lo.

> **Resposta:** B

---

**47.** Um time de marketing quer rodar uma campanha mensal para os 10% clientes com mais pontos de fidelidade. O cenário usa API‑led connectivity e dados de lealdade em sistema externo HTTP. Qual abordagem é mais alinhada às boas práticas de API‑led?

A. Criar uma única API gigante que acesse todos os sistemas.

B. Criar System APIs para Cliente e Fidelidade, um Process API que combine os dados e um Experience API para os consumidores de negócio.

C. Fazer tudo em RPA.

D. Fazer tudo em relatórios Salesforce.

E. Usar planilhas locais.

> **Resposta:** B

---

**48.** Em um pipeline de hyperautomation, o time quer expor uma API para um canal móvel, outra para um portal web, ambas consumindo as mesmas capacidades de backend. Que camada da abordagem API‑led normalmente atende a esses canais?

A. System API.

B. Process API.

C. Experience API.

D. Batch API.

E. Sync API.

> **Resposta:** C

---

**49.** Um arquiteto está desenhando o uso de MuleSoft RPA em conjunto com APIs. Em qual situação RPA é mais indicado, segundo a visão de hyperautomation?

A. Sempre que houver APIs REST bem definidas.

B. Quando o sistema não tem APIs ou acesso direto a dados, mas possui interface de usuário estável.

C. Quando o cliente prefere não usar Salesforce.

D. Quando se deseja substituir todos os flows declarativos.

E. Quando se quer apenas relatórios.

> **Resposta:** B

---

**50.** Uma empresa utiliza MuleSoft Composer, Flow e RPA em sua estratégia de hyperautomation. Quem normalmente é o **principal público‑alvo** do MuleSoft Composer dentro dessa combinação?

A. Desenvolvedores de baixo nível que codificam em Java.

B. Admins e analistas de negócio que precisam construir integrações SaaS a SaaS de forma rápida, com interface visual.

C. Usuários finais sem permissão de edição.

D. Equipe de segurança apenas.

E. Somente arquitetos de integração seniores.

> **Resposta:** B

---

**51.** Um analista está configurando um fluxo de RPA para executar diariamente às 10h com duração de uma hora. O job é reexecutado em intervalo fixo de 45 minutos. Em qual horário o processo será executado pela **segunda vez**, assumindo que não há falhas?

A. 10h45.

B. 11h00.

C. 11h45, pois a próxima execução só inicia 45 minutos após a conclusão do primeiro job.

D. 10h15.

E. 12h00.

> **Resposta:** C

---

**52.** Um time de integração precisa monitorar e gerenciar APIs, incluindo políticas de segurança, SLAs e analytics. Qual componente do Anypoint Platform é mais apropriado para essa função?

A. Anypoint Runtime Manager.

B. Anypoint Exchange.

C. Anypoint API Manager.

D. Design Center.

E. RPA Manager.

> **Resposta:** C

---

**53.** Uma organização deseja publicar ativos reutilizáveis, como especificações de API, templates e conectores, para consumo por outros times. Qual recurso deve ser utilizado?

A. Anypoint Runtime Manager.

B. Anypoint Exchange.

C. MUnit.

D. DataWeave.

E. RPA Builder.

> **Resposta:** B

---

**54.** No contexto da certificação Hyperautomation Specialist, qual é uma responsabilidade típica do profissional ao trabalhar com **governança de APIs**?

A. Criar apenas testes manuais.

B. Configurar acesso aberto (sem autenticação) para facilitar consumo.

C. Definir padrões de autenticação, limitar acesso por políticas e monitorar consumo via API Manager.

D. Evitar documentação para agilizar entregas.

E. Deixar a segurança sob responsabilidade exclusiva da área de redes.

> **Resposta:** C

---

**55.** Uma empresa quer garantir que apenas usuários autorizados consigam disparar automações que envolvem dados sensíveis em Salesforce, Composer e RPA. Qual estratégia é mais apropriada?

A. Dar perfil System Administrator para todos.

B. Controlar permissões via perfis/permisson sets em Salesforce, limitar credenciais de conexões do Composer e usar controle de acesso em RPA Manager.

C. Compartilhar credenciais em um documento.

D. Usar apenas logins genéricos.

E. Desativar autenticação multifator.

> **Resposta:** B

---

**56.** Em um cenário de hyperautomation, a equipe quer reduzir o acoplamento entre front‑ends e sistemas de backend, garantindo que mudanças internas não quebrem canais externos. Qual camada da abordagem API‑led ajuda diretamente nesse objetivo?

A. System APIs.

B. Process APIs.

C. Experience APIs.

D. Batch APIs.

E. RPA processes.

> **Resposta:** B

---

**57.** Um arquiteto está decidindo entre usar MuleSoft Composer ou desenvolver uma integração completa via Anypoint Platform. Em qual cenário Composer é **mais indicado**?

A. Integrações altamente customizadas com requisitos complexos de performance e governança.

B. Integrações simples SaaS a SaaS, com necessidade de rapidez de entrega e baixo esforço de codificação.

C. Implementações on‑premises sem acesso à nuvem.

D. Processos que exigem testes unitários aprofundados via MUnit.

E. Situações em que não se deseja interface visual.

> **Resposta:** B

---

**58.** Uma empresa quer usar MuleSoft RPA e Composer para um processo de atendimento que envolve captura de dados em um sistema legado, atualização de registros em Salesforce e notificação em Slack. Qual desenho representa melhor a abordagem de hyperautomation?

A. RPA faz tudo, sem Composer ou Salesforce.

B. Composer orquestra o processo, chamando um bot RPA para interagir com o sistema legado, atualizando Salesforce e enviando mensagens ao Slack.

C. Apenas um fluxo record‑triggered em Salesforce.

D. Somente uma API REST.

E. Apenas relatórios.

> **Resposta:** B

---

**59.** Um time está definindo KPIs para medir o sucesso de iniciativas de hyperautomation. Qual conjunto de métricas é mais relevante?

A. Número de objetos personalizados criados, número de triggers Apex.

B. Redução de tempo de ciclo, diminuição de erros manuais, aumento de throughput de casos/processos e satisfação dos usuários.

C. Tamanho do código Apex, volume de logs.

D. Quantidade de perfis de usuário.

E. Número de dashboards criados.

> **Resposta:** B

---

**60.** Um arquiteto de hyperautomation precisa alinhar stakeholders de negócio e TI sobre o escopo das próximas ondas de automação. Qual prática é mais adequada?

A. Deixar cada área criar automações isoladas, sem alinhamento.

B. Conduzir sessões de descoberta de processos (“process discovery”), mapear jornadas de ponta a ponta e priorizar casos de uso com alto impacto, alinhando‑os ao roadmap de APIs e automações.

C. Começar diretamente pela implementação técnica sem envolver o negócio.

D. Escolher apenas processos fáceis, independentemente do valor.

E. Focar apenas em integrações internas, ignorando experiência do cliente.

> **Resposta:** B

---

## Referências Utilizadas

- Edital Salesforce Certified Hyperautomation Specialist (Salesforce Help)
    
- Trilha oficial Salesforce Hyperautomation Specialist no Trailhead
    
- Documentação oficial "Building Process Automation with MuleSoft Composer"
    
- Arquivo de exemplo de simulado com 60 questões (estilo de prova)​



  
## Explicações das respostas

**1.** (B) Hyperautomation, na visão Salesforce, é exatamente a combinação de várias tecnologias (Flow, Orchestration, MuleSoft, RPA, IA etc.) para automatizar processos ponta a ponta, e não apenas usar uma única ferramenta isolada.

**2.** (C) A diferença central é que automação isolada resolve tarefas pontuais, enquanto hyperautomation se preocupa em conectar pessoas, dados e sistemas ao longo de jornadas completas de negócio, orquestrando tudo como um processo único.

**3.** (A) Uma arquitetura típica de hyperautomation no ecossistema Salesforce combina automações declarativas (Flow/Orchestration) com integrações (MuleSoft Composer/Anypoint APIs) e RPA para cenários sem API, cobrindo do front ao back sem código pesado.

**4.** (B) A boa prática é usar Composer para integrações SaaS a SaaS com cliques, RPA para interfaces sem API e Flow Orchestration para coordenar passos humanos e automáticos, aproveitando a melhor ferramenta para cada tipo de tarefa.

**5.** (C) A abordagem recomendada em grandes programas de automação é criar um CoE (Center of Excellence) com padrões, catálogo de ativos, governança e monitoramento centralizado, em vez de deixar cada área criar automações soltas.

**6.** (C) Escalabilidade e reutilização vêm de padrões: convenções de nomes, API‑led connectivity, versionamento, ambientes de desenvolvimento/teste/produção e práticas de DevOps; isso evita “caos de automações”.

**7.** (C) Princípio do menor privilégio, mascaramento de dados sensíveis em logs e autenticação forte/segura são pilares de segurança recomendados em integrações e automações que tratam informações sensíveis.

**8.** (C) Em priorização de automação, o mais maduro é cruzar impacto de negócio (tempo, custo, erros) com viabilidade técnica, e não só escolher o que é “mais fácil” ou o que tem mais campos.

**9.** (B) API‑led divide integrações em System, Process e Experience APIs para promover reutilização, desacoplamento entre canais e sistemas e melhor governança, em vez de criar uma única API monolítica.

**10.** (B) A visão Salesforce é que IA (por exemplo, Einstein) sugere a próxima melhor ação, enquanto flows, orquestrações e integrações executam automaticamente os próximos passos recomendados.

---

**11.** (B) MuleSoft Composer é justamente a ferramenta no‑code, com interface visual, para automatizar integrações entre sistemas como Salesforce, Google Sheets, Workday etc., sem necessidade de código.

**12.** (C) “Connection” em Composer representa o conjunto de credenciais, URL e configuração de acesso a um sistema, sendo reutilizada por triggers e actions daquele sistema.

**13.** (B) Todo fluxo em Composer começa escolhendo um trigger (por exemplo, “When a record is created in Salesforce”) que define o evento inicial a partir de uma conexão.

**14.** (C) Para rodar a cada 15 minutos sem depender de evento, usa‑se um trigger do tipo “schedule” (agendamento) como início do fluxo, em vez de um evento de registro.

**15.** (B) O uso de sample data no Composer serve para testar visualmente cada passo com dados reais/representativos enquanto você constrói o fluxo, permitindo ajustes antes da ativação em produção.

**16.** (B) As boas práticas indicam testar o fluxo em um registro (ou cenário controlado) antes de ativar, validando se as ações e mapeamentos estão corretos, como descrito no passo de “Test your flow on one record”.

**17.** (A) A página de detalhes do fluxo em Composer é onde você acompanha execuções, histórico e erros, sendo a primeira parada para investigação quando algo não está funcionando.[](https://docs.mulesoft.com/composer/ms_composer_overview)​

**18.** (B) A home do Composer oferece “Templates” pré‑construídos justamente para iniciar integrações comuns mais rápido, bastando ajustar conexões e detalhes.

**19.** (B) A seção “Usage Summary” exibe tarefas mensais e uso de créditos por fluxo/organização, ajudando a monitorar consumo e capacidade de automação.[](https://docs.mulesoft.com/composer/ms_composer_overview)​

**20.** (B) A prática eficiente é processar apenas registros novos ou alterados desde a última execução (incremental), evitando varrer todo o volume e reduzindo carga em origem e destino.

**21.** (B) Composer pode mandar notificações de erro por e‑mail configurado, de forma que o time não dependa só de olhar a tela de Flow Details manualmente.

**22.** (B) Para sincronização bidirecional, é necessário no mínimo um fluxo indo do Org A para o Org B e outro do Org B para o Org A, garantindo que mudanças em qualquer lado sejam refletidas no outro.

**23.** (C) Em testes, tanto o trigger quanto todas as actions que tocam Salesforce devem apontar para sandboxes, para não afetar dados de produção enquanto você valida o fluxo.

**24.** (B) Para criar um novo fluxo do zero, você vai à seção “Flows” e escolhe “Create new flow”, conforme descrito na documentação e nos módulos de Trailhead.

**25.** (B) A própria documentação ressalta que Composer ajuda a “quebrar” a complexidade, permitindo que você itere e ajuste o fluxo passo a passo, com feedback imediato de dados, enquanto descobre novos casos de uso.

---

**26.** (B) Flow Orchestration foi criada justamente para montar processos multi‑etapas com Stages e Steps, unindo ações automáticas e interações de usuários em um só artefato.[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​​

**27.** (A) Quando o usuário precisa passar por telas, tomar decisões e ver instruções passo a passo, o tipo mais adequado é Screen Flow.

**28.** (B) Para atualizar campos calculados antes de gravar o registro, usa‑se um Record‑Triggered Flow configurado para “before save”, que roda na transação de gravação.

**29.** (B) Debug em Flow Builder mostra para cada elemento quais foram os inputs, outputs e possíveis falhas, enquanto Run apenas executa o fluxo de ponta a ponta sem esse nível de detalhe.

**30.** (A) Interactive Steps em Flow Orchestration servem justamente para “parar” a orquestração em pontos onde um usuário precisa completar uma tarefa antes de seguir para o próximo passo.​[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​

**31.** (B) Subflows permitem encapsular lógica comum (por exemplo, validações, atualizações padrão) que pode ser chamada por diversos flows, aumentando a reutilização e facilitando manutenção.

**32.** (B) Schedule‑Triggered Flows são o tipo adequado quando o requisito é execução em lote e em horário fixo (por exemplo, diariamente às 23h).

**33.** (C) A recomendação oficial atual é usar Salesforce Flow (Flow Builder) como tecnologia declarativa padrão, em vez de criar novas automações com Workflow Rules ou Process Builder.

**34.** (B) Ao usar Run/Debug no Flow Builder, você executa a versão mais recente salva (mesmo não ativa), o que é útil para testar mudanças antes de publicá‑las para todos.

**35.** (A) Interactive Steps de uma Orchestration foram pensados para encaixar exatamente esse tipo de “parada” com análise humana, entre blocos de automação de back‑end.[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​​

**36.** (B) External Services usa especificações OpenAPI importadas, combinadas com Named Credentials, para registrar serviços externos e expô‑los como ações invocáveis em Flow Builder.

**37.** (B) Para coordenar vários flows e interações humanas ao longo de dias, com SLAs e dependências entre etapas, Flow Orchestration é a ferramenta certa, pois oferece estágios sequenciais e controle de avanço.​[](https://trailhead.salesforce.com/content/learn/modules/orchestrator-basics/get-to-know-orchestrator)​

**38.** (B) A prática segura é clonar o fluxo para um sandbox, reproduzir o cenário usando Debug e só depois ajustar e implantar em produção, evitando impactos diretos nos usuários.

**39.** (B) Separar a lógica em Screen Flows (UI), autolaunched flows (negócio) e APIs (integração) cria camadas reutilizáveis e menos acopladas, facilitando evolução e testes.

**40.** (B) Run executa o fluxo “normalmente” para ver o comportamento final; Debug adiciona rastreamento detalhado de cada elemento para ajudar na identificação de problemas.

---

**41.** (B) Quando não há API, MuleSoft RPA é ideal para interagir com a tela do sistema legado, e Composer pode orquestrar essas chamadas junto com Salesforce, mantendo o processo integrado de ponta a ponta.

**42.** (C) O RPA Recorder captura automaticamente informações dos elementos de interface (botões, campos, etc.), que depois são usadas para reproduzir as ações do usuário com precisão.

**43.** (C) Em API‑led, a boa prática é começar pela definição da especificação RAML/contrato no Design Center, para depois gerar o projeto e implementação, garantindo primeiro o contrato.[](https://onlineitguru.com/blog/mulesoft-composer)​

**44.** (C) MUnit é o framework de testes automatizados de MuleSoft, integrado ao Anypoint Studio/Platform, usado para criar suites de teste de APIs e integrações.

**45.** (C) Runtime Fabric sobre infraestrutura AWS permite escalar horizontal/verticalmente e orquestrar implantações com alta disponibilidade e zero downtime, alinhando‑se ao requisito dado.

**46.** (B) A recomendação é baixar o analysis package do RPA Manager, voltar o processo para fase de Build, importar o pacote no RPA Builder e depurar ali, com logs ricos e capacidade de ajuste.

**47.** (B) O padrão API‑led sugeriria System APIs para Cliente/Fidelidade, um Process API que combine esses dados e um Experience API específico para o caso de uso de marketing.

**48.** (C) Experience APIs são tipicamente responsáveis por servir canais finais (mobile, web, etc.), reaproveitando capacidades das Process/System APIs subjacentes.

**49.** (B) RPA faz mais sentido quando não há API ou acesso direto a dados, mas existe uma interface de usuário estável sobre a qual o robô pode operar.

**50.** (B) O Composer é posicionado como ferramenta para admins e analistas de negócio criarem integrações SaaS a SaaS com interface declarativa, sem precisar de desenvolvimento de baixo nível.

**51.** (C) O primeiro job roda de 10h às 11h; como o intervalo é de 45 minutos **após** o término, a segunda execução começa às 11h45, não às 10h45.

**52.** (C) API Manager é o componente focado em gerenciar APIs: aplicar políticas de segurança, controlar SLAs, analisar uso e monitorar chamadas.

**53.** (B) Anypoint Exchange é o catálogo de ativos reutilizáveis (specs, templates, conectores) para que outros times possam descobrir e consumir integrações e APIs.

**54.** (C) Governança de APIs envolve definir padrões de autenticação/autorização, aplicar políticas (limites, segurança) e monitorar consumo e performance via API Manager.

**55.** (B) A estratégia correta é combinar controle de acesso em Salesforce (perfis/permission sets), restringir quem pode configurar conexões do Composer e usar governança de acesso no RPA Manager.

**56.** (B) Process APIs encapsulam lógica de negócio e compõem dados de múltiplas System APIs, reduzindo o acoplamento entre front‑ends (Experience APIs) e os sistemas de backend.

**57.** (B) Composer é mais indicado para integrações SaaS a SaaS relativamente simples, com forte foco em velocidade de entrega e “cliques, não código”; integrações muito complexas tendem a ir para Anypoint completo.

**58.** (B) O desenho recomendado é Composer orquestrar o fluxo, chamando RPA para o sistema legado, atualizando Salesforce e disparando notificações em Slack, compondo várias tecnologias numa única automação.

**59.** (B) Métricas de maturidade em hyperautomation olham para redução de tempo de ciclo, diminuição de erros manuais, aumento de throughput e satisfação de usuários, não para contagem de objetos ou triggers.

**60.** (B) Sessões de “process discovery” e mapeamento de jornadas ponta a ponta ajudam a identificar processos com maior impacto e alinhar as próximas ondas de automação com o roadmap de APIs, flows, Composer e RPA