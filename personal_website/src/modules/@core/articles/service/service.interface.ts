import { Article } from '../entity/article.entity';

export interface IArticleService {
  findAll(): Promise<Article[]>;
  findMainArticles(): Promise<Article[]>;
}
