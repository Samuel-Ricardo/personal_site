import { injectable } from 'inversify';
import { OccupationGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllOccupationsUseCase extends OccupationGatewaySupport {
  async execute() {
    return await this.gateway.findAll();
  }
}
