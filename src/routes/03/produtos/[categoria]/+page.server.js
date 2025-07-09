// src/routes/03/produtos/[categoria]/+page.server.js

import { produtos as todosOsProdutos } from '$lib/server/03/produtos';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const categoriaParam = params.categoria.toLowerCase();

    // FILTRAGEM CORRIGIDA AQUI:
    // Verifica se o array 'categorias' do produto inclui a categoria que estamos buscando.
    let produtosFiltrados = todosOsProdutos.filter(p =>
        p.categorias && p.categorias.map(cat => cat.toLowerCase()).includes(categoriaParam)
    );

    return {
        produtos: produtosFiltrados,
        categoria: params.categoria
    };
}