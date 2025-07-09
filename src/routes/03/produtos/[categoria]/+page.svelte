<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    /** @type {import('./$types').PageData} */
    export let data; // data.produtos já vem filtrado por categorias do servidor

    // Variáveis reativas para os campos do formulário
    let busca = $page?.url?.searchParams.get('busca') || ''; // A busca pode ser passada via URL
    // REMOVIDO: let min e let max

    // produtosBase armazena os produtos que vêm do servidor (já filtrados por categoria)
    $: produtosBase = data.produtos; 
    
    // produtosExibidos será a lista final de produtos mostrada na tela,
    // filtrada localmente pela busca em tempo real.
    let produtosExibidos = [];

    // --- Bloco Reativo para Filtro de Busca em Tempo Real ---
    // Este bloco é executado automaticamente sempre que 'busca' ou 'produtosBase' mudam.
    $: {
        if (!busca) {
            // Se o campo de busca está vazio, exibe todos os produtos da base (que já são da categoria correta)
            produtosExibidos = produtosBase;
        } else {
            // Caso contrário, filtra os produtos da base pelo termo de busca (case-insensitive)
            const termoBuscaLowerCase = busca.toLowerCase();
            produtosExibidos = produtosBase.filter(p =>
                // Verifica se o termo de busca está no título ou na descrição do produto
                p.titulo.toLowerCase().includes(termoBuscaLowerCase) ||
                p.descricao.toLowerCase().includes(termoBuscaLowerCase)
            );
        }
    }

    // --- Função para Sincronizar a URL com o Parâmetro de Busca ---
    // Esta função é chamada ao submeter o formulário (agora apenas para busca).
    function aplicarFiltros() {
        const url = new URL($page.url); // Cria uma nova URL baseada na URL atual da página
        
        // REMOVIDO: Atualização dos parâmetros 'min' e 'max' na URL.

        // Sincroniza o parâmetro 'busca' na URL.
        url.searchParams.set('busca', busca);
        if (!busca) url.searchParams.delete('busca');

        // Navega para a nova URL.
        // O +page.server.js será re-executado se a URL base mudar,
        // mas a busca é filtrada no cliente.
        goto(url.toString(), { keepFocus: true });
    }
</script>

<div class="container my-5">
    <h1 class="mb-4">Produtos de: {data.categoria ? (data.categoria.charAt(0).toUpperCase() + data.categoria.slice(1)) : 'Carregando...'}</h1>

    <form on:submit|preventDefault={aplicarFiltros} class="mb-5 p-4 border rounded shadow-sm bg-light">
        <div class="row g-3 align-items-end">
            <div class="col-md-11"> 
                <label for="busca" class="form-label">Buscar por título/descrição:</label>
                <input
                    type="text"
                    id="busca"
                    class="form-control"
                    placeholder="Ex: mouse, gamer"
                    bind:value={busca}
                />
            </div>
            <div class="col-md-1">
                <button type="submit" class="btn btn-primary w-100">Aplicar Busca</button> 
            </div>
        </div>
    </form>

    {#if produtosExibidos && produtosExibidos.length > 0}
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {#each produtosExibidos as produto (produto.id)}
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">{produto.titulo}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">R$ {produto.preco.toFixed(2)}</h6>
                            <p class="card-text">{produto.descricao}</p>
                            <span class="badge bg-secondary">{produto.categorias.join(', ')}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else if data.produtos && data.produtos.length > 0}
        <p class="alert alert-info">Nenhum produto encontrado com o termo de busca '{busca}'.</p> 
    {:else}
        <p class="alert alert-info">Nenhum produto encontrado para esta categoria.</p> 
    {/if}
</div>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<style>
    .container { max-width: 960px; }
    h1 { text-align: center; margin-bottom: 2.5rem; color: #333; }
    .form-label { font-weight: bold; color: #555; }
    .btn-primary { background-color: #007bff; border-color: #007bff; }
    .btn-primary:hover { background-color: #0056b3; border-color: #004d9b; }
    .card { transition: transform 0.2s ease-in-out; }
    .card:hover { transform: translateY(-5px); }
</style>