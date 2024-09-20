import { IFindArticlesByTitleDTO } from './DTO/find/by/title.dto';
import { IArticlesSyncDTO } from './DTO/sync.dto';
import { Article } from './entity/article.entity';

export interface IArticleModule {
  findAll(): Promise<Article[]>;
  findAllSync(): Promise<IArticlesSyncDTO[]>;
  findMainArticles(): Promise<Article[]>;
  findOneByTitle(
    DTO: IFindArticlesByTitleDTO,
  ): Promise<IArticlesSyncDTO | null | undefined>;
}
