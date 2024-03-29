import { PersonController } from './controller/person.controller';
import { StaticPersonController } from './controller/static/person.controller';
import { PERSON_MODULE } from './person.module';
import { PERSON_REGISTRY } from './person.registry';
import { PersonService } from './service/person.service';
import { StaticPersonService } from './service/static/person.service';
import { FindAllPersonUseCase } from './use_case/find/all.use_case';
import { FindOnePersonUseCase } from './use_case/find/one.use_case';
import { FindAllStaticPersonUseCase } from './use_case/static/find/all.use_case';
import { FindOneStaticPersonUseCase } from './use_case/static/find/one.use_case';

export const PERSON_FACTORY = {
  MAIN: () => PERSON_MODULE.get<PersonController>(PERSON_REGISTRY.MAIN),
  STATIC: () =>
    PERSON_MODULE.get<StaticPersonController>(PERSON_REGISTRY.STATIC),
  CONTROLLER: {
    MAIN: () =>
      PERSON_MODULE.get<PersonController>(PERSON_REGISTRY.CONTROLLER.MAIN),
    STATIC: () =>
      PERSON_MODULE.get<StaticPersonController>(
        PERSON_REGISTRY.CONTROLLER.STATIC,
      ),
  },
  SERVICE: {
    MAIN: () => PERSON_MODULE.get<PersonService>(PERSON_REGISTRY.SERVICE.MAIN),
    STATIC: () =>
      PERSON_MODULE.get<StaticPersonService>(PERSON_REGISTRY.SERVICE.STATIC),
  },
  USE_CASE: {
    STATIC: {
      FIND: {
        ALL: () =>
          PERSON_MODULE.get<FindAllStaticPersonUseCase>(
            PERSON_REGISTRY.USE_CASE.STATIC.FIND.ALL,
          ),
        ONE: () =>
          PERSON_MODULE.get<FindOneStaticPersonUseCase>(
            PERSON_REGISTRY.USE_CASE.STATIC.FIND.ONE,
          ),
      },
    },
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
