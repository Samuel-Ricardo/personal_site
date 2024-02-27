import { injectable } from 'inversify';
import { PlatformGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllPlatformUseCase extends PlatformGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
