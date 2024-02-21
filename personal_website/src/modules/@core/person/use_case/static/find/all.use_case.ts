import { inject, injectable } from 'inversify';
import { type IPersonGateway } from '../../../gateway/person.gateway';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../../../DTO/gateway/find/all.dto';

@injectable()
export class FindAllStaticPersonUseCase {
  constructor(
    @inject(MODULE.GATEWAY.CMS.STATIC.PERSON)
    protected readonly gateway: IPersonGateway,
  ) {}

  async execute(DTO?: IFindAllPersonDTO) {
    return await this.gateway.findAll(DTO);
  }
}
