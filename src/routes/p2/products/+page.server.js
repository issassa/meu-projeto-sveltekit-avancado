// A função `load` é executada no servidor e recebe a função `fetch`.
export async function load({ fetch }) {
    // todos os produtos
    const resproducts = await fetch('https://dummyjson.com/products');
    // Converte a resposta em JSON.
    const products = await resproducts.json();

    return { products };
  }
