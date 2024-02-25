import { inject, injectable } from 'inversify';
import { ITechService } from './service.interface';
import { FindAllTechsUseCase } from '../use_case/find/all.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class TechService implements ITechService {
  constructor(
    @inject(MODULE.TECH.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllTechsUseCase,
  ) {}

  async findAll() {
    return this._findAll.execute();
  }
}
