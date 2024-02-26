import { PROJECT_MODULE } from './project.module';
import { PROJECT_REGISTRY } from './project.registry';
import { IProjectService } from './service/service.interface';
import { FindAllProjectsUseCase } from './use_case/find/all.use_case';
import { FindMainProjectsUseCase } from './use_case/find/main.use_case';

export const PROJECT_FACTORY = {
  SERVICE: {
    MAIN: () =>
      PROJECT_MODULE.get<IProjectService>(PROJECT_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        PROJECT_MODULE.get<FindAllProjectsUseCase>(
          PROJECT_REGISTRY.USE_CASE.FIND.ALL,
        ),
      MAIN: () =>
        PROJECT_MODULE.get<FindMainProjectsUseCase>(
          PROJECT_REGISTRY.USE_CASE.FIND.MAIN,
        ),
    },
  },
};
