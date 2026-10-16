# Metadados estáticos

São metadados definidos diretamente no código e que não dependem de informações variáveis. 

Exemplo: a página que lista filmes de um blog de críticas cinematográficas institucional, cujo título e descrição são sempre os mesmos.

Para definir metadados estáticos, basta exportar um **Objeto de Metadada** de uma **layout.js** ou **page.js**.

```
    import type { Metadata } from 'next'
 
    export const metadata: Metadata = {
        title: 'Super Filmes',
        description: 'Lista dos melhores filmes de todos os tempos',
    }

    export default function Filmes() {
        return (
            <div className="flex flex-col flex-1 items-center justify-center">
                <h1>Lista de Filmes</h1>
                <ul className="text-center">
                    <li>
                        <h2>O Poderoso Chefão</h2>
                        <p>Nota: 9.2</p>
                    </li>

                    <li>
                        <h2>Interestelar</h2>
                        <p>Nota: 8.7</p>
                    </li>
                </ul>
            </div>
        )
    }
```

O resultado disso é que agora a aba da página tem um título e descrição customizados, baseados no metadado estático que você criou para esta rota.