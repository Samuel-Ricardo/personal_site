import { IFindExperienceByContextDTO } from '../DTO/find/by/context.dto';
import { Experience } from '../entity/experience.entity';

export interface IExperienceService {
  findAll(): Promise<Experience[]>;
  findByContext(DTO: IFindExperienceByContextDTO): Promise<Experience[]>;
}
