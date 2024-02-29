import { Experience } from '../entity/experience.entity';

export interface IExperienceGateway {
  findAll(): Promise<Experience[]>;
  findByContext(): Promise<Experience[]>;
}
