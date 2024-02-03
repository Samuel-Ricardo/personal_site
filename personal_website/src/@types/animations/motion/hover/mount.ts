import { MotionProps } from 'framer-motion';

export type HierarchicalAnimator = (props?: {
  parent?: MotionProps;
  children?: MotionProps;
}) => { parent: MotionProps; children: MotionProps };
