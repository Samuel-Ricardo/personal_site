'use client';

import { useMenu } from '@/hooks/navigation/menu.hook';

export const MenuTogglerWrapper = ({ children }: { children: any }) => {
  const { open, setOpen } = useMenu();

  return (
    <div className="menu-toggler-wrapper" onClick={_ => setOpen(!open)}>
      {children}
    </div>
  );
};
