import { useContext } from 'react';

import { ThemeContext } from '@contexts/theme/ThemeContext';
import { LocalStorage } from '@utils/constants/localStorage';
import { ETheme } from '@contexts/theme/types';

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