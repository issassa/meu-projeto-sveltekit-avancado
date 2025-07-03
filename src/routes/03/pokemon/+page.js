// A função `load` é executada tanto no servidor quanto no cliente (universal load function).
// Ela recebe a função `fetch` para fazer requisições HTTP.
export async function load({ fetch }) {
  // Define o limite de Pokémons a serem buscados por requisição.
  const limit = 12;
  // Define o offset (a partir de qual Pokémon começar a busca).
  const offset = 0;

  // Faz uma requisição para a PokeAPI para obter uma lista de Pokémons.
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  // Converte a resposta em JSON.
  const data = await res.json();

  // Itera sobre cada Pokémon nos resultados para adicionar a URL da imagem.
  for (const pokemon of data.results) {
    // Extrai o ID do Pokémon da URL.
    const id = pokemon.url.split("/").at(-2);
    // Constrói a URL da imagem do Pokémon usando o ID.
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  // Retorna a lista de Pokémons para o componente Svelte.
  // Note que, se existir um `+page.server.js` na mesma rota, o `load` do `.server.js`
  // será executado primeiro e seus dados serão mergeados com os deste `+page.js`.
  // Neste caso, como ambos fazem a mesma coisa, o `+page.server.js` é redundante
  // se o objetivo for apenas buscar dados que não precisam de segredo de servidor.
  return { pokemons: data.results };
}