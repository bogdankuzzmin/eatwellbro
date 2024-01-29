import { ReactNode, useMemo, useState } from 'react';

import { ThemeContext } from '@contexts/theme/ThemeContext';
import { ETheme } from '@contexts/theme/types';
import { LocalStorage } from '@utils/constants/localStorage';

const defaultTheme = localStorage.getItem(LocalStorage.THEME) as ETheme || ETheme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;