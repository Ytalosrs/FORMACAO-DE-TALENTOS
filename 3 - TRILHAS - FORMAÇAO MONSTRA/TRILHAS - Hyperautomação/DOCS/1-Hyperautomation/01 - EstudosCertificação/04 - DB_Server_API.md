# RPA DB Server API

## Introdução

O **RPA DB Server API** é uma API REST completa desenvolvida em Python utilizando FastAPI, projetada especificamente para automação de processos RPA (Robotic Process Automation). A API oferece um conjunto abrangente de funcionalidades que vão muito além de operações de banco de dados, incluindo automação de navegador web, execução de código Python, agendamento de tarefas, streaming de tela, OCR e processamento de expressões regulares.

### Por que usar RPA DB Server API?

* **Solução Completa para RPA**: Uma única API que cobre todas as necessidades comuns de automação
* **Automação de Navegador**: Controle completo do Chrome/Chromium com execução de JavaScript
* **Abstração de Banco de Dados**: Suporte a MariaDB e SQLite com operações CRUD completas
* **Execução Python**: Execução síncrona e assíncrona de código Python com contextos isolados
* **Agendamento de Tarefas**: Sistema completo de agendamento com triggers cron, interval e date
* **Streaming de Tela**: Transmissão em tempo real da tela com gravação e reprodução
* **OCR Integrado**: Reconhecimento óptico de caracteres com Tesseract
* **Processamento Regex**: Extração de dados estruturados com expressões regulares
* **Sistema de Logs**: Gravação e consulta de logs com filtros avançados
* **Documentação Automática**: Swagger/OpenAPI integrado para documentação e testes
* **Segurança**: Autenticação por token para proteger os endpoints
* **Multiplataforma**: Executável standalone que funciona em Windows, Linux e macOS

### Quando usar?

* Automações RPA complexas que requerem múltiplas funcionalidades
* Processos que combinam automação web, banco de dados e processamento
* Cenários que precisam de agendamento e execução de tarefas
* Monitoramento remoto com streaming de tela
* Extração de dados de documentos e imagens (OCR)
* Processamento em lote de arquivos com regex
* Ambientes onde não é possível instalar múltiplas ferramentas separadamente
* Necessidade de uma API única para todas as operações de automação

---

## Visão Geral

A arquitetura do RPA DB Server API é baseada em uma API REST stateless que integra múltiplos módulos especializados para automação completa de processos. A aplicação utiliza FastAPI como framework web, proporcionando alta performance, documentação automática e suporte assíncrono nativo.

---

## Fundamentos

### Os Três Pilares Fundamentais

O RPA DB Server API é construído sobre três pilares fundamentais que garantem sua eficácia e flexibilidade:

#### 1. **Modularidade e Integração**
A API é organizada em módulos independentes que podem ser usados isoladamente ou combinados para criar automações complexas. Cada módulo tem responsabilidades bem definidas e interfaces claras, permitindo integração flexível entre diferentes funcionalidades.

**Benefícios:**
* Facilita manutenção e evolução
* Permite uso seletivo de funcionalidades
* Reduz complexidade cognitiva

#### 2. **Abstração e Padronização**
Todas as operações são expostas através de uma interface REST padronizada, abstraindo a complexidade das tecnologias subjacentes (Selenium, SQLAlchemy, Tesseract, etc.). Isso permite que clientes usem a API sem conhecimento profundo das implementações internas.

**Benefícios:**
* Reduz curva de aprendizado
* Facilita integração com diferentes linguagens
* Permite evolução interna sem quebrar contratos

#### 3. **Segurança e Isolamento**
Cada operação é executada em contextos isolados com autenticação obrigatória. Isso garante que múltiplos clientes possam usar a API simultaneamente sem interferência, e que operações potencialmente perigosas sejam contidas.

**Benefícios:**
* Previne vazamento de dados entre execuções
* Protege contra acesso não autorizado
* Permite auditoria completa de operações

### Princípios Arquiteturais

1. **Stateless**: Cada requisição contém todas as informações necessárias
2. **RESTful**: Segue os princípios REST para design de APIs
3. **Modularidade**: Funcionalidades organizadas em módulos independentes
4. **Segurança por Token**: Autenticação baseada em token para proteger endpoints
5. **Logging Abrangente**: Registro detalhado de todas as operações
6. **Configuração Externa**: Configurações via arquivo INI
7. **Isolamento de Contexto**: Execução Python com contextos isolados para segurança

### Módulos Principais

#### 🌐 Módulo de Navegador Web
* Controle completo do Chrome/Chromium via Selenium/Playwright
* Execução de JavaScript no contexto do navegador
* Captura de screenshots e geração de PDFs
* Gerenciamento de abas e downloads
* Modos especiais (kiosk, fullscreen, incógnito)

#### 🗄️ Módulo de Banco de Dados
* Suporte a MariaDB/MySQL e SQLite
* Execução de queries SQL com diferentes formatos
* Operações CRUD completas
* ATTACH/DETACH de bancos SQLite

#### 🐍 Módulo de Execução Python
* Execução síncrona e assíncrona de código Python
* Gerenciamento de contextos isolados
* Suporte a bibliotecas externas
* Limpeza de contexto sob demanda

#### 📊 Módulo de Logs
* Gravação e consulta de logs
* Filtros avançados por data, status e texto
* Suporte a múltiplos bancos (MariaDB e SQLite)
* Auditoria completa de operações

#### ⏰ Módulo de Agendador
* Agendamento com triggers cron, interval e date
* Execução de código Python agendado
* Gerenciamento completo de tarefas
* Listagem de jobs ativos

#### 📺 Módulo de Streaming
* Transmissão em tempo real da tela
* Controle de FPS e escala
* Interface web integrada
* Sistema de gravação (iniciar, pausar, retomar, parar)
* Reprodução de gravações salvas

#### 🔍 Módulo OCR
* Processamento de PDFs e imagens
* Extração de texto com Tesseract
* Pré-processamento de imagens
* Processamento em lote

#### 🔤 Módulo Regex
* Aplicação de expressões regulares em arquivos
* Extração de dados estruturados
* Processamento em lote
* Sistema de ativadores

### Componentes Técnicos

* **Servidor HTTP**: Uvicorn como servidor ASGI
* **Motor de Navegador**: Selenium WebDriver ou Playwright
* **Motor de Banco**: SQLAlchemy para abstração de banco
* **Motor Python**: Execução dinâmica com contextos isolados
* **Motor de Streaming**: Captura de tela com FFmpeg
* **Motor OCR**: Tesseract OCR
* **Sistema de Autenticação**: Validação de token em cada requisição
* **Sistema de Logging**: Múltiplos handlers para diferentes tipos de log
* **Sistema de Agendamento**: APScheduler para tarefas agendadas
* **Documentação**: Swagger UI integrado

---

## Bibliotecas e Ferramentas

### Dependências Principais

A API utiliza as seguintes bibliotecas e ferramentas principais:

#### Framework Web
* **FastAPI**: Framework web moderno e rápido para Python
* **Uvicorn**: Servidor ASGI de alta performance
* **Pydantic**: Validação de dados e serialização

#### Automação de Navegador
* **Selenium WebDriver**: Automação de navegadores web
* **Playwright** (opcional): Alternativa moderna ao Selenium

#### Banco de Dados
* **SQLAlchemy**: ORM e abstração de banco de dados
* **pymysql**: Driver para MariaDB/MySQL
* **sqlite3**: Driver nativo para SQLite

#### Processamento e Análise
* **Tesseract OCR**: Reconhecimento óptico de caracteres
* **Pillow**: Processamento de imagens
* **pandas** (disponível no contexto Python): Análise de dados

#### Agendamento
* **APScheduler**: Sistema de agendamento de tarefas

#### Streaming
* **FFmpeg**: Processamento de vídeo e captura de tela

### Ferramentas de Desenvolvimento

* **Swagger UI**: Documentação interativa da API
* **OpenAPI**: Especificação da API
* **Python 3.8+**: Runtime necessário (embutido no executável)

### Notas sobre Dependências

* **Executável Standalone**: Todas as dependências estão incluídas no `db_server_api.exe`
* **Sem Instalação Necessária**: Não é necessário instalar Python ou outras dependências no ambiente de execução
* **Bibliotecas Python Dinâmicas**: O módulo de execução Python permite usar bibliotecas externas, mas elas devem estar disponíveis no contexto de execução

---

## Vantagens

### Solução Completa para RPA

Uma única API que cobre todas as necessidades comuns de automação, eliminando a necessidade de integrar múltiplas ferramentas separadas.

### Automação de Navegador Web Avançada

