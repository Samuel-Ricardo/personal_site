import { inject, injectable } from 'inversify';
import { type IOccupationController } from '../controller.interface';
import { type IOccupationService } from '../../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class StaticOccupationController implements IOccupationController {
  constructor(
    @inject(MODULE.OCCUPATION.SERVICE.STATIC)
    protected readonly service: IOccupationService,
  ) {}

  async findAllAsync() {
    return await this.service.findAll();
  }
}
