<script>

import { produtos } from '$lib/server/03/produtos.js';

/**
     * Função para filtrar as categoriass do dicionário com base no que o usuário digitou.
     * Ela é chamada a cada vez que o input de busca é alterado.
     */
    function buscar() {
        // Se o campo de busca 'categorias' estiver vazio (ou apenas com espaços em branco após o trim),
        // redefine 'produtosFiltrados' para mostrar todas as produtoss do dicionário.
        if (categorias.trim() === '') { // Adicionado .trim() para considerar espaços em branco.
            produtosFiltrados = produtos;
            return; // Sai da função.
        }      

        // Zera o array de categoriass produtosFiltrados para preenchê-lo com os novos resultados.
        produtosFiltrados = [];
        // Itera sobre cada 'termo' (objeto de categorias) no dicionário completo.
        for (const termo of produtos) {
            // Verifica se a propriedade 'categorias' do termo atual começa com o texto digitado em 'categorias'.
            // '.toLowerCase()' é usado para uma busca que não diferencia maiúsculas de minúsculas.
            if (termo.categorias.toLowerCase().startsWith(categorias.toLowerCase())) {
                // Se a condição for verdadeira, adiciona o termo ao array 'produtosFiltrados'.
                produtosFiltrados.push(termo);
            }
        }
    }

</script>

<br />
<div class="card mb-3" style="width: 21rem;">
    <div class="card-body text-center">
        <h2 class="card-title"><b>Produtos</b></h2>
        <br />
        <div class="input-group mb-3">
            <input
                class="form-control"
                placeholder="digite uma produtos..."
                aria-label="produtos"
                aria-describedby="button-addon2"
                oninput={buscar}            />
        </div>
        
        <h5 class="card-title"><b>Lista de produtos </b></h5>

        {#each produtosFiltrados as termo}
            <p><a href="/produtos/{termo.produtos}">{termo?.produtos}</a></p>
        {/each}
    </div>
</div>

<h2><b>Produtos</b></h2>
<ul>
  {#each data.produtos as produto}
    <li><a href="/03/produtos/{produto.id}">{produto.titulo}</a></li>
  {/each}
</ul>