Controle completo do Chrome/Chromium com execução de JavaScript, captura de screenshots, geração de PDFs e gerenciamento de abas, tudo via API REST.

### Flexibilidade de Banco de Dados

Suporte para SQLite (padrão) e MariaDB/MySQL, permitindo migração entre bancos sem alterar o código cliente. Operações SQL diretas com diferentes formatos de resposta.

### Execução Python Dinâmica

Execute código Python síncrono ou assíncrono em contextos isolados, com suporte a bibliotecas externas, sem necessidade de instalação local.

### Agendamento Robusto

Sistema completo de agendamento com triggers cron, interval e date, permitindo automação de tarefas recorrentes ou pontuais.

### Streaming e Monitoramento

Transmissão em tempo real da tela com sistema de gravação completo (iniciar, pausar, retomar, parar), ideal para monitoramento remoto.

### OCR Integrado

Reconhecimento óptico de caracteres com Tesseract, processamento de PDFs e imagens, com pré-processamento automático para melhor precisão.

### Processamento Regex Poderoso

Sistema de ativadores de regex para extração de dados estruturados, processamento em lote e reutilização de padrões.

### Sistema de Logs Abrangente

Gravação e consulta de logs com filtros avançados, suporte a múltiplos bancos e auditoria completa de operações.

### Documentação Interativa

Swagger UI integrado permite testar a API diretamente do navegador, facilitando desenvolvimento e integração.

### Segurança Integrada

Sistema de autenticação por token protege todos os endpoints sensíveis, evitando acesso não autorizado.

### Observabilidade Completa

Sistema de logging completo permite rastrear todas as operações, facilitando debugging e auditoria.

### Portabilidade Total

Executável standalone não requer instalação de dependências Python, Chrome ou outras ferramentas no ambiente de execução.

---

## Trabalhando com a API

### Quando usar cada módulo?

#### 🌐 Módulo de Navegador Web
**Use quando:**
* Precisa automatizar interações com sites web
* Necessita capturar screenshots ou gerar PDFs de páginas
* Precisa executar JavaScript no contexto do navegador
* Requer gerenciamento de múltiplas abas

**Exemplo de caso de uso:**
```python
# Extrair dados de um site de e-commerce
browser_id = client.abrir_navegador()
client.executar_no_navegador(browser_id, """
driver = browser_driver
driver.get('https://loja.com/produtos')
# ... extração de dados ...
""")
```

#### 🗄️ Módulo de Banco de Dados
**Use quando:**
* Precisa executar queries SQL sem instalar drivers
* Requer suporte a múltiplos bancos (SQLite e MariaDB)
* Necessita operações CRUD via HTTP
* Precisa acessar múltiplos bancos SQLite simultaneamente

**Exemplo de caso de uso:**
```python
# Consultar dados de um banco remoto
resultado = client.executar_sql_sqlite("SELECT * FROM usuarios WHERE ativo = 1")
```

#### 🐍 Módulo de Execução Python
**Use quando:**
* Precisa executar código Python dinâmico
* Requer processamento de dados com bibliotecas externas
* Necessita manter estado entre execuções
* Precisa executar código assíncrono

**Exemplo de caso de uso:**
```python
# Processar dados com pandas
resultado = client.executar_python("""
import pandas as pd
df = pd.read_csv('dados.csv')
result = df.describe().to_dict()
result
""")
```

#### ⏰ Módulo de Agendador
**Use quando:**
* Precisa executar tarefas em horários específicos
* Requer automações recorrentes (diárias, semanais, etc.)
* Necessita executar código Python agendado
* Precisa gerenciar múltiplas tarefas agendadas

**Exemplo de caso de uso:**
```python
# Agendar backup diário
client.agendar_tarefa(
    job_id="backup_diario",
    tipo="cron",
    trigger="0 2 * * *",  # Todo dia às 2h
    codigo_python="..."
)
```

#### 📺 Módulo de Streaming
**Use quando:**
* Precisa monitorar tela remotamente
* Requer gravar sessões de trabalho
* Necessita visualizar operações em tempo real
* Precisa documentar processos

**Exemplo de caso de uso:**
```python
# Iniciar gravação de sessão
gravacao = client.iniciar_gravacao({
    "nome_arquivo": "sessao_20251105",
    "fps": 15
})
```

#### 🔍 Módulo OCR
**Use quando:**
* Precisa extrair texto de PDFs ou imagens
* Requer processamento em lote de documentos
* Necessita reconhecimento de caracteres
* Precisa digitalizar documentos físicos

**Exemplo de caso de uso:**
```python
# Processar pasta de contratos
resultado = client.processar_ocr_pasta(
    pasta="C:/Contratos",
    extensoes=[".pdf"],
    idioma="por"
)
```

#### 🔤 Módulo Regex
**Use quando:**
* Precisa extrair dados estruturados de texto
* Requer processamento em lote com padrões reutilizáveis
* Necessita validação de formatos
* Precisa transformar dados não estruturados

**Exemplo de caso de uso:**
```python
# Extrair CPFs e emails de documentos
ativador_id = client.carregar_ativador_regex("extrator", [
    {"nome": "cpf", "regex": "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"},
    {"nome": "email", "regex": "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"}
])
resultado = client.processar_regex(ativador_id, dados=texto)
```

### Boas Práticas ao Trabalhar com a API

1. **Sempre feche recursos**: Feche navegadores, limpe contextos Python e pare gravações quando não precisar mais
2. **Use contextos isolados**: Para Python, limpe o contexto periodicamente para evitar vazamento de memória
3. **Trate erros adequadamente**: Sempre verifique respostas de erro e implemente retry quando apropriado
4. **Monitore recursos**: Use o sistema de logs para rastrear operações e identificar problemas
5. **Otimize requisições**: Combine operações quando possível (ex: múltiplas queries SQL em uma transação)

---

## Estrutura de Diretórios

```
db_server_api/
├── db_server_api.exe          # Executável principal
├── db_server_api.db           # Banco de dados SQLite (se usado)
├── db_server_api.json         # Arquivo de status do servidor
├── config.ini                 # Arquivo de configuração
├── start_server.bat           # Script de inicialização Windows
├── start_server.ps1           # Script de inicialização PowerShell
└── logs/                      # Diretório de logs
    ├── server.log            # Log geral do servidor
    ├── requests.log          # Log de requisições HTTP
    ├── errors.log            # Log de erros
    ├── stdout.log            # Saída padrão
    └── stderr.log            # Saída de erro padrão
```

### Descrição dos Arquivos

#### `db_server_api.exe`
Executável principal da aplicação. Contém toda a aplicação empacotada.

#### `db_server_api.json`
Arquivo gerado automaticamente contendo informações sobre o servidor em execução:
* PID do processo
* Porta em uso
* Timestamp de inicialização
* IPs disponíveis
* URLs de acesso

#### `config.ini`
Arquivo de configuração principal com as seguintes seções:
* `[server]`: Configurações do servidor HTTP
* `[database]`: Configurações de conexão com banco de dados
* `[stream]`: Configurações de streaming
* `[security]`: Configurações de segurança e autenticação
* `[logging]`: Configurações do sistema de logging

#### `logs/`
Diretório contendo todos os arquivos de log gerados pela aplicação.

---

## Configuração

### Arquivo config.ini

O arquivo `config.ini` é o ponto central de configuração da aplicação. Todas as configurações são feitas através deste arquivo.

#### Seção [server]

```ini
[server]
port = 0  # 0 = porta automática, ou especifique uma porta fixa
```

**Configurações disponíveis:**
* `port`: Porta do servidor HTTP. Use `0` para porta automática ou especifique uma porta (ex: `8000`)

#### Seção [database]

```ini
[database]
usar_mariadb = false          # true para usar MariaDB/MySQL, false para SQLite
host = localhost              # Host do banco de dados (apenas para MariaDB)
port = 3306                   # Porta do banco de dados (apenas para MariaDB)
user = root                   # Usuário do banco de dados (apenas para MariaDB)
password = Db@123             # Senha do banco de dados (apenas para MariaDB)
database =                    # Nome do banco de dados (apenas para MariaDB)
```

**Configurações disponíveis:**
* `usar_mariadb`: Define se usa MariaDB/MySQL (`true`) ou SQLite (`false`)
* `host`: Endereço do servidor de banco de dados
* `port`: Porta do servidor de banco de dados
* `user`: Usuário para autenticação
* `password`: Senha para autenticação
* `database`: Nome do banco de dados a ser usado

#### Seção [stream]

```ini
[stream]
habilitado = true  # true para habilitar streaming, false para desabilitar
```

