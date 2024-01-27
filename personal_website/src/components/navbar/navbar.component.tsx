import { Logo } from '../logo/logo.component';
import { NavbarItemContainer } from './item/container/container.component';
import { NavbarItem } from './item/item.component';

import './navbar.style.scss';

export const Navbar = () => {
  return (
    <div id="navbar">
      <Logo />
      <NavbarItemContainer>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Portfolio</NavbarItem>
        <NavbarItem>Articles</NavbarItem>
        <NavbarItem>Jobs</NavbarItem>
      </NavbarItemContainer>
    </div>
  );
};
