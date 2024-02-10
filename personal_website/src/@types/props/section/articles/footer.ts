import { IPlatform } from '@/@types/platform';
import { HTMLAttributes } from 'react';

export interface IArticleSectionFooter {
  html?: HTMLAttributes<HTMLDivElement>;
  platforms: IPlatform[];
}
