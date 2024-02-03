import { HierarchicalAnimator } from '@/@types/animations/motion/hover/mount';

export const MOUNT_ON_HOVER: HierarchicalAnimator = props => {
  return {
    parent: {
      whileHover: 'parent-hover',
      whileTap: {
        scale: 0.9,
      },
    },
    children: {
      initial: {
        display: 'none',
        filter: 'blur(8px)',
      },
      variants: {
        'parent-hover': {
          display: 'flex',
          width: 'fit-content',
          height: 'fit-content',
          filter: 'blur(0px)',
        },
      },
    },
  };
};
