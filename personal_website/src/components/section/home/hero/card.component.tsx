import './card.style.scss';
import { HeroAvatar } from './card/avatar/avatar.component';
import { HeroCardContentContainer } from './card/content/container/container.component';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';

export const HeroCard = async () => {
  const {
    person: { avatar, name, title },
    paragraph,
    resume,
    contact,
  } = await MODULES.ASSEMBLER.SERVICE.MAIN().assembleHero();

  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()({
    animate: 'inactive',
    whileInView: 'active',
  });

  return (
    <MotionDiv className="card frosted-glass" {...animation}>
      <HeroAvatar src={avatar} />
      <HeroCardContentContainer
        title={name}
        subtitle={title}
        resume={resume}
        contact={contact}
      >
        {paragraph}
      </HeroCardContentContainer>
    </MotionDiv>
  );
};
