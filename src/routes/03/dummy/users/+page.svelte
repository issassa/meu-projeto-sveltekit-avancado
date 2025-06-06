<script>
  let { data } = $props();
</script>

<br />
<h3>Usuários🧑🏻🧑🏼‍🦰🧔🏽🧑🏾‍🦳🧑🏿‍🦱</h3>
<form>
  <input name="idade" placeholder="Digite uma idade" />
  <button>filtrar</button>
</form>
<br />
<ul>
  {#each data.users.users as user}
    <li>
      <a href="/03/dummy/users/{user.id}">{user.firstName} {user.lastName} ({user.age} anos)</a>
    </li>
  {/each}
</ul>
