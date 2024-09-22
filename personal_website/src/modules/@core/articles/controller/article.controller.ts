import { inject, injectable } from 'inversify';
import { IArticleModule } from '../articles.interface';
import { type IArticleService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { IFindArticlesByTitleDTO } from '../DTO/find/by/title.dto';

@injectable()
export class ArticleController implements IArticleModule {
  constructor(
    @inject(MODULE.ARTICLE.SERVICE.MAIN)
    protected service: IArticleService,
  ) {}
  async findAll() {
    return this.service.findAll();
  }

  async findAllSync() {
    const result = await this.service.findAll();
    return await Promise.all(result.map(article => article.sync()));
  }

  async findMainArticles() {
    return this.service.findMainArticles();
  }

  async findOneByTitle(DTO: IFindArticlesByTitleDTO) {
    return await (await this.service.findOneByTitle(DTO))?.sync();
  }
}
