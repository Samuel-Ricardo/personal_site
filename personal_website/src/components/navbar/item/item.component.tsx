import './item.style.scss';

import { INavbarItemProps } from '@/@types/props/navbar/item';
import Link from 'next/link';

export const NavbarItem = ({ children, href }: INavbarItemProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
      <div className="line" />
    </li>
  );
};
