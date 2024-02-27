import { Article } from '../entity/article.entity';

export interface IArticleGateway {
  findAll(): Promise<Article[]>;
  findMain(): Promise<Article>;
}
