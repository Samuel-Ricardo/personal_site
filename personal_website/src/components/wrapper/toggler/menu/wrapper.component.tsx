'use client';

import { useMenu } from '@/hooks/navigation/menu.hook';

export const MenuTogglerWrapper = ({ children }: { children: any }) => {
  const { toggle } = useMenu();

  return (
    <div className="menu-toggler-wrapper" onClick={_ => toggle()}>
      {children}
    </div>
  );
};
