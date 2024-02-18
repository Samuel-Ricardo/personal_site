import { inject, injectable } from 'inversify';
import { AssemblerService } from '../service/assembler.service';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class AssemblerController {
  constructor(
    @inject(MODULE.ASSEMBLER.SERVICE.MAIN)
    private readonly service: AssemblerService,
  ) {}
}
