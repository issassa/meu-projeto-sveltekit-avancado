export async function load({ params, fetch }) {
  const pokemonName = params.name.toLowerCase(); 

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  const pokemonData = await res.json();

  const image = pokemonData.sprites.other['official-artwork'].front_default || pokemonData.sprites.front_default;

  const name = pokemonData.name;
  const height = pokemonData.height; 
  const weight = pokemonData.weight; 
  const types = pokemonData.types.map(t => t.type.name);
  const abilities = pokemonData.abilities.map(a => a.ability.name);

  return {
    pokemon: {
      name: name,
      image: image,
      height: height / 10, 
      weight: weight / 10, 
      types: types,
      abilities: abilities
    }
  };
}