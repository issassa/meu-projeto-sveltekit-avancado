// A função `load` é executada no servidor e recebe um objeto `event` como argumento,
// que contém informações sobre a requisição, incluindo os parâmetros da rota.
export async function load({ params }) {
  // Extrai o valor do parâmetro 'rota' da URL.
  // Por exemplo, se a URL for `/03/meu-parametro`, `parametro1` será "meu-parametro".
  const parametro1 = params.rota;
  // Tenta extrair o valor de um parâmetro 'dinamica'.
  // Se o caminho não incluir um parâmetro 'dinamica', este será `undefined`.
  // Nota: Para ter um parâmetro 'dinamica', a estrutura da pasta deveria ser
  // `03/[rota]/[dinamica]/+page.server.js` ou similar.
  const parametro2 = params.dinamica;

  // Retorna um objeto com os parâmetros extraídos.
  // Estes dados serão passados para o componente Svelte (`+page.svelte`).
  return { parametro1, parametro2 };
}