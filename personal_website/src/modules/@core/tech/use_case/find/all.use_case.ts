import { injectable } from 'inversify';
import { TechGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllTechsUseCase extends TechGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
