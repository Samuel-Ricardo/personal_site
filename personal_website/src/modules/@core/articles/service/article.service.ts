import { inject, injectable } from 'inversify';
import { IArticleService } from './service.interface';
import { FindAllArticleUseCase } from '../use_case/find/all.use_case';
import { FindMainArticleUseCase } from '../use_case/find/main.use_case';
import { MODULE } from '@/modules/app.registry';
import { FindOneArticleByTitleUseCase } from '../use_case/find/by/title.use_case';
import { IFindArticlesByTitleDTO } from '../DTO/find/by/title.dto';

@injectable()
export class ArticleService implements IArticleService {
  constructor(
    @inject(MODULE.ARTICLE.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllArticleUseCase,
    @inject(MODULE.ARTICLE.USE_CASE.FIND.MAIN)
    protected readonly _findMain: FindMainArticleUseCase,
    @inject(MODULE.ARTICLE.USE_CASE.FIND.BY.TITLE)
    protected readonly _findByTitle: FindOneArticleByTitleUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }

  async findMainArticles() {
    return await this._findMain.execute();
  }

  async findOneByTitle(DTO: IFindArticlesByTitleDTO) {
    return await this._findByTitle.execute(DTO);
  }
}
