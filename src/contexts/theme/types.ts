export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
}