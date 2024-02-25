import { injectable } from 'inversify';
import { TechGatewaySupport } from '../../../gateway/gateway.support';

@injectable()
export class FindTechByContextUseCase extends TechGatewaySupport {
  async execute(context: string) {
    return await this.gateway.findByContext(context);
  }
}
