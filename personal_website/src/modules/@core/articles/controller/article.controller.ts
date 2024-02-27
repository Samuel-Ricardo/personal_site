import { inject, injectable } from 'inversify';
import { IArticleModule } from '../articles.interface';
import { type IArticleService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class ArticleController implements IArticleModule {
  constructor(
    @inject(MODULE.ARTICLE.SERVICE.MAIN)
    protected service: IArticleService,
  ) {}
  async findAll() {
    return this.service.findAll();
  }
  async findMainArticles() {
    return this.service.findMainArticles();
  }
}
