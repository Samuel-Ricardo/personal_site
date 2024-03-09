import { injectable } from 'inversify';
import { type IPersonGateway } from './person.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class PersonGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.PERSON)
  protected readonly gateway: IPersonGateway;
}
