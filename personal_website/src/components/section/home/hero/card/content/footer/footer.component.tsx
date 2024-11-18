import './footer.style.scss';

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
      <NavigateButton link={{ href: '#contact-section' }}>
        {contact}
      </NavigateButton>
      <NavigateButton
        link={{
          className: 'btn-resume',
          href: 'https://cdn.sanity.io/files/tk1o3drt/production/b198f2b67da860ca0bc7eca9a7862e3fbdc0cdc0.pdf',
          target: '_blank',
        }}
      >
        <DownloadIcon Paths={MODULES.ANIMATION.FRAMER_MOTION.SVG.DRAW()()} />
        {resume}
      </NavigateButton>
    </div>
  );
};
