import { ISocialProofProps } from '@/@types/props/card/social_proof';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';
import { HighlightCardImageContainer } from './image/image.container';

export const HighlightCard = ({
  Icon,
  title,
  numbers,
  k = false,
  children,
  description,
}: ISocialProofProps) => {
  return (
    <FrostedGlassCard id="sp-card">
      {Icon ?? (
        <HighlightCardImageContainer>{Icon}</HighlightCardImageContainer>
      )}

      <h1 className={`sp-title ${!Icon ?? 'mt-0'}`}>{title}</h1>

      <p className="numbers">
        +<span>{numbers}</span>
        {k && 'k'}
      </p>

      <p className="description">{description}</p>
    </FrostedGlassCard>
  );
};
