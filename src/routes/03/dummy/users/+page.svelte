<script>
  let { data } = $props();
</script>

<h2>Usuários (DummyJSON)</h2>
{#if data.users && data.users.length > 0}
  <ul>
    {#each data.users as user}
      <li>
        <a href="/03/dummy/users/{user.id}">{user.firstName} {user.lastName}</a>
      </li>
    {/each}
  </ul>
{:else}
  <p>Nenhum usuário encontrado.</p>
{/if}