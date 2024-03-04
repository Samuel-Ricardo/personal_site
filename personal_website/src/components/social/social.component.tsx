'use client';

import { GithubIcon } from '@/assets/icons/logo/github/2/icon.component';
import './social.style.scss';

import { CloseIcon } from '@/assets/icons/close/icon.component';
import { ShareIcon } from '@/assets/icons/share/icon.component';
import { useState } from 'react';
import { MotionDiv } from '../motion/div.component';
import { MODULES } from '@/modules/app.factory';
import Link from 'next/link';
import { LinkedInIcon } from '@/assets/icons/logo/linkedin/icon.component';

export const Social = () => {
  const [active, setActive] = useState(false);
  const handleClick = e => setActive(!active);

  const { animate } = { animate: `${active ? 'active' : 'inacive'}` };

  const ANIMATION = {
    LEFT: MODULES.ANIMATION.FRAMER_MOTION.EMERGE.LEFT()({ animate }),
    RIGHT: MODULES.ANIMATION.FRAMER_MOTION.EMERGE.RIGHT()({ animate }),
  };

  return (
    <MotionDiv id="social-floating-button">
      <MotionDiv className={` social-item si-left`} {...ANIMATION.LEFT}>
        <Link href="https://github.com/Samuel-Ricardo" target="_blank">
          <GithubIcon />
        </Link>
      </MotionDiv>

      <MotionDiv className={` social-item si-right`} {...ANIMATION.RIGHT}>
        <Link href="https://github.com/Samuel-Ricardo" target="_blank">
          <LinkedInIcon />
        </Link>
      </MotionDiv>

      <button className="social-icon" onClick={handleClick}>
        {active ? <CloseIcon /> : <ShareIcon />}
      </button>
    </MotionDiv>
  );
};
