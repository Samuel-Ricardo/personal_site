import { ISocialProofProps } from '@/@types/props/card/social_proof';

import './card.style.scss';
import { HighlightCardImageContainer } from './image/image.container';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';

export const HighlightCard = ({
  Icon,
  title,
  numbers,
  k = false,
  index = 0,

  description,
}: ISocialProofProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP();
  return (
    <MotionDiv
      id="sp-card"
      key={title}
      {...animation({
        transition: { delay: 0.2 * index, duration: 1.5 },
        whileInView: 'active',
        animate: 'inactive',
      })}
    >
      {Icon ?? (
        <HighlightCardImageContainer>{Icon}</HighlightCardImageContainer>
      )}

      <h1 className={`sp-title ${!Icon ?? 'mt-0'}`}>{title}</h1>

      <p className="numbers">
        +<span>{numbers}</span>
        {k && 'k'}
      </p>

      <p className="description">{description}</p>
    </MotionDiv>
  );
};
