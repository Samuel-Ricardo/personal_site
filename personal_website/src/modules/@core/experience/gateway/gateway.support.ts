import { injectGateway } from '@/modules/gateway/gateway.module';
import { type IExperienceGateway } from './experience.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectable } from 'inversify';

@injectable()
export abstract class ExperienceGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.EXPERIENCE)
  protected readonly gateway: IExperienceGateway;
}
