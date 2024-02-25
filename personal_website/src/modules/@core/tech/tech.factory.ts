import { TechController } from './controller/tech.controller';
import { TechService } from './service/tech.service';
import { ITechModule } from './tech.interface';
import { TECH_MODULE } from './tech.module';
import { TECH_REGISTRY } from './tech.registry';
import { FindAllTechsUseCase } from './use_case/find/all.use_case';
import { FindTechByContextUseCase } from './use_case/find/by/context.use_case';

export const TECH_FACTORY = {
  MAIN: () => TECH_MODULE.get<ITechModule>(TECH_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () => TECH_MODULE.get<TechController>(TECH_REGISTRY.CONTROLLER.MAIN),
  },
  SERVICE: {
    MAIN: () => TECH_MODULE.get<TechService>(TECH_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        TECH_MODULE.get<FindAllTechsUseCase>(TECH_REGISTRY.USE_CASE.FIND.ALL),
      BY: {
        CONTEXT: () =>
          TECH_MODULE.get<FindTechByContextUseCase>(
            TECH_REGISTRY.USE_CASE.FIND.BY.CONTEXT,
          ),
      },
    },
  },
};
