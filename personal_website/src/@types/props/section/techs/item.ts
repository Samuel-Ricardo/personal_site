import { HTMLAttributes } from 'react';
import { IPreview } from './preview';

export interface ITechGalaxyItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: string;
  preview: IPreview;
}
