import { IFindProjectByTitleDTO } from '../DTO/find/by/title.dto';
import { IProjectSyncDTO } from '../DTO/sync.dto';
import { Project } from '../entity/project.entity';

export interface IProjectService {
  findAll(): Promise<Promise<Project>[]>;
  findMainProjects(): Promise<Promise<Project>[]>;
  findAllSync(): Promise<IProjectSyncDTO[]>;
  findOneByTitle(DTO: IFindProjectByTitleDTO): Promise<Project | null>;
}
