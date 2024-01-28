import { Container } from 'inversify';
import { ANIMATION_FRAMER_MOTION_REGISTRY } from './motion.registry';
import { DRAW_ANIMATION } from './impl/svg/drawn.animation';
import { SLIDE_IN_ANIMATION } from './impl/slideIn.animation';
import { PROGRESS_ANIMATION } from './impl/progress.animation';

export const ANIMATION_FRAMER_MOTION_MODULE = new Container({
  defaultScope: 'Singleton',
});

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.PROGRESS,
).toConstantValue(PROGRESS_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.SVG.DRAW,
).toConstantValue(DRAW_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.SLIDE.IN,
).toConstantValue(SLIDE_IN_ANIMATION);
