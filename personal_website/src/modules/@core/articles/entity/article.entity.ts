import { IPlatform } from '@/@types/platform';
import { IArticlesDTO } from '../DTO/articles.dto';

export class Article {
  constructor(
    private readonly _title: Promise<string>,
    private readonly _description: Promise<string>,
    private readonly _cover: string,
    private readonly _platforms: Promise<IPlatform>[],
    private readonly _main?: boolean,
    private readonly _content?: Promise<string>,
  ) {}

  toDTO(): IArticlesDTO {
    return {
      main: this._main,
      title: this._title,
      description: this._description,
      cover: this._cover,
      platforms: this._platforms,
      content: this._content,
    };
  }

  static fromDTO(dto: IArticlesDTO): Article {
    return new Article(
      dto.title,
      dto.description,
      dto.cover,
      dto.platforms,
      dto.main,
      dto.content,
    );
  }

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
