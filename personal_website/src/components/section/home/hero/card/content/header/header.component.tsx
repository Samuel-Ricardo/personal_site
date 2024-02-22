import { IHeroHeaderProps } from '@/@types/props/section/hero/header';
import './header.style.scss';

export const HeroCardContentContainerHeader = ({
  title,
  subtitle,
}: IHeroHeaderProps) => {
  return (
    <div className={`header w-full`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};
