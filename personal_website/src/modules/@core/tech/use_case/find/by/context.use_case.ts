import { injectable } from 'inversify';
import { TechGatewaySupport } from '../../../gateway/gateway.support';
import { IFindTechByContextDTO } from '../../../DTO/use_case/find/by/context.dto';

@injectable()
export class FindTechByContextUseCase extends TechGatewaySupport {
  async execute(context: IFindTechByContextDTO) {
    return await this.gateway.findByContext(context);
  }
}
