import { IProjectItemProps } from '@/@types/props/section/project/item';
import { ProjectItemPreview } from './preview/preview.component';
import { ProjectItemContent } from './content/content.component';

import './item.style.scss';

export const ProjectItem = (props: IProjectItemProps) => {
  return (
    <li {...props} className="project-item">
      <ProjectItemPreview image={props.image} />
      <ProjectItemContent
        title={props.title}
        description={props.description}
        main_techs={props.main_techs}
        repo={props.repo}
        demo={props.demo}
      />
    </li>
  );
};
