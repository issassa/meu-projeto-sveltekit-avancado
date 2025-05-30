export async function load({ params, fetch }) {
    const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const comments = await resComments.json();
  
    return { comments };
  }