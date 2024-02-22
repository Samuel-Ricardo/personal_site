import { INCONSOLATA } from '@/app/style/fonts';
import './container.style.scss';
import { HeroCardContentContainerHeader } from '../header/header.component';
import { HeroCardContentAbout } from '../about/about.component';
import { HeroCardContentFooter } from '../footer/footer.component';
import { IHeroContentProps } from '@/@types/props/section/hero/content';

export const HeroCardContentContainer = ({
  children,
  subtitle,
  title,
  contact,
  resume,
}: IHeroContentProps) => {
  return (
    <div className={`${INCONSOLATA.className} container`}>
      <HeroCardContentContainerHeader title={title} subtitle={subtitle} />
      <HeroCardContentAbout>{children}</HeroCardContentAbout>
      <HeroCardContentFooter contact={contact} resume={resume} />
    </div>
  );
};
