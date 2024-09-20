import Image from 'next/image';
import { TechPreview } from './preview/preview.component';
import { ITechGalaxyItemProps } from '@/@types/props/section/techs/item';

import './item.style.scss';
import { MotionLI } from '@/components/motion/li.component';
import { MODULES } from '@/modules/app.factory';
import Link from 'next/link';

export const TechsGalaxyItem = async ({
  icon,
  preview,
  index,
}: ITechGalaxyItemProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.HOVER.MOUNT()();
  const slide = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()({
    animate: 'inactive',
    transition: { delay: (index || 0) * 0.25 },
  });
  return (
    <MotionLI
      className={`frosted-glass-lg  tech-item`}
      {...animation.parent}
      {...slide}
    >
      <Link href={`/portfolio?searchTerm=${preview?.name}`}>
        <div id="tech-item-img-container">
          <Image src={icon} alt="tech icon" width={80} height={80} />
        </div>

        <TechPreview preview={preview} {...animation.children} />
      </Link>
    </MotionLI>
  );
};
