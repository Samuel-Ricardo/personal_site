import { inject, injectable } from 'inversify';
import { ICompanyService } from './service.interface';
import { FindAllCompanyUseCase } from '../use_case/find/all.use_case';
import { FindOneCompanyUseCase } from '../use_case/find/one.use_case';
import { IFindOneComapanyDTO } from '../DTO/find/one.dto';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class CompanyService implements ICompanyService {
  constructor(
    @inject(MODULE.COMPANY.USE_CASE.FIND.ALL)
    private readonly findAllCompanyUseCase: FindAllCompanyUseCase,
    @inject(MODULE.COMPANY.USE_CASE.FIND.ONE)
    private readonly findOneCompanyUseCase: FindOneCompanyUseCase,
  ) {}
  async findAll() {
    return await this.findAllCompanyUseCase.execute();
  }
  async findOne(DTO: IFindOneComapanyDTO) {
    return await this.findOneCompanyUseCase.execute(DTO);
  }
}
