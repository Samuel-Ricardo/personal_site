import { ITechViewDTO } from '../../tech/DTO/view.dto';
import { Tech } from '../../tech/entity/tech.entity';

export interface IProjectSyncDTO {
  main?: boolean;
  title: string;
  description: string;
  preview: string;
  repository: string;
  repos?: string;
  demo?: string;
  link?: string;
  techs: Tech[];
  image: string;
  main_techs: ITechViewDTO[];
}
