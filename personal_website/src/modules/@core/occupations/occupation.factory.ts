import { OCCUPATION_MODULE } from './occupation.module';
import { OCCUPATION_REGISTRY } from './occupation.registry';
import { OccupationService } from './service/occupation.service';
import { FindAllOccupationsUseCase } from './use_case/find/all.use_case';

export const OCCUPATION_FACTORY = {
  SERVICE: {
    MAIN: () =>
      OCCUPATION_MODULE.get<OccupationService>(
        OCCUPATION_REGISTRY.SERVICE.MAIN,
      ),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        OCCUPATION_MODULE.get<FindAllOccupationsUseCase>(
          OCCUPATION_REGISTRY.USE_CASE.FIND.ALL,
        ),
    },
  },
};
