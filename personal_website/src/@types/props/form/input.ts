import { MotionProps } from 'framer-motion';

export interface IInputProps {
  id?: string;
  required?: boolean;
  label: string;
  placeholder: string;
  type: string;
  hook?: any;
}

export interface IAnimatedInputProps extends IInputProps {
  animation: MotionProps;
}
