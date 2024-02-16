import { IProjectItemTechsProps } from '@/@types/props/section/project/item';
import { TechsGalaxy } from '@/components/section/techs/galaxy/galaxy.component';

import './techs.style.scss';

export const ProjectItemTechs = ({ main_techs }: IProjectItemTechsProps) => {
  return (
    <TechsGalaxy
      items={main_techs}
      title=""
      className="flex flex-wrap w-full h-fit"
    />
  );
};
