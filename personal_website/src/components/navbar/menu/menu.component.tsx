import { MenuIcon } from '@/assets/icons/menu/menu.component';
import { MenuContainer } from './container/container.component';
import { MODULES } from '@/modules/app.factory';

import './menu.style.scss';
import { NavMenu } from '@/components/navigation/menu/menu.component';
import { MenuTogglerWrapper } from '@/components/wrapper/toggler/menu/wrapper.component';

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuTogglerWrapper>
        <MenuIcon Paths={MODULES.ANIMATION.FRAMER_MOTION.SVG.DRAW()()} />
      </MenuTogglerWrapper>
      <NavMenu></NavMenu>
    </MenuContainer>
  );
};
