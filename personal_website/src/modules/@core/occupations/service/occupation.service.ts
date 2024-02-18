import { inject, injectable } from 'inversify';
import { FindAllOccupationsUseCase } from '../use_case/find/all.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class OccupationService {
  constructor(
    @inject(MODULE.OCCUPATION.USE_CASE.FIND.ALL)
    private readonly _findAll: FindAllOccupationsUseCase,
  ) {}

  async findAll() {
    return this._findAll.execute();
  }
}
