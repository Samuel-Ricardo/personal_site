import { IAssemblerFindDTO } from '@/modules/@core/assembler/DTO/gateway/find/index.dto';
import { IAssemblerGateway } from '@/modules/@core/assembler/gateway/assembler.gateway';

export class StaticAssemblerGateway implements IAssemblerGateway {
  findTitle(DTO: IAssemblerFindDTO): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }
  findText(DTO: IAssemblerFindDTO): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }
}
