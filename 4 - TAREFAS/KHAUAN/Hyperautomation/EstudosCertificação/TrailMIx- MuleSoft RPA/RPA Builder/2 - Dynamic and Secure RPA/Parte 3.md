Esse tópico ensina a automatizar logins sem expor usuário e senha, usando parâmetros de conta de usuário, decriptação segura e boas práticas ao preencher formulários.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​

## Conceito principal

- Em vez de passar usuário e senha como parâmetros alfanuméricos simples (texto puro), você usa um parâmetro de atividade do tipo **user account**, que já guarda o password criptografado e mascarado na tela.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Depois, usa o passo User Account Decrypter para descriptografar esses campos dentro do workflow e conseguir digitar login e senha na tela de forma segura.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## User account parameter e decrypter

- O user account activity parameter tem dois valores: username e password; o password fica criptografado e só aparece mascarado quando alguém preenche.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- O User Account Decrypter recebe esse parâmetro e expõe username e password às ações (Enter String, Keystrokes, etc.) apenas dentro da execução do bot.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Boas práticas nos campos de login

- Limpar os campos antes de digitar é recomendado, já que podem vir pré-preenchidos; isso pode envolver clique no campo (Image Search/Search Pattern) e apagar o texto com Delete/Backspace ou loop de Backspace se necessário.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- Navegar por Tab entre campos é possível, mas menos estável entre máquinas; muitas vezes é mais confiável clicar diretamente no label ou no campo de cada elemento com buscas de imagem/padrão.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    

## Limitações e decisões de automação

- Captcha e “prove you’re human” são grandes bloqueios para automatizar login; se o processo sempre passa por isso, pode não ser um bom candidato para RPA.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​
    
- OAuth e MFA podem ser automatizados, mas exigem soluções mais complexas e não são tratados em detalhe neste módulo.[](https://trailhead.salesforce.com/pt-BR/content/learn/modules/dynamic-and-secure-mulesoft-rpa-process-implementation/automate-secure-logins-using-an-rpa-process?trail_id=get-started-with-mulesoft-rpa-builder)​