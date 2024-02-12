import { ButtonHTMLAttributes,FC } from 'react';

import classNames from '@shared/lib/classNames';

import { IButtonProps } from './types';

import classes from './Button.module.scss';

const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth,
  icon,
  size = 'normal',
  variant = 'default',
  ...restProps
}) => {

  const { type = 'button' } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={classNames(
        classes.button,
        {
          [classes[variant]]: variant,
          [classes[size]]: size,
          [classes['fullWidth']]: fullWidth,
          [classes['icon']]: icon,
        },
        [className],
      )}
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;