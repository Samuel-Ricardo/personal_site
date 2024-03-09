import { IPlatform } from '@/@types/platform';
import { HTMLAttributes } from 'react';

export interface IArticle {
  title: string;
  scientific?: boolean;
  description: string;
  platforms: IPlatform[];
  image?: string;
}

export interface IArticleItemProps {
  index?: number;
  html?: HTMLAttributes<HTMLLIElement>;
  key?: string;
  article: IArticle;
}
