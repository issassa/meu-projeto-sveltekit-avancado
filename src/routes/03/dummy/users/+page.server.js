export async function load({ fetch }) {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  const users = data.users; 
  return { users };
}