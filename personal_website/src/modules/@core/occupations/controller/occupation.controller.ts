import { inject, injectable } from 'inversify';
import { OccupationService } from '../service/occupation.service';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class OccupationController {
  constructor(
    @inject(MODULE.OCCUPATION.SERVICE.MAIN)
    private readonly service: OccupationService,
  ) {}

  async findAll() {
    return this.service.findAll();
  }
}
