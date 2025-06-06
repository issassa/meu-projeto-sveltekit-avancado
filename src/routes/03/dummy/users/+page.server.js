export async function load({ fetch, url }) {
  const pais = url.searchParams.get('pais');
  const link ='httpsÇ://dummyjson.com/users';
  if (pais) link += `?key=country&value=${pais}`
  const res = await fetch('https://dummyjson.com/users');
  const users = await res.json(); 
  return { users };
}