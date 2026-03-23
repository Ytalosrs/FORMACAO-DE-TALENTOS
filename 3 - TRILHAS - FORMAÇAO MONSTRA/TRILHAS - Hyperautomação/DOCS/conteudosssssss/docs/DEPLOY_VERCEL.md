# Guia de Deploy no Vercel

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository" ou "Novo repositório"
3. Nome do repositório: `sistema-provas-mulesoft`
4. Descrição: `Sistema de provas MuleSoft/Hiperautomação com Supabase`
5. Deixe como público
6. Não inicialize com README (já temos um)
7. Clique em "Create repository"

## Passo 2: Conectar seu código local ao GitHub

No terminal, execute:

```bash
git remote add origin https://github.com/victorhugosdj/sistema-provas-mulesoft.git
git branch -M main
git push -u origin main
```

## Passo 3: Configurar Banco de Dados no Supabase

Antes do deploy, garanta que seu banco de dados está configurado:

1. Acesse seu projeto no Supabase.
2. Vá em **SQL Editor**.
3. Execute o conteúdo dos arquivos na pasta `sql/`:
   - `sql/supabase_schema.sql` (Cria as tabelas e triggers)
   - `sql/supabase_policies.sql` (Configura as permissões de acesso)

## Passo 4: Fazer Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta do GitHub
3. Clique em "New Project" ou "Novo Projeto"
4. Importe o repositório `sistema-provas-mulesoft`
5. Configure as variáveis de ambiente (Opcional - via Query String):
   - Você pode passar as credenciais na URL: `?supabaseUrl=SUA_URL&supabaseKey=SUA_KEY`
   - Ou editar o arquivo `src/supabase-config.js` com suas credenciais antes do push.

## URLs de Acesso

Após o deploy, seu sistema estará disponível em:
- URL padrão: `https://sistema-provas-mulesoft.vercel.app`
- Acesso com credenciais: `https://sistema-provas-mulesoft.vercel.app?supabaseUrl=URL&supabaseKey=KEY`

## Arquivos Importantes (Nova Estrutura)

- `index.html`: Página principal (Raiz)
- `src/app.js`: Lógica da aplicação (Refatorado)
- `src/questions-data.js`: Banco de questões centralizado
- `src/supabase-config.js`: Configuração do Supabase
- `sql/`: Scripts de banco de dados
- `vercel.json`: Configuração do deploy

## Suporte

Se encontrar problemas:
1. Verifique as variáveis de ambiente no Vercel
2. Confirme as credenciais do Supabase
3. Teste localmente antes do deploy
4. Use o console do navegador para debug