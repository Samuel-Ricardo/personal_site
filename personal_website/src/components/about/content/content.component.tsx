import { SocialProofCard } from '@/components/card/social_proof/card.component';
import Image from 'next/image';

export const AboutMeContent = () => {
  return (
    <div className="content-container">
      <div className="image-container">
        <Image
          src="/image-2.png"
          alt="about me image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="text-container">
        <h2 className="text-title">ABOUT ME</h2>

        <p className="text">
          Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="social-proof">
          <SocialProofCard title="Projects +130" />
          <SocialProofCard title="Stars +120" />
          <SocialProofCard title="Commits +16K" />
          <SocialProofCard title="Coding at 5" />
          <SocialProofCard title="Followers On LikedIn +500" />
          <SocialProofCard title="Impact On more than LikedIn +72k over the year" />
          <SocialProofCard title="Certificates +100" />
          <SocialProofCard title="More than 10 articles" />
        </div>
      </div>
    </div>
  );
};
