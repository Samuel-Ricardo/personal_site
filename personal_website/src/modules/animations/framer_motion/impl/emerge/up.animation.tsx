import { Animator } from '@/@types/animations/motion/animator';

export const EMERGE_UP_ANIMATION: Animator = props => ({
  ...props,
  initial: 'inactive',
  transition: {
    ease: 'easeInOut',
    ...props?.transition,
  },
  variants: {
    inactive: {
      translateY: '50%',
      opacity: 0,
    },
    active: {
      translateY: 0,
      opacity: 1,
    },
  },
});
