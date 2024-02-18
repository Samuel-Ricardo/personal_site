import { GATEWAY_MODULE } from '@/modules/gateway/gateway.module';
import { Container } from 'inversify';
import { OCCUPATION_REGISTRY } from './occupation.registry';
import { FindAllOccupationsUseCase } from './use_case/find/all.use_case';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const OCCUPATION_MODULE = Container.merge(MODULE, GATEWAY_MODULE);

OCCUPATION_MODULE.bind(OCCUPATION_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllOccupationsUseCase,
);