// A função `load` é executada no servidor e recebe `params` (parâmetros da rota)
// e `fetch` (uma função fetch otimizada pelo SvelteKit para chamadas de servidor).
export async function load({ params, fetch }) {
  // Obtém o ID da postagem da URL. Por exemplo, se a rota for `/03/dummy/posts/1`,
  // `postId` será "1".
  const postId = params.id;

  // Faz uma requisição para a API DummyJSON para obter os detalhes de uma postagem específica.
  const resPost = await fetch(`https://dummyjson.com/posts/${postId}`);
  // Converte a resposta em JSON.
  const post = await resPost.json();

  // Faz uma requisição para a API DummyJSON para obter os comentários de uma postagem específica.
  const resComments = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
  // Converte a resposta em JSON.
  const commentsData = await resComments.json();
  // Extrai a array de comentários que está aninhada na propriedade 'comments' do objeto retornado.
  const comments = commentsData.comments;

  // Retorna os dados da postagem e dos comentários para o componente Svelte.
  return { post, comments };
}