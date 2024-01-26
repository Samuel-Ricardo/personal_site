import { FrostedGlassCard } from '../card/glass.card';
import './card.style.scss';
import { HeroAvatar } from './card/avatar/avatar.component';

export const HeroCard = () => {
  return (
    <FrostedGlassCard className="z-50">
      <HeroAvatar />
      <div className="w-full bg-violet-500">Content</div>
    </FrostedGlassCard>
  );
};
