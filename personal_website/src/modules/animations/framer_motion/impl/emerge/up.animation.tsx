import { Animator } from '@/@types/animations/motion/animator';

export const EMERGE_UP_ANIMATION: Animator = props => ({
  initial: { opacity: 0, translateY: 0 },
  animate: { opacity: 1, translateY: '100%' },
  ...props,
  transition: {
    duration: 3,
    ease: 'linear',
    ...props?.transition,
  },
});
