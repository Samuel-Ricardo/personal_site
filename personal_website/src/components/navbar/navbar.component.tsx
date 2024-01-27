import { Logo } from '../logo/logo.component';
import { NavbarItemContainer } from './item/container/container.component';
import { NavbarItem } from './item/item.component';

import './navbar.style.scss';

export const Navbar = () => {
  return (
    <div id="navbar">
      <Logo />
      <NavbarItemContainer>
        <NavbarItem href="/home">Home</NavbarItem>
        <NavbarItem href="/portfolio">Portfolio</NavbarItem>
        <NavbarItem href="/articles">Articles</NavbarItem>
        <NavbarItem href="/jobs">Jobs</NavbarItem>
      </NavbarItemContainer>
    </div>
  );
};
