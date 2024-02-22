import { inject, injectable } from 'inversify';
import { type IAssemblerGateway } from '../../../gateway/assembler.gateway';
import { MODULE } from '@/modules/app.registry';
import { type IAssemblerFindDTO } from '../../../DTO/gateway/find/index.dto';

@injectable()
export class FindStaticTextUseCase {
  constructor(
    @inject(MODULE.GATEWAY.CMS.STATIC.ASSEMBLER)
    protected readonly gateway: IAssemblerGateway,
  ) {}

  async execute(DTO: IAssemblerFindDTO) {
    return await this.gateway.findText(DTO);
  }
}
