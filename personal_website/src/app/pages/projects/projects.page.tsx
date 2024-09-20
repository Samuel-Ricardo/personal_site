import { SearchProjectResult } from '@/components/search/result/project/result.component';
import './projects.style.scss';

import { MainProjectCard } from '@/components/card/project/main/card.component';
import SearchBar from '@/components/search/search.component';
import { Slider } from '@/components/slider/slider.component';
import { MODULES } from '@/modules/app.factory';
import { ProjectsBackground } from '@/assets/images/background/project/projects.background';
import { handlePortfolioSearch } from '@/actions/search/portfolio.action';

export const ProjectsPage = async ({ search }: { search: string }) => {
  const projects = await MODULES.PROJECT.CONTROLLER.MAIN().findAllSync();

  const main = projects.filter(project => project.main);
  const list =
    !search || search.trim() === ''
      ? projects
      : projects.filter(
          project =>
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase()) ||
            project.techs.filter(t =>
              t.name.toLowerCase().includes(search.toLowerCase()),
            ).length > 0,
        );

  return (
    <div className="projects-page-container">
      <ProjectsBackground />
      <Slider>
        {main.map(async project => (
          <MainProjectCard key={project.title} data={project} />
        ))}
      </Slider>
      <div className="projects-page-search-container">
        <SearchBar action={handlePortfolioSearch} />
        <SearchProjectResult items={list} />
      </div>
    </div>
  );
};
