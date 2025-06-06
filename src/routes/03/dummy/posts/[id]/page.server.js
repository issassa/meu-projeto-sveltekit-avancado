export async function load({ params, fetch }) {
  const postId = params.id;

  const resPost = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post = await resPost.json();

  const resComments = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
  const commentsData = await resComments.json();
  const comments = commentsData.comments; // Os comentários vêm dentro da propriedade 'comments'

  return { post, comments };
}