import { injectable } from 'inversify';
import { ExperienceGatewaySupport } from '../../../gateway/gateway.support';
import { IFindExperienceByContextDTO } from '../../../DTO/find/by/context.dto';

@injectable()
export class FindExperienceByContextUseCase extends ExperienceGatewaySupport {
  async execute(DTO: IFindExperienceByContextDTO) {
    return this.gateway.findByContext(DTO);
  }
}
