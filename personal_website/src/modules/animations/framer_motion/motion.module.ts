import { Container } from 'inversify';
import { ANIMATION_FRAMER_MOTION_REGISTRY } from './motion.registry';
import { DRAW_ANIMATION } from './impl/svg/drawn.animation';
import { SLIDE_IN_ANIMATION } from './impl/slideIn.animation';
import { PROGRESS_ANIMATION } from './impl/progress.animation';
import { INFINITY_SLIDE_ANIMATION } from './impl/slide/infinity.animation';
import { MOUNT_ON_HOVER } from './impl/hover/mount.animation';
import { EMERGE_UP_ANIMATION } from './impl/emerge/up.animation';
import { EMERGE_LEFT_ANIMATION } from './impl/emerge/left.animation';

export const ANIMATION_FRAMER_MOTION_MODULE = new Container({
  defaultScope: 'Singleton',
});

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.HOVER.MOUNT,
).toConstantValue(MOUNT_ON_HOVER);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.INFINITY.SLIDE,
).toConstantValue(INFINITY_SLIDE_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.PROGRESS,
).toConstantValue(PROGRESS_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.SVG.DRAW,
).toConstantValue(DRAW_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.SLIDE.IN,
).toConstantValue(SLIDE_IN_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.EMERGE.UP,
).toConstantValue(EMERGE_UP_ANIMATION);

ANIMATION_FRAMER_MOTION_MODULE.bind(
  ANIMATION_FRAMER_MOTION_REGISTRY.EMERGE.LEFT,
).toConstantValue(EMERGE_LEFT_ANIMATION);
