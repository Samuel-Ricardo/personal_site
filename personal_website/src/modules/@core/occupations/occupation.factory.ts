import { OccupationController } from './controller/occupation.controller';
import { StaticOccupationController } from './controller/static/occupation.controller';
import { OCCUPATION_MODULE } from './occupation.module';
import { OCCUPATION_REGISTRY } from './occupation.registry';
import { OccupationService } from './service/occupation.service';
import { StaticOccupationService } from './service/static/occupation.service';
import { FindAllOccupationsUseCase } from './use_case/find/all.use_case';
import { FindAllStaticOccupationsUseCase } from './use_case/find/static/all.use_case';

export const OCCUPATION_FACTORY = {
  MAIN: () =>
    OCCUPATION_MODULE.get<OccupationController>(OCCUPATION_REGISTRY.MAIN),
  STATIC: () =>
    OCCUPATION_MODULE.get<StaticOccupationController>(
      OCCUPATION_REGISTRY.STATIC,
    ),
  CONROLELR: {
    MAIN: () =>
      OCCUPATION_MODULE.get<OccupationController>(
        OCCUPATION_REGISTRY.CONTROLLER.MAIN,
      ),
    STATIC: () =>
      OCCUPATION_MODULE.get<StaticOccupationController>(
        OCCUPATION_REGISTRY.CONTROLLER.STATIC,
      ),
  },
  SERVICE: {
    MAIN: () =>
      OCCUPATION_MODULE.get<OccupationService>(
        OCCUPATION_REGISTRY.SERVICE.MAIN,
      ),
    STATIC: () =>
      OCCUPATION_MODULE.get<StaticOccupationService>(
        OCCUPATION_REGISTRY.SERVICE.STATIC,
      ),
  },
  USE_CASE: {
    STATIC: {
      FIND: {
        ALL: () =>
          OCCUPATION_MODULE.get<FindAllStaticOccupationsUseCase>(
            OCCUPATION_REGISTRY.USE_CASE.STATIC.FIND.ALL,
          ),
      },
    },
    FIND: {
      ALL: () =>
        OCCUPATION_MODULE.get<FindAllOccupationsUseCase>(
          OCCUPATION_REGISTRY.USE_CASE.FIND.ALL,
        ),
    },
  },
};
