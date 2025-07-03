// A função `load` é uma função especial do SvelteKit que é executada no servidor
// antes que a página seja renderizada. Ela é usada para buscar dados.
export async function load() {
  // Faz uma requisição HTTP para a API pública JSONPlaceholder para obter uma lista de usuários.
  // `await` garante que o código espere a resposta antes de continuar.
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
  // Converte a resposta da requisição (que está em formato JSON) em um objeto JavaScript.
  const usuarios = await resposta.json();
  // Exibe "Abacate" no console do servidor. Isso demonstra que este código
  // está sendo executado no lado do servidor.
  console.log('Abacate');
  // Retorna um objeto com a propriedade `usuarios`.
  // Os dados contidos neste objeto estarão disponíveis para o componente Svelte (`+page.svelte`)
  // através da prop `data`.
  return { usuarios };
}