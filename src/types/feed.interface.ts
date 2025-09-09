export interface FeedHashtag {
  id: string;
  name: string;
}

export interface FeedHashtagsList {
  hashtags: FeedHashtag[];
}

export interface FeedArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}
