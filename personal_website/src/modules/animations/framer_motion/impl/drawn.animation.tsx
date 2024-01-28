import { Animator } from '@/@types/animations/motion/animator';

export const DRAW_ANIMATION: Animator = props => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 3 },
  variants: {
    erase: { pathLength: 0 },
    draw: { pathLength: 1 },
  },
  ...props,
});
