import { HTMLMotionProps } from 'framer-motion';

export interface IPreview {
  name: string;
  description: string;
  images: string[];
}

export interface IPreviewProps extends HTMLMotionProps<'div'> {
  preview: IPreview;
}
