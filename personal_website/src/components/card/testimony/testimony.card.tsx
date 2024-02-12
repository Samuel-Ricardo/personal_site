import { TestimonyAvatar } from './avatar/avatar.component';
import { TestimonyContent } from './content/content.component';
import { TestimonyFooter } from './footer/footer.component';
import { TestimonyHeader } from './header/header.component';

export const TestimonyCard = () => {
  return (
    <div className="testimony-card">
      <TestimonyAvatar />
      <TestimonyHeader />
      <TestimonyContent />
      <TestimonyFooter />
    </div>
  );
};
