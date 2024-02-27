import { inject, injectable } from 'inversify';
import { IArticleService } from './service.interface';
import { FindAllArticleUseCase } from '../use_case/find/all.use_case';
import { FindMainArticleUseCase } from '../use_case/find/main.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class ArticleService implements IArticleService {
  constructor(
    @inject(MODULE.ARTICLE.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllArticleUseCase,
    @inject(MODULE.ARTICLE.USE_CASE.FIND.MAIN)
    protected readonly _findMain: FindMainArticleUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }
}
