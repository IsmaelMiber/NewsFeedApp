export type Article = {
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string;
    name: string;
  };
};

export type Articles = Article[];

export type SearchedArticles = Articles | undefined;
