import { Container } from 'inversify';
import { CONFIG_REGISTRY } from './config.registry';
import { CONFIG } from './configs/all.config';

import lazy from 'inversify-inject-decorators';

export const CONFIG_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

CONFIG_MODULE.bind(CONFIG_REGISTRY.ALL).toConstantValue(CONFIG);
CONFIG_MODULE.bind(CONFIG_REGISTRY.ENV).toConstantValue(CONFIG.ENV);

export const { lazyInject: injectModule } = lazy(CONFIG_MODULE);
