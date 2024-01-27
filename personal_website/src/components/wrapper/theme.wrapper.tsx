'use client';

import { IThemeWrapperProps } from '@/@types/props/wrapper/theme';
import { useTheme } from '@/hooks/config/ui/themes.hook';

export const ThemeWrapper = ({ children }: IThemeWrapperProps) => {
  const { theme } = useTheme();

  return (
    <main className={`${theme}-theme flex flex-1 flex-col`}>{children}</main>
  );
};
