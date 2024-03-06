import { MotionProps } from 'framer-motion';

export interface IInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  hook?: any;
  animation?: MotionProps;
}
