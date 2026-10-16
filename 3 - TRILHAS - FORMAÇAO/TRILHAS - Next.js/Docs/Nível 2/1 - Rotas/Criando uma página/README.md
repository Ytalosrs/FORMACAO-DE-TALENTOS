# Criando uma página

Uma página nova nasce de uma pasta dentro de ``app/`` com um arquivo ``page.tsx``. O caminho da pasta vira o endereço no navegador.

- A pasta é que abriga o nome da nova página e não o arquivo page.tsx dentro dela. O nome desta pasta é que vai definir o nome da rota, portanto, para acessar a tela "sobre", basta rodar o projeto e buscar no navegador ``http://localhost:3000/sobre``
- Com relação ao arquivo page.tsx, ele que exporta o conteúdo da tela quando a rota for acessada.
- O componente de tela precisa ter o export default. Sem isso, a rota não aparece.

Para criar a página "sobre", basta criar um pasta ``/sobre`` e criar o arquivo ```page.tsx``. Vou deixar um exemplo abaixo, demonstrando o código e a construção do arquivo.

**Arquivo:** ``app/sobre/page.tsx``

**Codígo**
```
    export default function SobrePage() {

    return (
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl">Web</h1>

                <p>TODO: Content</p>
            </div>
        );
    }
```

**Estrutura do arquivo**
```
    app/
    ├── layout.tsx
    ├── page.tsx
    └── sobre/
        └── page.tsx
```

**Exemplo adicional**
| Arquivo | URL |
| --- | --- |
| `app/page.tsx` | `/` |
| `app/sobre/page.tsx` | `/sobre` |
| `app/blog/page.tsx` | `/blog` |
| `app/blog/novo/page.tsx` | `/blog/novo` |