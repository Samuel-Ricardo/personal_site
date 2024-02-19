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
  findAll(DTO: IFindAllPersonDTO): Promise<Person[]> {
    throw new Error('Method not implemented.');
  }
  findOne(DTO: IFindOnePersonDTO): Promise<Person> {
    throw new Error('Method not implemented.');
  }
}
