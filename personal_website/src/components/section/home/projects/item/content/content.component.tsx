import { IProjectItemContentProps } from '@/@types/props/section/project/item';
import { ProjectItemTechs } from '../techs/techs.component';
import { ProjectItemFooter } from '../footer/footer.component';

import './content.style.scss';
import { MODULES } from '@/modules/app.factory';
import { MotionH2 } from '@/components/motion/h2.component';
import { MotionP } from '@/components/motion/p.component';

export const ProjectItemContent = async ({
  title,
  description,
  demo,
  repo,
  main_techs,
  about,
}: IProjectItemContentProps) => {
  const DOWN = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()();
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()();

  return (
    <div className="content-container">
      <MotionH2 {...DOWN} className={`${MODULES.FONTS.MONO.INCONSOLATA}`}>
        {title}
      </MotionH2>
      <MotionP {...OUT} className="content">
        {description}
      </MotionP>

      <ProjectItemTechs main_techs={main_techs} />
      <ProjectItemFooter repo={repo} demo={demo} about={about} />
    </div>
  );
};
