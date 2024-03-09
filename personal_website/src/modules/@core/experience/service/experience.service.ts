import { inject, injectable } from 'inversify';
import { IExperienceService } from './service.interface';
import { FindAllExperiencesUseCase } from '../use_case/find/all.use_case';
import { FindExperienceByContextUseCase } from '../use_case/find/by/context.use_case';
import { MODULE } from '@/modules/app.registry';
import { IFindExperienceByContextDTO } from '../DTO/find/by/context.dto';

@injectable()
export class ExperienceService implements IExperienceService {
  constructor(
    @inject(MODULE.EXPERIENCE.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllExperiencesUseCase,
    @inject(MODULE.EXPERIENCE.USE_CASE.FIND.BY.CONTEXT)
    protected readonly _findByContext: FindExperienceByContextUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }

  async findByContext(DTO: IFindExperienceByContextDTO) {
    return await this._findByContext.execute(DTO);
  }
}
