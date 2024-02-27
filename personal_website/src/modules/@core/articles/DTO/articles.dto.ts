import { IPlatform } from '@/@types/platform';

export interface IArticlesDTO {
  main?: boolean;
  title: Promise<string>;
  description: Promise<string>;
  cover: string;
  content?: Promise<string>;
  platforms: Promise<IPlatform>[];
}
