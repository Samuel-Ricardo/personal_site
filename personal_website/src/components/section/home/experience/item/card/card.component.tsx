import { IExperience } from '@/@types/props/section/experience/item';
import { NavigateButton } from '@/components/button/navigate/button.component';
import Image from 'next/image';

import './card.style.scss';
import { HTMLAttributes } from 'react';
import { formatDateToYearMonth } from '@/utils/date.utils';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';

export const ExperienceItemCard = async ({
  company,
  start,
  title,
  finish,
  description,
  left,
  className,
}: IExperience & HTMLAttributes<HTMLDivElement>) => {
  const IN = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT();

  const animation = left ? IN({ animate: 'inactive' }) : OUT();

  return (
    <MotionDiv
      className={`experience-item-card  ${left ? 'left' : 'right'}`}
      {...animation}
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
            {formatDateToYearMonth(start)} {' • '}
            {finish ? formatDateToYearMonth(finish) : 'Actual'}
          </h4>
        </div>
      </header>
      <div className="description">
        <p>{description}</p>
        <NavigateButton
          link={{
            href: 'https://www.linkedin.com/in/samuel-ricardo/',
            target: '_blank',
          }}
        >
          More
        </NavigateButton>
      </div>
    </MotionDiv>
  );
};
