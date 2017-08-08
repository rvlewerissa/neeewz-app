// @flow

export type Article = {
  title: string,
  description: string,
  urlToImage: string,
  url: string
};

export type NewsSource = {
  title: string,
  source: string,
  image: number
};

export type NewsSources = Array<NewsSource>;
