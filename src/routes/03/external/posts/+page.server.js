// A função `load` é executada no servidor e recebe a função `fetch`.
export async function load({ fetch }) {
  // Faz uma requisição para a API JSONPlaceholder para obter todas as postagens.
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // Converte a resposta em JSON.
  const posts = await res.json();

  // Faz uma requisição para a API JSONPlaceholder para obter todos os comentários.
  const resc = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  // Converte a resposta em JSON.
  const comments = await resc.json();
  // Retorna as postagens e os comentários para o componente Svelte.
  return { posts, comments };
}