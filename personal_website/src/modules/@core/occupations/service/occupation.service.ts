import { inject, injectable } from 'inversify';
import { FindAllOccupationsUseCase } from '../use_case/find/all.use_case';
import { MODULE } from '@/modules/app.registry';
import { IOccupationService } from './service.interface';

@injectable()
export class OccupationService implements IOccupationService {
  constructor(
    @inject(MODULE.OCCUPATION.USE_CASE.FIND.ALL)
    private readonly _findAll: FindAllOccupationsUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }
}
