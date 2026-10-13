# Error.tsx

O ``error.tsx`` é a tela de fallback do App Router. Se a página (ou um componente filho) quebrar na renderização, o Next.js troca só aquele pedaço da rota por esse componente, e o layout da pasta ``header``, ``menu`` e sidebar continua na tela.

A página busca os produtos. Se a API falhar, ela lança o erro e o Next.js mostra o ``error.tsx`` da pasta. Para isso, vamos simular um erro na lista do /products.

**Arquivo: ``app/products/page.tsx``**
```
    export default async function ProdutosPage() {
        const resposta = await fetch('https://api.exemplo.com/produtos')
        if (!resposta.ok) {
            throw new Error('Não foi possível carregar os produtos')
        }

        const produtos = await resposta.json()

        return (
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </ul>
        )
    }
```

O usuário vê o layout normal e, no lugar da lista, essa mensagem com o botão. O clique em Tentar novamente chama`` retry()``, que refaz o fetch da página.

**Arquivo: ``app/products/error.tsx``**
```
    'use client'

    import { useEffect } from 'react'

    export default function ErroProdutos({
        error,
        retry,
    }: {
        error: Error & { digest?: string }
        retry: () => void
    }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
            <main>
                <h2>Não conseguimos carregar os produtos.</h2>
                <p>Tente de novo em alguns segundos.</p>
                <button type="button" onClick={() => retry()}>
                    Tentar novamente
                </button>
            </main>
        )
    }
```

O arquivo precisa ser Client Component ('use client'), porque o boundary roda no cliente e o botão de tentar de novo precisa de interação.

## Modo de reidenização do error.tsx

O Next.js não exige que o ``error.tsx`` esteja na mesma pasta do page.tsx para funcionar. O comportamento depende da hierarquia de pastas (segmentos de rota) no App Router.

1. ``error.tsx`` na mesma pasta de ``page.tsx``
```text
    app/
    ├── about/
    │   ├── page.tsx      
    │   └── error.tsx   → Arquivo error.tsx da rota /about
```
Nesse cenário, o ``error.tsx`` será utilizado como interface de carregamento da rota /bout.

2. ``error.tsx`` em uma pasta superior
```text
    app/
    ├── error.tsx       → Arquivo error.tsx da rota
    ├── page.tsx.tsx    → Coberto
    ├── about/
    │   └── page.tsx    → Coberto
```
Nesse cenário, o ``app/error.tsx`` poderá ser utilizado tanto para a página inicial, quanto para a página about. Isso acontece porque o Next.js aplica automaticamente o error.tsx ao conteúdo da página e aos segmentos filhos da pasta em que ele está definido.

[Documentação oficial: Next.js — error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error#error)