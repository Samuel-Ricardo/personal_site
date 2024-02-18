import { OCCUPATION_MODULE } from './occupation.module';
import { OCCUPATION_REGISTRY } from './occupation.registry';
import { FindAllOccupationsUseCase } from './use_case/find/all.use_case';

export const OCCUPATION_FACTORY = {
  USE_CASE: {
    FIND: {
      ALL: () =>
        OCCUPATION_MODULE.get<FindAllOccupationsUseCase>(
          OCCUPATION_REGISTRY.USE_CASE.FIND.ALL,
        ),
    },
  },
};
