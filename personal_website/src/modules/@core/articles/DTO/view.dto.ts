import { IPlatform } from '@/@types/platform';

export interface IArticlesViewDTO {
  title: string;
  scientific?: boolean;
  description: string;
  platforms: IPlatform[];
  image?: string;
}
