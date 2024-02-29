import { Experience } from '@/modules/@core/experience/entity/experience.entity';

export interface IAssembleWorkExperienceDTO {
  title: Promise<string | undefined>;
  experience: Promise<Experience[]>;
}
