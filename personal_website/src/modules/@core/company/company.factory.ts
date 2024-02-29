import { COMPANY_MODULE } from './company.module';
import { COMPANY_REGISTRY } from './company.registry';
import { ICompanyService } from './service/service.interface';
import { FindAllCompanyUseCase } from './use_case/find/all.use_case';
import { FindOneCompanyUseCase } from './use_case/find/one.use_case';

export const COMPANY_FACTORY = {
  SERVICE: {
    MAIN: () =>
      COMPANY_MODULE.get<ICompanyService>(COMPANY_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        COMPANY_MODULE.get<FindAllCompanyUseCase>(
          COMPANY_REGISTRY.USE_CASE.FIND.ALL,
        ),
      ONE: () =>
        COMPANY_MODULE.get<FindOneCompanyUseCase>(
          COMPANY_REGISTRY.USE_CASE.FIND.ONE,
        ),
    },
  },
};
