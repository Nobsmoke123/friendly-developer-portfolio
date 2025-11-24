import type { StrapiImage } from "./project";

export type PostMeta = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
};

export type StrapiPost = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  image: StrapiImage;
};
