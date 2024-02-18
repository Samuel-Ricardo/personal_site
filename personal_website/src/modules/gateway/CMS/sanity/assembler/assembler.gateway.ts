import { IAssemblerGateway } from '@/modules/@core/assembler/gateway/assembler.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { IAssemblerFindDTO } from '@/modules/@core/assembler/DTO/gateway/find/index.dto';

@injectable()
export class SanityAssemblerGateway
  extends SanitySupport
  implements IAssemblerGateway
{
  async findTitle(DTO: IAssemblerFindDTO) {}

  async findText(DTO: IAssemblerFindDTO) {}
}
