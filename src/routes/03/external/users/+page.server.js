// A função `load` é executada no servidor.
export async function load({ fetch }) {
  // Faz uma requisição para a API JSONPlaceholder para obter uma lista de usuários.
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // Converte a resposta em JSON.
  const users = await res.json();
  // Retorna os dados dos usuários para o componente Svelte.
  return { users };
}