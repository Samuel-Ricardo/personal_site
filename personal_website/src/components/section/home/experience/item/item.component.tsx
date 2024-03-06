import { IExperienceItemProps } from '@/@types/props/section/experience/item';
import Image from 'next/image';

import './item.style.scss';
import { ExperienceItemCard } from './card/card.component';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';

export const ExperienceItem = async ({
  index,
  data,
  key,
}: IExperienceItemProps) => {
  const lineAnimation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()({
    animate: 'inactive',
    whileInView: 'active',
    transition: { delay: (index || 0) * 0.25, duration: 0.85 },
  });

  const logoAnimation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()({
    animate: 'inactive',
    whileInView: 'active',
    transition: { delay: (index || 0) * 0.5, duration: 1.5 },
  });

  return (
    <li key={key ?? data.company.name} className={`experience-item `}>
      <MotionDiv className="experience-date" {...logoAnimation}>
        {(data.finish || new Date()).getFullYear()}
      </MotionDiv>
      <MotionDiv className="vertical-line" {...lineAnimation} />
      <MotionDiv {...logoAnimation} className="w-fit h-fit">
        <Image
          src={data.company.icon}
          alt={`${data.company} icon`}
          width={250}
          height={250}
        />
      </MotionDiv>
      <ExperienceItemCard {...data} />
      <MotionDiv className="vertical-line" {...lineAnimation} />
    </li>
  );
};
