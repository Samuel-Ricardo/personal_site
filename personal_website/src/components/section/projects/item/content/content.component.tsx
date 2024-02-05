import { IProjectItemContentProps } from '@/@types/props/section/project/item';
import { ProjectItemTechs } from '../techs/techs.component';
import { ProjectItemFooter } from '../footer/footer.component';

import './content.style.scss';
import { MODULES } from '@/modules/app.factory';

export const ProjectItemContent = ({
  title,
  description,
  demo,
  repo,
  main_techs,
}: IProjectItemContentProps) => (
  <div className="content-container">
    <h2 className={`${MODULES.FONTS.MONO.INCONSOLATA}`}>{title}</h2>
    <p>{description}</p>

    <ProjectItemTechs main_techs={main_techs} />
    <ProjectItemFooter repo={repo} demo={demo} />
  </div>
);
