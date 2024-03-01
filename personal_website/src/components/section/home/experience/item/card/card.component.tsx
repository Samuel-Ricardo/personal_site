import { IExperience } from '@/@types/props/section/experience/item';
import { NavigateButton } from '@/components/button/navigate/button.component';
import Image from 'next/image';

import './card.style.scss';
import { HTMLAttributes } from 'react';

export const ExperienceItemCard = ({
  company,
  start,
  title,
  finish,
  description,
  left,
  className,
}: IExperience & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`experience-item-card ${left ? 'mr-[48.65%]' : 'ml-[48.65%]'}`}
    >
      <header>
        <Image
          src={company.icon}
          alt={`${company.name} icon`}
          width={150}
          height={150}
        />
        <div className="header-content">
          <h3>
            {title} • {company.name}
          </h3>
          <div className="line" />
          <h4>
            {start.getFullYear()} • {start.getMonth()} -{' '}
            {finish
              ? finish?.getFullYear() + ' • ' + finish?.getMonth
              : 'Actual'}
          </h4>
        </div>
      </header>
      <div className="description">
        <p>{description}</p>
        <NavigateButton>More</NavigateButton>
      </div>
    </div>
  );
};
