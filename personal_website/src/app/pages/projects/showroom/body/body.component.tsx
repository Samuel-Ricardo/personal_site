import './body.style.scss';
import { MarkdownRenderer } from '@/components/markdown/markdown.component';

export const ProjectShowRoomBody = async ({ body }: { body: string }) => {
  return (
    <div className="project-showroom-body">
      <div className="body-content">
        <MarkdownRenderer>{body}</MarkdownRenderer>
      </div>
    </div>
  );
};
