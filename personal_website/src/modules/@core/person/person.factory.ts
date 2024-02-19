import { PersonController } from './controller/person.controller';
import { PERSON_MODULE } from './person.module';
import { PERSON_REGISTRY } from './person.registry';
import { PersonService } from './service/person.service';
import { FindAllPersonUseCase } from './use_case/find/all.use_case';
import { FindOnePersonUseCase } from './use_case/find/one.use_case';

export const PERSON_FACTORY = {
  MAIN: () => PERSON_MODULE.get<PersonController>(PERSON_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      PERSON_MODULE.get<PersonController>(PERSON_REGISTRY.CONTROLLER.MAIN),
  },
  SERVICE: {
    MAIN: () => PERSON_MODULE.get<PersonService>(PERSON_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        PERSON_MODULE.get<FindAllPersonUseCase>(
          PERSON_REGISTRY.USE_CASE.FIND.ALL,
        ),
      ONE: () =>
        PERSON_MODULE.get<FindOnePersonUseCase>(
          PERSON_REGISTRY.USE_CASE.FIND.ONE,
        ),
    },
  },
};
