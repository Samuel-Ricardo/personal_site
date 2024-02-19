import { injectable } from 'inversify';
import { PersonGatewaySupport } from '../../gateway/gateway.support';
import { IFindOnePersonDTO } from '../../DTO/gateway/find/one.dto';

@injectable()
export class FindOnePersonUseCase extends PersonGatewaySupport {
  async execute(DTO: IFindOnePersonDTO) {
    return this.gateway.findOne(DTO);
  }
}
