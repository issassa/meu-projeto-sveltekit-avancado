<script>
  // Obtém os dados (post e comments) passados pela função `load` do servidor.
  let { data } = $props();
</script>

<h2>Detalhes da Postagem (DummyJSON)</h2>
{#if data.post}
  <h3>{data.post.title}</h3>
  <p>{data.post.body}</p>
  <p><strong>Tags:</strong> {data.post.tags ? data.post.tags.join(', ') : 'Nenhuma'}</p>
  <p><strong>Reações:</strong> {data.post.reactions}</p>
{:else}
  <p>Postagem não encontrada.</p>
{/if}

<h3>Comentários</h3>
{#if data.comments && data.comments.length > 0}
  <ul>
    {#each data.comments as comment}
      <li>
        <strong>{comment.user.username}</strong>: {comment.body}
      </li>
    {/each}
  </ul>
{:else}
  <p>Não há comentários para esta postagem.</p>
{/if}

<p><a href="/03/dummy/users">Voltar à lista de usuários</a></p>