import { Experience } from './entity/experience.entity';

export interface IExperienceModule {
  findAll(): Promise<Experience[]>;
  findWorkExperience(): Promise<Experience[]>;
  findAcademicExperience(): Promise<Experience[]>;
}
