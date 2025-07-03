<script>
  // Obtém os dados (users) passados pela função `load` do servidor.
  let { data } = $props();
</script>
<br>

<h2><b>Usuários</b></h2>
<ul>
  {#each data.users as user}
    <li><a href="/03/external/users/{user.id}">{user.name}</a></li>
  {/each}
</ul>