import { inject, injectable } from 'inversify';
import { FindAllProjectsUseCase } from '../use_case/find/all.use_case';
import { FindMainProjectsUseCase } from '../use_case/find/main.use_case';
import { MODULE } from '@/modules/app.registry';
import { IProjectService } from './service.interface';

@injectable()
export class ProjectService implements IProjectService {
  constructor(
    @inject(MODULE.PROJECT.USE_CASE.FIND.ALL)
    protected readonly findAllProjectsUseCase: FindAllProjectsUseCase,
    @inject(MODULE.PROJECT.USE_CASE.FIND.MAIN)
    protected readonly findMainProjectsUseCase: FindMainProjectsUseCase,
  ) {}

  async findAll() {
    return await this.findAllProjectsUseCase.execute();
  }
  async findMainProjects() {
    return await this.findMainProjectsUseCase.execute();
  }
}
