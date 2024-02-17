import { MenuIcon } from '@/assets/icons/menu/menu.component';
import { MenuContainer } from './container/container.component';
import { MODULES } from '@/modules/app.factory';

import './menu.style.scss';

export const Menu = () => {
  return (
    <MenuContainer>
      {' '}
      <MenuIcon Paths={MODULES.ANIMATION.FRAMER_MOTION.SVG.DRAW()()} />
    </MenuContainer>
  );
};
