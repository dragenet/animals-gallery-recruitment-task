import { FC } from 'react';

import { ButtonPrimary, ButtonSecondary } from '~/components/atoms/Button/parts';
import { ButtonBaseProps, ButtonVariant } from '~/components/atoms/Button/types';

export const buttonVariantMapping: Record<ButtonVariant, FC<ButtonBaseProps<unknown>>> = {
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};
