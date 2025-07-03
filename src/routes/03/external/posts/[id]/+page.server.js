// A função `load` é executada no servidor e recebe `params` e `fetch`.
export async function load({ params, fetch }) {
  // Obtém o ID da postagem da URL.
  const postId = params.id;

  // Faz uma requisição para obter os detalhes de uma postagem específica.
  const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  // Converte a resposta em JSON.
  const post = await resPost.json();

  // Faz uma requisição para obter os comentários de uma postagem específica.
  const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  // Converte a resposta em JSON.
  const comments = await resComments.json();

  // Retorna os dados da postagem e dos comentários para o componente Svelte.
  return { post, comments };
}