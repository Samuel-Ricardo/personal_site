import { ITestimonyCardProps } from '@/@types/props/card/testimony';
import { TestimonyAvatar } from './avatar/avatar.component';
import { TestimonyContent } from './content/content.component';
import { TestimonyFooter } from './footer/footer.component';
import { TestimonyHeader } from './header/header.component';

import './testimony.style.scss';

export const TestimonyCard = async ({ data }: ITestimonyCardProps) => {
  return (
    <div className="testimony-card">
      <TestimonyAvatar src={data.person.avatar} />
      <div className="content-block">
        <TestimonyHeader data={data.person} />
        <TestimonyContent>{data.content}</TestimonyContent>
        <TestimonyFooter
          contacts={data.person.contacts}
          portfolio={data.portfolio}
        />
      </div>
    </div>
  );
};
