import { IOccupationGateway } from '@/modules/@core/occupations/gateway/occupation.gateway';
import { injectable } from 'inversify';
import { SanitySupport } from '../sanity.gateway';
import { IOccupationDTO } from '@/modules/@core/occupations/DTO/occupation.dto';
import { Occupation } from '@/modules/@core/occupations/entity/occupation.entity';

@injectable()
export class SanityOccupationGateway
  extends SanitySupport
  implements IOccupationGateway
{
  async findAll() {
    const data = await this.client.fetch<IOccupationDTO[]>(
      `*[_type == "occupations" && lang == 'en'] { title, description, image}`,
    );

    return Occupation.fromDTOList(data);
  }
}
