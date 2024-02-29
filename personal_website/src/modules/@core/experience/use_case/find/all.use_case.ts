import { injectable } from 'inversify';
import { ExperienceGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllExperiencesUseCase extends ExperienceGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
