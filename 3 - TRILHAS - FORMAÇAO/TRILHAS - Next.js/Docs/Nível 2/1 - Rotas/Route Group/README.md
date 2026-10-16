# Route Group

É uma pasta que serve para **abrigar e organizar** um conjunto de rotas no App Router sem mudar a URL. Uma route group é criada quando, a partir de uma pasta, cujo nome está entre parênteses `(marketing)`, o Next.js ignora nomes entre parênteses na hora de montar o caminho.

```text
app/
├── (marketing)/
│   └── about/
│   │   ├── page.tsx      → URL: /about   (e não /marketing/about)
│   │   └── loading.tsx
│   └── pricing/
│       ├── page.tsx      → URL: /pricing   (e não /marketing/princing)
│       └── loading.tsx
└── products/
    └── page.tsx          → URL: /products
```

## Para que serve

1. **Organizar o código**. Você agrupa rotas por área (marketing, loja, admin, etc.) sem mexer nas URLs.

2. **Ter layouts diferentes para grupos de rotas**. Cada grupo pode ter seu próprio `layout.tsx`, que vale só para as rotas dentro dele:
```text
app/
├── (marketing)/
│   ├── layout.tsx    ← header e footer do site institucional
│   ├── about
│   │   ├── page.tsx      
│   │   └── loading.tsx
│   └── pricing/
│       ├── page.tsx      
│       └── loading.tsx
└── (shop)/
    ├── layout.tsx    ← layout com carrinho
    └── cart/
        ├── page.tsx
```

3. **Ter mais de um root layout**. Se você tirar o`` app/layout.tsx`` e colocar um ``layout.tsx`` com ``<html>`` e ``<body>`` em cada grupo, cada parte do app passa a ter uma estrutura HTML própria.

4. **Aplicar ``loading.tsx`` e ``error.tsx`` só a algumas rotas**. O ``loading.tsx`` dentro de ``(marketing)/about/`` vale só para ``/about``. Se ficar na raiz de ``(marketing)/``, vale para todas as rotas do grupo.

## Cuidados

1. **Conflito de rotas: dois grupos não podem resolver para a mesma URL**. Por exemplo, ``(marketing)/about/page.tsx`` e ``(shop)/about/page.tsx`` geram erro, porque os dois viram ``/about``.

2. **Recarregamento completo**: quando há vários root layouts, navegar de um para outro recarrega a página inteira, e não só a parte que mudou.

3. **Rota** ``/``: se você usar vários root layouts, o ``page.tsx`` da home precisa ficar dentro de algum grupo.

https://nextjs.org/docs/app/api-reference/file-conventions/route-groups