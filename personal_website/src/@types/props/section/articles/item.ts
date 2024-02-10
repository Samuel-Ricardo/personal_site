import { IPlatform } from '@/@types/platform';

export interface IArticle {
  title: string;
  description: string;
  platforms: IPlatform[];
  image?: string;
}
