import { ProjectItemTechs } from '@/components/section/home/projects/item/techs/techs.component';
import { AND_MORE } from '@/local/data/static/techs.data';
import { MainProjectCardImage } from '../main/image/image.component';
import './card.style.scss';

import { IProjectSyncDTO } from '@/modules/@core/project/DTO/sync.dto';
import { HorizontalLine } from '@/components/line/horizontal/horizontal.component';
import Link from 'next/link';

export const ProjectCard = ({ data }: { data: IProjectSyncDTO }) => {
  return (
    <div className="project-card">
      <Link className="link-container" href={`/project/${data?.title}`}>
        <MainProjectCardImage url={data?.image} />
        <HorizontalLine />
        <div className="content-container">
          <h1>{data?.title}</h1>
          <HorizontalLine />
          <p>{data?.description}</p>
        </div>
        <div className="footer-container">
          <ProjectItemTechs
            main_techs={data?.main_techs.slice(0, 4).concat([AND_MORE])}
          />
        </div>
      </Link>
      <div className="neon-line" />
    </div>
  );
};
