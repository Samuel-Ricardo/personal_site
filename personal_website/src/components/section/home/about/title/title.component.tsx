import { MODULES } from '@/modules/app.factory';
import './title.style.scss';
import { PropsWithChildren } from 'react';
import { MotionH1 } from '@/components/motion/h1.component';

export const AboutMeTitle = async ({ children }: PropsWithChildren) => (
  <MotionH1
    className={`${MODULES.FONTS.MONO.INCONSOLATA().className} title`}
    {...MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()({
      transition: { duration: 1.5 },
      animate: 'inactive',
      whileInView: 'active',
    })}
  >
    {children}
  </MotionH1>
);
