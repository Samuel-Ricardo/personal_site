import { IProjectViewDTO } from '@/modules/@core/project/DTO/view.dto';
import './card.style.scss';
import { MainProjectCardImage } from './image/image.component';
import { HorizontalLine } from '@/components/line/horizontal/horizontal.component';
import { MainProjectCardContent } from './content/content.component';
import { MainProjectCardFooter } from './footer/footer.component';
import { ProjectItemTechs } from '@/components/section/home/projects/item/techs/techs.component';
import { AND_MORE } from '@/local/data/static/techs.data';
import Link from 'next/link';

export const MainProjectCard = async ({ data }: { data: IProjectViewDTO }) => {
  return (
    <Link className="main-project-card" href={`/project/${data?.title}`}>
      <MainProjectCardImage url={data?.image} />
      <div className="bar" />
      <div className="content-container">
        <h1>{data?.title}</h1>
        <HorizontalLine />

        <MainProjectCardContent>{data?.description}</MainProjectCardContent>

        <MainProjectCardFooter>
          <ProjectItemTechs
            main_techs={data?.main_techs.slice(0, 5).concat([AND_MORE])}
          />
        </MainProjectCardFooter>
      </div>
    </Link>
  );
};
