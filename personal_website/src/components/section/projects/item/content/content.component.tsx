import { IProjectItemContentProps } from '@/@types/props/section/project/item';
import { ProjectItemTechs } from '../techs/techs.component';
import { ProjectItemFooter } from '../footer/footer.component';

export const ProjectItemContent = ({
  title,
  description,
  demo,
  repo,
  main_techs,
}: IProjectItemContentProps) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>

    <ProjectItemTechs main_techs={main_techs} />
    <ProjectItemFooter repo={repo} demo={demo} />
  </div>
);
