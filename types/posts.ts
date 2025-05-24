export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    author: string;
    category: string;
    tags: string[];
    image: string;
    slug: string;
    shortDescription: string;
    isFeatured: boolean;
    isPublished: boolean;
    isArchived: boolean;
}
  