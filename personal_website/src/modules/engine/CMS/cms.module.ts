import { Container } from 'inversify';
import { CMS_ENGINE_REGISTRY } from './cms.registry';
import { SANITY } from './sanity/sanity.engine';
import { SANITY_IMAGE_BUILDER } from './sanity/img.engine';

export const CMS_ENGINE_MODULE = new Container({ defaultScope: 'Singleton' });

CMS_ENGINE_MODULE.bind(CMS_ENGINE_REGISTRY.SANITY).toConstantValue(SANITY);
CMS_ENGINE_MODULE.bind(CMS_ENGINE_REGISTRY.BUILDER.IMAGE)
  .toDynamicValue(SANITY_IMAGE_BUILDER)
  .inSingletonScope();
