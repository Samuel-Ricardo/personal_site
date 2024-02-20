import { IAssemblerGateway } from '@/modules/@core/assembler/gateway/assembler.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { IAssemblerFindDTO } from '@/modules/@core/assembler/DTO/gateway/find/index.dto';

@injectable()
export class SanityAssemblerGateway
  extends SanitySupport
  implements IAssemblerGateway
{
  async findTitle({ identifier, lang }: IAssemblerFindDTO) {
    const result = await this.client.fetch(
      `*[_type == "title" && lang == "${lang || 'en'}" && identifier == "${identifier}" ]{content}`,
    );

    return result[0]?.content;
  }

  async findText(DTO: IAssemblerFindDTO) {
    const result = await this.client.fetch(
      `*[_type == "tp_text" && lang == "${DTO.lang || 'en'}" && identifier == "${DTO.identifier}" ]{content}`,
    );

    return result[0]?.content;
  }
}
