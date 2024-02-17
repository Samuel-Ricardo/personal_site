import { Container } from 'inversify';
import { FONTS_MODULE } from './fonts/fonts.module';
import { ANIMATION_MODULE } from './animations/animation.module';
import { ENGINE_MODULE } from './engine/engine.module';

const MODULES = new Container();

export const APP_MODULE = Container.merge(
  MODULES,
  FONTS_MODULE,
  ANIMATION_MODULE,
  ENGINE_MODULE,
);
