import { ICompany } from './company';

export interface IExperience {
  title: string;
  description: string; //markdown
  company: ICompany;
  start: Date;
  finish?: Date;
  left?: boolean;
}

export interface IExperienceItemProps {
  index?: number;
  key?: any;
  data: IExperience;
}
