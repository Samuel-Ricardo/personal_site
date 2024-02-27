import { injectable } from 'inversify';
import { ArticleGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindMainArticleUseCase extends ArticleGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
