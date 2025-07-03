// A função `load` é executada no servidor e recebe `params` e `fetch`.
export async function load({ params, fetch }) {
  // Faz uma requisição para obter os detalhes de um usuário específico com base no ID da rota.
  const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  // Converte a resposta em JSON.
  const user = await resUser.json();

  // Faz uma requisição para obter as postagens associadas a este usuário.
  const resPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
  // Converte a resposta em JSON.
  const posts = await resPosts.json();

  // Retorna os dados do usuário e suas postagens para o componente Svelte.
  return { user, posts };
}