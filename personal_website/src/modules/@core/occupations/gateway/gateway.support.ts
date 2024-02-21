import { injectable } from 'inversify';
import { type IOccupationGateway } from './occupation.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class OccupationGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.OCCUPATION)
  protected readonly gateway: IOccupationGateway;
}
