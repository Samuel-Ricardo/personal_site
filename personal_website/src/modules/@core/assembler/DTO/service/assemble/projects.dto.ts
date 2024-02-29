import { Project } from '@/modules/@core/project/entity/project.entity';

export interface IAssembleProjectsDTO {
  title: Promise<string | undefined>;
  projects: Promise<Promise<Project>[]>;
}
