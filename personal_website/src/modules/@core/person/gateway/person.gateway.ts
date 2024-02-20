import { Person } from '../entity/person.entity';
import { IFindAllPersonDTO } from '../DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '../DTO/gateway/find/one.dto';

export interface IPersonGateway {
  findAll(DTO?: IFindAllPersonDTO): Promise<Person[]>;
  findOne(DTO: IFindOnePersonDTO): Promise<Person | undefined>;
}
