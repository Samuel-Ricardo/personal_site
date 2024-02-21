import { inject, injectable } from 'inversify';
import { PersonService } from '../service/person.service';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '../DTO/gateway/find/one.dto';
import { IPersonController } from './controller.interface';

@injectable()
export class PersonController implements IPersonController {
  constructor(
    @inject(MODULE.PERSON.SERVICE.MAIN)
    protected readonly service: PersonService,
  ) {}

  async findAllAsync(DTO?: IFindAllPersonDTO) {
    return await this.service.findAllAsync(DTO);
  }

  async findOneAsync(DTO: IFindOnePersonDTO) {
    return await this.service.findOneAsync(DTO);
  }
}
