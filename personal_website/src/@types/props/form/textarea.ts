import { MotionProps } from 'framer-motion';
import { TextareaHTMLAttributes } from 'react';

export interface ITextAraProps {
  label?: string;
  hook: () => any;
  error?: string;
  input: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export interface IAnimatedTextAreaProps extends ITextAraProps {
  animation: MotionProps;
}
