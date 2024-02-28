import { ICompanyGateway } from '@/modules/@core/company/gateway/company.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';

@injectable()
export class SanityCompanyGateway
  extends SanitySupport
  implements ICompanyGateway {}
