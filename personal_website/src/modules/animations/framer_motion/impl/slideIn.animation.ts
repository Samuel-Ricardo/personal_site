import { Animator } from '@/@types/animations/motion/animator';

export const SLIDE_IN_ANIMATION: Animator = props => ({
  ...props,
  initial: { x: -100, opacity: 0, filter: 'blur(5px)' },
  animate: { x: 0, opacity: 1, filter: 'blur(0px)' },
  transition: { duration: 1.5, ...props?.transition },
});
