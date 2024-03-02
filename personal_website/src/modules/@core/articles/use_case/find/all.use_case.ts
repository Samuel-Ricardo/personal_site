import { injectable } from 'inversify';
import { ArticleGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllArticleUseCase extends ArticleGatewaySupport {
  async execute() {
    return await this.gateway.findAll();
  }
}
