# Guia Prático de Comandos do Anypoint Design Center (API Designer e Flow Designer)

## 📋 Índice

1. Introdução e Escopo
2. Conceitos do Design Center
   - API Designer (RAML/OpenAPI)
   - Mocking Service
   - Publicação no Exchange
   - Flow Designer (low-code)
3. Anypoint CLI aplicada ao Design Center
   - Autenticação e contextos (org/env)
   - Exchange: publicar/baixar assets
   - Runtime Manager: deploy/logs para apps geradas
   - API Manager: instanciar API e aplicar políticas
4. Exemplos Práticos
   - API mínima em RAML (CRUD) + mocking e testes
   - API mínima em OpenAPI + mocking e testes
   - Pipeline CI/CD (export/import, Exchange, deploy via CLI)
5. Boas Práticas
6. Troubleshooting Comum

---

## 1. Introdução e Escopo

Este guia foca nos comandos e fluxos práticos para trabalhar com o Design Center, cobrindo API Designer (RAML/OpenAPI), Flow Designer, e automações usuais com a Anypoint CLI (Exchange, Runtime Manager e API Manager) que sustentam pipelines CI/CD.

---

## 2. Conceitos do Design Center

### API Designer (RAML/OpenAPI)
- Modelagem de APIs em RAML 1.0 ou OpenAPI 3.x.
- Geração de mocks, documentação e publicação no Exchange.

### Mocking Service
- Mock de endpoints a partir do contrato (RAML/OAS) para testes rápidos.
- Útil para desenvolvimento paralelo entre backend e consumidores.

### Publicação no Exchange
- Exchange é o catálogo central (APIs, conectores, templates). Permite descobrir, versionar e reutilizar ativos.

### Flow Designer (low-code)
- Construção de integrações por arrastar/soltar.
- Integra-se com Runtime Manager para implantação.

---

## 2.1 Referência Completa RAML 1.0 (elementos e sintaxe)

Esta seção lista os elementos mais usados do RAML 1.0 (os “comandos” do RAML), com exemplos rápidos.

### Cabeçalho e metadados
```yaml
#%RAML 1.0
title: Products API
version: v1
baseUri: https://api.example.com/{version}
mediaType: application/json
protocols: [ HTTPS ]
documentation:
  - title: Introdução
    content: |
      Descrição geral da API.
baseUriParameters:
  version:
    type: string
    description: Versão da API
```

- **title, version, baseUri, mediaType, protocols**: metadados globais.
- **documentation**: páginas de documentação.
- **baseUriParameters**: parâmetros usados em `baseUri`.

### Bibliotecas, includes e organização
```yaml
uses:
  common: libraries/common-library.raml   # importa types/traits/policies nomeados

annotationTypes:
  owner: string
  pii:
    type: boolean

(owner): "time-api-team"                 # anotação aplicada no root
```

- **uses**: importa bibliotecas com `types`, `traits`, `resourceTypes`, `annotationTypes`.
- **annotationTypes** e **(annotationName)**: metadados customizados tipados.
- **!include**: inclui arquivos externos em qualquer lugar que aceite conteúdo: `example: !include examples/get.json`.

### Tipos (types) e validação
```yaml
types:
  Id: string | integer               # união de tipos
  Money:
    type: object
    properties:
      currency: string
      amount:
        type: number
        minimum: 0
  Product:
    type: object
    properties:
      id: Id
      name:
        type: string
        minLength: 1
      price: Money
      tags?:
        type: array
        items: string
        uniqueItems: true
    additionalProperties: false
    examples:
      ok: { id: 1, name: "Keyboard", price: { currency: "USD", amount: 10 } }
      alt: !include examples/product.json
  Upload:
    type: file
    fileTypes: [ image/png, image/jpeg ]
```

- Objetos: `properties`, `additionalProperties`.
- Strings: `minLength`, `maxLength`, `pattern`.
- Números: `minimum`, `maximum`, `multipleOf`.
- Arrays: `items`, `minItems`, `maxItems`, `uniqueItems`.
- União: `type: A | B`.
- Nulável: `type: string | nil`.
- Polimorfismo: `discriminator`, `discriminatorValue` em tipos.

### Traits (comportos reutilizáveis) e Resource Types (templates)
```yaml
traits:
  pageable:
    queryParameters:
      page?: integer
      pageSize?: integer
  secured:
    securedBy: [ oauth_2_0 ]

resourceTypes:
  collection:
    get:
      is: [ pageable ]
      responses:
        200:
          body:
            type: <<typeName>>[]
    post:
      body: <<typeName>>
      responses:
        201:
  item:
    get:
      responses:
        200:
          body: <<typeName>>
```

- Aplique com `is: [ traitA, traitB ]` e `type: collection`/`item` com parâmetros `<<param>>`.

