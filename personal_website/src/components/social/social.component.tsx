'use client';

import './social.style.scss';

import { CloseIcon } from '@/assets/icons/close/icon.component';
import { ShareIcon } from '@/assets/icons/share/icon.component';
import { useCallback, useState } from 'react';

export const Social = () => {
  const [active, setActive] = useState(false);
  const handleClick = useCallback(e => setActive(!active), [active]);

  return (
    <div id="social-floating-button" onClick={handleClick}>
      <div className="social-icon">
        {active ? <CloseIcon /> : <ShareIcon />}
      </div>
    </div>
  );
};
