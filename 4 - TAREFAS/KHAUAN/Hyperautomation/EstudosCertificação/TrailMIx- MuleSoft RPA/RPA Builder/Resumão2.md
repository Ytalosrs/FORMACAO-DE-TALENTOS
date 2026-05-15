## 1. Fundamentos do MuleSoft RPA Builder

Os textos explicam que o RPA Builder é um IDE visual de “programação em blocos”: você arrasta componentes da Toolbox para montar o workflow, e cada bloco gera o código que o bot executa (clicar em UI, abrir programas, mexer em arquivos, chamar APIs etc.).​

Para usar, é preciso:

- Licença de MuleSoft RPA
    
- Acesso ao RPA Manager
    
- Permissão específica de RPA Builder no RPA Manager (MuleSoft RPA Builder assignment)
    
- Uma máquina Windows com o Builder instalado​
    

O desenvolvimento começa a partir do BPMN criado no RPA Manager: o Builder importa esse diagrama (com Bot Tasks, User Tasks e documentação vinda do Recorder, se houver), permite ajustes e depois envia a versão final de volta para o Manager. Também é possível exportar/importar arquivos CRPA como backup.​

A Toolbox oferece módulos para:

- Interagir com desktop Windows
    
- Fazer Image Search / OCR
    
- Trabalhar com variáveis e credenciais
    
- Acessar Excel, arquivos, email, REST
    
- Controlar fluxo (gateways, loops) e tratamento de erro​
    

Os action steps são as “folhas” do workflow, cada um representando uma única ação (localizar imagem, executar programa, enviar teclas, etc.), com tela de configuração própria.​

---

## 2. Gravador (Recorder) e refinamento dos passos

O Recorder gera automaticamente um workflow funcional para cada Bot Task, com blocos como App Session, Keystrokes to App Element, Click App Element e Transaction block, a partir das interações gravadas na tela.​

Esses passos vêm com:

- Coordenadas de tela
    
- Metadados da aplicação
    
- Screenshots
    
- Valores digitados (URL, usuário, senha etc.)​
    

Mas esse “rascunho” tem limitações:

- Usa coordenadas absolutas e imagens da máquina de gravação, então tende a quebrar em outras resoluções ou configurações de fonte.
    
- Image Search pode falhar por pequenas diferenças de pixel; afrouxar demais a precisão gera falsos positivos.​
    

Por isso, a boa prática é:

- Substituir sequências longas de Keystrokes por ações mais diretas (ex.: um único Run Program em vez de várias teclas para abrir navegador anônimo).
    
- Limpar erros de digitação gravados e implementar a intenção da forma mais simples.
    
- Usar o recurso de **Disable** em vez de apagar passos autogerados, mantendo-os como “código comentado” para documentação durante o desenvolvimento.​
    

Cada Bot Task pode ser testado isoladamente via botão Run no Workbench, e é recomendado testar sempre que houver mudança, mesmo se planejar refinar os passos depois.​

---

## 3. Interações dinâmicas com GUI (Image Search, âncoras, dropdowns)

Um conjunto de notas é dedicado a fazer o bot lidar bem com interfaces dinâmicas: páginas que carregam, listas, dropdowns e múltiplos botões iguais.​

Pontos principais:

- Em vez de depender de coordenadas fixas da tela, combina-se Image Search com áreas de busca dinâmicas (anchor points) e Mouse Actions.​
    
- Uma primeira Image Search encontra um elemento “âncora”; a partir da posição encontrada, a próxima busca fica restrita a uma área relativa a esse ponto, não mais à tela inteira.​
    
- Isso melhora desempenho e ajuda a escolher o elemento certo quando há vários iguais (por exemplo, vários botões “Open” em uma lista – o bot consegue clicar no da linha correta).​
    

Para garantir que a navegação deu certo:

- Depois de clicar em links/botões, o bot faz uma nova Image Search para achar um texto/imagem que identifique a nova página.
    
- Se encontrar, confirma que a página carregou; se não, lança erro ali, em vez de “andar mais” e quebrar na frente.​
    

Para dropdowns:

- Encontrar o dropdown com Image Search
    
- Abrir com Mouse Actions
    
- Localizar a opção dentro da lista com outra Image Search, limitada à área certa
    
- Clicar na opção desejada​
    

Isso deixa o bot mais robusto em UIs que mudam layout e posição de elementos.

---

## 4. Buscas dinâmicas com OCR + parâmetros + atalhos

Outro tópico mostra como o bot pode procurar texto dinâmico na tela usando parâmetros de atividade, OCR e atalhos de teclado, em vez de imagens fixas.​

Ideia geral:

- O workflow recebe parâmetros de atividade com valores dinâmicos (ex.: nome de um evento, palavra-chave).​
    
- Em vez de buscar uma imagem estática, o bot usa OCR para localizar texto que muda conforme o parâmetro (por exemplo, hoje “Composer”, amanhã “DataWeave”).​
    

Sobre OCR:

- OCR lê o texto da tela e gera uma lista de palavras com suas coordenadas.
    
- O passo de ação OCR permite procurar uma string (inclusive vinda de parâmetro) dentro dessa lista e retorna a posição do texto, que pode ser usada como âncora para cliques e outras ações.​
    

