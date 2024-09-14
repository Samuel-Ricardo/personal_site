import './projects.style.scss';

import { MainProjectCard } from '@/components/card/project/main/card.component';
import { Slider } from '@/components/slider/slider.component';
import { MODULES } from '@/modules/app.factory';

export const ProjectsPage = async () => {
  const projects = await MODULES.PROJECT.CONTROLLER.MAIN().findMainProjects();

  return (
    <div className="projects-page-container">
      <Slider>
        {projects.map(async project => (
          <MainProjectCard
            key={(await project).title}
            data={await (await project).toView()}
          />
        ))}
      </Slider>
      <div className="projects-page-search-container"></div>
    </div>
  );
};
