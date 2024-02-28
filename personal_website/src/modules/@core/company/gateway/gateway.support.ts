import { type ICompanyGateway } from './company.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';
import { injectable } from 'inversify';

@injectable()
export abstract class CompanyGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.COMPANY)
  protected readonly gateway: ICompanyGateway;
}
