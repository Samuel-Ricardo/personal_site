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
import { FreelancerIcon } from '@/assets/icons/logo/freelancer/icon.component';
import { HackerRankIcon } from '@/assets/icons/logo/hackerrank/icon.component';
import { MotionProps } from 'framer-motion';
import { YoutubeIcon } from '@/assets/icons/logo/youtube/icon.component';

export const Social = () => {
  const [active, setActive] = useState(false);
  const handleClick = e => setActive(!active);

  const config = {
    animate: `${active ? 'active' : 'inacive'}`,
    whileHover: {
      scale: 1.2,
    },
  } as MotionProps;

  const ANIMATION = {
    LEFT: MODULES.ANIMATION.FRAMER_MOTION.EMERGE.LEFT()(config),
    RIGHT: MODULES.ANIMATION.FRAMER_MOTION.EMERGE.RIGHT()(config),
    TOP: MODULES.ANIMATION.FRAMER_MOTION.EMERGE.UP()(config),
    BOTTOM: MODULES.ANIMATION.FRAMER_MOTION.EMERGE.DOWN()(config),
  };

  return (
    <MotionDiv id="social-floating-button">
      <button
        className="social-icon"
        onClick={handleClick}
        aria-label="floating contact button"
      >
        {active ? <CloseIcon /> : <ShareIcon />}
      </button>

      <MotionDiv className={` social-item si-left`} {...ANIMATION.LEFT}>
        <Link
          href="https://github.com/Samuel-Ricardo"
          target="_blank"
          aria-label="go to my github profile"
        >
          <GithubIcon />
        </Link>
      </MotionDiv>

      <MotionDiv className={` social-item si-right`} {...ANIMATION.RIGHT}>
        <Link
          href="https://www.linkedin.com/in/samuel-ricardo/"
          target="_blank"
          aria-label="go to my linkedin profile"
        >
          <LinkedInIcon />
        </Link>
      </MotionDiv>

      <MotionDiv className={` social-item si-top`} {...ANIMATION.TOP}>
        <Link
          href="https://www.youtube.com/@Just_Samuel.s"
          target="_blank"
          aria-label="go to my youtube channel"
        >
          <YoutubeIcon />
        </Link>
      </MotionDiv>

      <MotionDiv className={` social-item si-bottom`} {...ANIMATION.BOTTOM}>
        <Link
          href="https://www.hackerrank.com/profile/samuelricardoof1"
          target="_blank"
          aria-label="go to my hackerrank profile"
        >
          <HackerRankIcon />
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
};
