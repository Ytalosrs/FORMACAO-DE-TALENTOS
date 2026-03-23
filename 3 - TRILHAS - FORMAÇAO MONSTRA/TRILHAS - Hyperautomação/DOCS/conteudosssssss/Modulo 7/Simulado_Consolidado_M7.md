# 🎓 Simulado Consolidado: Módulo 7
## Anypoint Exchange: Reutilização, Catálogo e Colaboração (MuleSoft + Salesforce)

Este documento reúne as 45 questões das Provas 1, 2 e 3 do Módulo 7, consolidadas para facilitar o estudo. Cada questão apresenta a resposta correta e uma breve explicação fundamentada nas melhores práticas de hiperautomação e Anypoint Platform.

---

### **Questões de 1 a 15 (Foco: Fundamentos do Anypoint Exchange)**

**1. AnyAirlines quer evitar que cada equipe crie integrações duplicadas para o mesmo sistema. Qual papel o Anypoint Exchange desempenha nisso?**
A. IDE para desenvolvimento de fluxos Mule  
B. Catálogo central de ativos reutilizáveis (APIs, conectores, templates, fragmentos, RPA)  
C. Ferramenta de deploy on‑premises  
D. Console de RPA  
**Resposta correta: B**  
**Por que:** O Exchange funciona como um marketplace interno (ou público) onde todos os ativos de integração são catalogados para promover a descoberta e reutilização.

**2. Northern Trail Outfitters (NTO) quer publicar especificações de APIs para que Salesforce Flow possa consumi‑las via External Services. Que tipo de ativo deve ser publicado?**
A. API Specification (RAML/OAS)  
B. Apenas API Fragments  
C. Apenas Connectors  
D. Apenas Templates  
**Resposta correta: A**  
**Por que:** O Salesforce Flow consome especificações de API (como OAS/Swagger) para gerar automaticamente ações via External Services.

**3. Um desenvolvedor de Flow precisa entender quais parâmetros uma API de RH MuleSoft exige. Qual é o primeiro passo recomendado?**
A. Ver código fonte da aplicação Mule  
B. Consultar o Anypoint Exchange e revisar documentação/console interativo da API  
C. Perguntar por e‑mail ao time de integração  
D. Acessar diretamente o banco de dados  
**Resposta correta: B**  
**Por que:** O Exchange é a "fonte de verdade" para documentação de consumo, permitindo que desenvolvedores entendam o contrato sem ler código.

**4. Um cenário descreve que uma organização quer compartilhar conectores, templates e fragmentos entre times internos apenas. Qual tipo de Exchange deve ser usado?**
A. Exchange público apenas  
B. Exchange privado da organização  
C. GitHub público  
D. File server compartilhado  
**Resposta correta: B**  
**Por que:** Cada organização possui seu Exchange privado, garantindo que ativos internos sensíveis não sejam expostos ao público.

**5. Uma API é publicada no Exchange com sua especificação. O que o Exchange oferece automaticamente para ajudar consumidores?**
A. Apenas download de um PDF  
B. Console interativo para testar chamadas e documentação navegável  
C. Apenas logs da API  
D. Relatórios financeiros  
**Resposta correta: B**  
**Por que:** O Exchange gera automaticamente um portal interativo (API Portal) com console de teste e documentação baseada na especificação (RAML/OAS).

**6. NTO quer reutilizar um modelo padrão de “Endereço” em várias APIs RAML. Que tipo de ativo é mais adequado?**
A. API Specification completa  
B. API Fragment (por exemplo, dataType de Endereço)  
C. Template de projeto  
D. RPA Asset  
**Resposta correta: B**  
**Por que:** API Fragments permitem extrair partes comuns de um RAML (como tipos de dados ou traits) para serem reutilizados em múltiplas especificações.

**7. Uma alternativa afirma que “Exchange armazena apenas APIs, não outros tipos de ativos”. Como isso deve ser avaliado?**
A. Correto  
B. Falso; Exchange também armazena conectores, templates, fragments, RPA assets, etc.  
C. Verdadeiro apenas on‑premises  
D. Verdadeiro apenas para contas gratuitas  
**Resposta correta: B**  
**Por que:** O Exchange é multiativo, suportando desde especificações de API até bots RPA e políticas customizadas.

