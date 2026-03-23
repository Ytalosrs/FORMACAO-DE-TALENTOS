# 💻 Instalação e Dependências do Projeto

Como este projeto é construído com **Node.js (Next.js)**, ele **não utiliza** um arquivo `requirements.txt` (que é o padrão para projetos em **Python**).  
No Node.js, o equivalente é o arquivo **`package.json`**.

Para baixar as dependências em outro computador, você só precisa copiar o arquivo `package.json` e rodar um comando.

---

## 📋 O que equivale ao `requirements.txt` aqui

O arquivo **`package.json`** já lista tudo o que o sistema precisa:

- **Next.js** — Framework principal  
- **Prisma** — Gerenciador do banco de dados  
- **React** — Biblioteca de interface  
- **LocalTunnel** — Ferramenta de túnel  
- **TailwindCSS** — Estilização

---

## 🚀 Como instalar em outro PC

Se você copiar a pasta do projeto para outro computador (sem a pasta `node_modules`), siga estes passos:

1. **Instale o Node.js**  
   Certifique-se de que o outro PC tem o Node.js instalado  
   _(recomendo a versão 20 ou superior)._

2. **Abra o terminal na pasta do projeto**

3. **Rode o comando mágico:**

   ```bash
   npm install

   Esse comando lê o seu package.json e baixa automaticamente todas as bibliotecas necessárias.

4. **Prepare o Banco de Dados (Prisma):**

   ```bash
   npx prisma generate
