import { ButtonHTMLAttributes } from 'react';

const ButtonVariantList = [
  'default',
  'success',
  'error',
  'text',
] as const;

const ButtonSizeList = [
  'normal',
  'small',
] as const;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: typeof ButtonSizeList[number];
  variant?: typeof ButtonVariantList[number];
}