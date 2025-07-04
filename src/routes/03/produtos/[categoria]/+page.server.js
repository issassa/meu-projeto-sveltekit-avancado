import {produtos} from '$lib/server/03/produtos.js';

export async function load({ params, url }) {
    const produtosFiltrados = produtos;
    console.log(url)

  //lógica de filtração

   return { produtosFiltrados };
}