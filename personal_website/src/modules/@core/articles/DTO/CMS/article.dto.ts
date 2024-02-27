import { ICMSPlatformDTO } from '@/modules/@core/platforms/DTO/CMS/platform.dto';

export interface ICMSArticleDTO {
  main?: boolean;
  title: string;
  description: string;
  cover: string;
  content?: string;
  platforms: ICMSPlatformDTO[];
}
