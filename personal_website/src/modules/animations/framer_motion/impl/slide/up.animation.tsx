import { Animator } from '@/@types/animations/motion/animator';

export const SLIDE_UP_ANIMATION: Animator = props => {
  return {
    initial: 'inactive',
    animate: 'inactive',
    whileInView: 'active',
    ...props,
    transition: {
      duration: 1.5,
      ...props?.transition,
    },
    variants: {
      active: {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
      },
      inactive: {
        y: 100,
        opacity: 0,
        filter: 'blur(6px)',
      },
    },
  };
};
