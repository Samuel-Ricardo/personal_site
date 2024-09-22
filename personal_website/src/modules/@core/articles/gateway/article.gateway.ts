import { IFindArticlesByTitleDTO } from '../DTO/find/by/title.dto';
import { Article } from '../entity/article.entity';

export interface IArticleGateway {
  findAll(): Promise<Article[]>;
  findMainArticles(): Promise<Article[]>;
  findOneByTitle(DTO: IFindArticlesByTitleDTO): Promise<Article | null>;
}
