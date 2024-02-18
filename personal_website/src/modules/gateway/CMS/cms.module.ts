import { Container } from 'inversify';
import { SANITY_CMS_GATEWAY_MODULE } from './sanity/sanity.module';

const MODULE = new Container({ defaultScope: 'Singleton' });

export const CMS_GATEWAY_MODULE = Container.merge(
  MODULE,
  SANITY_CMS_GATEWAY_MODULE,
);
