import { Project } from '../entity/project.entity';

export interface IProjectService {
  findAll(): Promise<Project[]>;
  findMainProjects(): Promise<Project[]>;
}
