import { inject, injectable } from 'inversify';
import { IExperienceModule } from '../experience.interface';
import { type IExperienceService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class ExperienceController implements IExperienceModule {
  constructor(
    @inject(MODULE.EXPERIENCE.SERVICE.MAIN)
    protected readonly service: IExperienceService,
  ) {}

  findAll() {
    return this.service.findAll();
  }

  findWorkExperience() {
    return this.service.findByContext({ context: 'work' });
  }

  findAcademicExperience() {
    return this.service.findByContext({ context: 'academic' });
  }
}
