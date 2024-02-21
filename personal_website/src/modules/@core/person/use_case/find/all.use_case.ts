import { injectable } from 'inversify';
import { PersonGatewaySupport } from '../../gateway/gateway.support';
import { IFindAllPersonDTO } from '../../DTO/gateway/find/all.dto';

@injectable()
export class FindAllPersonUseCase extends PersonGatewaySupport {
  async execute(DTO?: IFindAllPersonDTO) {
    return await this.gateway.findAll(DTO);
  }
}
