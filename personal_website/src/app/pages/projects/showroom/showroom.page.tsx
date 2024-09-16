import './showroom.style.scss';

import { MODULES } from '@/modules/app.factory';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ProjectShowRoomImage } from './imgae/image.component';

export const ProjectShowRoom = async ({ id }: { id: string }) => {
  const project = await (
    await MODULES.PROJECT.CONTROLLER.MAIN().findOneProjectByTitle({ title: id })
  )?.toView();

  if (!project) return redirect('/not-found');

  return (
    <div className="project-showroom-container">
      <h1>{project.title}</h1>

      <div className="project-showroom-header-container">
        <ProjectShowRoomImage image={project.image} alt={project.title} />
      </div>
    </div>
  );
};
