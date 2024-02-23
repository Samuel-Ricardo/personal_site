import { IHighlightGateway } from '@/modules/@core/highlight/gateway/highlight.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { IHighlightDTO } from '@/modules/@core/highlight/gateway/DTO/highlight.dto';

@injectable()
export class SanityHighlightGateway
  extends SanitySupport
  implements IHighlightGateway
{
  findAll(): Promise<IHighlightDTO[]> {
    return this.client.fetch(
      `*[_type == "hightlight" && lang == 'en' ]{identifier, positon, title, numbers, k, description} | order(positon asc)`,
    );
  }
}
