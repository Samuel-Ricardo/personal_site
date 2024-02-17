import { injectable } from 'inversify';

@injectable()
export class Occupation {
  constructor(
    private readonly _title: string,
    private readonly _description: string,
    private readonly _image: string,
  ) {}
}
