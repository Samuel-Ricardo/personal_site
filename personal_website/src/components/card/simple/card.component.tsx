import { IIWorkWithProps } from '@/@types/props/card/work_with';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';
import Image from 'next/image';

export const SimpleCard = ({ children, image, title }: IIWorkWithProps) => {
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
