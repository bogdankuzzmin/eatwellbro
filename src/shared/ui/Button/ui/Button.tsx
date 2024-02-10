import { FC, ButtonHTMLAttributes } from 'react';

import classNames from '@shared/lib/classNames';
import classes from './Button.module.scss';
import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth,
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
        },
        [className]
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