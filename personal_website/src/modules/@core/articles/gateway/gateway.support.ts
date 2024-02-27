import { injectable } from 'inversify';
import { type IArticleGateway } from './article.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class ArticleGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.ARTICLE)
  protected readonly gateway: IArticleGateway;
}
