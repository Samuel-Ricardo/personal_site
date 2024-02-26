import { PROJECT_MODULE } from './project.module';
import { PROJECT_REGISTRY } from './project.registry';
import { FindAllProjectsUseCase } from './use_case/find/all.use_case';
import { FindMainProjectsUseCase } from './use_case/find/main.use_case';

export const PROJECT_FACTORY = {
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
