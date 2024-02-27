import { Project } from '../entity/project.entity';

export interface IProjectService {
  findAll(): Promise<Promise<Project>[]>;
  findMainProjects(): Promise<Promise<Project>[]>;
}
