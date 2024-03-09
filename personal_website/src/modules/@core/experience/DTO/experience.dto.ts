import { Company } from '../../company/entity/commpany.entity';

export interface IExperienceDTO {
  title: string;
  description: { content: string };
  startDate: string;
  endDate?: string;
  context: 'work' | 'academic';
  company: Company;
}
