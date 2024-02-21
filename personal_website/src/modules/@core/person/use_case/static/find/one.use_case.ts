import { inject, injectable } from 'inversify';
import { type IPersonGateway } from '../../../gateway/person.gateway';
import { MODULE } from '@/modules/app.registry';
import { IFindOnePersonDTO } from '../../../DTO/gateway/find/one.dto';

@injectable()
export class FindOneStaticPersonUseCase {
  constructor(
    @inject(MODULE.GATEWAY.CMS.STATIC.PERSON)
    protected readonly gateway: IPersonGateway,
  ) {}

  async execute(DTO: IFindOnePersonDTO) {
    return await this.gateway.findOne(DTO);
  }
}
