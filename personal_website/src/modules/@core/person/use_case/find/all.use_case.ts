import { injectable } from 'inversify';
import { PersonGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllPersonUseCase extends PersonGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
