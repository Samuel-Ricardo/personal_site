import { IPlatform } from '@/@types/platform';

export interface IArticlesViewDTO {
  identifier: string;
  title: string;
  scientific?: boolean;
  description: string;
  platforms: IPlatform[];
  image?: string;
}