**Configurações disponíveis:**
* `habilitado`: Habilita ou desabilita funcionalidades de streaming

#### Seção [security]

```ini
[security]
token = RpaDbServerApi12345678  # Token de autenticação para acessar a API
```

**Configurações disponíveis:**
* `token`: Token de autenticação usado para proteger os endpoints da API

**⚠️ Importante**: Altere o token padrão em produção!

#### Seção [logging]

```ini
[logging]
log_terminal = true                    # Exibir logs no terminal
log_requests_separate = true           # Log de requisições em arquivo separado
log_errors_separate = true             # Log de erros em arquivo separado
log_exclude_routes = /docs,/openapi.json,/favicon.ico  # Rotas a excluir dos logs
log_include_routes = *                 # Rotas a incluir nos logs (* = todas)
log_requests_file = requests.log        # Nome do arquivo de log de requisições
log_errors_file = errors.log           # Nome do arquivo de log de erros
```

**Configurações disponíveis:**
* `log_terminal`: Exibe logs no console/terminal
* `log_requests_separate`: Cria arquivo separado para logs de requisições
* `log_errors_separate`: Cria arquivo separado para logs de erros
* `log_exclude_routes`: Lista de rotas (separadas por vírgula) a excluir dos logs
* `log_include_routes`: Lista de rotas a incluir nos logs (`*` = todas)
* `log_requests_file`: Nome do arquivo de log de requisições
* `log_errors_file`: Nome do arquivo de log de erros

---

## Inicialização do Servidor

### Windows (Batch)

Execute o arquivo `start_server.bat`:

```batch
start_server.bat
```

O script configura o encoding UTF-8 e inicia o servidor em background.

### Windows (PowerShell)

Execute o arquivo `start_server.ps1`:

```powershell
.\start_server.ps1
```

O script configura o ambiente PowerShell para UTF-8 e inicia o servidor.

### Execução Direta

Execute diretamente o executável:

```bash
.\db_server_api.exe
```

### Verificando o Status

Após iniciar o servidor, verifique o arquivo `db_server_api.json` para obter:
* Porta em uso
* IPs disponíveis
* URLs de acesso

**Exemplo de conteúdo do arquivo:**

```json
{
  "pid": 35316,
  "port": 57625,
  "start_time": "20251105163254",
  "ips": [
    {
      "ip": "127.0.0.1",
      "interface": "loopback",
      "method": "localhost"
    }
  ],
  "urls": [
    "http://127.0.0.1:57625"
  ]
}
```

---

## Autenticação

Todos os endpoints da API (exceto `/docs` e `/openapi.json`) requerem autenticação via token.

### Como Autenticar

Inclua o token no header `Authorization` de cada requisição:

```http
Authorization: Bearer RpaDbServerApi12345678
```

**Exemplo com cURL:**

```bash
curl -X GET "http://localhost:57625/api/tables" \
  -H "Authorization: Bearer RpaDbServerApi12345678"
```

**Exemplo com Python (requests):**

```python
import requests

headers = {
    "Authorization": "Bearer RpaDbServerApi12345678"
}

response = requests.get(
    "http://localhost:57625/api/tables",
    headers=headers
)
```

**Exemplo com JavaScript (fetch):**

```javascript
fetch('http://localhost:57625/api/tables', {
  headers: {
    'Authorization': 'Bearer RpaDbServerApi12345678'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## Endpoints da API

### Documentação Interativa (Swagger)

Acesse a documentação interativa da API em:

```
http://localhost:{porta}/docs
```

A documentação Swagger permite:
* Visualizar todos os endpoints disponíveis
* Ver schemas de requisição e resposta
* Testar endpoints diretamente do navegador
* Ver exemplos de código

### OpenAPI Schema

O schema OpenAPI está disponível em:

```
http://localhost:{porta}/openapi.json
```

### Autenticação

**⚠️ Importante**: Todas as rotas (exceto `/stream`, `/tela` e `/docs`) requerem token de autorização no header:

```http
Authorization: Bearer {token}
```

O token é configurado no arquivo `config.ini` na seção `[security]`.

---

## 🏠 Status

### Verificar Status da API

**GET** `/`

Verifica o status da API e retorna informações básicas.

**Autenticação**: Não requerida

**Resposta de exemplo:**

```json
{
  "status": "online",
  "version": "1.0.0",
  "timestamp": "2025-11-05T16:32:54"
}
```

---

## 💾 Banco de Dados

### Executar Consulta SQL no MariaDB

**POST** `/getsql`

Executa uma consulta SELECT no MariaDB/MySQL.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
SELECT * FROM users WHERE age > 18 LIMIT 10
```

**Resposta de exemplo:**

```json
{
  "data": [
    {"id": 1, "name": "João", "age": 25},
    {"id": 2, "name": "Maria", "age": 30}
  ],
  "row_count": 2
}
```

### Executar Consulta SQL no SQLite

**POST** `/getsqldb`

Executa uma consulta SELECT no SQLite.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
SELECT * FROM users WHERE age > 18 LIMIT 10
```

**Resposta de exemplo:**

```json
{
  "data": [
    {"id": 1, "name": "João", "age": 25},
    {"id": 2, "name": "Maria", "age": 30}
  ],
  "row_count": 2
}
```

### Executar Comando SQL no MariaDB

**POST** `/setsql`

Executa comandos INSERT, UPDATE, DELETE no MariaDB/MySQL.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
INSERT INTO users (name, email) VALUES ('João', 'joao@example.com')
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "affected_rows": 1,
  "last_insert_id": 123
}
```

### Executar Comando SQL no SQLite

**POST** `/setsqldb`

Executa comandos INSERT, UPDATE, DELETE no SQLite.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
INSERT INTO users (name, email) VALUES ('João', 'joao@example.com')
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "affected_rows": 1,
  "last_insert_id": 123
}
```

### Executar Múltiplas Instruções SQL no SQLite

**POST** `/setsqldbfull`

Executa múltiplas instruções SQL no SQLite em uma única transação.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
INSERT INTO users (name) VALUES ('João');
INSERT INTO users (name) VALUES ('Maria');
UPDATE users SET email = 'joao@example.com' WHERE name = 'João';
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "statements_executed": 3,
  "total_affected_rows": 3
}
```

### Registrar ATTACH DATABASE no SQLite

**POST** `/attachsqldb`

Registra um ATTACH DATABASE no SQLite para acessar múltiplos bancos.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
ATTACH DATABASE 'caminho/para/outro.db' AS outro_db
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Database attached successfully"
}
```

### Remover ATTACH DATABASE no SQLite

**POST** `/detachsqldb`

Remove um ATTACH DATABASE previamente registrado.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```sql
DETACH DATABASE outro_db
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Database detached successfully"
}
```

---

## 🐍 Execução Python

### Executar Código Python

**POST** `/executepy`

Executa código Python de forma síncrona em um contexto isolado.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```python
import requests

response = requests.get('https://api.example.com/data')
result = response.json()
print(f"Status: {response.status_code}")
result
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "output": "Status: 200\n",
  "result": {"data": "value"},
  "error": null
}
```

**Exemplo com bibliotecas externas:**

```python
import pandas as pd

df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
result = df.describe().to_dict()
result
```

### Executar Código Python Assíncrono

**POST** `/executepyas`

Executa código Python de forma assíncrona em um contexto isolado.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```python
import asyncio
import aiohttp

async def fetch_data():
    async with aiohttp.ClientSession() as session:
        async with session.get('https://api.example.com/data') as response:
            return await response.json()

result = asyncio.run(fetch_data())
result
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "output": "",
  "result": {"data": "value"},
  "error": null
}
```

### Limpar Contexto Python

**POST** `/executepy/limpar`

Limpa o contexto Python isolado, liberando memória e recursos.

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Contexto Python limpo com sucesso"
}
```

---

## 📋 Sistema de Logs

### Listar Logs do MariaDB

**GET** `/log/{banco}/{tabela}/listar`

Lista logs armazenados no MariaDB com filtros opcionais.

**Parâmetros:**
* `banco` (path): Nome do banco de dados
* `tabela` (path): Nome da tabela de logs

**Query Parameters (opcionais):**
* `data_inicio`: Data inicial (formato: YYYY-MM-DD)
* `data_fim`: Data final (formato: YYYY-MM-DD)
* `status`: Filtrar por status (sucesso, erro, etc.)
* `texto`: Buscar por texto no log
* `limit`: Limite de registros (padrão: 100)
* `offset`: Offset para paginação (padrão: 0)

**Exemplo de requisição:**

```http
GET /log/meu_banco/logs/listar?data_inicio=2025-11-01&status=erro&limit=50
```

