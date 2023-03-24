import { ButtonHTMLAttributes } from 'react';

export type ButtonBaseProps<T> = Pick<
  ButtonHTMLAttributes<T>,
  'onClick' | 'children' | 'className'
>;
export interface ButtonProps<T> extends ButtonBaseProps<T> {
  variant?: ButtonVariant;
}

export type ButtonVariant = 'primary' | 'secondary';
