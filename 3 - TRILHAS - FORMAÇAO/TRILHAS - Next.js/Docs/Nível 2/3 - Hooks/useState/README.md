# useState

O useState é o hook do React que guarda um valor na tela e pede uma nova renderização quando esse valor muda. Para utilizar este hook no Next.js (App Router) é preciso importar o ``use client`` no arquivo.

**Exemplo da estrutura:** ``const [variavel, setVariavel] = useState(`valorInicial`);``

- **variavel**: É o dado atual, pode ser utilizado para **apresentar o dado**.
- **setVariavel**: É a função que **atualiza esse dado**. Sempre que precisar alterar o valor do dado, é está função que vc chama.
- **valorInicial**: É onde você **atribui um valor** inicial a seu useState.
- **Variável** foi um nome demonstrativo. Você pode criar qualquer nome para as variáveis de useState, mas precisa seguir o padrão ``nome`` e ``setNome``.

## Exemplo simples: contador

Um único número. O botão lê o estado atual e grava o próximo.

```
    'use client';

    import { useState } from 'react';

    export default function Contador() {
    const [cliques, setCliques] = useState(0);

    function incrementar() {
        setCliques((anterior) => anterior + 1);
    }

    return (
            <button type="button" onClick={incrementar}>
            Cliques: {cliques}
            </button>
        );
    }
```
O que acontece:

1. O Next chama o ``incrementar``
2. ``setCliques`` agenda o valor ``anterior + 1``
3. O componente renderiza de novo e o texto do botão mostra o número atualizado.

## Exemplo mais complexo: lista de tarefas

A ideia é criar uma lista de tarefas, para isso aqui vamos utilizar três useSates: texto do input, a lista e o filtro.

```
    'use client';

    import { useState } from 'react';

    type Tarefa = {
        id: number;
        titulo: string;
        feita: boolean;
    };

    type Filtro = 'todas' | 'pendentes' | 'feitas';

    export default function ListaDeTarefas() {
        const [titulo, setTitulo] = useState('');
        const [tarefas, setTarefas] = useState<Tarefa[]>([]);
        const [filtro, setFiltro] = useState<Filtro>('todas');

        function adicionarTarefa() {
            const texto = titulo.trim();
            if (!texto) return;

            setTarefas((anteriores) => [
                ...anteriores,
                { id: Date.now(), titulo: texto, feita: false },
            ]);

            setTitulo('');
        }

        function alternarTarefa(id: number) {
            setTarefas((anteriores) =>
                anteriores.map((tarefa) =>
                    tarefa.id === id ? { ...tarefa, feita: !tarefa.feita } : tarefa,
                ),
            );
        }

        const visiveis = tarefas.filter((tarefa) => {
            if (filtro === 'pendentes') return !tarefa.feita;
            if (filtro === 'feitas') return tarefa.feita;
            return true;
        });
        
        const pendentes = tarefas.filter((tarefa) => !tarefa.feita).length;

        return (
            <section>
                <form
                    onSubmit={(evento) => {
                    evento.preventDefault();
                    adicionarTarefa();
                    }}
                >
                    <input
                        value={titulo}
                        onChange={(evento) => setTitulo(evento.target.value)}
                        placeholder="Nova tarefa"
                    />

                    <button type="submit">Adicionar</button>
                </form>
            
                <p>{pendentes} pendente(s)</p>

                <div>
                    {(['todas', 'pendentes', 'feitas'] as const).map((opcao) => (
                        <button
                            key={opcao}
                            type="button"
                            onClick={() => setFiltro(opcao)}
                            aria-pressed={filtro === opcao}
                        >
                            {opcao}
                        </button>
                    ))}
                </div>

                <ul>
                    {visiveis.map((tarefa) => (
                        <li key={tarefa.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={tarefa.feita}
                                    onChange={() => alternarTarefa(tarefa.id)}
                                />

                                {tarefa.titulo}
                            </label>
                        </li>
                    ))}
                </ul>
            </section>
        );    
    }
```

Desafio: Criei uma nova rota, chamada lista, e cole o código acima. Seu objetivo é cadastrar algumas tarefas na lista, pelo formulário desta página, e entender como isso está sendo feito.