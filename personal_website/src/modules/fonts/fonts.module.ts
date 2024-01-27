import { Container } from 'inversify';
import { FONTS_REGISTRY } from './fonts.registry';
import {
  FRAUNCES,
  INCONSOLATA,
  LIBRE_BASKERVILLE,
  NEUTON,
  SPACE_MONO,
} from './fonts';

export const FONTS_MODULE = new Container({ defaultScope: 'Singleton' });

FONTS_MODULE.bind(FONTS_REGISTRY.MONO.SPACE_MONO).toConstantValue(SPACE_MONO);
FONTS_MODULE.bind(FONTS_REGISTRY.MONO.INCONSOLATA).toConstantValue(INCONSOLATA);
FONTS_MODULE.bind(FONTS_REGISTRY.CLASSIC.FRAUNCES).toConstantValue(FRAUNCES);
FONTS_MODULE.bind(FONTS_REGISTRY.CLASSIC.LIBRE_BASKERVILLE).toConstantValue(
  LIBRE_BASKERVILLE,
);
FONTS_MODULE.bind(FONTS_REGISTRY.CLASSIC.NEUTON).toConstantValue(NEUTON);
