import { inject, injectable } from 'inversify';
import { type IOccupationGateway } from './occupation.gateway';
import { MODULE } from '@/modules/app.registry';

@injectable()
export abstract class OccupationGatewaySupport {
  constructor(
    @inject(MODULE.GATEWAY.CMS.SANITY.OCCUPATION)
    protected readonly gateway: IOccupationGateway,
  ) {}
}
