import { css, ThemedStyledProps } from 'styled-components';

import { Colors, FontSize } from '../../../theme';
import { TypographyProps } from './types';

export const fontSize = (fontSize: FontSize) => css`
  font-size: ${({ theme }) => theme.fontSizes[fontSize]};
`;

export const color = (color: Colors = 'black') => css`
  color: ${(props) => props.theme.colors[color]};
`;

export const bold = css`
  font-weight: bold;
`;

export const typographyMixin =
  (options?: Partial<TypographyProps>) =>
  <T extends TypographyProps, V>(props: ThemedStyledProps<T, V>) => {
    const currentProps = { ...options, ...props };

    return css`
      ${currentProps.fontSize && fontSize(currentProps.fontSize)}
      ${currentProps.color && color(currentProps.color)}
  ${currentProps.bold && bold}
    `;
  };
