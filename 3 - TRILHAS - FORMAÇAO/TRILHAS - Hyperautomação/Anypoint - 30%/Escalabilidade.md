# Escalabilidade Horizontal e Vertical no MuleSoft/Anypoint Platform

Com base na documentação oficial da MuleSoft/Salesforce, aqui está uma visão detalhada dos dois tipos de escalabilidade.

---

## Conceitos Fundamentais

A distinção central, conforme a documentação oficial:[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)

- **Escalonamento Vertical (Scale Up/Down):** aumentar os recursos (CPU e memória) de um worker existente, alterando seu tamanho de vCore.
    
- **Escalonamento Horizontal (Scale Out/In):** adicionar mais instâncias de workers para distribuir a carga entre múltiplos nós.
    

---

## Escalabilidade no CloudHub (1.0)

## Escalonamento Vertical — Tamanhos de Worker

A documentação do **CloudHub Architecture** define os tamanhos de worker disponíveis:[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)

|Worker Size|Worker Memory|Heap Memory|Disk Storage|
|---|---|---|---|
|0.1 vCores|1 GB|500 MB|8 GB|
|0.2 vCores|2 GB|1 GB|8 GB|
|1 vCore|4 GB|2 GB|12 GB|
|2 vCores|8 GB|4 GB|40 GB|
|4 vCores|16 GB|8 GB|88 GB|
|8 vCores|32 GB|16 GB|168 GB|
|16 vCores|64 GB|32 GB|328 GB|

> Workers de 0.1 e 0.2 vCores fornecem CPU e I/O limitados, mas podem fazer burst para velocidades maiores por curtos períodos (útil para cargas esporádicas e startup).[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)

## Escalonamento Horizontal — Worker Scale Out

A documentação oficial descreve que é possível escalar horizontalmente adicionando múltiplos workers e habilitando **Persistent Queues** para distribuir cargas:[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)

- O **HTTP Load Balancer** distribui requisições entre os workers em modo **round-robin**.
    
- O CloudHub automaticamente distribui múltiplos workers de uma mesma aplicação em **dois ou mais data centers** para máxima confiabilidade.
    
- **Persistent Queues** garantem zero perda de mensagens, permitem comunicação inter-worker e distribuição de cargas não-HTTP — se um worker falhar, o processamento é assumido pelos demais.[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)
    

---

## Autoscaling no CloudHub (1.0)

