import './social.style.scss';

import { CloseIcon } from '@/assets/icons/close/icon.component';
import { ShareIcon } from '@/assets/icons/share/icon.component';

export const Social = () => {
  return (
    <div id="social-floating-button">
      <ShareIcon />
      <CloseIcon />
    </div>
  );
};
