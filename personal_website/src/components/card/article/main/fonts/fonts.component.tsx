import { IPlatform } from '@/@types/platform';
import Image from 'next/image';
import Link from 'next/link';

import './fonst.style.scss';

export const ArticleFonts = async ({ data }: { data: IPlatform[] }) => {
  return (
    <div className="article-fonts-contaier">
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
    </div>
  );
};
