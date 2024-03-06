import { IContactContentProps } from '@/@types/props/section/contact/content';
import { MotionDiv } from '@/components/motion/div.component';
import { MotionLI } from '@/components/motion/li.component';
import { MotionP } from '@/components/motion/p.component';
import { MODULES } from '@/modules/app.factory';
import Image from 'next/image';
import Link from 'next/link';

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

      <ul>
        {(await contacts)?.map((contact, i) => (
          <MotionLI
            key={contact.link}
            {...animation({ transition: { delay: i * 0.5 } })}
          >
            <Link href={contact.link}>
              <Image
                src={contact.icon}
                alt={'Contact Icon'}
                width={24}
                height={24}
              />
            </Link>
          </MotionLI>
        ))}
      </ul>
    </div>
  );
};
