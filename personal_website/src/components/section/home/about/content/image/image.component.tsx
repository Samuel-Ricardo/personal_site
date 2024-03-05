import Image from 'next/image';
import './image.style.scss';
import { MotionDiv } from '@/components/motion/div.component';
import { MODULES } from '@/modules/app.factory';

export const AboutMeContentImage = async ({ src }: { src?: any }) => {
  const data = await src;
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()();

  return (
    <MotionDiv
      className="image-container"
      {...animation}
      whileInView="active"
      animate="inactive"
    >
      <Image
        className="abm-image"
        src={data}
        alt="about me image"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL="/image-2.png"
      />
    </MotionDiv>
  );
};
