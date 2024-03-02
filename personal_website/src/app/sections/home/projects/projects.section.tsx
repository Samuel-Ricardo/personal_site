import { ProjectsContainer } from '@/components/section/home/projects/container/container.component';

import './projects.style.scss';
import { MODULES } from '@/modules/app.factory';

export const Projects = async () => {
  const { title, projects } = await MODULES.ASSEMBLER.MAIN().assembleProjects();

  const items = await Promise.all(
    (await Promise.all(await projects)).map(it => it.toView()),
  );

  return (
    <section id="projects-section" className="section">
      <h1>{await title}</h1>
      <ProjectsContainer items={items} />
    </section>
  );
};
