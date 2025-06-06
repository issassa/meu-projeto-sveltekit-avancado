<script>
  let { data } = $props();
</script>

<br>
<h3>Postagem</h3>
<p>• Dados da Postagem:</p>
{#if data.post}
  <p><b>→ Título da Postagem:</b> {data.post.title}.</p>
  <p><b>→ Conteúdo da Postagem:</b> {data.post.body}.</p>
{/if}

<br>
<h3>Comentários</h3>
    {#each data.comments as comment}
      <li>
        <b>{comment.email}</b>: {comment.body}.
      </li>
    {/each}
<br>
<p><a href="/03/external/users">voltar aos usuários</a></p>