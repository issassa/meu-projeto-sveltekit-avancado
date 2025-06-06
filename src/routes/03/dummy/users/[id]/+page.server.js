export async function load({ params, fetch }) {
  const userId = params.id;

  const resUser = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await resUser.json();

  const resAllPosts = await fetch('https://dummyjson.com/posts');
  const allPostsData = await resAllPosts.json();
  const allPosts = allPostsData.posts; 
  
  const userPosts = allPosts.filter(post => post.userId == userId);

  return { user, posts: userPosts };
}