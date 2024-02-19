import { inject, injectable } from 'inversify';
import { FindAllPersonUseCase } from '../use_case/find/all.use_case';
import { FindOnePersonUseCase } from '../use_case/find/one.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class PersonService {
  constructor(
    @inject(MODULE.PERSON.USE_CASE.FIND.ALL)
    protected readonly findAll: FindAllPersonUseCase,
    @inject(MODULE.PERSON.USE_CASE.FIND.ONE)
    protected readonly findOne: FindOnePersonUseCase,
  ) {}
}
