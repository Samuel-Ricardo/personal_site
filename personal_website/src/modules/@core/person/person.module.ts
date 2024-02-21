import { Container } from 'inversify';
import { PERSON_REGISTRY } from './person.registry';
import { FindAllPersonUseCase } from './use_case/find/all.use_case';
import { FindOnePersonUseCase } from './use_case/find/one.use_case';
import { PersonService } from './service/person.service';
import { PersonController } from './controller/person.controller';
import { FindOneStaticPersonUseCase } from './use_case/static/find/one.use_case';
import { FindAllStaticPersonUseCase } from './use_case/static/find/all.use_case';
import { StaticPersonService } from './service/static/person.service';
import { StaticPersonController } from './controller/static/person.controller';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

//export const PERSON_MODULE = Container.merge(MODULE, GATEWAY_MODULE);

export const PERSON_MODULE = MODULE;

PERSON_MODULE.bind(PERSON_REGISTRY.USE_CASE.FIND.ALL).to(FindAllPersonUseCase);
PERSON_MODULE.bind(PERSON_REGISTRY.USE_CASE.FIND.ONE).to(FindOnePersonUseCase);

PERSON_MODULE.bind(PERSON_REGISTRY.USE_CASE.STATIC.FIND.ALL).to(
  FindAllStaticPersonUseCase,
);
PERSON_MODULE.bind(PERSON_REGISTRY.USE_CASE.STATIC.FIND.ALL).to(
  FindOneStaticPersonUseCase,
);

PERSON_MODULE.bind(PERSON_REGISTRY.SERVICE.MAIN).to(PersonService);
PERSON_MODULE.bind(PERSON_REGISTRY.SERVICE.STATIC).to(StaticPersonService);

PERSON_MODULE.bind(PERSON_REGISTRY.CONTROLLER.MAIN).to(PersonController);
PERSON_MODULE.bind(PERSON_REGISTRY.CONTROLLER.STATIC).to(
  StaticPersonController,
);

PERSON_MODULE.bind(PERSON_REGISTRY.MAIN).to(PersonController);
PERSON_MODULE.bind(PERSON_REGISTRY.STATIC).to(StaticPersonController);
