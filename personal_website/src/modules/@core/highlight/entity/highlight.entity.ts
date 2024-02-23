import { injectable } from 'inversify';
import { IHighlightDTO } from '../DTO/highlight.dto';

@injectable()
export class Highlight {
  constructor(
    protected readonly _identifier: string,
    protected readonly _title: string,
    protected readonly _numbers: number,
    protected readonly _k: boolean,
    protected readonly _position?: number,
    protected readonly _description?: string,
  ) {}

  toDTO(): IHighlightDTO {
    return {
      identifier: this._identifier,
      title: this._title,
      numbers: this._numbers,
      k: this._k,
      position: this._position,
      description: this._description,
    };
  }

  static fromDTO(dto: IHighlightDTO) {
    return new Highlight(
      dto.identifier,
      dto.title,
      dto.numbers,
      dto.k,
      dto.position,
      dto.description,
    );
  }

  get identifier() {
    return this._identifier;
  }

  get title() {
    return this._title;
  }

  get numbers() {
    return this._numbers;
  }

  get k() {
    return this._k;
  }

  get position() {
    return this._position;
  }

  get description() {
    return this._description;
  }
}
