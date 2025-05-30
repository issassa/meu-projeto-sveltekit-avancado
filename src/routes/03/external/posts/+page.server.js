export async function load({ fetch }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const resc = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await resc.json();
  return { posts, comments };
}