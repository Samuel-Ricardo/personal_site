import { inject, injectable } from 'inversify';
import { type IPersonGateway } from './person.gateway';
import { MODULE } from '@/modules/app.registry';

@injectable()
export abstract class PersonGatewaySupport {
  constructor(
    @inject(MODULE.GATEWAY.CMS.SANITY.PERSON)
    protected readonly gateway: IPersonGateway,
  ) {}
}
