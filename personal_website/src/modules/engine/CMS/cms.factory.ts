import { SanityClient } from 'next-sanity';
import { CMS_ENGINE_MODULE } from './cms.module';
import { CMS_ENGINE_REGISTRY } from './cms.registry';
import { ImageUrlBuilder } from 'sanity';

export const CMS_ENGINE_FACTORY = {
  SANITY: () => CMS_ENGINE_MODULE.get<SanityClient>(CMS_ENGINE_REGISTRY.SANITY),
  BUILDER: {
    IMAGE: () =>
      CMS_ENGINE_MODULE.get<ImageUrlBuilder>(CMS_ENGINE_REGISTRY.BUILDER.IMAGE),
  },
};
