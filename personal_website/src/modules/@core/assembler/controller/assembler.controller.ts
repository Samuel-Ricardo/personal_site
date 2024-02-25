import { inject, injectable } from 'inversify';
import { AssemblerService } from '../service/assembler.service';
import { MODULE } from '@/modules/app.registry';
import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

@injectable()
export class AssemblerController {
  constructor(
    @inject(MODULE.ASSEMBLER.SERVICE.MAIN)
    private readonly service: AssemblerService,
  ) {}

  async assembleOccupation() {
    return await this.service.assembleOccupation();
  }

  async assembleHero() {
    return await this.service.assembleHero();
  }

  async assembleAbout() {
    return this.service.assembleAbout();
  }

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this.service.findTitle(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this.service.findText(DTO);
  }
}
