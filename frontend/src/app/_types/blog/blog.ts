export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
};

export type BlogPageData = {
  title: string;
  description: string;
  image: string;
  posts: BlogPost[];
};
