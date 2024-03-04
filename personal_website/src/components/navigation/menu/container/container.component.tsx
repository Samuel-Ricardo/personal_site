'use client';

import { MotionNav } from '@/components/motion/nav.component';
import { useMenu } from '@/hooks/navigation/menu.hook';
import { MODULES } from '@/modules/app.factory';
import React from 'react';

export const NavMenuContainer = ({ children }: React.PropsWithChildren) => {
  const { open } = useMenu();
  const animation = MODULES.ANIMATION.FRAMER_MOTION.GROWTH.DOWN()();
  const active = open ? 'active' : 'inactive';

  return (
    <MotionNav id="nav-menu" {...animation} animate={active}>
      <ul>{children}</ul>
    </MotionNav>
  );
};
