import { MotionProps } from 'framer-motion';

export const DRAW_ANIMATION = (props?: MotionProps): MotionProps => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  variants: {
    erase: { pathLength: 0 },
    draw: { pathLength: 1 },
  },
  ...props,
});
