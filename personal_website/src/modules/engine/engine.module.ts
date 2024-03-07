import { Container } from 'inversify';
import { CMS_ENGINE_MODULE } from './CMS/cms.module';
import { ENGINE_MAILER_MODULE } from './mailer/mailer.module';

const MODULE = new Container({ defaultScope: 'Singleton' });

export const ENGINE_MODULE = Container.merge(
  MODULE,
  CMS_ENGINE_MODULE,
  ENGINE_MAILER_MODULE,
);
