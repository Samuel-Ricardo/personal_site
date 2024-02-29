import { IFindOneComapanyDTO } from '../DTO/find/one.dto';
import { Company } from '../entity/commpany.entity';

export interface ICompanyService {
  findAll(): Promise<Company[]>;
  findOne(DTO: IFindOneComapanyDTO): Promise<Company>;
}
