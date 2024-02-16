import { ReactNode, useMemo, useState } from 'react';

import { LocalStorage } from '@shared/config/localStorage';

import { ThemeContext } from '../lib/ThemeContext';
import { ETheme } from '../types';

const defaultTheme = localStorage.getItem(LocalStorage.THEME) as ETheme || ETheme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    setTheme,
    theme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;