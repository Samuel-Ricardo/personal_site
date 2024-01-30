import { SocialProofCard } from '@/components/card/social_proof/card.component';
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
        <SocialProofCard
          title="Projects"
          numbers={130}
          Icon={<GithubLogo Paths={drawAndFill} />}
        />
        <SocialProofCard
          title="Stars"
          numbers={120}
          Icon={<StarIcon Paths={drawAndFill} />}
        />
        <SocialProofCard title="Commits" numbers={16} k />
        <SocialProofCard title="Coding at" numbers={5} description="Years" />
        <SocialProofCard title="LikedIn Follows" numbers={500} />
        <SocialProofCard
          title="Impact On LikedIn"
          numbers={72}
          k
          description="over the year"
        />
        <SocialProofCard title="Certificates" numbers={120} />
        <SocialProofCard title="Articles" numbers={10} />
      </SocialProof>
    </div>
  );
};
