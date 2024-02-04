import { HierarchicalAnimator } from '@/@types/animations/motion/hover/mount';

export const MOUNT_ON_HOVER: HierarchicalAnimator = props => {
  return {
    parent: {
      whileHover: 'parent-hover',
      whileTap: {
        scale: 0.9,
      },
      variants: {
        'parent-hover': {
          scale: 1.1,
        },
      },
    },
    children: {
      initial: {
        display: 'none',
        filter: 'blur(8px)',
        opacity: 0,
      },
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeInOut',
      },
      variants: {
        'parent-hover': {
          display: 'flex',
          filter: 'blur(0px)',
          opacity: 1,
        },
      },
    },
  };
};
