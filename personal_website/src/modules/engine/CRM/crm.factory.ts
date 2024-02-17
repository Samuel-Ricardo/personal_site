import { CRM_ENGINE_MODULE } from './crm.module';
import { CRM_ENGINE_REGISTRY } from './crm.registry';
import { SANITY } from './sanity/sanity.engine';

export const CRM_ENGINE_FACTORY = {
  SANITY: CRM_ENGINE_MODULE.get<typeof SANITY>(CRM_ENGINE_REGISTRY.SANITY),
};
