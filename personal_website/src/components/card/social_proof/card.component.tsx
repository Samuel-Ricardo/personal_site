import { ISocialProofProps } from '@/@types/props/card/social_proof';
import { FrostedGlassCard } from '../glass.card';

import './card.style.scss';

export const SocialProofCard = ({
  Icon,
  title,
  numbers,
  k = false,
  children,
  description,
}: ISocialProofProps) => {
  return (
    <FrostedGlassCard id="sp-card">
      {Icon ?? <div className="image-container">{Icon}</div>}

      <h1 className={`sp-title ${!Icon ?? 'mt-0'}`}>{title}</h1>

      <p className="numbers">
        +<span>{numbers}</span>
        {k && 'k'}
      </p>

      <p className="description">{description}</p>
    </FrostedGlassCard>
  );
};
