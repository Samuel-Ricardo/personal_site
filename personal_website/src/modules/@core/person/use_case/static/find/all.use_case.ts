import { injectable } from 'inversify';
import { type IPersonGateway } from '../../../gateway/person.gateway';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../../../DTO/gateway/find/all.dto';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export class FindAllStaticPersonUseCase {
  @injectGateway(MODULE.GATEWAY.CMS.STATIC.PERSON)
  protected readonly gateway: IPersonGateway;

  async execute(DTO?: IFindAllPersonDTO) {
    return await this.gateway.findAll(DTO);
  }
}
