import { ITechViewDTO } from '../../tech/DTO/view.dto';

export interface IProjectViewDTO {
  title: string;
  description: string;
  image: string;
  repo?: string;
  demo?: string;
  link?: string;
  main_techs: ITechViewDTO[];
}
