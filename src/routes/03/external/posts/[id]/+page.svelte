<script>
    let { data } = $props();
  </script>
  
  <h3>Posts</h3>
  <p><strong>Nome:</strong> {data.post.name}</p>
  <p><strong>Comentários:</strong> {data.post.comments}</p>
  
  <h3>Comentários das postagens</h3>
  <ul>
    {#each data.comments as comment}
      <li><a href="/03/external/comments/{comment.id}">{comment.title}</a></li>
    {:else}
      <p>Esse post não existe ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/external/posts">Voltar aos posts</a>
  </p>