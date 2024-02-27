import { IArticleGateway } from '@/modules/@core/articles/gateway/article.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { ICMSArticleDTO } from '@/modules/@core/articles/DTO/CMS/article.dto';
import { IArticlesDTO } from '@/modules/@core/articles/DTO/articles.dto';
import { IPlatform } from '@/@types/platform';
import { Article } from '@/modules/@core/articles/entity/article.entity';

@injectable()
export class SanityArticleGateway
  extends SanitySupport
  implements IArticleGateway {}
