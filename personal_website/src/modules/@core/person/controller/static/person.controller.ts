import { inject, injectable } from 'inversify';
import { IPersonController } from '../controller.interface';
import { type IPersonService } from '../../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../../DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '../../DTO/gateway/find/one.dto';

@injectable()
export class StaticPersonController implements IPersonController {
  constructor(
    @inject(MODULE.PERSON.SERVICE.STATIC)
    protected readonly service: IPersonService,
  ) {}

  async findAllAsync(DTO?: IFindAllPersonDTO) {
    return await this.service.findAllAsync(DTO);
  }

  async findOneAsync(DTO: IFindOnePersonDTO) {
    return await this.service.findOneAsync(DTO);
  }
}
