<script>
    let { data } = $props();
  </script>
  
  <h3>Postagens</h3>
  <ul>
    {#each data.posts as posts}
      <li><a href="/03/external/posts/{posts.id}">{posts.title}</a></li>
    {/each}
  </ul>
  oii