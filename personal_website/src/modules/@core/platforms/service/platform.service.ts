import { inject, injectable } from 'inversify';
import { FindAllPlatformUseCase } from '../use_case/find/all.use_case';
import { FindOnePlatformUseCase } from '../use_case/find/one.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class PlatformService {
  constructor(
    @inject(MODULE.PLATFORM.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllPlatformUseCase,
    @inject(MODULE.PLATFORM.USE_CASE.FIND.ONE)
    protected readonly _findOne: FindOnePlatformUseCase,
  ) {}
}
