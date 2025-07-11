<script>
    // Obtém os dados (user e posts) passados pela função `load` do servidor.
    let { data } = $props();
  </script>
  
  <br>
  <h3>Categorias</h3>
  <strong>nome</strong> {data.category.name}
  <br>
  <h3>Produtos da categoria</h3>
  <ul>
    {#each data.categorys as category}
      <li><a href="/p2/products/[category]/">{products.title}</a></li>
    {/each}
  </ul>
  