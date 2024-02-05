import { HTMLAttributes } from 'react';
import { ITechGalaxyItemProps } from '../techs/item';

export interface IProjectItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  repo: string;
  demo?: string;
  image: string;
  main_techs: ITechGalaxyItemProps[];
}

export interface IProjectItemPreviewProps {
  image: string;
}

export interface IProjectItemContentProps {
  title: string;
  description: string;
}

export interface IProjectItemFooterProps {
  repo: string;
  demo?: string;
}

export interface IProjectItemTechsProps {
  main_techs: ITechGalaxyItemProps[];
}
