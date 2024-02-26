import { inject, injectable } from 'inversify';
import { FindAllProjectsUseCase } from '../use_case/find/all.use_case';
import { FindMainProjectsUseCase } from '../use_case/find/main.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class ProjectService implements IProjectService {
  constructor(
    @inject(MODULE.PROJECT.USE_CASE.FIND.ALL)
    protected readonly findAllProjectsUseCase: FindAllProjectsUseCase,
    @inject(MODULE.PROJECT.USE_CASE.FIND.MAIN)
    protected readonly findMainProjectsUseCase: FindMainProjectsUseCase,
  ) {}

  findAll(): Promise<Project[]> {
    throw new Error('Method not implemented.');
  }
  findMainProjects(): Promise<Project[]> {
    throw new Error('Method not implemented.');
  }
}
