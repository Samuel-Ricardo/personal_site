import { ITechGalaxyProps } from '@/@types/props/section/techs/galaxy';

import './galaxy.style.scss';
import { TechsGalaxyItem } from './item/item.component';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';

export const TechsGalaxy = async ({
  items,
  title,
  className,
}: ITechGalaxyProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()();
  return (
    <MotionDiv
      id="techs-galaxy"
      className={'frosted-glass-lg ' + className}
      {...animation}
    >
      <h1 id="techs-galaxy-title">{title}</h1>
      <ul className="items-container">
        {items?.map((item, index) => (
          <TechsGalaxyItem index={index} key={item?.icon} {...item} />
        ))}
      </ul>
    </MotionDiv>
  );
};
