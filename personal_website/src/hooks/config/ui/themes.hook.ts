import { IAppThemeState } from '@/@types/hooks/config/ui/themes';
import { AppTheme } from '@/@types/style/theme';
import { create } from 'zustand';

export const useTheme = create<IAppThemeState>(set => ({
  theme: 'light',
  setTheme: (theme: AppTheme) => set({ theme }),
}));