Quando usar o quê:

- **Image Search**: para elementos estáticos (ícones, labels fixos) com imagem de referência.​
    
- **OCR**: para textos dinâmicos que mudam constantemente, aceitando texto parametrizado.​
    

Teclas:

- **Keystrokes** é indicado para atalhos especiais (Ctrl+F, Ctrl+S etc.), porque você grava as combinações e define a janela-alvo.
    
- **Enter String** é recomendado para digitar texto normal em campos.​
    

Exemplo típico:

1. Bot entra em uma página com vários eventos.
    
2. Envia Ctrl+F via Keystrokes para abrir a busca do navegador e garantir visibilidade do texto.
    
3. Usa OCR com Search mode = Fuzzy Comparison e Search text ligado ao parâmetro para achar as coordenadas do título do evento.
    
4. Usa essa posição como âncora para clicar, por exemplo, no botão RSVP correspondente.​
    

---

## 5. Activity parameters (parâmetros de atividade) e contas de usuário

Os arquivos enfatizam activity parameters como “variáveis globais/configuráveis” do processo.[](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/154956892/ec559e43-3dab-47a1-9e32-5b31609d0fcd/Parte-4.md)

Eles servem para:

- Guardar credenciais, strings, números, coordenadas de tela e outros valores reutilizados em vários pontos do fluxo.
    
- Evitar hard code no workflow, facilitando manutenção e reduzindo chance de erro ao trocar valores.[](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/154956892/95c01d89-d37e-4a82-b73e-ce4eaf427afe/Parte-2.md)
    

Onde criar e configurar:

- No RPA Builder, via menu **Business Process Initialization (BPI)** → aba **Activity Parameters**, onde se criam parâmetros e definem valores padrão.
    
- Esses valores padrão servem tanto para testes locais quanto para execução, caso não sejam sobrescritos.[](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/154956892/ec559e43-3dab-47a1-9e32-5b31609d0fcd/Parte-4.md)
    

Onde alterar valores:

- No próprio BPI (default/base do processo).
    
- Em **User Tasks**, **Test Plan** e **Production Configuration**, que permitem sobrescrever valores por ambiente ou em tempo de execução.[](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/154956892/95c01d89-d37e-4a82-b73e-ce4eaf427afe/Parte-2.md)
    

Benefícios:

- O mesmo processo roda para usuários ou sistemas diferentes trocando apenas parâmetros (por exemplo, credenciais), sem mexer na lógica do workflow.[](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/154956892/ec559e43-3dab-47a1-9e32-5b31609d0fcd/Parte-4.md)
    
- Melhora segurança e governança: desenvolve com contas/sistemas de teste e depois só ajusta parâmetros para produção.[](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/154956892/95c01d89-d37e-4a82-b73e-ce4eaf427afe/Parte-2.md)
    

## Parâmetro de conta de usuário (user account) e logins seguros

Para logins, em vez de passar usuário/senha como texto puro, recomenda-se usar um activity parameter do tipo **user account**, que guarda username + password criptografado e mascarado.​

- O passo **User Account Decrypter** descriptografa esses dados dentro do workflow, expondo-os apenas para as ações que vão digitar login/senha (Enter String, Keystrokes etc.).​
    

Boas práticas:

- Limpar os campos antes de digitar (pois podem estar preenchidos) via clique + Delete/Backspace ou loop de Backspace.
    
- Navegar via Tab entre campos é possível, mas menos estável entre máquinas; costuma ser mais confiável clicar diretamente em labels/campos com Image Search/Search Pattern.​
    

Limitações:

- Captchas e “prove you’re human” geralmente tornam o login um péssimo candidato a RPA.
    
- OAuth e MFA até podem ser automatizados, mas exigem soluções mais complexas, além do escopo básico descrito.​
    

---

## 6. Fluxo condicional e tratamento de erro com Managed Block

Por fim, há um tópico sobre testes condicionais e tratamento de erros usando **Set Variable**, gateways e **Managed Block**.​

Ideia:

- Um activity parameter guarda o “estado” (por exemplo, se precisa ou não fazer RSVP).
    
- O passo **Set Variable** altera esse parâmetro em tempo de execução.
    
- Um **Exclusive Gateway** lê o valor e decide qual caminho seguir (executar passos de RSVP ou pular direto para limpeza).​
    

Managed Block:

- Funciona como um Try/Catch/Finally, com três seções: **DoAction**, **OnError**, **DoAlways**.​
    
    - DoAction: ações normais. Se algo falhar, pula direto para OnError.
        
    - OnError: geralmente faz Set Variable para sinalizar erro/estado alternativo.
        
    - DoAlways: sempre executa, com ou sem erro, ideal para cleanup (fechar janelas, deslogar, etc.).​
        

No caso de uso de RSVP:

- O Managed Block verifica se o texto “Un-RSVP” está na página (indicando que o usuário já está inscrito no evento).
    
- Dependendo de encontrar ou não o texto, o fluxo atualiza o activity parameter via Set Variable.
    
- O Exclusive Gateway então decide: cancelar um RSVP existente, manter como está ou fazer um novo RSVP e adicionar ao calendário.​