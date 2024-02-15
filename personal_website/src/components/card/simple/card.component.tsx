import { ISimpleCardProps } from '@/@types/props/card/simple';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';
import Image from 'next/image';

export const SimpleCard = ({ children, image, title }: ISimpleCardProps) => {
  return (
    <FrostedGlassCard>
      <div className="image-container">
        <Image src={image} alt="Card Image" width={80} height={80} />
      </div>
      <div className="content-container">
        <h1 className="card-title">{title}</h1>
        <div className="line" />
        <p className="content">{children}</p>
      </div>
    </FrostedGlassCard>
  );
};
