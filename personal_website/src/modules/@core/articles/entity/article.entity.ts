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
}
