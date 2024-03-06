import { IContactContentProps } from '@/@types/props/section/contact/content';
import { MotionDiv } from '@/components/motion/div.component';
import { MotionP } from '@/components/motion/p.component';
import { MODULES } from '@/modules/app.factory';
import Image from 'next/image';

export const ContactContent = async ({
  image,
  paragraph,
  contacts,
}: IContactContentProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP();
  return (
    <div>
      <MotionDiv {...animation()}>
        <Image
          src={(await image) || '/img_place_holder.gif'}
          alt="contact image"
          width={1920}
          height={1080}
          quality={100}
          placeholder="blur"
          blurDataURL={'/img_place_holder.gif'}
        />
      </MotionDiv>

      <MotionP {...animation({ transition: { delay: 0.5 } })}>
        {await paragraph}
      </MotionP>
    </div>
  );
};
