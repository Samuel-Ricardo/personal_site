import { Tech } from '../../tech/entity/tech.entity';
import { IProjectDTO } from '../DTO/project.dto';
import { IProjectSyncDTO } from '../DTO/sync.dto';
import { IProjectViewDTO } from '../DTO/view.dto';

export class Project {
  constructor(
    private _title: string,
    private _preview: string,
    private _description: string | Promise<string>,
    private _repository: string,
    private _techs: Promise<Tech>[],
    private _demo?: string,
    private _link?: string,
    private _main?: boolean,
  ) {}

  async sync(): Promise<IProjectSyncDTO> {
    return {
      title: this._title,
      preview: this._preview,
      description: await this._description,
      repository: this._repository,
      demo: this._demo,
      link: this._link,
      techs: await Promise.all(this._techs),
      image: this._preview,
      main_techs: (await Promise.all(this._techs)).map(tech => tech.toView()),
      main: this._main,
      repos: this._repository,
    };
  }

  async toView(): Promise<IProjectViewDTO> {
    return {
      title: this._title,
      image: this._preview,
      description: await this._description,
      repo: this._repository,
      demo: this._demo,
      link: this._link,
      main_techs: (await Promise.all(this._techs)).map(tech => tech.toView()),
    };
  }

  toDTO(): IProjectDTO {
    return {
      title: this._title,
      preview: this._preview,
      description: this._description as string,
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

  static async fromAsyncDTO(dto: Promise<IProjectDTO>): Promise<Project> {
    return dto.then(Project.fromDTO);
  }

  static fromAsyncDTOs(dtos: Promise<IProjectDTO>[]): Promise<Project>[] {
    return dtos.map(Project.fromAsyncDTO);
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
