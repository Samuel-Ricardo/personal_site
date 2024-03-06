import { PropsWithChildren } from 'react';
import './content.style.scss';
import { MotionDiv } from '@/components/motion/div.component';
import { MODULES } from '@/modules/app.factory';

export const TestimonyContent = ({ children }: PropsWithChildren) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()();
  return (
    <MotionDiv {...animation} className="testimony-content">
      <p>{children}</p>
    </MotionDiv>
  );
};
