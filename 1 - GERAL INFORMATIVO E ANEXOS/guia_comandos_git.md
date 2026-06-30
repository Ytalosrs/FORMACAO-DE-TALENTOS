# 🛠️ Guia de Comandos Git - Formação de Talentos

Criar uma **branch** (ramo) é como criar uma linha do tempo alternativa para o seu projeto: você pode testar coisas novas sem estragar o que já está funcionando na linha principal.

---

### 1. Criar e entrar na branch (O mais usado)

Este comando cria a branch e já muda o seu terminal para dentro dela.

```bash
git checkout -b nome-da-sua-branch

```

> **Dica:** Em versões mais recentes do Git, você também pode usar `git switch -c nome-da-branch`.

---

### 2. O modo "passo a passo"

Se preferir fazer uma coisa de cada vez:

1. **Cria a branch:**
```bash
git branch nome-da-sua-branch

```


2. **Entra nela:**
```bash
git checkout nome-da-sua-branch

```



---

### 3. Enviando a nova branch para o GitHub

Depois de criar a branch e fazer seus commits, o GitHub ainda não saberá que ela existe. Para "empurrar" a branch nova pela primeira vez, use:

```bash
git push -u origin nome-da-sua-branch

```

O parâmetro `-u` serve para que o Git lembre que essa branch local está conectada àquela que você acabou de criar no servidor.

---

### 🚀 Rotina de Trabalho e Boas Práticas

Na **Fábrica de Monstros**, seguimos regras específicas para manter a colaboração eficiente:

#### 📍 Regras de Branch e Commit

* **Atenção:** Commits devem ser feitos **apenas** em sua branch pessoal (ex: `nome-membro/3-PROJETOS`) e nunca diretamente na branch principal (`main` ou `master`).
* **Verificação:** Use sempre `git branch` para identificar em qual ramo você está (ele aparecerá com um asterisco `*`).
* **Troca de Ramo:** Use `git checkout <nome-da-branch>` para navegar entre as frentes de trabalho.
* **Nomenclatura:** Use nomes curtos e claros com hífens ou underline (ex: `ajuste-layout`, `fix_bug_rh`).

#### 📅 Workflow para Commit Diário (Daily)

Sempre que for atualizar seu progresso, especialmente em sua pasta na seção `4 - EQUIPE`, siga estes passos:

1. `git pull` (para baixar atualizações da equipe).
2. `git status` (para conferir o que foi alterado).
3. `git add .` (para preparar todos os arquivos).
4. `git commit -m "daily today"` (mensagem padronizada de progresso).
5. `git push` (enviar para o servidor).
6. `git status` (confirmar que não há nada pendente).

---

### 🛡️ Contribuição na Main (Pull Request)

Para realizar alterações na branch `main`, é obrigatório criar um **Pull Request (PR)** para revisão e aprovação, garantindo a qualidade técnica da equipe:

1. Realize todos os commits necessários em sua **branch pessoal**.
2. Acesse o repositório da **Fábrica de Monstros** no GitHub.
3. Clique no botão **"Compare & pull request"** que aparecerá após o seu push.
4. Adicione uma descrição clara das alterações realizadas, seguindo os pilares de transparência do time.

---

> *"Centralizando informações para empoderar a equipe."*

