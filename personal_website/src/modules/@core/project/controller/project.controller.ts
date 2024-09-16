import { inject, injectable } from 'inversify';
import { type IProjectService } from '../service/service.interface';
import { IProjectModule } from '../project.interface';
import { MODULE } from '@/modules/app.registry';
import { IFindProjectByTitleDTO } from '../DTO/find/by/title.dto';

@injectable()
export class ProjectController implements IProjectModule {
  constructor(
    @inject(MODULE.PROJECT.SERVICE.MAIN)
    protected readonly service: IProjectService,
  ) {}

  async findAll() {
    return await this.service.findAll();
  }

  async findAllSync() {
    return await this.service.findAllSync();
  }

  async findMainProjects() {
    return await this.service.findMainProjects();
  }

  async findOneProjectByTitle(DTO: IFindProjectByTitleDTO) {
    return await this.service.findOneByTitle(DTO);
  }
}
