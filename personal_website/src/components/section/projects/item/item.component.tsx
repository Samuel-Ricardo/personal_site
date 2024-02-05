import { IProjectItemProps } from '@/@types/props/section/project/item';
import { ProjectItemPreview } from './preview/preview.component';
import { ProjectItemContent } from './content/content.component';
import { ProjectItemTechs } from './techs/techs.component';
import { ProjectItemFooter } from './footer/footer.component';

import './item.style.scss';

export const ProjectItem = (props: IProjectItemProps) => {
  return (
    <div {...props} className="project-item">
      <ProjectItemPreview image={props.image} />
      <ProjectItemContent title={props.title} description={props.description} />
      <ProjectItemTechs main_techs={props.main_techs} />
      <ProjectItemFooter repo={props.repo} demo={props.demo} />
    </div>
  );
};
