import { IProjectsContainerProps } from '@/@types/props/section/project/container';
import { ProjectItem } from '../item/item.component';

import './container.style.scss';

export const ProjectsContainer = async (props: IProjectsContainerProps) => {
  const { items } = props;

  return (
    <div id="projects-container">
      {items.map(item => (
        <ProjectItem key={item.title} {...item} />
      ))}
    </div>
  );
};
