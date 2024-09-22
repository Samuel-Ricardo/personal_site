import { IPlatform } from '@/@types/platform';
import Image from 'next/image';
import Link from 'next/link';

import './fonst.style.scss';
import { MotionDiv } from '@/components/motion/div.component';
import { MODULES } from '@/modules/app.factory';

export const ArticleFonts = async ({ data }: { data: IPlatform[] }) => {
  const ANIMATION = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()();
  return (
    <MotionDiv className="article-fonts-contaier" {...ANIMATION}>
      {data.map(font => (
        <Link className="article-font" key={font.name} href={font.link}>
          <Image
            src={font.icon || 'https://i.giphy.com/ZBQhoZC0nqknSviPqT.webp'}
            alt="article font image"
            width={48}
            height={48}
            quality={100}
          />
        </Link>
      ))}
    </MotionDiv>
  );
};
