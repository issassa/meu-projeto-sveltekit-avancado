export async function load({ params, fetch }) {
    const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/comments/${params.id}`);
    const comments = await resComments.json();
  
    return { comments };
  }