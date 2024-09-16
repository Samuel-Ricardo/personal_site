import { inject, injectable } from 'inversify';
import { FindAllProjectsUseCase } from '../use_case/find/all.use_case';
import { FindMainProjectsUseCase } from '../use_case/find/main.use_case';
import { MODULE } from '@/modules/app.registry';
import { IProjectService } from './service.interface';
import { IFindProjectByTitleDTO } from '../DTO/find/by/title.dto';
import { Project } from '../entity/project.entity';
import { FindOneProjectByTitleUseCase } from '../use_case/find/by/title.use_case';

@injectable()
export class ProjectService implements IProjectService {
  constructor(
    @inject(MODULE.PROJECT.USE_CASE.FIND.ALL)
    protected readonly findAllProjectsUseCase: FindAllProjectsUseCase,
    @inject(MODULE.PROJECT.USE_CASE.FIND.MAIN)
    protected readonly findMainProjectsUseCase: FindMainProjectsUseCase,
    @inject(MODULE.PROJECT.USE_CASE.FIND.BY.TITLE)
    protected readonly findOneProjectByTitleUseCase: FindOneProjectByTitleUseCase,
  ) {}

  async findAll() {
    return await this.findAllProjectsUseCase.execute();
  }

  async findMainProjects() {
    return await this.findMainProjectsUseCase.execute();
  }

  async findAllSync() {
    const result = await Promise.all(
      await this.findAllProjectsUseCase.execute(),
    );

    return await Promise.all(result.map(r => r.sync()));
  }

  async findOneByTitle(DTO: IFindProjectByTitleDTO) {
    return await this.findOneProjectByTitleUseCase.execute(DTO);
  }
}
