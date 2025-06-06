<script>
  let { data } = $props();
</script>

<h2>Detalhes do Usuário (DummyJSON)</h2>
{#if data.user}
  <p><strong>Nome:</strong> {data.user.firstName} {data.user.lastName}</p>
  <p><strong>Email:</strong> {data.user.email}</p>
  <p><strong>Telefone:</strong> {data.user.phone}</p>
  <p><strong>Gênero:</strong> {data.user.gender}</p>
  <p><strong>Data de Nascimento:</strong> {data.user.birthDate}</p>
  <p><strong>Endereço:</strong> {data.user.address?.address}, {data.user.address?.city}</p>
{:else}
  <p>Usuário não encontrado.</p>
{/if}

<h3>Postagens do Usuário</h3>
{#if data.posts && data.posts.length > 0}
  <ul>
    {#each data.posts as post}
      <li>
        <a href="/03/dummy/posts/{post.id}">{post.title}</a>
      </li>
    {/each}
  </ul>
{:else}
  <p>Este usuário não possui postagens.</p>
{/if}

<p><a href="/03/dummy/users">Voltar à lista de usuários</a></p>