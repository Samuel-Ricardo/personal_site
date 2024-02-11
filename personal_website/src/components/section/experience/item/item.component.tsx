import { IExperienceItemProps } from '@/@types/props/section/experience/item';
import Image from 'next/image';

import './item.style.scss';
import { ExperienceItemCard } from './card/card.component';

export const ExperienceItem = ({ data, key }: IExperienceItemProps) => {
  return (
    <li key={key ?? data.company.name} className={`experience-item `}>
      <div className="experience-date">
        {(data.finish || new Date()).getFullYear()}
      </div>
      <div className="vertical-line" />
      <Image
        src={data.company.icon}
        alt={`${data.company} icon`}
        width={250}
        height={250}
      />

      <ExperienceItemCard {...data} />

      <div className="vertical-line" />
    </li>
  );
};
