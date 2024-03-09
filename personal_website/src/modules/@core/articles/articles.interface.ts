import { Article } from './entity/article.entity';

export interface IArticleModule {
  findAll(): Promise<Article[]>;
  findMainArticles(): Promise<Article[]>;
}
