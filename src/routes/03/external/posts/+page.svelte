<script>
    let { data } = $props();
  </script>
  <br>
  <h3>Postagens</h3>
  <ul>
    {#each data.posts as posts}
      <li>Título: <a href="/03/external/posts/{posts.id}"> {posts.title}</a></li>
    {/each}
  </ul>
