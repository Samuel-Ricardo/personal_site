import { TEXT } from '@/local/data/static/text.data';
import { TITLES } from '@/local/data/static/title.data';
import { IAssemblerFindDTO } from '@/modules/@core/assembler/DTO/gateway/find/index.dto';
import { IAssemblerGateway } from '@/modules/@core/assembler/gateway/assembler.gateway';

export class StaticAssemblerGateway implements IAssemblerGateway {
  async findTitle(DTO: IAssemblerFindDTO) {
    return TITLES.find(async title => title.identifier === DTO.identifier)
      ?.content;
  }

  async findText(DTO: IAssemblerFindDTO) {
    return TEXT.find(async text => text.identifier === DTO.identifier)?.content;
  }
}
