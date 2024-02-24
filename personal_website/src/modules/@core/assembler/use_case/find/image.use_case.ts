import { injectable } from 'inversify';
import { AssemblerGatewaySupport } from '../../gateway/gateway.support';
import { IAssemblerFindDTO } from '../../DTO/gateway/find/index.dto';

@injectable()
export class FindImageUseCase extends AssemblerGatewaySupport {
  async execute(DTO: IAssemblerFindDTO) {
    return this.gateway.findImage(DTO);
  }
}
