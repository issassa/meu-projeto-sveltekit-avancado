export async function load({ fetch }) {
    const rescat = await fetch('https://dummyjson.com/products/category-list');

    const category = await rescat.json();

    const resproducts = await fetch('https://dummyjson.com/products');
    // Converte a resposta em JSON.
    const products = await resproducts.json();


    return { category, products };
}    
