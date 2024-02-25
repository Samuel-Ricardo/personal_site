import { inject, injectable } from 'inversify';
import { ITechService } from './service.interface';
import { FindAllTechsUseCase } from '../use_case/find/all.use_case';
import { MODULE } from '@/modules/app.registry';
import { FindTechByContextUseCase } from '../use_case/find/by/context.use_case';
import { IFindTechByContextDTO } from '../DTO/use_case/find/by/context.dto';

@injectable()
export class TechService implements ITechService {
  constructor(
    @inject(MODULE.TECH.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllTechsUseCase,
    protected readonly _findByContext: FindTechByContextUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }

  async findByContext(context: IFindTechByContextDTO) {
    return await this._findByContext.execute(context);
  }
}
