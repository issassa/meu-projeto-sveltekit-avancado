<script>
  // Obtém os dados (user e posts) passados pela função `load` do servidor.
  let { data } = $props();
</script>

<h2>Sobre o usuário:</h2>
  <p><strong>Nome:</strong> {data.user.firstName} {data.user.lastName}</p>
  <p><strong>Email:</strong> {data.user.email}</p>


<h3>Postagens do usuário</h3>
  <ul>
    {#each data.posts as post}
      <li>
        <a href="/03/dummy/posts/{post.id}">{post.title}</a>
      </li>
    {/each}
  </ul>

<p><a href="/03/dummy/users">Voltar aos usuários</a></p>