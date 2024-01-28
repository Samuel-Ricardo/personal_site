import { IIWorkWithProps } from '@/@types/props/card/work_with';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';
import Image from 'next/image';

export const IWorkWithCard = ({ children, image, title }: IIWorkWithProps) => {
  return (
    <FrostedGlassCard>
      <div className="image-container">
        <Image src={image} alt="Card Image" width={100} height={100} />
      </div>
      <div className="content-container">
        <h1>{title}</h1>
        <div className="line" />
        <div className="content">{children}</div>
      </div>
    </FrostedGlassCard>
  );
};
