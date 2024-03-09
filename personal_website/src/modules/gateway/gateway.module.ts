import 'reflect-metadata';

import { Container } from 'inversify';
import lazy from 'inversify-inject-decorators';
import { CMS_GATEWAY_MODULE } from './CMS/cms.module';
import { ENGINE_MODULE } from '../engine/engine.module';
import { GATEWAY_EMAIL_MODULE } from './mailer/email.module';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const GATEWAY_MODULE = Container.merge(
  MODULE,
  ENGINE_MODULE,
  CMS_GATEWAY_MODULE,
  GATEWAY_EMAIL_MODULE,
);

export const { lazyInject: injectGateway } = lazy(GATEWAY_MODULE);
