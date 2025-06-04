<script>
    let { data } = $props();
  </script>
  
  <h3>Posts</h3>
  <p><strong>Título:</strong> {data.post.title}</p>
  <p><strong>Conteúdo:</strong> {data.post.body}</p>

  <h3>Comentários das postagens</h3>
  <ul>
    {#each data.comments as comment}
      <li><a href="/03/external/comments/{comment.id}">{comment.name}</a></li>
    {:else}
      <p>Esse post não existe ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/external/posts">Voltar aos posts</a>
  </p>