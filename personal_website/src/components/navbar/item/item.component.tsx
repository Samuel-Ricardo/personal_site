import './item.style.scss';

import { INavbarItemProps } from '@/@types/props/navbar/item';
import { MotionLI } from '@/components/motion/li.component';
import Link from 'next/link';

export const NavbarItem = ({ children, href, li }: INavbarItemProps) => {
  return (
    <MotionLI {...li} className="item">
      <Link href={href}>{children}</Link>
      <div className="neon-line" />
    </MotionLI>
  );
};
