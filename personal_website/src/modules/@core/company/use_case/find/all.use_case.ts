import { injectable } from 'inversify';
import { CompanyGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllCompanyUseCase extends CompanyGatewaySupport {
  async execute() {
    return await this.gateway.findAll();
  }
}
