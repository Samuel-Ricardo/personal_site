import { HighlightCard } from '@/components/card/highlight/card.component';
import './text.style.scss';
import { SocialProof } from './social_proof/proof.component';
import { IAboutContentText } from '@/@types/props/section/about/content';
import { MODULES } from '@/modules/app.factory';
import { MotionH2 } from '@/components/motion/h2.component';
import { MotionP } from '@/components/motion/p.component';

export const AbouteMeContentText = async ({
  title,
  paragraph,
  highlights,
}: IAboutContentText) => {
  const config = {
    animate: 'inactive',
    whileInView: 'active',
  };
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()(config);
  const UP = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()(config);

  return (
    <div className="text-container">
      <MotionH2 className="text-title" {...OUT}>
        {await title}
      </MotionH2>
      <MotionP className="text" {...UP}>
        {await paragraph}{' '}
      </MotionP>

      <SocialProof>
        {
          (await highlights)?.map((highlight, i) => (
            <HighlightCard
              index={i}
              key={highlight.title}
              title={highlight.title}
              numbers={highlight.numbers}
              description={highlight.description}
              k={highlight.k}
            />
          )) as any[]
        }
      </SocialProof>
    </div>
  );
};
