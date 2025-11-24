import type { StrapiPost } from "~/types/posts";
import type { StrapiProject } from "~/types/project";

export const projectTransformer = (data: StrapiProject[]) =>
  data.map((project) => ({
    id: project.id,
    documentId: project.documentId,
    title: project.title,
    description: project.description,
    url: project.url,
    image: project.image?.url ? `${project.image.url}` : "/images/no-image.png",
    date: project.date,
    category: project.category,
    featured: project.featured,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
    publishedAt: project.publishedAt,
  }));

export const postTransformer = (data: StrapiPost[]) =>
  data.map((post) => ({
    id: post.id,
    documentId: post.documentId,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    content: post.content,
    image: post.image?.url ? `${post.image.url}` : "/images/no-image.png",
  }));
