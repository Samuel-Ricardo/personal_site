import { IOccupationGateway } from '@/modules/@core/occupations/gateway/occupation.gateway';
import { SANITY_CMS_GATEWAY_MODULE } from './sanity.module';
import { SANITY_CMS_GATEWAY_REGISTRY } from './sanity.registry';

export const SANITY_CMS_GATEWAY_FACTORY = {
  OCCUPATION: () =>
    SANITY_CMS_GATEWAY_MODULE.get<IOccupationGateway>(
      SANITY_CMS_GATEWAY_REGISTRY.OCCUPATION,
    ),
};
