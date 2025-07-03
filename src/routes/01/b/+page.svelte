<script>
  // Usa a sintaxe '$props()' para desestruturar e obter os dados
  // passados do arquivo `+page.server.js`.
  // `data` conterá o objeto retornado pela função `load` do servidor.
  let { data } = $props();
  // Exibe "Melancia" no console do navegador. Isso demonstra que
  // este script é executado no lado do cliente.
  console.log('Melancia');
</script>

<h2>Usuários cadastrados</h2>
<ul>
  {#each data.usuarios as usuario}
    <li>
      <strong>{usuario.name}:</strong> {usuario.email}
    </li>
  {/each}
</ul>