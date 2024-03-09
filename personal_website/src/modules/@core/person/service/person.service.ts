import { inject, injectable } from 'inversify';
import { FindAllPersonUseCase } from '../use_case/find/all.use_case';
import { FindOnePersonUseCase } from '../use_case/find/one.use_case';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '../DTO/gateway/find/one.dto';
import { IPersonService } from './service.interface';

@injectable()
export class PersonService implements IPersonService {
  constructor(
    @inject(MODULE.PERSON.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllPersonUseCase,
    @inject(MODULE.PERSON.USE_CASE.FIND.ONE)
    protected readonly _findOne: FindOnePersonUseCase,
  ) {}

  async findAllAsync(DTO?: IFindAllPersonDTO) {
    return await this._findAll.execute(DTO);
  }

  async findOneAsync(DTO: IFindOnePersonDTO) {
    return await this._findOne.execute(DTO);
  }
}
