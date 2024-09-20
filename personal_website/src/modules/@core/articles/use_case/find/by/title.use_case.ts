import { injectable } from 'inversify';
import { ArticleGatewaySupport } from '../../../gateway/gateway.support';
import { IFindArticlesByTitleDTO } from '../../../DTO/find/by/title.dto';

@injectable()
export class FindOneArticleByTitleUseCase extends ArticleGatewaySupport {
  async execute(DTO: IFindArticlesByTitleDTO) {
    return this.gateway.findOneByTitle(DTO);
  }
}
