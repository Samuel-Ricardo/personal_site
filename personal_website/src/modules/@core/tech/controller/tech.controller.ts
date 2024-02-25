import { inject, injectable } from 'inversify';
import { ITechModule } from '../tech.interface';
import { type ITechService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class TechController implements ITechModule {
  constructor(
    @inject(MODULE.TECH.SERVICE.MAIN)
    protected readonly service: ITechService,
  ) {}

  async findAll() {
    return this.service.findAll();
  }

  async findByContext(context: string) {
    return this.service.findByContext(context);
  }
}
