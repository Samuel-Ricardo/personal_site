import { ProjectShowRoom } from '@/app/pages/projects/showroom/showrom.page';

export default async function Project(props) {
  const { id } = props.params;

  return <ProjectShowRoom id={id} />;
}
