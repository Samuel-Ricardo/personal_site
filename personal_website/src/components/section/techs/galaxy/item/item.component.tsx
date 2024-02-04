import Image from 'next/image';
import { TechPreview } from './preview/preview.component';
import { ITechGalaxyItemProps } from '@/@types/props/section/techs/item';

import './item.style.scss';
import { MotionLI } from '@/components/motion/li.component';
import { MODULES } from '@/modules/app.factory';

export const TechsGalaxyItem = ({ icon, preview }: ITechGalaxyItemProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.HOVER.MOUNT()();
  return (
    <MotionLI id="tech-item" className="frosted-glass-lg" {...animation.parent}>
      <div id="tech-item-img-container">
        <Image src={icon} alt="tech icon" width={80} height={80} />
      </div>

      <TechPreview preview={preview} {...animation.children} />
    </MotionLI>
  );
};
