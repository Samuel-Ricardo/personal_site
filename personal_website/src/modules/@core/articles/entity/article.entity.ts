import { IPlatform } from '@/@types/platform';
import { IArticlesDTO } from '../DTO/articles.dto';
import { IArticlesViewDTO } from '../DTO/view.dto';

export class Article {
  constructor(
    private readonly _title: Promise<string>,
    private readonly _description: Promise<string>,
    private readonly _cover: string,
    private readonly _platforms: Promise<IPlatform>[],
    private readonly _main?: boolean,
    private readonly _content?: Promise<string>,
  ) {}

  async toDTO(): Promise<IArticlesDTO> {
    return {
      main: this._main,
      title: await this._title,
      description: await this._description,
      cover: this._cover,
      platforms: this._platforms,
      content: await this._content,
    };
  }

  static fromDTO(dto: IArticlesDTO): Article {
    return new Article(
      Promise.any(dto.title),
      Promise.any(dto.description),
      dto.cover,
      dto.platforms,
      dto.main,
      Promise.any(dto.content as any),
    );
  }

  static fromDTOs(dtos: IArticlesDTO[]): Article[] {
    return dtos.map(Article.fromDTO);
  }

  async toView(): Promise<IArticlesViewDTO> {
    return {
      title: await this.title,
      description: await this.description,
      platforms: await Promise.all(this.platforms),
      image: this.cover,
      scientific: false,
    };
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
