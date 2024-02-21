import { inject, injectable } from 'inversify';
import { IOccupationService } from '../service.interface';
import { FindAllStaticOccupationsUseCase } from '../../use_case/find/static/all.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class StaticOccupationService implements IOccupationService {
  constructor(
    @inject(MODULE.OCCUPATION.USE_CASE.STATIC.FIND.ALL)
    protected readonly _findAll: FindAllStaticOccupationsUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }
}
