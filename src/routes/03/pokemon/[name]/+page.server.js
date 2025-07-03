// A função `load` é executada no servidor e recebe `params` e `fetch`.
export async function load({ params, fetch }) {
  // Obtém o nome do Pokémon da URL e o converte para minúsculas.
  const pokemonName = params.name.toLowerCase();

  // Faz uma requisição para a PokeAPI para obter os detalhes de um Pokémon específico.
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  // Verifica se a resposta da API foi bem-sucedida.
  if (!res.ok) {
    // Se a resposta não for OK (ex: 404 Not Found), retorna um objeto com uma mensagem de erro.
    return {
      error: `Pokémon "${params.name}" não encontrado.`
    };
  }

  // Converte a resposta em JSON.
  const pokemonData = await res.json();

  // Extrai a URL da imagem do Pokémon, preferindo a arte oficial se disponível,
  // caso contrário, usa a imagem frontal padrão.
  const image = pokemonData.sprites.other['official-artwork'].front_default || pokemonData.sprites.front_default;

  // Extrai outros dados relevantes do Pokémon.
  const name = pokemonData.name;
  // Converte altura de decímetros para metros.
  const height = pokemonData.height;
  // Converte peso de hectogramas para quilogramas.
  const weight = pokemonData.weight;
  // Mapeia a array de tipos para obter apenas os nomes dos tipos.
  const types = pokemonData.types.map(t => t.type.name);
  // Mapeia a array de habilidades para obter apenas os nomes das habilidades.
  const abilities = pokemonData.abilities.map(a => a.ability.name);

  // Retorna um objeto `pokemon` com os dados formatados para o componente Svelte.
  return {
    pokemon: {
      name: name,
      image: image,
      height: height / 10, // Converter decímetros para metros
      weight: weight / 10, // Converter hectogramas para quilogramas
      types: types,
      abilities: abilities
    }
  };
}