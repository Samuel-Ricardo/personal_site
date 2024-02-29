import { Company } from '../../company/entity/commpany.entity';

export interface IExperienceDTO {
  title: string;
  description: Promise<string>;
  startDate: Date;
  endDate: Date;
  context: 'work' | 'academic';
  company: Promise<Company>;
}