**Resposta de exemplo:**

```json
{
  "logs": [
    {
      "id": 1,
      "timestamp": "2025-11-05T10:30:00",
      "status": "erro",
      "mensagem": "Erro ao processar arquivo",
      "detalhes": "..."
    }
  ],
  "total": 150,
  "limit": 50,
  "offset": 0
}
```

### Gravar Log no SQLite

**POST** `/log/{sistema}/{status}`

Grava um novo log no SQLite.

**Parâmetros:**
* `sistema` (path): Nome do sistema que está gerando o log
* `status` (path): Status do log (sucesso, erro, aviso, info)

**Body da requisição (JSON):**

```json
{
  "mensagem": "Processamento concluído com sucesso",
  "detalhes": {
    "arquivos_processados": 10,
    "tempo_execucao": "2.5s"
  }
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "log_id": 123,
  "message": "Log gravado com sucesso"
}
```

### Listar Logs do SQLite

**GET** `/log/listar`

Lista logs armazenados no SQLite com filtros opcionais.

**Query Parameters (opcionais):**
* `sistema`: Filtrar por sistema
* `status`: Filtrar por status
* `data_inicio`: Data inicial (formato: YYYY-MM-DD)
* `data_fim`: Data final (formato: YYYY-MM-DD)
* `texto`: Buscar por texto no log
* `limit`: Limite de registros (padrão: 100)
* `offset`: Offset para paginação (padrão: 0)

**Exemplo de requisição:**

```http
GET /log/listar?sistema=rpa&status=erro&limit=20
```

**Resposta de exemplo:**

```json
{
  "logs": [
    {
      "id": 1,
      "timestamp": "2025-11-05T10:30:00",
      "sistema": "rpa",
      "status": "erro",
      "mensagem": "Erro ao processar arquivo",
      "detalhes": "..."
    }
  ],
  "total": 45,
  "limit": 20,
  "offset": 0
}
```

---

## ⏰ Agendador de Tarefas

### Agendar Tarefa

**POST** `/scheduler/agendar`

Agenda uma nova tarefa para execução.

**Body da requisição (JSON):**

```json
{
  "id": "tarefa_diaria",
  "tipo": "cron",
  "trigger": "0 9 * * *",
  "codigo_python": "print('Tarefa executada')",
  "ativo": true
}
```

**Tipos de trigger disponíveis:**

1. **Cron**: Expressão cron padrão
   ```json
   {
     "tipo": "cron",
     "trigger": "0 9 * * *"  // Todo dia às 9h
   }
   ```

2. **Interval**: Intervalo de tempo
   ```json
   {
     "tipo": "interval",
     "trigger": {
       "seconds": 3600  // A cada hora
     }
   }
   ```

3. **Date**: Data/hora específica
   ```json
   {
     "tipo": "date",
     "trigger": "2025-11-10T14:30:00"
   }
   ```

**Resposta de exemplo:**

```json
{
  "success": true,
  "job_id": "tarefa_diaria",
  "message": "Tarefa agendada com sucesso",
  "proxima_execucao": "2025-11-06T09:00:00"
}
```

### Listar Jobs Ativos

**GET** `/scheduler/agendar/ativos`

Lista todas as tarefas agendadas que estão ativas.

**Resposta de exemplo:**

```json
{
  "jobs": [
    {
      "id": "tarefa_diaria",
      "tipo": "cron",
      "trigger": "0 9 * * *",
      "ativo": true,
      "proxima_execucao": "2025-11-06T09:00:00",
      "ultima_execucao": "2025-11-05T09:00:00"
    }
  ],
  "total": 1
}
```

### Remover Job

**POST** `/scheduler/agendar/remover`

Remove uma tarefa agendada.

**Body da requisição (JSON):**

```json
{
  "id": "tarefa_diaria"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Job removido com sucesso"
}
```

---

## 📺 Streaming de Tela

### Stream de Vídeo em Tempo Real

**GET** `/stream`

Stream de vídeo em tempo real da tela do servidor.

**Autenticação**: Não requerida

**Query Parameters (opcionais):**
* `fps`: Frames por segundo (padrão: 10)
* `scale`: Escala da captura (padrão: 1.0)

**Exemplo:**

```http
GET /stream?fps=15&scale=0.8
```

**Resposta**: Stream de vídeo MJPEG

### Interface Web do Stream

**GET** `/tela`

Interface web para visualizar o stream de tela.

**Autenticação**: Não requerida

**Resposta**: Página HTML com player de vídeo

### Visualização em Tela Cheia

**GET** `/stream_fullscreen`

Página de visualização em tela cheia do stream.

**Autenticação**: Não requerida

**Resposta**: Página HTML em fullscreen

### Configurar Streaming

**POST** `/stream/config`

Configura parâmetros do streaming.

**Body da requisição (JSON):**

```json
{
  "fps": 15,
  "scale": 0.8,
  "quality": 80
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "config": {
    "fps": 15,
    "scale": 0.8,
    "quality": 80
  }
}
```

### Iniciar Gravação

**POST** `/iniciar_gravacao`

Inicia uma nova gravação do stream.

**Body da requisição (JSON):**

```json
{
  "nome_arquivo": "gravacao_20251105",
  "fps": 15,
  "qualidade": "high"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "gravacao_id": "grav_123456",
  "nome_arquivo": "gravacao_20251105.mp4",
  "status": "gravando"
}
```

### Pausar Gravação

**POST** `/pausar_gravacao/{gravacao_id}`

Pausa uma gravação ativa.

**Parâmetros:**
* `gravacao_id` (path): ID da gravação

**Resposta de exemplo:**

```json
{
  "success": true,
  "status": "pausada"
}
```

### Retomar Gravação

**POST** `/retomar_gravacao/{gravacao_id}`

Retoma uma gravação pausada.

**Parâmetros:**
* `gravacao_id` (path): ID da gravação

**Resposta de exemplo:**

```json
{
  "success": true,
  "status": "gravando"
}
```

### Parar Gravação

**POST** `/parar_gravacao/{gravacao_id}`

Para uma gravação e finaliza o arquivo.

**Parâmetros:**
* `gravacao_id` (path): ID da gravação

**Resposta de exemplo:**

```json
{
  "success": true,
  "status": "finalizada",
  "arquivo": "gravacao_20251105.mp4",
  "duracao": "00:05:30"
}
```

### Status da Gravação

**GET** `/status_gravacao/{gravacao_id}`

Consulta o status de uma gravação.

**Parâmetros:**
* `gravacao_id` (path): ID da gravação

**Resposta de exemplo:**

```json
{
  "gravacao_id": "grav_123456",
  "status": "gravando",
  "inicio": "2025-11-05T10:00:00",
  "duracao_atual": "00:02:15",
  "arquivo": "gravacao_20251105.mp4"
}
```

### Listar Gravações Ativas

**GET** `/listar_gravacoes`

Lista todas as gravações ativas.

**Resposta de exemplo:**

```json
{
  "gravacoes": [
    {
      "gravacao_id": "grav_123456",
      "status": "gravando",
      "inicio": "2025-11-05T10:00:00"
    }
  ],
  "total": 1
}
```

### Listar Gravações Salvas

**GET** `/listar_gravacoes_salvas`

Lista todas as gravações salvas (finalizadas).

**Resposta de exemplo:**

```json
{
  "gravacoes": [
    {
      "nome_arquivo": "gravacao_20251105.mp4",
      "tamanho": "125MB",
      "duracao": "00:05:30",
      "data_criacao": "2025-11-05T10:00:00"
    }
  ],
  "total": 5
}
```

### Reproduzir Vídeo Gravado

**GET** `/stream_video/{nome_arquivo}`

Reproduz um vídeo gravado anteriormente.

**Parâmetros:**
* `nome_arquivo` (path): Nome do arquivo de vídeo

**Autenticação**: Não requerida

**Resposta**: Stream de vídeo

### Download de Gravação

**GET** `/download_gravacao/{nome_arquivo}`

Faz download de uma gravação salva.

**Parâmetros:**
* `nome_arquivo` (path): Nome do arquivo de vídeo

**Resposta**: Arquivo de vídeo para download

---

## 🌐 Automação de Navegador Web

### Abrir Navegador

**POST** `/browser/abrir`

Abre uma nova instância do navegador Chrome/Chromium.

**Body da requisição (JSON):**

```json
{
  "headless": false,
  "incognito": false,
  "kiosk": false,
  "fullscreen": false,
  "user_data_dir": null,
  "window_size": {
    "width": 1920,
    "height": 1080
  }
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "browser_id": "browser_123456",
  "message": "Navegador aberto com sucesso"
}
```

