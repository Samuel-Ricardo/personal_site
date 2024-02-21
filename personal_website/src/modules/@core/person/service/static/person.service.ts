import { inject, injectable } from 'inversify';
import { FindAllStaticPersonUseCase } from '../../use_case/static/find/all.use_case';
import { FindOneStaticPersonUseCase } from '../../use_case/static/find/one.use_case';
import { IPersonService } from '../service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class StaticPersonService implements IPersonService {
  constructor(
    @inject(MODULE.PERSON.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllStaticPersonUseCase,
    @inject(MODULE.PERSON.USE_CASE.FIND.ONE)
    protected readonly _findOne: FindOneStaticPersonUseCase,
  ) {}
}
