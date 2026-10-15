# Not Found customizada

O arquivo ``not-found.tsx`` é um arquivo especial do App Router. O framework renderiza esse arquivo sozinho quando a rota não existe ou quando o código chama ``notFound()``, e pode ser customizado.

**Exemplo prático**

**Arquivo: ``app/(marketing)/about/not-found.tsx``**
```
    import Link from 'next/link'
 
    export default function NotFound() {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center">
                <h1 className="mb-2 font-bold text-6xl text-gray-900">404</h1>

                <p className="mb-6 text-gray-600 text-xl">Page not found</p>

                <p className="mb-8 max-w-md text-center text-gray-500">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="rounded bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
                >
                    Go home
                </Link>
            </div>
        )
    }
```

Quando o usuário tentar acessar qualquer rota que não exista, o Next.js poderá apresentar automaticamente o conteúdo da nossa not-found.tsx.

## Modo de renderização do not-found.tsx

O Next.js não exige que o ``not-found.tsx`` esteja na mesma pasta do page.tsx para funcionar. O comportamento depende da hierarquia de pastas (segmentos de rota) no App Router.

1. ``not-found.tsx`` na mesma pasta de ``page.tsx``
```text
    app/
    ├── about/
    │   ├── page.tsx      → Coberto
    │   └── not-found.tsx   → Arquivo not-found.tsx da rota /about
```
Nesse cenário, o not-found.tsx será utilizado como página de "não encontrado" da rota ``/about``.

2. ``not-found.tsx`` em uma pasta superior
```text
    app/
    ├── not-found.tsx      → Arquivo not-found.tsx da rota
    ├── page.tsx     → Coberto
    ├── about/
    │   └── page.tsx     → Coberto
```
Nesse cenário, o ``app/not-found.tsx`` poderá ser utilizado tanto para a página inicial, quanto para a página about. Isso acontece porque o Next.js aplica automaticamente o not-found.tsx ao conteúdo da página e aos segmentos filhos da pasta em que ele está definido.

3. ``not-found.tsx`` customizado para uma pasta 
```text
    app/
    ├── not-found.tsx      → Arquivo not-found.tsx da rota raiz
    ├── page.tsx     → Coberto pela raiz
    ├── about/
    │   └── page.tsx    → Coberto pela raiz
    ├── list/
    │   ├── page.tsx       → Coberto pela da list
    │   └── not-found.tsx  → Arquivo not-found.tsx exclusivo da list
```
Nesse cenário, o ``app/not-found.tsx`` presente na raiz do projeto cobre somente seu próprio page.tsx e todas as rotas que não possuírem um ``not-found.tsx`` próprio, como por exemplo, na rota ``/list``, que utilizará a sua própria.

## Pontos importantes

- **Automático:** o Next.js reconhece o arquivo pelo nome not-found.tsx.

- **Por segmento de rota:** você pode criar diferentes telas de 404 para diferentes rotas ou deixar uma padrão para todas na raiz do projeto.

- **Melhora a experiência do usuário:** fornece feedback visual para quando uma rota que não existe for acessada.

[Documentação oficial: Next.js — not-found.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found#not-foundjs)