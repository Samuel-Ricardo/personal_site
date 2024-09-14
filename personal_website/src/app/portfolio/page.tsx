import { ProjectsPage } from '../pages/projects/projects.page';

export default async function Portfolio(props) {
  const {
    searchParams: { searchTerm },
  } = props;

  return (
    <div className="page-container overflow-y-scroll">
      <ProjectsPage search={searchTerm} />
    </div>
  );
}
