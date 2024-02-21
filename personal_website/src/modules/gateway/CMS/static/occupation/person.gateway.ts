import { IFindAllPersonDTO } from '@/modules/@core/person/DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '@/modules/@core/person/DTO/gateway/find/one.dto';
import { Person } from '@/modules/@core/person/entity/person.entity';
import { IPersonGateway } from '@/modules/@core/person/gateway/person.gateway';
import { injectable } from 'inversify';

@injectable()
export class StaticPersonGateway implements IPersonGateway {
  findAll(DTO?: IFindAllPersonDTO | undefined): Promise<Person[]> {
    throw new Error('Method not implemented.');
  }
  findOne(DTO: IFindOnePersonDTO): Promise<Person | undefined> {
    throw new Error('Method not implemented.');
  }
}
