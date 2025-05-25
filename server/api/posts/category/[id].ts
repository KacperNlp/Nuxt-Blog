import { posts } from '../../posts';

export default defineEventHandler((event) => {
    const { id } = event.context.params;

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid category ID'
        });
    }

    const filtered = posts.filter(post => post.category === id);
    return filtered;
});