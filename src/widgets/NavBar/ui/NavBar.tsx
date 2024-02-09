import { RoutePath } from '@shared/config/routeConfig';

import Link from '@shared/ui/Link/Link';
import classNames from '@shared/lib/classNames';
import classes from './NavBar.module.scss';
import ThemeSwitcher from '@shared/ui/ThemeSwitcher';

interface INavBarProps {
  className?: string;
}

const NavBar = ({className}: INavBarProps) => (
  <div className={classNames(classes.Wrapper, {}, [className])}>
    <nav className={classNames(classes.Navbar, {}, [className])}>
      <span className={classes.Logo}>LOGO</span>

      <ul className={classes.List}>
        <li className={classes.ListItem}>
          <Link to={RoutePath.main}>Main</Link>
        </li>

        <li className={classes.ListItem}>
          <Link to={RoutePath.about}>About</Link>
        </li>
      </ul>
    </nav>

    <ThemeSwitcher/>
  </div>
);

export default NavBar;