**8. Uma empresa quer consumir conectores oficiais para SAP e Oracle desenvolvidos pela MuleSoft e parceiros. Onde esses ativos ficam disponíveis?**
A. Apenas em Runtime Manager  
B. No Anypoint Exchange público  
C. Apenas em Composer  
D. Apenas em RPA Manager  
**Resposta correta: B**  
**Por que:** A MuleSoft publica ativos oficiais e de parceiros no Exchange público para fácil acesso por todos os clientes.

**9. AnyAirlines deseja que os desenvolvedores vejam quais projetos dependem de um determinado fragmento RAML antes de modificá‑lo. Qual recurso do Exchange ajuda nisso?**
A. API Notebook  
B. Dependency tracking  
C. Visualizer  
D. RPA Dashboard  
**Resposta correta: B**  
**Por que:** O Exchange rastreia dependências, permitindo identificar o impacto de uma alteração em um fragmento ou especificação.

**10. Um item de prova descreve o Exchange como “primeira fonte de verdade” antes de criar qualquer nova integração. O que isso significa na prática?**
A. Sempre criar novas APIs sem olhar o catálogo  
B. Consultar Exchange para ver se já existem APIs/ativos reutilizáveis antes de desenvolver algo novo  
C. Usar Exchange apenas para documentação, nunca para reutilização  
D. Usar apenas RPA  
**Resposta correta: B**  
**Por que:** O objetivo é maximizar a reutilização e evitar o "retrabalho" de criar algo que já existe no ecossistema da empresa.

**11. NTO quer publicar um processo RPA já existente para que outras áreas saibam que ela pode ser reutilizada. Onde isso deve ser exposto?**
A. Apenas na wiki interna  
B. Como RPA Asset no Anypoint Exchange  
C. Apenas no RPA Manager  
D. Apenas em e‑mails  
**Resposta correta: B**  
**Por que:** Publicar o bot no Exchange aumenta sua visibilidade para times que não usam o RPA Manager diretamente (ex: times de MuleSoft ou Salesforce).

**12. Uma alternativa diz que “o Exchange não tem impacto na prova, pois é apenas uma loja visual”. Como o candidato deve responder?**
A. Concordar; não é relevante  
B. Discordar; Exchange é central para reutilização, Mocking Service e descoberta de ativos  
C. Depende do projeto  
D. Só vale para APIs públicas  
**Resposta correta: B**  
**Por que:** O Exchange é pilar fundamental do API-led Connectivity e da estratégia de autoatendimento (self-service).

**13. Um time quer utilizar um template pronto de integração “Salesforce ↔ SAP” fornecido pela MuleSoft. Onde esse template é encontrado?**
A. API Manager  
B. Anypoint Exchange (Templates)  
C. Runtime Manager  
D. RPA Manager  
**Resposta correta: B**  
**Por que:** Templates aceleram projetos fornecendo esqueletos de fluxos MuleSoft para casos de uso comuns.

**14. Uma questão contrasta duas opções:
- A) Publicar ativos no Exchange, com documentação e exemplos  
- B) Deixar apenas código em repositórios privados sem documentação  
Qual opção mais representa a estratégia MuleSoft?**
A. A  
B. B  
C. Ambas igualmente  
D. Nenhuma  
**Resposta correta: A**  
**Por que:** A estratégia foca na democratização da integração, onde ativos são fáceis de encontrar e entender por qualquer desenvolvedor.

**15. Uma alternativa diz: “Para maximizar reutilização, sempre crie novos ativos sem registrar dependências.” Por que isso é uma pegadinha?**
A. Porque Exchange não suporta dependências  
B. Porque ignorar dependências dificulta entendimento de impacto e governança  
C. Porque dependências são opcionais  
D. Porque só RPA usa dependências  
**Resposta correta: B**  
**Por que:** Sem rastreamento de dependências, a manutenção evolutiva torna-se perigosa, pois não se sabe quem será afetado por uma mudança.

---

### **Questões de 16 a 30 (Foco: Mocking Service, Portais e Descoberta)**

**16. AnyAirlines quer que a equipe de Salesforce Flow comece a integrar uma API de crédito antes que ela seja implementada de fato. O contrato RAML já existe. Qual recurso acelera isso?**
A. Deploy direto em produção  
B. Mocking Service do Exchange, expondo uma URL simulada  
C. Apenas testes manuais no Postman  
D. Logs locais  
**Resposta correta: B**  
**Por que:** O Mocking Service permite que consumidores testem contra uma API simulada baseada no contrato, permitindo o desenvolvimento em paralelo.

