import '../../globals.scss';
import { ProjectShowRoom } from '@/app/pages/projects/showroom/showroom.page';

export default async function Project(props) {
  const { id } = props.params;

  return (
    <div className="page-container">
      <ProjectShowRoom id={decodeURIComponent(id)} />
    </div>
  );
}
