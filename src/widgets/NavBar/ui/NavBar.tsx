import { RoutePath } from '@shared/config/routeConfig';
import classNames from '@shared/lib/classNames';
import Link from '@shared/ui/Link/Link';
import ThemeSwitcher from '@shared/ui/ThemeSwitcher';

import classes from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

const NavBar = ({className}: INavBarProps) => (
  <div className={classNames(classes.wrapper, {}, [className])}>
    <nav className={classNames(classes.navbar, {}, [className])}>
      <span className={classes.logo}>LOGO</span>

      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link to={RoutePath.main}>Main</Link>
        </li>

        <li className={classes.listItem}>
          <Link to={RoutePath.about}>About</Link>
        </li>
      </ul>
    </nav>

    <ThemeSwitcher/>
  </div>
);

export default NavBar;
