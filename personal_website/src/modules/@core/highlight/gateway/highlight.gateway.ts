import { Highlight } from '../entity/highlight.entity';

export interface IHighlightGateway {
  findAll(): Promise<Highlight[]>;
}
