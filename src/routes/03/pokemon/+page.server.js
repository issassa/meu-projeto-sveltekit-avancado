// A função `load` é executada no servidor.
export async function load() {
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
    // Extrai o ID do Pokémon da URL (ex: "https://pokeapi.co/api/v2/pokemon/1/" -> "1").
    const id = pokemon.url.split("/").at(-2);
    // Constrói a URL da imagem do Pokémon usando o ID.
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  // Retorna a lista de Pokémons (com as imagens adicionadas) para o componente Svelte.
  return { pokemons: data.results };
}