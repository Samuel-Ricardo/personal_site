import { inject, injectable } from 'inversify';
import { type IAssemblerService } from '../../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class StaticAssemblerController {
  constructor(
    @inject(MODULE.ASSEMBLER.SERVICE.STATIC)
    protected readonly service: IAssemblerService,
  ) {}
}