**17. Northern Trail Outfitters (NTO) quer que desenvolvedores externos testem uma API usando um console interativo e, depois, solicitem credenciais de acesso. Onde isso é configurado?**
A. Runtime Manager  
B. API Portal/Exchange com fluxo de “Request Access”  
C. Anypoint Studio  
D. Composer  
**Resposta correta: B**  
**Por que:** O API Portal centraliza a experiência do desenvolvedor (DX), oferecendo testes (console) e governança de acesso (request access).

**18. Um cenário descreve que o time de front‑end quer continuar testando contra mocks enquanto o backend evolui. Qual prática se encaixa melhor?**
A. Usar sempre o backend real  
B. Usar Mocking Service com dados de exemplo até o backend estar pronto  
C. Esperar o backend ficar pronto sem testar  
D. Usar apenas RPA  
**Resposta correta: B**  
**Por que:** Mocks desacoplam o cronograma de quem consome e de quem implementa a API.

**19. Uma alternativa diz que “Mocking Service não é adequado para cenários de hiperautomação”. Como isso deve ser avaliado?**
A. Correto  
B. Falso; é muito útil para permitir que Flow, Composer e RPA avancem em paralelo  
**Resposta correta: B**  
**Por que:** Em hiperautomação, agilidade é chave. Mocks permitem que automações no Salesforce/RPA sejam construídas enquanto a API MuleSoft ainda está no design.

**20. NTO quer separar o consumo interno e externo de uma API, mas manter a mesma especificação. O que o Exchange e API Manager podem oferecer?**
A. Nada; é preciso duplicar a API  
B. Mesmo contrato no Exchange, com diferentes políticas e portais por consumidor  
C. Apenas documentação estática  
D. Apenas logs  
**Resposta correta: B**  
**Por que:** Você pode publicar uma API e gerenciar diferentes instâncias e portais, garantindo visibilidade seletiva e políticas específicas por público.

**21. Um desenvolvedor Mule quer criar tutoriais interativos que executam chamadas reais de API dentro da documentação. Que recurso é citado no conteúdo do módulo?**
A. API Notebook  
B. Visualizer  
C. RPA Recorder  
D. Functional Monitoring  
**Resposta correta: A**  
**Por que:** O API Notebook é uma ferramenta JavaScript baseada em Markdown que permite documentar casos de uso com código executável.

**22. Uma empresa deseja que times de negócio possam navegar pelos ativos de integração (APIs, templates, RPA) e entender o que já existe antes de abrir novas demandas. Qual prática apoia isso?**
A. Manter tudo apenas em repositórios Git internos  
B. Publicar e manter ativos bem documentados no Exchange  
C. Enviar e‑mails com anexos de código  
D. Deixar a equipe de integração “lembrar de cabeça”  
**Resposta correta: B**  
**Por que:** O Exchange serve como o "Showroom" da TI para o negócio, promovendo a descoberta de capacidades existentes.

**23. AnyAirlines quer que consumidores externos solicitem acesso a uma API diretamente pela documentação e recebam um Client ID/Secret quando aprovados. Que fluxo é este?**
A. Provisionamento manual em Studio  
B. Fluxo de “Request Access” em um API Portal do Exchange  
C. Process Builder no Salesforce  
D. Apenas e‑mail manual  
**Resposta correta: B**  
**Por que:** O botão "Request Access" no Exchange inicia o fluxo de aprovação e geração de credenciais via API Manager.

**24. Uma alternativa sugere que “Mocking Service deve ser usado em produção para sempre, pois simplifica o backend”. Por que isso é uma pegadinha?**
A. Porque mocks nunca são permitidos  
B. Porque Mocking Service é para testes e desenvolvimento paralelo, não para substituir o backend em produção  
C. Porque só RPA usa mocks  
D. Porque Flow não funciona com mocks  
**Resposta correta: B**  
**Por que:** Mocks não possuem lógica de negócio real nem acesso a dados; são apenas para simulação de contrato durante o ciclo de vida de desenvolvimento.

**25. Em um cenário de prova, o candidato precisa identificar onde encontrar exemplos de requisição e resposta para uma API. Qual local é o mais esperado?**
A. Código fonte da API apenas  
B. Documentação e console interativo do asset no Exchange  
C. E‑mails antigos da equipe  
D. Logs de produção  
**Resposta correta: B**  
**Por que:** O Exchange exibe exemplos definidos no RAML/OAS, facilitando o entendimento do formato de dados esperado.

