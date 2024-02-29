import { Article } from '@/modules/@core/articles/entity/article.entity';
import { Platform } from '@/modules/@core/platforms/entity/platform.entity';

export interface IAssembleArticleDTO {
  title: Promise<string | undefined>;
  articles: Promise<Article[]>;
  platforms_title: Promise<string | undefined>;
  platforms: Promise<Platform[]>;
}
