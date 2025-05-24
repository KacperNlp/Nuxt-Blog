import type { Post } from '@/types/posts'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Wpis testowy',
    content: 'To mój pierwszy post.',
    createdAt: new Date().toISOString(),
    author: 'John Doe',
    category: 'Programming',
    tags: ['JavaScript', 'TypeScript', 'Vue'],
    image: 'https://via.placeholder.com/150',
    slug: 'wpis-testowy',
    shortDescription: 'To mój pierwszy post na blogu.',
    isFeatured: true,
    isPublished: true,
    isArchived: false
  },
  {
    id: 2,
    title: 'Drugi wpis',
    content: 'To jest mój drugi post na blogu.',
    createdAt: new Date().toISOString(),
    author: 'John Doe',
    category: 'Programming',
    tags: ['JavaScript', 'TypeScript',],
    image: 'https://via.placeholder.com/150',
    slug: 'wpis-testowy',
    shortDescription: 'To mój pierwszy post na blogu.',
    isFeatured: true,
    isPublished: true,
    isArchived: false
  }
];

// GET /api/posts
export default defineEventHandler(() => {
  return posts;
});