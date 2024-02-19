import { GATEWAY_MODULE } from '@/modules/gateway/gateway.module';
import { Container } from 'inversify';
import { PERSON_REGISTRY } from './person.registry';
import { FindAllPersonUseCase } from './use_case/find/all.use_case';
import { FindOnePersonUseCase } from './use_case/find/one.use_case';
import { PersonService } from './service/person.service';
import { PersonController } from './controller/person.controller';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const PERSON_MODULE = Container.merge(MODULE, GATEWAY_MODULE);

PERSON_MODULE.bind(PERSON_REGISTRY.USE_CASE.FIND.ALL).to(FindAllPersonUseCase);
PERSON_MODULE.bind(PERSON_REGISTRY.USE_CASE.FIND.ONE).to(FindOnePersonUseCase);
PERSON_MODULE.bind(PERSON_REGISTRY.SERVICE.MAIN).to(PersonService);
PERSON_MODULE.bind(PERSON_REGISTRY.CONTROLLER.MAIN).to(PersonController);
PERSON_MODULE.bind(PERSON_REGISTRY.MAIN).to(PersonController);
