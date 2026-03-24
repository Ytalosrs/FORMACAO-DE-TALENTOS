# Espaço para desenvolvimento de projetos diversos da Fábrica de Monstros, incluindo:

- **Sites** - Projetos web estáticos e dinâmicos
- **App de Flashcard** - Aplicação interativa para memorização
- **Simulados** - Plataformas de testes e avaliações
- **Outros** - Demais iniciativas que agregam valor à comunidade

*Cada projeto deve possuir sua própria documentação e instruções de setup.*


# Projetos

## Sistema Simulado Dockerizado

Aplicação web para realização e correção de simulados, containerizada com Docker, construída em **Next.js** (App Router) e TypeScript.

O objetivo é oferecer uma base para um sistema de simulados moderno, com frontend em Next.js e backend integrado via Prisma e banco de dados em container Docker.

### Tecnologias utilizadas

- Next.js (App Router) e React
- TypeScript   
- Prisma ORM (pasta `prisma/`)
- Docker e Docker Compose (`Dockerfile`, `docker-compose.yml`) 
- Cloudflared Tunnel (`cloudflared.yml`, `tunnel.sh`, `tunnel.bat`)
- CSS/Tailwind (config via `postcss.config.mjs`)

[Acesse o link do sistema!](https://github.com/Ytalosrs/SistemaSimuladoDockerizado)
