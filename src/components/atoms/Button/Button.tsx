import { buttonVariantMapping } from '~/components/atoms/Button/constants';

import { ButtonProps } from './types';

export const Button = <T,>({ children, variant = 'primary', ...props }: ButtonProps<T>) => {
  const Button = buttonVariantMapping[variant];
  return (
    <>
      <Button {...props}>{children}</Button>
    </>
  );
};
