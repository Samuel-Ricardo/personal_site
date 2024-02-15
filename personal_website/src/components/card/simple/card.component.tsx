import { ISimpleCardProps } from '@/@types/props/card/simple';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';
import { HorizontalLine } from '@/components/line/horizontal/horizontal.component';
import { SimpleCardImage } from './image/image.component';

export const SimpleCard = ({ children, image, title }: ISimpleCardProps) => {
  return (
    <FrostedGlassCard>
      <SimpleCardImage image={image} />

      <div className="content-container">
        <h1 className="card-title">{title}</h1>
        <HorizontalLine />
        <p className="content">{children}</p>
      </div>
    </FrostedGlassCard>
  );
};
