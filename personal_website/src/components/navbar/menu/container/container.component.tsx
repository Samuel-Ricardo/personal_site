import { MotionDiv } from '@/components/motion/div.component';

export const MenuContainer = ({ children }: React.PropsWithChildren) => {
  return <MotionDiv>{children}</MotionDiv>;
};