**26. NTO quer controlar quem pode ver determinados ativos sensíveis (por exemplo, APIs internas de finanças). Como o Exchange ajuda?**
A. Não ajuda; tudo é sempre público  
B. Permite configurar visibilidade e permissões de acesso a assets  
C. Somente API Manager faz isso  
D. Apenas logs controlam acesso  
**Resposta correta: B**  
**Por que:** É possível restringir a visibilidade de um ativo apenas a determinados grupos de usuários ou departamentos.

**27. Um time lança uma nova versão de uma API, mas quer manter a anterior para alguns consumidores. Como o Exchange contribui aqui?**
A. Não suporta versões  
B. Permite versionar assets e manter documentação de múltiplas versões  
C. Remove automaticamente versões antigas  
D. Só mostra a última versão  
**Resposta correta: B**  
**Por que:** O Exchange suporta versionamento semântico, permitindo que consumidores escolham qual versão do contrato desejam seguir.

**28. AnyAirlines quer registrar também templates e exemplos de integração de referência para que projetos futuros sejam acelerados. Como isso aparece no Exchange?**
A. Como APIs apenas  
B. Como Templates e Examples publicados como assets  
C. Como logs  
D. Como workers  
**Resposta correta: B**  
**Por que:** Além de APIs, o Exchange é o repositório para "Best Practices" em forma de código reutilizável (Templates/Examples).

**29. Uma alternativa afirma que “apenas APIs públicas da MuleSoft podem ser colocadas no Exchange; APIs internas da empresa não”. Como isso deve ser tratado?**
A. Correto  
B. Falso; organizações podem ter Exchanges privados com seus próprios assets internos  
**Resposta correta: B**  
**Por que:** A grande maioria dos ativos no Exchange são privados de cada cliente, visíveis apenas para seus colaboradores autorizados.

**30. Um time quer criar um portal de desenvolvedores para uma API específica, com branding, docs e botão de acesso. Qual combinação de recursos suporta isso?**
A. API Portal no Exchange + API Manager para controle de acesso  
B. Apenas Runtime Manager  
C. Apenas Anypoint Studio  
D. Apenas RPA Manager  
**Resposta correta: A**  
**Por que:** O Exchange fornece o portal visual, enquanto o API Manager governa as instâncias e permissões de acesso.

---

### **Questões de 31 a 45 (Foco: Estratégia de Reutilização e Pegadinhas)**

**31. AnyAirlines observa que, mesmo com Exchange, times ainda criam integrações duplicadas. Qual prática ajuda a mudar esse comportamento?**
A. Proibir o uso de Exchange  
B. Tornar Exchange parte obrigatória do processo: sempre buscar antes de construir  
C. Usar apenas documentação em PDF  
D. Manter apenas comunicação verbal  
**Resposta correta: B**  
**Por que:** A governança deve incentivar a cultura de "Consumir primeiro, Construir depois".

**32. Uma alternativa sugere usar sempre código novo em cada projeto, para que times “não fiquem dependentes” de assets comuns. Por que isso contraria a visão MuleSoft?**
A. Porque código novo é sempre mais lento  
B. Porque MuleSoft valoriza reutilização, contratos bem definidos e catálogo central em vez de duplicação  
**Resposta correta: B**  
**Por que:** Duplicação gera dívida técnica e fragmentação da arquitetura. Ativos comuns bem governados geram escala.

**33. NTO quer garantir que todos os projetos usem um modelo único de “Cliente” em RAML. Qual combinação é mais alinhada?**
A. Criar o tipo “Cliente” em cada API individual  
B. Criar um API Fragment com tipo “Cliente” e referenciá‑lo em múltiplas APIs  
C. Definir apenas em documentação externa  
D. Definir em banco de dados  
**Resposta correta: B**  
**Por que:** Fragmentos garantem consistência semântica entre todas as APIs da organização.

**34. Uma questão apresenta duas opções:
- A) Reutilizar uma API existente, ajustando apenas a Experience API
- B) Criar uma nova System API com mesma funcionalidade
Qual opção tipicamente representa uma pegadinha?**
A. A  
B. B  
C. Ambas  
D. Nenhuma  
**Resposta correta: B**  
**Por que:** Criar uma nova System API quando já existe uma que acessa o mesmo dado é um erro clássico de design que gera duplicação desnecessária.

**35. AnyAirlines quer que novos desenvolvedores aprendam rapidamente como usar uma API interna, sem precisar falar com o time original. Qual recurso do Exchange ajuda?**
A. Apenas logs de execução  
B. Documentação gerada automaticamente + exemplos + API Notebook  
**Resposta correta: B**  
**Por que:** Bons ativos no Exchange são "autoexplicativos", reduzindo o tempo de onboarding e dependência de especialistas.

