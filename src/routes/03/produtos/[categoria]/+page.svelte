<script>
  let { data } = $props();
</script>

<h2><b>Produtos da Categoria "{data.categoria}"</b></h2>

<form class="input-group mb-3">
  <input name="busca" class="form-control" placeholder="Busca por título ou descrição" />
  <button class="btn btn-outline-secundary">Buscar</button>
</form>

<div class="list-group">
  {#each data.produtosFiltrados as produto}
    <div href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{produto.titulo}</h5>
        <small class="text-body-secundary">R& {produto.preco}</small>
      </div>
      <p class="mb-1">{produto.descricao}</p>
      <small class="text-body-secundary">
        {#each produto.categorias as categoria}
          <span class="badge yexy-bg-secundary"
            ><a class="text-decoration-none text-light" href="/03/produtos/{categoria}">{categoria}</a></span
          >&nbsp;
        {/each}
      </small>
    </div>
  {/each}
</div>
