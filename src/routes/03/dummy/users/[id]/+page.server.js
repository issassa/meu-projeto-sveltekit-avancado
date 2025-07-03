// A função `load` é uma função especial do SvelteKit que é executada no servidor.
// Ela é responsável por buscar os dados necessários para a página antes dela ser renderizada.
// Recebe um objeto com propriedades como `params` (parâmetros da rota) e `fetch` (para fazer requisições HTTP).
export async function load({ params, fetch }) {
  // Constrói a URL para buscar os detalhes de um usuário específico na API DummyJSON.
  // `params.id` é o ID do usuário extraído da URL da rota (ex: se a URL for /users/123, params.id será "123").
  const resUser = await fetch(`https://dummyjson.com/users/${params.id}`);
  
  // Converte a resposta da requisição HTTP (que está em formato JSON) em um objeto JavaScript.
  const user = await resUser.json();
  
  // Retorna um objeto contendo os dados do usuário.
  // Estes dados serão passados como `data` para o componente Svelte (`+page.svelte`) associado a esta rota.
  return { user };
}