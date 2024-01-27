import { MotionDiv } from '@/components/motion/div.component';

export const MenuContainerComponent = ({
  children,
}: React.PropsWithChildren) => {
  return <MotionDiv>{children}</MotionDiv>;
};
