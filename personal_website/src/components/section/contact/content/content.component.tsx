import { IContactContentProps } from '@/@types/props/section/contact/content';
import { MotionDiv } from '@/components/motion/div.component';
import Image from 'next/image';

export const ContactContent = async ({ image }: IContactContentProps) => {
  return (
    <div>
      <MotionDiv>
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
    </div>
  );
};
