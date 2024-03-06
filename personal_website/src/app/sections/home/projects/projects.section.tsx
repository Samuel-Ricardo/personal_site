import { ProjectsContainer } from '@/components/section/home/projects/container/container.component';

import './projects.style.scss';
import { MODULES } from '@/modules/app.factory';
import { MotionH1 } from '@/components/motion/h1.component';

export const Projects = async () => {
  const { title, projects } = await MODULES.ASSEMBLER.MAIN().assembleProjects();

  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()();

  const items = await Promise.all(
    (await Promise.all(await projects)).map(it => it.toView()),
  );

  return (
    <section id="projects-section" className="section">
      <MotionH1 {...animation}>{await title}</MotionH1>
      <ProjectsContainer items={items} />
    </section>
  );
};
