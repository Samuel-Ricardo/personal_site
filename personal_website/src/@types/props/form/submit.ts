import { MotionProps } from 'framer-motion';
import { InputHTMLAttributes } from 'react';

export interface ISubmitProps {
  input: InputHTMLAttributes<HTMLInputElement>;
}

export interface IAnimatedSubmitProps extends ISubmitProps {
  animation: MotionProps;
}
