import { inject, injectable } from 'inversify';
import { type IAssemblerService } from '../../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { IAssemblerFindDTO } from '../../DTO/gateway/find/index.dto';

@injectable()
export class StaticAssemblerController {
  constructor(
    @inject(MODULE.ASSEMBLER.SERVICE.STATIC)
    protected readonly service: IAssemblerService,
  ) {}

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this.service.findTitle(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this.service.findText(DTO);
  }
}
