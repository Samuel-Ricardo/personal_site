import { SVGMotionProps } from 'framer-motion';

export interface IMotionSVGProps {
  svg?: SVGMotionProps<SVGSVGElement>;
  paths?: SVGMotionProps<SVGPathElement>;
}
