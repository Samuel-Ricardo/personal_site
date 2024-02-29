export interface IExperienceViewDTO {
  title: string;
  company: {
    name: string;
    icon: string;
  };
  description: string;
  start: Date;
  end?: Date;
  left?: boolean;
}
