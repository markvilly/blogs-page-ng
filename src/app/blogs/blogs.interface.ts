export interface BlogInterface {
  slug: string;
  title: string;
  cover_image: string;
  brief: string;
  tags: string[];
  category: string;
  status: string;
  content: string;
  author_name: string;
  author_image: string;
  id: string;
  created_at: string; // ISO date-time string format
  updated_at: string; // ISO date-time string format
}
