import { MODULE } from '@/modules/app.registry';
import { injectable } from 'inversify';
import { type IOccupationGateway } from '../../../gateway/occupation.gateway';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export class FindAllStaticOccupationsUseCase {
  @injectGateway(MODULE.GATEWAY.CMS.STATIC.OCCUPATION)
  protected readonly gateway: IOccupationGateway;

  async execute() {
    return this.gateway.findAll();
  }
}
