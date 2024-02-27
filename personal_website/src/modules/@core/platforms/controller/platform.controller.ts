import { inject, injectable } from 'inversify';
import { IPlatformModule } from '../platform.interace';
import { type IPlatformService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class PlatformController implements IPlatformModule {
  constructor(
    @inject(MODULE.PLATFORM.SERVICE.MAIN)
    private readonly service: IPlatformService,
  ) {}
}
