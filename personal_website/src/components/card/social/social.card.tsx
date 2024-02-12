import Image from 'next/image';
import './social.style.scss';
import { SocialCardCover } from './cover/cover.card';

export const SocialCard = () => {
  return (
    <div className="social-card">
      <Image
        src="/hero_avatar.jpg"
        alt="Github"
        width={30}
        height={30}
        className="avatar"
      />
      <SocialCardCover />
    </div>
  );
};
