import { MODULES } from '@/modules/app.factory';
import { Logo } from '../logo/logo.component';
import { NavbarItemContainer } from './item/container/container.component';
import { NavbarItem } from './item/item.component';
import { Menu } from './menu/menu.component';

import './navbar.style.scss';

export const Navbar = () => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  return (
    <div id="navbar">
      <Logo />
      <NavbarItemContainer>
        <NavbarItem li={{ id: 'home', ...animation() }} href="/home">
          Home
        </NavbarItem>
        <NavbarItem
          li={{ id: 'portfolio', ...animation({ transition: { delay: 1 } }) }}
          href="/portfolio"
        >
          Portfolio
        </NavbarItem>
        <NavbarItem
          li={{ id: 'articles', ...animation({ transition: { delay: 2 } }) }}
          href="/articles"
        >
          Articles
        </NavbarItem>
        <NavbarItem
          li={{ id: 'jobs', ...animation({ transition: { delay: 3 } }) }}
          href="/jobs"
        >
          Works
        </NavbarItem>
        <Menu />
      </NavbarItemContainer>
      <Menu />
    </div>
  );
};
