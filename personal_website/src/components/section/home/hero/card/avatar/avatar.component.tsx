import Image from 'next/image';
import './avatar.style.scss';
import { IHeroAvatarProps } from '@/@types/props/section/hero/avatar';

export const HeroAvatar = async ({ src }: IHeroAvatarProps) => {
  return (
    <div className="avatar">
      <Image
        src={src}
        alt="hero avatar"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL={'/img_place_holder.gif'}
      />
    </div>
  );
};
