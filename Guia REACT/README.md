
## Puxando REACT com vite

npm create vite@latest reactapp --template react
npm install
npm run dev

## Fragment
Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

No exemplo abaixo, poderia ser utilizado uma <div> para agrupar esses três elementos.
Exemplo:
```jsx
function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}

export default Home;
```

## Importando fontes
https://fonts.google.com/
