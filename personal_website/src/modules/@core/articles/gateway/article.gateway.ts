import { Article } from '../entity/article.entity';

export interface IArticleGateway {
  findAll(): Promise<Article[]>;
  findMainArticles(): Promise<Article[]>;
}
