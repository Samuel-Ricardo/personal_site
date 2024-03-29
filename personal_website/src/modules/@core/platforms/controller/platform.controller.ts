import { inject, injectable } from 'inversify';
import { IPlatformModule } from '../platform.interace';
import { type IPlatformService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { IFindOnePlatformDTO } from '../DTO/gateway/find/one.dto';

@injectable()
export class PlatformController implements IPlatformModule {
  constructor(
    @inject(MODULE.PLATFORM.SERVICE.MAIN)
    private readonly service: IPlatformService,
  ) {}

  async findAll() {
    return this.service.findAll();
  }

  async findOne(DTO: IFindOnePlatformDTO) {
    return this.service.findOne(DTO);
  }
}
