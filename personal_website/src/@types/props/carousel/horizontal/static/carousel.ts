import { HTMLAttributes, ReactNode } from 'react';

export interface IStaticCarouselProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}
