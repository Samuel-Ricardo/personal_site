import { Container } from 'inversify';
import { STATIC_CMS_GATEWAY_REGISTRY } from './static.registry';
import { StaticPersonGateway } from './person/person.gateway';
import { StaticOccupationGateway } from './occupation/occupation.gateway';
import { StaticAssemblerGateway } from './assembler/assembler.dto';

export const STATIC_CMS_GATEWAY_MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

STATIC_CMS_GATEWAY_MODULE.bind(STATIC_CMS_GATEWAY_REGISTRY.PERSON).to(
  StaticPersonGateway,
);
STATIC_CMS_GATEWAY_MODULE.bind(STATIC_CMS_GATEWAY_REGISTRY.OCCUPATION).to(
  StaticOccupationGateway,
);
STATIC_CMS_GATEWAY_MODULE.bind(STATIC_CMS_GATEWAY_REGISTRY.ASSEMBLER).to(
  StaticAssemblerGateway,
);
