import { ANIMATION_FRAMER_MOTION_MODULE } from './motion.module';
import { ANIMATION_FRAMER_MOTION_REGISTRY } from './motion.registry';
import { Animator } from '@/@types/animations/motion/animator';

export const ANIMATION_FRAMER_MOTION_FACTORY = {
  INFINITY: {
    SLIDE: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.INFINITY.SLIDE,
      ),
  },
  PROGRESS: () =>
    ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
      ANIMATION_FRAMER_MOTION_REGISTRY.PROGRESS,
    ),
  SLIDE: {
    IN: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.SLIDE.IN,
      ),
  },
  SVG: {
    DRAW: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.SVG.DRAW,
      ),
  },
};
