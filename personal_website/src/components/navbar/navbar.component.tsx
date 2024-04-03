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
        <NavbarItem li={{ id: 'home', ...animation() }} href="/">
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
        <NavbarItem
          li={{ id: 'journey', ...animation({ transition: { delay: 4 } }) }}
          href="/journey"
        >
          Journey
        </NavbarItem>

        <NavbarItem
          li={{ id: 'My World', ...animation({ transition: { delay: 5 } }) }}
          href="/my/world"
        >
          My World
        </NavbarItem>
        <li>
          <Menu />
        </li>
      </NavbarItemContainer>
      <Menu />
    </div>
  );
};
