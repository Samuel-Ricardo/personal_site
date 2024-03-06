import { MODULES } from '@/modules/app.factory';
import './avatar.style.scss';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion/div.component';

export const TestimonyAvatar = ({ src }: { src: string }) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()();
  return (
    <MotionDiv {...animation} className="testimony-avatar">
      <Image src={src} alt="avatar" width={600} height={600} />
    </MotionDiv>
  );
};
