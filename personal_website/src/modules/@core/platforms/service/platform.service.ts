import { inject, injectable } from 'inversify';
import { FindAllPlatformUseCase } from '../use_case/find/all.use_case';
import { FindOnePlatformUseCase } from '../use_case/find/one.use_case';
import { MODULE } from '@/modules/app.registry';
import { IPlatformService } from './service.interface';
import { IFindOnePlatformDTO } from '../DTO/gateway/find/one.dto';

@injectable()
export class PlatformService implements IPlatformService {
  constructor(
    @inject(MODULE.PLATFORM.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllPlatformUseCase,
    @inject(MODULE.PLATFORM.USE_CASE.FIND.ONE)
    protected readonly _findOne: FindOnePlatformUseCase,
  ) {}

  async findAll() {
    return this._findAll.execute();
  }

  async findOne(DTO: IFindOnePlatformDTO) {
    return this._findOne.execute(DTO);
  }
}
