import { Animator } from '@/@types/animations/motion/animator';

export const INFINITY_SLIDE_ANIMATION: Animator = props => ({
  initial: { translateX: 0 },
  animate: { translateX: '-100%' },
  ...props,
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: 'linear',
    ...props?.transition,
  },
});
