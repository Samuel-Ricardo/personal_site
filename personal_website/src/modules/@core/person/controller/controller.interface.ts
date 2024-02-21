import { IFindAllPersonDTO } from '../DTO/gateway/find/all.dto';
import { IFindOnePersonDTO } from '../DTO/gateway/find/one.dto';
import { Person } from '../entity/person.entity';

export interface IPersonController {
  findAllAsync(DTO?: IFindAllPersonDTO): Promise<Person[]>;
  findOneAsync(DTO: IFindOnePersonDTO): Promise<Person | undefined>;
}
