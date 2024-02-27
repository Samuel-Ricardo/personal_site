import { IPlatform } from '@/@types/platform';

export class Article {
  constructor(
    private readonly _main: boolean,
    private readonly _title: Promise<string>,
    private readonly _description: Promise<string>,
    private readonly _cover: string,
    private readonly _platforms: IPlatform[],
    private readonly _content?: Promise<string>,
  ) {}

  get main() {
    return this._main;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get cover() {
    return this._cover;
  }

  get platforms() {
    return this._platforms;
  }

  get content() {
    return this._content;
  }
}
