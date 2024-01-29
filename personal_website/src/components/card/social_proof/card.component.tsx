import { ISocialProofProps } from '@/@types/props/card/social_proof';
import { FrostedGlassCard } from '../glass.card';

export const SocialProofCard = (props: ISocialProofProps) => {
  return (
    <FrostedGlassCard>
      <div className="image-container">{props.image as any}</div>

      <h1 className="sp-title">{props.title}</h1>

      <p className="numbers">{props.numbers}</p>

      <p className="description">{props.description}</p>
    </FrostedGlassCard>
  );
};