### Configurar Diretório de Download

**POST** `/browser/set_download_path`

Configura o diretório de download do navegador.

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "download_path": "C:/Downloads"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Diretório de download configurado"
}
```

### Executar Código no Navegador

**POST** `/browser/executar`

Executa código Python que interage com o navegador.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = browser_driver  # Variável global disponível
driver.get('https://example.com')
element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "myElement"))
)
result = element.text
result
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "result": "Texto do elemento",
  "output": ""
}
```

### Executar JavaScript no Console

**POST** `/browser/console`

Executa JavaScript diretamente no console do navegador.

**⚠️ Importante**: Sempre use `Content-Type: text/plain`

**Body da requisição (text/plain):**

```javascript
document.querySelector('#myButton').click();
return document.title;
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "result": "Título da Página",
  "output": ""
}
```

### Capturar Screenshot

**POST** `/browser/screenshot`

Captura um screenshot da página atual.

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "full_page": false,
  "save_path": "screenshot.png"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "screenshot_path": "screenshot.png",
  "message": "Screenshot capturado com sucesso"
}
```

### Gerar PDF

**POST** `/browser/pdf`

Gera um PDF da página atual.

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "save_path": "pagina.pdf",
  "format": "A4",
  "landscape": false
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "pdf_path": "pagina.pdf",
  "message": "PDF gerado com sucesso"
}
```

### Fechar Navegador

**POST** `/browser/fechar`

Fecha uma instância do navegador.

**Body da requisição (JSON ou Query Parameters):**

```json
{
  "browser_id": "browser_123456"
}
```

Ou via query parameter:

```http
POST /browser/fechar?browser_id=browser_123456
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Navegador fechado com sucesso"
}
```

### Abrir Nova Aba

**POST** `/browser/abriraba`

Abre uma nova aba no navegador.

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "url": "https://example.com"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "tab_id": "tab_789",
  "message": "Aba aberta com sucesso"
}
```

### Selecionar Aba

**POST** `/browser/selecionar`

Seleciona uma aba específica do navegador.

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "tab_id": "tab_789"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Aba selecionada com sucesso"
}
```

### Fechar Aba

**POST** `/browser/fecharaba`

Fecha uma aba específica do navegador.

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "tab_id": "tab_789"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Aba fechada com sucesso"
}
```

### Listar Abas

**GET** `/browser/listarabas`

Lista todas as abas abertas do navegador.

**Query Parameters:**
* `browser_id`: ID do navegador

**Exemplo:**

```http
GET /browser/listarabas?browser_id=browser_123456
```

**Resposta de exemplo:**

```json
{
  "abas": [
    {
      "tab_id": "tab_789",
      "url": "https://example.com",
      "title": "Example Domain",
      "ativa": true
    }
  ],
  "total": 1
}
```

### Configurar Tratamento de Dialogs

**POST** `/browser/configurar_dialogs`

Configura tratamento automático de dialogs JavaScript (alert, confirm, prompt).

**Body da requisição (JSON):**

```json
{
  "browser_id": "browser_123456",
  "auto_accept": true,
  "default_text": "OK"
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "message": "Configuração de dialogs aplicada"
}
```

---

## 🔍 OCR (Reconhecimento Óptico de Caracteres)

### Processar Pasta (OCR)

**POST** `/ocr/pasta`

Processa todos os arquivos (PDFs e imagens) de uma pasta usando OCR.

**Body da requisição (JSON):**

```json
{
  "pasta": "C:/Documentos",
  "extensoes": [".pdf", ".png", ".jpg"],
  "idioma": "por",
  "pre_processar": true
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "arquivos_processados": 10,
  "resultados": [
    {
      "arquivo": "documento1.pdf",
      "texto_extraido": "Texto completo do documento...",
      "confianca_media": 0.95
    }
  ]
}
```

---

## 🔤 Processamento Regex

### Carregar Ativadores de Regex

**POST** `/regex/ativador`

Carrega um conjunto de expressões regulares (ativadores) para processamento.

**Body da requisição (JSON):**

```json
{
  "nome": "extrator_cpf_email",
  "padroes": [
    {
      "nome": "cpf",
      "regex": "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}",
      "grupo": 0
    },
    {
      "nome": "email",
      "regex": "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      "grupo": 0
    }
  ]
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "ativador_id": "ativador_123",
  "message": "Ativador carregado com sucesso"
}
```

### Processar Dados com Regex

**POST** `/regex/dados`

Processa dados usando os ativadores de regex carregados.

**Body da requisição (JSON):**

```json
{
  "ativador_id": "ativador_123",
  "dados": "Contato: joao@example.com, CPF: 123.456.789-00",
  "arquivo": null
}
```

Ou processar arquivo:

```json
{
  "ativador_id": "ativador_123",
  "arquivo": "C:/Documentos/contatos.txt",
  "dados": null
}
```

**Resposta de exemplo:**

```json
{
  "success": true,
  "resultados": {
    "cpf": ["123.456.789-00"],
    "email": ["joao@example.com"]
  },
  "total_encontrados": 2
}
```

---

## Convenções

### Nomenclatura de Endpoints

A API segue convenções RESTful padrão:

* Endpoints seguem o padrão RESTful
* Nomes de recursos no plural: `/api/tables`, `/api/users`
* Verbos HTTP indicam a ação: GET (leitura), POST (criação), PUT (atualização), DELETE (exclusão)

### Formato de Resposta

Todas as respostas seguem um formato JSON padronizado:

**Sucesso:**

```json
{
  "success": true,
  "data": { ... },
  "message": "Operação realizada com sucesso"
}
```

**Erro:**

```json
{
  "success": false,
  "error": "Mensagem de erro",
  "detail": "Detalhes adicionais do erro"
}
```

### Códigos HTTP

* `200 OK`: Operação bem-sucedida
* `201 Created`: Recurso criado com sucesso
* `400 Bad Request`: Requisição inválida
* `401 Unauthorized`: Token de autenticação inválido ou ausente
* `404 Not Found`: Recurso não encontrado
* `500 Internal Server Error`: Erro interno do servidor

### Tratamento de Erros

Todos os erros retornam uma resposta JSON com:
* `success: false`
* `error`: Mensagem de erro amigável
* `detail`: Detalhes técnicos do erro (em modo de desenvolvimento)

---

## Padrões

### Padrão RESTful

A API segue os princípios REST:

* **Recursos**: Representados por URLs (`/api/tables/{table_name}`)
* **Métodos HTTP**: Indicam a ação (GET, POST, PUT, DELETE)
* **Stateless**: Cada requisição é independente
* **Representações**: Dados em formato JSON

### Padrão de Autenticação

* Token Bearer no header `Authorization`
* Validação em todos os endpoints (exceto documentação)
* Token configurável via `config.ini`

### Padrão de Logging

* Logs separados por tipo (requisições, erros, servidor)
* Configuração de inclusão/exclusão de rotas
* Logs em arquivo e/ou terminal

### Padrão de Configuração

* Configuração externa via arquivo INI
* Valores padrão sensatos
* Suporte a diferentes ambientes (desenvolvimento, produção)

---

## Melhores Práticas

### Segurança

1. **Altere o token padrão**: Nunca use o token padrão em produção
2. **Use HTTPS em produção**: Configure um proxy reverso (nginx, traefik) com SSL
3. **Valide inputs**: Sempre valide dados antes de inserir/atualizar
4. **Use parâmetros preparados**: Para queries SQL customizadas, sempre use parâmetros

**Exemplo seguro:**

```python
# ✅ Correto - Usa parâmetros preparados
query = "SELECT * FROM users WHERE email = ?"
params = [email]

# ❌ Incorreto - Vulnerável a SQL injection
query = f"SELECT * FROM users WHERE email = '{email}'"
```

### Performance

1. **Use paginação**: Sempre limite o número de registros retornados
2. **Use índices**: Crie índices nas colunas frequentemente consultadas
3. **Evite queries N+1**: Use JOINs quando necessário
4. **Cache quando apropriado**: Considere cache para consultas frequentes

### Logging

1. **Configure exclusões**: Exclua rotas de documentação dos logs em produção
2. **Monitore erros**: Configure alertas para o arquivo `errors.log`
3. **Rotacione logs**: Implemente rotação de logs para evitar arquivos muito grandes
4. **Não logue dados sensíveis**: Evite logar senhas, tokens ou dados pessoais

### Configuração

1. **Use variáveis de ambiente**: Considere usar variáveis de ambiente para dados sensíveis
2. **Documente configurações**: Mantenha documentação das configurações customizadas
3. **Versionamento**: Mantenha `config.ini` versionado (sem senhas/tokens)
4. **Backup de configuração**: Mantenha backup das configurações de produção

---

## Casos de Uso Avançados

### Automação Web Completa com Banco de Dados

Exemplo de automação que combina navegador web, banco de dados e execução Python:

```python
import requests

