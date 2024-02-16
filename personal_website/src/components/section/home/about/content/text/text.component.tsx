'use client';

import { HighlightCard } from '@/components/card/highlight/card.component';
import './text.style.scss';
import { SocialProof } from './social_proof/proof.component';
import { GithubLogo } from '@/icons/logo/github/icon.component';
import { MODULES } from '@/modules/app.factory';
import { StarIcon } from '@/icons/star/icon.component';

export const AbouteMeContentText = () => {
  const animate = MODULES.ANIMATION.FRAMER_MOTION.SVG.DRAW();
  const drawAndFill = animate({
    initial: { pathLength: 0, fillOpacity: 0 },
    animate: {
      pathLength: 1.1,
      fillOpacity: 0.6,
    },
    transition: { duration: 4, ease: 'easeInOut' },
  });
  return (
    <div className="text-container">
      <h2 className="text-title">ABOUT ME</h2>

      <p className="text">
        Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <SocialProof>
        <HighlightCard
          title="Projects"
          numbers={130}
          Icon={<GithubLogo Paths={drawAndFill} />}
        />
        <HighlightCard
          title="Stars"
          numbers={120}
          Icon={<StarIcon Paths={drawAndFill} />}
        />
        <HighlightCard title="Commits" numbers={16} k />
        <HighlightCard title="Coding at" numbers={5} description="Years" />
        <HighlightCard title="LikedIn Follows" numbers={500} />
        <HighlightCard
          title="Impact On LikedIn"
          numbers={72}
          k
          description="over the year"
        />
        <HighlightCard title="Certificates" numbers={120} />
        <HighlightCard title="Articles" numbers={10} />
      </SocialProof>
    </div>
  );
};
