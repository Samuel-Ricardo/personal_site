import './content.style.scss';

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
  const IN = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  return (
    <div className="content">
      <MotionDiv {...animation()} className="img-container">
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
            {...IN({ transition: { delay: i * 0.5 } })}
          >
            <Link href={contact.link}>
              <Image
                src={contact.icon}
                alt={'Contact Icon'}
                width={64}
                height={64}
              />
            </Link>
          </MotionLI>
        ))}
      </ul>
    </div>
  );
};
