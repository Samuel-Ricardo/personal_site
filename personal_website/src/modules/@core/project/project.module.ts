import { Container } from 'inversify';
import { PROJECT_REGISTRY } from './project.registry';
import { FindAllProjectsUseCase } from './use_case/find/all.use_case';
import { FindMainProjectsUseCase } from './use_case/find/main.use_case';
import { ProjectService } from './service/project.service';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const PROJECT_MODULE = MODULE;

PROJECT_MODULE.bind(PROJECT_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllProjectsUseCase,
);
PROJECT_MODULE.bind(PROJECT_REGISTRY.USE_CASE.FIND.MAIN).to(
  FindMainProjectsUseCase,
);

PROJECT_MODULE.bind(PROJECT_REGISTRY.SERVICE.MAIN).to(ProjectService);
