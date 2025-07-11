<script>
  // Obtém os dados (users) passados pela função `load` do servidor.
  let { data } = $props();
</script>
<br>

<h2><b>Usuários</b></h2>
<ul>
  {#each data.users as user}
    <li>{user.name}</li>
  {/each}
</ul>