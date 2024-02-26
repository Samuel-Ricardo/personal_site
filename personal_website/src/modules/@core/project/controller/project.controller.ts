import { inject, injectable } from 'inversify';
import { type IProjectService } from '../service/service.interface';
import { IProjectModule } from '../project.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class ProjectController implements IProjectModule {
  constructor(
    @inject(MODULE.PROJECT.SERVICE.MAIN)
    protected readonly service: IProjectService,
  ) {}
}
