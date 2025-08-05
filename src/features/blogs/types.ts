export type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  thumbnail?: string;
  category_id: number;
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
};