#### O que são e quando usar
- **Traits**: blocos reutilizáveis aplicados a métodos (GET/POST/PUT/DELETE etc.), para padronizar cabeçalhos, parâmetros de consulta, respostas comuns (ex.: erros 400/500) e descrições. Aplicação via `is: [nomeDoTrait]`.
- **Resource Types**: templates de recursos que definem estrutura e métodos padrão (ex.: coleções e itens). Permitem parametrização com `<<param>>` para reutilização consistente em múltiplos recursos.

Exemplo de Trait para respostas de erro e aplicação em um método:
```yaml
traits:
  errorResponses:
    responses:
      400:
        description: Requisição inválida
        body:
          application/json:
            example: |
              {"error": "Requisição inválida"}
      500:
        description: Erro interno do servidor
        body:
          application/json:
            example: |
              {"error": "Erro interno do servidor"}

/items:
  get:
    is: [ errorResponses ]
    description: Obtém lista de itens
    responses:
      200:
        body:
          application/json:
            example: |
              [{"id":1,"nome":"Item 1"},{"id":2,"nome":"Item 2"}]
```

Exemplo de Resource Type de coleção com parâmetros e uso:
```yaml
resourceTypes:
  collection:
    usage: Modelo para recursos de coleção
    get:
      description: Obtém uma lista de <<resourceName>>
      responses:
        200:
          body:
            application/json:
              example: |
                [{"id":1, "nome":"<<resourceNameSingular>> 1"}, {"id":2, "nome":"<<resourceNameSingular>> 2"}]
    post:
      description: Cria um novo <<resourceNameSingular>>
      body:
        application/json:
          example: |
            {"nome": "Novo <<resourceNameSingular>>"}
      responses:
        201:
          body:
            application/json:
              example: |
                {"id": 3, "nome": "Novo <<resourceNameSingular>>"}

/users:
  type:
    collection:
      resourceName: Usuários
      resourceNameSingular: Usuário
```

Benefícios práticos:
- **Consistência**: reduz divergências entre endpoints.
- **Reutilização**: evita duplicação e facilita manutenção.
- **Padronização**: facilita a aplicação de políticas (ex.: paginação, erros, segurança) em larga escala.

### Segurança
```yaml
securitySchemes:
  oauth_2_0:
    description: OAuth 2.0
    type: OAuth 2.0
    settings:
      authorizationUri: https://auth.example.com/oauth2/auth
      accessTokenUri: https://auth.example.com/oauth2/token
      authorizationGrants: [ authorization_code, client_credentials ]
      scopes: [ read, write ]
  apiKey:
    type: x-api-key
    describedBy:
      headers:
        x-api-key: string

securedBy: [ oauth_2_0 ]   # padrão global (pode ser sobrescrito em recursos/métodos)
```

- Em recursos/métodos: `securedBy: [ apiKey ]` ou `[ null ]` para endpoint público.

### Recursos, métodos, parâmetros e payloads
```yaml
/products:
  type: collection
  typeName: Product                 # parâmetro para resourceType
  is: [ secured, pageable ]
  displayName: Products
  description: Gerencia produtos
  get:
    queryParameters:
      q?: string
    headers:
      x-trace-id?: string
    responses:
      200:
        body:
          application/json:
            type: Product[]
            examples:
              list: !include examples/products.json
  post:
    body:
      application/json:
        type: Product
        example: !include examples/product.json
    responses:
      201:
  /{id}:
    uriParameters:
      id: Id
    type: item
    typeName: Product
    get:
      responses:
        200:
          body: Product
    put:
      body: Product
      responses:
        200:
    delete:
      responses:
        204:
```

- Métodos suportados: `get, post, put, patch, delete, head, options`.
- Parâmetros: `uriParameters`, `queryParameters`, `headers`.
- Corpo de requisição/resposta: `body` por media type (`application/json`, `application/xml`, `multipart/form-data`, `application/x-www-form-urlencoded`).
  - Para `multipart/form-data` e `x-www-form-urlencoded`, defina um `type: object` com `properties` do formulário.

### Exemplos e schemas externos
- `example` ou `examples` em qualquer nível (type, method, response, body).
- `!include` para incluir JSON/YAML/XML externos.
- Compatível com JSON Schema via `type: !include schemas/product.json` (ou `schemas:` legado, embora preferir `types:` no RAML 1.0).

### Boas práticas de RAML
- Centralize validações em `types` e reutilize com `resourceTypes`/`traits`.
- Prefira `examples` nomeados e arquivos externos versionados.
- Use `annotationTypes` para metadados (ex.: classificação PII, donos de recurso).
- Defina `securedBy` global e explicite exceções com `[ null ]` quando necessário.
- Para versionamento, use `baseUri` com `{version}` e publique os contratos no Exchange.

## 3. Anypoint CLI aplicada ao Design Center

Antes de usar a CLI, configure o contexto de organização/ambiente.

