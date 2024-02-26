import { inject, injectable } from 'inversify';
import { type IProjectGateway } from './project.gateway';
import { MODULE } from '@/modules/app.registry';

@injectable()
export abstract class ProjectGatewaySupport {
  constructor(
    @inject(MODULE.GATEWAY.CMS.SANITY.PROJECT)
    protected readonly gateway: IProjectGateway,
  ) {}
}
