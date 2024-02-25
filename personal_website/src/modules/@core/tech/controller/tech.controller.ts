import { inject, injectable } from 'inversify';
import { ITechModule } from '../tech.interface';
import { type ITechService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { IFindTechByContextDTO } from '../DTO/use_case/find/by/context.dto';

@injectable()
export class TechController implements ITechModule {
  constructor(
    @inject(MODULE.TECH.SERVICE.MAIN)
    protected readonly service: ITechService,
  ) {}

  async findAll() {
    return await this.service.findAll();
  }

  async findByContext(context: IFindTechByContextDTO) {
    return await this.service.findByContext(context);
  }
}
