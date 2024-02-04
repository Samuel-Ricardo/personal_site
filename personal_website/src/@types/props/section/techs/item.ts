import { HTMLAttributes } from 'react';
import { IPreview } from './preview';

export interface ITechGalaxyItemProps extends HTMLAttributes<HTMLLIElement> {
  index?: number;
  icon: string;
  preview: IPreview;
}
