import { IProjectItemProps } from '@/@types/props/section/project/item';
import { ProjectItemPreview } from './preview/preview.component';
import { ProjectItemContent } from './content/content.component';

import './item.style.scss';
import { OnlyInViewWrapper } from '@/components/wrapper/only_in_view.wrapper';

export const ProjectItem = async (props: IProjectItemProps) => {
  return (
    <OnlyInViewWrapper>
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
    </OnlyInViewWrapper>
  );
};
