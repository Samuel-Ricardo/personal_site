import { SANITY_CMS_GATEWAY_FACTORY } from './sanity/sanity.factory';
import { STATIC_CMS_GATEWAY_FACTORY } from './static/static.factory';

export const CMS_GATEWAY_FACTORY = {
  SANITY: SANITY_CMS_GATEWAY_FACTORY,
  STATIC: STATIC_CMS_GATEWAY_FACTORY,
};