**36. Uma alternativa sugere que processos RPA não precisam aparecer no Exchange, pois “não são APIs”. Como o conteúdo do módulo contradiz isso?**
A. RPA não é citado no módulo  
B. RPA Assets podem ser publicados no Exchange para promover visibilidade e reutilização  
**Resposta correta: B**  
**Por que:** O Exchange é para a Hiperautomação completa, unindo o mundo das APIs (MuleSoft) e dos Bots (RPA).

**37. NTO planeja deletar um fragmento RAML antigo sem verificar dependências. Que risco a prova quer que você reconheça?**
A. Nenhum; fragments não são usados em produção  
B. APIs que dependem desse fragmento podem quebrar, e por isso é importante checar “Dependencies” no Exchange  
**Resposta correta: B**  
**Por que:** Deletar um fragmento quebra a compilação de todas as especificações que o importam.

**38. Uma questão afirma que “antes de criar uma nova API, o time deve sempre verificar o Exchange por assets existentes”. Que conceito isso reforça?**
A. Acoplamento forte  
B. Reutilização e cultura de catálogo  
C. Enfoque apenas em código  
D. Rejeição a padrões  
**Resposta correta: B**  
**Por que:** Reforça a mentalidade de "API-as-a-Product", onde o valor está na utilidade e reutilização da API.

**39. AnyAirlines quer controlar quais times podem publicar novos assets no Exchange e quem pode apenas consumir. Onde esse controle é configurado?**
A. Somente em API Manager  
B. Em permissões e papéis da organização no Anypoint Platform/Exchange  
**Resposta correta: B**  
**Por que:** O Access Management da Anypoint Platform define quem tem permissão de "Contributor" ou apenas "Viewer" no Exchange.

**40. Uma alternativa diz: “Para ganhar tempo de prova, é melhor ignorar o Exchange e sempre assumir que precisamos construir algo novo”. Como isso deve ser tratado?**
A. Às vezes correto  
B. Como pegadinha; a prova frequentemente espera que você procure reutilizar assets existentes  
**Resposta correta: B**  
**Por que:** Em exames MuleSoft, a resposta que promove reutilização e governança centralizada é quase sempre a correta.

**41. NTO quer padronizar políticas de segurança para todas as APIs de um domínio. Como o Exchange pode ajudar indiretamente?**
A. Guardando apenas logs  
B. Servindo como lugar único onde APIs e seus contratos são documentados e descobertos, facilitando aplicação consistente de políticas  
**Resposta correta: B**  
**Por que:** Se todas as APIs estão no Exchange, o arquiteto de segurança pode garantir que cada uma delas tenha uma instância correspondente no API Manager com as políticas corretas.

**42. Uma alternativa sugere que “usar Exchange é opcional e não traz benefícios claros”. Baseado no módulo, qual resposta é mais alinhada?**
A. Concordar; é apenas uma vitrine  
B. Discordar; Exchange é peça chave para reutilização, descoberta, mock, dependências e portais  
**Resposta correta: B**  
**Por que:** Sem o Exchange, a arquitetura API-led perde sua capacidade de escala e autoatendimento.

**43. AnyAirlines quer compartilhar, com equipes de front‑end, exemplos de chamadas de APIs que serão usadas em Flutter e React. Qual é o melhor local?**
A. Anypoint Exchange, na documentação e exemplos do asset correspondente  
B. E‑mails avulsos  
**Resposta correta: A**  
**Por que:** Centralizar exemplos no Exchange garante que todos os consumidores usem a mesma referência atualizada.

**44. Uma questão mostra que, mesmo havendo uma API pronta no Exchange, a equipe escolhe criar outra idêntica por desconhecimento. O que isso indica do ponto de vista da prova?**
A. Arquitetura madura  
B. Falta de cultura de catálogo e reutilização  
**Resposta correta: B**  
**Por que:** A duplicação por desconhecimento é o principal sintoma de uma governança de catálogo ineficaz.

**45. Uma alternativa final afirma: “O Exchange é apenas para mostrar APIs para times externos, não tem valor para times internos”. Como o candidato deve responder?**
A. Concordar  
B. Discordar; times internos são os maiores beneficiados com catálogo, mocks, templates e fragmentos  
**Resposta correta: B**  
**Por que:** O maior valor do Exchange é acelerar o desenvolvimento interno através da reutilização de componentes pré-testados e documentados.
