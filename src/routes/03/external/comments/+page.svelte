<script>
    let { data } = $props();
  </script>
  
  <h3>Comentários</h3>
  <ul>
    {#each data.comments as comments}
    <li><a href="/03/external/comments/{comment.id}">{comment.name}{comment.email}{comment.body}</a></li>
    {/each}
  </ul>