import { useTheme } from '@app/providers/ThemeProvider';
import classNames from '@shared/lib/classNames';
import classes from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={classNames(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Theme
    </button>
  );
};

export default ThemeSwitcher;