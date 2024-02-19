import { FrostedGlassCard } from '@/components/card/glass.card';
import './card.style.scss';
import { HeroAvatar } from './card/avatar/avatar.component';
import { HeroCardContentContainer } from './card/content/container/container.component';

export const HeroCard = () => {
  const {} = {};
  return (
    <FrostedGlassCard className="z-50">
      <HeroAvatar />
      <HeroCardContentContainer />
    </FrostedGlassCard>
  );
};
