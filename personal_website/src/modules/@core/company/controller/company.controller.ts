import { inject, injectable } from 'inversify';
import { type ICompanyService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { ICompanyModule } from '../company.interface';
import { IFindOneComapanyDTO } from '../DTO/find/one.dto';
import { Company } from '../entity/commpany.entity';

@injectable()
export class CompanyController implements ICompanyModule {
  constructor(
    @inject(MODULE.COMPANY.SERVICE.MAIN)
    protected service: ICompanyService,
  ) {}

  async findAll(): Promise<Promise<Company>[]> {
    return await this.service.findAll();
  }

  async findOne(DTO: IFindOneComapanyDTO): Promise<Company> {
    return await this.service.findOne(DTO);
  }
}
