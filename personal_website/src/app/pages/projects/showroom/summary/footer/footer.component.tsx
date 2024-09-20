import './footer.style.scss';
import { NavigateButton } from '@/components/button/navigate/button.component';

export const ProjectShowroomSummaryFooter = ({
  demo,
  repository,
  link,
}: {
  repository?: string;
  demo?: string;
  link?: string;
}) => {
  return (
    <footer className="project-showroom-summary-footer">
      {demo && <NavigateButton link={{ href: demo }}>Demo</NavigateButton>}
      {link && <NavigateButton link={{ href: link }}>Link</NavigateButton>}
      {repository && (
        <NavigateButton link={{ href: repository }}>Repository</NavigateButton>
      )}
    </footer>
  );
};
