import { IProjectDTO } from '../DTO/project.dto';

export class Project {
  constructor(
    private _title: string,
    private _preview: string,
    private _description: string,
    private _repository: string,
    private _techs: {
      identifier: string;
      star: boolean;
    }[],
    private _demo?: string,
    private _link?: string,
    private _main?: boolean,
  ) {}

  toDTO(): IProjectDTO {
    return {
      title: this._title,
      preview: this._preview,
      description: this._description,
      repository: this._repository,
      demo: this._demo,
      link: this._link,
      techs: this._techs,
      main: this._main,
    };
  }

  static fromDTO(dto: IProjectDTO): Project {
    return new Project(
      dto.title,
      dto.preview,
      dto.description,
      dto.repository,
      dto.techs,
      dto.demo,
      dto.link,
      dto.main,
    );
  }

  static fromDTOs(dtos: IProjectDTO[]): Project[] {
    return dtos.map(Project.fromDTO);
  }

  get title() {
    return this._title;
  }

  get preview() {
    return this._preview;
  }

  get description() {
    return this._description;
  }

  get repository() {
    return this._repository;
  }

  get demo() {
    return this._demo;
  }

  get link() {
    return this._link;
  }

  get techs() {
    return this._techs;
  }

  get main() {
    return this._main;
  }
}
