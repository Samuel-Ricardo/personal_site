import { Container } from 'inversify';
import { ANIMATION_FRAMER_MOTION_REGISTRY } from './motion.registry';
import { DRAW_ANIMATION } from './impl/svg/drawn.animation';

export const ANIMATION_FRAMER_MOTION_MODULE = new Container({
  defaultScope: 'Singleton',
});

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.SVG.DRAW,
).toConstantValue(DRAW_ANIMATION);
