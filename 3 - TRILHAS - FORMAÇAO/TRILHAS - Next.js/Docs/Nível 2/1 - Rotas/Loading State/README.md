# Loading State

O arquivo ``loading.tsx`` tem uma função simples, que é exibir uma interface temporária de carregamento enquanto o conteúdo da página está sendo carregado.

Vamos ver um exemplo prático. Porém, para isso, precisamos primeiro atrasar o carregamento da página ``/about``, com uma função que simula um slow data.

**Arquivo: ``app/(marketing)/about/page.tsx``**
```
    async function getAboutData() {  → Função para simular um slow data
    await new Promise(resolve => setTimeout(resolve, 2000))
    return { founded: 2026, team: 'Distributed' }
    }

    export default async function AboutPage() {
        const data = await getAboutData()

        return (
            <div className="max-w-2xl">
                <h1 className="mb-4 font-bold text-3xl">About Us</h1>

                <p className="text-gray-600">
                    This page uses the marketing layout. Notice the header and footer
                    are defined once in the layout and wrap this content automatically.
                </p>
            </div>
        )
    }
```

Agora, com a função de slow data desenvolvida, podemos criar a nossa ``loading.tsx`` que será executada enquanto a página ``/about`` não for devidamente carregada.


**Arquivo: ``app/(marketing)/about/loading.tsx``**
```
    export default function Loading() {
        return (
            <div className="animate-pulse">
            <div className="mb-4 h-8 w-1/3 rounded bg-gray-200" />
            <div className="mb-2 h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            </div>
        )
    }
```

Quando o usuário acessar ``/about``, o Next.js poderá apresentar automaticamente o conteúdo de loading.tsx enquanto a página estiver aguardando os dados necessários para renderização.

Não é necessário importar loading.tsx dentro de page.tsx. 

## Modo de reidenização do loading.tsx

O Next.js não exige que o ``loading.tsx`` esteja na mesma pasta do page.tsx para funcionar. O comportamento depende da hierarquia de pastas (segmentos de rota) no App Router.

1. ``loading.tsx`` na mesma pasta de ``page.tsx``
```text
    app/
    ├── about/
    │   ├── page.tsx      → Coberto
    │   └── loading.tsx   → Arquivo loading.tsx da rota /about
```
Nesse cenário, o loading.tsx será utilizado como interface de carregamento da rota /bout.

2. ``loading.tsx`` em uma pasta superior
```text
    app/
    ├── loading.tsx      → Arquivo loading.tsx da rota
    ├── page.tsx.tsx     → Coberto
    ├── about/
    │   └── page.tsx     → Coberto
```
Nesse cenário, o ``app/loading.tsx`` poderá ser utilizado tanto para a página inicial, quanto para a página about. Isso acontece porque o Next.js aplica automaticamente o loading.tsx ao conteúdo da página e aos segmentos filhos da pasta em que ele está definido.

## Pontos importantes

- **Automático:** o Next.js reconhece o arquivo pelo nome loading.tsx.

- **Por segmento de rota:** você pode criar diferentes telas de carregamento para diferentes partes da aplicação.

- **Melhora a experiência do usuário:** fornece feedback visual enquanto o conteúdo está pendente.


**Resumo:** O ``loading.tsx`` é uma convenção de arquivo do App Router do Next.js utilizada para apresentar uma interface de carregamento enquanto o conteúdo de uma rota está sendo renderizado. Sua implementação é automática, baseada em React Suspense, e permite melhorar a experiência do usuário durante operações assíncronas.

[Documentação oficial: Next.js — loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)