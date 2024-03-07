import { CONFIG_MODULE } from './config.module';
import { CONFIG_REGISTRY } from './config.registry';
import { CONFIG } from './configs/global.config';

export const CONFIG_FACTORY = {
  GLOBAL: CONFIG_MODULE.get<typeof CONFIG>(CONFIG_REGISTRY.GLOBAL),
  ENV: CONFIG_MODULE.get<typeof CONFIG.ENV>(CONFIG_REGISTRY.ENV),
};
