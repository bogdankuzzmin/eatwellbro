import { useContext } from 'react';

import { LocalStorage } from '@shared/config/localStorage';

import { ETheme } from '../types';

import { ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  theme: ETheme;
  toggleTheme(): void;
}

export default (): IUseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LocalStorage.THEME, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};