# Coffee Listing Page ☕

Solução do desafio <a href="https://devchallenges.io/challenge/simple-coffee-listing" target="_blank">Simple Coffee Listing</a> do <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.

### <a href="https://simple-coffee-listing-wheat.vercel.app/" target="_blank">Acesse aqui</a>

## Visão geral

Este projeto consiste em uma página de listagem de cafés desenvolvida com `Next.js`, seguindo o design fornecido. O objetivo foi criar uma interface intuitiva e agradável para exibir diferentes tipos de café, suas informações e status de disponibilidade.

![FireShot Capture 005 - Coffee Listing -  localhost](https://github.com/user-attachments/assets/8037ebab-976f-4a5b-a041-1326c1abe515)

## Funcionalidades

✅ Exibição de uma lista de cafés com informações detalhadas

✅ Componente de Card reutilizável, contendo:
- Imagem do café
- Nome
- Preço
- Avaliação (estrelas)
- Número de votos (se disponível)
- Selo de "Popular" (se aplicável)
- Status de disponibilidade (Disponível/Esgotado)

✅ Opção para alternar entre todos os cafés ou somente os disponíveis

✅ Consumo de dados de uma API

## O que eu aprendi

Aprimorei meus conhecimentos de `React` e `Next.js` principalmente referente aos Hooks `useState` e `useEffect`. Também utilizei `Typescript` para praticar e criar um código bem estruturado. Para estilização usei `Tailwind CSS` pela primeira vez e aproveitei para usar um `plugin` do `Prettier` para ordenar os atributos das classes do `tailwind` conforme o recomendado, mantendo o código mais padronizado. Também utilizei `Axios` para consumo de dados da API, onde criei um tratamento de erro caso falhe a requisição dos dados.

![FireShot Capture 004 - Coffee Listing -  localhost](https://github.com/user-attachments/assets/0d037018-a1aa-42a3-ac49-d2c2e1917102)

```tsx
//...
  const [products, setProducts] = useState<Coffee[] | null>([]);
  const [showAll, setShowAll] = useState<boolean>(true);

  const filteredProducts = showAll
    ? products
    : products?.filter((product) => product.available);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchAllCoffees();
      setProducts(response);
    };
    try {
      fetchProducts();
    } catch (error) {
      console.error(error);
      setProducts(null);
    }
  }, []);
//...
      {filteredProducts ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts?.map((coffee) => (
            <Card key={coffee.id} data={coffee} />
          ))}
        </div>
      ) : (
        <div className="p-8 text-center">
          <p className="text-red-400">Failed to fetch all coffees data.</p>
        </div>
      )}
//...
```

## Tecnologias

- Nexts.js
- React
- Typescript
- Tailwind CSS
