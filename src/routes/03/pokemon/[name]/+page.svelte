<script>
  // Obtém os dados (pokemon ou error) passados pela função `load` do servidor.
  let { data } = $props();
</script>

{#if data.pokemon}
  <div class="pokemon-details">
    <h2>{data.pokemon.name}</h2>
    <img src={data.pokemon.image} alt={data.pokemon.name} class="pokemon-image" />

    <p><strong>Altura:</strong> {data.pokemon.height} m</p>
    <p><strong>Peso:</strong> {data.pokemon.weight} kg</p>

    <p>
      <strong>Tipos:</strong>
      {#if data.pokemon.types && data.pokemon.types.length > 0}
        {data.pokemon.types.join(', ')}
      {:else}
        Nenhum
      {/if}
    </p>

    <p>
      <strong>Habilidades:</strong>
      {#if data.pokemon.abilities && data.pokemon.abilities.length > 0}
        {data.pokemon.abilities.join(', ')}
      {:else}
        Nenhuma
      {/if}
    </p>
  </div>
{:else if data.error}
  <p class="error-message">{data.error}</p>
{:else}
  <p>Carregando detalhes do Pokémon...</p>
{/if}

<p><a href="/03/pokemon">Voltar à lista de Pokémons</a></p>

<style>
  .pokemon-details {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 600px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .pokemon-details h2 {
    text-transform: capitalize;
    margin-bottom: 15px;
    color: #333;
  }
  .pokemon-image {
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  .pokemon-details p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #555;
  }
  .pokemon-details strong {
    color: #333;
  }
  .error-message {
    color: red;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
</style>