'use client';

import { ISocialCardFooterProps } from '@/@types/props/card/social';
import './footer.style.scss';
import { useSelectedTestimonial } from '@/hooks/testimonial/select.hook';

export const SocialCardFooter = ({
  title,
  name,
  company,
}: ISocialCardFooterProps) => {
  const { selected } = useSelectedTestimonial();

  if (selected?.data.person.name !== name) return null;

  return (
    <footer className="card-footer">
      <p className="name">{name}</p>
      <p className="role">
        | {title} • {company}
      </p>
    </footer>
  );
};
