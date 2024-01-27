import { INCONSOLATA } from '@/app/style/fonts';
import './container.style.scss';
import { HeroCardContentContainerHeader } from '../header/header.component';
import { HeroCardContentAbout } from '../about/about.component';
import { HeroCardContentFooter } from '../footer/footer.component';

export const HeroCardContentContainer = () => {
  return (
    <div className={`${INCONSOLATA.className} container`}>
      <HeroCardContentContainerHeader />
      <HeroCardContentAbout />
      <HeroCardContentFooter />
    </div>
  );
};
