import { IPlatformProps } from '@/@types/platform';

import './item.style.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Platform = async ({ html, platform }: IPlatformProps) => {
  return (
    <Link
      {...html}
      className="platform-card"
      href={platform.link}
      target="_blank"
    >
      {platform.icon && (
        <Image
          src={platform.icon}
          alt={platform.name + ' icon'}
          width={124}
          height={124}
          className="platform-icon"
          quality={100}
        />
      )}

      <p>{platform.name}</p>
    </Link>
  );
};
