# Guia Completo do Anypoint Studio (Comandos, DataWeave e Ferramentas)

## 📋 Índice
1. Introdução ao Anypoint Studio
2. Arquitetura e Projetos
3. Comandos/Operações do Studio
4. DataWeave 2.0 (Guia Prático)
5. Ferramentas Integradas (APIkit, MUnit, Exchange, Maven)
6. Deploy (CloudHub/On-Prem) e Runtime Manager
7. Nó MuleSoft RPA Builder (bot)
8. Exemplos End-to-End
9. Boas Práticas
10. Troubleshooting Comum

---

## 1. Introdução ao Anypoint Studio
- IDE da MuleSoft para criar integrações, APIs e automações.
- Integra-se com Anypoint Platform (Exchange, API Manager, Runtime Manager).

---

## 2. Arquitetura e Projetos
- Estrutura típica: `src/main/mule`, `src/main/resources`, `mule-artifact.json`, `pom.xml`.
- Paleta: Connectors, Processors, Routers, Transformers.
- Execução local com embedded runtime e console de logs.

---

## 3. Comandos/Operações do Studio
- Run/Debug projeto, breakpoints em Processors.
- Profiles de ambiente (CloudHub, Standalone), propriedades por ambiente.
- Empacotamento com Maven (`mvn clean package`).

---

## 4. DataWeave 2.0 (Guia Prático)

### 4.1 Sintaxe básica
```dw
%dw 2.0
output application/json
---
{
  message: "Hello, DataWeave"
}
```

### 4.2 Transformações comuns
```dw
%dw 2.0
input payload application/json
output application/xml
---
root: payload
```

```dw
%dw 2.0
var prices = [10, 20, 35]
output application/json
---
{
  total: prices reduce ($$ + $),
  avg: (prices reduce ($$ + $)) / sizeOf(prices)
}
```

### 4.3 Filtragem, mapeamento, redução
```dw
%dw 2.0
input payload application/json
output application/json
---
payload.items
  filter $.active == true
  map {
    id: $.id,
    name: upper($.name)
  }
```

### 4.4 Tipagem e módulos
```dw
%dw 2.0
import * from dw::core::Strings
output application/json
---
{
  norm: replace("a_b-c", /[-_]/, " ")
}
```

### 4.5 Tratamento de erros
```dw
%dw 2.0
output application/json
var value = "10x"
---
{
  safeNumber: (do number(value)) default 0
}
```

### 4.6 Desempenho
- Prefira `mapObject` para objetos e `map` para arrays.
- Evite casts desnecessários; use `default` para valores ausentes.
- Padronize `mime types` entre flows (JSON, XML, CSV) e valide schemas.

---

## 5. Ferramentas Integradas

### 5.1 APIkit
- A partir de RAML/OAS, gera scaffolding de API.
- Facilita roteamento, validação e documentação.

### 5.2 MUnit (Testes)
- Crie testes unitários/integrados para flows.
- Mocks de conectores, validação de payloads, asserts de variáveis e atributos.

### 5.3 Anypoint Exchange
- Procurar e importar assets (APIs, conectores, templates).
- Publicar RAML/OAS e projetos reutilizáveis.

### 5.4 Maven
- Build e versionamento: `groupId`, `artifactId`, `version`.
- Integração com pipelines CI/CD.

---

## 6. Deploy e Runtime Manager
- CloudHub: definição de workers, vCores, propriedades.
- On-Prem/Runtime Fabric: empacotamento e implantação.
- CLI: `runtime-mgr:application:deploy`, `modify`, `logs`.

---

## 7. Nó MuleSoft RPA Builder (bot)

### 7.1 Quando usar
- Automação de tarefas repetitivas em UIs legadas ou sem APIs.
- Integração orquestrada por flows do Mule.

### 7.2 Configuração do nó
- Endpoint do bot (RPA Manager/Orchestrator), credenciais seguras.
- Payload: parâmetros de entrada, anexos; headers para correlação.
- Timeout, retries e política de erro.

### 7.3 Padrões de integração
- Síncrono: aguardar conclusão e retornar resultado.
- Assíncrono: enfileirar pedido, consumir callback/queue.
- Resiliência: idempotência, DLQ, circuit breaker.

### 7.4 Observabilidade
- Logs de requisição/resposta, correlação (correlationId).
- Métricas de sucesso/erro e tempo de execução do bot.

---

## 8. Exemplo End-to-End (HTTP → DW → RPA → DB)

### 8.1 Fluxo simplificado
1) HTTP Listener (entrada JSON)
2) Transformação com DataWeave (normalização do payload)
3) Chamada ao nó RPA (executa automação)
4) Persistência do resultado (Database Connector)

### 8.2 DataWeave (amostra)
```dw
%dw 2.0
input payload application/json
output application/json
---
{
  customerId: payload.customer.id as String,
  items: payload.lines map {
    sku: $.sku,
    qty: $.quantity as Number
  }
}
```

### 8.3 MUnit (teste)
- Mock do nó RPA: retornar resposta simulada.
- Assert do payload transformado e do status final do flow.

---

## 9. Boas Práticas
- Separar contratos (RAML/OAS) do código; publicar no Exchange.
- Padronizar erros (error types) e logging estruturado.
- Parâmetros sensíveis via Secrets Manager.
- Observabilidade: dashboards de métricas e alertas.

---

## 10. Troubleshooting Comum
- Falha de deploy: revisar runtime target e propriedades obrigatórias.
- Erros DW: conferir `mime type` de `output` e castings.
- Nó RPA: checar credenciais, endpoint, tempo de execução e filas.
