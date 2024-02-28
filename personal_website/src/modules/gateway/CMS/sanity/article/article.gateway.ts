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
    return result.map(
      async article =>
        ({
          ...article,
          cover: this.imageBuilder.image(article.cover).url(),
          title: this.client
            .fetch(
              `*[_type == "title" && identifier == "${article.title}"]{content}[0]`,
            )
            .then(title => title?.content),
          description: this.client
            .fetch(
              `
        *[_type == "tp_text" && identifier == "${article.description}"]{content}[0]
      `,
            )
            .then(text => text?.content),

          platforms: article.platforms.map(async (p): Promise<IPlatform> => {
            const platform = await this.client.fetch(
              `*[_type == "platform" && _id == "${p.platform._ref}"]{link, name, icon}[0]`,
            );

            return {
              link: platform.link,
              name: platform.name,
              icon: platform.icon,
            };
          }),
        }) as IArticlesDTO,
    );
  }

  async findAll() {
    const result = await this.client.fetch<ICMSArticleDTO[]>(
      `*[_type == "article"]{main, title, cover, description, content, platforms}`,
    );

    return Article.fromDTOs(await Promise.all(this.build(result)));
  }

  async findMainArticles() {
    const result = await this.client.fetch<ICMSArticleDTO[]>(
      `*[_type == "article" && main == true]{title, cover, description, plarforms}`,
    );

    return Article.fromDTOs(await Promise.all(this.build(result)));
  }
}
