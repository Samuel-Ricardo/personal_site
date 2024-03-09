import { injectable } from 'inversify';
import { type IProjectGateway } from './project.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class ProjectGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.PROJECT)
  protected readonly gateway: IProjectGateway;
}
