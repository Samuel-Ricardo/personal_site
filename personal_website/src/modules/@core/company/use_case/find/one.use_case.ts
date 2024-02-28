import { injectable } from 'inversify';
import { CompanyGatewaySupport } from '../../gateway/gateway.support';
import { IFindOneComapanyDTO } from '../../DTO/find/one.dto';

@injectable()
export class FindOneCompanyUseCase extends CompanyGatewaySupport {
  async execute(DTO: IFindOneComapanyDTO) {
    return await this.gateway.findOne(DTO);
  }
}
