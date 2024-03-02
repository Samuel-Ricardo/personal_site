import './footer.style.scss';

import { Button } from '@/components/button/button.component';
import { NavigateButton } from '@/components/button/navigate/button.component';
import { DownloadIcon } from '@/assets/icons/download/download.icon';
import { MODULES } from '@/modules/app.factory';
import { IHeroFooterProps } from '@/@types/props/section/hero/about';

export const HeroCardContentFooter = async ({
  contact,
  resume,
}: IHeroFooterProps) => {
  return (
    <div className="footer">
      <NavigateButton link={{ href: './#contact-me' }}>
        {contact}
      </NavigateButton>
      <Button>
        <DownloadIcon Paths={MODULES.ANIMATION.FRAMER_MOTION.SVG.DRAW()()} />
        {resume}
      </Button>
    </div>
  );
};
