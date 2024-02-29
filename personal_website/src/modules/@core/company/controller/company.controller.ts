import { inject, injectable } from 'inversify';
import { type ICompanyService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class CompanyController implements ICompanyModule {
  constructor(
    @inject(MODULE.COMPANY.SERVICE.MAIN)
    protected service: ICompanyService,
  ) {}
}
