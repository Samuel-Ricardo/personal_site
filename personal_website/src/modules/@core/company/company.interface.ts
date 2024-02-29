import { IFindOneComapanyDTO } from './DTO/find/one.dto';
import { Company } from './entity/commpany.entity';

export interface ICompanyModule {
  findAll(): Promise<Company[]>;
  findOne(DTO: IFindOneComapanyDTO): Promise<Company>;
}
