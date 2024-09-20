import { HTMLAttributes } from 'react';
import { ITechGalaxyItemProps } from '../techs/item';

export interface IProjectItemPreviewProps {
  image: string;
}

export interface IProjectItemContentProps
  extends IProjectItemFooterProps,
    IProjectItemTechsProps {
  title: string;
  description: string;
}

export interface IProjectItemFooterProps {
  title?: string;
  repo?: string;
  demo?: string;
  about?: string;
}

export interface IProjectItemTechsProps {
  main_techs: ITechGalaxyItemProps[];
}

export interface IProjectItemProps
  extends HTMLAttributes<HTMLLIElement>,
    IProjectItemPreviewProps,
    IProjectItemContentProps {
  title: string;
}
