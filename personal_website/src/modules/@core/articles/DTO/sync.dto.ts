import { IPlatform } from '@/@types/platform';

export interface IArticlesDTO {
  title: string;
  main?: boolean;
  cover: string;
  content?: string;
  scientific?: boolean;
  description: string;
  platforms: IPlatform[];
  image?: string;
}
