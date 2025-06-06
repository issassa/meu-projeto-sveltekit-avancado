export async function load({ params, fetch }) {
    const resUser = await fetch(`https://dummyjson.com/users/${params.id}`);
    const user = await resUser.json();
  
    return { user };
  }