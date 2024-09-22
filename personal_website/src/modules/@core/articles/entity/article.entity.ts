import { IPlatform } from '@/@types/platform';
import { IArticlesDTO } from '../DTO/articles.dto';
import { IArticlesViewDTO } from '../DTO/view.dto';
import { IArticlesSyncDTO } from '../DTO/sync.dto';

export class Article {
  constructor(
    private readonly _identifier: string,
    private readonly _title: Promise<string>,
    private readonly _description: Promise<string>,
    private readonly _cover: string,
    private readonly _platforms: Promise<IPlatform>[],
    private readonly _main?: boolean,
    private readonly _content?: Promise<string>,
  ) {}

  async sync(): Promise<IArticlesSyncDTO> {
    return {
      identifier: this._identifier,
      title: await this._title,
      description: await this._description,
      cover: this._cover,
      platforms: await Promise.all(this._platforms),
      main: this._main,
      content: await this._content,
      image: this._cover,
      scientific: false,
    };
  }

  async toDTO(): Promise<IArticlesDTO> {
    return {
      identifier: this._identifier,
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
      dto.identifier,
      dto.title,
      dto.description,
      dto.cover,
      dto.platforms,
      dto.main,
      dto.content,
    );
  }

  static fromDTOs(dtos: IArticlesDTO[]): Article[] {
    return dtos.map(Article.fromDTO);
  }

  async toView(): Promise<IArticlesViewDTO> {
    return {
      identifier: this._identifier,
      title: await this.title,
      description: await this.description,
      platforms: await Promise.all(this.platforms),
      image: this.cover,
      scientific: false,
    };
  }

  static async toViewList(articles: Article[]): Promise<IArticlesViewDTO[]> {
    return await Promise.all(articles.map(async article => article.toView()));
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
