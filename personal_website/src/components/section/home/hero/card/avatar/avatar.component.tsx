import Image from 'next/image';
import './avatar.style.scss';
import { IHeroAvatarProps } from '@/@types/props/section/hero/avatar';

export const HeroAvatar = ({ src }: IHeroAvatarProps) => {
  return (
    <div className="avatar">
      <Image
        src={src}
        alt="hero avatar"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  );
};
