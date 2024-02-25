import { TechService } from './service/tech.service';
import { TECH_MODULE } from './tech.module';
import { TECH_REGISTRY } from './tech.registry';
import { FindAllTechsUseCase } from './use_case/find/all.use_case';

export const TECH_FACTORY = {
  SERVICE: {
    MAIN: () => TECH_MODULE.get<TechService>(TECH_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        TECH_MODULE.get<FindAllTechsUseCase>(TECH_REGISTRY.USE_CASE.FIND.ALL),
    },
  },
};
