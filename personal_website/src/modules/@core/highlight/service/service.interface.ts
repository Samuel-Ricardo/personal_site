import { Highlight } from '../entity/highlight.entity';

export interface IHighlightService {
  findAll(): Promise<Highlight[]>;
}
