import { HTMLAttributes } from 'react';
import { ITechGalaxyItemProps } from '../techs/item';

export interface IProjectItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  repo: string;
  production_link?: string;
  image: string;
  main_techs: ITechGalaxyItemProps[];
}
