import { GATEWAY_MODULE } from '@/modules/gateway/gateway.module';
import { Container } from 'inversify';
import { OCCUPATION_REGISTRY } from './occupation.registry';
import { FindAllOccupationsUseCase } from './use_case/find/all.use_case';
import { OccupationService } from './service/occupation.service';
import { OccupationController } from './controller/occupation.controller';
import { FindAllStaticOccupationsUseCase } from './use_case/find/static/all.use_case';
import { StaticOccupationService } from './service/static/occupation.service';
import { StaticOccupationController } from './controller/static/occupation.controller';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

//export const OCCUPATION_MODULE = Container.merge(MODULE, GATEWAY_MODULE);

export const OCCUPATION_MODULE = MODULE;

OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllOccupationsUseCase,
);

OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.USE_CASE.STATIC.FIND.ALL).to(
  FindAllStaticOccupationsUseCase,
);

OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.SERVICE.MAIN).to(OccupationService);
OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.SERVICE.STATIC).to(
  StaticOccupationService,
);

OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.CONTROLLER.MAIN).to(
  OccupationController,
);
OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.CONTROLLER.STATIC).to(
  StaticOccupationController,
);

OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.MAIN).to(OccupationController);
OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.STATIC).to(
  StaticOccupationController,
);
