import { ICompanyGateway } from '@/modules/@core/company/gateway/company.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Company } from '@/modules/@core/company/entity/commpany.entity';
import { IFindOnePersonDTO } from '@/modules/@core/person/DTO/gateway/find/one.dto';

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

  findOne(DTO: IFindOnePersonDTO): Promise<Company> {
    throw new Error('Method not implemented.');
  }
}
