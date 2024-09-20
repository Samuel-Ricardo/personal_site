import { injectable } from 'inversify';
import { ProjectGatewaySupport } from '../../../gateway/gateway.support';
import { IFindProjectByTitleDTO } from '../../../DTO/find/by/title.dto';

@injectable()
export class FindOneProjectByTitleUseCase extends ProjectGatewaySupport {
  async execute(DTO: IFindProjectByTitleDTO) {
    return this.gateway.findOneByTitle(DTO);
  }
}
