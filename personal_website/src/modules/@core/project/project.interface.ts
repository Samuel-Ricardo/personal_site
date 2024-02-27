import { Project } from './entity/project.entity';

export interface IProjectModule {
  findAll(): Promise<Promise<Project>[]>;
  findMainProjects(): Promise<Promise<Project>[]>;
}
