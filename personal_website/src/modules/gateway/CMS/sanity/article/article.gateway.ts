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
  implements IArticleGateway
{
  private build(result: ICMSArticleDTO[]): Promise<IArticlesDTO>[] {
    return result.map(async article => ({
      ...article,
      platforms: article.platforms.map(async (p): Promise<IPlatform> => {
        const platform = await this.client.fetch(
          `*[_type == "platform" && _id == "${p.platform._ref}"]{link, name, icon}[0]`,
        );

        return {
          url: p.link,
          name: platform.name,
          icon: platform.icon,
        };
      }),
    }));
  }

  async findAll() {
    const result = await this.client.fetch<ICMSArticleDTO[]>(
      `*[_type == "article"]{main, title, cover, description, content, plarforms}`,
    );

    return Article.fromDTOs(await Promise.all(this.build(result)));
  }
}
