import { Container } from 'inversify';
import { SANITY_CMS_GATEWAY_REGISTRY } from './sanity.registry';
import { SanityOccupationGateway } from './occupation/occupation.gateway';

export const SANITY_CMS_GATEWAY_MODULE = new Container({
  defaultScope: 'Singleton',
});

SANITY_CMS_GATEWAY_MODULE.bind(SANITY_CMS_GATEWAY_REGISTRY.OCCUPATION).to(
  SanityOccupationGateway,
);
