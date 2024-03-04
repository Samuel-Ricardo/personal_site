import './menu.style.scss';
import { NavMenuContainer } from './container/container.component';
import { NavMenuItem } from './item/item.component';

export const NavMenu = async () => {
  return (
    <NavMenuContainer>
      <NavMenuItem index={0} li={{ id: 'home' }} href="/">
        Home
      </NavMenuItem>
      <NavMenuItem li={{ id: 'portfolio' }} href="/portfolio" index={1}>
        Portfolio
      </NavMenuItem>
      <NavMenuItem li={{ id: 'articles' }} href="/articles" index={2}>
        Articles
      </NavMenuItem>
      <NavMenuItem li={{ id: 'jobs' }} href="/jobs" index={3}>
        Works
      </NavMenuItem>
      <NavMenuItem li={{ id: 'journey' }} href="/journey" index={4}>
        Journey
      </NavMenuItem>

      <NavMenuItem li={{ id: 'My World' }} href="/my-world" index={5}>
        My World
      </NavMenuItem>

      <div className="line" />
    </NavMenuContainer>
  );
};
