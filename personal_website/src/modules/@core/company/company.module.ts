import { Container } from 'inversify';
import { COMPANY_REGISTRY } from './company.registry';
import { FindAllCompanyUseCase } from './use_case/find/all.use_case';
import { FindOneCompanyUseCase } from './use_case/find/one.use_case';
import { CompanyService } from './service/company.service';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const COMPANY_MODULE = MODULE;

COMPANY_MODULE.bind(COMPANY_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllCompanyUseCase,
);
COMPANY_MODULE.bind(COMPANY_REGISTRY.USE_CASE.FIND.ONE).to(
  FindOneCompanyUseCase,
);

COMPANY_MODULE.bind(COMPANY_REGISTRY.SERVICE.MAIN).to(CompanyService);
