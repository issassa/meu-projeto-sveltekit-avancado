<script>
    let { data } = $props();
  </script>
  
  <br>
  <h3>Usuário</h3>
  <strong>Nome:</strong> {data.user.name}
  <p><strong>Email:</strong> {data.user.email}</p>
  <br>
  <h3>Postagens do usuário</h3>
  <ul>
    {#each data.posts as post}
      <li><a href="/03/external/posts/{post.id}">{post.title}</a></li>
    {:else}
      <p>Esse usuário não postou nada ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/external/users">Voltar aos usuários</a>
  </p>