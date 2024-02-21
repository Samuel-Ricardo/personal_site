import { inject, injectable } from 'inversify';
import { OccupationService } from '../service/occupation.service';
import { MODULE } from '@/modules/app.registry';
import { IOccupationController } from './controller.interface';

@injectable()
export class OccupationController implements IOccupationController {
  constructor(
    @inject(MODULE.OCCUPATION.SERVICE.MAIN)
    private readonly service: OccupationService,
  ) {}

  async findAllAsync() {
    return await this.service.findAll();
  }
}
