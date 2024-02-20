import { IPersonGateway } from '@/modules/@core/person/gateway/person.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { IFindAllPersonDTO } from '@/modules/@core/person/DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '@/modules/@core/person/DTO/gateway/find/one.dto';
import { Person } from '@/modules/@core/person/entity/person.entity';

@injectable()
export class SanityPersonGateway
  extends SanitySupport
  implements IPersonGateway
{
  async findAll(DTO: IFindAllPersonDTO): Promise<Person[]> {
    const result = await this.client.fetch(
      `*[_type == "person" && lang == "${DTO.lang || 'en'}"]`,
    );

    console.log({ result });

    return {} as any;
  }
  async findOne(DTO: IFindOnePersonDTO) {
    const result = (
      await this.client.fetch(
        `*[_type == "person" && lang == "${DTO.lang || 'en'}" && identifier == "${DTO.identifier}"]{name,avatar,title}`,
      )
    )[0];

    if (result) result.avatar = this.imageBuilder.image(result.avatar).url();

    return result ? Person.fromDTO(result) : undefined;
  }
}
