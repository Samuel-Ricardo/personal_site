import { IPlatformDTO } from '../../platforms/DTO/platform.dto';

export interface IArticlesViewDTO {
  title: string;
  scientific?: boolean;
  description: string;
  platforms: IPlatformDTO[];
  image?: string;
}
