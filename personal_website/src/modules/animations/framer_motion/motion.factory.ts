import { HierarchicalAnimator } from '@/@types/animations/motion/hover/mount';
import { ANIMATION_FRAMER_MOTION_MODULE } from './motion.module';
import { ANIMATION_FRAMER_MOTION_REGISTRY } from './motion.registry';
import { Animator } from '@/@types/animations/motion/animator';

export const ANIMATION_FRAMER_MOTION_FACTORY = {
  EMERGE: {
    UP: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.EMERGE.UP,
      ),
    DOWN: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.EMERGE.DOWN,
      ),
    LEFT: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<Animator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.EMERGE.LEFT,
      ),
  },

  HOVER: {
    MOUNT: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get<HierarchicalAnimator>(
        ANIMATION_FRAMER_MOTION_REGISTRY.HOVER.MOUNT,
      ),
  },
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
