export type Project = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  url: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type FormatType = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: FormatType;
    small: FormatType;
    medium: FormatType;
    thumbnail: FormatType;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiProject = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage;
};

export type StrapiResponse<T> = {
  data: T[];
};
