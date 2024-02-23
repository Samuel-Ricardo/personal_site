import { IHighlightDTO } from '../DTO/highlight.dto';

export interface IHighlightGateway {
  findAll(): Promise<IHighlightDTO[]>;
}