### 3.1 Autenticação e contextos
```bash
# Login interativo (ou usar clientId/secret via flags/env)
anypoint-cli --username <EMAIL> --password <PASSWORD> --organization "<ORG_NAME>" --environment "<ENV_NAME>"

# Alternar organização/ambiente
anypoint-cli config set organization "<ORG_NAME>"
anypoint-cli config set environment "<ENV_NAME>"
```

### 3.2 Exchange: publicar/baixar assets
```bash
# Publicar API (RAML/OAS) no Exchange
anypoint-cli exchange:asset:upload \
  --groupId <GROUP_ID> \
  --assetId my-api \
  --version 1.0.0 \
  --name "My API" \
  --type "raml" \
  ./api-contracts/my-api-raml.zip

# Baixar asset
anypoint-cli exchange:asset:download \
  --groupId <GROUP_ID> \
  --assetId my-api \
  --version 1.0.0 \
  --target ./dist
```

### 3.3 Runtime Manager: deploy/logs (apps do Flow Designer)
```bash
# Deploy de aplicação (CloudHub)
anypoint-cli runtime-mgr:application:deploy \
  --target CloudHub \
  --workerSize 0.1 \
  --workers 1 \
  --runtime 4.5.10 \
  my-app ./target/my-app.jar

# Modificar/env vars
anypoint-cli runtime-mgr:application:modify my-app \
  --properties env=prod,featureX=true

# Logs em tempo real
anypoint-cli runtime-mgr:application:logs my-app --tail
```

### 3.4 API Manager: instanciar API e aplicar políticas
```bash
# Criar instância de API (a partir do Exchange)
anypoint-cli api-mgr:api:create \
  --name "My API" \
  --assetId my-api \
  --groupId <GROUP_ID> \
  --version 1.0.0 \
  --type asset \
  --endpointUri https://api.example.com/v1

# Aplicar política (ex.: Rate Limiting)
anypoint-cli api-mgr:policy:apply <API_ID> \
  --policyName "Rate limiting" \
  --config '{"maximumRequests": 100, "timePeriodInMilliseconds": 60000}'
```

---

## 4. Exemplos Práticos

### 4.1 API mínima em RAML (CRUD)
```raml
#%RAML 1.0
/title: Products API
/version: v1
/baseUri: https://api.example.com/{version}
/mediaType: application/json

/types:
  Product:
    type: object
    properties:
      id: string
      name: string
      price: number

/products:
  get:
    responses:
      200:
        body:
          type: Product[]
  post:
    body: Product
    responses:
      201:
  /{id}:
    get:
      responses:
        200:
          body: Product
    put:
      body: Product
      responses:
        200:
    delete:
      responses:
        204:
```
- Use o Mocking Service para validar respostas rapidamente.

### 4.2 API mínima em OpenAPI
```yaml
openapi: 3.0.3
info:
  title: Products API
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /products:
    get:
      responses:
        '200':
          description: OK
    post:
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Product'
      responses:
        '201': { description: Created }
  /products/{id}:
    get:
      responses:
        '200':
          description: OK
    put:
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Product'
      responses:
        '200': { description: OK }
    delete:
      responses:
        '204': { description: No Content }
components:
  schemas:
    Product:
      type: object
      properties:
        id: { type: string }
        name: { type: string }
        price: { type: number }
```

### 4.3 Pipeline CI/CD (Exchange + Deploy)
```bash
# 1) Empacotar contrato RAML/OAS e publicar no Exchange
anypoint-cli exchange:asset:upload --groupId <GROUP> --assetId my-api --version 1.0.0 --type raml ./dist/my-api.zip

# 2) Gerar projeto do Flow Designer (ou baixar artefato do Exchange)
anypoint-cli exchange:asset:download --groupId <GROUP> --assetId my-flow --version 1.0.0 --target ./workspace

# 3) Build (Maven) e deploy no Runtime Manager
mvn -f ./workspace/pom.xml clean package
anypoint-cli runtime-mgr:application:deploy --target CloudHub my-flow ./workspace/target/my-flow.jar
```

---

## 5. Boas Práticas
- Versione contratos (semver) e publique no Exchange com changelog.
- Use Mocking para testes de contrato cedo; evite acoplamento à implementação.
- Parametrize ambientes (properties) e evite segredos no repositório (use Secrets Manager).
- Automatize deploys com pipelines (CI/CD) e gates de qualidade (MUnit + políticas obrigatórias).

---

## 6. Troubleshooting Comum
- Erros de permissão na CLI: confirme org/env ativos (`anypoint-cli config list`).
- Falha ao aplicar política: verifique `API_ID` e compatibilidade da política com o tipo de endpoint.
- Deploy falha no CloudHub: cheque versão do runtime e limites de workers/CPU.
- Mocking não responde: valide sintaxe RAML/OAS e reinicie o serviço de mock.
