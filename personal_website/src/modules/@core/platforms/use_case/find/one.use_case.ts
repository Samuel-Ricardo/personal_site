import { IFindOnePlatformDTO } from '../../DTO/gateway/find/one.dto';
import { PlatformGatewaySupport } from '../../gateway/gateway.support';

export class FindOnePlatformUseCase extends PlatformGatewaySupport {
  async execute(DTO: IFindOnePlatformDTO) {
    return this.gateway.findOne(DTO);
  }
}
