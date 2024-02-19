import { inject, injectable } from 'inversify';
import { PersonService } from '../service/person.service';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '../DTO/gateway/find/one.dto';

@injectable()
export class PersonController {
  constructor(
    @inject(MODULE.PERSON.SERVICE.MAIN)
    protected readonly service: PersonService,
  ) {}

  async findAll(DTO?: IFindAllPersonDTO) {
    return await this.service.findAll(DTO);
  }

  async findOne(DTO: IFindOnePersonDTO) {
    return await this.service.findOne(DTO);
  }
}
