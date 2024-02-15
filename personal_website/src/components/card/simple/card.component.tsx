import { ISimpleCardProps } from '@/@types/props/card/simple';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';
import { SimpleCardImage } from './image/image.component';
import { SimpleCardContent } from './content/content.component';

export const SimpleCard = ({ children, image, title }: ISimpleCardProps) => {
  return (
    <FrostedGlassCard>
      <SimpleCardImage image={image} />
      <SimpleCardContent title={title}>{children}</SimpleCardContent>
    </FrostedGlassCard>
  );
};
