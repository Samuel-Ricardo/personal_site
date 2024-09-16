import { IFindProjectByTitleDTO } from '../DTO/find/by/title.dto';
import { Project } from '../entity/project.entity';

export interface IProjectGateway {
  findAll(): Promise<Promise<Project>[]>;
  findMainProjects(): Promise<Promise<Project>[]>;
  findOneByTitle(DTO: IFindProjectByTitleDTO): Promise<Project | null>;
}
