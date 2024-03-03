import { Animator } from '@/@types/animations/motion/animator';

export const EMERGE_LEFT_ANIMATION: Animator = props => ({
  ...props,
  initial: 'inactive',
  transition: {
    ease: 'easeInOut',
    ...props?.transition,
  },
  variants: {
    inactive: {
      translateX: '50%',
      opacity: 0,
    },
    active: {
      translateX: 0,
      opacity: 1,
    },
  },
});
