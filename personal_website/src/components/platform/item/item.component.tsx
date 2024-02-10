import { IPlatformProps } from '@/@types/platform';

import './item.style.scss';
import Image from 'next/image';

export const Platform = ({ html, platform }: IPlatformProps) => {
  return (
    <div {...html} className="platform-card">
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
    </div>
  );
};
