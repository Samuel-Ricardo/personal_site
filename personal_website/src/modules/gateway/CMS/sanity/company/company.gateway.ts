import { ICompanyGateway } from '@/modules/@core/company/gateway/company.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Company } from '@/modules/@core/company/entity/commpany.entity';
import { IFindOneComapanyDTO } from '@/modules/@core/company/DTO/find/one.dto';

@injectable()
export class SanityCompanyGateway
  extends SanitySupport
  implements ICompanyGateway
{
  async findAll(): Promise<Promise<Company>[]> {
    return Company.fromDTOs(
      await this.client.fetch(`*[_type == "company"]{name,logo,link}`),
    );
  }

  async findOne({ id }: IFindOneComapanyDTO): Promise<Company> {
    return Company.fromDTO(
      await this.client.fetch(
        `*[_type == "company" && _id == "${id}"]{name,logo,link}`,
      ),
    );
  }
}
