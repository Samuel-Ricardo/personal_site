'use client';

import { ITestimonyCardProps } from '@/@types/props/card/testimony';
import { TestimonyAvatar } from './avatar/avatar.component';
import { TestimonyContent } from './content/content.component';
import { TestimonyFooter } from './footer/footer.component';
import { TestimonyHeader } from './header/header.component';

import './testimony.style.scss';
import { useSelectedTestimonial } from '@/hooks/testimonial/select.hook';
import { useMemo } from 'react';

export const TestimonyCard = ({ data }: ITestimonyCardProps) => {
  const { selected } = useSelectedTestimonial();
  const testimony = useMemo(() => selected?.data || data, [selected, data]);

  return (
    <div className="testimony-card">
      <TestimonyAvatar src={testimony.person.avatar} />
      <div className="content-block">
        <TestimonyHeader data={testimony.person} />
        <TestimonyContent>{testimony.content}</TestimonyContent>
        <TestimonyFooter
          contacts={testimony.person.contacts}
          portfolio={testimony.portfolio}
        />
      </div>
    </div>
  );
};
