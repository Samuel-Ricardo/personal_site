'use client';

import { INavMenuItemProps } from '@/@types/props/navigation/menu/item';
import { NavbarItem } from '@/components/navbar/item/item.component';
import { useAppAnimation } from '@/hooks/animation/animation.hook';
import { useMenu } from '@/hooks/navigation/menu.hook';
import { useMemo } from 'react';

export const NavMenuItem = (props: INavMenuItemProps) => {
  const { index, children } = props;
  const { open } = useMenu();

  const animation = useAppAnimation().SLIDE.IN();

  const delay = useMemo(() => (index + 1) * 5 * 0.01, [index]);
  const active = open ? 'active' : 'inactive';

  return (
    <NavbarItem
      {...props}
      li={{
        ...props.li,
        ...animation({
          animate: 'inactive',
          transition: { delay },
          whileInView: active,
        }),
      }}
    >
      {children}
    </NavbarItem>
  );
};
