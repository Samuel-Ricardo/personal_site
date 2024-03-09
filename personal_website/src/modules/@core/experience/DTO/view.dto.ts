export interface IExperienceViewDTO {
  title: string;
  company: {
    name: string;
    icon: string;
  };
  description: string;
  start: Date;
  finish?: Date;
  left?: boolean;
}
