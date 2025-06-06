<script>
  let { data } = $props();
</script>

<h3>Usuários</h3>
<form>
  <input name="pais" placeholder="Filtrar por país" />
  <button>filtrar</button>
</form>
  <ul>
    {#each data.users.users as user}
      <li>
        <a href="/03/dummy/users/{user.id}">{user.firstName} {user.lastName} ({user.addresds.country})</a>
      </li>
    {/each}
  </ul>
