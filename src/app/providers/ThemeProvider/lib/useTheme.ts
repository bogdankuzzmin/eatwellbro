import { useContext } from 'react';

import { LocalStorage } from '@shared/config/localStorage';

import { ThemeContext } from './ThemeContext';
import { ETheme } from '../types';

interface IUseThemeResult {
  theme: ETheme;
  toggleTheme(): void;
}

export default (): IUseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LocalStorage.THEME, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}