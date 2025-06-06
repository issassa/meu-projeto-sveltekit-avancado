<script>
  let { data } = $props();
</script>

<h3>Postagem - dados</h3>
{#if data.post}
  <h4>{data.post.title}</h4>
  <p>{data.post.body}</p>
{:else}
  <p>Postagem não encontrada.</p>
{/if}

<h3>Comentários</h3>
    {#each data.comments as comment}
      <li>
        <strong>{comment.email}</strong>: {comment.body}
      </li>
    {/each}
  <p>Não há comentários.</p>

<p><a href="/03/external/users">voltar aos usuários</a></p>