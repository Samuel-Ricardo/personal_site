import { Container } from 'inversify';
import { CRM_ENGINE_REGISTRY } from './crm.registry';
import { SANITY } from './sanity/sanity.engine';

export const CRM_ENGINE_MODULE = new Container({ defaultScope: 'Singleton' });

CRM_ENGINE_MODULE.bind(CRM_ENGINE_REGISTRY.SANITY).toConstantValue(SANITY);
