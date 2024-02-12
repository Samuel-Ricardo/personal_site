import Image from 'next/image';
import './social.style.scss';
import { SocialCardCover } from './cover/cover.card';
import { SocialCardFooter } from './footer/footer.component';

export const SocialCard = () => {
  return (
    <div className="social-card">
      <Image
        src="/hero_avatar.jpg"
        alt="Github"
        width={800}
        height={800}
        className="avatar"
      />
      <SocialCardCover />
      <SocialCardFooter />
    </div>
  );
};
