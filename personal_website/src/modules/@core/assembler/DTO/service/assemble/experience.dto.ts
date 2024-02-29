import { Experience } from '@/modules/@core/experience/entity/experience.entity';

export interface IAssembleExperienceDTO {
  title: Promise<string | undefined>;
  experience: Promise<Experience[]>;
}
