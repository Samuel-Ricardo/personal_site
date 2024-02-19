import { IAssemblerFindDTO } from '../../DTO/gateway/find/index.dto';
import { AssemblerGatewaySupport } from '../../gateway/gateway.support';

export class FindTextUseCase extends AssemblerGatewaySupport {
  async execute(DTO: IAssemblerFindDTO) {
    return this.gateway.findText(DTO);
  }
}
