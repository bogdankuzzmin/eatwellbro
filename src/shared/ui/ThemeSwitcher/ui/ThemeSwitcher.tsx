import { useTheme } from '@app/providers/ThemeProvider';

import DarkIcon from '@shared/assets/icons/MoonIcon.svg';
import LightIcon from '@shared/assets/icons/SunIcon.svg';
import classNames from '@shared/lib/classNames';
import Button from '@shared/ui/Button';

import classes from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <Button
      icon
      aria-label={isDark ? 'Dark theme' : 'Light theme'}
      className={classNames(classes.ThemeSwitcher, {}, [className])}
      size="small"
      title={isDark ? 'Dark theme' : 'Light theme'}
      variant="text"
      onClick={toggleTheme}
    >
      {isDark ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitcher;