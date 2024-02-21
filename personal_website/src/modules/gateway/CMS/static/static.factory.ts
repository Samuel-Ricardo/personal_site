import { StaticAssemblerGateway } from './assembler/assembler.dto';
import { StaticOccupationGateway } from './occupation/occupation.gateway';
import { StaticPersonGateway } from './person/person.gateway';
import { STATIC_CMS_GATEWAY_MODULE } from './static.module';
import { STATIC_CMS_GATEWAY_REGISTRY } from './static.registry';

export const STATIC_CMS_GATEWAY_FACTORY = {
  PERSON: () =>
    STATIC_CMS_GATEWAY_MODULE.get<StaticPersonGateway>(
      STATIC_CMS_GATEWAY_REGISTRY.PERSON,
    ),
  OCCUPATION: () =>
    STATIC_CMS_GATEWAY_MODULE.get<StaticOccupationGateway>(
      STATIC_CMS_GATEWAY_REGISTRY.OCCUPATION,
    ),
  ASSEMBLER: () =>
    STATIC_CMS_GATEWAY_MODULE.get<StaticAssemblerGateway>(
      STATIC_CMS_GATEWAY_REGISTRY.ASSEMBLER,
    ),
};
