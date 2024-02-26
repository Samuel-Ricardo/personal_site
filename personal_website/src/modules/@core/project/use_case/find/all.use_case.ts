import { injectable } from 'inversify';
import { ProjectGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllProjectsUseCase extends ProjectGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
