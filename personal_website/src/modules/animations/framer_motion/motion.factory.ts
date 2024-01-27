import { ANIMATION_FRAMER_MOTION_MODULE } from './motion.module';
import { ANIMATION_FRAMER_MOTION_REGISTRY } from './motion.registry';

export const ANIMATION_FRAMER_MOTION_FACTORY = {
  SVG: {
    DRAW: () =>
      ANIMATION_FRAMER_MOTION_MODULE.get(
        ANIMATION_FRAMER_MOTION_REGISTRY.SVG.DRAW,
      ),
  },
};
