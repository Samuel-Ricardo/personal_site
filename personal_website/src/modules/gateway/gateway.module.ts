import 'reflect-metadata';

import { Container } from 'inversify';
import lazy from 'inversify-inject-decorators';
import { CMS_GATEWAY_MODULE } from './CMS/cms.module';
import { ENGINE_MODULE } from '../engine/engine.module';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const GATEWAY_MODULE = Container.merge(
  MODULE,
  CMS_GATEWAY_MODULE,
  ENGINE_MODULE,
);

export const { lazyInject: injectGateway } = lazy(GATEWAY_MODULE);
