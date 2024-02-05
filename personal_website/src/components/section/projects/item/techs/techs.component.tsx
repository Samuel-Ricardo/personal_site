import { IProjectItemTechsProps } from '@/@types/props/section/project/item';

export const ProjectItemTechs = ({ main_techs }: IProjectItemTechsProps) => {
  return <div>{main_techs + ''}</div>;
};
