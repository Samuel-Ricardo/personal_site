import { Project } from './entity/project.entity';

export interface IProjectModule {
  findAll(): Promise<Project[]>;
  findMainProjects(): Promise<Project[]>;
}
