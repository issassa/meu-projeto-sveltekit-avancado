
<script>
    // inicial - lista de categorias
    // Poderíamos importar as categorias aqui para listar,
    // mas para este exemplo, vamos simplificar.
    const categorias = [
        { nome: 'Informática', slug: 'informatica' },
        { nome: 'Telefonia', slug: 'telefonia' },
        { nome: 'Áudio', slug: 'audio' },
        { nome: 'Televisores', slug: 'televisores' }
    ];
</script>

<div class="container my-5">
    <h1 class="mb-4">Nossas Categorias de Produtos</h1>
    <p class="lead">Selecione uma categoria para ver os produtos disponíveis.</p>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        {#each categorias as categoria}
            <div class="col">
                <a href="/03/produtos/{categoria.slug}" class="card h-100 shadow-sm text-decoration-none">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-center">{categoria.nome}</h5>
                        <p class="card-text text-center text-muted">Ver todos os produtos de {categoria.nome.toLowerCase()}</p>
                    </div>
                </a>
            </div>
        {/each}
    </div>
    <hr class="my-5">
    <p class="text-center text-muted">Ou acesse diretamente:</p>
    <ul class="list-unstyled text-center">
        <li><a href="/03/produtos/informatica">/03/produtos/informatica</a></li>
        <li><a href="/03/produtos/telefonia">/03/produtos/telefonia</a></li>
        <li><a href="/03/produtos/audio">/03/produtos/audio</a></li>
        <li><a href="/03/produtos/televisores">/03/produtos/televisores</a></li>
    </ul>
</div>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<style>
    .container {
        max-width: 960px;
    }
    h1 {
        text-align: center;
        color: #333;
    }
    .lead {
        text-align: center;
        margin-bottom: 3rem;
    }
    .card {
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        border: 1px solid #dee2e6;
    }
    .card:hover {
        transform: translateY(-8px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .card-title {
        font-weight: bold;
        color: #007bff;
    }
    .text-decoration-none {
        text-decoration: none;
    }
</style>