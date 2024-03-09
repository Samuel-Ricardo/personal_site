import { MODULE } from '@/modules/app.registry';
import { injectable } from 'inversify';
import { type ItechGateway } from './tech.gateway';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class TechGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.TECH)
  protected readonly gateway: ItechGateway;
}
