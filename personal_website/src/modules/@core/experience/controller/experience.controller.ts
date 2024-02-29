import { inject, injectable } from 'inversify';
import { IExperienceModule } from '../experience.interface';
import { type IExperienceService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class ControllerExperience implements IExperienceModule {
  constructor(
    @inject(MODULE.EXPERIENCE.SERVICE.MAIN)
    protected readonly service: IExperienceService,
  ) {}
}
