import './summary.style.scss';
import { ProjectShowroomSummaryFooter } from './footer/footer.component';

export const ProjectShowroomSummary = ({
  summary,
  repository,
  demo,
  link,
}: {
  summary: string;
  repository?: string;
  demo?: string;
  link?: string;
}) => {
  return (
    <div className="project-summary-container">
      <p className="project-summary">{summary}</p>
      <ProjectShowroomSummaryFooter
        repository={repository}
        demo={demo}
        link={link}
      />
    </div>
  );
};
