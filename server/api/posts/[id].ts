import { posts } from '../posts';

// GET /api/posts/[id]
export default defineEventHandler((event) => {
  const id = Number(event.context.params?.id);
  
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid post ID'
    });
  }

  const post = posts.find((p: { id: number }) => p.id === id);
  
  if (!post) {
    throw createError({
      statusCode: 404,
      message: 'Post not found'
    });
  }

  return post;
}); 