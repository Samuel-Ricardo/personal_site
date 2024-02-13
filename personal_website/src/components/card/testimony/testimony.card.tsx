import { TestimonyAvatar } from './avatar/avatar.component';
import { TestimonyContent } from './content/content.component';
import { TestimonyFooter } from './footer/footer.component';
import { TestimonyHeader } from './header/header.component';

import './testimony.style.scss';

export const TestimonyCard = () => {
  return (
    <div className="testimony-card">
      <TestimonyAvatar />
      <div className="content-block">
        <TestimonyHeader />
        <TestimonyContent />
        <TestimonyFooter />
      </div>
    </div>
  );
};
