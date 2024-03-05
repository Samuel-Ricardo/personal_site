import { Animator } from '@/@types/animations/motion/animator';

export const SLIDE_OUT_ANIMATION: Animator = props => {
  return {
    initial: 'inactive',
    animate: 'active',
    exit: 'inactive',
    transition: {
      duration: 1.5,
      ...props?.transition,
    },
    ...props,
    variants: {
      active: {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
      },
      inactive: {
        x: 100,
        opacity: 0,
        filter: 'blur(5px)',
      },
    },
  };
};