BASE_URL = "http://localhost:57625"
TOKEN = "RpaDbServerApi12345678"
headers = {"Authorization": f"Bearer {TOKEN}"}

# 1. Abrir navegador
browser_response = requests.post(
    f"{BASE_URL}/browser/abrir",
    headers=headers,
    json={"headless": False}
)
browser_id = browser_response.json()["browser_id"]

# 2. Navegar e extrair dados
codigo_navegacao = """
driver = browser_driver
driver.get('https://example.com/products')
products = driver.find_elements(By.CLASS_NAME, 'product')
result = []
for product in products:
    name = product.find_element(By.CLASS_NAME, 'name').text
    price = product.find_element(By.CLASS_NAME, 'price').text
    result.append({'name': name, 'price': price})
result
"""

exec_response = requests.post(
    f"{BASE_URL}/browser/executar",
    headers={**headers, "Content-Type": "text/plain"},
    data=codigo_navegacao
)
produtos = exec_response.json()["result"]

# 3. Salvar no banco de dados
for produto in produtos:
    sql = f"INSERT INTO produtos (nome, preco) VALUES ('{produto['name']}', '{produto['price']}')"
    requests.post(
        f"{BASE_URL}/setsqldb",
        headers={**headers, "Content-Type": "text/plain"},
        data=sql
    )

# 4. Fechar navegador
requests.post(
    f"{BASE_URL}/browser/fechar",
    headers=headers,
    json={"browser_id": browser_id}
)
```

### Processamento em Lote com OCR e Regex

Exemplo de processamento de documentos com OCR e extração de dados:

```python
import requests

BASE_URL = "http://localhost:57625"
TOKEN = "RpaDbServerApi12345678"
headers = {"Authorization": f"Bearer {TOKEN}"}

# 1. Processar pasta com OCR
ocr_response = requests.post(
    f"{BASE_URL}/ocr/pasta",
    headers=headers,
    json={
        "pasta": "C:/Documentos/Contratos",
        "extensoes": [".pdf"],
        "idioma": "por",
        "pre_processar": True
    }
)
documentos = ocr_response.json()["resultados"]

# 2. Carregar ativadores de regex para extrair dados
regex_response = requests.post(
    f"{BASE_URL}/regex/ativador",
    headers=headers,
    json={
        "nome": "extrator_contratos",
        "padroes": [
            {"nome": "cpf", "regex": "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"},
            {"nome": "valor", "regex": "R\\$\\s*\\d+[,\\.]\\d{2}"},
            {"nome": "data", "regex": "\\d{2}/\\d{2}/\\d{4}"}
        ]
    }
)
ativador_id = regex_response.json()["ativador_id"]

# 3. Extrair dados de cada documento
dados_extraidos = []
for doc in documentos:
    regex_data = requests.post(
        f"{BASE_URL}/regex/dados",
        headers=headers,
        json={
            "ativador_id": ativador_id,
            "dados": doc["texto_extraido"]
        }
    )
    dados_extraidos.append({
        "arquivo": doc["arquivo"],
        "dados": regex_data.json()["resultados"]
    })

# 4. Salvar no banco de dados
for dados in dados_extraidos:
    if dados["dados"].get("cpf"):
        sql = f"""
        INSERT INTO contratos (arquivo, cpf, valor, data_contrato)
        VALUES ('{dados['arquivo']}', '{dados['dados']['cpf'][0]}', 
                '{dados['dados']['valor'][0]}', '{dados['dados']['data'][0]}')
        """
        requests.post(
            f"{BASE_URL}/setsqldb",
            headers={**headers, "Content-Type": "text/plain"},
            data=sql
        )
```

### Agendamento de Tarefas Complexas

Exemplo de agendamento de tarefa que combina múltiplas funcionalidades:

```python
import requests

BASE_URL = "http://localhost:57625"
TOKEN = "RpaDbServerApi12345678"
headers = {"Authorization": f"Bearer {TOKEN}"}

# Código Python que será executado agendado
codigo_tarefa = """
import requests

# 1. Consultar dados do banco
BASE_URL = "http://localhost:57625"
TOKEN = "RpaDbServerApi12345678"
headers = {"Authorization": f"Bearer {TOKEN}"}

sql = "SELECT email FROM usuarios WHERE notificado = 0 LIMIT 10"
response = requests.post(
    f"{BASE_URL}/getsqldb",
    headers={**headers, "Content-Type": "text/plain"},
    data=sql
)
usuarios = response.json()["data"]

# 2. Enviar emails (exemplo)
for usuario in usuarios:
    # Lógica de envio de email aqui
    print(f"Email enviado para {usuario['email']}")

# 3. Marcar como notificado
for usuario in usuarios:
    sql = f"UPDATE usuarios SET notificado = 1 WHERE email = '{usuario['email']}'"
    requests.post(
        f"{BASE_URL}/setsqldb",
        headers={**headers, "Content-Type": "text/plain"},
        data=sql
    )

# 4. Registrar log
requests.post(
    f"{BASE_URL}/log/rpa/sucesso",
    headers=headers,
    json={
        "mensagem": f"Notificações enviadas para {len(usuarios)} usuários",
        "detalhes": {"usuarios": [u['email'] for u in usuarios]}
    }
)

result = {"sucesso": True, "usuarios_notificados": len(usuarios)}
result
"""

# Agendar tarefa para executar diariamente às 9h
requests.post(
    f"{BASE_URL}/scheduler/agendar",
    headers=headers,
    json={
        "id": "envio_notificacoes_diario",
        "tipo": "cron",
        "trigger": "0 9 * * *",
        "codigo_python": codigo_tarefa,
        "ativo": True
    }
)
```

### Monitoramento Remoto com Streaming

Exemplo de sistema de monitoramento com streaming de tela:

```python
import requests
from datetime import datetime

BASE_URL = "http://localhost:57625"
TOKEN = "RpaDbServerApi12345678"
headers = {"Authorization": f"Bearer {TOKEN}"}

# 1. Configurar streaming
requests.post(
    f"{BASE_URL}/stream/config",
    headers=headers,
    json={
        "fps": 15,
        "scale": 0.8,
        "quality": 80
    }
)

# 2. Iniciar gravação da sessão
gravacao_response = requests.post(
    f"{BASE_URL}/iniciar_gravacao",
    headers=headers,
    json={
        "nome_arquivo": f"monitoramento_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        "fps": 15,
        "qualidade": "high"
    }
)
gravacao_id = gravacao_response.json()["gravacao_id"]

# 3. Verificar status periodicamente
import time
for i in range(10):  # Monitorar por 10 iterações
    status = requests.get(
        f"{BASE_URL}/status_gravacao/{gravacao_id}",
        headers=headers
    ).json()
    
    print(f"Status: {status['status']}, Duração: {status['duracao_atual']}")
    time.sleep(60)  # Verificar a cada minuto

# 4. Parar gravação
requests.post(
    f"{BASE_URL}/parar_gravacao/{gravacao_id}",
    headers=headers
)
```

### Cliente Python Completo

Classe cliente completa para facilitar o uso da API:

```python
import requests
from typing import Dict, List, Optional, Any

