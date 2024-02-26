import { Project } from '../entity/project.entity';

export interface IProjectGateway {
  findAll(): Promise<Project[]>;
  findMainProjects(): Promise<Project[]>;
}
