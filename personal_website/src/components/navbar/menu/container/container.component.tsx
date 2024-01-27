import { MotionDiv } from '@/components/motion/div.component';
import './container.style.scss';

export const MenuContainer = ({ children }: React.PropsWithChildren) => {
  return <MotionDiv id="menu">{children}</MotionDiv>;
};
