import { FrostedGlassCard } from '@/components/card/glass.card';
import './card.style.scss';
import { HeroAvatar } from './card/avatar/avatar.component';
import { HeroCardContentContainer } from './card/content/container/container.component';
import { MODULES } from '@/modules/app.factory';

export const HeroCard = async () => {
  const {
    person: { avatar, name, title },
    paragraph,
    resume,
    contact,
  } = await MODULES.ASSEMBLER.SERVICE.MAIN().assembleHero();

  return (
    <FrostedGlassCard className="z-50">
      <HeroAvatar src={avatar} />
      <HeroCardContentContainer
        title={name}
        subtitle={title}
        resume={resume}
        contact={contact}
      >
        {paragraph}
      </HeroCardContentContainer>
    </FrostedGlassCard>
  );
};
