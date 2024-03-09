import { Animator } from '@/@types/animations/motion/animator';

export const GROWTH_DOWN_ANIMATION: Animator = p => {
  return {
    initial: 'inactive',
    ...p,

    variants: {
      active: {
        height: 'auto',
        opacity: 1,
        display: 'flex',
      },
      inactive: {
        height: 0,
        opacity: 0,
        display: 'none',
      },
    },
  };
};
