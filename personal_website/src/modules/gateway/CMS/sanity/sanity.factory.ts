import { IOccupationGateway } from '@/modules/@core/occupations/gateway/occupation.gateway';
import { SANITY_CMS_GATEWAY_MODULE } from './sanity.module';
import { SANITY_CMS_GATEWAY_REGISTRY } from './sanity.registry';
import { IAssemblerGateway } from '@/modules/@core/assembler/gateway/assembler.gateway';
import { IPersonGateway } from '@/modules/@core/person/gateway/person.gateway';

export const SANITY_CMS_GATEWAY_FACTORY = {
  PERSON: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IPersonGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.PERSON,
    ),
  OCCUPATION: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IOccupationGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.OCCUPATION,
    ),
  ASSEMBELER: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IAssemblerGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.ASSEMBLER,
    ),
};
