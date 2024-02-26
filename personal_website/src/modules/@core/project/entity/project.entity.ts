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
}
