// A função `load` é executada no servidor.
export function load(event) {
  // Exibe o objeto `event` completo no console do servidor.
  // O objeto `event` contém várias informações sobre a requisição, como URL, headers, etc.
  console.log(event);
  // Retorna um objeto com dados estáticos para `post` e `author`.
  // Estes dados serão disponibilizados para o componente `+page.svelte`.
  return {
    post: { title: 'Título de Exemplo', content: 'Conteúdo supimpa de Exemplo' },
    author: { name: 'Autor Exemplo', email: 'autor@exemplo.com' }
  };
}