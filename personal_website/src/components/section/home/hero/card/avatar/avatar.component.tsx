import Image from 'next/image';
import './avatar.style.scss';

export const HeroAvatar = () => {
  return (
    <div className="avatar">
      <Image
        src="/hero_avatar.jpg"
        alt="avatar"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL="/hero_avatar.jpg"
      />
    </div>
  );
};
