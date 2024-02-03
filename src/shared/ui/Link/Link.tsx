import { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import classNames from '@shared/lib/classNames';

import classes from './Link.module.scss';

interface ILinkProps extends LinkProps{
  className?: string;
}

const Link: FC<ILinkProps> = ({className, children, to, ...otherProps}) => (
  <RouterLink
    className={classNames(classes.Link, {}, [className])}
    to={to}
    {...otherProps}
  >
    {children}
  </RouterLink>
);

export default Link;