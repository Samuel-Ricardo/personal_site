import { Container } from 'inversify';
import { FindAllTechsUseCase } from './use_case/find/all.use_case';
import { TECH_REGISTRY } from './tech.registry';
import { TechService } from './service/tech.service';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const TECH_MODULE = MODULE;

TECH_MODULE.bind(TECH_REGISTRY.USE_CASE.FIND.ALL).to(FindAllTechsUseCase);

TECH_MODULE.bind(TECH_REGISTRY.SERVICE.MAIN).to(TechService);
