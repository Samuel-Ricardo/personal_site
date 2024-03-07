import { CONFIG } from './configs/global.config';

export const CONFIG_REGISTRY = {
  ...CONFIG,
  GLOBAL: Symbol.for('MODULES::CONFIG::GLOBAL'),
  ENV: Symbol.for('MODULES::CONFIG::ENV'),
};
