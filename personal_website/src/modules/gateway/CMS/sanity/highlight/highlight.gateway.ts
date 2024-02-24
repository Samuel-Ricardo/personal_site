import { IHighlightGateway } from '@/modules/@core/highlight/gateway/highlight.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Highlight } from '@/modules/@core/highlight/entity/highlight.entity';

@injectable()
export class SanityHighlightGateway
  extends SanitySupport
  implements IHighlightGateway
{
  async findAll(): Promise<Highlight[]> {
    const result: any[] = await this.client.fetch(
      `*[_type == "hightlight" && lang == 'en' ]{identifier, positon, title, numbers, k, description} | order(positon asc)`,
    );

    return Highlight.fromDTOList(
      result.map(res => ({
        title: res.title,
        description: res.description,
        numbers: res.numbers,
        k: res.k,
        identifier: res.identifier,
      })),
    );
  }
}
