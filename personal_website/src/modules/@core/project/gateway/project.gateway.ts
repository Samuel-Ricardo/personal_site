import { Project } from '../entity/project.entity';

export interface IProjectGateway {
  findAll(): Promise<Promise<Project>[]>;
  findMainProjects(): Promise<Promise<Project>[]>;
}
