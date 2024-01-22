import { AppTheme } from '@/@types/style/theme';

export interface IAppThemeState {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}
