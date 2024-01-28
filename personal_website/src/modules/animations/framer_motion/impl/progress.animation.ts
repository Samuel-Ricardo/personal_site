import { Animator } from '@/@types/animations/motion/animator';

export const PROGRESS_ANIMATION: Animator = props => ({
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: '100%' },
  ...props,
  transition: {
    duration: 2,
    ease: 'easeInOut',
    ...props?.transition,
  },
});
