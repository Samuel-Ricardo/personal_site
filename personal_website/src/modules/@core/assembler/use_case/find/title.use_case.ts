import { injectable } from 'inversify';
import { AssemblerGatewaySupport } from '../../gateway/gateway.support';
import { IAssemblerFindDTO } from '../../DTO/gateway/find/index.dto';

@injectable()
export class FindTitleUseCase extends AssemblerGatewaySupport {
  async execute(DTO: IAssemblerFindDTO) {
    return await this.gateway.findTitle(DTO);
  }
}
