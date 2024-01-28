import { Animator } from '@/@types/animations/motion/animator';

export const SLIDE_IN_ANIMATION: Animator = props => ({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 2 },
  ...props,
});
