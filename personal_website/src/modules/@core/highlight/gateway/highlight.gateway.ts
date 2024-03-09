import { IHighlightDTO } from '../DTO/highlight.dto';
import { Highlight } from '../entity/highlight.entity';

export interface IHighlightGateway {
  findAll(): Promise<Highlight[]>;
}
