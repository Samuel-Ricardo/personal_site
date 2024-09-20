import './showroom.style.scss';

import { MODULES } from '@/modules/app.factory';
import { redirect } from 'next/navigation';
import { ProjectShowRoomImage } from './imgae/image.component';
import { ProjectShowroomSummary } from './summary/summary.component';
import { ProjectItemTechs } from '@/components/section/home/projects/item/techs/techs.component';
import { ProjectShowRoomBody } from './body/body.component';
import { Circuit } from '@/components/canvas/circuit.component';

export const ProjectShowRoom = async ({ id }: { id: string }) => {
  const project = await (
    await MODULES.PROJECT.CONTROLLER.MAIN().findOneProjectByTitle({ title: id })
  )?.toView();

  if (!project) return redirect('/not-found');

  return (
    <div className="project-showroom-container">
      <Circuit className="fixed top-0 left-0 right-0 w-full bg-primary-foreground -z-0" />
      <h1>{project.title}</h1>

      <div className="project-showroom-header-container">
        <ProjectShowRoomImage image={project.image} alt={project.title} />
        <ProjectShowroomSummary
          summary={project.description}
          link={project.link}
          demo={project.demo}
          repository={project.repo}
        />
      </div>
      <div className="project-showroom-body-container">
        <ProjectShowRoomBody body={project.body || ''} />
        <ProjectItemTechs main_techs={project.main_techs} />
      </div>
    </div>
  );
};
