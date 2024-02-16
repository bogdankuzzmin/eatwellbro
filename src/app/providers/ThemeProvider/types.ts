export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface ThemeContextProps {
  setTheme?: (theme: ETheme) => void;
  theme?: ETheme;
}