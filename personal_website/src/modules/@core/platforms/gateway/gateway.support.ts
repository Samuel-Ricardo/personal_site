import { injectable } from 'inversify';
import { type IPlatformGateway } from './platform.gateway';
import { injectGateway } from '@/modules/gateway/gateway.module';
import { MODULE } from '@/modules/app.registry';

@injectable()
export abstract class PlatformGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.PLATFORM)
  protected readonly gateway: IPlatformGateway;
}
