import { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import classNames from '@shared/lib/classNames/classNames';

import classes from './Link.module.scss';

interface ILinkProps extends LinkProps{
  className?: string;
}

const Link: FC<ILinkProps> = ({ children, className, to, ...otherProps }) => (
  <RouterLink
    className={classNames(classes.link, {}, [className])}
    to={to}
    {...otherProps}
  >
    {children}
  </RouterLink>
);

export default Link;