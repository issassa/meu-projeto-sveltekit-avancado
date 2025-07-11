<script>
  // Obtém os dados (user e posts) passados pela função `load` do servidor.
  let { data } = $props();
</script>

<h2>Produtos</h2>
{#each data.productss as products}
  <li>
    <p><b> {data.products.title} </b></p>
    <p><b> {data.products.category} </b></p>
    <p><b> {data.products.price} </b></p>
  </li>
{/each}

<h2>Categorias</h2>
{#each data.categorys as category}
  <li>
    <p><strong><b> {category.name} </b></strong></p>
  </li>
{/each}