A documentação de **Autoscaling in CloudHub** descreve como automatizar as decisões de escalonamento:[docs.mulesoft](https://docs.mulesoft.com/cloudhub/autoscaling-in-cloudhub)

> "You can define policies that respond to CPU or memory usage thresholds by scaling up or scaling down the processing resources used by an application."[docs.mulesoft](https://docs.mulesoft.com/cloudhub/autoscaling-in-cloudhub)

## Como funciona

- As políticas de autoscaling são baseadas em **uso de CPU ou Memória**.
    
- Cada política define condições de **scale up** e **scale down**, incluindo:
    
    - Percentual de uso
        
    - Período de tempo que o nível deve ser sustentado
        
    - **Cool-down period** (bloqueio de novas ações após um evento de scaling)
        
- A ação pode modificar o **número de workers** (horizontal) ou o **tamanho dos workers** (vertical).
    
- Limites máximos para autoscaling: **4 workers** e **16 vCores** por worker.[docs.mulesoft](https://docs.mulesoft.com/cloudhub/autoscaling-in-cloudhub)
    

**Considerações importantes:**[docs.mulesoft](https://docs.mulesoft.com/cloudhub/autoscaling-in-cloudhub)

- O scaling acontece **um passo por vez**.
    
- Apenas **uma política de autoscaling** pode ser aplicada por aplicação.
    
- Se o limite de vCores da organização for atingido, o autoscaling falha — é necessário liberar vCores ou aumentar o limite contratado.
    
- Requer **Enterprise License Agreement (ELA)** e não está disponível para organizações com Usage-based Pricing (UBP).
    

---

## Escalabilidade no CloudHub 2.0

O CloudHub 2.0 é baseado em Kubernetes e oferece granularidade maior:[samaintegrations](https://samaintegrations.com/mulesoft-deployment-models-cloudhub-vs-runtime-fabric/)

- **Tamanho mínimo de réplica:** 0.25 vCore (250 mCPU / 1 Gi)
    
- **Máximo por aplicação:** 80 réplicas × 10 vCores = equivalente a 800 vCores
    
- **Autoscaling disponível via:**
    
    - **Horizontal Pod Autoscaler (HPA)** — padrão, baseado em CPU/memória (escalonamento horizontal)
        
    - **KEDA 2.12+** — escalers para Kafka, RabbitMQ, Azure Service Bus, AWS SQS, Prometheus, etc.
        
    - **Scheduled scaling policies** — ex: ramp-up para Black Friday
        
- Pool pré-aquecido mantém ~15% de capacidade de reserva por região para reduzir latência de cold-start.[samaintegrations](https://samaintegrations.com/mulesoft-deployment-models-cloudhub-vs-runtime-fabric/)
    

---

## Escalabilidade no Runtime Fabric (RTF)

O **Runtime Fabric** roda sobre Kubernetes gerenciado pelo cliente e oferece ainda mais controle:[samaintegrations](https://samaintegrations.com/mulesoft-deployment-models-cloudhub-vs-runtime-fabric/)

- Suporta perfis de recursos com granularidade sub-vCore (ex: 0.1 vCore para instâncias leves do Flex Gateway)
    
- **Vertical Pod Autoscaling (VPA)** suportado junto com HPA
    
- **Cluster Autoscaler + Karpenter (AWS)** pode adicionar novos nós em menos de 90 segundos
    
- Latência observada p99: **4–8 ms** para chamadas intra-cluster (vs. 18–35 ms no CloudHub entre AZs)[samaintegrations](https://samaintegrations.com/mulesoft-deployment-models-cloudhub-vs-runtime-fabric/)
    

---

## Quando usar cada abordagem

Com base na documentação:dzone+1

|Cenário|Recomendação|
|---|---|

|Cenário|Recomendação|
|---|---|
|Poucos requests, mas payloads muito grandes|**Vertical** — aumentar o tamanho do vCore para processar cargas pesadas|
|Muitos requests simultâneos, alta concorrência|**Horizontal** — adicionar mais workers para distribuir a carga|
|Alta disponibilidade e tolerância a falhas|**Horizontal** — múltiplos workers em data centers distintos|
|Cargas previsíveis que crescem gradualmente|**Vertical** — mais simples de implementar|
|Picos imprevisíveis de tráfego|**Horizontal com Autoscaling** — maior elasticidade|

---

## Disponibilidade e Redundância

O CloudHub é projetado para alta disponibilidade com múltiplas camadas:[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)

- Todos os serviços de plataforma têm **pelo menos uma camada de redundância** em **dois ou mais data centers**, separados por no mínimo 60 milhas.
    
- **Intelligent Healing:** se o hardware subjacente falhar, a plataforma migra a aplicação para um novo worker automaticamente.
    
- **Zero-Downtime Updates:** durante um deploy, a versão antiga continua rodando até a nova estar completamente inicializada.[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)
    

---

**Referências oficiais consultadas:**

- [CloudHub Architecture](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)[docs.mulesoft](https://docs.mulesoft.com/cloudhub/cloudhub-architecture)
    
- [Autoscaling in CloudHub](https://docs.mulesoft.com/cloudhub/autoscaling-in-cloudhub)[docs.mulesoft](https://docs.mulesoft.com/cloudhub/autoscaling-in-cloudhub)
    
- [Salesforce Blog: CloudHub vs Runtime Fabric](https://www.salesforce.com/blog/cloudhub-vs-runtime-fabric/)[salesforce](https://www.salesforce.com/blog/cloudhub-vs-runtime-fabric/)