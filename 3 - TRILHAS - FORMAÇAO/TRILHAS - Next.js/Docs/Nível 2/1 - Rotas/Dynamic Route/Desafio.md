# Desafio: Catálogo de produtos com rotas dinâmicas

Neste desafio você vai construir um pequeno catálogo de produtos utilizando **rotas dinâmicas** do App Router. A ideia é praticar a criação de segmentos dinâmicos, a leitura de ``params`` e o tratamento de rotas que não existem.

## Dados

Crie o arquivo ``app/loja/data.ts`` com os dados abaixo. Eles serão a "base de dados" do desafio.

```
    export const produtos = [
        { id: '1', categoria: 'camisetas', nome: 'Camiseta Básica', preco: 49.9 },
        { id: '2', categoria: 'camisetas', nome: 'Camiseta Estampada', preco: 69.9 },
        { id: '3', categoria: 'calcas', nome: 'Calça Jeans', preco: 159.9 },
        { id: '4', categoria: 'calcas', nome: 'Calça Moletom', preco: 119.9 },
        { id: '5', categoria: 'tenis', nome: 'Tênis Casual', preco: 249.9 },
    ]
```

## Estrutura esperada

```
    app/
    └── loja/
        ├── data.ts
        ├── page.tsx                    → /loja
        └── [categoria]/
            ├── page.tsx                → /loja/camisetas
            ├── not-found.tsx
            └── [produtoId]/
                └── page.tsx            → /loja/camisetas/1
```

## Requisitos

1. **Página ``/loja``**
    - Liste todas as categorias existentes (sem repetir).
    - Cada categoria deve ser um ``Link`` para ``/loja/[categoria]``.

2. **Página ``/loja/[categoria]``**
    - Leia o parâmetro ``categoria`` a partir de ``params``.
    - Exiba o nome da categoria como título e liste seus produtos.
    - Cada produto deve ser um ``Link`` para ``/loja/[categoria]/[produtoId]``.
    - Se a categoria não existir (ex.: ``/loja/bones``), chame ``notFound()``.

3. **Página ``/loja/[categoria]/[produtoId]``**
    - Leia **os dois** parâmetros: ``categoria`` e ``produtoId``.
    - Exiba o nome e o preço do produto (formatado em reais, ex.: ``R$ 49,90``).
    - Se o produto não existir **ou** não pertencer à categoria da URL (ex.: ``/loja/tenis/1``), chame ``notFound()``.
    - Adicione um ``Link`` para voltar à categoria.

4. **``not-found.tsx``**
    - Crie uma tela de "não encontrado" personalizada para a loja, com um ``Link`` de volta para ``/loja``.

## Regras

- Utilize ``await params``. Lembre-se: no Next.js 16 o acesso síncrono foi removido.
- Tipe as props das páginas com ``PageProps<'/rota'>``.
- Não crie pastas fixas para categorias ou produtos (ex.: ``app/loja/camisetas``). Tudo deve funcionar a partir dos segmentos dinâmicos.

## Como testar

| URL                      | Resultado esperado                         |
| ------------------------ | ------------------------------------------ |
| ``/loja``                | Lista com camisetas, calcas e tenis        |
| ``/loja/camisetas``      | Lista com os 2 produtos de camisetas       |
| ``/loja/camisetas/2``    | Página da Camiseta Estampada (R$ 69,90)    |
| ``/loja/bones``          | Tela de not-found da loja                  |
| ``/loja/tenis/1``        | Tela de not-found da loja                  |
| ``/loja/calcas/99``      | Tela de not-found da loja                  |

## Desafio extra

- Utilize ``generateStaticParams`` nas páginas ``[categoria]`` e ``[produtoId]`` para gerar todas as páginas em tempo de build. Rode ``npm run build`` e observe no terminal quais rotas foram geradas como estáticas.
