import { Tech } from '../../tech/entity/tech.entity';

export interface IProjectDTO {
  main?: boolean;
  title: string;
  description: string;
  preview: string;
  repository: string;
  demo?: string;
  link?: string;
  techs: Promise<Tech>[];
}
