import './footer.style.scss';

import { Button } from '@/components/button/button.component';
import { NavigateButton } from '@/components/button/navigate/button.component';
import { SimpleDownloadIcon } from '@/icons/download/simple.icon';

export const HeroCardContentFooter = () => {
  return (
    <div className="footer">
      <NavigateButton link={{ href: './#contact-me' }}>
        Contact me
      </NavigateButton>
      <Button>
        <SimpleDownloadIcon /> Resume
      </Button>
    </div>
  );
};
