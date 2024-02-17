import './footer.style.scss';

import { Button } from '@/components/button/button.component';
import { NavigateButton } from '@/components/button/navigate/button.component';
import { DownloadIcon } from '@/assets/icons/download/download.icon';
import { MODULES } from '@/modules/app.factory';

export const HeroCardContentFooter = () => {
  return (
    <div className="footer">
      <NavigateButton link={{ href: './#contact-me' }}>
        Contact me
      </NavigateButton>
      <Button>
        <DownloadIcon Paths={MODULES.ANIMATION.FRAMER_MOTION.SVG.DRAW()()} />
        Resume
      </Button>
    </div>
  );
};
