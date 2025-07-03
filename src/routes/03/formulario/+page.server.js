// A função `load` é executada no servidor.
export async function load({ url }) {
  // Exibe o objeto `url` completo no console do servidor.
  // Este objeto contém a URL da requisição e métodos para acessar seus componentes.
  console.log(url);

  // Obtém o valor do parâmetro de busca 'fruta' da URL (ex: /formulario?fruta=maca).
  const fruta = url.searchParams.get('fruta');
  // Obtém o valor do parâmetro de busca 'legume' da URL.
  const legume = url.searchParams.get('legume');

  // Retorna os valores da fruta e do legume para o componente Svelte.
  return { fruta, legume };
}