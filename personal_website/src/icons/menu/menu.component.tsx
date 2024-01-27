import { MotionPath } from '@/components/motion/path.component';
import { MotionSVG } from '@/components/motion/svg.component';
import { SVGMotionProps } from 'framer-motion';

export const MenuIcon = (props: SVGMotionProps<SVGElement>) => {
  return (
    <MotionSVG
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <MotionPath fill="none" d="M0 0h24v24H0z" />
      <MotionPath d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
    </MotionSVG>
  );
};
