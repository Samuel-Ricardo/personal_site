import { CONFIG } from './configs/all.config';

export const CONFIG_REGISTRY = {
  ...CONFIG,
  ALL: Symbol.for('MODULES::CONFIG::ALL'),
  ENV: Symbol.for('MODULES::CONFIG::ENV'),
};
