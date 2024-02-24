import { injectable } from 'inversify';
import { type IAssemblerGateway } from '../../../gateway/assembler.gateway';
import { MODULE } from '@/modules/app.registry';
import { type IAssemblerFindDTO } from '../../../DTO/gateway/find/index.dto';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export class FindStaticTextUseCase {
  @injectGateway(MODULE.GATEWAY.CMS.STATIC.ASSEMBLER)
  protected readonly gateway: IAssemblerGateway;

  async execute(DTO: IAssemblerFindDTO) {
    return await this.gateway.findText(DTO);
  }
}
