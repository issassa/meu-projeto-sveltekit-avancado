// A função `load` é executada no servidor e recebe `fetch` (para fazer requisições HTTP)
// e `url` (objeto URL contendo informações da requisição).
export async function load({ fetch, url }) {
  // Obtém o valor do query parameter 'idade' da URL (ex: ?idade=30).
  const idade = url.searchParams.get('idade');
  // Define o link base da API de usuários.
  let link = 'https://dummyjson.com/users';
  // Se o parâmetro 'idade' estiver presente, adiciona o filtro de idade à URL da API.
  if (idade) link += `/filter?key=age&value=${idade}`;
  // Faz a requisição para a API de usuários (com ou sem filtro de idade).
  const res = await fetch(link);
  // Converte a resposta em JSON.
  const users = await res.json();
  // Retorna os dados dos usuários para o componente Svelte.
  return { users };
}