import { injectable } from 'inversify';

@injectable()
export class Occupation {
  constructor(
    private readonly _title: string,
    private readonly _description: string,
    private readonly _image: string,
  ) {}

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
