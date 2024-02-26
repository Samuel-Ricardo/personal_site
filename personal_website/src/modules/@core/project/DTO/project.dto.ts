export interface IProjectDTO {
  main?: boolean;
  title: string;
  description: string;
  preview: string;
  repository: string;
  demo?: string;
  link?: string;
  techs: {
    identifier: string;
    star: boolean;
  }[];
}
