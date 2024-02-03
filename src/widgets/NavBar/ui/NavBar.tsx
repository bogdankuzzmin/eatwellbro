import { RoutePath } from '@shared/config/routeConfig';

import Link from '@shared/ui/Link/Link';
import classNames from '@shared/lib/classNames';
import classes from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

const NavBar = ({className}: INavBarProps) => (
  <nav className={classNames(classes.Navbar, {}, [className])}>
    <ul className={classes.List}>
      <li className={classes.ListItem}>
        <Link to={RoutePath.main}>Main</Link>
      </li>

      <li className={classes.ListItem}>
        <Link to={RoutePath.about}>About</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
