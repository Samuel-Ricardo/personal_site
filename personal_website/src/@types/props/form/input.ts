import { MotionProps } from 'framer-motion';
import { InputHTMLAttributes } from 'react';

export interface IInputProps {
  label?: string;
  hook: () => any;
  error?: string;
  input: InputHTMLAttributes<HTMLInputElement>;
}

export interface IAnimatedInputProps extends IInputProps {
  animation: MotionProps;
}
