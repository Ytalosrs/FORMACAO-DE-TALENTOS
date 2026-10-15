# Rotas Dinâmicas

Nem sempre sabemos de antemão todas as rotas da aplicação. Em um blog, por exemplo, não faz sentido criar uma pasta para cada post ``/blog/post-1, /blog/post-2 ...``. Para isso o App Router oferece as **rotas dinâmicas**: um segmento da URL vira uma variável, e a mesma ``page.tsx`` serve para todos os valores possíveis.

Para criar um segmento dinâmico, basta colocar o nome da pasta entre colchetes: ``[nomeDoParametro]``.

```
    app/
    ├── blog/
    │   ├── page.tsx          → /blog
    │   └── [slug]/
    │       └── page.tsx      → /blog/qualquer-coisa
```

## Exemplo prático

Arquivo: ``app/blog/[slug]/page.tsx``

```
    import { notFound } from 'next/navigation'

    const posts = [
        { slug: 'primeiro-post', title: 'Meu primeiro post', content: 'Olá, mundo!' },
        { slug: 'aprendendo-nextjs', title: 'Aprendendo Next.js', content: 'Rotas dinâmicas são incríveis.' },
    ]

    export default async function PostPage({ params }: PageProps<'/blog/[slug]'>) {
        const { slug } = await params

        const post = posts.find((p) => p.slug === slug)

        if (!post) {
            notFound()
        }

        return (
            <article className="mx-auto max-w-2xl p-8">
                <h1 className="mb-4 font-bold text-4xl">{post.title}</h1>
                <p className="text-gray-700">{post.content}</p>
            </article>
        )
    }
```

O que está acontecendo:

1. O Next.js lê o valor da URL e o entrega na prop ``params``.
2. Usamos o ``slug`` para buscar o post (aqui em um array).
3. Se o post não existir, chamamos ``notFound()``, que renderiza o ``not-found.tsx`` mais próximo ([Clique aqui para ver nossa documentação do not-found](../Not-found.tsx/)).


## ``params`` é uma Promise

Esse é o erro mais comum de quem vem de versões antigas. **Desde o Next.js 15**, ``params`` **é uma** ``Promise``, e no **Next.js 16 o acesso síncrono foi removido de vez**. Por isso é obrigatório usar ``await``.

```
    // ❌ Errado (padrão do Next.js 14 ou anterior)
    export default function Page({ params }) {
        return <h1>{params.slug}</h1>
    }

    // ✅ Certo (Next.js 15+)
    export default async function Page({ params }: PageProps<'/blog/[slug]'>) {
        const { slug } = await params
        return <h1>{slug}</h1>
    }
```

> **Dica:** o tipo ``PageProps<'/rota'>`` é gerado automaticamente pelo Next.js (durante o ``next dev`` / ``next build``) e já tipa os parâmetros a partir do nome das pastas. Não é necessário importá-lo.

## Tipos de segmentos dinâmicos

| Convenção          | Exemplo de pasta            | URL                        | ``params``                                              |
| ------------------ | --------------------------- | -------------------------- | ------------------------------------------------------- |
| ``[param]``        | ``app/blog/[slug]``         | ``/blog/a``                | ``{ slug: 'a' }``                                       |
| ``[...param]``     | ``app/docs/[...slug]``      | ``/docs/a/b/c``            | ``{ slug: ['a', 'b', 'c'] }``                           |
| ``[[...param]]``   | ``app/shop/[[...slug]]``    | ``/shop`` ou ``/shop/a/b`` | ``{ slug: undefined }`` ou ``{ slug: ['a', 'b'] }``     |

1. **Segmento simples ``[param]``:** captura **um** segmento da URL. É o caso mais comum.

2. **Catch-all ``[...param]``:** captura **todos** os segmentos seguintes, e o valor chega como array. Útil para documentações com vários níveis (``/docs/react/hooks/useState``). Não responde à rota sem segmento, ou seja, ``/docs`` precisa de sua própria ``page.tsx``.

3. **Catch-all opcional ``[[...param]]``:** igual ao anterior, mas **também** responde à rota sem segmento (``/shop``). Nesse caso, ``slug`` chega como ``undefined``.

Também é possível ter **mais de um parâmetro** na mesma rota:

```
    app/
    └── loja/
        └── [categoria]/
            └── [produtoId]/
                └── page.tsx    → /loja/camisetas/42
                                  params = { categoria: 'camisetas', produtoId: '42' }
```

> **Atenção:** os valores de ``params`` são sempre **string** (ou array de strings). Se precisar de um número, converta: ``Number(produtoId)``.

## Pré-gerando páginas com ``generateStaticParams``

Por padrão, uma rota dinâmica é renderizada **sob demanda**, a cada requisição. Se você já sabe quais valores existem (ex.: os posts do blog), pode pedir ao Next.js para gerar essas páginas **em tempo de build**, deixando-as estáticas e muito mais rápidas.

Arquivo: ``app/blog/[slug]/page.tsx``

```
    export async function generateStaticParams() {
        const posts = await fetch('https://api.exemplo.com/posts').then((res) => res.json())

        return posts.map((post: { slug: string }) => ({
            slug: post.slug,
        }))
    }
```

A função retorna uma lista de objetos, um para cada página que deve ser gerada. Slugs que não estiverem na lista continuam funcionando e são renderizados sob demanda.

## Lendo parâmetros em Client Components

``params`` só chega como prop em **Server Components** (``page.tsx``, ``layout.tsx``). Em um componente com ``'use client'``, utilize o hook ``useParams``:

Arquivo: ``app/blog/[slug]/LikeButton.tsx``

```
    'use client'

    import { useParams } from 'next/navigation'

    export default function LikeButton() {
        const { slug } = useParams<{ slug: string }>()

        return <button onClick={() => console.log(`Curtiu: ${slug}`)}>Curtir</button>
    }
```

## Pontos importantes

- **Colchetes no nome da pasta:** ``[param]`` transforma o segmento em variável. O nome entre colchetes vira a chave em ``params``.

- **Sempre ``await params``:** no Next.js 16 o acesso síncrono não existe mais.

- **Valores sempre são string:** converta quando precisar de outro tipo.

- **Valide e trate o "não encontrado":** qualquer valor pode chegar pela URL, então use ``notFound()`` quando o recurso não existir.

- **Use ``generateStaticParams``** quando os valores forem conhecidos no build, para ganhar performance.

[Documentação oficial: Next.js — Dynamic Route Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)