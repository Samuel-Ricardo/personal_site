import { NavbarItem } from '@/components/navbar/item/item.component';
import './menu.style.scss';
import { MODULES } from '@/modules/app.factory';

export const NavMenu = () => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  return (
    <nav id="nav-menu">
      <ul>
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
          href="My World"
        >
          My World
        </NavbarItem>

        <div></div>
      </ul>
    </nav>
  );
};
