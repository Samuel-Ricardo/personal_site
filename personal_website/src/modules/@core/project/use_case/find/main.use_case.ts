import { injectable } from 'inversify';
import { ProjectGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindMainProjectsUseCase extends ProjectGatewaySupport {
  async execute() {
    return this.gateway.findMainProjects();
  }
}
