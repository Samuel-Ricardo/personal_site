import { IFindOnePersonDTO } from '../../person/DTO/gateway/find/one.dto';
import { Company } from '../entity/commpany.entity';

export interface ICompanyGateway {
  findAll(): Promise<Company>[];
  findOne(DTO: IFindOnePersonDTO): Promise<Company>;
}
