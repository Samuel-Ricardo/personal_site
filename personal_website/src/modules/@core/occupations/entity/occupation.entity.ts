import { injectable } from 'inversify';
import { IOccupationDTO } from '../DTO/occupation.dto';

@injectable()
export class Occupation {
  constructor(
    private readonly _title: string,
    private readonly _description: string,
    private readonly _image: string,
  ) {}

  toDTO(): IOccupationDTO {
    return {
      title: this._title,
      description: this._description,
      image: this._image,
    };
  }

  static fromDTO(dto: IOccupationDTO): Occupation {
    return new Occupation(dto.title, dto.description, dto.image);
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get image(): string {
    return this._image;
  }
}