class RPADBServerClient:
    """Cliente completo para RPA DB Server API"""
    
    def __init__(self, base_url: str, token: str):
        self.base_url = base_url.rstrip('/')
        self.headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        self.text_headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "text/plain"
        }
    
    # ========== Banco de Dados ==========
    
    def executar_sql_mariadb(self, query: str) -> Dict:
        """Executa query SELECT no MariaDB"""
        response = requests.post(
            f"{self.base_url}/getsql",
            headers=self.text_headers,
            data=query
        )
        response.raise_for_status()
        return response.json()
    
    def executar_sql_sqlite(self, query: str) -> Dict:
        """Executa query SELECT no SQLite"""
        response = requests.post(
            f"{self.base_url}/getsqldb",
            headers=self.text_headers,
            data=query
        )
        response.raise_for_status()
        return response.json()
    
    def executar_comando_mariadb(self, sql: str) -> Dict:
        """Executa comando INSERT/UPDATE/DELETE no MariaDB"""
        response = requests.post(
            f"{self.base_url}/setsql",
            headers=self.text_headers,
            data=sql
        )
        response.raise_for_status()
        return response.json()
    
    def executar_comando_sqlite(self, sql: str) -> Dict:
        """Executa comando INSERT/UPDATE/DELETE no SQLite"""
        response = requests.post(
            f"{self.base_url}/setsqldb",
            headers=self.text_headers,
            data=sql
        )
        response.raise_for_status()
        return response.json()
    
    # ========== Python ==========
    
    def executar_python(self, codigo: str) -> Dict:
        """Executa código Python síncrono"""
        response = requests.post(
            f"{self.base_url}/executepy",
            headers=self.text_headers,
            data=codigo
        )
        response.raise_for_status()
        return response.json()
    
    def executar_python_async(self, codigo: str) -> Dict:
        """Executa código Python assíncrono"""
        response = requests.post(
            f"{self.base_url}/executepyas",
            headers=self.text_headers,
            data=codigo
        )
        response.raise_for_status()
        return response.json()
    
    def limpar_contexto_python(self) -> Dict:
        """Limpa o contexto Python"""
        response = requests.post(
            f"{self.base_url}/executepy/limpar",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    # ========== Logs ==========
    
    def gravar_log(self, sistema: str, status: str, mensagem: str, detalhes: Optional[Dict] = None) -> Dict:
        """Grava log no SQLite"""
        response = requests.post(
            f"{self.base_url}/log/{sistema}/{status}",
            headers=self.headers,
            json={
                "mensagem": mensagem,
                "detalhes": detalhes or {}
            }
        )
        response.raise_for_status()
        return response.json()
    
    def listar_logs(self, sistema: Optional[str] = None, status: Optional[str] = None,
                   data_inicio: Optional[str] = None, data_fim: Optional[str] = None,
                   limit: int = 100, offset: int = 0) -> Dict:
        """Lista logs do SQLite"""
        params = {"limit": limit, "offset": offset}
        if sistema:
            params["sistema"] = sistema
        if status:
            params["status"] = status
        if data_inicio:
            params["data_inicio"] = data_inicio
        if data_fim:
            params["data_fim"] = data_fim
        
        response = requests.get(
            f"{self.base_url}/log/listar",
            headers=self.headers,
            params=params
        )
        response.raise_for_status()
        return response.json()
    
    # ========== Agendador ==========
    
    def agendar_tarefa(self, job_id: str, tipo: str, trigger: Any, codigo_python: str, ativo: bool = True) -> Dict:
        """Agenda uma nova tarefa"""
        payload = {
            "id": job_id,
            "tipo": tipo,
            "codigo_python": codigo_python,
            "ativo": ativo
        }
        
        if tipo == "cron":
            payload["trigger"] = trigger
        elif tipo == "interval":
            payload["trigger"] = trigger
        elif tipo == "date":
            payload["trigger"] = trigger
        
        response = requests.post(
            f"{self.base_url}/scheduler/agendar",
            headers=self.headers,
            json=payload
        )
        response.raise_for_status()
        return response.json()
    
    def listar_jobs_ativos(self) -> Dict:
        """Lista jobs agendados ativos"""
        response = requests.get(
            f"{self.base_url}/scheduler/agendar/ativos",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def remover_job(self, job_id: str) -> Dict:
        """Remove um job agendado"""
        response = requests.post(
            f"{self.base_url}/scheduler/agendar/remover",
            headers=self.headers,
            json={"id": job_id}
        )
        response.raise_for_status()
        return response.json()
    
    # ========== Navegador ==========
    
    def abrir_navegador(self, headless: bool = False, incognito: bool = False,
                       window_size: Optional[Dict] = None) -> str:
        """Abre uma nova instância do navegador"""
        payload = {
            "headless": headless,
            "incognito": incognito
        }
        if window_size:
            payload["window_size"] = window_size
        
        response = requests.post(
            f"{self.base_url}/browser/abrir",
            headers=self.headers,
            json=payload
        )
        response.raise_for_status()
        return response.json()["browser_id"]
    
    def executar_no_navegador(self, browser_id: str, codigo_python: str) -> Dict:
        """Executa código Python no contexto do navegador"""
        # Nota: O código Python deve usar a variável browser_driver
        response = requests.post(
            f"{self.base_url}/browser/executar",
            headers=self.text_headers,
            data=codigo_python
        )
        response.raise_for_status()
        return response.json()
    
    def executar_javascript(self, browser_id: str, codigo_js: str) -> Dict:
        """Executa JavaScript no console do navegador"""
        response = requests.post(
            f"{self.base_url}/browser/console",
            headers=self.text_headers,
            data=codigo_js
        )
        response.raise_for_status()
        return response.json()
    
    def fechar_navegador(self, browser_id: str) -> Dict:
        """Fecha uma instância do navegador"""
        response = requests.post(
            f"{self.base_url}/browser/fechar",
            headers=self.headers,
            json={"browser_id": browser_id}
        )
        response.raise_for_status()
        return response.json()
    
    # ========== OCR ==========
    
    def processar_ocr_pasta(self, pasta: str, extensoes: List[str], idioma: str = "por",
                           pre_processar: bool = True) -> Dict:
        """Processa pasta com OCR"""
        response = requests.post(
            f"{self.base_url}/ocr/pasta",
            headers=self.headers,
            json={
                "pasta": pasta,
                "extensoes": extensoes,
                "idioma": idioma,
                "pre_processar": pre_processar
            }
        )
        response.raise_for_status()
        return response.json()
    
    # ========== Regex ==========
    
    def carregar_ativador_regex(self, nome: str, padroes: List[Dict]) -> str:
        """Carrega ativador de regex"""
        response = requests.post(
            f"{self.base_url}/regex/ativador",
            headers=self.headers,
            json={
                "nome": nome,
                "padroes": padroes
            }
        )
        response.raise_for_status()
        return response.json()["ativador_id"]
    
    def processar_regex(self, ativador_id: str, dados: Optional[str] = None,
                       arquivo: Optional[str] = None) -> Dict:
        """Processa dados com regex"""
        payload = {"ativador_id": ativador_id}
        if dados:
            payload["dados"] = dados
        if arquivo:
            payload["arquivo"] = arquivo
        
        response = requests.post(
            f"{self.base_url}/regex/dados",
            headers=self.headers,
            json=payload
        )
        response.raise_for_status()
        return response.json()

# Exemplo de uso
client = RPADBServerClient(
    base_url="http://localhost:57625",
    token="RpaDbServerApi12345678"
)

# Usar o cliente
browser_id = client.abrir_navegador()
resultado = client.executar_javascript(browser_id, "return document.title")
print(f"Título da página: {resultado['result']}")
client.fechar_navegador(browser_id)
```

### Integração com RPA Tools (UiPath)

Exemplo de uso em UiPath usando HTTP Request activities:

```csharp
// Abrir navegador
var browserRequest = new HttpRequestMessage
{
    Method = HttpMethod.Post,
    RequestUri = new Uri("http://localhost:57625/browser/abrir"),
    Headers = {
        { "Authorization", "Bearer RpaDbServerApi12345678" }
    },
    Content = new StringContent(
        JsonConvert.SerializeObject(new {
            headless = false,
            incognito = false
        }),
        Encoding.UTF8,
        "application/json"
    )
};

var browserResponse = await httpClient.SendAsync(browserRequest);
var browserData = JsonConvert.DeserializeObject<dynamic>(
    await browserResponse.Content.ReadAsStringAsync()
);
var browserId = browserData.browser_id.ToString();

// Executar código no navegador
var executeRequest = new HttpRequestMessage
{
    Method = HttpMethod.Post,
    RequestUri = new Uri("http://localhost:57625/browser/executar"),
    Headers = {
        { "Authorization", "Bearer RpaDbServerApi12345678" },
        { "Content-Type", "text/plain" }
    },
    Content = new StringContent(@"
driver = browser_driver
driver.get('https://example.com')
result = driver.title
result
    ", Encoding.UTF8, "text/plain")
};

var executeResponse = await httpClient.SendAsync(executeRequest);
var executeData = JsonConvert.DeserializeObject<dynamic>(
    await executeResponse.Content.ReadAsStringAsync()
);
var pageTitle = executeData.result.ToString();
```

---

## Troubleshooting

### Problema: Servidor não inicia

**Sintomas:**
* Erro ao executar `db_server_api.exe`
* Arquivo `db_server_api.json` não é criado

**Soluções:**
1. Verifique se a porta está disponível (se configurada)
2. Verifique permissões de escrita no diretório
3. Verifique o arquivo `config.ini` para erros de sintaxe
4. Consulte `logs/errors.log` para detalhes do erro

### Problema: Erro de encoding

**Sintomas:**
* Erro `'charmap' codec can't encode character`
* Caracteres especiais aparecem incorretamente

**Soluções:**
1. Use `start_server.bat` ou `start_server.ps1` (configuram UTF-8)
2. Configure variáveis de ambiente:
   ```batch
   set PYTHONIOENCODING=utf-8
   set PYTHONUTF8=1
   ```

### Problema: Erro 401 Unauthorized

**Sintomas:**
* Todas as requisições retornam 401
* "Token inválido ou ausente"

**Soluções:**
1. Verifique se o header `Authorization` está presente
2. Verifique se o token está correto no `config.ini`
3. Verifique o formato: `Bearer {token}` (com espaço após "Bearer")

### Problema: Erro de conexão com banco de dados

**Sintomas:**
* Erro ao conectar ao MariaDB/MySQL
* Timeout de conexão

**Soluções:**
1. Verifique se o servidor de banco está rodando
2. Verifique credenciais no `config.ini`
3. Verifique firewall/rede
4. Teste conexão manualmente:
   ```bash
   mysql -h localhost -u root -p
   ```

### Problema: Logs não são criados

**Sintomas:**
* Arquivos de log não aparecem no diretório `logs/`

**Soluções:**
1. Verifique permissões de escrita no diretório `logs/`
2. Verifique configurações de logging no `config.ini`
3. Crie o diretório `logs/` manualmente se não existir

---

## Apêndices

### Apêndice A: Checklist de Configuração Inicial

- [ ] Arquivo `config.ini` criado e configurado
- [ ] Token de autenticação alterado do padrão
- [ ] Configurações de banco de dados verificadas
- [ ] Diretório `logs/` existe e tem permissões de escrita
- [ ] Porta do servidor verificada (ou configurada para automática)
- [ ] Scripts de inicialização testados (`start_server.bat` ou `start_server.ps1`)
- [ ] Servidor inicia sem erros
- [ ] Arquivo `db_server_api.json` é criado após inicialização
- [ ] Documentação Swagger acessível em `/docs`
- [ ] Teste de autenticação bem-sucedido

### Apêndice B: Template de Requisição

#### cURL

```bash
# GET Request
curl -X GET "http://localhost:57625/api/tables" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"

# POST Request
curl -X POST "http://localhost:57625/api/tables/users" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{"name": "João", "email": "joao@example.com"}'

# PUT Request
curl -X PUT "http://localhost:57625/api/tables/users/1" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva"}'

# DELETE Request
curl -X DELETE "http://localhost:57625/api/tables/users/1" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

#### Python (requests)

```python
import requests

BASE_URL = "http://localhost:57625"
TOKEN = "SEU_TOKEN_AQUI"

headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

# GET
response = requests.get(f"{BASE_URL}/api/tables", headers=headers)

# POST
data = {"name": "João", "email": "joao@example.com"}
response = requests.post(f"{BASE_URL}/api/tables/users", headers=headers, json=data)

# PUT
data = {"name": "João Silva"}
response = requests.put(f"{BASE_URL}/api/tables/users/1", headers=headers, json=data)

# DELETE
response = requests.delete(f"{BASE_URL}/api/tables/users/1", headers=headers)
```

#### JavaScript (fetch)

```javascript
const BASE_URL = 'http://localhost:57625';
const TOKEN = 'SEU_TOKEN_AQUI';

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type': 'application/json'
};

// GET
fetch(`${BASE_URL}/api/tables`, { headers })
  .then(res => res.json())
  .then(data => console.log(data));

// POST
fetch(`${BASE_URL}/api/tables/users`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ name: 'João', email: 'joao@example.com' })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

### Apêndice C: Exemplo de config.ini Completo

```ini
[server]
port = 8000

[database]
usar_mariadb = false
host = localhost
port = 3306
user = root
password = sua_senha_aqui
database = meu_banco

[stream]
habilitado = true

[security]
token = seu_token_seguro_aqui_altere_em_producao

[logging]
log_terminal = true
log_requests_separate = true
log_errors_separate = true
log_exclude_routes = /docs,/openapi.json,/favicon.ico
log_include_routes = *
log_requests_file = requests.log
log_errors_file = errors.log
```

### Apêndice D: Glossário

#### API REST
Application Programming Interface que segue os princípios REST (Representational State Transfer).

#### APScheduler
Biblioteca Python para agendamento de tarefas com suporte a triggers cron, interval e date.

#### ASGI
Asynchronous Server Gateway Interface - Protocolo para servidores web assíncronos em Python.

#### Bearer Token
Tipo de autenticação onde o token é enviado no header `Authorization` com o prefixo "Bearer".

#### Browser Automation
Automação de navegador web através de controle programático de ações do usuário.

#### Content-Type text/plain
Tipo de conteúdo usado para endpoints que recebem código SQL ou Python diretamente como texto.

#### Contexto Isolado
Ambiente Python separado que mantém estado entre execuções, permitindo reutilização de variáveis e imports.

#### Cron Expression
Expressão que define quando uma tarefa agendada deve ser executada (ex: `0 9 * * *` = todo dia às 9h).

#### FastAPI
Framework web moderno e rápido para Python baseado em type hints e padrões assíncronos.

#### FFmpeg
Ferramenta para processamento de vídeo e áudio, usada para streaming e gravação de tela.

#### Headless Browser
Navegador executado sem interface gráfica, ideal para automação em servidores.

#### MJPEG Stream
Formato de streaming de vídeo onde cada frame é uma imagem JPEG independente.

#### OCR (Optical Character Recognition)
Reconhecimento óptico de caracteres - tecnologia para extrair texto de imagens e PDFs.

#### OpenAPI
Especificação para APIs RESTful, anteriormente conhecida como Swagger.

#### Playwright
Biblioteca moderna para automação de navegador, alternativa ao Selenium.

#### RPA (Robotic Process Automation)
Automação de processos robóticos - uso de software para automatizar tarefas repetitivas.

#### Selenium WebDriver
Ferramenta para automação de navegadores web, permite controle programático do Chrome/Firefox/etc.

#### SQL Injection
Tipo de ataque onde código SQL malicioso é inserido em inputs não validados.

#### SQLite
Banco de dados relacional embutido, armazenado em arquivo único.

#### Swagger UI
Interface web para visualizar e testar APIs documentadas com OpenAPI.

#### Tesseract OCR
Motor de OCR open-source desenvolvido pelo Google para reconhecimento de texto.

#### Trigger
Condição ou evento que dispara a execução de uma tarefa agendada.

#### Uvicorn
Servidor ASGI de alta performance para aplicações Python.

#### WebDriver
Interface que permite controle programático de navegadores web.

---

## Conclusão

O RPA DB Server API fornece uma solução completa e abrangente para automação de processos RPA. Com seus múltiplos módulos integrados - navegador web, banco de dados, execução Python, agendamento, streaming, OCR e regex - é uma ferramenta poderosa que elimina a necessidade de integrar múltiplas ferramentas separadas.

### Principais Diferenciais

1. **Solução Tudo-em-Um**: Uma única API para todas as necessidades de automação
2. **Fácil Integração**: REST API padrão com documentação Swagger interativa
3. **Alta Flexibilidade**: Suporte a múltiplos bancos de dados e execução dinâmica de código
4. **Segurança**: Autenticação por token e contextos isolados para execução Python
5. **Observabilidade**: Sistema de logs completo e streaming de tela para monitoramento
6. **Portabilidade**: Executável standalone sem dependências externas

### Próximos Passos

1. Configure o `config.ini` conforme suas necessidades
2. Altere o token de autenticação padrão
3. Inicie o servidor usando os scripts fornecidos
4. Acesse `/docs` para explorar a API interativamente
5. Teste os diferentes módulos (navegador, banco, Python, etc.)
6. Integre a API em suas aplicações usando os exemplos fornecidos
7. Configure tarefas agendadas para automações recorrentes
8. Explore o sistema de logs para auditoria e debugging

### Recursos Adicionais

* **Documentação Swagger**: `http://localhost:{porta}/docs`
* **Schema OpenAPI**: `http://localhost:{porta}/openapi.json`
* **Status do servidor**: Arquivo `db_server_api.json`
* **Stream de tela**: `http://localhost:{porta}/tela`
* **Interface de streaming**: `http://localhost:{porta}/stream_fullscreen`

### Suporte e Contribuições

Para dúvidas, problemas ou sugestões, consulte a documentação Swagger ou entre em contato com a equipe de desenvolvimento.

---

*Última atualização: 2025-11-05*
*Versão do Playbook: 1.0*
*Versão da API: Consulte `/docs` para versão atual*

