import { Teacher } from "./teacher.interface";

export interface FeedHashtag {
  id: string;
  name: string;
}

export interface FeedHashtagsList {
  hashtags: FeedHashtag[];
}

export interface FeedArticle {
  id: string;
  teacher_id: string;
  title: string;
  content: string;
  post_image_url: string;
  created_at: string;
  likes_count: number;
  teacher?: Teacher;
}
